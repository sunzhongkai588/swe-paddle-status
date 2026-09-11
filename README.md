# SWE-Paddle 最新验证情况

105 条完整任务的验证看板，逐题说明 F2P/P2P、失败原因、处理办法和运行条件。
数据快照：`207998dab8c4c76c8558c3cca8ef177c69f10c1c`。
另 4 条只有提案，不计入验证统计。

网页和报告只呈现最新结论。通过、任务包待修、验证未通过、环境未完成分别统计；
任务数据、验证程序配置、机器环境分别归因。所有任务都有明确记录，不默认通过。
跳过、空测试和未完成配对的节点不计入有效 F2P/P2P；目标缺陷引起的异常退出单独标注。

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
