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

function publicFiles(directory = docs) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? publicFiles(filename) : [filename];
  });
}

module.exports = { root, docs, readPublic, loadData, publicFiles };
