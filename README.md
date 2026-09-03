# SWE-Paddle 可评测性雷达

SWE-Paddle 96 条完整任务包的 F2P/P2P 可评测性看板。当前数据快照为
`c9e46547a1f8dce934a8c454a9b4afd6cce1d384`（页面口径更新于 2026-09-03），
全部任务按三个互斥状态展示：68 条核心验证通过且 Task 包通过，可直接评测；
11 条核心验证通过但 Task 包不通过；17 条核心 F2P/P2P 验证未通过。

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

“核心验证”要求目标 F2P 和回归 P2P 成立；“Task 包验证”要求 patch 可直接应用、
raw runner 可执行，而且选择器和断言有效。只有两层都通过才算“可直接评测”。
11 条核心验证通过但 Task 包不通过的任务，会在页面逐条展开阻塞原因与修改建议。

judge 覆盖和题面契约不在本页当前门槛内，仍属于正式上线前的后续质量门禁。

模型资格与上述任务状态独立展示。当前通过正式 qualification 的模型为
`gpt-5.6-sol`、`deepseek-v4-pro`、`qwen3.8-max` 和 `ernie-5.1`；
`claude-opus-5-kiro` 与 `kimi-k3` 的本轮 canary 未通过。首批计划矩阵为
67 条 CPU 任务 × 4 个 qualified 模型，共 268 个 Attempt；正式 Task Attempt
尚未启动，因为净化 instruction 的人工审阅确认和正式启动绑定仍未完成。
68 条可直接评测任务中的 `78823` 需要 CUDA/XPU，将另行排期。
