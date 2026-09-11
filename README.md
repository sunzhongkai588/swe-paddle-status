# SWE-Paddle 可评测性雷达

105 条社区任务的 F2P/P2P、原始任务包及验证问题看板。当前快照仍为
`207998dab8c4c76c8558c3cca8ef177c69f10c1c`；另 4 条 proposal-only 不计入分母。

2026-09-11 复核全部 105 条封存证据，并对争议项补做同条件对照。
当前 **90 条核心通过 = 71 条原包无必改项 + 19 条包/说明待修**；
另 **12 条整体验证未通过、3 条必需硬件未完成**。

- 59348 全部 15 节点复验通过，修正为核心通过、入口待修（13F/2P）。
- 57827 的目标缺陷崩溃原先被漏计，复验目标子集为 2F/2P。
- 59021 恢复历史执行条件后目标子集为 3F/6P。
- 后两题的原完整范围仍有故障，保留整题未通过，不能以子集替代整题。
- 59973 静态节点对照定位为缺初始化；76259、77495 补丁应用失败重新复现。

每条详情现在明确说明问题类型、完整测试名、Base/Gold 各两轮结果、
与历史记录的差异和处理办法。补丁未应用、测试未执行、硬件未验证、
缺 F2P/P2P 覆盖，均与 Gold 断言失败分开说明。

当前报告：[105 条复核与具体问题](docs/verification-audit-20260911.md)。
9 月 11 日是证据复核与专项复验日期，不冒充全量 105 条新运行日期。
原验收及 18 条旧解释保持不变，作为历史证据保留。

## 本地预览

```bash
cd docs
python3 -m http.server 4173
```

浏览器访问 <http://127.0.0.1:4173/>。

## 发布

本站 GitHub Pages 从 `main` 分支的 `/docs` 发布：
<https://sunzhongkai588.github.io/swe-paddle-status/>。
更新推送后，应核对 Pages 构建提交、线上静态资源哈希及浏览器显示结果；
不能仅凭“推送成功”声称网页已经更新。

## 数据维护

- 页面与交互：`docs/index.html`、`docs/assets/app.js`、`docs/assets/styles.css`。
- 原全量封存投影：`docs/assets/acceptance-20260910.js`。
- 当前修订投影：`docs/assets/acceptance-recheck-20260911.js`。
- 105 条逐项复核：`docs/assets/verification-audit-20260911.js`。
- 当前公开报告：`docs/verification-audit-20260911.md`。
- 问题补充说明：`docs/assets/issue-explanations-20260910.js`、`docs/issue-explanations-20260910.md`。
- 当前发布清单：`docs/verification-audit-20260911.sha256`。
- 历史输入：`docs/assets/data.js`、`validation-update.js`、`overall-status.js`。

历史数据、报告与旧发布清单保持字节不变，新增版本而非覆盖旧证据。
旧清单绑定的是旧版页面资源，不用于校验更新后的 index/app/CSS。
当前投影以明确 Task ID 对齐封存的 105 条结果，禁止默认通过、重复累加、
遗漏失败项或把未完成伪装成已验证的零值。

封存验收源 SHA-256：
`7f7a9ee8f3d16116b2982cf60ec74e7bd1a28c2181c78c93f89e374cf402da9e`。
公开数据只包含允许公开的任务元信息、验收状态、有效 F/P 数量、运行证据范围、
原因、建议与证据摘要。不得复制私有原始报告、机器路径、容器标识、运行日志、
凭证、参考补丁或模型轨迹到本站。

## 验证页面

```bash
node --test tests/*.test.cjs
node tests/browser-smoke.cjs
```

浏览器测试由外部环境提供 Playwright、浏览器及中文字体，不引入生产依赖。
`SWE_PADDLE_STATUS_URL` 可指定线上页面；`SWE_PADDLE_SCREENSHOT_DIR`
可把截图保存在仓库外；`SWE_PADDLE_BROWSER_EXECUTABLE` 可指定现有浏览器。

设置 `SWE_PADDLE_ACCEPTANCE_RESULT` 为封存的 105 条验收报告路径，可启用逐题
私有源核对；未指定时该项明确跳过。
旧增量的 `SWE_PADDLE_SEALED_RESULT` 仍只接受旧 28 条封存报告，不能传入新
105 条报告。具体校验门禁见 acceptance 测试，不提交私有源文件。

在 `docs` 目录运行 `sha256sum -c verification-audit-20260911.sha256` 可核对当前
发布资源。发布前还需检查状态/证据筛选、任务详情、移动布局、控制台及资源加载。

设置 `SWE_PADDLE_RECHECK_RESULT` 为私有 `history-audit.json` 路径，可执行当前3条修订与实际复验结果的逐项核对；仅59348整体验证状态升级，另外两条只修订子集数量。
