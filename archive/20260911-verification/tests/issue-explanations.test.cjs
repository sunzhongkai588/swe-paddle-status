"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const vm = require("node:vm");
const { loadAcceptance, loadIssueExplanations, readPublic } = require("./helpers.cjs");
const source = readPublic("assets/issue-explanations-20260910.js");
const pattern = /const tasks = (\[[\s\S]*?\n  \]);\n  \/\/ END EXPLANATIONS/;
const original = JSON.parse(source.match(pattern)[1]);

test("supplement explains exactly 18 needs-fix tasks without changing any acceptance record", () => {
  const { explanations, acceptance, inputsBefore, inputsAfter } = loadIssueExplanations();
  assert.equal(inputsBefore, inputsAfter);
  assert.deepEqual(acceptance, loadAcceptance().acceptance);
  assert.deepEqual(Object.keys(explanations).sort(), ["meta", "schemaVersion", "tasks"]);
  assert.equal(explanations.schemaVersion, 1);
  assert.equal(explanations.meta.snapshot, acceptance.meta.snapshot);
  assert.equal(explanations.meta.sourceReportSha256, acceptance.meta.sourceReportSha256);
  assert.equal(explanations.meta.reportUrl, "issue-explanations-20260910.md");
  assert.deepEqual(explanations.tasks.map((task) => task.id), acceptance.tasks.filter((task) => task.status === "needs_fix").map((task) => task.id));
  assert.equal(explanations.tasks.length, 18);
  for (const task of explanations.tasks) {
    assert.deepEqual(Object.keys(task).sort(), ["explanation", "id"]);
    assert.equal(task.explanation.split("。").filter(Boolean).length, 2, `${task.id}: two readable sentences`);
    assert.ok(task.explanation.length <= 160, `${task.id}: concise explanation`);
  }
});

test("supplementary report matches every displayed explanation", () => {
  const { explanations } = loadIssueExplanations();
  const report = readPublic(explanations.meta.reportUrl);
  assert.deepEqual([...report.matchAll(/^## Task (\d+)$/gm)].map((match) => Number(match[1])), explanations.tasks.map((task) => task.id));
  for (const task of explanations.tasks) assert.ok(report.includes(task.explanation), `${task.id}: same wording`);
  assert.match(report, /不是新一轮测试/);
  assert.match(report, /16 条原入口仍未通过/);
  assert.ok(report.includes(explanations.meta.sourceReportSha256));
});

test("explanations preserve the important boundaries of the observed problems", () => {
  const notes = new Map(loadIssueExplanations().explanations.tasks.map((task) => [task.id, task.explanation]));
  assert.match(notes.get(60808), /只是 README.*1F\/2P.*2F\/1P/);
  assert.match(notes.get(60808), /不是修复运行故障/);
  assert.match(notes.get(78441), /7 个附带清理错误发生在 Base/);
  assert.match(notes.get(78441), /没有实际梯度断言/);
  assert.match(notes.get(73125), /Base.*类清理.*未完整通过.*2F\/4P/);
  assert.match(notes.get(73385), /提前以 0 退出.*没有完成记录/);
  assert.match(notes.get(74184), /Base 中也通过.*归为 P2P/);
  assert.match(notes.get(41202), /标准生成文件已经补齐/);
  assert.match(notes.get(52948), /已经完成精确原生构建/);
});

const invalidCases = [
  ["missing source", (_, window) => { delete window.SWE_PADDLE_ACCEPTANCE; }],
  ["wrong snapshot", (_, window) => { window.SWE_PADDLE_ACCEPTANCE.meta.snapshot = "0".repeat(40); }],
  ["wrong source digest", (_, window) => { window.SWE_PADDLE_ACCEPTANCE.meta.sourceReportSha256 = "0".repeat(64); }],
  ["missing task", (tasks) => { tasks.pop(); }],
  ["duplicate task", (tasks) => { tasks[0].id = tasks[1].id; }],
  ["unrelated task", (tasks) => { tasks[0].id = 18687; }],
  ["status override field", (tasks) => { tasks[0].status = "passed"; }],
  ["empty text", (tasks) => { tasks[0].explanation = " "; }],
  ["private content", (tasks) => { tasks[0].explanation = "/home/example/private"; }],
  ["HTML content", (tasks) => { tasks[0].explanation = "<script>unsafe()</script>"; }],
];
for (const [label, mutate] of invalidCases) {
  test(`supplement rejects ${label}`, () => {
    const tasks = structuredClone(original);
    const window = { SWE_PADDLE_ACCEPTANCE: loadAcceptance().acceptance };
    mutate(tasks, window);
    const changed = source.replace(pattern, `const tasks = ${JSON.stringify(tasks)};\n  // END EXPLANATIONS`);
    assert.throws(() => vm.runInNewContext(changed, { window }, { timeout: 1000 }), /SWE-Paddle issue explanations:/);
    assert.equal(Object.hasOwn(window, "SWE_PADDLE_ISSUE_EXPLANATIONS"), false);
  });
}
