'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs/promises'),http=require('node:http'),path=require('node:path'),vm=require('node:vm');
const {chromium}=require('playwright');
const docs=path.resolve(__dirname,'../docs');
const report={checks:[],errors:[],screenshots:[]};let browser,server;
const screenshotDir=process.env.SWE_PADDLE_SCREENSHOT_DIR;
async function check(name,fn){await fn();report.checks.push(name);console.log(`PASS ${name}`);}
async function serve(){server=http.createServer(async(req,res)=>{try{const u=new URL(req.url,'http://localhost');const p=path.resolve(docs,'.'+(u.pathname.endsWith('/')?u.pathname+'index.html':u.pathname));assert.ok(p.startsWith(docs+path.sep));const content=await fs.readFile(p);res.writeHead(200,{'Content-Type':{'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.md':'text/plain; charset=utf-8'}[path.extname(p)]||'text/plain','Cache-Control':'no-store'});res.end(content);}catch{res.writeHead(404);res.end('Not found');}});await new Promise(r=>server.listen(0,'127.0.0.1',r));return `http://127.0.0.1:${server.address().port}/`;}
async function shot(page,name){if(!screenshotDir)return;await fs.mkdir(screenshotDir,{recursive:true});const p=path.join(screenshotDir,name);await page.screenshot({path:p,fullPage:false,animations:'disabled'});report.screenshots.push(p);}
async function noOverflow(page){assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1&&document.body.scrollWidth<=innerWidth+1));}
async function main(){
 const c={window:{}};vm.runInNewContext(await fs.readFile(path.join(docs,'assets/latest-data.js'),'utf8'),c);const data=JSON.parse(JSON.stringify(c.window.SWE_PADDLE_LATEST));
 const url=process.env.SWE_PADDLE_STATUS_URL||await serve();report.url=url;
 browser=await chromium.launch({headless:true,...(process.env.SWE_PADDLE_BROWSER_EXECUTABLE?{executablePath:process.env.SWE_PADDLE_BROWSER_EXECUTABLE}:{})});
 const context=await browser.newContext({viewport:{width:1440,height:1000},locale:'zh-CN'});const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));page.on('console',m=>{if(m.type()==='error')report.errors.push(m.text());});page.on('requestfailed',r=>report.errors.push(r.url()+' '+r.failure()?.errorText));page.on('response',r=>{if(r.status()>=400)report.errors.push(r.url()+' '+r.status());});
 await page.goto(url,{waitUntil:'networkidle'});
 await check('all 105 current task rows, summary counts and no result history',async()=>{
  assert.equal(await page.locator('#task-table-body tr').count(),105);
  assert.deepEqual(await page.evaluate(()=>window.SWE_PADDLE_LATEST.counts),data.counts);
  assert.equal(await page.locator('#issue-grid .issue-card').count(),data.tasks.filter(t=>t.status!=='passed').length);
  assert.doesNotMatch(await page.locator('body').innerText(),/历史|上一版|更新记录|原验收|封存/);
  assert.equal(await page.locator('script[src]').count(),2);await noOverflow(page);
 });await shot(page,'latest-desktop.png');
 await check('state, cause, environment and author filters match source rows',async()=>{
  for(const key of['status','cause','evidence','author']){
   for(const value of new Set(data.tasks.map(t=>t[key]))){await page.selectOption(`#${key}-filter`,value);const ids=await page.locator('#task-table-body tr').evaluateAll(rs=>rs.map(r=>Number(r.dataset.rowId)));assert.deepEqual(ids,data.tasks.filter(t=>t[key]===value).map(t=>t.id));}
   await page.selectOption(`#${key}-filter`,'all');
  }
  await page.fill('#search-input','no-such-task-xyz');assert.equal(await page.locator('#visible-count').innerText(),'0');assert.equal(await page.locator('#empty-state').isVisible(),true);await page.click('#clear-filters');assert.equal(await page.locator('#task-table-body tr').count(),105);
 });
 await check('every task detail displays latest cause, action and exact test states',async()=>{
  for(const t of data.tasks){
   await page.locator(`#task-table-body [data-task-id="${t.id}"]`).first().click();
   const dialog=page.locator('#dialog-content');const txt=await dialog.innerText();
   assert.ok(await page.locator('#task-dialog').evaluate(e=>e.scrollWidth<=e.clientWidth+1),`${t.id} dialog overflow`);
   for(const text of[t.summary,t.whatFailed,t.why,t.fix,t.proof])assert.ok(txt.includes(text),`${t.id}: ${text}`);
   assert.doesNotMatch(txt,/历史记录|上一版|更新记录|原封存/);
   if(t.checks.length){await page.locator('.check-details>summary').click();assert.equal(await page.locator('.check-table tbody tr').count(),t.checks.length);const names=await page.locator('.check-table tbody th code').allTextContents();assert.deepEqual(names,t.checks.map(c=>c.name));const style=await page.locator('.check-table tbody th code').first().evaluate(e=>({transform:getComputedStyle(e).textTransform,spacing:getComputedStyle(e).letterSpacing}));assert.equal(style.transform,'none');assert.equal(style.spacing,'normal');}
   await page.click('.dialog-close');
  }
 });
 await check('exact test-name search and shareable task link',async()=>{
  const name='TestAminmaxOpFloat32::test_check_grad';await page.fill('#search-input',name);assert.equal(await page.locator('#visible-count').innerText(),'1');await page.locator('#task-table-body [data-task-id="78441"]').first().click();assert.match(page.url(),/task=78441/);await page.reload({waitUntil:'networkidle'});assert.equal(await page.locator('#task-dialog').isVisible(),true);await page.locator('.check-details>summary').click();assert.equal(await page.locator('.excluded-check').count(),1);await shot(page,'latest-78441-desktop.png');await page.keyboard.press('Escape');await page.click('#clear-filters');
 });
 await check('mobile layout and readable problem details',async()=>{
  await page.setViewportSize({width:390,height:844});await page.goto(url,{waitUntil:'networkidle'});await noOverflow(page);await shot(page,'latest-mobile.png');
  await page.locator('#issue-grid [data-task-id="76873"]').click();assert.equal(await page.locator('#task-dialog').isVisible(),true);await noOverflow(page);assert.ok(await page.locator('#task-dialog').evaluate(e=>e.scrollWidth<=e.clientWidth+1));await shot(page,'latest-76873-mobile.png');await page.locator('.check-details>summary').click();assert.ok(await page.locator('.check-table-wrap').evaluate(e=>e.scrollWidth>e.clientWidth));await page.click('.dialog-close');
 });
 await check('report links and local anchors are valid',async()=>{
  const hrefs=await page.locator('a[href]').evaluateAll(es=>es.map(e=>e.getAttribute('href')));
  for(const h of new Set(hrefs)){if(h.startsWith('#'))assert.equal(await page.locator(h).count(),1);else if(h.startsWith('latest-report.md')){const r=await context.request.get(new URL(h,url).href);assert.equal(r.status(),200);assert.match(await r.text(),/# SWE-Paddle 最新验证情况/);}}
 });
 assert.deepEqual(report.errors,[]);report.ok=true;
}
main().catch(e=>{report.ok=false;report.error=e.stack;process.exitCode=1;console.error(e);}).finally(async()=>{if(browser)await browser.close();if(server)await new Promise(r=>server.close(r));if(screenshotDir){await fs.mkdir(screenshotDir,{recursive:true});await fs.writeFile(path.join(screenshotDir,'browser-result.json'),JSON.stringify(report,null,2)+'\n');}console.log(JSON.stringify({ok:report.ok,checks:report.checks.length,errors:report.errors}));});
