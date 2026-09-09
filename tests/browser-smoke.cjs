"use strict";

// Optional Playwright dependency is supplied externally (for example via NODE_PATH).
// No browser binaries, screenshots, private reports or machine paths belong in Git.
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const http = require("node:http");
const path = require("node:path");
const { chromium } = require("playwright");
const { docs, loadData } = require("./helpers.cjs");

const externalUrl = process.env.SWE_PADDLE_STATUS_URL;
const screenshotDir = process.env.SWE_PADDLE_SCREENSHOT_DIR;
const executablePath = process.env.SWE_PADDLE_BROWSER_EXECUTABLE;
const report = { checks: [], screenshots: [], consoleErrors: [], failedRequests: [], badResponses: [] };
const { legacy, update } = loadData();
const inventory = [
  ...update.tasks,
  ...legacy.tasks.filter((task) => update.meta.unchangedTaskIds.includes(task.id)).map((task) => ({ ...task, status: "historical" })),
];
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
  page.on("console", (message) => { if (message.type() === "error") report.consoleErrors.push(message.text()); });
  page.on("requestfailed", (request) => report.failedRequests.push({ url: request.url(), error: request.failure()?.errorText }));
  page.on("response", (response) => {
    responses.push({ url: response.url(), status: response.status() });
    if (response.status() >= 400) report.badResponses.push({ url: response.url(), status: response.status() });
  });
  const response = await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  assert.equal(response.status(), 200);
  await page.locator("#task-table-body tr").first().waitFor();

  await check("desktop: all 105 explicit tasks and correct snapshot loaded", async () => {
    assert.deepEqual(sorted(await tableIds(page)), sorted(inventory.map((task) => task.id)));
    assert.equal(await page.locator("#task-table-body tr").count(), 105);
    assert.match(await page.locator("#inventory-total").innerText(), /105/);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_UPDATE.meta.snapshot), update.meta.snapshot);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_DATA.tasks.length), 96);
    assert.equal(await page.evaluate(() => window.SWE_PADDLE_DATA.directTaskIds.length), 55);
    await noPageOverflow(page);
    await page.evaluate(() => window.scrollTo(0, 0));
    await screenshot(page, "desktop.png");
  });

  for (const [status, count] of Object.entries({ strict_pass: 8, compatible_pass: 10, needs_fix: 3, failed: 5, incomplete: 2, historical: 77 })) {
    await check(`status filter: ${status} = ${count}`, async () => {
      await reset(page);
      await page.locator("#status-filter").selectOption(status);
      assert.deepEqual(sorted(await tableIds(page)), sorted(inventory.filter((task) => task.status === status).map((task) => task.id)));
      assert.equal(await page.locator("#task-table-body tr").count(), count);
    });
  }

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
    await page.locator("#status-filter").selectOption("strict_pass");
    assert.deepEqual(sorted(await tableIds(page)), sorted(inventory.filter((task) => task.author === "Echo-Nie" && task.type === "bugfix" && task.status === "strict_pass").map((task) => task.id)));
    await reset(page);
    await page.locator("#search-input").fill("no-such-task-xyz-987654321");
    assert.equal(await page.locator("#task-table-body tr").count(), 0);
    assert.equal(await page.locator("#empty-state").isVisible(), true);
    await reset(page);
    assert.equal(await page.locator("#task-table-body tr").count(), 105);
    await page.locator("#all-tasks").scrollIntoViewIfNeeded();
    await screenshot(page, "desktop-table.png");
  });

  for (const id of [79386, 64881]) {
    await check(`task ${id}: environment incomplete, not semantic failure or measured zero`, async () => {
      const text = await openTask(page, id);
      assert.match(text, /环境未完成/);
      assert.match(text, /未完成|未执行|留空/);
      assert.match(text, /不是任务语义失败|不等同任务语义失败|不等同于任务语义失败/);
      assert.ok(text.includes(update.tasks.find((task) => task.id === id).reason));
      await closeTask(page);
    });
  }

  await check("task 73122: measured F2P zero remains a failed validation", async () => {
    const text = await openTask(page, 73122);
    assert.match(text, /未通过/);
    assert.match(text, /(?:F2P\s*(?:为|[：:])?\s*0|0\s*F2P)/);
    assert.ok(text.includes(update.tasks.find((task) => task.id === 73122).reason));
    await closeTask(page);
  });

  await check("task 41202: passing controlled diagnostics retain required entrypoint repair", async () => {
    const text = await openTask(page, 41202);
    assert.match(text, /入口.*待修|原包需修|需要修改/);
    assert.match(text, /原入口/);
    assert.match(text, /兼容/);
    await closeTask(page);
  });

  await check("historical Windows task 76259 retains its old reason and is explicitly not rerun", async () => {
    const text = await openTask(page, 76259);
    assert.match(text, /历史/);
    assert.match(text, /未重跑/);
    assert.ok(text.includes(legacy.failures[76259].reason));
    assert.ok(text.includes(legacy.failures[76259].action));
    assert.match(text, /c9e46547/);
    await closeTask(page);
  });

  await check("task 79633: full Python-module match remains compatible native evidence", async () => {
    const text = await openTask(page, 79633);
    assert.match(text, /兼容/);
    assert.match(text, /三个完整 Python 模块/);
    assert.match(text, /底层原生运行时/);
    assert.ok(text.includes(update.tasks.find((task) => task.id === 79633).action));
    await closeTask(page);
  });

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
    for (const asset of ["data.js", "validation-update.js", "app.js", "styles.css"]) {
      const matches = responses.filter((item) => new URL(item.url).pathname.endsWith("/assets/" + asset));
      assert.ok(matches.length > 0, `asset was not loaded: ${asset}`);
      assert.ok(matches.every((item) => item.status === 200), `${asset}: ${JSON.stringify(matches)}`);
    }
    assert.deepEqual(report.badResponses, []);
    assert.deepEqual(report.failedRequests, []);
    assert.deepEqual(report.consoleErrors, []);
  });
  await check("same-origin current report, historical correction and public digest manifest return 200", async () => {
    const reportLinks = await page.locator("a[href]").evaluateAll((anchors) => anchors.map((anchor) => anchor.href));
    const targetOrigin = new URL(url).origin;
    const publicReports = [...new Set(reportLinks.filter((href) => new URL(href).origin === targetOrigin && new URL(href).pathname.endsWith(".md")))];
    assert.ok(publicReports.some((href) => new URL(href).pathname.endsWith("/validation-update-20260909.md")));
    assert.ok(publicReports.some((href) => new URL(href).pathname.endsWith("/validation-correction-20260907.md")));
    publicReports.push(new URL("validation-update-20260909.sha256", url).href);
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
