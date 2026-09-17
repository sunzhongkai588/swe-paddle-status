(() => {
  'use strict';
  const data = window.FLASH86_DATA;
  const labels = {passed:'已通过',failed:'模型答案未通过',review:'需复核',incomplete:'未完成'};
  const causes = {none:'无失败',model:'模型代码 / 功能',model_runtime:'模型触发旧库缺陷',tests:'测试加载 / 验收约定',scorer:'评分程序',environment:'运行环境',generation:'生成超时'};
  const explanations = {passed:'修复与回归全部通过',failed:'已有模型功能或代码问题证据',review:'测试 / 评分存在问题，暂不定成功',incomplete:'未取得可评分的有效答案'};
  const $ = id => document.getElementById(id);
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let result = 'all';
  let dialogTask = null;
  const date = new Date(data.checked_at);
  $('checked-at').textContent = new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).format(date) + ' 北京时间';
  $('checked-at').dateTime = data.checked_at;
  $('hero-passed').textContent = data.result_counts.passed;
  $('segmented').innerHTML = Object.entries(labels).map(([key,label]) => `<span class="segment ${key}" style="flex:${data.result_counts[key]||0}" title="${label} ${data.result_counts[key]||0} 条"></span>`).join('');
  $('segmented').setAttribute('aria-label',Object.entries(labels).map(([k,v])=>`${v}${data.result_counts[k]||0}条`).join('，'));
  $('metrics').innerHTML = Object.entries(labels).map(([key,label])=>`<button type="button" class="metric" data-result="${key}"><span class="metric-top"><span class="dot" style="color:var(--${key==='passed'?'pass':key==='failed'?'fail':key==='review'?'review':'incomplete'})"></span>${label}</span><strong>${data.result_counts[key]||0}</strong><small>${explanations[key]}</small></button>`).join('');
  const causeOrder = ['model','model_runtime','tests','scorer','environment','generation'];
  $('cause-grid').innerHTML = causeOrder.map(key=>`<button type="button" class="cause-item" data-cause="${key}"><span>${causes[key]}</span><strong>${data.cause_counts[key]||0}<span class="sr-only"> 条</span></strong></button>`).join('');
  $('cause-filter').innerHTML += Object.entries(causes).map(([key,label])=>`<option value="${key}">${label} · ${data.cause_counts[key]||0}</option>`).join('');
  $('result-tabs').innerHTML = [['all','全部任务'],...Object.entries(labels)].map(([key,label])=>`<button type="button" class="tab" data-result="${key}" aria-pressed="${key==='all'}">${label}<span>${key==='all'?86:data.result_counts[key]||0}</span></button>`).join('');
  const searchable = new Map(data.tasks.map(t=>[t.id,[t.id,t.title,t.reason,t.finding,t.next,...t.checks.map(c=>c.name)].join(' ').toLowerCase()]));
  function counts(t,key){return t.result==='incomplete'?'未执行':`${t[key].passed} / ${t[key].total}`;}
  function render(){
    const query=$('search').value.trim().toLowerCase(),cause=$('cause-filter').value;
    const rows=data.tasks.filter(t=>(result==='all'||t.result===result)&&(cause==='all'||t.cause===cause)&&(!query||searchable.get(t.id).includes(query)));
    $('visible-count').textContent=rows.length;
    $('empty').hidden=rows.length>0;
    $('task-rows').innerHTML=rows.map(t=>`<tr data-row-id="${t.id}"><td><span class="task-id">#${t.id}</span><span class="task-title">${esc(t.title)}</span></td><td><span class="badge ${t.result}"><span class="dot"></span>${labels[t.result]}</span></td><td class="cause-cell">${causes[t.cause]}</td><td><span class="test-count"><span>F2P</span> <b>${counts(t,'f2p')}</b></span><span class="test-count"><span>P2P</span> <b>${counts(t,'p2p')}</b></span></td><td class="reason-cell">${esc(t.reason)}</td><td><button class="details-button" data-task="${t.id}" type="button" aria-label="查看任务 #${t.id} 详情">↗</button></td></tr>`).join('');
    document.querySelectorAll('.tab').forEach(t=>t.setAttribute('aria-pressed',String(t.dataset.result===result)));
  }
  function setResult(value,scroll=false){result=value;$('cause-filter').value='all';render();if(scroll)$('tasks').scrollIntoView({behavior:'smooth'});}
  document.addEventListener('click',event=>{
    const task=event.target.closest('[data-task]');if(task){openTask(Number(task.dataset.task));return;}
    const category=event.target.closest('[data-result]');if(category){setResult(category.dataset.result,category.classList.contains('metric'));return;}
    const cause=event.target.closest('[data-cause]');if(cause){result='all';$('cause-filter').value=cause.dataset.cause;render();$('tasks').scrollIntoView({behavior:'smooth'});}
  });
  $('search').addEventListener('input',render);$('cause-filter').addEventListener('change',render);
  $('clear').addEventListener('click',()=>{result='all';$('search').value='';$('cause-filter').value='all';render();});
  function outcome(value,base,kind){
    if(value==='not_run'||!value)return '<span class="check-other">未执行 / 无记录</span>';
    const expected=base&&((kind==='F2P'&&value==='failed')||(kind==='P2P'&&value==='passed'));
    if(expected)return `<span class="check-pass">${value==='passed'?'通过':'失败'}（符合预期）</span>`;
    const words={passed:'通过',failed:'失败',setup_or_teardown_error:'准备 / 收尾异常',missing_or_malformed:'缺少有效结果',skipped:'跳过'};
    return `<span class="${value==='passed'?'check-pass':value==='failed'?'check-fail':'check-other'}">${esc(words[value]||value)}</span>`;
  }
  function testCard(t,key,title){const s=t[key];return `<div class="result-card"><span>${title}</span><strong>${counts(t,key)}</strong><small>${t.result==='incomplete'?`尚未执行；固定计划 ${t['expected_'+key]} 项`:`${s.failed} 项失败 · ${s.other} 项异常 / 无完整结果`}</small></div>`;}
  function openTask(id,updateHash=true){
    const t=data.tasks.find(x=>x.id===id);if(!t)return;
    dialogTask=id;$('dialog-number').textContent=`TASK #${id}`;
    $('dialog-content').innerHTML=`<h2 id="dialog-title">${esc(t.title)}</h2><div class="dialog-tags"><span class="badge ${t.result}"><span class="dot"></span>${labels[t.result]}</span><span>归因：${causes[t.cause]}</span><span>· ${esc(t.stage)}</span></div><div class="verdict">${esc(t.reason)}</div><div class="detail-grid"><div class="detail-block"><h3>证据与判断</h3><p>${esc(t.finding)}</p></div><div class="detail-block"><h3>还需要做什么</h3><p>${esc(t.next)}</p></div></div><div class="result-cards">${testCard(t,'f2p','F2P · 修复测试通过数 / 总数')}${testCard(t,'p2p','P2P · 回归测试通过数 / 总数')}</div>${t.diagnostic?`<div class="diagnostic"><b>补充验证：</b>${t.diagnostic.total} 项中 ${t.diagnostic.passed} 项通过，${t.diagnostic.failed} 项未通过${t.diagnostic.other?`，${t.diagnostic.other} 项异常`:''}。${t.diagnostic.real_tensors?'使用真实 CPU Tensor。':''}<br>${esc(t.diagnostic.note)}</div>`:''}<details class="checks"><summary>展开 ${t.checks.length} 项固定测试明细</summary><p class="checks-note">F2P 原代码失败符合预期；目标是模型修改后通过。此表保留固定评分观察结果，测试或评分问题见上方归因。</p><div class="check-table-wrap"><table class="check-table"><thead><tr><th>类型</th><th>测试名称</th><th>原代码</th><th>模型修改后</th></tr></thead><tbody>${t.checks.map(c=>`<tr><td>${c.kind}</td><td><code>${esc(c.name)}</code></td><td>${outcome(c.base,true,c.kind)}</td><td>${outcome(c.candidate,false,c.kind)}</td></tr>`).join('')}</tbody></table></div></details><div class="dialog-footer"><span>验证方式：${esc(t.route)}</span><a href="${esc(t.task_url)}" target="_blank" rel="noopener noreferrer">查看题目 ↗</a></div>`;
    if(!$('task-dialog').open)$('task-dialog').showModal();
    $('task-dialog').scrollTop=0;
    if(updateHash)history.replaceState(null,'',`#task-${id}`);
  }
  function closeTask(){if($('task-dialog').open)$('task-dialog').close();}
  $('close-dialog').addEventListener('click',closeTask);
  $('task-dialog').addEventListener('click',event=>{if(event.target===$('task-dialog')){const b=$('task-dialog').getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)closeTask();}});
  $('task-dialog').addEventListener('close',()=>{dialogTask=null;if(/^#task-\d+$/.test(location.hash))history.replaceState(null,'',location.pathname+location.search+'#tasks');});
  function fromHash(){const match=location.hash.match(/^#task-(\d+)$/);if(match)openTask(Number(match[1]),false);else if(dialogTask)closeTask();}
  window.addEventListener('hashchange',fromHash);
  render();fromHash();
})();
