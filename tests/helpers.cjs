"use strict";

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const docs = path.join(root, "docs");

function readPublic(relative) {
  return fs.readFileSync(path.join(docs, relative), "utf8");
}

function loadData() {
  const context = vm.createContext({ window: {} });
  vm.runInContext(readPublic("assets/data.js"), context, { timeout: 1000 });
  const legacyBefore = JSON.stringify(context.window.SWE_PADDLE_DATA);
  vm.runInContext(readPublic("assets/validation-update.js"), context, { timeout: 1000 });
  return {
    legacy: JSON.parse(JSON.stringify(context.window.SWE_PADDLE_DATA)),
    update: JSON.parse(JSON.stringify(context.window.SWE_PADDLE_UPDATE)),
    legacyBefore,
    legacyAfter: JSON.stringify(context.window.SWE_PADDLE_DATA),
    globals: Object.keys(context.window).sort(),
  };
}

function loadOverall() {
  const context = vm.createContext({ window: {} });
  for (const filename of ["assets/data.js", "assets/validation-update.js"]) {
    vm.runInContext(readPublic(filename), context, { timeout: 1000 });
  }
  const before = JSON.stringify(context.window);
  vm.runInContext(readPublic("assets/overall-status.js"), context, { timeout: 1000 });
  const { SWE_PADDLE_STATUS, ...inputs } = context.window;
  return {
    legacy: JSON.parse(JSON.stringify(context.window.SWE_PADDLE_DATA)),
    update: JSON.parse(JSON.stringify(context.window.SWE_PADDLE_UPDATE)),
    overall: JSON.parse(JSON.stringify(SWE_PADDLE_STATUS)),
    inputsBefore: before,
    inputsAfter: JSON.stringify(inputs),
    globals: Object.keys(context.window).sort(),
  };
}

function publicFiles(directory = docs) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? publicFiles(filename) : [filename];
  });
}

function loadAcceptance() {
  const context = vm.createContext({ window: {} });
  for (const filename of ["assets/data.js", "assets/validation-update.js", "assets/overall-status.js"]) {
    vm.runInContext(readPublic(filename), context, { timeout: 1000 });
  }
  const before = JSON.stringify(context.window);
  vm.runInContext(readPublic("assets/acceptance-20260910.js"), context, { timeout: 1000 });
  const { SWE_PADDLE_ACCEPTANCE, ...inputs } = context.window;
  return {
    acceptance: JSON.parse(JSON.stringify(SWE_PADDLE_ACCEPTANCE)),
    overall: JSON.parse(JSON.stringify(context.window.SWE_PADDLE_STATUS)),
    inputsBefore: before,
    inputsAfter: JSON.stringify(inputs),
    globals: Object.keys(context.window).sort(),
  };
}

function loadIssueExplanations() {
  const context = vm.createContext({ window: {} });
  for (const filename of ["assets/data.js", "assets/validation-update.js", "assets/overall-status.js", "assets/acceptance-20260910.js"]) {
    vm.runInContext(readPublic(filename), context, { timeout: 1000 });
  }
  const before = JSON.stringify(context.window);
  vm.runInContext(readPublic("assets/issue-explanations-20260910.js"), context, { timeout: 1000 });
  const { SWE_PADDLE_ISSUE_EXPLANATIONS, ...inputs } = context.window;
  return {
    explanations: JSON.parse(JSON.stringify(SWE_PADDLE_ISSUE_EXPLANATIONS)),
    acceptance: JSON.parse(JSON.stringify(context.window.SWE_PADDLE_ACCEPTANCE)),
    inputsBefore: before,
    inputsAfter: JSON.stringify(inputs),
    globals: Object.keys(context.window).sort(),
  };
}

module.exports = { root, docs, readPublic, loadData, loadOverall, loadAcceptance, loadIssueExplanations, publicFiles };
