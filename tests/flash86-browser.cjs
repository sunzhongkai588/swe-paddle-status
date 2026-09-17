'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs/promises'),http=require('node:http'),path=require('node:path');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'../docs/deepseek-v4-flash');
let server,browser;const errors=[];let checks=0;
async function check(name,fn){await fn();checks++;console.log('PASS '+name);}
async function serve(){server=http.createServer(async(req,res)=>{try{const u=new URL(req.url,'http://localhost');const p=path.resolve(root,'.'+(u.pathname.endsWith('/')?u.pathname+'index.html':u.pathname));assert.ok(p.startsWith(root+path.sep));const content=await fs.readFile(p);res.writeHead(200,{'Content-Type':{'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json'}[path.extname(p)]||'text/plain'});res.end(content);}catch{res.writeHead(404);res.end('Not found');}});await new Promise(r=>server.listen(0,'127.0.0.1',r));return `http://127.0.0.1:${server.address().port}/`;}
async function overflow(page){assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
async function main(){
 const data=JSON.parse(await fs.readFile(path.join(root,'results.json'),'utf8'));
 const url=process.env.FLASH86_URL||await serve();
 browser=await chromium.launch({headless:true,...(process.env.FLASH86_BROWSER?{executablePath:process.env.FLASH86_BROWSER}:{})});
 const page=await browser.newPage({viewport:{width:1440,height:1000},locale:'zh-CN',reducedMotion:'reduce'});
 page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});
 await page.goto(url,{waitUntil:'networkidle'});
 await check('all 86 rows, current snapshot, accurate totals and no stale history',async()=>{
  assert.equal(await page.locator('#task-rows tr').count(),86);assert.equal(await page.locator('#hero-passed').innerText(),'39');
  assert.deepEqual(await page.evaluate(()=>window.FLASH86_DATA.result_counts),data.result_counts);
  assert.doesNotMatch(await page.locator('body').innerText(),/上一轮结果|此前测试结果|历史评测|正在后台运行/);await overflow(page);
 });
 await check('every status and cause filter returns the correct task IDs',async()=>{
  for(const key of Object.keys(data.result_counts)){
   await page.locator(`.tab[data-result="${key}"]`).click();
   assert.deepEqual(await page.locator('#task-rows tr').evaluateAll(es=>es.map(e=>Number(e.dataset.rowId))),data.tasks.filter(t=>t.result===key).map(t=>t.id));
  }
  await page.locator('#clear').click();
  for(const key of Object.keys(data.cause_counts)){
   await page.selectOption('#cause-filter',key);
   assert.deepEqual(await page.locator('#task-rows tr').evaluateAll(es=>es.map(e=>Number(e.dataset.rowId))),data.tasks.filter(t=>t.cause===key).map(t=>t.id));
  }
  await page.locator('#clear').click();
 });
 await check('all 86 details preserve reasons, actions and every fixed test result',async()=>{
  for(const t of data.tasks){
   await page.locator(`#task-rows [data-task="${t.id}"]`).click();
   const text=await page.locator('#dialog-content').innerText();
   for(const s of [t.title,t.reason,t.finding,t.next])assert.ok(text.includes(s),`${t.id}: missing detail`);
   await page.locator('.checks summary').click();
   assert.equal(await page.locator('.check-table tbody tr').count(),t.checks.length);
   assert.deepEqual(await page.locator('.check-table code').allTextContents(),t.checks.map(c=>c.name));
   assert.ok(await page.locator('#task-dialog').evaluate(e=>e.scrollWidth<=e.clientWidth+1));
   await page.locator('#close-dialog').click();
  }
 });
 await check('search, no-result view and shareable task deep link',async()=>{
  await page.fill('#search','72800');assert.equal(await page.locator('#task-rows tr').count(),1);
  await page.locator('#task-rows [data-task="72800"]').click();assert.match(page.url(),/#task-72800$/);
  await page.reload({waitUntil:'networkidle'});assert.ok(await page.locator('#task-dialog').isVisible());
  assert.match(await page.locator('#dialog-content').innerText(),/无需修改原 test.sh/);
  await page.keyboard.press('Escape');await page.fill('#search','no-such-task-xyz');assert.ok(await page.locator('#empty').isVisible());
  await page.locator('#clear').click();assert.equal(await page.locator('#task-rows tr').count(),86);
 });
 await check('self-hosted Chinese font loads for readable results',async()=>{
  await page.evaluate(()=>document.fonts.ready);
  assert.ok(await page.evaluate(()=>document.fonts.check('14px "Flash86 Sans"','修复测试评分')));
 });
 const shot=process.env.FLASH86_SCREENSHOTS;
 if(shot){await fs.mkdir(shot,{recursive:true});await page.goto(url,{waitUntil:'networkidle'});await page.screenshot({path:path.join(shot,'desktop.png'),fullPage:false});}
 await check('mobile layout, dialog, keyboard dismissal and scoring explanation',async()=>{
  await page.setViewportSize({width:390,height:844});await page.goto(url,{waitUntil:'networkidle'});await overflow(page);
  if(shot)await page.screenshot({path:path.join(shot,'mobile.png'),fullPage:false});
  await page.locator('.spotlight[data-task="64519"]').click();await overflow(page);
  assert.ok(await page.locator('#task-dialog').evaluate(e=>e.scrollWidth<=e.clientWidth+1));
  assert.match(await page.locator('#dialog-content').innerText(),/参考修复连续两轮 25 项全过/);
  if(shot)await page.screenshot({path:path.join(shot,'mobile-detail.png'),fullPage:false});
  await page.keyboard.press('Escape');await page.locator('#guide summary').click();assert.ok(await page.locator('.guide-body').isVisible());await overflow(page);
 });
 await check('downloaded data matches the rendered page',async()=>{
  const r=await page.request.get(new URL('results.json',url).href);assert.equal(r.status(),200);assert.deepEqual(await r.json(),data);
 });
 assert.deepEqual(errors,[]);console.log(JSON.stringify({ok:true,checks,url}));
}
main().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{if(browser)await browser.close();if(server)await new Promise(r=>server.close(r));});
