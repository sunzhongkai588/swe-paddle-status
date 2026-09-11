"use strict";

// Optional Playwright dependency is supplied externally (for example via NODE_PATH).
// No browser binaries, screenshots, private reports or machine paths belong in Git.
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const http = require("node:http");
const path = require("node:path");
const vm = require("node:vm");
const { chromium } = require("playwright");
const { docs, loadAcceptance, readPublic } = require("./helpers.cjs");

const externalUrl = process.env.SWE_PADDLE_STATUS_URL;
const screenshotDir = process.env.SWE_PADDLE_SCREENSHOT_DIR;
const executablePath = process.env.SWE_PADDLE_BROWSER_EXECUTABLE;
const report = { checks: [], screenshots: [], consoleErrors: [], failedRequests: [], badResponses: [], notFoundRequests: [] };
const { acceptance: frozenAcceptance } = loadAcceptance();
const currentWindow = { SWE_PADDLE_ACCEPTANCE: frozenAcceptance };
vm.runInNewContext(readPublic("assets/acceptance-recheck-20260911.js"), { window: currentWindow }, { timeout: 1000 });
const acceptance = JSON.parse(JSON.stringify(currentWindow.SWE_PADDLE_CURRENT_ACCEPTANCE));
vm.runInNewContext(readPublic("assets/verification-audit-20260911.js"), { window: currentWindow }, { timeout: 1000 });
const audit = JSON.parse(JSON.stringify(currentWindow.SWE_PADDLE_VERIFICATION_AUDIT));
const auditById = new Map(audit.tasks.map((task) => [task.id, task]));
const explanationsWindow = { SWE_PADDLE_ACCEPTANCE: frozenAcceptance };
vm.runInNewContext(readPublic("assets/issue-explanations-20260910.js"), { window: explanationsWindow }, { timeout: 1000 });
const explanations = JSON.parse(JSON.stringify(explanationsWindow.SWE_PADDLE_ISSUE_EXPLANATIONS));
const inventory = acceptance.tasks;
const sorted = (values) => [...values].sort((a, b) => a - b);
let server;
let browser;

async function check(label, action) {
  await action();
  report.checks.push(label);
  console.log(`PASS ${label}`);
}

async function localServer() {
  const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".md": "text/plain; charset=utf-8", ".sha256": "text/plain; charset=utf-8" };
  server = http.createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
      const filename = path.resolve(docs, "." + (pathname.endsWith("/") ? pathname + "index.html" : pathname));
      if (!filename.startsWith(docs + path.sep)) throw new Error("outside public root");
      const contents = await fs.readFile(filename);
      response.writeHead(200, { "Content-Type": types[path.extname(filename)] || "application/octet-stream", "Cache-Control": "no-store" });
      response.end(contents);
    } catch {
      report.notFoundRequests.push(request.url);
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("Not found");
    }
  });
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  return `http://127.0.0.1:${server.address().port}/`;
}

async function screenshot(page, filename) {
  if (!screenshotDir) return;
  const target = path.join(screenshotDir, filename);
  await page.screenshot({ path: target, fullPage: false, animations: "disabled" });
  report.screenshots.push(target);
}

async function tableIds(page) {
  return page.locator("#task-table-body tr").evaluateAll((rows) => rows.map((row) => {
    const element = row.matches("[data-task-id]") ? row : row.querySelector("[data-task-id]");
    if (element) return Number(element.dataset.taskId);
    const match = row.textContent.match(/#?(\d{5})/);
    return match ? Number(match[1]) : NaN;
  }));
}

async function reset(page) {
  await page.locator("#clear-filters").click();
  assert.equal(await page.locator("#search-input").inputValue(), "");
}

async function openTask(page, id) {
  await reset(page);
  await page.locator("#search-input").fill(String(id));
  assert.deepEqual(await tableIds(page), [id]);
  await page.locator(`#task-table-body [data-task-id="${id}"], #task-table-body tr[data-task-id="${id}"]`).first().click();
  await page.locator("#task-dialog[open]").waitFor({ state: "visible" });
  return page.locator("#dialog-content").innerText();
}

async function closeTask(page) {
  await page.locator(".dialog-close").click();
  await page.locator("#task-dialog").waitFor({ state: "hidden" });
}

async function noPageOverflow(page) {
  const dimensions = await page.evaluate(() => ({
    viewport: window.innerWidth,
    html: document.documentElement.scrollWidth,
    body: document.body.scrollWidth,
  }));
  assert.ok(dimensions.html <= dimensions.viewport + 1 && dimensions.body <= dimensions.viewport + 1, JSON.stringify(dimensions));
}

async function main() {
  if (screenshotDir) await fs.mkdir(screenshotDir, { recursive: true });
  const url = externalUrl || await localServer();
  report.target = url;
  browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, locale: "zh-CN" });
  const page = await context.newPage();
  const responses = [];
  page.on("pageerror", (error) => report.consoleErrors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") report.consoleErrors.push({ message: message.text(), location: message.location() }); });
  page.on("requestfailed", (request) => report.failedRequests.push({ url: request.url(), error: request.failure()?.errorText }));
  page.on("response", (response) => {
    responses.push({ url: response.url(), status: response.status() });
    if (response.status() >= 400) report.badResponses.push({ url: response.url(), status: response.status() });
  });
  const response = await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  assert.equal(response.status(), 200);
  await page.locator("#task-table-body tr").first().waitFor();

  await check("desktop: 90/105 core passed, 71 unchanged, 19 repairs and 15 issues", async () => {
    assert.deepEqual(sorted(await tableIds(page)), sorted(inventory.map((task) => task.id)));
    assert.equal(await page.locator("#task-table-body tr").count(), 105);
    assert.match(await page.locator("#inventory-total").innerText(), /105/);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_ACCEPTANCE.meta.snapshot), acceptance.meta.snapshot);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_ACCEPTANCE.counts.passed), 89);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_CURRENT_ACCEPTANCE.counts.passed), 90);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_DATA.tasks.length), 96);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_DATA.directTaskIds.length), 55);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_STATUS.counts.passed), 90);
    for (const [id, value] of Object.entries({
      "hero-direct": "90", "hero-needs-fix": "12", "hero-core-failed": "3",
      "metric-direct": "71", "metric-needs-fix": "19", "metric-core-failed": "15",
      "evidence-strict": "37", "evidence-compatible": "28", "evidence-lightweight": "25",
      "pass-rate": "85.7%", "updated-at": "2026-09-10", "reviewed-at": "2026-09-11",
    })) assert.equal(await page.locator("#" + id).innerText(), value, id);
    assert.match(await page.locator(".progress-center").innerText(), /90\s*\/\s*105/);
    assert.equal(await page.locator("#fix-grid .fix-card").count(), 19);
    assert.equal(await page.locator("#issue-grid .issue-card").count(), 15);
    assert.match(await page.locator(".audit-correction-note").innerText(), /59348 已恢复核心通过/);
    assert.match(await page.locator(".audit-correction-note").innerText(), /57827、59021.*目标子集/);
    assert.match(await page.locator(".audit-update-line").innerText(), /核对日期不代表 105 条重新执行/);
    assert.doesNotMatch(await page.locator("header.hero").innerText(), /92 条|21 条需要修改|3 条原判未通过已纠正/);
    assert.match(await page.locator("#readiness-note").innerText(), /记录的环境范围/);
    await noPageOverflow(page);
    await page.evaluate(() => window.scrollTo(0, 0));
    await screenshot(page, "desktop.png");
  });

  for (const [status, count] of Object.entries({ passed: 71, needs_fix: 19, failed: 12, incomplete: 3 })) {
    await check(`status filter: ${status} = ${count}`, async () => {
      await reset(page);
      await page.locator("#status-filter").selectOption(status);
      assert.deepEqual(sorted(await tableIds(page)), sorted(inventory.filter((task) => task.status === status).map((task) => task.id)));
      assert.equal(await page.locator("#task-table-body tr").count(), count);
    });
  }

  await check("the 28-task delta is a collapsed update log, not the primary status view", async () => {
    const panel = page.locator("#update-history");
    assert.equal(await panel.evaluate((element) => element.tagName), "DETAILS");
    assert.equal(await panel.evaluate((element) => element.open), false);
    assert.match(await panel.textContent(), /28/);
    await panel.locator("summary").click();
    assert.equal(await panel.evaluate((element) => element.open), true);
    await panel.locator("summary").click();
    assert.equal(await panel.evaluate((element) => element.open), false);
  });

  await check("seven runtime evidence filters are orthogonal to current outcomes", async () => {
    for (const [evidence, count] of Object.entries(acceptance.scopeCounts)) {
      await reset(page);
      await page.locator("#source-filter").selectOption(evidence);
      assert.equal(await page.locator("#task-table-body tr").count(), count);
      assert.deepEqual(sorted(await tableIds(page)), sorted(inventory.filter((task) => task.evidence === evidence).map((task) => task.id)));
      assert.equal(new URL(page.url()).searchParams.get("evidence"), evidence);
      await page.locator("#status-filter").selectOption("passed");
      assert.deepEqual(sorted(await tableIds(page)), sorted(inventory.filter((task) => task.evidence === evidence && task.status === "passed").map((task) => task.id)));
    }
    await reset(page);
  });

  await check("URL evidence filters persist; obsolete historical source filters fall back to all", async () => {
    const target = new URL(url);
    target.search = "?status=needs_fix&evidence=exact_native";
    await page.goto(target.href, { waitUntil: "networkidle" });
    assert.deepEqual(sorted(await tableIds(page)), sorted(inventory.filter((task) => task.evidence === "exact_native" && task.status === "needs_fix").map((task) => task.id)));
    target.search = "?status=notice&source=retained";
    await page.goto(target.href, { waitUntil: "networkidle" });
    assert.equal(await page.locator("#task-table-body tr").count(), 105);
    assert.equal(await page.locator("#source-filter").inputValue(), "all");
    assert.equal(await page.locator("#status-filter").inputValue(), "all");
    await reset(page);
  });

  await check("search, author, type and clear filters are composable", async () => {
    await reset(page);
    await page.locator("#search-input").fill("79386");
    assert.deepEqual(await tableIds(page), [79386]);
    await reset(page);
    await page.locator("#search-input").fill("DataLoader");
    const dataLoaderIds = await tableIds(page);
    assert.ok(dataLoaderIds.length >= 2);
    assert.ok(dataLoaderIds.every((id) => {
      const task = inventory.find((task) => task.id === id);
      const note = auditById.get(id);
      return [task.title, note.summary, note.category, ...note.checks.map((check) => check.name)].join(" ").toLowerCase().includes("dataloader");
    }));
    await reset(page);
    await page.locator("#author-filter").selectOption("Echo-Nie");
    assert.deepEqual(sorted(await tableIds(page)), sorted(inventory.filter((task) => task.author === "Echo-Nie").map((task) => task.id)));
    await page.locator("#type-filter").selectOption("bugfix");
    assert.deepEqual(sorted(await tableIds(page)), sorted(inventory.filter((task) => task.author === "Echo-Nie" && task.type === "bugfix").map((task) => task.id)));
    await page.locator("#status-filter").selectOption("passed");
    assert.deepEqual(sorted(await tableIds(page)), sorted(inventory.filter((task) => task.author === "Echo-Nie" && task.type === "bugfix" && task.status === "passed").map((task) => task.id)));
    await reset(page);
    await page.locator("#search-input").fill("no-such-task-xyz-987654321");
    assert.equal(await page.locator("#task-table-body tr").count(), 0);
    assert.equal(await page.locator("#empty-state").isVisible(), true);
    await reset(page);
    assert.equal(await page.locator("#task-table-body tr").count(), 105);
    await page.locator("#all-tasks").scrollIntoViewIfNeeded();
    await screenshot(page, "desktop-table.png");
  });

  for (const id of [41202, 52948]) {
    await check(`task ${id}: core passes but original nested-package VarBase entry requires repair`, async () => {
      const text = await openTask(page, id);
      assert.match(text, /任务包待修/);
      assert.match(text, /VarBase/);
      assert.match(text, /重复|再次加载/);
      assert.ok(text.includes(auditById.get(id).summary));
      assert.match(text, /原脚本|原入口|原 pytest 入口/);
      assert.match(text, id === 52948 ? /精确原生证据/ : /兼容原生载体/);
      await closeTask(page);
    });
  }

  await check("task 64519: current compatible 16F9P passes with original entry", async () => {
    const text = await openTask(page, 64519);
    assert.match(text, /通过 · 原包无必改项/);
    assert.match(text, /F2P 16 \/ P2P 9/);
    assert.match(text, /兼容原生载体/);
    assert.ok(text.includes(auditById.get(64519).summary));
    await closeTask(page);
  });

  await check("task 64881: 6F92P is only a paired subset and not a whole-task pass", async () => {
    const text = await openTask(page, 64881);
    assert.match(text, /验证未通过/);
    assert.match(text, /F2P 6 \/ P2P 92/);
    assert.match(text, /子集/);
    assert.match(text, /7个|7 个/);
    await closeTask(page);
  });

  for (const id of [79386, 73122]) {
    await check(`task ${id}: observed 0F3P remains failed, not environment incomplete`, async () => {
      const text = await openTask(page, id);
      assert.match(text, /验证未通过/);
      assert.match(text, /F2P 0 \/ P2P 3/);
      assert.ok(text.includes(auditById.get(id).summary));
      await closeTask(page);
    });
  }

  await check("Windows 76259: patch preflight failure; Windows CPU/MSVC required, not GPU", async () => {
    const text = await openTask(page, 76259);
    assert.match(text, /验证未通过/);
    assert.match(text, /补丁预检/);
    assert.match(text, /未进入测试/);
    assert.match(text, /Windows CPU\s*\/\s*MSVC x64/);
    assert.doesNotMatch(text, /本题.{0,20}(?:需要|要求)\s*GPU/);
    assert.doesNotMatch(text, /F2P 0|P2P 0/);
    await closeTask(page);
  });

  for (const id of [59847, 64320, 78823]) {
    await check(`hardware ${id}: required CUDA/XPU remains incomplete; CPU does not complete the task`, async () => {
      const text = await openTask(page, id);
      assert.match(text, /硬件未完成/);
      assert.match(text, /CPU/);
      assert.match(text, id === 78823 ? /CUDA或XPU|CUDA 或 XPU/ : /CUDA/);
      assert.match(text, /必需.*(?:GPU|CUDA|设备|硬件)|所需硬件未执行/);
      assert.doesNotMatch(text, /F2P 0|P2P 0/);
      assert.ok(text.includes(auditById.get(id).action));
      await closeTask(page);
    });
  }

  for (const [id, label] of [[18687, "精确 Python 证据"], [50086, "轻量 C++"], [79633, "兼容原生载体"]]) {
    await check(`task ${id}: evidence kind stays explicit without an exact-native upgrade`, async () => {
      const text = await openTask(page, id);
      assert.ok(text.includes(label));
      assert.ok(text.includes(auditById.get(id).summary));
      assert.match(text, /验证记录日期 2026-09-09/);
      assert.match(text, /页面发布更新 2026-09-10/);
      await closeTask(page);
    });
  }

  await check("task 79275: historical source-directory alias is preserved", async () => {
    await openTask(page, 79275);
    const links = await page.locator("#dialog-content a[href]").evaluateAll((anchors) => anchors.map((anchor) => anchor.href));
    assert.ok(links.some((href) => href.includes("/PaddlePaddle_Paddle-79275")));
    await closeTask(page);
  });

  await check("all 34 issue cards and dialogs show their own reviewed explanation and action", async () => {
    const expected = inventory.filter((task) => task.status !== "passed");
    assert.equal(expected.length, 34);
    assert.equal(explanations.tasks.length, 18, "historical supplement remains unchanged");
    assert.equal(await page.locator("#fix-grid .audit-summary, #issue-grid .audit-summary").count(), 34);
    for (const task of expected) {
      const note = auditById.get(task.id);
      const card = page.locator(`#${task.status === "needs_fix" ? "fix-grid" : "issue-grid"} [data-task-id="${task.id}"]`);
      assert.equal(await card.locator(".audit-summary p").textContent(), note.summary);
      assert.equal(await card.locator(".fix-action p").textContent(), note.action);
      await openTask(page, task.id);
      for (const [selector, value] of [[".audit-conclusion p", note.summary], [".audit-category p", note.category], [".audit-action p", note.action], [".audit-history p", note.history]]) {
        assert.equal(await page.locator(`#dialog-content ${selector}`).textContent(), value, `${task.id}: ${selector}`);
      }
      assert.equal(await page.locator(".historical-acceptance").evaluate((element) => element.open), false);
      assert.equal(await page.locator(".historical-acceptance .dialog-section p").first().textContent(), frozenAcceptance.tasks.find((row) => row.id === task.id).reason);
      await closeTask(page);
    }
  });

  await check("all 105 dialogs preserve complete check names and all four recorded outcomes", async () => {
    await reset(page);
    const rendered = await page.evaluate((ids) => ids.map((id) => {
      document.querySelector(`#task-table-body [data-task-id="${id}"]`).click();
      const dialog = document.getElementById("task-dialog");
      const row = { id, open: dialog.open, title: document.getElementById("dialog-title").textContent,
        summary: document.querySelector("#dialog-content .audit-conclusion p").textContent,
        names: [...document.querySelectorAll("#dialog-content .check-table tbody th code")].map((node) => node.textContent),
        states: [...document.querySelectorAll("#dialog-content .check-table .check-status")].map((node) => node.title),
        collapsed: !document.querySelector("#dialog-content .check-details").open };
      dialog.close();
      return row;
    }), inventory.map((task) => task.id));
    for (const task of rendered) {
      const note = auditById.get(task.id);
      assert.equal(task.open, true);
      assert.equal(task.title, `Task #${task.id}`);
      assert.equal(task.summary, note.summary);
      assert.equal(task.collapsed, true);
      assert.deepEqual(task.names, note.checks.map((check) => check.name), `${task.id}: complete node list`);
      assert.deepEqual(task.states, note.checks.flatMap((check) => [...check.base, ...check.gold].map((status) => status === null || !status.trim() ? "missing" : status)), `${task.id}: no missing outcomes`);
    }
  });

  await check("search finds a full failing test node and allows status filtering", async () => {
    await reset(page);
    const name = auditById.get(64881).checks.find((check) => check.gold.includes("failed")).name;
    await page.locator("#search-input").fill(name);
    assert.ok((await tableIds(page)).includes(64881));
    await page.locator("#status-filter").selectOption("failed");
    assert.ok((await tableIds(page)).includes(64881));
    await reset(page);
  });

  await check("recheck restores only full-scope 59348 and retains incomplete subsets as failed", async () => {
    for (const [id, f2p, p2p, status] of [[59348, 13, 2, "needs_fix"], [57827, 2, 2, "failed"], [59021, 3, 6, "failed"]]) {
      const task = inventory.find((row) => row.id === id);
      assert.equal(frozenAcceptance.tasks.find((row) => row.id === id).status, "failed");
      assert.equal(task.status, status);
      assert.equal(task.f2p, f2p);
      assert.equal(task.p2p, p2p);
      const text = await openTask(page, id);
      assert.ok(text.includes(`${f2p} F2P / ${p2p} P2P`));
      assert.match(text, id === 59348 ? /完整15节点|完整 15 节点/ : /子集.*整题未通过|整题保持未通过/s);
      await page.locator(".check-details summary").click();
      if (id === 57827) assert.equal(await page.locator('.check-status[title="target_sigabrt"]').first().textContent(), "目标缺陷导致崩溃");
      await closeTask(page);
    }
  });

  await check("59374 separates missing P2P qualification from successful Gold execution", async () => {
    const text = await openTask(page, 59374);
    assert.match(text, /Gold双轮5 passed\/1 skipped/);
    assert.match(text, /未通过的是回归覆盖要求/);
    assert.match(await page.locator(".entry-acceptance").innerText(), /原报告入口验收.*不等同于脚本退出码/s);
    await closeTask(page);
  });

  await check("60808 is documentation-only; 78441 explains empty gradient checks", async () => {
    const section = await page.locator("#package-fixes .section-heading").innerText();
    assert.match(section, /59348.*15 个测试节点/);
    assert.match(section, /60808 与 78441 原入口已通过/);
    for (const id of [60808, 78441]) {
      assert.equal(inventory.find((task) => task.id === id).originalEntryPassed, true);
      await openTask(page, id);
      const note = await page.locator("#dialog-content .audit-conclusion").innerText();
      assert.match(note, id === 60808 ? /测试没有失败/ : /空.*梯度|梯度.*空/);
      if (id === 60808) assert.match(note, /README 写成了/);
      if (id === 78441) assert.match(note, /7 个清理错误发生在 Base/);
      await closeTask(page);
    }
  });

  for (const width of [390, 360]) {
    await check(`mobile ${width}px: filters, modal and layout have no page-wide horizontal overflow`, async () => {
      await page.setViewportSize({ width, height: 844 });
      await reset(page);
      await page.evaluate(() => window.scrollTo(0, 0));
      await noPageOverflow(page);
      if (width === 390) await screenshot(page, "mobile.png");
      await page.locator("#all-tasks").scrollIntoViewIfNeeded();
      await noPageOverflow(page);
      if (width === 390) await screenshot(page, "mobile-table.png");
      await openTask(page, 79386);
      await noPageOverflow(page);
      const bounds = await page.locator("#task-dialog").boundingBox();
      assert.ok(bounds.x >= -1 && bounds.x + bounds.width <= width + 1, JSON.stringify(bounds));
      await closeTask(page);
      await openTask(page, 78441);
      assert.equal(await page.locator("#dialog-content .audit-conclusion p").textContent(), auditById.get(78441).summary);
      await page.locator("#dialog-content .check-details summary").click();
      await page.locator("#dialog-content .check-table-wrap").scrollIntoViewIfNeeded();
      assert.equal(await page.locator("#dialog-content .check-table tbody th code").first().textContent(), auditById.get(78441).checks[0].name);
      const tableBounds = await page.locator(".check-table-wrap").evaluate((element) => ({ client: element.clientWidth, scroll: element.scrollWidth, overflow: getComputedStyle(element).overflowX }));
      assert.equal(tableBounds.overflow, "auto");
      assert.ok(tableBounds.scroll > tableBounds.client, JSON.stringify(tableBounds));
      const dialogOverflow = await page.locator("#task-dialog").evaluate((element) => element.scrollWidth - element.clientWidth);
      assert.ok(dialogOverflow <= 1, `dialog should contain table scrolling: ${dialogOverflow}`);
      await noPageOverflow(page);
      if (width === 390) await screenshot(page, "mobile-test-details.png");
      await closeTask(page);
    });
  }

  await check("all page static assets return 200; browser console and requests are clean", async () => {
    for (const asset of ["data.js", "validation-update.js", "overall-status.js", "acceptance-20260910.js", "issue-explanations-20260910.js", "acceptance-recheck-20260911.js", "verification-audit-20260911.js", "app.js", "styles.css"]) {
      const matches = responses.filter((item) => new URL(item.url).pathname.endsWith("/assets/" + asset));
      assert.ok(matches.length > 0, `asset was not loaded: ${asset}`);
      assert.ok(matches.every((item) => item.status === 200), `${asset}: ${JSON.stringify(matches)}`);
    }
    for (const asset of ["acceptance-20260910.js"]) {
      assert.ok(responses.some((item) => new URL(item.url).pathname.endsWith("/assets/" + asset) && new URL(item.url).search.includes("20260910")), asset);
    }
    for (const asset of ["issue-explanations-20260910.js"]) {
      assert.ok(responses.some((item) => new URL(item.url).pathname.endsWith("/assets/" + asset) && new URL(item.url).search.includes("20260910-r2")), asset);
    }
    for (const asset of ["acceptance-recheck-20260911.js", "verification-audit-20260911.js", "app.js", "styles.css"]) {
      assert.ok(responses.some((item) => new URL(item.url).pathname.endsWith("/assets/" + asset) && new URL(item.url).search.includes("20260911")), asset);
    }
    assert.deepEqual(report.badResponses, []);
    assert.deepEqual(report.failedRequests, []);
    assert.deepEqual(report.consoleErrors, []);
    assert.deepEqual(report.notFoundRequests, []);
  });
  await check("same-origin current acceptance report and frozen historical archives return 200", async () => {
    const reportLinks = await page.locator("a[href]").evaluateAll((anchors) => anchors.map((anchor) => anchor.href));
    const targetOrigin = new URL(url).origin;
    const publicReports = [...new Set(reportLinks.filter((href) => new URL(href).origin === targetOrigin && new URL(href).pathname.endsWith(".md")))];
    assert.ok(publicReports.some((href) => new URL(href).pathname.endsWith("/validation-update-20260909.md")));
    assert.ok(publicReports.some((href) => new URL(href).pathname.endsWith("/validation-correction-20260907.md")));
    assert.ok(publicReports.some((href) => new URL(href).pathname.endsWith("/overall-status-20260909.md")));
    assert.ok(publicReports.some((href) => new URL(href).pathname.endsWith("/acceptance-20260910.md")));
    assert.ok(publicReports.some((href) => new URL(href).pathname.endsWith("/issue-explanations-20260910.md")));
    assert.ok(publicReports.some((href) => new URL(href).pathname.endsWith("/verification-audit-20260911.md")));
    publicReports.push(new URL("validation-update-20260909.sha256", url).href);
    publicReports.push(new URL("overall-status-20260909.sha256", url).href);
    publicReports.push(new URL("verification-audit-20260911.sha256", url).href);
    report.publicReports = [];
    for (const href of publicReports) {
      const result = await context.request.get(href);
      assert.equal(result.status(), 200, href);
      assert.ok((await result.body()).length > 0, `empty public report: ${href}`);
      report.publicReports.push({ url: href, status: result.status() });
    }
  });
  report.success = true;
}

main().catch((error) => {
  report.success = false;
  report.error = { message: error.message, stack: error.stack };
  process.exitCode = 1;
}).finally(async () => {
  if (browser) await browser.close();
  if (server) {
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
  }
  if (screenshotDir) await fs.writeFile(path.join(screenshotDir, "browser-report.json"), JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify(report, null, 2));
});
