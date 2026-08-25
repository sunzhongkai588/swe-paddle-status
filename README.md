# SWE-Paddle 可评测性雷达

SWE-Paddle 78 条完整任务包的 Core F2P/P2P 验证看板。当前数据快照为
`8db0e409d8a753c596eb1e124fcd9f37b6d217e1`（2026-08-25）：66 条 Core
验证通过，12 条待处理。其中本轮复验范围为 15 条新增完整任务与 7 条旧失败
任务；16 条通过、6 条当前不可准入。

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

页面中的“验证通过”只表示满足当前 Core F2P/P2P 口径，不代表 judge、题面契约和
raw runner 等正式上线门禁均已通过。

本轮有 8 条任务满足 Core 口径，但仍需修正 runner 或 F2P/P2P 角色标注；页面在
全量表格与详情中以“Core 通过 · 待修”单独标识。
