"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const vm = require("node:vm");
const { loadOverall, readPublic } = require("./helpers.cjs");

function validateBeforeRendering(mutate) {
  const { legacy, update, overall } = loadOverall();
  const window = { SWE_PADDLE_DATA: legacy, SWE_PADDLE_UPDATE: update, SWE_PADDLE_STATUS: overall };
  mutate(window);
  const document = {
    getElementById() { throw new Error("Reached DOM after validated inventory"); },
  };
  vm.runInNewContext(readPublic("assets/app.js"), { window, document }, { timeout: 1000 });
}

test("application guard accepts valid evidence before rendering", () => {
  assert.throws(() => validateBeforeRendering(() => {}), /Reached DOM after validated inventory/);
});

const invalidCases = [
  ["missing overall projection", (window) => { delete window.SWE_PADDLE_STATUS; }],
  ["unknown overall status cannot default to pass", ({ SWE_PADDLE_STATUS: data }) => { data.tasks[0].status = "unclassified"; }],
  ["a missing task cannot silently shrink the overall denominator", ({ SWE_PADDLE_STATUS: data }) => { data.tasks.pop(); }],
  ["duplicate overall task IDs are rejected", ({ SWE_PADDLE_STATUS: data }) => { data.tasks.push({ ...data.tasks[0] }); }],
  ["zero F2P cannot qualify a newly validated passing task", ({ SWE_PADDLE_STATUS: data }) => { data.tasks.find((task) => task.recordSource === "latest" && task.status === "passed").f2p = 0; }],
  ["retained evidence cannot be upgraded to exact native", ({ SWE_PADDLE_STATUS: data }) => { data.tasks.find((task) => task.recordSource === "retained" && task.status === "passed").evidence = "exact_native"; }],
  ["retained unmeasured counts cannot be inferred as zero", ({ SWE_PADDLE_STATUS: data }) => { data.tasks.find((task) => task.recordSource === "retained").f2p = 0; }],
  ["unobserved incomplete F2P cannot become measured zero", ({ SWE_PADDLE_STATUS: data }) => { data.tasks.find((task) => task.status === "incomplete").f2p = 0; }],
  ["an incomplete package decision must remain unknown", ({ SWE_PADDLE_STATUS: data }) => { data.tasks.find((task) => task.status === "incomplete").packageChangeRequired = false; }],
  ["a needs-fix task cannot hide the required package change", ({ SWE_PADDLE_STATUS: data }) => { data.tasks.find((task) => task.status === "needs_fix").packageChangeRequired = false; }],
  ["a passed task cannot contradict its package state", ({ SWE_PADDLE_STATUS: data }) => { data.tasks.find((task) => task.status === "passed").packageChangeRequired = true; }],
  ["record source is not a fifth outcome", ({ SWE_PADDLE_STATUS: data }) => { data.tasks.find((task) => task.recordSource === "retained").status = "retained"; }],
  ["source membership cannot manufacture a new run", ({ SWE_PADDLE_STATUS: data }) => { data.tasks.find((task) => task.recordSource === "retained").recordSource = "latest"; }],
  ["retained snapshot cannot become the current snapshot", ({ SWE_PADDLE_STATUS: data }) => { data.tasks.find((task) => task.recordSource === "retained").recordSnapshot = data.meta.snapshot; }],
  ["proposal-only IDs cannot enter the complete inventory", ({ SWE_PADDLE_STATUS: data }) => { data.meta.proposalOnlyIds.push(data.tasks[0].id); }],
  ["incorrect aggregate counts are rejected", ({ SWE_PADDLE_STATUS: data }) => { data.counts.passed += 1; }],
  ["incorrect evidence-level counts are rejected", ({ SWE_PADDLE_STATUS: data }) => { data.evidenceCounts.retainedPassed += 1; }],
];

for (const [name, mutate] of invalidCases) {
  test(`application fails closed: ${name}`, () => {
    assert.throws(() => validateBeforeRendering(mutate), /SWE-Paddle (?:source records|overall inventory|overall counts)/);
  });
}
