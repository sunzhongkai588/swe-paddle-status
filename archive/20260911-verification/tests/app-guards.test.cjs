"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const vm = require("node:vm");
const { loadOverall, readPublic } = require("./helpers.cjs");

function validateBeforeRendering(mutate) {
  const { legacy, update, overall } = loadOverall();
  const window = { SWE_PADDLE_DATA: legacy, SWE_PADDLE_UPDATE: update, SWE_PADDLE_STATUS: overall };
  vm.runInNewContext(readPublic("assets/acceptance-20260910.js"), { window }, { timeout: 1000 });
  window.SWE_PADDLE_ACCEPTANCE = JSON.parse(JSON.stringify(window.SWE_PADDLE_ACCEPTANCE));
  vm.runInNewContext(readPublic("assets/issue-explanations-20260910.js"), { window }, { timeout: 1000 });
  window.SWE_PADDLE_ISSUE_EXPLANATIONS = JSON.parse(JSON.stringify(window.SWE_PADDLE_ISSUE_EXPLANATIONS));
  vm.runInNewContext(readPublic("assets/acceptance-recheck-20260911.js"), { window }, { timeout: 1000 });
  window.SWE_PADDLE_CURRENT_ACCEPTANCE = JSON.parse(JSON.stringify(window.SWE_PADDLE_CURRENT_ACCEPTANCE));
  vm.runInNewContext(readPublic("assets/verification-audit-20260911.js"), { window }, { timeout: 1000 });
  window.SWE_PADDLE_VERIFICATION_AUDIT = JSON.parse(JSON.stringify(window.SWE_PADDLE_VERIFICATION_AUDIT));
  mutate(window);
  const document = { getElementById() { throw new Error("Reached DOM after validated inventory"); } };
  vm.runInNewContext(readPublic("assets/app.js"), { window, document }, { timeout: 1000 });
}

test("application accepts complete current acceptance before rendering", () => {
  assert.throws(() => validateBeforeRendering(() => {}), /Reached DOM after validated inventory/);
});

const invalidCases = [
  ["missing current acceptance cannot fall back to historical status", (window) => { delete window.SWE_PADDLE_CURRENT_ACCEPTANCE; }],
  ["unknown status cannot default to pass", (data) => { data.tasks[0].status = "unclassified"; }],
  ["missing task cannot shrink the denominator", (data) => { data.tasks.pop(); }],
  ["duplicate IDs are rejected", (data) => { data.tasks.push({ ...data.tasks[0] }); }],
  ["zero F2P cannot qualify passing task", (data) => { data.tasks.find((t) => t.status === "passed").f2p = 0; }],
  ["zero P2P cannot qualify passing task", (data) => { data.tasks.find((t) => t.status === "passed").p2p = 0; }],
  ["compatible cannot silently become exact native", (data) => { data.tasks.find((t) => t.evidence === "exact_python_compatible_native" && t.status === "passed").evidence = "exact_native"; }],
  ["lightweight cannot silently become exact Python", (data) => { data.tasks.find((t) => t.evidence === "lightweight_source").evidence = "exact_python"; }],
  ["unknown evidence is rejected", (data) => { data.tasks[0].evidence = "unspecified"; }],
  ["hardware incomplete F2P stays unknown", (data) => { data.tasks.find((t) => t.status === "incomplete").f2p = 0; }],
  ["hardware package decision stays unknown", (data) => { data.tasks.find((t) => t.status === "incomplete").packageChangeRequired = false; }],
  ["hardware incomplete cannot claim core passed", (data) => { data.tasks.find((t) => t.status === "incomplete").corePassed = true; }],
  ["patch preflight cannot manufacture dynamic counts", (data) => { data.tasks.find((t) => t.evidence === "patch_preflight").p2p = 1; }],
  ["needs-fix cannot hide package change", (data) => { data.tasks.find((t) => t.status === "needs_fix").packageChangeRequired = false; }],
  ["passed package state must agree", (data) => { data.tasks.find((t) => t.status === "passed").packageChangeRequired = true; }],
  ["directly usable requires original entry pass", (data) => { data.tasks.find((t) => t.status === "passed").originalEntryPassed = false; }],
  ["failed cannot claim whole-core pass", (data) => { data.tasks.find((t) => t.status === "failed").corePassed = true; }],
  ["record source is not a fifth outcome", (data) => { data.tasks[0].status = "full_acceptance"; }],
  ["current row cannot be historical fallback", (data) => { data.tasks[0].recordSource = "retained"; }],
  ["record revision stays bound", (data) => { data.tasks[0].recordSnapshot = "c9e46547"; }],
  ["proposal cannot enter complete inventory", (data) => { data.meta.proposalOnlyIds.push(data.tasks[0].id); }],
  ["proposal duplicates are rejected", (data) => { data.meta.proposalOnlyIds.push(data.meta.proposalOnlyIds[0]); }],
  ["aggregate counts must match", (data) => { data.counts.passed += 1; }],
  ["evidence counts partition core-passing tasks", (data) => { data.evidenceCounts.lightweightPassed += 1; }],
  ["report digest must exist", (data) => { data.meta.sourceReportSha256 = ""; }],
  ["selected evidence digest must exist", (data) => { data.tasks[0].selectedEvidenceSha256 = ""; }],
  ["validation timestamp must be valid", (data) => { data.meta.validationRecordedAt = "not-a-date"; }],
];

for (const [index, [name, mutate]] of invalidCases.entries()) {
  test(`application fails closed: ${name}`, () => {
    assert.throws(() => validateBeforeRendering((window) => mutate(index === 0 ? window : window.SWE_PADDLE_CURRENT_ACCEPTANCE)),
      /SWE-Paddle (?:source records|acceptance inventory|acceptance counts)/);
  });
}

const invalidExplanations = [
  ["missing supplemental module", (window) => { delete window.SWE_PADDLE_ISSUE_EXPLANATIONS; }],
  ["missing needs-fix explanation", ({ SWE_PADDLE_ISSUE_EXPLANATIONS: notes }) => { notes.tasks.pop(); }],
  ["duplicate explanation ID", ({ SWE_PADDLE_ISSUE_EXPLANATIONS: notes }) => { notes.tasks[1].id = notes.tasks[0].id; }],
  ["explanation for an unrelated task", ({ SWE_PADDLE_ISSUE_EXPLANATIONS: notes }) => { notes.tasks[0].id = 18687; }],
  ["extra explanation for a passed task", ({ SWE_PADDLE_ISSUE_EXPLANATIONS: notes }) => { notes.tasks.push({ id: 18687, explanation: "not a repair" }); }],
  ["wrong snapshot", ({ SWE_PADDLE_ISSUE_EXPLANATIONS: notes }) => { notes.meta.snapshot = "0".repeat(40); }],
  ["wrong source report digest", ({ SWE_PADDLE_ISSUE_EXPLANATIONS: notes }) => { notes.meta.sourceReportSha256 = "0".repeat(64); }],
  ["empty explanation text", ({ SWE_PADDLE_ISSUE_EXPLANATIONS: notes }) => { notes.tasks[0].explanation = "  "; }],
  ["non-text explanation", ({ SWE_PADDLE_ISSUE_EXPLANATIONS: notes }) => { notes.tasks[0].explanation = {}; }],
];

for (const [name, mutate] of invalidExplanations) {
  test(`application rejects issue explanations: ${name}`, () => {
    assert.throws(() => validateBeforeRendering(mutate), /SWE-Paddle issue explanations/);
  });
}
