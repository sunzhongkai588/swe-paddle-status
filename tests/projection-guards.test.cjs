"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const vm = require("node:vm");
const { loadData, readPublic } = require("./helpers.cjs");

const cases = [
  ["missing update", (window) => { delete window.SWE_PADDLE_UPDATE; }],
  ["unknown latest status", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks[0].status = "unclassified"; }],
  ["missing changed record", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks.pop(); }],
  ["duplicate changed record", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks.push({ ...update.tasks[0] }); }],
  ["zero F2P labeled as passed", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks[0].f2p = 0; }],
  ["compatibility evidence relabeled strict", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks.find((task) => task.status === "compatible_pass").status = "strict_pass"; }],
  ["incomplete F2P mislabeled zero", ({ SWE_PADDLE_UPDATE: update }) => { update.tasks.find((task) => task.status === "incomplete").f2p = 0; }],
  ["missing historical classification", ({ SWE_PADDLE_DATA: legacy }) => { legacy.directTaskIds.pop(); }],
  ["proposal-only ID inside complete inventory", ({ SWE_PADDLE_UPDATE: update }) => { update.meta.proposalOnlyIds[0] = update.tasks[0].id; }],
  ["incorrect latest counts", ({ SWE_PADDLE_UPDATE: update }) => { update.counts.reproducedPassed += 1; }],
  ["snapshot binding changed", ({ SWE_PADDLE_UPDATE: update }) => { update.meta.snapshot = "0".repeat(40); }],
  ["record date silently rewritten", ({ SWE_PADDLE_DATA: legacy }) => { legacy.meta.updatedAt = "2026-09-09"; }],
  ["GPU incomplete evidence removed", ({ SWE_PADDLE_DATA: legacy }) => { legacy.failures[59847].matrix = "all GPU checks passed"; }],
  ["pending evidence silently converted to failure", ({ SWE_PADDLE_DATA: legacy }) => { delete legacy.failures[74221].coreStatus; }],
  ["historical alias rewritten", ({ SWE_PADDLE_DATA: legacy }) => { legacy.tasks.find((task) => task.id === 79275).taskPath = "PaddlePaddle__Paddle-79275"; }],
];

for (const [name, mutate] of cases) {
  test(`overall derivation fails closed: ${name}`, () => {
    const { legacy, update } = loadData();
    const window = { SWE_PADDLE_DATA: legacy, SWE_PADDLE_UPDATE: update };
    mutate(window);
    assert.throws(() => vm.runInNewContext(readPublic("assets/overall-status.js"), { window }, { timeout: 1000 }), /SWE-Paddle overall status:/);
    assert.equal(Object.hasOwn(window, "SWE_PADDLE_STATUS"), false, "a rejected derivation must not publish a partial projection");
  });
}
