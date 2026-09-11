"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { loadAcceptance, loadOverall, readPublic } = require("./helpers.cjs");
const sorted = (values) => [...values].sort((a, b) => a - b);
const scopes = ["exact_native", "exact_python", "exact_python_compatible_native", "lightweight_source", "lightweight_cpp", "patch_preflight", "environment_incomplete"];

test("acceptance adds a new global and preserves all three historical inputs", () => {
  const { acceptance, overall, inputsBefore, inputsAfter, globals } = loadAcceptance();
  assert.equal(inputsBefore, inputsAfter);
  assert.deepEqual(globals, ["SWE_PADDLE_ACCEPTANCE", "SWE_PADDLE_DATA", "SWE_PADDLE_STATUS", "SWE_PADDLE_UPDATE"]);
  assert.deepEqual(overall, loadOverall().overall, "loadOverall retains its historical behavior");
  assert.deepEqual(Object.keys(acceptance).sort(), ["schemaVersion", "meta", "counts", "evidenceCounts", "scopeCounts", "readyScopeCounts", "tasks"].sort());
  assert.equal(acceptance.schemaVersion, 1);
  assert.deepEqual(Object.keys(acceptance.meta).sort(), ["snapshot", "updatedAt", "validationRecordedAt", "total", "proposalOnlyIds", "reportUrl", "sourceReportSha256"].sort());
  assert.equal(acceptance.meta.snapshot, "207998dab8c4c76c8558c3cca8ef177c69f10c1c");
  assert.equal(acceptance.meta.updatedAt, "2026-09-10");
  assert.equal(acceptance.meta.validationRecordedAt, "2026-09-09T13:58:18.772863+00:00");
  assert.equal(acceptance.meta.reportUrl, "acceptance-20260910.md");
  assert.equal(acceptance.meta.sourceReportSha256, "7f7a9ee8f3d16116b2982cf60ec74e7bd1a28c2181c78c93f89e374cf402da9e");
});

test("all 105 acceptance rows have explicit allowlisted fields and current metadata", () => {
  const { acceptance, overall } = loadAcceptance();
  assert.equal(acceptance.tasks.length, 105);
  assert.equal(new Set(acceptance.tasks.map((task) => task.id)).size, 105);
  assert.deepEqual(sorted(acceptance.tasks.map((task) => task.id)), sorted(overall.tasks.map((task) => task.id)));
  assert.deepEqual(acceptance.meta.proposalOnlyIds, [56723, 78220, 79391, 79657]);
  assert.ok(acceptance.meta.proposalOnlyIds.every((id) => !acceptance.tasks.some((task) => task.id === id)));
  for (const task of acceptance.tasks) {
    const fields = ["id", "title", "type", "author", "status", "packageChangeRequired", "f2p", "p2p", "matrix", "reason", "action", "countsNote", "evidence", "corePassed", "originalEntryPassed", "selectedEvidenceSha256", "recordSource", "recordSnapshot", "recordUpdatedAt"];
    if (Object.hasOwn(task, "taskPath")) fields.push("taskPath");
    assert.deepEqual(Object.keys(task).sort(), fields.sort(), `${task.id}: explicit field allowlist`);
    const previous = overall.tasks.find((row) => row.id === task.id);
    for (const field of ["title", "type", "author", "taskPath"]) assert.equal(task[field], previous[field]);
    assert.ok(["passed", "needs_fix", "failed", "incomplete"].includes(task.status));
    assert.ok(scopes.includes(task.evidence));
    for (const field of ["f2p", "p2p"]) assert.ok(task[field] === null || (Number.isSafeInteger(task[field]) && task[field] >= 0));
    for (const field of ["title", "type", "author", "matrix", "reason", "action", "countsNote"]) assert.ok(typeof task[field] === "string" && task[field].trim());
    assert.ok([true, false, null].includes(task.corePassed));
    assert.ok([true, false, null].includes(task.packageChangeRequired));
    assert.equal(typeof task.originalEntryPassed, "boolean");
    assert.match(task.selectedEvidenceSha256, /^[a-f0-9]{64}$/);
    assert.equal(task.recordSource, "full_acceptance");
    assert.equal(task.recordSnapshot, acceptance.meta.snapshot);
    assert.equal(task.recordUpdatedAt, "2026-09-09", "not the web publication date");
  }
  assert.equal(acceptance.tasks.find((task) => task.id === 79275).taskPath, "PaddlePaddle_Paddle-79275");
});

test("full counts are 89 equals 71 plus 18, with 13 failed and 3 hardware incomplete", () => {
  const { acceptance: data } = loadAcceptance();
  const count = (predicate) => data.tasks.filter(predicate).length;
  const passed = (task) => ["passed", "needs_fix"].includes(task.status);
  assert.deepEqual(data.counts, { total: 105, passed: 89, packageUnchanged: 71, packageNeedsFix: 18, failed: 13, incomplete: 3 });
  assert.equal(count(passed), data.counts.passed);
  for (const [status, field] of [["passed", "packageUnchanged"], ["needs_fix", "packageNeedsFix"], ["failed", "failed"], ["incomplete", "incomplete"]]) assert.equal(count((task) => task.status === status), data.counts[field]);
  assert.equal(data.counts.total, data.counts.passed + data.counts.failed + data.counts.incomplete);
  for (const task of data.tasks) {
    if (passed(task)) {
      assert.equal(task.corePassed, true);
      assert.ok(task.f2p > 0 && task.p2p > 0);
      assert.equal(task.packageChangeRequired, task.status === "needs_fix");
    }
    if (task.status === "passed") assert.equal(task.originalEntryPassed, true);
    if (task.status === "failed") assert.equal(task.corePassed, false);
    if (task.status === "incomplete") for (const field of ["f2p", "p2p", "corePassed", "packageChangeRequired"]) assert.equal(task[field], null);
  }
  assert.deepEqual(sorted(data.tasks.filter((task) => task.status === "incomplete").map((task) => task.id)), [59847, 64320, 78823]);
  assert.deepEqual(sorted(data.tasks.filter((task) => task.status === "failed").map((task) => task.id)), [57741, 57827, 58323, 59021, 59348, 59374, 59973, 64881, 73122, 76259, 76873, 77495, 79386]);
});

test("runtime scope is orthogonal to status; compatible and lightweight do not become exact", () => {
  const { acceptance: data } = loadAcceptance();
  assert.deepEqual(data.scopeCounts, { exact_native: 40, exact_python: 5, exact_python_compatible_native: 30, lightweight_source: 23, lightweight_cpp: 2, patch_preflight: 2, environment_incomplete: 3 });
  assert.deepEqual(data.readyScopeCounts, { exact_native: 20, exact_python: 5, exact_python_compatible_native: 21, lightweight_source: 23, lightweight_cpp: 2, patch_preflight: 0, environment_incomplete: 0 });
  for (const scope of scopes) {
    assert.equal(data.scopeCounts[scope], data.tasks.filter((task) => task.evidence === scope).length);
    assert.equal(data.readyScopeCounts[scope], data.tasks.filter((task) => task.evidence === scope && task.status === "passed").length);
  }
  assert.deepEqual(data.evidenceCounts, { exactPassed: 36, compatiblePassed: 28, lightweightPassed: 25 });
  assert.equal(Object.values(data.evidenceCounts).reduce((sum, value) => sum + value, 0), 89);
  assert.equal(Object.values(data.readyScopeCounts).reduce((sum, value) => sum + value, 0), 71);
});

test("corrected imports, effective nodes, partial failures and hardware limitations remain visible", () => {
  const { acceptance: data } = loadAcceptance();
  const row = (id) => data.tasks.find((task) => task.id === id);
  for (const id of [41202, 52948]) {
    assert.equal(row(id).status, "needs_fix");
    assert.equal(row(id).corePassed, true);
    assert.equal(row(id).originalEntryPassed, false);
    assert.match(row(id).reason, /VarBase/);
  }
  assert.deepEqual([row(41202).f2p, row(41202).p2p, row(41202).evidence], [2, 1, "exact_python_compatible_native"]);
  assert.deepEqual([row(52948).f2p, row(52948).p2p, row(52948).evidence], [5, 14, "exact_native"]);
  assert.deepEqual([row(36684).f2p, row(36684).p2p], [8, 2]);
  assert.match(row(36684).reason, /no-op/);
  assert.deepEqual([row(73125).f2p, row(73125).p2p], [2, 4]);
  assert.match(row(73125).reason, /未计入 F\/P/);
  assert.deepEqual([row(76873).f2p, row(76873).p2p, row(76873).status], [9, 14, "failed"]);
  assert.match(row(76873).reason, /31节点/);
  assert.deepEqual([row(59021).f2p, row(59021).p2p], [0, 8]);
  assert.match(row(64881).reason, /6个.*1个/);
  for (const id of [76259, 77495]) {
    assert.equal(row(id).evidence, "patch_preflight");
    assert.deepEqual([row(id).f2p, row(id).p2p], [null, null]);
  }
  assert.match(row(76259).reason, /Windows CPU\/MSVC x64/);
  for (const id of [59847, 64320]) assert.match(row(id).action, /CUDA GPU/);
  assert.match(row(78823).action, /CUDA或XPU任选/);
});

test("public report enumerates the same 105 IDs, matrices and source binding", () => {
  const { acceptance: data } = loadAcceptance();
  const report = readPublic(data.meta.reportUrl);
  const reportIds = [...report.matchAll(/^\| \[(\d+)\]\(https:\/\/github\.com\/PaddlePaddle\/community\/tree\//gm)].map((match) => Number(match[1]));
  assert.deepEqual(sorted(reportIds), sorted(data.tasks.map((task) => task.id)));
  assert.match(report, /103 条实际进入测试运行/);
  assert.match(report, /89 = 71 \+ 18/);
  assert.match(report, /105 = 89 \+ 13 \+ 3/);
  assert.ok(report.includes(data.meta.sourceReportSha256));
  for (const task of data.tasks) {
    const line = report.split("\n").find((text) => text.startsWith(`| [${task.id}](`));
    assert.ok(line.includes(task.f2p === null ? "— / —" : `${task.f2p} / ${task.p2p}`));
    assert.ok(line.includes(task.reason.replace(/\|/g, "\\|").replace(/</g, "&lt;").replace(/>/g, "&gt;")));
  }
});
