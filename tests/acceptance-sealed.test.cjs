"use strict";

const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const test = require("node:test");
const { loadAcceptance } = require("./helpers.cjs");

// Optional read-only control-plane source. Never commit the source report here.
const sealedPath = process.env.SWE_PADDLE_ACCEPTANCE_RESULT;
const sorted = (values) => [...values].sort((a, b) => a - b);
const statusMap = { passed_unchanged: "passed", passed_needs_fix: "needs_fix", failed: "failed", environment_incomplete: "incomplete" };

test("full 105 projection matches the optional sealed acceptance SHA and every selected outcome", { skip: !sealedPath && "set SWE_PADDLE_ACCEPTANCE_RESULT for the read-only sealed-source check" }, () => {
  const bytes = fs.readFileSync(sealedPath);
  const sealed = JSON.parse(bytes);
  const { acceptance: data } = loadAcceptance();
  assert.equal(crypto.createHash("sha256").update(bytes).digest("hex"), data.meta.sourceReportSha256);
  assert.equal(sealed.kind, "FULL105_F2P_P2P_AND_ORIGINAL_PACKAGE_ACCEPTANCE");
  assert.equal(data.meta.snapshot, sealed.snapshot);
  assert.equal(data.meta.validationRecordedAt, sealed.created_at_utc);
  assert.equal(data.meta.total, sealed.tasks.length);
  assert.equal(sealed.actual_selected_task_count, 103);
  assert.equal(sealed.tasks.filter((row) => row.runtime_provenance.kind === "patch_preflight").length, 2);
  assert.deepEqual(sorted(data.tasks.map((row) => row.id)), sorted(sealed.tasks.map((row) => row.task_id)));
  assert.equal(data.counts.packageUnchanged, sealed.counts.passed_unchanged);
  assert.equal(data.counts.packageNeedsFix, sealed.counts.passed_needs_fix);
  assert.equal(data.counts.failed, sealed.counts.failed);
  assert.equal(data.counts.incomplete, sealed.counts.environment_incomplete);
  assert.equal(data.counts.passed, sealed.core_passed_count);
  for (const row of data.tasks) {
    const original = sealed.tasks.find((task) => task.task_id === row.id);
    assert.equal(row.status, statusMap[original.status], `${row.id}: status`);
    const mapping = {
      f2p: "f2p_count", p2p: "p2p_count", corePassed: "core_f2p_p2p_pass", originalEntryPassed: "original_entry_pair_passed",
      packageChangeRequired: "requires_package_changes", reason: "reason_display_zh", action: "action_display_zh", countsNote: "counts_display_scope",
    };
    for (const [field, sourceField] of Object.entries(mapping)) assert.equal(row[field], original[sourceField], `${row.id}: ${field}`);
    assert.equal(row.evidence, original.runtime_provenance.kind, `${row.id}: exact source scope, no relabeling`);
    assert.equal(row.selectedEvidenceSha256, original.selected_source_binding.sha256, `${row.id}: source binding`);
    assert.equal(row.recordSnapshot, original.snapshot);
    assert.equal(row.recordUpdatedAt, sealed.created_at_utc.slice(0, 10));
    assert.equal(row.status === "passed", original.can_evaluate_unmodified);
  }
  for (const [scope, actual] of Object.entries(data.readyScopeCounts)) assert.equal(actual, sealed.ready_scope_counts[scope] || 0, scope);
});
