# SWE-Paddle 可评测性雷达

SWE-Paddle 社区任务的 F2P/P2P 与原始任务包验收看板。
2026-09-10 网页发布采用已封存的 2026-09-09 全量验收结果，源快照为
`207998dab8c4c76c8558c3cca8ef177c69f10c1c`。完整任务共 105 条，另有
4 条 proposal-only 目录（56723、78220、79391、79657），不计入分母。

| 当前全量结论 | 数量 |
| --- | ---: |
| 核心 F2P/P2P 通过，原包无必改项 | 71 |
| 核心 F2P/P2P 通过，但任务包或描述需修改 | 18 |
| 验证不通过 | 13 |
| 必需硬件验证未完成，不计通过 | 3 |

**核心通过 89 = 71 + 18；全量 105 = 71 + 18 + 13 + 3。**
首页与逐题表展示全量验收，不再以最近新增/修改的 28 条代替整体结论。
历史未通过任务也纳入复验，不以“文件未修改”为理由跳过。

103 条有 Base/Gold 各两轮的实际运行记录，另外 2 条在补丁预检即失败、
没有进入测试。3 条硬件未完成任务虽有 CPU 子集证据，仍不计整题通过。
skip、空返回和缺失节点不计有效 P2P；失败任务有正 F/P 数量时只代表通过子集。

71 条原包无必改项的范围限于各任务记录的验证环境：20 条精确原生、
5 条精确 Python、21 条精确 Python＋兼容原生、23 条 README 轻量源码、
2 条 README 轻量 C++。兼容原生与轻量验证不会标成精确原生编译。
本轮只验收 F2P/P2P 与 task 包，不授予 judge 或模型 harness 正式资格，
也没有生成或变更模型成绩。

当前报告：[全量 105 条验收及问题清单](docs/acceptance-20260910.md)。
旧的 [2026-09-09 全量汇总](docs/overall-status-20260909.md)、
[增量报告](docs/validation-update-20260909.md)和
[2026-09-07 更正说明](docs/validation-correction-20260907.md)保留为历史记录。

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
- 当前全量公开投影：`docs/assets/acceptance-20260910.js`。
- 当前公开报告：`docs/acceptance-20260910.md`。
- 当前发布清单：`docs/acceptance-20260910.sha256`。
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

在 `docs` 目录运行 `sha256sum -c acceptance-20260910.sha256` 可核对当前
发布资源。发布前还需检查状态/证据筛选、任务详情、移动布局、控制台及资源加载。
