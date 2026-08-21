# SWE-Paddle 可评测性雷达

SWE-Paddle 63 条完整任务包的 Core F2P/P2P 验证看板。当前数据快照为
`e394cae253591ac87b8a3763ea335f37ba84005f`（2026-08-19）。

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
