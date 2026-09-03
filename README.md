# SWE-Paddle 可评测性雷达

SWE-Paddle 96 条完整任务包的 F2P/P2P 可评测性看板。当前数据快照为
`c9e46547a1f8dce934a8c454a9b4afd6cce1d384`（页面口径更新于 2026-09-03），
全部任务按三个互斥状态展示：68 条可直接评测、11 条目标行为验证成立但原始
任务包仍需修改、17 条核心 F2P/P2P 验证未通过。

## 本地预览

```bash
cd docs
python3 -m http.server 4173
```

浏览器访问 <http://127.0.0.1:4173/>。

## 发布到 GitHub Pages

1. 将本目录推送到一个 GitHub 仓库的 `main` 分支。
2. 打开仓库的 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **Deploy from a branch**。
4. Branch 选择 `main`，目录选择 `/docs`，保存。

之后每次更新 `main/docs`，GitHub Pages 都会自动重新发布。

## 数据维护

- 页面结构：`docs/index.html`
- 样式：`docs/assets/styles.css`
- 交互：`docs/assets/app.js`
- 任务与验证结论：`docs/assets/data.js`

“可直接评测”要求目标 F2P、回归 P2P 和原始任务包端到端执行均通过。11 条
“目标成立 · 原包待修”只说明受控验证已经观察到有效 F2P/P2P，原始 runner、
patch 或断言仍不满足直接评测条件；页面会逐条展开阻塞原因与建议修改。

judge 覆盖和题面契约不在本页当前门槛内，仍属于正式上线前的后续质量门禁。
