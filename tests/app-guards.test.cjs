"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const vm = require("node:vm");
const { loadData, readPublic } = require("./helpers.cjs");

function validateBeforeRendering(mutate) {
  const { legacy, update } = loadData();
  const window = { SWE_PADDLE_DATA: legacy, SWE_PADDLE_UPDATE: update };
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
  ["missing current update", (window) => { delete window.SWE_PADDLE_UPDATE; }],
  ["unknown current status cannot default to pass", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks[0].status = "unclassified"; }],
  ["a missing task cannot silently shrink the current denominator", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks.pop(); }],
  ["duplicate current task IDs are rejected", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks.push({ ...update.tasks[0] }); }],
  ["zero F2P cannot qualify a passing task", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks[0].f2p = 0; }],
  ["compatible native evidence cannot be relabeled strict", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks.find((task) => task.status === "compatible_pass").status = "strict_pass"; }],
  ["unobserved incomplete F2P cannot become measured zero", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks.find((task) => task.status === "incomplete").f2p = 0; }],
  ["an incomplete package decision must remain unknown", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks.find((task) => task.status === "incomplete").packageChangeRequired = false; }],
  ["entrypoint repair requires compatible diagnostic evidence", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks.find((task) => task.status === "needs_fix").evidence = "exact_native"; }],
  ["historical missing classifications cannot default to pass", ({ SWE_PADDLE_DATA: legacy }) => { legacy.directTaskIds.pop(); }],
  ["proposal-only IDs cannot enter the complete inventory", ({ SWE_PADDLE_UPDATE: update }) => { update.meta.proposalOnlyIds.push(update.tasks[0].id); }],
  ["incorrect aggregate counts are rejected", ({ SWE_PADDLE_UPDATE: update }) => { update.counts.reproducedPassed += 1; }],
];

for (const [name, mutate] of invalidCases) {
  test(`application fails closed: ${name}`, () => {
    assert.throws(() => validateBeforeRendering(mutate), /SWE-Paddle (?:historical data|snapshot inventories|current validation counts)/);
  });
}
