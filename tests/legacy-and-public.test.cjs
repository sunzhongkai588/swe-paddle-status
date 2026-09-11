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

test("page loads immutable history, full acceptance projection, then application in order", () => {
  const html = readPublic("index.html");
  const scripts = [...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["']/g)]
    .map((match) => new URL(match[1], "https://public.invalid/").pathname.slice(1));
  assert.deepEqual(scripts, ["assets/data.js", "assets/validation-update.js", "assets/overall-status.js", "assets/acceptance-20260910.js", "assets/issue-explanations-20260910.js", "assets/acceptance-recheck-20260911.js", "assets/verification-audit-20260911.js", "assets/app.js"]);
  assert.match(html, /105/);
});

test("previous published records and their historical manifest retain their original bytes", () => {
  const immutable = {
    "assets/data.js": "e70903974cabc3e483b23e903332cc050f2e504ae92354acbc55e5282a0539ec",
    "assets/validation-update.js": "210090c36c031003e865580cf790d97de4852fbf8b4ea4875737370cae190415",
    "validation-update-20260909.md": "ce330050a235a5bf3c5f0b2f8b0fe095657856e01147a760362ae5f6b7cedc5f",
    "validation-correction-20260907.md": "1af6cd4407aca129e6c5534e2fe4fc9076a1ec65f8ba43bdc3e5b3265272b2f5",
    "validation-update-20260909.sha256": "991f8fc0a737d66452af3a2fb47f4c031c4596b37e0fb43af709af73a7480276",
    "assets/overall-status.js": "384b3f11c041350342cd3018f9de920f65fa43ab056cfa08ecd6cc1eebc55aed",
    "overall-status-20260909.md": "09fc3fec7913a0d35f6e9ba4ee771f57c1317e6d057bf01e4ce94edaaef4c986",
    "overall-status-20260909.sha256": "04d0c26184323d179c35bfa9f9dd8b2f57595b07a2bf68f38f70566e74acb155",
    "assets/acceptance-20260910.js": "7df403b776340c5b8276df8aed8b2f4f3be5b46fe87c4275705d4f5722a44800",
    "acceptance-20260910.md": "9b1340ff8f023f8feccbb08f25d890785d9fb2381bcacc145e483e11b087b542",
    "acceptance-20260910.sha256": "8d2aef5f6aeaa24942fb05b31d1b9ed3e18722f6b79fe929c0b1e65dec323d67",
    "assets/issue-explanations-20260910.js": "ea80206b6cd28621491e0be3767339bfeba6ab30c1e9f9adaf4efd733b536470",
    "issue-explanations-20260910.md": "50ed7c7027769f1eca25373d560f56502301f5bc8a65754843667761b3d79a6e",
    "acceptance-20260910-r2.sha256": "5b6ec19f70152119864382bd9150085151121ab7613157efb488f711fb80738b",
  };
  for (const [relative, expected] of Object.entries(immutable)) {
    const actual = crypto.createHash("sha256").update(fs.readFileSync(path.join(docs, relative))).digest("hex");
    assert.equal(actual, expected, relative);
  }
  // The old manifest binds the previous UI revision, not the current index/app/CSS.
});

test("current audit release manifest binds exactly the current published entities", () => {
  const manifest = readPublic("verification-audit-20260911.sha256");
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
  assert.deepEqual(filenames.sort(), [".nojekyll", "index.html", "assets/app.js", "assets/styles.css", "assets/data.js", "assets/validation-update.js", "assets/overall-status.js", "assets/acceptance-20260910.js", "assets/issue-explanations-20260910.js", "assets/acceptance-recheck-20260911.js", "assets/verification-audit-20260911.js", "verification-audit-20260911.md", "validation-correction-20260907.md", "validation-update-20260909.md", "validation-update-20260909.sha256", "overall-status-20260909.md", "overall-status-20260909.sha256", "acceptance-20260910.md", "acceptance-20260910.sha256", "acceptance-20260910-r2.sha256", "issue-explanations-20260910.md"].sort());
});
