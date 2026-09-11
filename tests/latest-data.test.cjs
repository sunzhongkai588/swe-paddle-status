'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const docs=path.resolve(__dirname,'../docs');
const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(docs,'assets/latest-data.js'),'utf8'),context);
const data=JSON.parse(JSON.stringify(context.window.SWE_PADDLE_LATEST));
const byId=id=>data.tasks.find(t=>t.id===id);
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
test('published root contains a single current dataset and current report',()=>{
 assert.equal(data.tasks.length,105);assert.equal(new Set(data.tasks.map(t=>t.id)).size,105);
 assert.equal(data.meta.snapshot,'207998dab8c4c76c8558c3cca8ef177c69f10c1c');
 assert.deepEqual(data.meta.proposalOnlyIds,[56723,78220,79391,79657]);
 const files=walk(docs).map(p=>path.relative(docs,p)).sort();
 assert.deepEqual(files,['.nojekyll','assets/app.js','assets/latest-data.js','assets/styles.css','index.html','latest-report.md','latest.sha256']);
 const html=fs.readFileSync(path.join(docs,'index.html'),'utf8');
 assert.deepEqual([...html.matchAll(/<script src="([^"]+)"/g)].map(m=>m[1].split('?')[0]),['assets/latest-data.js','assets/app.js']);
 assert.doesNotMatch(html,/历史|上一版|更新记录|复验前|原验收|封存/);
 for(const p of files){if(p.endsWith('.js')||p.endsWith('.html')||p.endsWith('.md'))assert.doesNotMatch(fs.readFileSync(path.join(docs,p),'utf8'),/\/data\/home\/|\/harness|container_id|libpaddle_sha256|历史记录|上一版结论/);}
});
test('all tasks have explicit current outcomes and readable diagnoses',()=>{
 const counts={passed:0,needs_fix:0,failed:0,incomplete:0};
 for(const t of data.tasks){
  assert.ok(t.status in counts,t.id);counts[t.status]++;
  assert.ok(['none','data','verification','machine','mixed'].includes(t.cause),t.id);
  assert.equal(t.corePassed,['passed','needs_fix'].includes(t.status),t.id);
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
 const t=byId(78441);assert.equal(t.f2p,26);assert.equal(t.p2p,4);assert.equal(t.status,'needs_fix');
 const c=t.checks.find(c=>c.name.includes('TestAminmaxOpFloat32::test_check_grad'));
 assert.ok(c);assert.equal(c.effective,false);assert.match(c.explanation,/pass|断言|空/);
 assert.match(t.why,/其他梯度测试有实际检查/);
});
test('full controlled runs preserve the regression scope',()=>{
 for(const[id,f,p]of[[58323,41,48],[59973,47,25]]){const t=byId(id);assert.equal(t.status,'needs_fix');assert.equal(t.f2p,f);assert.equal(t.p2p,p);assert.match(t.proof,/完整|范围/);}
 assert.equal(byId(59348).checks.length,15);assert.equal(byId(60808).f2p,1);assert.equal(byId(60808).p2p,2);assert.match(byId(60808).fix,/environment\/README/);
});
test('missing standard helper paths do not demand task package edits',()=>{
 for(const id of [59127,59383,72800,73125,73385,73387,73569,74184,74212,74221,74305,77064,79197,79276]){
  const t=byId(id);assert.equal(t.status,'passed',id);assert.equal(t.cause,'verification',id);assert.equal(t.packageChangeRequired,false,id);assert.match(t.proof,/两轮/,id);
 }
 for(const id of[41202,52948]){assert.equal(byId(id).status,'needs_fix');assert.match(byId(id).fix,/python/);}
});
test('data failures and unavailable environments retain their limitations',()=>{
 for(const id of[59847,64320,78823]){assert.equal(byId(id).status,'incomplete');assert.equal(byId(id).f2p,null);}
 assert.equal(byId(76873).status,'incomplete');assert.equal(byId(76873).cause,'mixed');assert.match(byId(76873).why,/CINN/);
 assert.equal(byId(64881).status,'failed');assert.match(byId(64881).why,/修复前已存在/);
 for(const id of[76259,77495]){assert.equal(byId(id).status,'failed');assert.equal(byId(id).f2p,null);assert.equal(byId(id).checks.length,0);}
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
