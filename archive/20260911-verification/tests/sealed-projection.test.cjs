"use strict";

const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const test = require("node:test");
const { loadData } = require("./helpers.cjs");

// Optional control-plane input; never copy the private source report into this repository.
const sealedPath = process.env.SWE_PADDLE_SEALED_RESULT;
const sortedIds = (values) => values.map(Number).sort((a, b) => a - b);
const evidenceMap = {
  exact_source_python_no_native_required: "exact_python",
  exact_compiled_runtime: "exact_native",
  compatible_native_diagnostic: "compatible_native",
  exact_python_modules_on_compatible_native: "compatible_native",
  environment_incomplete: "incomplete",
};

test("public 28-task projection matches the optional sealed FINAL_RESULT byte binding and every outcome", { skip: !sealedPath && "set SWE_PADDLE_SEALED_RESULT to run the private-source cross-check" }, () => {
  const bytes = fs.readFileSync(sealedPath);
  const sealed = JSON.parse(bytes);
  const { update } = loadData();
  assert.equal(crypto.createHash("sha256").update(bytes).digest("hex"), update.meta.sourceReportSha256);
  assert.equal(sealed.schema, "swe-paddle-community-delta-final-v1");
  const scope = sealed.scope;
  assert.equal(update.meta.snapshot, scope.latest_snapshot);
  assert.equal(update.meta.baselineSnapshot, scope.baseline_snapshot);
  assert.equal(update.meta.total, scope.complete_tasks);
  assert.equal(scope.all_105_rerun, false);
  assert.equal(scope.previous_direct_55_list_changed_or_upgraded, false);
  for (const [publicField, sourceField] of [["proposalOnlyIds", "proposal_only_ids"], ["newTaskIds", "new_complete_ids"], ["modifiedTaskIds", "modified_ids"], ["unchangedTaskIds", "unchanged_not_rerun_ids"]]) {
    assert.deepEqual(sortedIds(update.meta[publicField]), sortedIds(scope[sourceField]), publicField);
  }
  const countMap = {
    examined: "examined_changed_tasks", reproducedPassed: "f2p_p2p_reproduced_passed",
    packageUnchanged: "passed_original_package_no_required_change", packageNeedsFix: "passed_but_original_package_change_required",
    notPassed: "f2p_p2p_not_passed", environmentIncomplete: "environment_incomplete",
    strictPassed: "passed_with_strict_exact_source_or_compiled_evidence", compatiblePassed: "passed_with_compatible_native_evidence_only",
  };
  for (const [publicField, sourceField] of Object.entries(countMap)) assert.equal(update.counts[publicField], sealed.counts[sourceField], publicField);
  assert.equal(sealed.counts.new_formal_v2_qualifications_granted, 0);
  assert.deepEqual(sortedIds(update.tasks.map((row) => row.id)), sortedIds(sealed.tasks.map((row) => row.task_id)));
  for (const row of update.tasks) {
    const source = sealed.tasks.find((task) => Number(task.task_id) === row.id);
    const expectedEvidence = evidenceMap[source.evidence_category];
    assert.ok(expectedEvidence, `unknown source evidence category for ${row.id}`);
    const expectedStatus = source.reproduction_status === "environment_incomplete" ? "incomplete"
      : source.reproduction_status === "not_passed" ? "failed"
      : source.package_change_required ? "needs_fix"
      : expectedEvidence === "compatible_native" ? "compatible_pass" : "strict_pass";
    assert.ok(["passed", "not_passed", "environment_incomplete"].includes(source.reproduction_status));
    assert.equal(row.status, expectedStatus, `${row.id}: status`);
    assert.equal(row.evidence, expectedEvidence, `${row.id}: evidence`);
    assert.equal(row.f2p, source.f2p_count, `${row.id}: F2P`);
    assert.equal(row.p2p, source.p2p_count, `${row.id}: P2P`);
    assert.equal(row.packageChangeRequired, source.package_change_required, `${row.id}: package`);
    assert.equal(source.formal_v2_qualification, false, `${row.id}: no formal upgrade`);
    assert.equal(source.leaderboard_eligibility_granted, false, `${row.id}: no leaderboard upgrade`);
  }
});
