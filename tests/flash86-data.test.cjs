'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'../docs/deepseek-v4-flash'),raw=fs.readFileSync(path.join(root,'results.json'),'utf8'),data=JSON.parse(raw);
test('exactly 86 unique tasks, evidence-derived pass and cause counts',()=>{
 assert.equal(data.tasks.length,86);assert.equal(new Set(data.tasks.map(t=>t.id)).size,86);
 const results={},causes={};
 for(const t of data.tasks){results[t.result]=(results[t.result]||0)+1;causes[t.cause]=(causes[t.cause]||0)+1;
  assert.ok(t.reason&&t.finding&&t.next&&t.title);
  assert.equal(t.checks.length,t.expected_f2p+t.expected_p2p);
  if(t.result==='passed'){assert.ok(t.checks.every(c=>c.candidate==='passed'));assert.ok(t.checks.every(c=>c.base===(c.kind==='F2P'?'failed':'passed')));}
  if(t.result==='incomplete')assert.ok(t.checks.every(c=>c.candidate==='not_run'));
 }
 assert.deepEqual(results,data.result_counts);assert.deepEqual(causes,data.cause_counts);
 assert.equal(results.passed,39);assert.equal(results.failed,19);assert.equal(results.review,21);assert.equal(results.incomplete,7);
});
test('uncertain scoring and failed generation cannot become successful repairs',()=>{
 const by=id=>data.tasks.find(t=>t.id===id);
 assert.equal(by(72800).cause,'scorer');assert.equal(by(72800).result,'review');assert.match(by(72800).next,/无需修改原 test.sh/);
 assert.equal(by(64519).result,'failed');assert.equal(by(64519).f2p.failed,4);assert.equal(by(64519).p2p.passed,9);
 assert.equal(by(59127).result,'review');
 for(const id of [65724,68432,73385,73535]){assert.equal(by(id).cause,'environment');assert.match(by(id).reason,/300 秒/);}
 for(const id of [67195,73570,74305])assert.equal(by(id).cause,'generation');
 for(const t of data.tasks.filter(t=>t.diagnostic))assert.notEqual(t.result,'passed');
});
test('public export is allowlisted, current-only, and matches browser data',()=>{
 assert.doesNotMatch(raw,/\/data\/home\/|\/tmp\/|LIBINFER|container_id|candidate\.patch|gold_patch|token_expires|previous_attempt|historical_results/);
 const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'assets/data.js'),'utf8'),ctx);
 assert.deepEqual(JSON.parse(JSON.stringify(ctx.window.FLASH86_DATA)),data);
});
