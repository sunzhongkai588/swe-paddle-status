"use strict";

// Optional Playwright dependency is supplied externally (for example via NODE_PATH).
// No browser binaries, screenshots, private reports or machine paths belong in Git.
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const http = require("node:http");
const path = require("node:path");
const { chromium } = require("playwright");
const { docs, loadAcceptance } = require("./helpers.cjs");

const externalUrl = process.env.SWE_PADDLE_STATUS_URL;
const screenshotDir = process.env.SWE_PADDLE_SCREENSHOT_DIR;
const executablePath = process.env.SWE_PADDLE_BROWSER_EXECUTABLE;
const report = { checks: [], screenshots: [], consoleErrors: [], failedRequests: [], badResponses: [], notFoundRequests: [] };
const { acceptance } = loadAcceptance();
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

  await check("desktop: 89/105 core passed, 71 unchanged, 18 repairs and 16 issues", async () => {
    assert.deepEqual(sorted(await tableIds(page)), sorted(inventory.map((task) => task.id)));
    assert.equal(await page.locator("#task-table-body tr").count(), 105);
    assert.match(await page.locator("#inventory-total").innerText(), /105/);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_ACCEPTANCE.meta.snapshot), acceptance.meta.snapshot);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_ACCEPTANCE.counts.passed), 89);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_DATA.tasks.length), 96);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_DATA.directTaskIds.length), 55);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_STATUS.counts.passed), 90);
    for (const [id, value] of Object.entries({
      "hero-direct": "89", "hero-needs-fix": "13", "hero-core-failed": "3",
      "metric-direct": "71", "metric-needs-fix": "18", "metric-core-failed": "16",
      "evidence-strict": "36", "evidence-compatible": "28", "evidence-lightweight": "25",
      "pass-rate": "84.8%", "updated-at": "2026-09-10",
    })) assert.equal(await page.locator("#" + id).innerText(), value, id);
    assert.match(await page.locator(".progress-center").innerText(), /89\s*\/\s*105/);
    assert.equal(await page.locator("#fix-grid .fix-card").count(), 18);
    assert.equal(await page.locator("#issue-grid .issue-card").count(), 16);
    assert.doesNotMatch(await page.locator("header.hero").innerText(), /沿用|77|85\.7|90 条|73 条/);
    assert.match(await page.locator("#readiness-note").innerText(), /记录的环境范围/);
    await noPageOverflow(page);
    await page.evaluate(() => window.scrollTo(0, 0));
    await screenshot(page, "desktop.png");
  });

  for (const [status, count] of Object.entries({ passed: 71, needs_fix: 18, failed: 13, incomplete: 3 })) {
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
    assert.ok(dataLoaderIds.every((id) => inventory.find((task) => task.id === id).title.toLowerCase().includes("dataloader")));
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
      assert.match(text, /嵌套/);
      assert.ok(text.includes(inventory.find((task) => task.id === id).reason));
      assert.match(text, /原入口|原 pytest 入口/);
      assert.match(text, id === 52948 ? /精确原生证据/ : /兼容原生载体/);
      await closeTask(page);
    });
  }

  await check("task 64519: current compatible 16F9P passes with original entry", async () => {
    const text = await openTask(page, 64519);
    assert.match(text, /通过 · 原包无必改项/);
    assert.match(text, /F2P 16 \/ P2P 9/);
    assert.match(text, /兼容原生载体/);
    assert.ok(text.includes(inventory.find((task) => task.id === 64519).reason));
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
      assert.ok(text.includes(inventory.find((task) => task.id === id).reason));
      await closeTask(page);
    });
  }

  await check("Windows 76259: patch preflight failure; Windows CPU/MSVC required, not GPU", async () => {
    const text = await openTask(page, 76259);
    assert.match(text, /验证未通过/);
    assert.match(text, /补丁预检/);
    assert.match(text, /未进入测试/);
    assert.match(text, /Windows CPU\/MSVC/);
    assert.match(text, /不要求GPU/);
    assert.doesNotMatch(text, /F2P 0|P2P 0/);
    await closeTask(page);
  });

  for (const id of [59847, 64320, 78823]) {
    await check(`hardware ${id}: required CUDA/XPU remains incomplete; CPU does not complete the task`, async () => {
      const text = await openTask(page, id);
      assert.match(text, /硬件未完成/);
      assert.match(text, /CPU/);
      assert.match(text, id === 78823 ? /CUDA或XPU|CUDA 或 XPU/ : /CUDA GPU/);
      assert.doesNotMatch(text, /F2P 0|P2P 0/);
      assert.ok(text.includes(inventory.find((task) => task.id === id).action));
      await closeTask(page);
    });
  }

  for (const [id, label] of [[18687, "精确 Python 证据"], [50086, "轻量 C++"], [79633, "兼容原生载体"]]) {
    await check(`task ${id}: evidence kind stays explicit without an exact-native upgrade`, async () => {
      const text = await openTask(page, id);
      assert.ok(text.includes(label));
      assert.ok(text.includes(inventory.find((task) => task.id === id).reason));
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
    });
  }

  await check("all page static assets return 200; browser console and requests are clean", async () => {
    for (const asset of ["data.js", "validation-update.js", "overall-status.js", "acceptance-20260910.js", "app.js", "styles.css"]) {
      const matches = responses.filter((item) => new URL(item.url).pathname.endsWith("/assets/" + asset));
      assert.ok(matches.length > 0, `asset was not loaded: ${asset}`);
      assert.ok(matches.every((item) => item.status === 200), `${asset}: ${JSON.stringify(matches)}`);
    }
    for (const asset of ["acceptance-20260910.js", "app.js", "styles.css"]) {
      assert.ok(responses.some((item) => new URL(item.url).pathname.endsWith("/assets/" + asset) && new URL(item.url).search.includes("20260910")), asset);
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
    publicReports.push(new URL("validation-update-20260909.sha256", url).href);
    publicReports.push(new URL("overall-status-20260909.sha256", url).href);
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
