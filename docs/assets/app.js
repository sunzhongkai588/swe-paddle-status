(() => {
  "use strict";

  const data = window.SWE_PADDLE_DATA;
  if (!data) {
    throw new Error("SWE-Paddle data is unavailable.");
  }

  const failureById = new Map(
    Object.entries(data.failures).map(([id, detail]) => [Number(id), detail]),
  );
  const noticeById = new Map(
    Object.entries(data.notices || {}).map(([id, detail]) => [Number(id), detail]),
  );
  const taskById = new Map(data.tasks.map((task) => [task.id, task]));
  const typeLabels = {
    bugfix: "Bugfix",
    feature: "Feature",
    refactor: "Refactor",
  };
  const categoryThemes = {
    gold: { color: "#c95e53", background: "#fff0ed" },
    roles: { color: "#ae791d", background: "#fff5dc" },
    package: { color: "#735ac7", background: "#f1edff" },
    evidence: { color: "#3972f6", background: "#eaf0ff" },
  };

  const elements = {
    snapshotShort: document.querySelector("#snapshot-short"),
    footerSnapshot: document.querySelector("#footer-snapshot"),
    updatedAt: document.querySelector("#updated-at"),
    progressRing: document.querySelector("#progress-ring"),
    passRate: document.querySelector("#pass-rate"),
    heroPassed: document.querySelector("#hero-passed"),
    heroFailed: document.querySelector("#hero-failed"),
    metricTotal: document.querySelector("#metric-total"),
    metricPassed: document.querySelector("#metric-passed"),
    metricFailed: document.querySelector("#metric-failed"),
    metricBugfix: document.querySelector("#metric-bugfix"),
    metricFeature: document.querySelector("#metric-feature"),
    metricRefactor: document.querySelector("#metric-refactor"),
    categorySummary: document.querySelector("#category-summary"),
    issueGrid: document.querySelector("#issue-grid"),
    correctionTitle: document.querySelector("#correction-title"),
    correctionSummary: document.querySelector("#correction-summary"),
    correctionCaveat: document.querySelector("#correction-caveat"),
    correctionButton: document.querySelector("#correction-banner [data-task-id]"),
    search: document.querySelector("#search-input"),
    status: document.querySelector("#status-filter"),
    type: document.querySelector("#type-filter"),
    author: document.querySelector("#author-filter"),
    clear: document.querySelector("#clear-filters"),
    visibleCount: document.querySelector("#visible-count"),
    taskBody: document.querySelector("#task-table-body"),
    emptyState: document.querySelector("#empty-state"),
    dialog: document.querySelector("#task-dialog"),
    dialogContent: document.querySelector("#dialog-content"),
    dialogClose: document.querySelector(".dialog-close"),
  };

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const taskUrl = (id) => `${data.meta.taskBase}${id}`;
  const sourcePrUrl = (id) => `${data.meta.sourcePrBase}${id}`;
  const contributionPrUrl = (id) => `${data.meta.repository}/pull/${id}`;
  const authorLabel = (author) => data.authors[author]?.label || author;
  const authorProfile = (author) => data.authors[author]?.profile || "#";
  const initials = (name) =>
    String(name)
      .split(/[\s_-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();

  function getComputedCounts() {
    const total = data.tasks.length;
    const failed = data.tasks.filter((task) => failureById.has(task.id)).length;
    return {
      total,
      failed,
      passed: total - failed,
      bugfix: data.tasks.filter((task) => task.type === "bugfix").length,
      feature: data.tasks.filter((task) => task.type === "feature").length,
      refactor: data.tasks.filter((task) => task.type === "refactor").length,
    };
  }

  function renderOverview() {
    const counts = getComputedCounts();
    const rate = (counts.passed / counts.total) * 100;
    const shortSnapshot = data.meta.snapshot.slice(0, 8);

    elements.snapshotShort.textContent = shortSnapshot;
    elements.footerSnapshot.textContent = shortSnapshot;
    elements.updatedAt.textContent = data.meta.updatedAt;
    elements.updatedAt.dateTime = data.meta.updatedAt;
    elements.progressRing.style.setProperty("--progress", `${(rate / 100) * 360}deg`);
    elements.progressRing.setAttribute("aria-label", `通过率 ${rate.toFixed(1)}%`);
    elements.passRate.textContent = `${rate.toFixed(1)}%`;
    elements.heroPassed.textContent = counts.passed;
    elements.heroFailed.textContent = counts.failed;
    elements.metricTotal.textContent = counts.total;
    elements.metricPassed.textContent = counts.passed;
    elements.metricFailed.textContent = counts.failed;
    elements.metricBugfix.textContent = counts.bugfix;
    elements.metricFeature.textContent = counts.feature;
    elements.metricRefactor.textContent = counts.refactor;
  }

  function renderCategorySummary() {
    const counts = Object.keys(data.categories).reduce((result, category) => {
      result[category] = [...failureById.values()].filter(
        (failure) => failure.category === category,
      ).length;
      return result;
    }, {});

    elements.categorySummary.innerHTML = Object.entries(data.categories)
      .map(([key, category]) => {
        const theme = categoryThemes[key];
        return `
          <span class="category-pill" style="--category-color: ${theme.color}">
            <i aria-hidden="true"></i>
            ${escapeHtml(category.shortLabel)}
            <strong>${counts[key]}</strong>
          </span>
        `;
      })
      .join("");
  }

  function renderIssues() {
    elements.issueGrid.innerHTML = [...failureById.entries()]
      .map(([id, failure]) => {
        const task = taskById.get(id);
        const category = data.categories[failure.category];
        const theme = categoryThemes[failure.category];
        const label = authorLabel(task.author);

        return `
          <article
            class="issue-card"
            role="button"
            tabindex="0"
            data-task-id="${id}"
            aria-label="查看 Task ${id} 详情"
            style="--category-color: ${theme.color}; --category-bg: ${theme.background}"
          >
            <div class="issue-top">
              <span class="issue-id">#${id}</span>
              <span class="issue-category">${escapeHtml(category.shortLabel)}</span>
            </div>
            <h3>${escapeHtml(task.title)}</h3>
            <p class="matrix-line">${escapeHtml(failure.matrix)}</p>
            <p class="issue-reason">${escapeHtml(failure.reason)}</p>
            <div class="issue-footer">
              <span class="author-mini">
                <span class="avatar" aria-hidden="true">${escapeHtml(initials(label))}</span>
                ${escapeHtml(label)}
              </span>
              <span class="view-link">查看定位 →</span>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderCorrection() {
    elements.correctionTitle.textContent = data.correction.title;
    elements.correctionSummary.textContent = data.correction.summary;
    elements.correctionCaveat.textContent = data.correction.caveat;
    elements.correctionButton.dataset.taskId = data.correction.id;
    elements.correctionButton.textContent = `查看 ${data.correction.id}`;
  }

  function populateAuthors() {
    const counts = data.tasks.reduce((result, task) => {
      result[task.author] = (result[task.author] || 0) + 1;
      return result;
    }, {});

    Object.entries(counts)
      .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
      .forEach(([author, count]) => {
        const option = document.createElement("option");
        option.value = author;
        option.textContent = `${authorLabel(author)} (${count})`;
        elements.author.append(option);
      });
  }

  function readFiltersFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const validStatus = ["all", "passed", "notice", "failed"];
    const validType = ["all", "bugfix", "feature", "refactor"];
    const validAuthors = ["all", ...Object.keys(data.authors)];

    elements.search.value = params.get("q") || "";
    elements.status.value = validStatus.includes(params.get("status"))
      ? params.get("status")
      : "all";
    elements.type.value = validType.includes(params.get("type")) ? params.get("type") : "all";
    elements.author.value = validAuthors.includes(params.get("author"))
      ? params.get("author")
      : "all";
  }

  function updateFilterUrl() {
    const params = new URLSearchParams();
    if (elements.search.value.trim()) params.set("q", elements.search.value.trim());
    if (elements.status.value !== "all") params.set("status", elements.status.value);
    if (elements.type.value !== "all") params.set("type", elements.type.value);
    if (elements.author.value !== "all") params.set("author", elements.author.value);

    const query = params.toString();
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
    window.history.replaceState(null, "", nextUrl);
  }

  function filteredTasks() {
    const search = elements.search.value.trim().toLocaleLowerCase("zh-CN");
    return data.tasks.filter((task) => {
      const failed = failureById.has(task.id);
      const hasNotice = noticeById.has(task.id);
      const haystack = `${task.id} ${task.title} ${task.author} ${authorLabel(task.author)}`.toLocaleLowerCase(
        "zh-CN",
      );
      const matchesSearch = !search || haystack.includes(search);
      const matchesStatus =
        elements.status.value === "all" ||
        (elements.status.value === "failed" && failed) ||
        (elements.status.value === "notice" && !failed && hasNotice) ||
        (elements.status.value === "passed" && !failed);
      const matchesType = elements.type.value === "all" || elements.type.value === task.type;
      const matchesAuthor = elements.author.value === "all" || elements.author.value === task.author;
      return matchesSearch && matchesStatus && matchesType && matchesAuthor;
    });
  }

  function renderTable() {
    const tasks = filteredTasks();
    elements.visibleCount.textContent = tasks.length;
    elements.emptyState.hidden = tasks.length !== 0;
    elements.taskBody.hidden = tasks.length === 0;

    elements.taskBody.innerHTML = tasks
      .map((task) => {
        const failed = failureById.has(task.id);
        const hasNotice = noticeById.has(task.id);
        const status = failed ? "failed" : hasNotice ? "notice" : "passed";
        const statusLabel = failed ? "待处理" : hasNotice ? "Core 通过 · 待修" : "验证通过";
        const statusColor = failed ? "#d76b60" : "#42b894";
        const label = authorLabel(task.author);

        return `
          <tr>
            <td>
              <span class="task-cell" style="--status-color: ${statusColor}">#${task.id}</span>
            </td>
            <td class="topic-cell">${escapeHtml(task.title)}</td>
            <td><span class="type-chip ${task.type}">${escapeHtml(typeLabels[task.type] || task.type)}</span></td>
            <td>
              <a class="author-cell" href="${escapeHtml(authorProfile(task.author))}" target="_blank" rel="noreferrer">
                <span class="avatar" aria-hidden="true">${escapeHtml(initials(label))}</span>
                ${escapeHtml(label)}
              </a>
            </td>
            <td><span class="status-chip ${status}">${statusLabel}</span></td>
            <td>
              <button class="table-action" type="button" data-task-id="${task.id}">
                详情 <span aria-hidden="true">→</span>
              </button>
            </td>
          </tr>
        `;
      })
      .join("");

    updateFilterUrl();
  }

  function renderDialog(task) {
    const failure = failureById.get(task.id);
    const notice = noticeById.get(task.id);
    const isCorrection = task.id === data.correction.id;
    const category = failure ? data.categories[failure.category] : null;
    const theme = failure
      ? categoryThemes[failure.category]
      : { color: "#237c62", background: "#ebf8f3" };
    const label = authorLabel(task.author);
    const contributionPr =
      failure?.contributionPr || notice?.contributionPr || (isCorrection ? data.correction.contributionPr : null);
    const sourceAuthor = failure?.sourceAuthor;

    const matrix = failure
      ? failure.matrix
      : notice
        ? notice.matrix
        : "Core F2P/P2P 已验证通过";
    const explanation = failure
      ? failure.reason
      : notice
        ? notice.reason
        : "该任务已经满足当前 Core 最低门槛：Base 有有效失败、Gold 对应转绿，并保留至少一个有意义的 P2P。";
    const nextStep = failure
      ? failure.action
      : notice
        ? notice.action
        : "Core 结论已经通过；是否可直接评测仍需以原始 runner、资源、judge 覆盖和题面契约门禁为准。";
    const statusClass = failure ? "failed" : notice ? "notice" : "passed";
    const statusLabel = failure ? "待处理" : notice ? "Core 通过 · 待修" : "验证通过";

    elements.dialog.style.setProperty("--dialog-color", theme.color);
    elements.dialog.style.setProperty("--dialog-bg", theme.background);
    elements.dialogContent.innerHTML = `
      <span class="dialog-eyebrow">${failure ? "ACTION REQUIRED" : notice ? "CORE PASS · RUNNER UPDATE" : "CORE VERIFIED"}</span>
      <div class="dialog-title-row">
        <h2 id="dialog-title">Task #${task.id}</h2>
        <span class="status-chip ${statusClass}">${statusLabel}</span>
      </div>
      <p class="dialog-topic">${escapeHtml(task.title)}</p>
      <div class="dialog-meta">
        <span class="type-chip ${task.type}">${escapeHtml(typeLabels[task.type] || task.type)}</span>
        <a class="author-cell" href="${escapeHtml(authorProfile(task.author))}" target="_blank" rel="noreferrer">
          <span class="avatar" aria-hidden="true">${escapeHtml(initials(label))}</span>
          样本作者：${escapeHtml(label)}
        </a>
        ${
          sourceAuthor
            ? `<a class="author-cell" href="${escapeHtml(failure.sourceAuthorProfile)}" target="_blank" rel="noreferrer">源 PR 作者：${escapeHtml(sourceAuthor)}</a>`
            : ""
        }
        ${failure ? `<span class="issue-category" style="--category-color: ${theme.color}; --category-bg: ${theme.background}">${escapeHtml(category.label)}</span>` : ""}
      </div>
      <div class="dialog-panel matrix-panel">
        <small>验证矩阵</small>
        <strong>${escapeHtml(matrix)}</strong>
      </div>
      <div class="dialog-section">
        <small>${failure ? "未通过原因" : "结论"}</small>
        <p>${escapeHtml(explanation)}</p>
      </div>
      <div class="dialog-section action-box">
        <small>${failure ? "建议动作" : notice ? "进入直接评测前" : "后续门禁"}</small>
        <p>${escapeHtml(nextStep)}</p>
      </div>
      <div class="dialog-links">
        <a href="${escapeHtml(taskUrl(task.id))}" target="_blank" rel="noreferrer">打开任务包 ↗</a>
        <a href="${escapeHtml(sourcePrUrl(task.id))}" target="_blank" rel="noreferrer">源 Paddle PR ↗</a>
        ${contributionPr ? `<a href="${escapeHtml(contributionPrUrl(contributionPr))}" target="_blank" rel="noreferrer">社区 PR #${contributionPr} ↗</a>` : ""}
      </div>
    `;
  }

  function openTask(id) {
    const task = taskById.get(Number(id));
    if (!task) return;
    renderDialog(task);
    if (typeof elements.dialog.showModal === "function") {
      elements.dialog.showModal();
    } else {
      elements.dialog.setAttribute("open", "");
    }
  }

  function bindEvents() {
    [elements.search, elements.status, elements.type, elements.author].forEach((control) => {
      control.addEventListener(control === elements.search ? "input" : "change", renderTable);
    });

    elements.clear.addEventListener("click", () => {
      elements.search.value = "";
      elements.status.value = "all";
      elements.type.value = "all";
      elements.author.value = "all";
      renderTable();
      elements.search.focus();
    });

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-task-id]");
      if (trigger) openTask(trigger.dataset.taskId);
    });

    elements.issueGrid.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const trigger = event.target.closest("[data-task-id]");
      if (!trigger) return;
      event.preventDefault();
      openTask(trigger.dataset.taskId);
    });

    elements.dialogClose.addEventListener("click", () => elements.dialog.close());
    elements.dialog.addEventListener("click", (event) => {
      if (event.target === elements.dialog) elements.dialog.close();
    });
  }

  renderOverview();
  renderCategorySummary();
  renderIssues();
  renderCorrection();
  populateAuthors();
  readFiltersFromUrl();
  renderTable();
  bindEvents();
})();
