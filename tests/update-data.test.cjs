"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const { docs, loadData } = require("./helpers.cjs");

const sorted = (values) => [...values].sort((a, b) => a - b);
const statuses = ["strict_pass", "compatible_pass", "needs_fix", "failed", "incomplete"];
const evidence = ["exact_python", "exact_native", "compatible_native", "incomplete"];

function exactKeys(object, expected, label) {
  assert.deepEqual(Object.keys(object).sort(), [...expected].sort(), `${label}: public allowlist differs`);
}

test("current projection uses only the reviewed public schema", () => {
  const { legacy, update } = loadData();
  exactKeys(update, ["schemaVersion", "meta", "counts", "tasks"], "update");
  assert.equal(update.schemaVersion, 1);
  exactKeys(update.meta, ["snapshot", "baselineSnapshot", "updatedAt", "total", "proposalOnlyIds", "newTaskIds", "modifiedTaskIds", "unchangedTaskIds", "reportUrl", "sourceReportSha256"], "meta");
  exactKeys(update.counts, ["examined", "reproducedPassed", "packageUnchanged", "packageNeedsFix", "notPassed", "environmentIncomplete", "strictPassed", "compatiblePassed"], "counts");
  assert.equal(update.meta.snapshot, "207998dab8c4c76c8558c3cca8ef177c69f10c1c");
  assert.equal(update.meta.baselineSnapshot, legacy.meta.snapshot);
  assert.equal(update.meta.updatedAt, "2026-09-09");
  assert.match(update.meta.sourceReportSha256, /^[a-f0-9]{64}$/);
  assert.match(update.meta.reportUrl, /^[a-z0-9-]+\.md$/);
  assert.ok(fs.existsSync(path.join(docs, update.meta.reportUrl)));
  for (const task of update.tasks) {
    exactKeys(task, ["id", "title", "type", "author", "changeKind", "status", "f2p", "p2p", "packageChangeRequired", "evidence", "reason", "action", "countsNote"], `task ${task.id}`);
    assert.ok(Number.isSafeInteger(task.id) && task.id > 0);
    assert.ok(["bugfix", "feature", "refactor"].includes(task.type));
    assert.ok(["new", "modified"].includes(task.changeKind));
    assert.ok(statuses.includes(task.status), `unclassified task ${task.id}`);
    assert.ok(evidence.includes(task.evidence));
    assert.ok(Object.hasOwn(legacy.authors, task.author), `unknown author for ${task.id}`);
    for (const field of ["title", "reason", "action", "countsNote"]) assert.ok(typeof task[field] === "string" && task[field].trim());
    if (task.status === "incomplete") {
      assert.equal(task.f2p, null);
      assert.equal(task.p2p, null);
      assert.equal(task.packageChangeRequired, null);
      assert.equal(task.evidence, "incomplete");
    } else {
      assert.ok(Number.isSafeInteger(task.f2p) && task.f2p >= 0);
      assert.ok(Number.isSafeInteger(task.p2p) && task.p2p >= 0);
      assert.equal(typeof task.packageChangeRequired, "boolean");
    }
  }
});

test("explicit 105-task inventory partitions into 9 new, 19 modified and 77 not rerun", () => {
  const { legacy, update } = loadData();
  const { meta, tasks } = update;
  assert.equal(meta.total, 105);
  assert.equal(meta.newTaskIds.length, 9);
  assert.equal(meta.modifiedTaskIds.length, 19);
  assert.equal(meta.unchangedTaskIds.length, 77);
  const completeIds = [...meta.newTaskIds, ...meta.modifiedTaskIds, ...meta.unchangedTaskIds];
  assert.equal(new Set(completeIds).size, 105, "inventory must be explicit and disjoint");
  assert.ok(completeIds.every(Number.isSafeInteger));
  assert.equal(tasks.length, 28);
  assert.equal(new Set(tasks.map((task) => task.id)).size, 28);
  assert.deepEqual(sorted(tasks.map((task) => task.id)), sorted([...meta.newTaskIds, ...meta.modifiedTaskIds]));
  assert.deepEqual(sorted(legacy.tasks.map((task) => task.id)), sorted([...meta.modifiedTaskIds, ...meta.unchangedTaskIds]));
  assert.deepEqual(sorted(meta.proposalOnlyIds), [56723, 78220, 79391, 79657]);
  assert.ok(meta.proposalOnlyIds.every((id) => !completeIds.includes(id)), "proposal-only records cannot enter the denominator");
  for (const task of tasks) {
    assert.equal(task.changeKind, meta.newTaskIds.includes(task.id) ? "new" : "modified");
    if (task.changeKind === "modified") {
      const historical = legacy.tasks.find((row) => row.id === task.id);
      for (const field of ["title", "author", "type"]) assert.equal(task[field], historical[field], `${task.id}: historical ${field}`);
    }
  }
  assert.ok(legacy.directTaskIds.every((id) => meta.unchangedTaskIds.includes(id)), "the previous 55 have not been rerun or upgraded");
  const alias = legacy.tasks.find((task) => task.id === 79275);
  assert.ok(alias.taskPath && alias.taskPath.includes("79275"), "historical task-path alias must survive");
});

test("28 mutually exclusive outcomes retain both separate 21-pass breakdowns", () => {
  const { update } = loadData();
  const counts = Object.fromEntries(statuses.map((status) => [status, update.tasks.filter((task) => task.status === status).length]));
  assert.deepEqual(counts, { strict_pass: 8, compatible_pass: 10, needs_fix: 3, failed: 5, incomplete: 2 });
  assert.deepEqual(update.counts, { examined: 28, reproducedPassed: 21, packageUnchanged: 18, packageNeedsFix: 3, notPassed: 5, environmentIncomplete: 2, strictPassed: 8, compatiblePassed: 13 });
  const passing = update.tasks.filter((task) => ["strict_pass", "compatible_pass", "needs_fix"].includes(task.status));
  assert.equal(passing.length, 21);
  assert.equal(passing.filter((task) => !task.packageChangeRequired).length, 18);
  assert.equal(passing.filter((task) => task.packageChangeRequired).length, 3);
  assert.equal(passing.filter((task) => task.evidence === "compatible_native").length, 13);
  assert.equal(passing.filter((task) => task.evidence !== "compatible_native").length, 8);
  for (const task of passing) {
    assert.ok(task.f2p > 0 && task.p2p > 0, `${task.id} lacks a required transition`);
    assert.equal(task.packageChangeRequired, task.status === "needs_fix");
    assert.equal(task.evidence === "compatible_native", task.status !== "strict_pass");
  }
});

test("regression cases preserve incomplete evidence, zero F2P and compatibility caveats", () => {
  const { legacy, update } = loadData();
  const byId = new Map(update.tasks.map((task) => [task.id, task]));
  for (const id of [64881, 79386]) {
    assert.equal(byId.get(id).status, "incomplete");
    assert.equal(byId.get(id).f2p, null);
    assert.equal(byId.get(id).p2p, null);
    assert.match(byId.get(id).countsNote, /不等同|不是任务语义失败/);
  }
  assert.equal(byId.get(73122).status, "failed");
  assert.equal(byId.get(73122).f2p, 0);
  assert.equal(byId.get(73122).p2p, 3);
  assert.equal(byId.get(41202).status, "needs_fix");
  assert.match(byId.get(41202).reason, /原入口/);
  assert.equal(byId.get(79633).status, "compatible_pass");
  assert.equal(byId.get(79633).evidence, "compatible_native");
  assert.match(byId.get(79633).reason, /三个完整 Python 模块/);
  assert.match(byId.get(79633).reason, /原生运行时.*非指定|原生运行时.*兼容/);
  assert.equal(byId.has(76259), false);
  assert.ok(legacy.failures[76259].reason, "Windows historical reason must remain available");
});
