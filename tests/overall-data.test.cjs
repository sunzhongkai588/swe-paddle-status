"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { loadOverall } = require("./helpers.cjs");

const sorted = (values) => [...values].sort((a, b) => a - b);
const statusMap = { strict_pass: "passed", compatible_pass: "passed", needs_fix: "needs_fix", failed: "failed", incomplete: "incomplete" };
const retainedFailed = [57741, 76259, 77495];
const retainedIncomplete = [59847, 64320, 74221, 74305, 78823];

test("overall public schema adds a projection without rewriting either published input", () => {
  const { legacy, update, overall, inputsBefore, inputsAfter, globals } = loadOverall();
  assert.equal(inputsBefore, inputsAfter);
  assert.deepEqual(globals, ["SWE_PADDLE_DATA", "SWE_PADDLE_STATUS", "SWE_PADDLE_UPDATE"]);
  assert.deepEqual(Object.keys(overall).sort(), ["schemaVersion", "meta", "counts", "evidenceCounts", "tasks"].sort());
  assert.equal(overall.schemaVersion, 1);
  assert.deepEqual(Object.keys(overall.meta).sort(), ["snapshot", "updatedAt", "total", "proposalOnlyIds", "reportUrl"].sort());
  assert.equal(overall.meta.snapshot, update.meta.snapshot);
  assert.equal(overall.meta.updatedAt, update.meta.updatedAt);
  assert.equal(overall.meta.reportUrl, "overall-status-20260909.md");
  for (const task of overall.tasks) {
    const fields = ["id", "title", "type", "author", "status", "packageChangeRequired", "f2p", "p2p", "matrix", "reason", "action", "countsNote", "evidence", "recordSource", "recordSnapshot", "recordUpdatedAt"];
    if (Object.hasOwn(task, "taskPath")) fields.push("taskPath");
    assert.deepEqual(Object.keys(task).sort(), fields.sort(), `${task.id}: strict public field allowlist`);
    assert.ok(["passed", "needs_fix", "failed", "incomplete"].includes(task.status));
    assert.ok(["latest", "retained"].includes(task.recordSource));
    assert.ok(["exact_native", "exact_python", "compatible_native", "historical", "incomplete"].includes(task.evidence));
    for (const field of ["matrix", "reason", "action", "countsNote"]) assert.ok(typeof task[field] === "string" && task[field].trim());
    const source = task.recordSource === "latest" ? update : legacy;
    assert.equal(task.recordSnapshot, source.meta.snapshot);
    assert.equal(task.recordUpdatedAt, source.meta.updatedAt, `${task.id}: evidence record date, not a new execution date`);
  }
});

test("overall inventory is an ID-keyed latest-record merge, not 96 plus 28", () => {
  const { legacy, update, overall } = loadOverall();
  assert.equal(overall.tasks.length, 105);
  assert.equal(new Set(overall.tasks.map((task) => task.id)).size, 105);
  assert.deepEqual(sorted(overall.tasks.map((task) => task.id)), sorted([...legacy.tasks.map((task) => task.id), ...update.meta.newTaskIds]));
  assert.deepEqual(sorted(overall.tasks.filter((task) => task.recordSource === "latest").map((task) => task.id)), sorted(update.tasks.map((task) => task.id)));
  assert.deepEqual(sorted(overall.tasks.filter((task) => task.recordSource === "retained").map((task) => task.id)), sorted(update.meta.unchangedTaskIds));
  assert.ok(overall.meta.proposalOnlyIds.every((id) => !overall.tasks.some((task) => task.id === id)));
  for (const latest of update.tasks) {
    const current = overall.tasks.find((task) => task.id === latest.id);
    assert.equal(current.status, statusMap[latest.status], `${latest.id}: latest outcome overrides previous outcome`);
    for (const field of ["title", "type", "author", "f2p", "p2p", "packageChangeRequired", "reason", "action", "countsNote", "evidence"]) {
      assert.equal(current[field], latest[field], `${latest.id}: latest ${field}`);
    }
  }
  const changed = overall.tasks.find((task) => task.id === 41202);
  assert.equal(changed.status, "needs_fix");
  assert.equal(changed.reason, update.tasks.find((task) => task.id === 41202).reason);
  assert.notEqual(changed.reason, legacy.failures[41202].reason);
  assert.equal(overall.tasks.find((task) => task.id === 79275).taskPath, "PaddlePaddle_Paddle-79275");
});

test("all 77 retained records preserve valid qualitative status and original exception text", () => {
  const { legacy, overall } = loadOverall();
  const retained = overall.tasks.filter((task) => task.recordSource === "retained");
  assert.equal(retained.length, 77);
  for (const task of retained) {
    assert.equal(task.f2p, null, `${task.id}: do not infer counts from prose`);
    assert.equal(task.p2p, null, `${task.id}: do not infer counts from prose`);
    const expected = legacy.directTaskIds.includes(task.id) ? "passed"
      : Object.hasOwn(legacy.notices, task.id) ? "needs_fix"
      : retainedFailed.includes(task.id) ? "failed"
      : retainedIncomplete.includes(task.id) ? "incomplete" : undefined;
    assert.ok(expected, `${task.id}: every retained outcome requires explicit support`);
    assert.equal(task.status, expected);
    assert.equal(task.evidence, expected === "incomplete" ? "incomplete" : "historical");
    assert.equal(task.packageChangeRequired, expected === "passed" ? false : expected === "incomplete" ? null : true);
    const original = legacy.notices[task.id] || legacy.failures[task.id];
    if (original) {
      for (const field of ["matrix", "reason", "action"]) assert.equal(task[field], original[field], `${task.id}: preserve ${field} verbatim`);
    }
  }
  assert.equal(retained.filter((task) => task.status === "passed").length, 55);
  assert.equal(retained.filter((task) => task.status === "needs_fix").length, 14);
  assert.deepEqual(sorted(retained.filter((task) => task.status === "failed").map((task) => task.id)), retainedFailed);
  assert.deepEqual(sorted(retained.filter((task) => task.status === "incomplete").map((task) => task.id)), retainedIncomplete);
});

test("overall 90 passed includes 73 unchanged packages plus 17 required repairs", () => {
  const { overall } = loadOverall();
  const tasks = overall.tasks;
  const byStatus = Object.fromEntries(["passed", "needs_fix", "failed", "incomplete"].map((status) => [status, tasks.filter((task) => task.status === status).length]));
  assert.deepEqual(byStatus, { passed: 73, needs_fix: 17, failed: 8, incomplete: 7 });
  assert.deepEqual(overall.counts, { total: 105, passed: 90, packageUnchanged: 73, packageNeedsFix: 17, failed: 8, incomplete: 7 });
  assert.equal(overall.counts.passed, byStatus.passed + byStatus.needs_fix);
  assert.equal(overall.counts.total, overall.counts.passed + byStatus.failed + byStatus.incomplete);
  const passing = tasks.filter((task) => ["passed", "needs_fix"].includes(task.status));
  const byEvidence = {
    strictPassed: passing.filter((task) => task.recordSource === "latest" && ["exact_native", "exact_python"].includes(task.evidence)).length,
    compatiblePassed: passing.filter((task) => task.recordSource === "latest" && task.evidence === "compatible_native").length,
    retainedPassed: passing.filter((task) => task.recordSource === "retained").length,
  };
  assert.deepEqual(byEvidence, { strictPassed: 8, compatiblePassed: 13, retainedPassed: 69 });
  assert.deepEqual(overall.evidenceCounts, byEvidence);
  assert.equal(Object.values(byEvidence).reduce((sum, value) => sum + value, 0), 90);
});

test("failure and incomplete buckets do not conflate required GPU evidence with a task failure", () => {
  const { legacy, overall } = loadOverall();
  assert.deepEqual(sorted(overall.tasks.filter((task) => task.status === "failed").map((task) => task.id)), [57741, 58323, 59973, 64519, 73122, 76259, 76873, 77495]);
  assert.deepEqual(sorted(overall.tasks.filter((task) => task.status === "incomplete").map((task) => task.id)), [59847, 64320, 64881, 74221, 74305, 78823, 79386]);
  for (const id of [59847, 64320]) {
    const task = overall.tasks.find((row) => row.id === id);
    assert.equal(legacy.failures[id].coreStatus, undefined, "these GPU records require explicit interpretation, not just the old pending flag");
    assert.equal(task.status, "incomplete");
    assert.match(task.matrix, /必需 GPU 未验证/);
  }
  assert.equal(overall.tasks.find((task) => task.id === 50086).status, "passed");
  for (const id of [52948, 57827]) assert.equal(overall.tasks.find((task) => task.id === id).status, "needs_fix");
});
