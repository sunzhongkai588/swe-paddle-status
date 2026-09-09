(() => {
  "use strict";

  const history = window.SWE_PADDLE_DATA;
  const update = window.SWE_PADDLE_UPDATE;
  if (!history || !update || update.schemaVersion !== 1) {
    throw new Error("SWE-Paddle historical data or current validation update is unavailable.");
  }
  const failureById = new Map(Object.entries(history.failures).map(([id, value]) => [Number(id), value]));
  const noticeById = new Map(Object.entries(history.notices || {}).map(([id, value]) => [Number(id), value]));
  const directIds = new Set(history.directTaskIds);
  const historicalById = new Map(history.tasks.map((task) => [task.id, task]));
  const classified = [...directIds, ...noticeById.keys(), ...failureById.keys()];
  const currentById = new Map(update.tasks.map((task) => [task.id, task]));
  const currentStatuses = ["strict_pass", "compatible_pass", "needs_fix", "failed", "incomplete"];
  const evidenceKinds = ["exact_native", "exact_python", "compatible_native", "incomplete"];
  const changedIds = [...update.meta.newTaskIds, ...update.meta.modifiedTaskIds];
  const unchangedIds = new Set(update.meta.unchangedTaskIds);
  const sameIds = (left, right) => left.length === right.length && new Set(left).size === left.length && left.every((id) => right.includes(id));

  // Missing evidence never defaults to a pass in either snapshot.
  if (
    historicalById.size !== history.tasks.length || directIds.size !== history.directTaskIds.length ||
    !sameIds(classified, history.tasks.map((task) => task.id)) ||
    history.meta.total !== history.tasks.length ||
    history.meta.corePassedTaskPackagePassed !== directIds.size ||
    history.meta.corePassedTaskPackageFailed !== noticeById.size ||
    history.meta.coreFailed !== failureById.size ||
    update.meta.baselineSnapshot !== history.meta.snapshot ||
    currentById.size !== update.tasks.length ||
    !sameIds(changedIds, update.tasks.map((task) => task.id)) ||
    unchangedIds.size !== update.meta.unchangedTaskIds.length ||
    !sameIds(update.meta.modifiedTaskIds, update.tasks.filter((task) => task.changeKind === "modified").map((task) => task.id)) ||
    !sameIds(update.meta.newTaskIds, update.tasks.filter((task) => task.changeKind === "new").map((task) => task.id)) ||
    update.meta.newTaskIds.some((id) => historicalById.has(id)) ||
    update.meta.modifiedTaskIds.some((id) => !historicalById.has(id)) ||
    !sameIds([...unchangedIds], history.tasks.filter((task) => !currentById.has(task.id)).map((task) => task.id)) ||
    update.tasks.some((task) => !Number.isInteger(task.id) || !currentStatuses.includes(task.status) ||
      !evidenceKinds.includes(task.evidence) || !task.reason || !task.action ||
      (task.status === "needs_fix" && (task.packageChangeRequired !== true || task.evidence !== "compatible_native")) ||
      (task.status === "incomplete" && (task.f2p !== null || task.p2p !== null ||
        task.packageChangeRequired !== null || task.evidence !== "incomplete")) ||
      (["strict_pass", "compatible_pass"].includes(task.status) && task.packageChangeRequired !== false) ||
      (task.status === "strict_pass" && !["exact_native", "exact_python"].includes(task.evidence)) ||
      (task.status === "compatible_pass" && task.evidence !== "compatible_native") ||
      (["strict_pass", "compatible_pass", "needs_fix"].includes(task.status) &&
        (!Number.isInteger(task.f2p) || task.f2p < 1 || !Number.isInteger(task.p2p) || task.p2p < 1)))
  ) {
    throw new Error("SWE-Paddle snapshot inventories or explicit classifications are inconsistent.");
  }

  const tasks = [
    ...history.tasks.filter((task) => unchangedIds.has(task.id)).map((task) => ({ ...task, status: "historical" })),
    ...update.tasks.map((task) => ({ ...historicalById.get(task.id), ...task })),
  ].sort((left, right) => left.id - right.id);
  const taskById = new Map(tasks.map((task) => [task.id, task]));
  const statusCounts = Object.fromEntries([...currentStatuses, "historical"].map((status) => [status, tasks.filter((task) => task.status === status).length]));
  const reproduced = update.tasks.filter((task) => ["strict_pass", "compatible_pass", "needs_fix"].includes(task.status));
  const counts = {
    examined: update.tasks.length,
    reproducedPassed: reproduced.length,
    packageUnchanged: reproduced.filter((task) => task.packageChangeRequired === false).length,
    packageNeedsFix: statusCounts.needs_fix,
    notPassed: statusCounts.failed,
    environmentIncomplete: statusCounts.incomplete,
    strictPassed: reproduced.filter((task) => ["exact_native", "exact_python"].includes(task.evidence)).length,
    compatiblePassed: reproduced.filter((task) => task.evidence === "compatible_native").length,
  };
  if (tasks.length !== update.meta.total || taskById.size !== tasks.length ||
    new Set(update.meta.proposalOnlyIds).size !== update.meta.proposalOnlyIds.length ||
    update.meta.proposalOnlyIds.some((id) => taskById.has(id)) ||
    Object.entries(counts).some(([key, value]) => update.counts[key] !== value) ||
    counts.reproducedPassed !== counts.strictPassed + counts.compatiblePassed ||
    counts.examined !== counts.reproducedPassed + counts.notPassed + counts.environmentIncomplete) {
    throw new Error("SWE-Paddle current validation counts do not match their task evidence.");
  }

  const typeLabels = { bugfix: "Bugfix", feature: "Feature", refactor: "Refactor", unknown: "类型未确认" };
  const statusLabels = {
    strict_pass: "本轮通过 · 严格证据",
    compatible_pass: "本轮通过 · 兼容诊断",
    needs_fix: "本轮兼容复现 · 入口待修",
    failed: "本轮验证未通过",
    incomplete: "本轮环境未完成",
    historical: "历史记录 · 本轮未重跑",
  };
  const themes = {
    strict_pass: { color: "#237c62", background: "#e3f7f0" },
    compatible_pass: { color: "#366ac9", background: "#eaf0ff" },
    needs_fix: { color: "#946414", background: "#fff5dc" },
    failed: { color: "#b65146", background: "#fff0ed" },
    incomplete: { color: "#735ac7", background: "#f1edff" },
    historical: { color: "#637188", background: "#edf1f6" },
  };
  const evidenceLabels = {
    exact_native: "严格证据：精确 Base / Gold 原生编译",
    exact_python: "严格证据：精确被测 Python 源码",
    compatible_native: "兼容环境诊断：非精确原生构建",
    incomplete: "环境证据未完成",
  };
  const elements = Object.fromEntries([
    "snapshot-short", "footer-snapshot", "updated-at", "progress-ring", "pass-rate", "hero-direct",
    "hero-needs-fix", "hero-core-failed", "metric-total", "metric-direct", "metric-needs-fix",
    "metric-core-failed", "fix-summary", "fix-grid", "category-summary", "issue-grid",
    "correction-title", "correction-summary", "correction-caveat", "search-input", "status-filter",
    "type-filter", "author-filter", "clear-filters", "visible-count", "inventory-total",
    "task-table-body", "empty-state", "task-dialog", "dialog-content", "evidence-strict", "evidence-compatible",
  ].map((id) => [id, document.getElementById(id)]));
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const authorLabel = (author) => author === "unknown" || !author ? "作者未确认" : history.authors[author]?.label || author;
  const authorProfile = (author) => author === "unknown" || !author ? null : history.authors[author]?.profile || `https://github.com/${encodeURIComponent(author)}`;
  const initials = (name) => String(name).split(/[\s_-]+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  const taskUrl = (task, snapshot = update.meta.snapshot) => `${history.meta.repository}/tree/${snapshot}/swe-paddle/tasks/${task.taskPath || `PaddlePaddle__Paddle-${task.id}`}`;
  const sourcePrUrl = (id) => `${history.meta.sourcePrBase}${id}`;
  const contributionPrUrl = (id) => `${history.meta.repository}/pull/${id}`;
  const matrix = (task) => `F2P ${task.f2p === null || task.f2p === undefined ? "未完成" : task.f2p} / P2P ${task.p2p === null || task.p2p === undefined ? "未完成" : task.p2p}`;
  const packageLabel = (task) => task.packageChangeRequired === true ? "原包需要修改" : task.packageChangeRequired === false ? "原包未发现必须修改项" : "原包修改需求尚未确定";

  function authorMarkup(task, prefix = "") {
    const label = authorLabel(task.author);
    const profile = authorProfile(task.author);
    const body = `<span class="avatar" aria-hidden="true">${escapeHtml(initials(label))}</span>${escapeHtml(prefix + label)}`;
    return profile ? `<a class="author-cell" href="${escapeHtml(profile)}" target="_blank" rel="noreferrer">${body}</a>` : `<span class="author-cell">${body}</span>`;
  }

  function historicalLabel(task) {
    if (failureById.has(task.id)) return failureById.get(task.id).coreStatus === "pending" ? "历史：核心验证待完成" : "历史：核心验证未通过";
    if (noticeById.has(task.id)) return "历史：核心通过 · Task 包待修";
    if (directIds.has(task.id)) return "历史两层通过 · 本轮未重跑";
    throw new Error(`Historical task ${task.id} has no explicit classification.`);
  }

  function renderOverview() {
    const rate = counts.reproducedPassed / counts.examined * 100;
    for (const id of ["snapshot-short", "footer-snapshot"]) elements[id].textContent = update.meta.snapshot.slice(0, 8);
    elements["updated-at"].textContent = update.meta.updatedAt;
    elements["updated-at"].dateTime = update.meta.updatedAt;
    elements["progress-ring"].style.setProperty("--progress", `${rate * 3.6}deg`);
    elements["progress-ring"].setAttribute("aria-label", `本轮 F2P/P2P 复现通过 ${counts.reproducedPassed} / ${counts.examined}，${rate.toFixed(1)}%；含兼容环境，不是正式可评测率`);
    elements["pass-rate"].textContent = `${rate.toFixed(1)}%`;
    document.querySelector(".progress-center span").textContent = `复现通过 · ${counts.reproducedPassed} / ${counts.examined}`;
    for (const [id, value] of Object.entries({
      "hero-direct": counts.reproducedPassed, "hero-needs-fix": counts.notPassed,
      "hero-core-failed": counts.environmentIncomplete, "metric-total": tasks.length,
      "metric-direct": counts.examined, "metric-needs-fix": counts.reproducedPassed,
      "metric-core-failed": counts.notPassed + counts.environmentIncomplete,
      "evidence-strict": counts.strictPassed, "evidence-compatible": counts.compatiblePassed,
      "inventory-total": tasks.length,
    })) elements[id].textContent = value;
    document.getElementById("readiness-note").textContent = `${counts.reproducedPassed} 条中，${counts.packageUnchanged} 条原包无必改项，${counts.packageNeedsFix} 条需修入口；包含兼容环境诊断，不代表 ${counts.reproducedPassed} 条均可正式评测。`;
    document.getElementById("latest-report-link").href = update.meta.reportUrl;
    for (const [status, count] of Object.entries(statusCounts)) elements["status-filter"].querySelector(`[value="${status}"]`).textContent = `${statusLabels[status]}（${count}）`;
  }

  function renderCards() {
    elements["fix-summary"].innerHTML = `<span class="category-pill" style="--category-color: #946414"><i aria-hidden="true"></i>测试入口 / 导入路径 <strong>${counts.packageNeedsFix}</strong></span>`;
    elements["category-summary"].innerHTML = ["failed", "incomplete"].map((status) => `<span class="category-pill" style="--category-color: ${themes[status].color}"><i aria-hidden="true"></i>${escapeHtml(statusLabels[status])} <strong>${statusCounts[status]}</strong></span>`).join("");
    for (const [id, statuses] of [["fix-grid", ["needs_fix"]], ["issue-grid", ["failed", "incomplete"]]]) {
      elements[id].innerHTML = update.tasks.filter((task) => statuses.includes(task.status)).map((task) => {
        const theme = themes[task.status];
        return `<article class="${task.status === "needs_fix" ? "fix-card" : "issue-card"}" role="button" tabindex="0" data-task-id="${task.id}" aria-label="查看 Task ${task.id} 验证详情" style="--fix-color: ${theme.color}; --category-color: ${theme.color}; --category-bg: ${theme.background}">
          <div class="issue-top"><span class="issue-id">#${task.id}</span><span class="issue-category">${escapeHtml(statusLabels[task.status])}</span></div>
          <h3>${escapeHtml(task.title)}</h3><p class="matrix-line">${escapeHtml(matrix(task))}</p>
          <p class="card-evidence">${escapeHtml(evidenceLabels[task.evidence])}</p>
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
    elements["correction-caveat"].textContent = `以下为 ${history.meta.snapshot.slice(0, 8)} 的历史说明，不覆盖本轮结果。${history.correction.caveat}`;
    const button = document.querySelector("#correction-banner [data-task-id]");
    button.dataset.taskId = history.correction.id;
    button.textContent = `查看历史 ${history.correction.id}`;
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
    for (const [id, key] of [["status-filter", "status"], ["type-filter", "type"], ["author-filter", "author"]]) {
      const value = params.get(key);
      elements[id].value = [...elements[id].options].some((option) => option.value === value) ? value : "all";
    }
  }

  function updateFilterUrl() {
    const params = new URLSearchParams();
    if (elements["search-input"].value.trim()) params.set("q", elements["search-input"].value.trim());
    for (const [id, key] of [["status-filter", "status"], ["type-filter", "type"], ["author-filter", "author"]]) if (elements[id].value !== "all") params.set(key, elements[id].value);
    const query = params.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  }

  function renderTable() {
    const query = elements["search-input"].value.trim().toLocaleLowerCase("zh-CN");
    const visible = tasks.filter((task) => {
      const haystack = `${task.id} ${task.title} ${task.author} ${authorLabel(task.author)}`.toLocaleLowerCase("zh-CN");
      return (!query || haystack.includes(query)) &&
        (elements["status-filter"].value === "all" || elements["status-filter"].value === task.status) &&
        (elements["type-filter"].value === "all" || elements["type-filter"].value === (task.type || "unknown")) &&
        (elements["author-filter"].value === "all" || elements["author-filter"].value === (task.author || "unknown"));
    });
    elements["visible-count"].textContent = visible.length;
    elements["empty-state"].hidden = visible.length !== 0;
    elements["task-table-body"].hidden = visible.length === 0;
    elements["task-table-body"].innerHTML = visible.map((task) => {
      const historical = task.status === "historical";
      const detail = historical ? historicalLabel(task) : `${task.changeKind === "new" ? "新增" : "修改"} · ${matrix(task)}`;
      return `<tr data-validation-status="${task.status}">
        <td><span class="task-cell" style="--status-color: ${themes[task.status].color}">#${task.id}</span></td>
        <td class="topic-cell">${escapeHtml(task.title)}</td>
        <td><span class="type-chip ${escapeHtml(task.type || "unknown")}">${escapeHtml(typeLabels[task.type] || typeLabels.unknown)}</span></td>
        <td>${authorMarkup(task)}</td>
        <td><span class="status-chip ${task.status}">${escapeHtml(statusLabels[task.status])}</span><small class="status-detail${historical && !directIds.has(task.id) ? " historical-attention" : ""}">${escapeHtml(detail)}</small></td>
        <td><button class="table-action" type="button" data-task-id="${task.id}">详情 <span aria-hidden="true">→</span></button></td>
      </tr>`;
    }).join("");
    updateFilterUrl();
  }

  function renderDialog(task) {
    const historical = task.status === "historical";
    const failure = historical ? failureById.get(task.id) : null;
    const notice = historical ? noticeById.get(task.id) : null;
    const prior = failure || notice;
    const historicalPass = historical && directIds.has(task.id);
    if (historical && !prior && !historicalPass) throw new Error(`Historical task ${task.id} has no evidence record.`);
    const snapshot = historical ? history.meta.snapshot : update.meta.snapshot;
    const theme = themes[task.status];
    const contributionPr = prior?.contributionPr || (historical && task.id === history.correction.id ? history.correction.contributionPr : null);
    const result = historical ? prior?.matrix || (historicalPass ? "历史核心验证通过 · 历史 Task 包通过" : "历史证据未确定") : matrix(task);
    const reason = historical ? prior ? prior.reason : "历史记录显示核心 F2P/P2P 与原始任务包均通过；该任务未在本轮重新执行。" : task.reason;
    const action = historical ? prior?.action || "保留历史结论；进入新的正式评测前仍需按目标方案确认环境、题面和其他质量门禁。" : task.action;
    elements["task-dialog"].style.setProperty("--dialog-color", theme.color);
    elements["task-dialog"].style.setProperty("--dialog-bg", theme.background);
    elements["dialog-content"].innerHTML = `
      <span class="dialog-eyebrow">${historical ? "HISTORICAL RECORD · NOT RERUN" : "CURRENT F2P / P2P VALIDATION"}</span>
      <div class="dialog-title-row"><h2 id="dialog-title">Task #${task.id}</h2><span class="status-chip ${task.status}">${escapeHtml(statusLabels[task.status])}</span></div>
      <p class="dialog-topic">${escapeHtml(task.title)}</p>
      <div class="dialog-meta"><span class="type-chip ${escapeHtml(task.type || "unknown")}">${escapeHtml(typeLabels[task.type] || typeLabels.unknown)}</span>${authorMarkup(task, "样本作者：")}
        ${failure?.sourceAuthor ? `<a class="author-cell" href="${escapeHtml(failure.sourceAuthorProfile)}" target="_blank" rel="noreferrer">源 PR 作者：${escapeHtml(failure.sourceAuthor)}</a>` : ""}
      </div>
      <p class="scope-note">${historical ? `历史证据快照 ${escapeHtml(snapshot.slice(0, 8))}；本轮未重跑，不作为当前验证通过。${escapeHtml(historicalLabel(task))}。` : `本轮${task.changeKind === "new" ? "新增" : "修改"}任务；输入快照 ${escapeHtml(snapshot.slice(0, 8))}。本轮验证不构成正式评测资格确认。`}</p>
      <div class="dialog-panel matrix-panel"><small>${historical ? "历史验证矩阵（原记录）" : "本轮验证矩阵"}</small><strong>${escapeHtml(result)}</strong>${!historical && task.countsNote ? `<p class="matrix-note">${escapeHtml(task.countsNote)}</p>` : ""}</div>
      ${!historical ? `<div class="dialog-section"><small>证据层级与原始任务包</small><p>${escapeHtml(evidenceLabels[task.evidence])}；${escapeHtml(packageLabel(task))}。</p></div>` : ""}
      <div class="dialog-section"><small>${historical ? "历史结论 / 原因（保留原记录）" : "本轮结论 / 原因"}</small><p>${escapeHtml(reason)}</p></div>
      <div class="dialog-section action-box"><small>${historical ? "历史建议（本轮未复验）" : "下一步"}</small><p>${escapeHtml(action)}</p></div>
      <div class="dialog-links">
        <a href="${escapeHtml(taskUrl(task))}" target="_blank" rel="noreferrer">最新快照任务包 ↗</a>
        ${historical ? `<a href="${escapeHtml(taskUrl(task, history.meta.snapshot))}" target="_blank" rel="noreferrer">历史证据对应任务包 ↗</a>` : `<a href="${escapeHtml(update.meta.reportUrl)}">本轮逐题报告 ↗</a>`}
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
    for (const id of ["search-input", "status-filter", "type-filter", "author-filter"]) elements[id].addEventListener(id === "search-input" ? "input" : "change", renderTable);
    elements["clear-filters"].addEventListener("click", () => {
      elements["search-input"].value = "";
      for (const id of ["status-filter", "type-filter", "author-filter"]) elements[id].value = "all";
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
