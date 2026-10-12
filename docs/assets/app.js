(() => {
  'use strict';
  const data = window.SWE_PADDLE_LATEST;
  if (!data || data.tasks.length !== data.meta.total) throw new Error('缺少完整的最新验证数据');
  const tasks = data.tasks;
  const $ = (id) => document.getElementById(id);
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const statusLabels = {passed:'Oracle 已通过',needs_fix:'Oracle 通过 · 入口需同步',failed:'Oracle 未通过',incomplete:'尚未完成'};
  const causeLabels = {none:'未发现问题',data:'任务数据',verification:'验证程序配置',machine:'机器环境',mixed:'多处原因',unknown:'原因待定位'};
  const evidenceLabels = {exact_native:'精确源码构建',exact_python:'精确 Python 源码',exact_python_compatible_native:'精确 Python + 兼容运行时',lightweight_source:'任务约定的轻量源码验证',lightweight_cpp:'任务约定的轻量 C++ 验证',patch_preflight:'补丁应用检查',environment_incomplete:'所需环境不可用'};
  const stateLabels = {passed:'通过',failed:'失败',error:'报错',skipped:'跳过',not_run:'未执行',missing:'无记录',not_collected:'未收集',absent:'无记录',unpaired:'未配对',crashed:'崩溃',timeout:'超时',unknown:'未确认',setup_error:'准备时报错',teardown_error:'结束时报错',collection_error:'收集时报错',aborted:'异常退出',target_sigabrt:'目标缺陷导致退出',target_abort:'目标缺陷导致退出',native_abort:'底层运算退出',empty_return:'未执行主体'};
  const counts = Object.fromEntries(Object.keys(statusLabels).map(s => [s,tasks.filter(t=>t.status===s).length]));
  const core = data.oracleSummary.passed;
  const problems = tasks.filter(t=>t.status!=='passed');
  const authorLabel = (t) => data.authors[t.author]?.label || t.author;
  const badge = (t) => `<span class="status-badge ${esc(t.status)}">${esc(statusLabels[t.status])}</span>`;
  const matrix = (t) => t.f2p == null || t.p2p == null ? 'F2P/P2P 未确认' : `${t.f2p} / ${t.p2p}${t.corePassed ? '' : '（已确认部分）'}`;
  const oracle = (t) => `<strong>${esc(t.oracle.summary)}</strong>${t.oracle.activity?`<small>${esc(t.oracle.activity)}</small>`:''}<small>${esc(t.oracle.date||'完整结果待确认')}</small>`;
  $('updated-at').textContent=data.meta.updatedAt;
  $('updated-at').dateTime=data.meta.updatedAt;
  $('snapshot-short').textContent=data.meta.snapshot.slice(0,8);
  const rate=(100*core/tasks.length).toFixed(1);
  $('pass-rate').textContent=`${rate}%`;
  $('core-count').textContent=`${core} / ${tasks.length} 条`;
  $('progress-ring').style.setProperty('--progress',`${rate}%`);
  $('progress-ring').setAttribute('aria-label',`Oracle 累计通过 ${core} / ${tasks.length}，${rate}%`);
  $('hero-numbers').innerHTML=Object.entries(counts).map(([s,n])=>`<div><span class="number-dot ${esc(s)}"></span><span>${esc(statusLabels[s])}</span><strong>${n}</strong></div>`).join('');
  $('metrics').innerHTML=Object.entries(counts).map(([s,n])=>`<a class="metric-card ${esc(s)}" href="?status=${esc(s)}#all-tasks"><strong>${n}</strong><span>${esc(statusLabels[s])}</span><small>${esc({passed:'已有完整 Gold 测试通过记录',needs_fix:'修正入口后完整通过，需同步任务说明',failed:'实际出现失败、错误或测试崩溃',incomplete:'完整结果未闭合，继续验证'}[s])}</small></a>`).join('');
  $('issues-title').textContent=`${problems.length} 条任务需要处理`;
  $('cause-summary').innerHTML=['data','verification','machine','mixed','unknown'].map(c=>{const n=problems.filter(t=>t.cause===c).length;return n?`<span>${esc(causeLabels[c])} <b>${n}</b></span>`:'';}).join('');
  $('issue-grid').innerHTML=problems.map(t=>`<button class="issue-card ${esc(t.status)}" type="button" data-task-id="${t.id}"><span class="issue-top"><strong>#${t.id}</strong><span class="cause-badge">${esc(causeLabels[t.cause])}</span></span>${badge(t)}<h3>${esc(t.summary)}</h3><p>${esc(t.why)}</p><span class="issue-action"><b>怎么处理</b>${esc(t.fix)}</span><span class="issue-footer">查看具体测试与确认依据 <span>↗</span></span></button>`).join('');
  const addOptions=(id,options)=>{$(id).insertAdjacentHTML('beforeend',options.map(([v,l])=>`<option value="${esc(v)}">${esc(l)}</option>`).join(''));};
  addOptions('status-filter',Object.entries(statusLabels).map(([s,l])=>[s,`${l}（${counts[s]}）`]));
  addOptions('cause-filter',Object.entries(causeLabels));
  addOptions('evidence-filter',Object.entries(evidenceLabels).filter(([e])=>tasks.some(t=>t.evidence===e)));
  addOptions('author-filter',[...new Set(tasks.map(t=>t.author))].sort().map(a=>[a,data.authors[a]?.label||a]));
  const inputs={q:$('search-input'),status:$('status-filter'),cause:$('cause-filter'),evidence:$('evidence-filter'),author:$('author-filter')};
  let activeTask=null;
  const searchText=new Map(tasks.map(t=>[t.id,[t.id,t.title,t.author,authorLabel(t),t.summary,t.why,t.whatFailed,t.fix,t.oracle.entry,t.oracle.summary,...t.checks.map(c=>c.name),...(t.problemTests||[])].join(' ').toLowerCase()]));
  function renderTable(updateUrl=true){
    const q=inputs.q.value.trim().toLowerCase();
    const shown=tasks.filter(t=>(!q||searchText.get(t.id).includes(q))&&Object.entries(inputs).every(([k,e])=>k==='q'||e.value==='all'||t[k]===e.value));
    $('visible-count').textContent=shown.length;
    $('empty-state').hidden=shown.length>0;
    $('task-table-body').innerHTML=shown.map(t=>`<tr data-row-id="${t.id}"><td><button class="task-id" data-task-id="${t.id}" type="button">#${t.id}</button><small>${esc(authorLabel(t))}</small></td><td><strong class="task-title">${esc(t.title)}</strong><p class="task-summary">${esc(t.summary)}</p></td><td>${badge(t)}<small>${esc(evidenceLabels[t.evidence]||t.evidence)}</small></td><td class="matrix-count">${oracle(t)}<small>已有 F2P/P2P：${esc(matrix(t))}</small></td><td><button class="detail-button" data-task-id="${t.id}" type="button" aria-label="查看任务 ${t.id}">详情 ↗</button></td></tr>`).join('');
    if(updateUrl){const u=new URL(location.href);for(const[k,e]of Object.entries(inputs)){if(e.value&&e.value!=='all')u.searchParams.set(k,e.value);else u.searchParams.delete(k);}history.replaceState(null,'',u);}
  }
  function pair(states){return states.map(s=>`<span class="test-state ${esc(s)}">${esc(stateLabels[s]||s)}</span>`).join('<span class="round-divider"> / </span>');}
  function checksHtml(t){
    if(!t.checks.length)return '<p class="checks-empty">暂无逐项 Base/Gold 配对明细；Oracle 实际结果见上方。</p>';
    return `<details class="check-details"><summary>已有 ${t.checks.length} 个测试的配对记录（${esc(t.pairedResultDate)}）</summary><p class="check-legend">已有配对记录保留其确认日期；本次 Oracle 结果见上方。每格按第 1 轮 / 第 2 轮显示。“无记录”和“跳过”均不算通过。空测试等排除项不计入有效 F2P/P2P。</p><div class="check-table-wrap"><table class="check-table"><thead><tr><th>具体测试名</th><th>修复前</th><th>修复后</th><th>说明</th></tr></thead><tbody>${t.checks.map(c=>`<tr${c.effective===false?' class="excluded-check"':''}><th scope="row"><code>${esc(c.name)}</code>${c.condition?`<small class="check-condition">${esc(c.condition)}</small>`:''}</th><td>${pair(c.base)}</td><td>${pair(c.gold)}</td><td class="check-explanation">${esc(c.explanation)}</td></tr>`).join('')}</tbody></table></div></details>`;
  }
  function oracleDetail(t){
    const item=t.oracle;
    const retained=item.baselinePassPreserved?`<p>另一次原入口观察：${esc(item.latestAttempt.entry)}；${esc(item.latestAttempt.result==='failed'?'仍有失败或异常退出':'完整结果未确认')}。已通过的入口和范围记录继续保留。</p>`:'';
    return `<div class="dialog-section"><h3>Oracle 实际结果</h3><p>${esc(item.summary)}</p><p>运行入口：${esc(item.entry)}</p><p>确认时间：${esc(item.date||'尚未确认')}</p>${item.activity?`<p>当前任务：${esc(item.activity)}</p>`:''}${retained}</div>`;
  }
  function openTask(id){
    const t=tasks.find(t=>t.id===Number(id));if(!t)return;
    activeTask=t.id;
    $('dialog-content').innerHTML=`<p class="dialog-eyebrow">TASK DETAIL · ${esc(authorLabel(t))}</p><div class="dialog-title-row"><h2 id="dialog-title">#${t.id}</h2>${badge(t)}</div><p class="dialog-topic">${esc(t.title)}</p>${oracleDetail(t)}<div class="diagnosis ${esc(t.status)}"><span class="cause-badge">问题来源：${esc(causeLabels[t.cause])}</span><h3>${esc(t.summary)}</h3><p>${esc(t.whatFailed)}</p></div><div class="dialog-section"><h3>为什么</h3><p>${esc(t.why)}</p></div><div class="dialog-section action-box"><h3>怎么处理</h3><p>${esc(t.fix)}</p></div><div class="dialog-section"><h3>怎么确认的</h3><p>${esc(t.proof)}</p></div>${t.problemTests?.length?`<details class="problem-test-details"><summary>涉及的具体测试 / 文件（${t.problemTests.length} 项）</summary><ul>${t.problemTests.map(n=>`<li><code>${esc(n)}</code></li>`).join('')}</ul></details>`:''}<div class="matrix-panel"><div><small>已有有效 F2P / P2P</small><strong>${esc(matrix(t))}</strong></div><div><small>运行方式</small><strong>${esc(evidenceLabels[t.evidence]||t.evidence)}</strong></div><p>${esc(t.requirements)}</p>${t.countsNote?`<p>${esc(t.countsNote)}</p>`:''}</div>${checksHtml(t)}<div class="dialog-links">${t.taskFilesAvailable?`<a href="${esc(data.meta.taskBase+t.id)}" target="_blank" rel="noreferrer">查看任务文件 ↗</a>`:''}<a href="https://github.com/PaddlePaddle/Paddle/pull/${t.id}" target="_blank" rel="noreferrer">来源 PR ↗</a><a href="latest-report.md#task-${t.id}">逐题报告 ↗</a></div>`;
    if(!$('task-dialog').open)$('task-dialog').showModal();
    $('task-dialog').scrollTop=0;
    const u=new URL(location.href);u.searchParams.set('task',t.id);history.replaceState(null,'',u);
  }
  function clearTaskUrl(){activeTask=null;const u=new URL(location.href);u.searchParams.delete('task');history.replaceState(null,'',u);}
  document.addEventListener('click',e=>{const b=e.target.closest('[data-task-id]');if(b)openTask(b.dataset.taskId);});
  document.querySelector('.dialog-close').addEventListener('click',()=>$('task-dialog').close());
  $('task-dialog').addEventListener('close',clearTaskUrl);
  $('task-dialog').addEventListener('click',e=>{if(e.target===$('task-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
  Object.values(inputs).forEach(e=>e.addEventListener(e.tagName==='INPUT'?'input':'change',()=>renderTable()));
  $('clear-filters').addEventListener('click',()=>{for(const[k,e]of Object.entries(inputs))e.value=k==='q'?'':'all';renderTable();});
  const params=new URLSearchParams(location.search);
  for(const[k,e]of Object.entries(inputs)){if(params.has(k)){const v=params.get(k);if(k==='q'||[...e.options].some(o=>o.value===v))e.value=v;}}
  renderTable(false);
  if(params.has('task'))openTask(params.get('task'));
})();
