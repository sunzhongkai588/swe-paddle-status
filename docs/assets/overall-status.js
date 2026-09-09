// Derived public projection. The two historical inputs are immutable:
// data.js SHA-256: e70903974cabc3e483b23e903332cc050f2e504ae92354acbc55e5282a0539ec
// validation-update.js SHA-256: 210090c36c031003e865580cf790d97de4852fbf8b4ea4875737370cae190415
// No original record is mutated; unavailable numeric counts are never inferred.
(function buildOverallStatus() {
  "use strict";

  const history = window.SWE_PADDLE_DATA;
  const update = window.SWE_PADDLE_UPDATE;
  const baseline = "c9e46547a1f8dce934a8c454a9b4afd6cce1d384";
  const snapshot = "207998dab8c4c76c8558c3cca8ef177c69f10c1c";
  const sourceReportSha256 = "73add105ea979b87a78173deef691f33c92ed901f2fcb8c32474d91ec5743471";

  function requireValue(condition, message) {
    if (!condition) throw new Error(`SWE-Paddle overall status: ${message}`);
  }

  function idSet(ids, label) {
    requireValue(Array.isArray(ids), `${label} must be an array`);
    requireValue(ids.every((id) => Number.isSafeInteger(id) && id > 0), `${label} contains an invalid ID`);
    const result = new Set(ids);
    requireValue(result.size === ids.length, `${label} contains duplicate IDs`);
    return result;
  }

  function sameIds(left, right, label) {
    requireValue(left.size === right.size && [...left].every((id) => right.has(id)), `${label} differs`);
  }

  function metadata(task) {
    for (const field of ["title", "type", "author"]) {
      requireValue(typeof task[field] === "string" && task[field].length > 0, `${task.id} has invalid ${field}`);
    }
    const result = { id: task.id, title: task.title, type: task.type, author: task.author };
    if (task.taskPath !== undefined) {
      requireValue(task.id === 79275 && task.taskPath === "PaddlePaddle_Paddle-79275", "unrecognized task-path alias");
      result.taskPath = task.taskPath;
    }
    return result;
  }

  function validTextRecord(record, id) {
    requireValue(record && ["matrix", "reason", "action"].every((field) => typeof record[field] === "string" && record[field].length > 0), `${id} lacks an explicit historical record`);
  }

  requireValue(history && update && update.schemaVersion === 1, "both supported input datasets must be loaded first");
  requireValue(history.meta.snapshot === baseline && update.meta.baselineSnapshot === baseline && update.meta.snapshot === snapshot, "snapshot binding mismatch");
  requireValue(history.meta.updatedAt === "2026-09-07" && update.meta.updatedAt === "2026-09-09", "record-date binding mismatch");
  requireValue(update.meta.sourceReportSha256 === sourceReportSha256, "sealed report binding mismatch");

  const historicalIds = idSet(history.tasks.map((task) => task.id), "historical inventory");
  const directIds = idSet(history.directTaskIds, "historical direct IDs");
  const noticeIds = idSet(Object.keys(history.notices).map(Number), "historical notice IDs");
  const failureIds = idSet(Object.keys(history.failures).map(Number), "historical failure IDs");
  const historicalPartitions = [...directIds, ...noticeIds, ...failureIds];
  sameIds(idSet(historicalPartitions, "historical status partition"), historicalIds, "historical complete coverage");
  requireValue(historicalIds.size === history.meta.total && historicalIds.size === 96, "historical total mismatch");
  requireValue(directIds.size === history.meta.corePassedTaskPackagePassed && directIds.size === 55, "historical direct count mismatch");
  requireValue(noticeIds.size === history.meta.corePassedTaskPackageFailed && noticeIds.size === 21, "historical notice count mismatch");
  requireValue(failureIds.size === history.meta.coreFailed && failureIds.size === 20, "historical combined failure count mismatch");

  const newIds = idSet(update.meta.newTaskIds, "new IDs");
  const modifiedIds = idSet(update.meta.modifiedTaskIds, "modified IDs");
  const retainedIds = idSet(update.meta.unchangedTaskIds, "unchanged IDs");
  const proposalIds = idSet(update.meta.proposalOnlyIds, "proposal IDs");
  const changedIds = idSet([...newIds, ...modifiedIds], "changed IDs");
  const overallIds = idSet([...changedIds, ...retainedIds], "overall inventory");
  sameIds(idSet([...modifiedIds, ...retainedIds], "historical delta partition"), historicalIds, "historical delta coverage");
  sameIds(idSet(update.tasks.map((task) => task.id), "latest task records"), changedIds, "latest change coverage");
  requireValue(overallIds.size === update.meta.total && overallIds.size === 105, "overall total mismatch");
  requireValue(newIds.size === 9 && modifiedIds.size === 19 && retainedIds.size === 77 && proposalIds.size === 4, "delta inventory mismatch");
  requireValue([...proposalIds].every((id) => !overallIds.has(id)), "proposal-only task mixed into complete inventory");
  requireValue([...directIds].every((id) => retainedIds.has(id)), "historical direct record unexpectedly changed");

  // Explicit interpretation of the eight RETAINED records from the old combined
  // "not passed or incomplete" bucket. Unknown records must fail closed.
  const retainedFailed = new Map([[57741, "roles"], [76259, "package"], [77495, "package"]]);
  const retainedPending = new Set([74221, 74305, 78823]);
  const retainedGpuPending = new Map([
    [59847, ["任务声明 GPU 必需", "32 个 CUDA 节点本轮全部未执行"]],
    [64320, ["任务声明 CPU + GPU 且 GPU 必需", "本轮没有 CUDA 资源"]],
  ]);
  sameIds(
    idSet([...retainedFailed.keys(), ...retainedPending, ...retainedGpuPending.keys()], "retained failure interpretation"),
    new Set([...failureIds].filter((id) => retainedIds.has(id))),
    "retained combined failure coverage",
  );
  for (const [id, category] of retainedFailed) {
    const record = history.failures[id];
    validTextRecord(record, id);
    requireValue(record.category === category && record.coreStatus === undefined, `${id} failed-record interpretation changed`);
  }
  for (const id of retainedPending) {
    const record = history.failures[id];
    validTextRecord(record, id);
    requireValue(record.category === "evidence" && record.coreStatus === "pending", `${id} no longer has explicit pending evidence`);
  }
  for (const [id, requiredReasons] of retainedGpuPending) {
    const record = history.failures[id];
    validTextRecord(record, id);
    requireValue(record.category === "evidence" && record.coreStatus === undefined, `${id} GPU-pending category changed`);
    requireValue(record.matrix.includes("必需 GPU 未验证") && requiredReasons.every((text) => record.reason.includes(text)), `${id} no longer explicitly lacks required GPU validation`);
  }

  const historicalTasks = new Map(history.tasks.map((task) => [task.id, task]));
  const tasks = [...retainedIds].map((id) => {
    const original = historicalTasks.get(id);
    let status;
    let record;
    if (directIds.has(id)) {
      status = "passed";
      record = {
        matrix: "历史 F2P/P2P 与 Task 包验证通过；未披露独立数值字段",
        reason: "历史公开记录确认核心 F2P/P2P 与 Task 包均通过；该任务包在最新快照中未变，本次沿用既有结论。",
        action: "不因本轮未重跑而降级；历史结论也不自动升级为新版正式评测资格。",
      };
    } else if (noticeIds.has(id)) {
      status = "needs_fix";
      record = history.notices[id];
    } else if (retainedFailed.has(id)) {
      status = "failed";
      record = history.failures[id];
    } else if (retainedPending.has(id) || retainedGpuPending.has(id)) {
      status = "incomplete";
      record = history.failures[id];
    } else {
      requireValue(false, `${id} has no explicit retained status`);
    }
    validTextRecord(record, id);
    return {
      ...metadata(original),
      status,
      packageChangeRequired: status === "passed" ? false : status === "incomplete" ? null : true,
      f2p: null,
      p2p: null,
      matrix: record.matrix,
      reason: record.reason,
      action: record.action,
      countsNote: "沿用历史记录，本轮未重跑；旧数据没有独立 F2P/P2P 数值字段，不从说明文字推算。数字留空不改变已有定性结论。",
      evidence: status === "incomplete" ? "incomplete" : "historical",
      recordSource: "retained",
      recordSnapshot: baseline,
      recordUpdatedAt: history.meta.updatedAt,
    };
  });

  const latestStatus = new Map([
    ["strict_pass", "passed"], ["compatible_pass", "passed"],
    ["needs_fix", "needs_fix"], ["failed", "failed"], ["incomplete", "incomplete"],
  ]);
  for (const original of update.tasks) {
    requireValue(latestStatus.has(original.status), `${original.id} has an unknown latest status`);
    requireValue(original.changeKind === (newIds.has(original.id) ? "new" : "modified"), `${original.id} change-kind mismatch`);
    requireValue(["exact_native", "exact_python", "compatible_native", "incomplete"].includes(original.evidence), `${original.id} has unknown evidence`);
    for (const field of ["f2p", "p2p"]) {
      requireValue(original[field] === null || (Number.isSafeInteger(original[field]) && original[field] >= 0), `${original.id} invalid ${field}`);
    }
    const status = latestStatus.get(original.status);
    if (status === "passed" || status === "needs_fix") {
      requireValue(original.f2p > 0 && original.p2p > 0, `${original.id} passes without a positive matrix`);
      requireValue(original.packageChangeRequired === (status === "needs_fix"), `${original.id} package status mismatch`);
    } else if (status === "incomplete") {
      requireValue(original.f2p === null && original.p2p === null && original.packageChangeRequired === null && original.evidence === "incomplete", `${original.id} incomplete record mismatch`);
    } else {
      requireValue(original.packageChangeRequired === true, `${original.id} failure lacks its known package issue`);
    }
    if (original.status === "strict_pass") requireValue(["exact_native", "exact_python"].includes(original.evidence), `${original.id} strict evidence mismatch`);
    if (original.status === "compatible_pass" || original.status === "needs_fix") requireValue(original.evidence === "compatible_native", `${original.id} compatible evidence mismatch`);
    for (const field of ["reason", "action", "countsNote"]) requireValue(typeof original[field] === "string" && original[field].length > 0, `${original.id} lacks ${field}`);
    tasks.push({
      ...metadata(original),
      status,
      packageChangeRequired: original.packageChangeRequired,
      f2p: original.f2p,
      p2p: original.p2p,
      matrix: original.f2p === null ? "F2P / P2P 尚未完成有效配对" : `F2P ${original.f2p} / P2P ${original.p2p}`,
      reason: original.reason,
      action: original.action,
      countsNote: original.countsNote,
      evidence: original.evidence,
      recordSource: "latest",
      recordSnapshot: snapshot,
      recordUpdatedAt: update.meta.updatedAt,
    });
  }
  tasks.sort((left, right) => left.id - right.id);
  sameIds(idSet(tasks.map((task) => task.id), "overall result records"), overallIds, "overall result coverage");

  function count(predicate) { return tasks.filter(predicate).length; }
  function isPassed(task) { return task.status === "passed" || task.status === "needs_fix"; }
  const counts = {
    total: tasks.length,
    passed: count(isPassed),
    packageUnchanged: count((task) => task.status === "passed"),
    packageNeedsFix: count((task) => task.status === "needs_fix"),
    failed: count((task) => task.status === "failed"),
    incomplete: count((task) => task.status === "incomplete"),
  };
  const evidenceCounts = {
    strictPassed: count((task) => isPassed(task) && task.recordSource === "latest" && ["exact_native", "exact_python"].includes(task.evidence)),
    compatiblePassed: count((task) => isPassed(task) && task.recordSource === "latest" && task.evidence === "compatible_native"),
    retainedPassed: count((task) => isPassed(task) && task.recordSource === "retained"),
  };
  requireValue(counts.passed === counts.packageUnchanged + counts.packageNeedsFix && counts.total === counts.passed + counts.failed + counts.incomplete, "overall count partition mismatch");
  requireValue(counts.passed === evidenceCounts.strictPassed + evidenceCounts.compatiblePassed + evidenceCounts.retainedPassed, "evidence count partition mismatch");
  const latestCount = (predicate) => count((task) => task.recordSource === "latest" && predicate(task));
  requireValue(latestCount(() => true) === update.counts.examined && latestCount(isPassed) === update.counts.reproducedPassed, "latest reproduced count mismatch");
  requireValue(latestCount((task) => task.status === "passed") === update.counts.packageUnchanged && latestCount((task) => task.status === "needs_fix") === update.counts.packageNeedsFix, "latest package count mismatch");
  requireValue(latestCount((task) => task.status === "failed") === update.counts.notPassed && latestCount((task) => task.status === "incomplete") === update.counts.environmentIncomplete, "latest unresolved count mismatch");
  requireValue(evidenceCounts.strictPassed === update.counts.strictPassed && evidenceCounts.compatiblePassed === update.counts.compatiblePassed, "latest evidence count mismatch");

  window.SWE_PADDLE_STATUS = {
    schemaVersion: 1,
    meta: {
      snapshot,
      updatedAt: update.meta.updatedAt,
      total: tasks.length,
      proposalOnlyIds: [...proposalIds],
      reportUrl: "overall-status-20260909.md",
    },
    counts,
    evidenceCounts,
    tasks,
  };
}());
