(() => {
  "use strict";

  const history = window.SWE_PADDLE_DATA;
  const update = window.SWE_PADDLE_UPDATE;
  const frozenData = window.SWE_PADDLE_ACCEPTANCE;
  const data = window.SWE_PADDLE_CURRENT_ACCEPTANCE;
  const issueExplanations = window.SWE_PADDLE_ISSUE_EXPLANATIONS;
  const verificationAudit = window.SWE_PADDLE_VERIFICATION_AUDIT;
  if (!history || !update || !frozenData || !data || data.schemaVersion !== 1 || !Array.isArray(data.tasks) || !data.meta || !data.counts || !data.evidenceCounts) {
    throw new Error("SWE-Paddle source records or full acceptance are unavailable.");
  }
  const statuses = ["passed", "needs_fix", "failed", "incomplete"];
  const evidenceKinds = ["exact_native", "exact_python", "exact_python_compatible_native", "lightweight_source", "lightweight_cpp", "patch_preflight", "environment_incomplete"];
  const tasks = [...data.tasks].sort((left, right) => left.id - right.id);
  const taskById = new Map(tasks.map((task) => [task.id, task]));
  const sameIds = (left, right) => left.length === right.length && new Set(left).size === left.length && left.every((id) => right.includes(id));
  const countValid = (value) => value === null || Number.isInteger(value) && value >= 0;

  // The current acceptance is a complete, explicit 105-task projection.
  // Historical records remain accessible but never supply a missing current row.
  if (
    data.meta.snapshot !== update.meta.snapshot || tasks.length !== data.meta.total || taskById.size !== tasks.length ||
    !sameIds(tasks.map((task) => task.id), [...update.meta.unchangedTaskIds, ...update.tasks.map((task) => task.id)]) ||
    !/^\d{4}-\d{2}-\d{2}$/.test(data.meta.updatedAt || "") ||
    !/^\d{4}-\d{2}-\d{2}T/.test(data.meta.validationRecordedAt || "") || Number.isNaN(Date.parse(data.meta.validationRecordedAt)) ||
    !/^[0-9a-f]{64}$/.test(data.meta.sourceReportSha256 || "") ||
    new Set(data.meta.proposalOnlyIds).size !== data.meta.proposalOnlyIds.length ||
    data.meta.proposalOnlyIds.some((id) => taskById.has(id)) ||
    tasks.some((task) => !Number.isInteger(task.id) || !statuses.includes(task.status) ||
      !evidenceKinds.includes(task.evidence) || ![task.reason, task.action, task.matrix, task.recordUpdatedAt].every((value) => typeof value === "string" && value.trim()) ||
      !countValid(task.f2p) || !countValid(task.p2p) ||
      task.recordSource !== "full_acceptance" || task.recordSnapshot !== data.meta.snapshot ||
      !/^[0-9a-f]{64}$/.test(task.selectedEvidenceSha256 || "") || typeof task.originalEntryPassed !== "boolean" ||
      (["passed", "needs_fix"].includes(task.status) && task.corePassed !== true) ||
      (task.status === "passed" && task.originalEntryPassed !== true) ||
      (task.status === "failed" && task.corePassed !== false) ||
      (task.status === "needs_fix" && task.packageChangeRequired !== true) ||
      (task.status === "passed" && task.packageChangeRequired !== false) ||
      (task.status === "incomplete" && (task.f2p !== null || task.p2p !== null ||
        task.packageChangeRequired !== null || task.corePassed !== null || task.evidence !== "environment_incomplete")) ||
      (task.evidence === "environment_incomplete" && task.status !== "incomplete") ||
      (task.evidence === "patch_preflight" && (task.status !== "failed" || task.f2p !== null || task.p2p !== null)) ||
      (["passed", "needs_fix"].includes(task.status) &&
        (!Number.isInteger(task.f2p) || task.f2p < 1 || !Number.isInteger(task.p2p) || task.p2p < 1)))
  ) {
    throw new Error("SWE-Paddle acceptance inventory, evidence or classifications are inconsistent.");
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
    exactPassed: passedTasks.filter((task) => ["exact_native", "exact_python"].includes(task.evidence)).length,
    compatiblePassed: passedTasks.filter((task) => task.evidence === "exact_python_compatible_native").length,
    lightweightPassed: passedTasks.filter((task) => ["lightweight_source", "lightweight_cpp"].includes(task.evidence)).length,
  };
  if (Object.entries(counts).some(([key, value]) => data.counts[key] !== value) ||
    Object.entries(evidenceCounts).some(([key, value]) => data.evidenceCounts[key] !== value) ||
    counts.passed !== Object.values(evidenceCounts).reduce((sum, count) => sum + count, 0) ||
    counts.total !== counts.passed + counts.failed + counts.incomplete) {
    throw new Error("SWE-Paddle acceptance counts do not match explicit task records.");
  }

  // Explanations supplement the frozen result; they never change its status or evidence.
  const needsFixIds = frozenData.tasks.filter((task) => task.status === "needs_fix").map((task) => task.id);
  if (!issueExplanations || issueExplanations.schemaVersion !== 1 || !issueExplanations.meta ||
    !Array.isArray(issueExplanations.tasks) ||
    issueExplanations.meta.snapshot !== frozenData.meta.snapshot ||
    issueExplanations.meta.sourceReportSha256 !== frozenData.meta.sourceReportSha256 ||
    typeof issueExplanations.meta.reportUrl !== "string" || !issueExplanations.meta.reportUrl.trim() ||
    !sameIds(issueExplanations.tasks.map((task) => task.id), needsFixIds) ||
    issueExplanations.tasks.some((task) => !Number.isInteger(task.id) ||
      typeof task.explanation !== "string" || !task.explanation.trim())) {
    throw new Error("SWE-Paddle issue explanations do not match the frozen acceptance.");
  }
  const hasText = (value) => typeof value === "string" && value.trim().length > 0;
  const validRounds = (rounds) => Array.isArray(rounds) && rounds.length === 2 &&
    rounds.every((status) => status === null || typeof status === "string");
  if (!verificationAudit || verificationAudit.schemaVersion !== 1 || !verificationAudit.meta ||
    !Array.isArray(verificationAudit.tasks) || verificationAudit.tasks.length !== 105 ||
    verificationAudit.meta.snapshot !== data.meta.snapshot ||
    verificationAudit.meta.sourceReportSha256 !== data.meta.sourceReportSha256 ||
    !/^\d{4}-\d{2}-\d{2}$/.test(verificationAudit.meta.reviewedAt || "") ||
    Number.isNaN(Date.parse(verificationAudit.meta.reviewedAt)) ||
    verificationAudit.meta.reportUrl !== "verification-audit-20260911.md" ||
    !sameIds(verificationAudit.tasks.map((task) => task.id), tasks.map((task) => task.id)) ||
    verificationAudit.tasks.some((task) => !Number.isInteger(task.id) ||
      ![task.summary, task.category, task.history, task.action, task.evidenceNote].every(hasText) ||
      !Array.isArray(task.checks) || task.checks.some((check) => !check ||
        !hasText(check.name) || !hasText(check.explanation) || !validRounds(check.base) || !validRounds(check.gold)))) {
    throw new Error("SWE-Paddle verification audit does not match the frozen 105-task acceptance.");
  }
  const auditById = new Map(verificationAudit.tasks.map((task) => [task.id, task]));

  const typeLabels = { bugfix: "Bugfix", feature: "Feature", refactor: "Refactor", unknown: "类型未确认" };
  const statusLabels = {
    passed: "通过 · 原包无必改项",
    needs_fix: "通过 · 任务包待修",
    failed: "验证未通过",
    incomplete: "硬件未完成",
  };
  const themes = {
    passed: { color: "#237c62", background: "#e3f7f0" },
    needs_fix: { color: "#946414", background: "#fff5dc" },
    failed: { color: "#b65146", background: "#fff0ed" },
    incomplete: { color: "#735ac7", background: "#f1edff" },
  };
  const evidenceLabels = {
    exact_native: "精确原生证据：被测 Base / Gold 与原生编译绑定",
    exact_python: "精确 Python 证据：不等于完整原生运行时已精确编译",
    exact_python_compatible_native: "精确 Python + 兼容原生载体：不是精确原生编译",
    lightweight_source: "README 允许的轻量源码路线：不是完整 Paddle 原生编译",
    lightweight_cpp: "README 允许的轻量 C++ 路线：不是完整 Paddle 原生编译",
    patch_preflight: "补丁预检证据：未形成动态 F2P/P2P 配对",
    environment_incomplete: "硬件环境未完成：CPU 局部观察不代替所需加速器验收",
  };
  const elements = Object.fromEntries([
    "snapshot-short", "footer-snapshot", "updated-at", "reviewed-at", "verification-audit-link", "progress-ring", "pass-rate", "hero-direct",
    "hero-needs-fix", "hero-core-failed", "metric-total", "metric-direct", "metric-needs-fix",
    "metric-core-failed", "fix-summary", "fix-grid", "category-summary", "issue-grid",
    "correction-title", "correction-summary", "correction-caveat", "search-input", "status-filter",
    "type-filter", "author-filter", "source-filter", "clear-filters", "visible-count", "inventory-total",
    "task-table-body", "empty-state", "task-dialog", "dialog-content", "evidence-strict", "evidence-compatible", "evidence-lightweight",
  ].map((id) => [id, document.getElementById(id)]));
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const authorLabel = (author) => author === "unknown" || !author ? "作者未确认" : history.authors[author]?.label || author;
  const authorProfile = (author) => author === "unknown" || !author ? null : history.authors[author]?.profile || `https://github.com/${encodeURIComponent(author)}`;
  const initials = (name) => String(name).split(/[\s_-]+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  const taskUrl = (task, snapshot = data.meta.snapshot) => `${history.meta.repository}/tree/${snapshot}/swe-paddle/tasks/${task.taskPath || `PaddlePaddle__Paddle-${task.id}`}`;
  const sourcePrUrl = (id) => `${history.meta.sourcePrBase}${id}`;
  const matrix = (task) => task.matrix;
  const sourceLabel = (task) => ({
    exact_native: "精确原生", exact_python: "精确 Python",
    exact_python_compatible_native: "精确 Python + 兼容原生",
    lightweight_source: "README 轻量源码", lightweight_cpp: "README 轻量 C++",
    patch_preflight: "补丁预检", environment_incomplete: "硬件未完成",
  })[task.evidence];
  const packageLabel = (task) => task.packageChangeRequired === true ? "原包需要修改" : task.packageChangeRequired === false ? "原包未发现必须修改项" : "原包修改需求尚未确定";
  const checkStatusLabels = {
    passed: "通过", failed: "失败", setup_error: "准备阶段报错", teardown_error: "清理阶段报错",
    collection_error: "收集测试时报错", error: "执行报错", aborted: "运行中断", skipped: "跳过",
    missing: "未执行", not_run: "未执行", xfailed: "预期失败", xpassed: "意外通过",
    target_sigabrt: "目标缺陷导致崩溃",
  };
  function checkStatusMarkup(status) {
    const raw = status === null || !status.trim() ? "missing" : status;
    const label = checkStatusLabels[raw] || `未识别状态（${raw}）`;
    const tone = raw === "passed" ? "pass" : ["failed", "target_sigabrt"].includes(raw) ? "fail" :
      ["setup_error", "teardown_error", "collection_error", "error", "aborted"].includes(raw) ? "error" : "other";
    return `<span class="check-status check-status-${tone}" title="${escapeHtml(raw)}">${escapeHtml(label)}</span>`;
  }

  function checkDetailsMarkup(audit) {
    return `<details class="check-details">
      <summary>查看全部 ${audit.checks.length} 项检查及两轮结果</summary>
      <p class="check-legend">Base = 未打修复补丁；Gold = 已打参考修复补丁。F2P：同一测试从 Base 失败变为 Gold 通过；P2P：同一测试在 Base 和 Gold 都通过。准备报错、跳过、中断和未执行需结合原因判断，不能直接当作有效 F2P。</p>
      <p class="check-legend">每一列对应保留记录中的一轮；没有记录显示“未执行”，不计为通过或失败。完整节点名可用于定位测试，窄屏可横向滚动表格。</p>
      ${audit.checks.length ? `<div class="check-table-wrap" role="region" aria-label="Task ${audit.id} 完整测试节点与两轮结果" tabindex="0">
        <table class="check-table">
          <caption>Task #${audit.id} · 逐项核对</caption>
          <thead><tr><th scope="col">完整测试节点 / 入口</th><th scope="col">Base 第 1 轮</th><th scope="col">Base 第 2 轮</th><th scope="col">Gold 第 1 轮</th><th scope="col">Gold 第 2 轮</th><th scope="col">这项结果说明什么</th></tr></thead>
          <tbody>${audit.checks.map((check) => `<tr><th scope="row"><code>${escapeHtml(check.name)}</code></th>${[...check.base, ...check.gold].map((status) => `<td>${checkStatusMarkup(status)}</td>`).join("")}<td class="check-explanation">${escapeHtml(check.explanation)}</td></tr>`).join("")}</tbody>
        </table>
      </div>` : `<p class="checks-empty">未执行：没有可展示的 Base / Gold 两轮测试节点记录。具体停在哪一步，见上方核对结论与证据范围。</p>`}
    </details>`;
  }

  function authorMarkup(task, prefix = "") {
    const label = authorLabel(task.author);
    const profile = authorProfile(task.author);
    const body = `<span class="avatar" aria-hidden="true">${escapeHtml(initials(label))}</span>${escapeHtml(prefix + label)}`;
    return profile ? `<a class="author-cell" href="${escapeHtml(profile)}" target="_blank" rel="noreferrer">${body}</a>` : `<span class="author-cell">${body}</span>`;
  }

  function renderOverview() {
    const rate = counts.passed / counts.total * 100;
    for (const id of ["snapshot-short", "footer-snapshot"]) elements[id].textContent = data.meta.snapshot.slice(0, 8);
    elements["updated-at"].textContent = frozenData.meta.updatedAt;
    elements["updated-at"].dateTime = frozenData.meta.updatedAt;
    elements["reviewed-at"].textContent = verificationAudit.meta.reviewedAt;
    elements["reviewed-at"].dateTime = verificationAudit.meta.reviewedAt;
    elements["verification-audit-link"].href = verificationAudit.meta.reportUrl;
    elements["progress-ring"].style.setProperty("--progress", `${rate * 3.6}deg`);
    elements["progress-ring"].setAttribute("aria-label", `核心 F2P/P2P 验证通过 ${counts.passed} / ${counts.total}，${rate.toFixed(1)}%；含兼容环境与 README 轻量路线，不是模型评测成绩或原包通过率`);
    elements["pass-rate"].textContent = `${rate.toFixed(1)}%`;
    document.querySelector(".progress-center span").textContent = `核心通过 · ${counts.passed} / ${counts.total}`;
    for (const [id, value] of Object.entries({
      "hero-direct": counts.passed, "hero-needs-fix": counts.failed,
      "hero-core-failed": counts.incomplete, "metric-total": counts.total,
      "metric-direct": counts.packageUnchanged, "metric-needs-fix": counts.packageNeedsFix,
      "metric-core-failed": counts.failed + counts.incomplete,
      "evidence-strict": evidenceCounts.exactPassed, "evidence-compatible": evidenceCounts.compatiblePassed,
      "evidence-lightweight": evidenceCounts.lightweightPassed,
      "inventory-total": tasks.length,
    })) elements[id].textContent = value;
    document.getElementById("readiness-note").textContent = `${counts.passed} 条核心通过 = ${counts.packageUnchanged} 条原包无必改项 + ${counts.packageNeedsFix} 条待修。${counts.packageUnchanged} 条可在各自记录的环境范围内原样使用，不代表全部是精确原生编译。`;
    document.getElementById("latest-report-link").href = frozenData.meta.reportUrl;
    document.getElementById("issue-explanations-link").href = issueExplanations.meta.reportUrl;
    for (const kind of evidenceKinds) {
      const option = elements["source-filter"].querySelector(`[value="${kind}"]`);
      option.textContent = `${sourceLabel({ evidence: kind })}（${tasks.filter((task) => task.evidence === kind).length}）`;
    }
    for (const [status, count] of Object.entries(statusCounts)) elements["status-filter"].querySelector(`[value="${status}"]`).textContent = `${statusLabels[status]}（${count}）`;
  }

  function renderCards() {
    elements["fix-summary"].innerHTML = `<span class="category-pill" style="--category-color: #946414"><i aria-hidden="true"></i>入口 / 描述 / fixture 等待修 <strong>${counts.packageNeedsFix}</strong></span>`;
    elements["category-summary"].innerHTML = ["failed", "incomplete"].map((status) => `<span class="category-pill" style="--category-color: ${themes[status].color}"><i aria-hidden="true"></i>${escapeHtml(statusLabels[status])} <strong>${statusCounts[status]}</strong></span>`).join("");
    for (const [id, statuses] of [["fix-grid", ["needs_fix"]], ["issue-grid", ["failed", "incomplete"]]]) {
      elements[id].innerHTML = tasks.filter((task) => statuses.includes(task.status)).map((task) => {
        const theme = themes[task.status];
        const audit = auditById.get(task.id);
        return `<article class="${task.status === "needs_fix" ? "fix-card" : "issue-card"}" role="button" tabindex="0" data-task-id="${task.id}" aria-label="查看 Task ${task.id} 验证详情" style="--fix-color: ${theme.color}; --category-color: ${theme.color}; --category-bg: ${theme.background}">
          <div class="issue-top"><span class="issue-id">#${task.id}</span><span class="issue-category">${escapeHtml(statusLabels[task.status])}</span></div>
          <h3>${escapeHtml(task.title)}</h3><p class="matrix-line">${escapeHtml(matrix(task))}</p>
          <p class="card-evidence">${escapeHtml(evidenceLabels[task.evidence])}</p>
          <div class="fix-detail audit-summary"><small>核对后说明</small><p>${escapeHtml(audit.summary)}</p></div>
          <div class="fix-detail fix-action"><small>下一步</small><p>${escapeHtml(audit.action)}</p></div>
          <div class="issue-footer"><span class="author-mini">${escapeHtml(authorLabel(task.author))}</span><span class="view-link">查看具体测试与历史差异 →</span></div>
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
    for (const [id, key] of [["status-filter", "status"], ["source-filter", "evidence"], ["type-filter", "type"], ["author-filter", "author"]]) {
      const value = params.get(key);
      elements[id].value = [...elements[id].options].some((option) => option.value === value) ? value : "all";
    }
  }

  function updateFilterUrl() {
    const params = new URLSearchParams();
    if (elements["search-input"].value.trim()) params.set("q", elements["search-input"].value.trim());
    for (const [id, key] of [["status-filter", "status"], ["source-filter", "evidence"], ["type-filter", "type"], ["author-filter", "author"]]) if (elements[id].value !== "all") params.set(key, elements[id].value);
    const query = params.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  }

  function renderTable() {
    const query = elements["search-input"].value.trim().toLocaleLowerCase("zh-CN");
    const visible = tasks.filter((task) => {
      const audit = auditById.get(task.id);
      const haystack = `${task.id} ${task.title} ${task.author} ${authorLabel(task.author)} ${audit.summary} ${audit.category} ${audit.checks.map((check) => check.name).join(" ")}`.toLocaleLowerCase("zh-CN");
      return (!query || haystack.includes(query)) &&
        (elements["status-filter"].value === "all" || elements["status-filter"].value === task.status) &&
        (elements["source-filter"].value === "all" || elements["source-filter"].value === task.evidence) &&
        (elements["type-filter"].value === "all" || elements["type-filter"].value === (task.type || "unknown")) &&
        (elements["author-filter"].value === "all" || elements["author-filter"].value === (task.author || "unknown"));
    });
    elements["visible-count"].textContent = visible.length;
    elements["empty-state"].hidden = visible.length !== 0;
    elements["task-table-body"].hidden = visible.length === 0;
    elements["task-table-body"].innerHTML = visible.map((task) => {
      const detail = `${sourceLabel(task)}${task.f2p !== null && task.p2p !== null ? ` · ${task.f2p}F / ${task.p2p}P` : ""}`;
      return `<tr data-validation-status="${task.status}" data-record-source="${task.recordSource}" data-evidence="${task.evidence}">
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
    const theme = themes[task.status];
    const audit = auditById.get(task.id);
    elements["task-dialog"].style.setProperty("--dialog-color", theme.color);
    elements["task-dialog"].style.setProperty("--dialog-bg", theme.background);
    elements["dialog-content"].innerHTML = `
      <span class="dialog-eyebrow">FULL TASK ACCEPTANCE · F2P / P2P</span>
      <div class="dialog-title-row"><h2 id="dialog-title">Task #${task.id}</h2><span class="status-chip ${task.status}">${escapeHtml(statusLabels[task.status])}</span></div>
      <p class="dialog-topic">${escapeHtml(task.title)}</p>
      <div class="dialog-panel audit-conclusion"><small>核对后说明</small><p>${escapeHtml(audit.summary)}</p></div>
      <div class="dialog-section audit-category"><small>失败或限制在哪</small><p>${escapeHtml(audit.category)}</p></div>
      <div class="dialog-section action-box audit-action"><small>怎么处理</small><p>${escapeHtml(audit.action)}</p></div>
      <div class="dialog-section audit-history"><small>与之前记录有什么差异</small><p>${escapeHtml(audit.history)}</p></div>
      <p class="scope-note audit-scope">核对日期 ${escapeHtml(verificationAudit.meta.reviewedAt)}；105 条均核对证据，另对 3 条争议任务复验，仅 59348 恢复核心通过，不代表 105 条重新执行。${escapeHtml(audit.evidenceNote)}</p>
      ${checkDetailsMarkup(audit)}
      <div class="dialog-meta"><span class="type-chip ${escapeHtml(task.type || "unknown")}">${escapeHtml(typeLabels[task.type] || typeLabels.unknown)}</span>${authorMarkup(task, "样本作者：")}</div>
      <p class="scope-note">原全量任务包与 F2P/P2P 基础验收。快照 ${escapeHtml(task.recordSnapshot.slice(0, 8))}；原验证记录日期 ${escapeHtml(frozenData.meta.validationRecordedAt.slice(0, 10))}；原页面发布更新 ${escapeHtml(frozenData.meta.updatedAt)}。本次复验结论与日期见上方核对说明；运行范围以该条证据为准。</p>
      <div class="dialog-panel matrix-panel"><small>核心 F2P / P2P 验证矩阵</small><strong>${escapeHtml(matrix(task))}</strong>${task.countsNote ? `<p class="matrix-note">${escapeHtml(task.countsNote)}</p>` : ""}</div>
      <div class="dialog-section"><small>运行证据与原始任务包</small><p>${escapeHtml(evidenceLabels[task.evidence])}；${escapeHtml(packageLabel(task))}。</p></div>
      <div class="dialog-section entry-acceptance"><small>原报告入口验收</small><p>${task.originalEntryPassed ? "通过" : "未通过"}。这是原报告的验收结论，不等同于脚本退出码；仍需结合目标测试是否有效、F2P/P2P 是否成立判断。</p></div>
      <details class="historical-acceptance"><summary>查看原验收措辞（${escapeHtml(frozenData.meta.validationRecordedAt.slice(0, 10))} 记录）</summary>
        <div class="dialog-section"><small>原结论 / 原因</small><p>${escapeHtml(frozenData.tasks.find((record) => record.id === task.id).reason)}</p></div>
        <div class="dialog-section"><small>原处理建议</small><p>${escapeHtml(frozenData.tasks.find((record) => record.id === task.id).action)}</p></div>
      </details>
      <div class="dialog-links">
        <a href="${escapeHtml(verificationAudit.meta.reportUrl)}#task-${task.id}">本条核对报告 ↗</a>
        <a href="${escapeHtml(taskUrl(task))}" target="_blank" rel="noreferrer">验收快照任务包 ↗</a>
        <a href="${escapeHtml(frozenData.meta.reportUrl)}">原全量逐题验收报告 ↗</a>
        <a href="${escapeHtml(sourcePrUrl(task.id))}" target="_blank" rel="noreferrer">源 Paddle PR ↗</a>
      </div>`;
  }

  function openTask(id) {
    const task = taskById.get(Number(id));
    if (!task) return;
    renderDialog(task);
    elements["task-dialog"].scrollTop = 0;
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
