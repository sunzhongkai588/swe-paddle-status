# SWE-Paddle 全量 F2P/P2P 与原任务包验收

网页更新：2026-09-10。验收记录生成：2026-09-09T13:58:18.772863+00:00（UTC）；任务记录日为 2026-09-09。固定社区快照：`207998dab8c4c76c8558c3cca8ef177c69f10c1c`。

本次展示全量 105 条完整样本的封存验收结果，不再沿用旧 77 条的历史状态。另有 4 个仅 proposal 目录（56723、78220、79391、79657），不计入 105 条分母。

## 最终结论

| 全量状态 | 条数 |
| --- | ---: |
| 核心 F2P/P2P 验证通过 | 89 |
| 其中：原包无需必改，可在本轮对应验证环境直接评测 | 71 |
| 其中：核心通过，但原包或说明需要修改 | 18 |
| 验证不通过 | 13 |
| 必需硬件验证未完成 | 3 |
| 合计 | 105 |

89 = 71 + 18；105 = 89 + 13 + 3。18 条待修已包含在 89 条核心通过中，不能再重复相加。

本轮有 103 条实际进入测试运行；另 2 条（76259、77495）在补丁预检阶段确认参考补丁无法应用到指定 Base，未进入测试。103 条中包含 3 条仅有 CPU 子集证据的硬件题，不能把“运行过”当成“完整验证通过”。

“可直接评测”只指本轮固定测试、对应运行环境及原任务包入口的验收结论，不代表 71 条全是精确原生构建，也不是 judge 质量、模型得分或新模型 harness 正式资格结论。核心诊断通过与原入口通过分别保留；原入口失败不会被独立诊断结果覆盖。

## 运行范围

| 证据范围 | 全量 | 核心通过（含待修） | 原包无需必改 |
| --- | ---: | ---: | ---: |
| 精确原生 | 40 | 31 | 20 |
| 精确 Python | 5 | 5 | 5 |
| 精确 Python＋兼容原生 | 30 | 28 | 21 |
| README 轻量源码/AST | 23 | 23 | 23 |
| README 轻量 C++ | 2 | 2 | 2 |
| 补丁预检 | 2 | 0 | 0 |
| 必需硬件未完成 | 3 | 0 | 0 |

原包无需必改的 71 条分为：20 条精确原生、5 条精确 Python、21 条精确 Python＋兼容原生、23 条 README 轻量源码/AST、2 条 README 轻量 C++。

精确 Python 不表示完成原生集成验证；兼容原生证据不升级为精确原生；轻量验证按任务 README 的独立测试契约运行，不声称完成 Paddle 全量编译。运行范围与通过/未通过状态是两个独立维度。

## 其余 34 条为什么不能原包直接评测

18 条“核心通过但待修”：

- `white_list` 导入路径缺失：59127、59383（2 条）。
- `op_test` 或 helper 导入路径缺失：72800、73125、73387、73569、74184、74212、74221、74305、77064、79197、79276（11 条）。
- 嵌套 `python.paddle` 导入触发 `VarBase` 重复注册：41202、52948（2 条）。已先恢复标准生成布局，不能继续归因于缺少 proto。
- helper 路径及提前退出 0 的异常完成问题：73385（1 条）。
- 测试生命周期/附带清理错误需要处理：78441（1 条）。
- README F/P 数量标错：60808（1 条），实际为 1F/2P，不是 2F/1P。

13 条“验证不通过”：

- 参考修复侧仍有失败、fixture 错误或崩溃：57827、58323、59021、59348、59973、64881、76873（7 条）。
- 没有有效 F2P：73122、79386（2 条，均 0F/3P）。
- 没有有效 P2P：59374（1 条，5F/0P；GPU skip 不算 P）。
- 原选择器类名错误，独立诊断仍无有效 F2P：57741（1 条）。
- 参考补丁无法应用到指定 Base：76259、77495（2 条）。其中 76259 是 Windows CPU/MSVC x64 题，Linux 不能替代其要求。

3 条“必需硬件验证未完成”：59847、64320 必须使用 CUDA GPU 及对应源码构建；78823 可选 CUDA 或 XPU 其中一个符合要求的设备，不要求两个后端都测。已有 CPU 子集不代表完成必需硬件验证。

## 逐题结果

F/P 为双轮稳定有效节点数；失败题的数值可能只是已配对子集，不表示整题通过。跳过、无断言空返回、缺失节点不计通过。空值表示未完成或未进入测试，不改写成 0。73125 的两个 output 未完成全生命周期配对，保留未配对，不计入其 2F/4P；36684 有效为 8F/2P，原始计数中的一个无断言空分支不计有效 P。

### 原包无需必改：71 条

| 样本 | F2P / P2P | 运行范围 | 原入口通过 | 原因与后续动作 |
| --- | --- | --- | --- | --- |
| [18687](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-18687) Parameter-server launch | 3 / 1 | 精确 Python | 是 | 固定验证环境双轮核心复现3F/1P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [27247](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-27247) DataLoader spawn worker serialization | 2 / 4 | 精确 Python | 是 | 固定验证环境双轮核心复现2F/4P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [33369](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-33369) Fleet elastic fault tolerance | 3 / 1 | 精确 Python | 是 | 固定验证环境双轮核心复现3F/1P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [36684](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-36684) Fleet elastic scale up / down | 8 / 2 | 精确 Python | 是 | 有效8F/2P且原入口可运行；原raw8F/3P保留，其中1个无断言no-op空分支不计有效P2P。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [50086](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-50086) ConditionalBlock scope validation | 2 / 1 | README 轻量 C++ | 是 | 原测试入口和固定 F2P/P2P 节点双轮复现通过。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [53534](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-53534) to_tensor compatibility with NumPy | 2 / 2 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [54435](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-54435) Distributed launch numeric IP ordering | 3 / 2 | 精确 Python | 是 | 固定验证环境双轮核心复现3F/2P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [54625](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-54625) Pipeline output release state | 2 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [55890](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-55890) VPP + sharding overlap scheduling | 2 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [56135](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-56135) BMM dynamic-shape infermeta | 2 / 2 | README 轻量 C++ | 是 | 原测试入口和固定 F2P/P2P 节点双轮复现通过。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [56470](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-56470) Upsampling accepts integer size | 2 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [56705](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-56705) Model-parallel memory leak | 2 / 2 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [58219](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-58219) PIR floor_divide / remainder operations | 4 / 4 | 精确原生 | 是 | 固定验证环境双轮核心复现4F/4P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [58343](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-58343) PIR logical, bitwise and scalar-power methods | 6 / 9 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，诊断 F2P/P2P 双轮稳定；原祖先及配置上下文已保留。 无需必改；保留运行环境证据范围。 计数口径：双轮稳定有效核心节点。 |
| [58917](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-58917) tensor_split / hsplit / dsplit APIs | 15 / 3 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，Base/Gold 两轮逐节点矩阵稳定；兼容运行环境限制详见输入及运行绑定。 无需必改；保留兼容运行环境限制。 计数口径：双轮稳定有效核心节点。 |
| [59715](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59715) matrix_exp API | 56 / 52 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，Base/Gold 两轮逐节点矩阵稳定；兼容运行环境限制详见输入及运行绑定。 无需必改；保留兼容运行环境限制。 计数口径：双轮稳定有效核心节点。 |
| [59909](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59909) Parallel mode selection under sharding | 1 / 2 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [60417](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-60417) Auto-tuner resume from CSV history | 3 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [64519](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-64519) cholesky_inverse API | 16 / 9 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，诊断 F2P/P2P 双轮稳定；原祖先及配置上下文已保留。 无需必改；保留运行环境证据范围。 计数口径：双轮稳定有效核心节点。 |
| [65724](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-65724) DataLoader persistent_workers | 2 / 1 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，诊断 F2P/P2P 双轮稳定；原祖先及配置上下文已保留。 无需必改；保留运行环境证据范围。 计数口径：双轮稳定有效核心节点。 |
| [67195](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-67195) Pipeline NaN checker | 2 / 1 | README 轻量源码/AST | 是 | 原测试入口和固定 F2P/P2P 节点双轮复现通过。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [68432](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-68432) Sparse complex multiply / divide | 2 / 11 | 精确原生 | 是 | 固定验证环境双轮核心复现2F/11P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [70469](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-70469) Fused dropout-add fallback | 2 / 1 | README 轻量源码/AST | 是 | 原测试入口和固定 F2P/P2P 节点双轮复现通过。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [73535](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73535) conv1d CPU FP16 accuracy | 1 / 1 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，诊断 F2P/P2P 双轮稳定；原祖先及配置上下文已保留。 无需必改；保留运行环境证据范围。 计数口径：双轮稳定有效核心节点。 |
| [73570](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73570) masked_fill zero-size Tensor | 3 / 4 | 精确原生 | 是 | 固定验证环境双轮核心复现3F/4P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [73582](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73582) squeeze / full zero-size Tensor | 2 / 3 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过；Base 因 set -e 在首个 F2P 失败后停止，另一个 F2P 已用原选择器独立补跑。完整诊断为2F/3P。 无需必改；保留兼容运行环境限制。 计数口径：双轮稳定有效核心节点。 |
| [73691](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73691) conv1d / conv2d / conv3d zero-size Tensor | 3 / 3 | 精确原生 | 是 | 固定验证环境双轮核心复现3F/3P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [73702](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73702) gather_nd zero-size Tensor | 1 / 2 | 精确原生 | 是 | 固定验证环境双轮核心复现1F/2P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [73776](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73776) svd_lowrank zero-size Tensor | 1 / 2 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，诊断 F2P/P2P 双轮稳定；原祖先及配置上下文已保留。 无需必改；保留运行环境证据范围。 计数口径：双轮稳定有效核心节点。 |
| [73821](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73821) pad zero-size Tensor | 3 / 2 | 精确原生 | 是 | 固定验证环境双轮核心复现3F/2P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [73850](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73850) triangular_solve zero-size Tensor | 1 / 3 | 精确原生 | 是 | 固定验证环境双轮核心复现1F/3P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [73854](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73854) instance_norm zero-size Tensor | 2 / 3 | 精确原生 | 是 | 固定验证环境双轮核心复现2F/3P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [73855](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73855) dice_loss zero-size Tensor | 1 / 1 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，诊断 F2P/P2P 双轮稳定；原祖先及配置上下文已保留。 无需必改；保留运行环境证据范围。 计数口径：双轮稳定有效核心节点。 |
| [73880](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73880) softmax_with_cross_entropy zero-size Tensor | 4 / 2 | 精确原生 | 是 | 固定验证环境双轮核心复现4F/2P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [74421](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74421) msort API compatibility | 2 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [74439](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74439) ravel API compatibility | 2 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [74444](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74444) dropout1d API compatibility | 2 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [74491](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74491) Tensor.requires_grad compatibility | 2 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [74586](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74586) scatter_add API compatibility | 2 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [74594](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74594) broadcast_shapes API compatibility | 2 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [75274](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-75274) Normal distribution unittest fix | 2 / 1 | 精确原生 | 是 | 固定验证环境双轮核心复现2F/1P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [76522](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-76522) Torch proxy compat override registration | 2 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [76736](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-76736) atan2 C++ sinking | 3 / 7 | 精确原生 | 是 | 固定验证环境双轮核心复现3F/7P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [77078](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-77078) inverse C++ sinking | 3 / 33 | 精确原生 | 是 | 固定验证环境双轮核心复现3F/33P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [77150](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-77150) PyLayer grad-node attribute copy | 1 / 1 | 精确原生 | 是 | 固定验证环境双轮核心复现1F/1P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [77749](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-77749) pad_sequence / unpad_sequence | 21 / 1 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，Base/Gold 两轮逐节点矩阵稳定；兼容运行环境限制详见输入及运行绑定。 无需必改；保留兼容运行环境限制。 计数口径：双轮稳定有效核心节点。 |
| [78048](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78048) dsplit / hsplit / vsplit parameter aliases | 3 / 3 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，Base/Gold 两轮逐节点矩阵稳定；兼容运行环境限制详见输入及运行绑定。 无需必改；保留兼容运行环境限制。 计数口径：双轮稳定有效核心节点。 |
| [78082](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78082) ParameterDict pop / values / keys | 9 / 23 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，诊断 F2P/P2P 双轮稳定；原祖先及配置上下文已保留。 无需必改；保留运行环境证据范围。 计数口径：双轮稳定有效核心节点。 |
| [78104](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78104) CUDA device conversion from Tensor place | 1 / 1 | README 轻量源码/AST | 是 | 原测试入口和固定 F2P/P2P 节点双轮复现通过。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [78138](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78138) pixel_shuffle C++ sinking | 2 / 15 | 精确原生 | 是 | 固定验证环境双轮核心复现2F/15P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [78238](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78238) put_along_axis zero-size indices | 2 / 1 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，诊断 F2P/P2P 双轮稳定；原祖先及配置上下文已保留。 无需必改；保留运行环境证据范围。 计数口径：双轮稳定有效核心节点。 |
| [78301](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78301) Layer.to / Tensor.to compatibility | 13 / 21 | 精确原生 | 是 | 固定验证环境双轮核心复现13F/21P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [78342](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78342) paddle._assert API | 7 / 24 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，诊断 F2P/P2P 双轮稳定；原祖先及配置上下文已保留。 无需必改；保留运行环境证据范围。 计数口径：双轮稳定有效核心节点。 |
| [78440](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78440) cdist zero-size Tensor handling | 2 / 1 | 精确原生 | 是 | 固定验证环境双轮核心复现2F/1P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [78452](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78452) paddle.load dataclass objects | 16 / 27 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，Base/Gold 两轮逐节点矩阵稳定；兼容运行环境限制详见输入及运行绑定。 无需必改；保留兼容运行环境限制。 计数口径：双轮稳定有效核心节点。 |
| [78522](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78522) distributed launch os.kill | 3 / 1 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，Base/Gold 两轮逐节点矩阵稳定；兼容运行环境限制详见输入及运行绑定。 无需必改；保留兼容运行环境限制。 计数口径：双轮稳定有效核心节点。 |
| [78570](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78570) Optimizer.step closure compatibility | 6 / 3 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，诊断 F2P/P2P 双轮稳定；原祖先及配置上下文已保留。 无需必改；保留运行环境证据范围。 计数口径：双轮稳定有效核心节点。 |
| [78911](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78911) Recompute context detection | 2 / 1 | 精确原生 | 是 | 固定验证环境双轮核心复现2F/1P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [78922](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78922) Flex checkpoint flatten_state_dict lifetime | 1 / 1 | 精确原生 | 是 | 固定验证环境双轮核心复现1F/1P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [78932](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78932) TensorDataset varargs and alias | 3 / 3 | 精确 Python＋兼容原生 | 是 | 兼容原生运行库上覆盖精确 Python 源码；完整原入口和独立诊断均复现 3 F / 3 P。 本轮兼容运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [79035](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79035) Optimizer LR scheduler aliases | 2 / 1 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，诊断 F2P/P2P 双轮稳定；原祖先及配置上下文已保留。 无需必改；保留运行环境证据范围。 计数口径：双轮稳定有效核心节点。 |
| [79057](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79057) RestrictedUnpickler MRO security | 2 / 1 | README 轻量源码/AST | 是 | 原测试入口和固定 F2P/P2P 节点双轮复现通过。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [79161](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79161) set_rng_state parameter alias | 2 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [79167](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79167) random.initial_seed alias | 2 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [79268](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79268) DistributedSampler alias | 2 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [79275](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle_Paddle-79275) flex_attention or_masks / and_masks | 3 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [79310](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79310) nn.init.sparse_ | 4 / 1 | README 轻量源码/AST | 是 | 原 README 明示的独立 AST/源码测试双轮通过；遗漏的根 pyproject 仅工具配置，不含 pytest 运行配置。 本轮运行范围内未发现原包必改项。 计数口径：双轮稳定有效核心节点。 |
| [79321](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79321) Layer.set_state_dict named return fields | 1 / 1 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，诊断 F2P/P2P 双轮稳定；原祖先及配置上下文已保留。 无需必改；保留运行环境证据范围。 计数口径：双轮稳定有效核心节点。 |
| [79353](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79353) P2P local_var bug | 2 / 1 | 精确原生 | 是 | 固定验证环境双轮核心复现2F/1P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [79369](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79369) check_memory_usage logging | 1 / 1 | 精确原生 | 是 | 固定验证环境双轮核心复现1F/1P；原始入口可运行。 保留原包与现有运行条件。 计数口径：双轮稳定有效核心节点。 |
| [79633](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79633) Distributed launch KV server concurrency | 2 / 1 | 精确 Python＋兼容原生 | 是 | 原入口 Gold 双轮通过，诊断 F2P/P2P 双轮稳定；原祖先及配置上下文已保留。 无需必改；保留运行环境证据范围。 计数口径：双轮稳定有效核心节点。 |

### 核心通过，但需修改：18 条

| 样本 | F2P / P2P | 运行范围 | 原入口通过 | 原因与后续动作 |
| --- | --- | --- | --- | --- |
| [41202](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-41202) DataLoader reader AutoTune | 2 / 1 | 精确 Python＋兼容原生 | 否 | 补齐标准生成布局后，兼容核心双轮 2F/1P；原入口四轮仍因 python.paddle 嵌套导入导致 VarBase 重复注册而收集失败，原包需修入口导入方式。 修正测试入口的包导入方式，避免同一原生模块被 paddle 与 python.paddle 重复初始化；保留断言后重新验证原 test.sh。 计数口径：双轮稳定有效核心节点。 |
| [52948](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-52948) Static / dy2static Tensor.register_hook | 5 / 14 | 精确原生 | 否 | 精确原生核心稳定复现 5F/14P；原 pytest 入口导入嵌套 python.paddle 导致 VarBase 重复注册，Gold 原入口双轮仍失败。 修正原测试入口或包导入问题后，以忠实完整上下文重新验证原入口；不修改核心断言。 计数口径：双轮稳定有效核心节点。 |
| [59127](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59127) column_stack / row_stack / dstack / hstack / vstack APIs | 84 / 42 | 精确 Python＋兼容原生 | 否 | 兼容逐节点 84F/42P 稳定；原入口仍缺 white_list 导入路径，Gold 两轮 RC2。需修复入口或固化该测试环境。 修正原入口并以完整上下文复验。 计数口径：双轮稳定有效核心节点。 |
| [59383](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59383) masked_scatter API | 28 / 680 | 精确 Python＋兼容原生 | 否 | 分文件兼容诊断 28F/680P 稳定；16 个 CPU skip 未计通过。原入口 white_list 收集失败，需修正入口并重新验证原脚本。 修正原入口并以完整上下文复验。 计数口径：双轮稳定有效核心节点。 |
| [60808](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-60808) broadcast_to with zero dimensions | 1 / 2 | 精确原生 | 是 | 原入口与完整核心实际1F/2P通过；environment README误写2F/1P，需修正文档。 根据原入口/节点故障说明修订后复验。 计数口径：双轮稳定有效核心节点。 |
| [72800](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-72800) cummin / cummax zero-size Tensor | 4 / 4 | 精确原生 | 否 | 恢复完整原始测试包上下文后，原入口无法导入 op_test；独立配置 helper 路径的诊断复现 F2P/P2P。 修复或声明原测试入口的 helper 导入路径，再复验原包。 计数口径：双轮稳定有效核心节点。 |
| [73125](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73125) det / slogdet zero-size Tensor | 2 / 4 | 精确原生 | 否 | 恢复完整原始测试包上下文后，原入口无法导入 op_test；独立配置 helper 路径的诊断复现 F2P/P2P。仅确认 2 F / 4 P；两个 output 的 Base call 虽通过，但隔离 class teardown 不完整，未计入 F/P。 修复或声明原测试入口的 helper 导入路径，再复验原包。 计数口径：双轮稳定有效核心节点。 |
| [73385](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73385) svdvals / eigvals zero-size Tensor | 4 / 4 | 精确原生 | 否 | 核心4F/4P有明确phase解释；其中1F为进入call后异常提前exit0而无完成记录，不是普通断言失败。原入口缺helper且需防提前exit0假绿，包需修改。 根据原入口/节点故障说明修订后复验。 计数口径：双轮稳定有效核心节点。 |
| [73387](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73387) gather_tree zero-size Tensor | 2 / 1 | 精确原生 | 否 | 核心2F/1P已复现；原始入口缺少op_test helper导入路径，独立补路径诊断通过不等于原包可直接运行。 在原测试入口声明正确helper导入路径后，保持原节点与断言复验。 计数口径：双轮稳定有效核心节点。 |
| [73569](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73569) matmul 1-D transpose gradient | 1 / 2 | 精确原生 | 否 | 恢复完整原始测试包上下文后，原入口无法导入 op_test；独立配置 helper 路径的诊断复现 F2P/P2P。 修复或声明原测试入口的 helper 导入路径，再复验原包。 计数口径：双轮稳定有效核心节点。 |
| [74184](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74184) pinv zero-size Tensor | 2 / 5 | 精确 Python＋兼容原生 | 否 | 完整测试包上下文中原入口缺少 op_test 导入路径；独立 helper 路径诊断复现 2 F / 5 P，原标签中的两个 F 候选实际为 P。 修复原测试入口的 helper 导入路径，再复验原包。 计数口径：双轮稳定有效核心节点。 |
| [74212](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74212) multiplex zero-size Tensor | 2 / 5 | 精确原生 | 否 | 核心2F/5P已复现；原始入口缺少op_test helper导入路径，包仍需修改。 补齐原测试入口helper导入路径后完整复验。 计数口径：双轮稳定有效核心节点。 |
| [74221](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74221) fold zero-size Tensor | 1 / 2 | 精确 Python＋兼容原生 | 否 | 核心 F2P/P2P 稳定复现，但忠实原入口 Gold 双轮缺少 op_test 导入路径。 修正原脚本测试依赖导入路径后，重新验证原入口。 计数口径：双轮稳定有效核心节点。 |
| [74305](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74305) unique zero-size Tensor | 1 / 1 | 精确 Python＋兼容原生 | 否 | 核心 F2P/P2P 稳定复现，但忠实原入口 Gold 双轮缺少 op_test 导入路径。 修正原脚本测试依赖导入路径后，重新验证原入口。 计数口径：双轮稳定有效核心节点。 |
| [77064](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-77064) allclose C++ sinking | 4 / 19 | 精确原生 | 否 | 核心4F/19P已复现；原始入口缺少op_test helper导入路径，包仍需修改。 补齐原测试入口helper导入路径后完整复验。 计数口径：双轮稳定有效核心节点。 |
| [78441](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78441) aminmax operator | 27 / 4 | 精确原生 | 是 | 核心27F/4P已复现，但保留7个附带teardown错误、14个setUp缺API来源及空梯度body；包需修改。 根据原入口/节点故障说明修订后复验。 计数口径：双轮稳定有效核心节点。 |
| [79197](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79197) LR scheduler optimizer argument | 6 / 1 | 精确 Python＋兼容原生 | 否 | 核心 F2P/P2P 稳定复现，但忠实原入口 Gold 双轮缺少 op_test 导入路径。 修正原脚本测试依赖导入路径后，重新验证原入口。 计数口径：双轮稳定有效核心节点。 |
| [79276](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79276) add_n zero-size shape validation | 1 / 2 | 精确原生 | 否 | 核心 F2P/P2P 稳定复现，但忠实原入口 Gold 双轮缺少 op_test 导入路径。 修正原脚本测试依赖导入路径后，重新验证原入口。 计数口径：双轮稳定有效核心节点。 |

### 验证不通过：13 条

| 样本 | F2P / P2P | 运行范围 | 原入口通过 | 原因与后续动作 |
| --- | --- | --- | --- | --- |
| [57741](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-57741) PIR memcpy | 0 / 1 | 精确原生 | 否 | 原入口有两个错误Cuda类名；独立修正为CUDA后仅0F/1P，3个GPU skip，不构成完整F2P/P2P。 根据原入口/节点故障说明修订后复验。 计数口径：已配对通过子集；整题未通过。 |
| [57827](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-57827) PIR fused_elemwise_add_activation | 0 / 3 | 精确原生 | 否 | 固定8节点中，Gold仍有2个helper fixture错误、1个SIGABRT无XML；仅3个完整P2P，其余崩溃转绿不作为严格F2P。 根据原入口/节点故障说明修订后复验。 计数口径：已配对通过子集；整题未通过。 |
| [58323](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-58323) atleast_1d / atleast_2d / atleast_3d APIs | 0 / 48 | 精确 Python＋兼容原生 | 否 | 原入口 white_list 收集失败；Base 在模块顶层访问缺失的 atleast_1d，41 个节点无完整配对；Gold 的 test_as_tensor_method 仍受静态模式污染失败。0F/48P 仅为已执行子集。 修正缺失节点或 Gold 仍失败的用例问题后，重新进行四轮完整验收。 计数口径：已配对通过子集；整题未通过。 |
| [59021](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59021) PIR test_len | 0 / 8 | 精确原生 | 否 | 原入口Base/Gold均在TensorArray AST崩溃；有效CPU仅0F/8P，另4个Gold红。raw9P中的CUDA空返回已排除。 根据原入口/节点故障说明修订后复验。 计数口径：已配对通过子集；整题未通过。 |
| [59348](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59348) PIR sequence_mask | 13 / 1 | 精确原生 | 否 | Gold两轮TestSequenceMaskOpError.test_errors仍失败；其余13F/1P仅通过子集，整体不通过。 根据原入口/节点故障说明修订后复验。 计数口径：已配对通过子集；整题未通过。 |
| [59374](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59374) Tensor apply / apply_ API | 5 / 0 | 精确原生 | 否 | 只复现5F/0P，无有效P2P；optional GPU skip不计P2P。 根据原入口/节点故障说明修订后复验。 计数口径：已配对通过子集；整题未通过。 |
| [59973](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59973) slice_scatter API | 47 / 23 | 精确 Python＋兼容原生 | 否 | 原入口和诊断 Gold 均有两个 scatter 静态测试失败（未恢复静态模式）；47F/23P 仅为其余已配对节点，两个 CPU 空返回未计 P2P。 修正缺失节点或 Gold 仍失败的用例问题后，重新进行四轮完整验收。 计数口径：已配对通过子集；整题未通过。 |
| [64881](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-64881) FeatureAlphaDropout API | 6 / 92 | 精确原生 | 否 | 精确环境下6个Prim dropout mask形状错误、1个固定随机种子断言，Base/Gold双轮均红；6F/92P仅为通过子集。 补齐原入口op_test导入路径，并处理7个两边都红的节点后完整复验；详细7节点保留原JSON。 计数口径：已配对通过子集；整题未通过。 |
| [73122](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73122) multi_dot zero-size Tensor | 0 / 3 | 精确原生 | 否 | Base与Gold双轮全部3节点都通过：0F/3P，缺少有效F2P信号。 根据原入口/节点故障说明修订后复验。 计数口径：已配对通过子集；整题未通过。 |
| [76259](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-76259) Windows UTF-8 inference paths | — / — | 补丁预检 | 否 | 当前Gold补丁无法应用到指定Base，未进入测试；本题是Windows CPU/MSVC x64，不要求GPU。 先修复补丁与Base绑定，再在Windows CPU/MSVC x64环境验证；补丁能应用不代表Linux即可评测。 计数口径：未完成或未进入TEST。 |
| [76873](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-76873) Activation APIs inplace support | 9 / 14 | 精确原生 | 否 | 固定原选择器31节点保留；原入口混用legacy/symbolic utils导致收集失败，独立诊断Gold仍有SELU数值错误及7个CINN相关红节点。 根据原入口/节点故障说明修订后复验。 计数口径：已配对通过子集；整题未通过。 |
| [77495](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-77495) MaxPool dilation option | — / — | 补丁预检 | 否 | 当前Gold补丁无法应用到指定Base，未进入测试。 修复补丁/基线绑定后重新验证。 计数口径：未完成或未进入TEST。 |
| [79386](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79386) iinfo uint64 maximum boundary | 0 / 3 | 精确原生 | 否 | 精确Base与Gold双轮均3节点通过：0F/3P，未复现有效F2P。 根据原入口/节点故障说明修订后复验。 计数口径：已配对通过子集；整题未通过。 |

### 必需硬件验证未完成：3 条

| 样本 | F2P / P2P | 运行范围 | 原入口通过 | 原因与后续动作 |
| --- | --- | --- | --- | --- |
| [59847](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59847) FractionalMaxPool2D / 3D | — / — | 必需硬件未完成 | 否 | 当前只有CPU子集证据；environment明确必需CUDA GPU，尚未完成必需硬件验证。 使用CUDA GPU和对应精确源码构建完成原选择器复验，XPU不能替代本题CUDA要求。 计数口径：未完成或未进入TEST。 |
| [64320](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-64320) sparse.mask_as API | — / — | 必需硬件未完成 | 否 | 当前只有CPU子集证据；environment明确必需CUDA GPU，尚未完成必需硬件验证。 使用CUDA GPU和对应精确源码构建完成原选择器复验，XPU不能替代本题CUDA要求。 计数口径：未完成或未进入TEST。 |
| [78823](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78823) pin_memory support for random APIs | — / — | 必需硬件未完成 | 否 | 当前CPU证据未覆盖必需设备；environment要求至少一个CUDA或XPU设备及匹配源码构建。 在CUDA或XPU任选一个符合要求的设备上完成复验；另一后端的条件skip允许，不计P2P。 计数口径：未完成或未进入TEST。 |

## 来源与历史保留

公开数据只包含显式允许的元信息、状态、有效 F/P、原因、后续动作、运行范围和校验摘要；不发布私有日志、绝对路径、运行账号、运行镜像、容器标识或参考补丁内容。

封存验收源 SHA-256：`7f7a9ee8f3d16116b2982cf60ec74e7bd1a28c2181c78c93f89e374cf402da9e`。每题另保留所选证据的 SHA-256，用于绑定来源，不是下载私有证据的地址。

[公开数据](assets/acceptance-20260910.js)与本报告采用同一 105 条允许字段投影；[本次发布文件校验清单](acceptance-20260910.sha256)绑定页面与数据。旧 [全量历史汇总](overall-status-20260909.md)、[28 条更新记录](validation-update-20260909.md)和原数据文件保持字节不变，仅供查阅历史，不能代替本次全量验收。
