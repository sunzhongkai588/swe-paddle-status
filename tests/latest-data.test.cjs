'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const docs=path.resolve(__dirname,'../docs');
const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(docs,'assets/latest-data.js'),'utf8'),context);
const data=JSON.parse(JSON.stringify(context.window.SWE_PADDLE_LATEST));
const byId=id=>data.tasks.find(t=>t.id===id);
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
test('published root contains a single current dataset and current report',()=>{
 assert.equal(data.tasks.length,115);assert.equal(new Set(data.tasks.map(t=>t.id)).size,115);
 assert.equal(data.meta.total,115);
 assert.equal(data.meta.snapshot,'276ec3d1a779c3feac8a3aaa67faefd55c8f5a3e');
 assert.deepEqual(data.meta.proposalOnlyIds,[56723,78220,79391,79497,79510,79612,79654]);
 const files=walk(docs).map(p=>path.relative(docs,p)).sort();
 assert.ok(files.includes('deepseek-v4-flash/results.json'));
 assert.ok(files.includes('assets/latest-data.js'));
 assert.ok(files.includes('latest-report.md'));
 assert.ok(!files.some(p=>p.startsWith('archive/')||p.startsWith('checks/')));
 const html=fs.readFileSync(path.join(docs,'index.html'),'utf8');
 assert.deepEqual([...html.matchAll(/<script src="([^"]+)"/g)].map(m=>m[1].split('?')[0]),['assets/latest-data.js','assets/app.js']);
 assert.doesNotMatch(html,/历史|上一版|更新记录|复验前|原验收|封存/);
 for(const p of files){if(p.endsWith('.js')||p.endsWith('.html')||p.endsWith('.md')){
  const text=fs.readFileSync(path.join(docs,p),'utf8');
  assert.doesNotMatch(text,/\/data\/home\/|\/home\/disk3\/|\/harness|container_id|libpaddle_sha256/);
  if(!p.startsWith('deepseek-v4-flash/'))assert.doesNotMatch(text,/历史记录|上一版结论/);
 }}
});
test('all tasks have explicit current outcomes and readable diagnoses',()=>{
 const counts={passed:0,needs_fix:0,failed:0,incomplete:0};
 for(const t of data.tasks){
  assert.ok(t.status in counts,t.id);counts[t.status]++;
  assert.ok(['none','data','verification','machine','mixed','unknown'].includes(t.cause),t.id);
  assert.equal(typeof t.corePassed,'boolean',t.id);
  assert.equal(t.oracle.passed,['passed','needs_fix'].includes(t.status),t.id);
  assert.ok(!('history'in t));assert.ok(!('recordSource'in t));
  for(const key of ['summary','whatFailed','why','fix','proof','requirements'])assert.ok(typeof t[key]==='string'&&t[key].length>5,`${t.id} ${key}`);
  if(t.status!=='passed')assert.notEqual(t.cause,'none',t.id);
  if(t.status==='passed')assert.equal(t.packageChangeRequired,false,t.id);
  if(t.corePassed){assert.ok(t.f2p>0,t.id);assert.ok(t.p2p>0,t.id);}
  assert.equal(new Set(t.checks.map(c=>c.name+'|'+(c.condition||''))).size,t.checks.length,t.id);
  for(const c of t.checks){assert.equal(c.base.length,2);assert.equal(c.gold.length,2);assert.equal(typeof c.effective,'boolean');assert.doesNotMatch(c.name,/^必需硬件分支|^原始 tests\/test.sh/);}
 }
 assert.deepEqual(counts,data.counts);
});
test('counts use only effective paired tests, with explicitly explained target aborts',()=>{
 for(const t of data.tasks){
  if(t.f2p==null){assert.equal(t.p2p,null);continue;}
  const f=t.checks.filter(c=>c.effective&&c.gold.every(s=>s==='passed')&&c.base.every(s=>['failed','target_abort','target_sigabrt'].includes(s))).length;
  const p=t.checks.filter(c=>c.effective&&[...c.base,...c.gold].every(s=>s==='passed')).length;
  assert.equal(f,t.f2p,`${t.id} F2P`);assert.equal(p,t.p2p,`${t.id} P2P`);
 }
});
test('empty aminmax gradient check is retained visibly but excluded',()=>{
 const t=byId(78441);assert.equal(t.f2p,26);assert.equal(t.p2p,4);assert.equal(t.oracle.passed,true);
 const c=t.checks.find(c=>c.name.includes('TestAminmaxOpFloat32::test_check_grad'));
 assert.ok(c);assert.equal(c.effective,false);assert.match(c.explanation,/pass|断言|空/);
});
test('full controlled runs preserve the regression scope',()=>{
 for(const[id,f,p]of[[58323,41,48],[59973,47,25]]){const t=byId(id);assert.equal(t.status,'needs_fix');assert.equal(t.f2p,f);assert.equal(t.p2p,p);assert.match(t.proof,/完整|范围/);}
 assert.equal(byId(59348).checks.length,15);assert.equal(byId(60808).f2p,1);assert.equal(byId(60808).p2p,2);
});
test('missing standard helper paths do not demand task package edits',()=>{
 for(const id of [59383,72800,73125,73385,73387,73569,74184,74212,74221,74305,77064,79197,79276]){
  const t=byId(id);assert.equal(t.status,'passed',id);assert.equal(t.packageChangeRequired,false,id);assert.match(t.proof,/两轮/,id);
 }
 assert.equal(byId(59127).status,'failed');assert.match(byId(59127).why,/配套构建/);
 for(const id of[41202,52948])assert.equal(byId(id).oracle.passed,true);
});
test('data failures and unavailable environments retain their limitations',()=>{
 for(const id of[59847,64320])assert.equal(byId(id).oracle.passed,true);
 assert.equal(byId(78823).status,'incomplete');
 assert.equal(byId(76873).status,'incomplete');assert.equal(byId(76873).cause,'mixed');assert.match(byId(76873).why,/CINN/);
 assert.equal(byId(64881).status,'failed');assert.match(byId(64881).why,/掩码/);
 assert.equal(byId(76259).status,'incomplete');
 assert.equal(byId(77495).oracle.passed,true);
});
test('Oracle counts deduplicate whole two-round passes and preserve skipped branches',()=>{
 const ids=data.tasks.filter(t=>t.oracle.passed).map(t=>t.id);
 assert.deepEqual(ids,data.oracleSummary.passedIds);
 assert.equal(ids.length,data.oracleSummary.passed);
 assert.equal(data.oracleSummary.notConfirmed,data.meta.total-ids.length);
 assert.ok(ids.length>=87);
 assert.equal(data.oracleSummary.allPassed,false);
 for(const t of data.tasks.filter(t=>t.oracle.passed)){
  assert.equal(t.oracle.rounds.length,2,t.id);
  for(const r of t.oracle.rounds){assert.equal(r.complete,true,t.id);assert.equal(r.shellExit,0,t.id);assert.ok(r.counts.passed>0,t.id);assert.equal(r.counts.failed,0,t.id);assert.equal(r.counts.error,0,t.id);}
 }
 assert.equal(byId(59973).oracle.rounds[0].counts.passed,74);
 assert.equal(byId(59973).oracle.rounds[0].counts.skipped,29);
 assert.match(byId(59973).oracle.entry,/python/);
 assert.deepEqual(byId(64881).oracle.rounds[0].counts,{passed:123,failed:1,error:6,skipped:4});
 assert.equal(byId(78728).oracle.rounds[0].counts.passed,14);
 assert.equal(byId(62012).oracle.rounds[0].counts.passed,15);
 assert.equal(byId(57741).oracle.rounds[0].counts.passed,2);
 assert.equal(byId(57741).oracle.rounds[0].counts.skipped,3);
 assert.match(byId(78085).why,/3 项失败/);
});
test('four added tasks retain actual Gold rounds without inventing Base/Gold pairs',()=>{
 assert.equal(data.oracleSummary.passed,102);
 for(const [id,whole,target,python,bytes] of [[64323,2,1,'3.10',119233611],[71525,3,3,'3.11',129856218],[71747,13,13,'3.11',129942491],[73329,11,11,'3.11',131360479]]){
  const t=byId(id);assert.equal(t.status,'passed',id);assert.equal(t.f2p,null,id);assert.equal(t.p2p,null,id);assert.equal(t.corePassed,false,id);assert.deepEqual(t.checks,[],id);
  assert.equal(t.sourceSnapshot,data.meta.snapshot,id);assert.ok(t.taskUrl.includes(t.sourceSnapshot),id);
  assert.equal(t.build.fromZero,true,id);assert.equal(t.build.python,python,id);assert.equal(t.build.wheelBytes,bytes,id);assert.equal(t.build.diskCopies,2,id);
  assert.deepEqual(t.pendingChecks,['generated_input_provenance'],id);
  assert.equal(t.problemTests.length,target,id);
  for(const r of t.oracle.rounds){assert.deepEqual(r.counts,{passed:whole,failed:0,error:0,skipped:0},id);assert.deepEqual(r.targetCounts,{passed:target,failed:0,error:0,skipped:0},id);}
  assert.match(t.countsNote,/Base.*未执行/,id);
 }
 assert.match(byId(64323).countsNote,/辅助.*不计入/,64323);
});
test('unfinished tasks explain actual work, blockers and missing validation',()=>{
 const unfinished=data.tasks.filter(t=>!t.oracle.passed);
 assert.equal(unfinished.length,13);
 for(const t of data.tasks.filter(t=>t.status!=='passed')){
  const p=t.validationProgress;assert.ok(p,t.id);
  for(const key of ['meaning','completed','problem','remaining'])assert.ok(typeof p[key]==='string'&&p[key].length>5,`${t.id} ${key}`);
  assert.equal(p.resultDate,t.oracle.date,t.id);
 }
 assert.match(byId(33369).validationProgress.problem,/six.*ModuleNotFoundError/);
 assert.match(byId(54435).validationProgress.problem,/整数 1.*is True/);
 assert.match(byId(58917).validationProgress.problem,/OpResult/);
 assert.match(byId(77078).validationProgress.problem,/Value.*None/);
 assert.match(byId(79369).validationProgress.problem,/cpu.*AttributeError/);
 assert.match(byId(76259).validationProgress.completed,/前置|核对/);
 assert.match(byId(76873).validationProgress.completed,/补测/);
 assert.match(byId(78823).validationProgress.completed,/退出 0.*不能据此判通过/);
 assert.match(byId(79657).validationProgress.problem,/CUDA.*CPU/);
});
test('report has one current section for every task',()=>{
 const report=fs.readFileSync(path.join(docs,'latest-report.md'),'utf8');
 const ids=[...report.matchAll(/<a id="task-(\d+)"><\/a>/g)].map(m=>Number(m[1]));
 assert.deepEqual(ids,data.tasks.map(t=>t.id));
 for(const t of data.tasks){assert.ok(report.includes(t.summary));assert.ok(report.includes(t.why));assert.ok(report.includes(t.fix));}
});
test('current release hashes match every public artifact',()=>{
 const manifest=fs.readFileSync(path.join(docs,'latest.sha256'),'utf8').trim().split('\n');
 const targets=[];
 for(const line of manifest){const m=line.match(/^([0-9a-f]{64})  (.+)$/);assert.ok(m);targets.push(m[2]);assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(docs,m[2]))).digest('hex'),m[1]);}
 assert.deepEqual(targets.sort(),walk(docs).map(p=>path.relative(docs,p)).filter(p=>p!=='latest.sha256').sort());
});
test('unpublished archive retains byte-identical evidence',()=>{
 const archive=path.resolve(__dirname,'../archive/20260911-verification');
 const m=JSON.parse(fs.readFileSync(path.join(archive,'FILES.json'),'utf8'));
 const entries=m.files||m;
 for(const[file,hash]of Object.entries(entries)){
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(archive,file))).digest('hex'),typeof hash==='string'?hash:hash.sha256,file);
 }
});
