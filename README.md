# SWE-Paddle 最新验证情况

111 条任务的验证看板，逐题显示实际 Oracle（Gold）结果、失败原因、跳过项和运行条件，保留已有 F2P/P2P 配对记录及确认日期。
数据快照：`207998dab8c4c76c8558c3cca8ef177c69f10c1c`。
结果更新至 2026-10-13：按已有完整两轮记录去重，Oracle 累计通过 98 题，其余 13 题尚未确认通过。通过范围以每题注明的入口为准；硬件跳过不视为对应分支通过。

网页和报告呈现当前实际结果。Oracle 通过、修正入口后通过、验证未通过、尚未完成分别统计；
任务数据、验证程序配置、机器环境分别归因。所有任务都有明确记录，不默认通过。
跳过、空测试和未完成配对的节点不计入有效 F2P/P2P；目标缺陷引起的异常退出单独标注。

已有通过记录保留；构建来源复核缺项不直接扣减测试通过数。单独的正常模型保存、加载兼容性补测也保留实际失败，不能由原测试通过推定它通过。Flash 86 页保留已有摘要，不并入本次 Oracle 统计。

- [线上看板](https://sunzhongkai588.github.io/swe-paddle-status/)
- [最新逐题报告](docs/latest-report.md)
- 当前数据：`docs/assets/latest-data.js`
- 当前发布资源校验：`docs/latest.sha256`

## 本地预览与检查

```bash
python3 -m http.server 4173 --directory docs
node --test tests/*.test.cjs
node tests/browser-smoke.cjs
```

浏览器测试需要环境提供 Playwright、Chromium 和中文字体。
`SWE_PADDLE_STATUS_URL` 指定线上地址，`SWE_PADDLE_SCREENSHOT_DIR` 指定仓库外截图目录，
`SWE_PADDLE_BROWSER_EXECUTABLE` 指定已有浏览器。

在 `docs` 中运行 `sha256sum -c latest.sha256` 验证全部公开资源。

## 数据与发布

GitHub Pages 发布 `main` 分支的 `/docs`。推送后应核对 Pages 构建提交、
线上资源哈希、全部任务详情、筛选器和移动布局。

公开文件只包含任务元信息、最新判定、有效数量、简明归因、确认方法及必要运行限制。
不发布私有机器路径、容器标识、原始日志、参考补丁或凭证。

`archive/20260911-verification` 保存字节不变的证据副本，由 `FILES.json` 绑定哈希；
它位于 Pages 发布目录之外，网页不加载、不链接其中的数据或报告。
