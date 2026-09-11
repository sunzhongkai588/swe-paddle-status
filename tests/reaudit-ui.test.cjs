"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const vm = require("node:vm");
const { readPublic } = require("./helpers.cjs");

function loadWindow() {
  const window = {};
  for (const filename of ["data.js", "validation-update.js", "overall-status.js", "acceptance-20260910.js", "issue-explanations-20260910.js", "acceptance-recheck-20260911.js", "verification-audit-20260911.js"]) {
    vm.runInNewContext(readPublic(`assets/${filename}`), { window }, { timeout: 1000 });
  }
  return JSON.parse(JSON.stringify(window));
}

function render(window) {
  const nodes = new Map();
  const events = new Map();
  function node() {
    return {
      value: "", options: [{ value: "all" }], dataset: {}, style: { setProperty() {} },
      setAttribute() {}, addEventListener() {}, append(option) { this.options.push(option); },
      querySelector() { return node(); }, showModal() {}, close() {},
    };
  }
  const document = {
    getElementById(id) { if (!nodes.has(id)) nodes.set(id, node()); return nodes.get(id); },
    querySelector() { return node(); }, createElement: node,
    addEventListener(name, callback) { events.set(name, callback); },
  };
  window.location = { search: "", pathname: "/", hash: "" };
  window.history = { replaceState() {} };
  window.addEventListener = () => {};
  vm.runInNewContext(readPublic("assets/app.js"), { window, document, URLSearchParams }, { timeout: 1000 });
  return {
    nodes,
    open(id) {
      events.get("click")({ target: { closest() { return { dataset: { taskId: String(id) } }; } } });
      return nodes.get("dialog-content").innerHTML;
    },
  };
}

const escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;").replaceAll("'", "&#039;");

test("audit is bound to all 105 original records and UI preserves original acceptance", () => {
  const window = loadWindow();
  const acceptance = JSON.stringify(window.SWE_PADDLE_ACCEPTANCE);
  const currentAcceptance = JSON.stringify(window.SWE_PADDLE_CURRENT_ACCEPTANCE);
  const audit = window.SWE_PADDLE_VERIFICATION_AUDIT;
  assert.equal(audit.tasks.length, 105);
  assert.deepEqual(audit.tasks.map((task) => task.id).sort((a, b) => a - b), window.SWE_PADDLE_ACCEPTANCE.tasks.map((task) => task.id).sort((a, b) => a - b));
  const ui = render(window);
  assert.equal(JSON.stringify(window.SWE_PADDLE_ACCEPTANCE), acceptance);
  assert.equal(JSON.stringify(window.SWE_PADDLE_CURRENT_ACCEPTANCE), currentAcceptance);
  assert.deepEqual(window.SWE_PADDLE_CURRENT_ACCEPTANCE.counts, { total: 105, passed: 90, packageUnchanged: 71, packageNeedsFix: 19, failed: 12, incomplete: 3 });
  assert.equal(ui.nodes.get("reviewed-at").textContent, "2026-09-11");
  assert.equal(ui.nodes.get("updated-at").textContent, window.SWE_PADDLE_ACCEPTANCE.meta.updatedAt);
  assert.equal(ui.nodes.get("verification-audit-link").href, audit.meta.reportUrl);
  for (const task of audit.tasks) {
    const html = ui.open(task.id);
    for (const field of ["summary", "category", "history", "action", "evidenceNote"]) assert.ok(html.includes(escape(task[field])), `${task.id}: ${field}`);
    assert.ok(html.indexOf('class="dialog-panel audit-conclusion"') < html.indexOf('class="dialog-meta"'));
    assert.equal((html.match(/<th scope="row">/g) || []).length, task.checks.length, `${task.id}: no hidden/truncated nodes`);
    for (const check of task.checks) assert.ok(html.includes(`<code>${escape(check.name)}</code>`), `${task.id}: full node ${check.name}`);
  }
});

test("audit cards use reviewed summaries and details separate historical wording", () => {
  const window = loadWindow();
  const ui = render(window);
  for (const task of window.SWE_PADDLE_CURRENT_ACCEPTANCE.tasks.filter((task) => task.status !== "passed")) {
    const audit = window.SWE_PADDLE_VERIFICATION_AUDIT.tasks.find((item) => item.id === task.id);
    const cards = ui.nodes.get(task.status === "needs_fix" ? "fix-grid" : "issue-grid").innerHTML;
    assert.ok(cards.includes(escape(audit.summary)), `${task.id}: reviewed summary on card`);
    assert.match(ui.open(task.id), /<details class="historical-acceptance">/);
  }
});

test("every round is translated, missing execution is distinct, and untrusted text is escaped", () => {
  const window = loadWindow();
  const task = window.SWE_PADDLE_VERIFICATION_AUDIT.tasks[0];
  const injected = '<img src=x onerror="unsafe()"> & test';
  for (const field of ["summary", "category", "history", "action", "evidenceNote"]) task[field] = `${field}: ${injected}`;
  task.checks = [
    { name: injected, base: ["failed", "setup_error"], gold: ["passed", "aborted"], explanation: injected },
    { name: "missing-record", base: ["missing", null], gold: ["", "skipped"], explanation: "没有该轮记录不能当作通过或失败。" },
    { name: "unknown-status", base: [injected, "teardown_error"], gold: ["collection_error", "error"], explanation: "未识别状态保留原文。" },
    { name: "verified-target-crash", base: ["target_sigabrt", "target_sigabrt"], gold: ["passed", "passed"], explanation: "已定位到目标缺陷，区别于未定位原因的中断。" },
  ];
  const html = render(window).open(task.id);
  assert.ok(!html.includes("<img"));
  assert.ok(html.includes(escape(injected)));
  for (const label of ["失败", "准备阶段报错", "通过", "运行中断", "未执行", "跳过", "清理阶段报错", "收集测试时报错", "执行报错", "未识别状态", "目标缺陷导致崩溃"]) assert.ok(html.includes(label), label);
  assert.equal((html.match(/>未执行<\/span>/g) || []).length, 3);
  for (const heading of ["Base 第 1 轮", "Base 第 2 轮", "Gold 第 1 轮", "Gold 第 2 轮"]) assert.ok(html.includes(heading));
  assert.match(html, /没有记录显示“未执行”，不计为通过或失败/);
});

const invalidCases = [
  ["missing audit", (window) => { delete window.SWE_PADDLE_VERIFICATION_AUDIT; }],
  ["wrong source", ({ SWE_PADDLE_VERIFICATION_AUDIT: audit }) => { audit.meta.sourceReportSha256 = "0".repeat(64); }],
  ["wrong snapshot", ({ SWE_PADDLE_VERIFICATION_AUDIT: audit }) => { audit.meta.snapshot = "0".repeat(40); }],
  ["missing task", ({ SWE_PADDLE_VERIFICATION_AUDIT: audit }) => { audit.tasks.pop(); }],
  ["duplicate task", ({ SWE_PADDLE_VERIFICATION_AUDIT: audit }) => { audit.tasks[1].id = audit.tasks[0].id; }],
  ["unrelated task", ({ SWE_PADDLE_VERIFICATION_AUDIT: audit }) => { audit.tasks[0].id = 999999; }],
  ["empty explanation", ({ SWE_PADDLE_VERIFICATION_AUDIT: audit }) => { audit.tasks[0].history = " "; }],
  ["unsafe report URL", ({ SWE_PADDLE_VERIFICATION_AUDIT: audit }) => { audit.meta.reportUrl = "javascript:unsafe()"; }],
  ["unpaired round arrays", ({ SWE_PADDLE_VERIFICATION_AUDIT: audit }) => { audit.tasks[0].checks = [{ name: "node", base: ["passed"], gold: ["passed", "passed"], explanation: "说明" }]; }],
];
for (const [name, mutate] of invalidCases) {
  test(`audit fails closed: ${name}`, () => {
    const window = loadWindow();
    mutate(window);
    assert.throws(() => render(window), /SWE-Paddle verification audit/);
  });
}

test("public page loads review before app and documents dates and test meanings", () => {
  const html = readPublic("index.html");
  assert.ok(html.indexOf('src="assets/verification-audit-20260911.js') < html.indexOf('src="assets/app.js'));
  assert.match(html, /核对日期不代表 105 条重新执行/);
  assert.match(html, /59348 已恢复核心通过，入口仍待修/);
  assert.match(html, /F2P（Fail to Pass）/);
  assert.match(html, /P2P（Pass to Pass）/);
  assert.match(readPublic("assets/styles.css"), /\.check-table-wrap\s*\{[^}]*overflow-x: auto/s);
});
