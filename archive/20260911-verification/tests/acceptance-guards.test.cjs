"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const vm = require("node:vm");
const { loadOverall, readPublic } = require("./helpers.cjs");
const source = readPublic("assets/acceptance-20260910.js");
const pattern = /const records = (\[[\s\S]*?\n  \]);\n  \/\/ END ALLOWLISTED RECORDS/;
const original = JSON.parse(source.match(pattern)[1]);

const cases = [
  ["missing metadata", (_, window) => { delete window.SWE_PADDLE_STATUS; }],
  ["snapshot mismatch", (_, window) => { window.SWE_PADDLE_STATUS.meta.snapshot = "0".repeat(40); }],
  ["duplicate record", (rows) => { rows.push({ ...rows[0] }); }],
  ["missing record", (rows) => { rows.pop(); }],
  ["unknown status", (rows) => { rows[0].status = "unclassified"; }],
  ["unknown scope", (rows) => { rows[0].evidence = "assumed_native"; }],
  ["zero F2P cannot pass", (rows) => { rows[0].f2p = 0; }],
  ["zero P2P cannot pass", (rows) => { rows[0].p2p = 0; }],
  ["negative count", (rows) => { rows[0].f2p = -1; }],
  ["string count", (rows) => { rows[0].p2p = "1"; }],
  ["core false cannot pass", (rows) => { rows[0].corePassed = false; }],
  ["original false cannot be ready", (rows) => { rows[0].originalEntryPassed = false; }],
  ["needs-fix package cannot be ready", (rows) => { rows[0].packageChangeRequired = true; }],
  ["incomplete cannot invent counts", (rows) => { rows.find((row) => row.id === 59847).f2p = 0; }],
  ["preflight cannot invent counts", (rows) => { rows.find((row) => row.id === 76259).p2p = 1; }],
  ["unknown raw fields are not projected", (rows) => { rows[0].raw_logs = "not public"; }],
  ["invalid source digest", (rows) => { rows[0].selectedEvidenceSha256 = "missing"; }],
  ["private path in reason", (rows) => { rows[0].reason = "/home/example/private-evidence"; }],
  ["private metadata text", (_, window) => { window.SWE_PADDLE_STATUS.tasks[0].title = "/Users/example/private"; }],
  ["wrong source alias", (_, window) => { window.SWE_PADDLE_STATUS.tasks.find((row) => row.id === 79275).taskPath = "PaddlePaddle__Paddle-79275"; }],
  ["proposal enters complete inventory", (_, window) => { window.SWE_PADDLE_STATUS.meta.proposalOnlyIds[0] = 18687; }],
];

for (const [label, mutate] of cases) {
  test(`acceptance fails closed: ${label}`, () => {
    const rows = structuredClone(original);
    const window = { SWE_PADDLE_STATUS: loadOverall().overall };
    mutate(rows, window);
    const changed = source.replace(pattern, `const records = ${JSON.stringify(rows)};\n  // END ALLOWLISTED RECORDS`);
    assert.throws(() => vm.runInNewContext(changed, { window }, { timeout: 1000 }), /SWE-Paddle acceptance:/);
    assert.equal(Object.hasOwn(window, "SWE_PADDLE_ACCEPTANCE"), false);
  });
}

test("old statuses are metadata only and cannot overwrite new acceptance outcomes", () => {
  const window = { SWE_PADDLE_STATUS: loadOverall().overall };
  for (const row of window.SWE_PADDLE_STATUS.tasks) { row.status = "obsolete"; row.f2p = -1; row.reason = "old evidence"; }
  vm.runInNewContext(source, { window }, { timeout: 1000 });
  assert.equal(window.SWE_PADDLE_ACCEPTANCE.counts.packageUnchanged, 71);
  assert.equal(window.SWE_PADDLE_ACCEPTANCE.tasks.find((row) => row.id === 52948).status, "needs_fix");
  assert.ok(window.SWE_PADDLE_ACCEPTANCE.tasks.every((row) => row.reason !== "old evidence"));
});
