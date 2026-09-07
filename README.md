# SWE-Paddle 可评测性雷达

SWE-Paddle 96 条文件齐全任务包的 F2P/P2P 可评测性看板。当前数据快照为
`c9e46547a1f8dce934a8c454a9b4afd6cce1d384`（验证记录核对更新于 2026-09-07），
全部任务按三个互斥状态展示：55 条核心验证通过且 Task 包通过，可直接评测；
21 条核心验证通过但 Task 包不通过；20 条核心 F2P/P2P 验证未通过或未完成。

本次纠正历史汇总：10 条受控入口下双轮通过的任务移到任务包待修，2 条只有
受控单轮记录的任务和 1 条缺少 CUDA/XPU 验证的任务移到待验证。
这是同一快照的统计纠错，不代表新完成一轮全量测试。详见
[统计更正依据](docs/validation-correction-20260907.md)。

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
21 条核心验证通过但 Task 包不通过的任务，会在页面逐条展开阻塞原因与修改建议。
待复验、缺少加速器证据等任务明确标记为验证待完成，不等同于已证明语义失败。
通过名单采用显式 `directTaskIds`；页面校验三个状态集合互斥、完整覆盖且统计一致，
不会把未登记的问题默认视作通过。

judge 覆盖和题面契约不在本页当前门槛内，仍属于正式上线前的后续质量门禁。
