(() => {
  "use strict";

  const history = window.SWE_PADDLE_DATA;
  const update = window.SWE_PADDLE_UPDATE;
  const data = window.SWE_PADDLE_STATUS;
  if (!history || !update || !data || data.schemaVersion !== 1) {
    throw new Error("SWE-Paddle source records or overall status are unavailable.");
  }
  const failureById = new Map(Object.entries(history.failures).map(([id, value]) => [Number(id), value]));
  const noticeById = new Map(Object.entries(history.notices || {}).map(([id, value]) => [Number(id), value]));
  const statuses = ["passed", "needs_fix", "failed", "incomplete"];
  const evidenceKinds = ["exact_native", "exact_python", "compatible_native", "historical", "incomplete"];
  const tasks = [...data.tasks].sort((left, right) => left.id - right.id);
  const taskById = new Map(tasks.map((task) => [task.id, task]));
  const sameIds = (left, right) => left.length === right.length && new Set(left).size === left.length && left.every((id) => right.includes(id));
  const countValid = (value) => value === null || Number.isInteger(value) && value >= 0;

  // The derived module checks original records; the view also fails closed on contradictions.
  // Retained evidence remains valid without being upgraded to newly compiled evidence.
  if (
    data.meta.snapshot !== update.meta.snapshot || tasks.length !== data.meta.total || taskById.size !== tasks.length ||
    !sameIds(tasks.map((task) => task.id), [...update.meta.unchangedTaskIds, ...update.tasks.map((task) => task.id)]) ||
    !sameIds(tasks.filter((task) => task.recordSource === "latest").map((task) => task.id), update.tasks.map((task) => task.id)) ||
    !sameIds(tasks.filter((task) => task.recordSource === "retained").map((task) => task.id), update.meta.unchangedTaskIds) ||
    new Set(data.meta.proposalOnlyIds).size !== data.meta.proposalOnlyIds.length ||
    data.meta.proposalOnlyIds.some((id) => taskById.has(id)) ||
    tasks.some((task) => !Number.isInteger(task.id) || !statuses.includes(task.status) ||
      !evidenceKinds.includes(task.evidence) || !task.reason || !task.action || !task.matrix || !task.recordUpdatedAt ||
      !countValid(task.f2p) || !countValid(task.p2p) ||
      !["latest", "retained"].includes(task.recordSource) ||
      task.recordSnapshot !== (task.recordSource === "latest" ? update.meta.snapshot : history.meta.snapshot) ||
      (task.recordSource === "retained" && (!["historical", "incomplete"].includes(task.evidence) || task.f2p !== null || task.p2p !== null)) ||
      (task.status === "needs_fix" && task.packageChangeRequired !== true) ||
      (task.status === "passed" && task.packageChangeRequired !== false) ||
      (task.status === "incomplete" && (task.f2p !== null || task.p2p !== null ||
        task.packageChangeRequired !== null || task.evidence !== "incomplete")) ||
      (task.recordSource === "latest" && ["passed", "needs_fix"].includes(task.status) &&
        (!Number.isInteger(task.f2p) || task.f2p < 1 || !Number.isInteger(task.p2p) || task.p2p < 1)))
  ) {
    throw new Error("SWE-Paddle overall inventory, evidence or classifications are inconsistent.");
  }
  const statusCounts = Object.fromEntries(statuses.map((status) => [status, tasks.filter((task) => task.status === status).length]));
  const passedTasks = tasks.filter((task) => ["passed", "needs_fix"].includes(task.status));
  const counts = {
    total: tasks.length,
    passed: passedTasks.length,
    packageUnchanged: statusCounts.passed,
    packageNeedsFix: statusCounts.needs_fix,
    failed: statusCounts.failed,
    incomplete: statusCounts.incomplete,
  };
  const evidenceCounts = {
    strictPassed: passedTasks.filter((task) => ["exact_native", "exact_python"].includes(task.evidence)).length,
    compatiblePassed: passedTasks.filter((task) => task.evidence === "compatible_native").length,
    retainedPassed: passedTasks.filter((task) => task.evidence === "historical").length,
  };
  if (Object.entries(counts).some(([key, value]) => data.counts[key] !== value) ||
    Object.entries(evidenceCounts).some(([key, value]) => data.evidenceCounts[key] !== value) ||
    counts.passed !== Object.values(evidenceCounts).reduce((sum, count) => sum + count, 0) ||
    counts.total !== counts.passed + counts.failed + counts.incomplete) {
    throw new Error("SWE-Paddle overall counts do not match explicit task records.");
  }

  const typeLabels = { bugfix: "Bugfix", feature: "Feature", refactor: "Refactor", unknown: "类型未确认" };
  const statusLabels = {
    passed: "通过 · 原包无必改项",
    needs_fix: "通过 · 任务包待修",
    failed: "验证未通过",
    incomplete: "验证未完成",
  };
  const themes = {
    passed: { color: "#237c62", background: "#e3f7f0" },
    needs_fix: { color: "#946414", background: "#fff5dc" },
    failed: { color: "#b65146", background: "#fff0ed" },
    incomplete: { color: "#735ac7", background: "#f1edff" },
  };
  const evidenceLabels = {
    exact_native: "严格证据：精确 Base / Gold 原生编译",
    exact_python: "严格证据：精确被测 Python 源码",
    compatible_native: "兼容环境诊断：非精确原生构建",
    historical: "沿用既有验证证据：保留原证据层级",
    incomplete: "环境或验证证据未完成",
  };
  const elements = Object.fromEntries([
    "snapshot-short", "footer-snapshot", "updated-at", "progress-ring", "pass-rate", "hero-direct",
    "hero-needs-fix", "hero-core-failed", "metric-total", "metric-direct", "metric-needs-fix",
    "metric-core-failed", "fix-summary", "fix-grid", "category-summary", "issue-grid",
    "correction-title", "correction-summary", "correction-caveat", "search-input", "status-filter",
    "type-filter", "author-filter", "source-filter", "clear-filters", "visible-count", "inventory-total",
    "task-table-body", "empty-state", "task-dialog", "dialog-content", "evidence-strict", "evidence-compatible", "evidence-retained",
  ].map((id) => [id, document.getElementById(id)]));
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const authorLabel = (author) => author === "unknown" || !author ? "作者未确认" : history.authors[author]?.label || author;
  const authorProfile = (author) => author === "unknown" || !author ? null : history.authors[author]?.profile || `https://github.com/${encodeURIComponent(author)}`;
  const initials = (name) => String(name).split(/[\s_-]+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  const taskUrl = (task, snapshot = data.meta.snapshot) => `${history.meta.repository}/tree/${snapshot}/swe-paddle/tasks/${task.taskPath || `PaddlePaddle__Paddle-${task.id}`}`;
  const sourcePrUrl = (id) => `${history.meta.sourcePrBase}${id}`;
  const contributionPrUrl = (id) => `${history.meta.repository}/pull/${id}`;
  const matrix = (task) => task.matrix;
  const sourceLabel = (task) => task.recordSource === "latest" ? "新验证记录" : "沿用既有记录";
  const packageLabel = (task) => task.packageChangeRequired === true ? "原包需要修改" : task.packageChangeRequired === false ? "原包未发现必须修改项" : "原包修改需求尚未确定";

  function authorMarkup(task, prefix = "") {
    const label = authorLabel(task.author);
    const profile = authorProfile(task.author);
    const body = `<span class="avatar" aria-hidden="true">${escapeHtml(initials(label))}</span>${escapeHtml(prefix + label)}`;
    return profile ? `<a class="author-cell" href="${escapeHtml(profile)}" target="_blank" rel="noreferrer">${body}</a>` : `<span class="author-cell">${body}</span>`;
  }

  function renderOverview() {
    const rate = counts.passed / counts.total * 100;
    for (const id of ["snapshot-short", "footer-snapshot"]) elements[id].textContent = data.meta.snapshot.slice(0, 8);
    elements["updated-at"].textContent = data.meta.updatedAt;
    elements["updated-at"].dateTime = data.meta.updatedAt;
    elements["progress-ring"].style.setProperty("--progress", `${rate * 3.6}deg`);
    elements["progress-ring"].setAttribute("aria-label", `整体 F2P/P2P 验证通过 ${counts.passed} / ${counts.total}，${rate.toFixed(1)}%；含兼容环境及沿用记录，不是正式可评测率`);
    elements["pass-rate"].textContent = `${rate.toFixed(1)}%`;
    document.querySelector(".progress-center span").textContent = `验证通过 · ${counts.passed} / ${counts.total}`;
    for (const [id, value] of Object.entries({
      "hero-direct": counts.passed, "hero-needs-fix": counts.failed,
      "hero-core-failed": counts.incomplete, "metric-total": counts.total,
      "metric-direct": counts.packageUnchanged, "metric-needs-fix": counts.packageNeedsFix,
      "metric-core-failed": counts.failed + counts.incomplete,
      "evidence-strict": evidenceCounts.strictPassed, "evidence-compatible": evidenceCounts.compatiblePassed,
      "evidence-retained": evidenceCounts.retainedPassed,
      "inventory-total": tasks.length,
    })) elements[id].textContent = value;
    document.getElementById("readiness-note").textContent = `${counts.passed} 条通过 = ${counts.packageUnchanged} 条原包无必改项 + ${counts.packageNeedsFix} 条原包待修。原包无必改项不等于均已满足精确原生环境和正式评测门禁。`;
    document.getElementById("latest-report-link").href = data.meta.reportUrl;
    for (const [status, count] of Object.entries(statusCounts)) elements["status-filter"].querySelector(`[value="${status}"]`).textContent = `${statusLabels[status]}（${count}）`;
  }

  function renderCards() {
    elements["fix-summary"].innerHTML = `<span class="category-pill" style="--category-color: #946414"><i aria-hidden="true"></i>入口 / 补丁 / 断言待修 <strong>${counts.packageNeedsFix}</strong></span>`;
    elements["category-summary"].innerHTML = ["failed", "incomplete"].map((status) => `<span class="category-pill" style="--category-color: ${themes[status].color}"><i aria-hidden="true"></i>${escapeHtml(statusLabels[status])} <strong>${statusCounts[status]}</strong></span>`).join("");
    for (const [id, statuses] of [["fix-grid", ["needs_fix"]], ["issue-grid", ["failed", "incomplete"]]]) {
      elements[id].innerHTML = tasks.filter((task) => statuses.includes(task.status)).map((task) => {
        const theme = themes[task.status];
        return `<article class="${task.status === "needs_fix" ? "fix-card" : "issue-card"}" role="button" tabindex="0" data-task-id="${task.id}" aria-label="查看 Task ${task.id} 验证详情" style="--fix-color: ${theme.color}; --category-color: ${theme.color}; --category-bg: ${theme.background}">
          <div class="issue-top"><span class="issue-id">#${task.id}</span><span class="issue-category">${escapeHtml(statusLabels[task.status])}</span></div>
          <h3>${escapeHtml(task.title)}</h3><p class="matrix-line">${escapeHtml(matrix(task))}</p>
          <p class="card-evidence">${escapeHtml(sourceLabel(task))} · ${escapeHtml(evidenceLabels[task.evidence])}</p>
          <div class="fix-detail"><small>当前问题</small><p>${escapeHtml(task.reason)}</p></div>
          <div class="fix-detail fix-action"><small>下一步</small><p>${escapeHtml(task.action)}</p></div>
          <div class="issue-footer"><span class="author-mini">${escapeHtml(authorLabel(task.author))}</span><span class="view-link">查看证据 →</span></div>
        </article>`;
      }).join("");
    }
  }

  function renderCorrection() {
    elements["correction-title"].textContent = history.correction.title;
    elements["correction-summary"].textContent = history.correction.summary;
    elements["correction-caveat"].textContent = `以下为 ${history.meta.snapshot.slice(0, 8)} 的统计更正过程；当前整体状态以全表为准。${history.correction.caveat}`;
    const button = document.querySelector("#correction-banner [data-task-id]");
    button.dataset.taskId = history.correction.id;
    button.textContent = `查看任务 ${history.correction.id}`;
  }

  function populateAuthors() {
    const authors = tasks.reduce((result, task) => { result[task.author || "unknown"] = (result[task.author || "unknown"] || 0) + 1; return result; }, {});
    Object.entries(authors).sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0])).forEach(([author, count]) => {
      const option = document.createElement("option");
      option.value = author;
      option.textContent = `${authorLabel(author)} (${count})`;
      elements["author-filter"].append(option);
    });
  }

  function readFiltersFromUrl() {
    const params = new URLSearchParams(window.location.search);
    elements["search-input"].value = params.get("q") || "";
    for (const [id, key] of [["status-filter", "status"], ["source-filter", "source"], ["type-filter", "type"], ["author-filter", "author"]]) {
      const value = params.get(key);
      elements[id].value = [...elements[id].options].some((option) => option.value === value) ? value : "all";
    }
  }

  function updateFilterUrl() {
    const params = new URLSearchParams();
    if (elements["search-input"].value.trim()) params.set("q", elements["search-input"].value.trim());
    for (const [id, key] of [["status-filter", "status"], ["source-filter", "source"], ["type-filter", "type"], ["author-filter", "author"]]) if (elements[id].value !== "all") params.set(key, elements[id].value);
    const query = params.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  }

  function renderTable() {
    const query = elements["search-input"].value.trim().toLocaleLowerCase("zh-CN");
    const visible = tasks.filter((task) => {
      const haystack = `${task.id} ${task.title} ${task.author} ${authorLabel(task.author)}`.toLocaleLowerCase("zh-CN");
      return (!query || haystack.includes(query)) &&
        (elements["status-filter"].value === "all" || elements["status-filter"].value === task.status) &&
        (elements["source-filter"].value === "all" || elements["source-filter"].value === task.recordSource) &&
        (elements["type-filter"].value === "all" || elements["type-filter"].value === (task.type || "unknown")) &&
        (elements["author-filter"].value === "all" || elements["author-filter"].value === (task.author || "unknown"));
    });
    elements["visible-count"].textContent = visible.length;
    elements["empty-state"].hidden = visible.length !== 0;
    elements["task-table-body"].hidden = visible.length === 0;
    elements["task-table-body"].innerHTML = visible.map((task) => {
      const detail = `${sourceLabel(task)} · 记录更新 ${task.recordUpdatedAt}`;
      return `<tr data-validation-status="${task.status}" data-record-source="${task.recordSource}">
        <td><span class="task-cell" style="--status-color: ${themes[task.status].color}">#${task.id}</span></td>
        <td class="topic-cell">${escapeHtml(task.title)}</td>
        <td><span class="type-chip ${escapeHtml(task.type || "unknown")}">${escapeHtml(typeLabels[task.type] || typeLabels.unknown)}</span></td>
        <td>${authorMarkup(task)}</td>
        <td><span class="status-chip ${task.status}">${escapeHtml(statusLabels[task.status])}</span><small class="status-detail">${escapeHtml(detail)}</small></td>
        <td><button class="table-action" type="button" data-task-id="${task.id}">详情 <span aria-hidden="true">→</span></button></td>
      </tr>`;
    }).join("");
    updateFilterUrl();
  }

  function renderDialog(task) {
    const retained = task.recordSource === "retained";
    const failure = retained ? failureById.get(task.id) : null;
    const notice = retained ? noticeById.get(task.id) : null;
    const prior = failure || notice;
    const theme = themes[task.status];
    const contributionPr = prior?.contributionPr || (retained && task.id === history.correction.id ? history.correction.contributionPr : null);
    elements["task-dialog"].style.setProperty("--dialog-color", theme.color);
    elements["task-dialog"].style.setProperty("--dialog-bg", theme.background);
    elements["dialog-content"].innerHTML = `
      <span class="dialog-eyebrow">OVERALL TASK STATUS · ${retained ? "RETAINED EVIDENCE" : "LATEST VALIDATION"}</span>
      <div class="dialog-title-row"><h2 id="dialog-title">Task #${task.id}</h2><span class="status-chip ${task.status}">${escapeHtml(statusLabels[task.status])}</span></div>
      <p class="dialog-topic">${escapeHtml(task.title)}</p>
      <div class="dialog-meta"><span class="type-chip ${escapeHtml(task.type || "unknown")}">${escapeHtml(typeLabels[task.type] || typeLabels.unknown)}</span>${authorMarkup(task, "样本作者：")}
        ${failure?.sourceAuthor ? `<a class="author-cell" href="${escapeHtml(failure.sourceAuthorProfile)}" target="_blank" rel="noreferrer">源 PR 作者：${escapeHtml(failure.sourceAuthor)}</a>` : ""}
      </div>
      <p class="scope-note">${retained ? "沿用既有验证记录：任务七文件未变，保留原验证结论及证据层级；本次未重新执行。" : "采用本次新增 / 修改任务的最新验证记录。"}记录对应快照 ${escapeHtml(task.recordSnapshot.slice(0, 8))}；记录更新日 ${escapeHtml(task.recordUpdatedAt)}（记录核对更新时间，非实际测试执行日期）。</p>
      <div class="dialog-panel matrix-panel"><small>验证矩阵${retained ? "（保留原记录）" : ""}</small><strong>${escapeHtml(matrix(task))}</strong>${task.countsNote ? `<p class="matrix-note">${escapeHtml(task.countsNote)}</p>` : ""}</div>
      <div class="dialog-section"><small>证据层级与原始任务包</small><p>${escapeHtml(evidenceLabels[task.evidence])}；${escapeHtml(packageLabel(task))}。</p></div>
      <div class="dialog-section"><small>结论 / 原因${retained ? "（保留原记录）" : ""}</small><p>${escapeHtml(task.reason)}</p></div>
      <div class="dialog-section action-box"><small>下一步${retained ? "（保留原建议）" : ""}</small><p>${escapeHtml(task.action)}</p></div>
      <div class="dialog-links">
        <a href="${escapeHtml(taskUrl(task))}" target="_blank" rel="noreferrer">最新快照任务包 ↗</a>
        ${retained ? `<a href="${escapeHtml(taskUrl(task, task.recordSnapshot))}" target="_blank" rel="noreferrer">验证记录对应任务包 ↗</a>` : ""}
        <a href="${escapeHtml(data.meta.reportUrl)}">整体逐题状态报告 ↗</a>
        <a href="${escapeHtml(sourcePrUrl(task.id))}" target="_blank" rel="noreferrer">源 Paddle PR ↗</a>
        ${contributionPr ? `<a href="${escapeHtml(contributionPrUrl(contributionPr))}" target="_blank" rel="noreferrer">社区 PR #${contributionPr} ↗</a>` : ""}
      </div>`;
  }

  function openTask(id) {
    const task = taskById.get(Number(id));
    if (!task) return;
    renderDialog(task);
    if (typeof elements["task-dialog"].showModal === "function") elements["task-dialog"].showModal();
    else elements["task-dialog"].setAttribute("open", "");
  }

  function bindEvents() {
    for (const id of ["search-input", "status-filter", "source-filter", "type-filter", "author-filter"]) elements[id].addEventListener(id === "search-input" ? "input" : "change", renderTable);
    elements["clear-filters"].addEventListener("click", () => {
      elements["search-input"].value = "";
      for (const id of ["status-filter", "source-filter", "type-filter", "author-filter"]) elements[id].value = "all";
      renderTable();
      elements["search-input"].focus();
    });
    document.addEventListener("click", (event) => { const trigger = event.target.closest("[data-task-id]"); if (trigger) openTask(trigger.dataset.taskId); });
    for (const id of ["fix-grid", "issue-grid"]) elements[id].addEventListener("keydown", (event) => {
      if (!["Enter", " "].includes(event.key)) return;
      const trigger = event.target.closest("[data-task-id]");
      if (trigger) { event.preventDefault(); openTask(trigger.dataset.taskId); }
    });
    document.querySelector(".dialog-close").addEventListener("click", () => elements["task-dialog"].close());
    elements["task-dialog"].addEventListener("click", (event) => { if (event.target === elements["task-dialog"]) elements["task-dialog"].close(); });
    window.addEventListener("popstate", () => { readFiltersFromUrl(); renderTable(); });
  }

  renderOverview();
  renderCards();
  renderCorrection();
  populateAuthors();
  readFiltersFromUrl();
  renderTable();
  bindEvents();
})();
