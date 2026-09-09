"use strict";

const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const { docs, loadData, publicFiles, readPublic } = require("./helpers.cjs");

test("historical 96-task source bytes remain immutable", () => {
  const digest = crypto.createHash("sha256").update(readPublic("assets/data.js")).digest("hex");
  assert.equal(digest, "e70903974cabc3e483b23e903332cc050f2e504ae92354acbc55e5282a0539ec");
  const { legacy, legacyBefore, legacyAfter, globals } = loadData();
  assert.equal(legacyBefore, legacyAfter, "the update must not mutate historical evidence");
  assert.deepEqual(globals, ["SWE_PADDLE_DATA", "SWE_PADDLE_UPDATE"]);
  assert.equal(legacy.meta.total, 96);
  assert.equal(legacy.tasks.length, 96);
  assert.equal(legacy.directTaskIds.length, 55);
  assert.equal(legacy.meta.snapshot, "c9e46547a1f8dce934a8c454a9b4afd6cce1d384");
  assert.equal(Object.keys(legacy.notices).length, 21);
  assert.equal(Object.keys(legacy.failures).length, 20);
});

test("public assets contain no private runtime, credential, native-image or raw patch material", () => {
  const forbidden = [
    ["private home directory", /\/(?:data\/)?home\/[^\s/"']+\//i],
    ["private macOS home directory", /\/Users\/[^\s/"']+\//],
    ["private runtime evidence directory", /(?:^|[\/"'\s])\.runtime\//m],
    ["Docker socket or private image reference", /docker\.sock|docker:\/\/|sha256:[a-f0-9]{64}|paddleswe-local-src|paddle-cpu-build-toolchain/i],
    ["private inference endpoint", /libinfer_neo|baidu-int\.com|ku\.baidu-int\.com/i],
    ["credential assignment", /(?:api[_-]?key|access[_-]?token|authorization|password|client[_-]?secret)\s*["']?\s*[:=]\s*["']?(?!null\b|false\b)[A-Za-z0-9_+\/.=-]{8,}/i],
    ["private key", /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
    ["raw Gold or test patch", /^\s*diff --git |^@@ -\d+(?:,\d+)? \+\d+(?:,\d+)? @@/m],
  ];
  for (const filename of publicFiles()) {
    if (!/\.(?:js|css|html|md|json|sha256)$/.test(filename)) continue;
    const contents = fs.readFileSync(filename, "utf8");
    for (const [label, expression] of forbidden) {
      assert.equal(expression.test(contents), false, `${path.relative(docs, filename)}: ${label}`);
    }
  }
});

test("page loads immutable history, current update, then application in order", () => {
  const html = readPublic("index.html");
  const scripts = [...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["']/g)]
    .map((match) => new URL(match[1], "https://public.invalid/").pathname.slice(1));
  assert.deepEqual(scripts, ["assets/data.js", "assets/validation-update.js", "assets/app.js"]);
  assert.match(html, /105/);
  assert.match(html, /77/);
});

test("public release digest manifest binds exactly the eight published entities", () => {
  const manifest = readPublic("validation-update-20260909.sha256");
  const lines = manifest.trim().split(/\r?\n/);
  const filenames = [];
  for (const line of lines) {
    const match = line.match(/^([a-f0-9]{64})  ([a-zA-Z0-9._/-]+)$/);
    assert.ok(match, "malformed public digest line");
    const [, expected, relative] = match;
    assert.ok(!relative.startsWith("/") && !relative.split("/").includes(".."));
    const bytes = fs.readFileSync(path.join(docs, relative));
    assert.equal(crypto.createHash("sha256").update(bytes).digest("hex"), expected, relative);
    filenames.push(relative);
  }
  assert.deepEqual(filenames.sort(), [".nojekyll", "index.html", "assets/app.js", "assets/styles.css", "assets/data.js", "assets/validation-update.js", "validation-correction-20260907.md", "validation-update-20260909.md"].sort());
});
