"use strict";
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const test = require("node:test");
const vm = require("node:vm");
const {loadAcceptance, readPublic} = require("./helpers.cjs");

function load() {
  const original = loadAcceptance().acceptance;
  const before = JSON.stringify(original);
  const window = {SWE_PADDLE_ACCEPTANCE:original};
  vm.runInNewContext(readPublic("assets/acceptance-recheck-20260911.js"), {window});
  vm.runInNewContext(readPublic("assets/verification-audit-20260911.js"), {window});
  assert.equal(JSON.stringify(original), before);
  return {original, current:JSON.parse(JSON.stringify(window.SWE_PADDLE_CURRENT_ACCEPTANCE)), audit:JSON.parse(JSON.stringify(window.SWE_PADDLE_VERIFICATION_AUDIT))};
}

test("revision preserves all 105 records and changes status only after full-scope recovery", () => {
  const {original,current}=load();
  assert.equal(current.tasks.length,105);
  assert.deepEqual(current.tasks.map(t=>t.id),original.tasks.map(t=>t.id));
  assert.deepEqual(current.tasks.filter(t=>t.status!==original.tasks.find(o=>o.id===t.id).status).map(t=>t.id),[59348]);
  for (const t of current.tasks) if (![57827,59021,59348].includes(t.id)) assert.deepEqual(t,original.tasks.find(o=>o.id===t.id));
  assert.deepEqual(current.counts,{total:105,passed:90,packageUnchanged:71,packageNeedsFix:19,failed:12,incomplete:3});
});

test("successful target subsets cannot promote unresolved full scopes", () => {
  const {current,audit}=load();
  for (const [id,f,p] of [[57827,2,2],[59021,3,6]]) {
    const t=current.tasks.find(t=>t.id===id);
    assert.equal(t.status,"failed"); assert.equal(t.corePassed,false);
    assert.equal(t.f2p,f); assert.equal(t.p2p,p);
    assert.match(t.countsNote,/子集/);
    assert.ok(audit.tasks.find(t=>t.id===id).checks.some(c=>c.name.startsWith("原范围仍需处理：")));
  }
  const recovered=current.tasks.find(t=>t.id===59348);
  assert.equal(recovered.status,"needs_fix"); assert.equal(recovered.f2p,13); assert.equal(recovered.p2p,2);
  assert.equal(recovered.originalEntryPassed,false);
});

test("all 34 original-package issues receive explicit explanations and complete check names", () => {
  const {current,audit}=load();
  assert.equal(audit.tasks.length,105);
  const problems=current.tasks.filter(t=>t.status!=="passed");
  assert.equal(problems.length,34);
  for (const t of problems) {
    const row=audit.tasks.find(r=>r.id===t.id);
    assert.ok(row.checks.length>0,t.id);
    for (const key of ["summary","category","action","history","evidenceNote"]) assert.ok(row[key].trim(),`${t.id} ${key}`);
    assert.doesNotMatch(row.summary,/待核对具体失败原因|根据原入口\/节点故障说明/);
    for (const c of row.checks) { assert.equal(c.base.length,2);assert.equal(c.gold.length,2);assert.ok(c.name.trim()); }
  }
});

test("unexecuted hardware and patch checks never become completed test failures", () => {
  const {current,audit}=load();
  for (const id of [59847,64320,78823,76259,77495]) {
    const t=current.tasks.find(t=>t.id===id);
    assert.equal(t.f2p,null); assert.equal(t.p2p,null);
    const check=audit.tasks.find(t=>t.id===id).checks[0];
    assert.deepEqual([...check.base,...check.gold],["not_run","not_run","not_run","not_run"]);
  }
});

const privatePath=process.env.SWE_PADDLE_RECHECK_RESULT;
test("public corrections agree with the actual four-round recheck evidence",{skip:!privatePath && "set SWE_PADDLE_RECHECK_RESULT for private source verification"},()=>{
  const bytes=fs.readFileSync(privatePath); const evidence=JSON.parse(bytes);
  const {current,audit}=load();
  assert.equal(current.meta.recheckSourceSha256,crypto.createHash("sha256").update(bytes).digest("hex"));
  for (const original of evidence.findings.slice(0,3)) {
    const t=current.tasks.find(t=>t.id===original.task_id);
    assert.equal(t.f2p,original.f2p_count); assert.equal(t.p2p,original.p2p_count);
    assert.equal(t.selectedEvidenceSha256,current.meta.recheckSourceSha256);
    assert.ok(original.four_rounds); assert.ok(Object.values(original.input_digest_match).every(Boolean));
    const row=audit.tasks.find(r=>r.id===t.id);
    for (const [name,values] of Object.entries(original.outcomes)) {
      const check=row.checks.find(c=>c.name===name);
      assert.ok(check,`${t.id}: ${name}`); assert.deepEqual([...check.base,...check.gold],values);
    }
  }
});
