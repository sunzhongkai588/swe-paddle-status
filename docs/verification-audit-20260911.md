# SWE-Paddle 105 条验证复核与具体问题（2026-09-11）

已经确认存在“验证条件或统计口径改变，被误读为修复退化”的情况，也存在真实的任务包和测试问题。59348 完整核心测试恢复通过；57827、59021 的目标子集复现，但仍有原范围故障，保持整题未通过。

| 当前结果 | 数量 |
| --- | ---: |
| 核心 F2P/P2P 通过 | 90 |
| 其中原包无必改项 | 71 |
| 其中原包/说明待修 | 19 |
| 整体验证未通过 | 12 |
| 必需硬件未完成 | 3 |

105 = 71 + 19 + 12 + 3。与 9 月 10 日发布的 89/18/13/3 相比，仅 59348 从未通过改为核心通过、原包待修。57827、59021 更新的是成功配对的子集数量，未把完整任务升为通过。

## 本次核对了什么

固定社区快照为 `207998dab8c4c76c8558c3cca8ef177c69f10c1c`，仍是原来的 105 条完整任务。4 个仅 proposal 目录不计入分母。本次没有修改任何任务文件、参考补丁或测试断言。

- 核对全部 105 条任务的 735 个输入文件，以及选定结果/过程记录，共 2,077 个文件的哈希；没有不一致。
- 从 100 条任务的 Base/Gold 各两轮记录重建固定节点矩阵并复算原有效 F/P 数量；其余 3 条只有 CPU 子集，2 条在补丁预检停止。
- 额外核验 2,444 个相邻原始日志、JUnit/JSON 和运行信息文件，未发现封存后篡改或损坏。
- 对争议项检查原始失败异常、README 和历史命令；另有独立审查从 40 轮原始诊断输出重建矩阵，零差异。
- 新执行 57827、59021、59348 的 Base/Gold 各两轮对照，59973 的静态模式对照，以及 76259、77495 的两种补丁应用顺序检查。

**9 月 11 日是证据复核与上述专项复验日期，不是 105 条全部重新运行的日期。** 其余结论来自已核对的封存运行证据。硬件未完成仍保留未完成；兼容运行环境和轻量测试仍保留原限制。

## “以前通过，现在未通过”查到了什么

| Task | 复核结果 | 当前处理 |
| --- | --- | --- |
| 57827 | 两个目标在 Base 因缺少 `pd_op.fused_elemwise_add_activation` 注册而崩溃，Gold 两轮通过；旧统计把这类目标崩溃全排除了。新复验 2F/2P。 | 纠正“没有复现目标缺陷”的说法；原范围仍有两个 helper 准备错误和一个 legacy MKLDNN 崩溃，整题未通过。 |
| 59021 | 恢复历史执行 flags、用正确静态初始化后，选定目标/回归两轮稳定 3F/6P。 | 不认定目标修复退化；原脚本还包含未解决的 TensorArray 崩溃，整题未通过。 |
| 59348 | 保持全部 15 个节点及断言，只补路径和 `paddle.enable_static()`；Base 13 失败/2 通过，Gold 15 通过，两轮一致。 | 改为核心通过、原入口待修，13F/2P。 |
| 59374 | 原脚本 Gold 两轮都是 5 通过、1 跳过。以前的 1P 来自原脚本未选择的额外回归。 | 原脚本仍是 5F/0P；问题是缺回归覆盖，不是 Gold 测试失败。 |
| 60808 | 三个测试和原入口均通过，实际 1F/2P；README 写成 2F/1P。 | 只修数量说明，不是功能退化。 |
| 74212、77064 | 目标/回归仍通过；干净入口未配置 `op_test` 路径，导入时停止。 | 修入口配置，不把它说成目标断言失败。 |
| 78441 | Gold 31 个节点均通过，7 个附带清理错误发生在 Base。 | 修清理和空梯度断言范围，不说 Gold 仍有 7 项失败。 |
| 59973 | 两个静态节点默认模式四轮均失败；只补静态初始化后四轮均通过。 | 已定位初始化问题；对照仅覆盖这两个节点，原脚本仍失败，保持整题未通过。 |

## 当前 12 条未通过具体分在哪里

| 原因 | Task |
| --- | --- |
| 参考补丁无法应用，测试未开始 | 76259、77495 |
| 缺 F2P/P2P 覆盖；不等于 Gold 运行失败 | 57741、59374、73122、79386 |
| 有明确失败节点或运行前置条件问题 | 58323、59973、64881、76873 |
| 目标子集已复现，原完整范围还有故障 | 57827、59021 |

59847、64320、78823 另属必需硬件未完成，不能混称测试失败。前三者分别需要 CUDA、CUDA、CUDA 或 XPU 其中一种。

## 如何读逐项结果

Base 是未加参考修复补丁的版本；Gold 是加了参考修复补丁的版本。F2P 表示同一测试修复前失败、修复后通过；P2P 表示同一回归测试修复前后均通过。测试被跳过、未收集到、未执行，不算通过；Base 中预期的目标失败不是 Gold 失败。

下表保留完整测试名。每条在网页详情中还能展开全部节点，查看 Base 第 1/2 轮、Gold 第 1/2 轮结果，并按节点名搜索。此报告只展开影响验收的节点；通过节点仍可在网页查看。原始机器日志、运行路径与补丁不公开，公开摘要绑定到封存哈希。

## 全部 105 条当前结论

| Task | 当前状态 | F2P / P2P | 具体说明 |
| --- | --- | --- | --- |
| [18687](#task-18687) | 原包无必改项 | 3 / 1 | 缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [27247](#task-27247) | 原包无必改项 | 2 / 4 | 缺陷测试 2 项、回归测试 4 项均有稳定配对，原入口可运行。 |
| [33369](#task-33369) | 原包无必改项 | 3 / 1 | 缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [36684](#task-36684) | 原包无必改项 | 8 / 2 | 缺陷测试 8 项、回归测试 2 项均有稳定配对，原入口可运行。 |
| [41202](#task-41202) | 核心通过、包待修 | 2 / 1 | 目标测试已复现 2F/1P；原脚本以 python.paddle 再次加载底层模块，报 VarBase 重复注册，测试尚未开始就停止。 |
| [50086](#task-50086) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [52948](#task-52948) | 核心通过、包待修 | 5 / 14 | 目标测试已复现 5F/14P；原脚本重复导入 python.paddle 导致 VarBase 注册冲突。已完成源码编译，当前问题不是缺少编译产物。 |
| [53534](#task-53534) | 原包无必改项 | 2 / 2 | 缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。 |
| [54435](#task-54435) | 原包无必改项 | 3 / 2 | 缺陷测试 3 项、回归测试 2 项均有稳定配对，原入口可运行。 |
| [54625](#task-54625) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [55890](#task-55890) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [56135](#task-56135) | 原包无必改项 | 2 / 2 | 缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。 |
| [56470](#task-56470) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [56705](#task-56705) | 原包无必改项 | 2 / 2 | 缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。 |
| [57741](#task-57741) | 整体验证未通过 | 0 / 1 | 原脚本选了两个不存在的 Cuda 类名，四轮均未执行测试（退出码 4）。独立诊断改成真实的 CUDA 类名后，唯一 CPU 测试四轮全通过，3 个可选 GPU 测试四轮跳过，因此是 0 F2P / 1 P2P，不能证明补丁修复了 CPU 失败。 |
| [57827](#task-57827) | 整体验证未通过 | 2 / 2 | 目标修复和选定回归双轮通过。原来的0F误排除了由目标算子缺失引起的可重复崩溃；原始整文件脚本仍有两个误收集helper和一个legacy MKLDNN崩溃，包入口需修。本次只确认目标及选定回归子集；原完整范围仍有故障，整题保持未通过。 |
| [58219](#task-58219) | 原包无必改项 | 4 / 4 | 缺陷测试 4 项、回归测试 4 项均有稳定配对，原入口可运行。 |
| [58323](#task-58323) | 整体验证未通过 | 0 / 48 | 原脚本四轮均因 reshape 测试依赖 white_list 无法导入退出 2。补路径的独立诊断中，Base 在模块顶层访问不存在的 paddle.atleast_1d，41 个 atleast 测试尚未执行；Gold 可执行 41 个，其中 test_as_tensor_method 两轮失败，其余 40 个通过。另 48 个节点才是完整 P2P。 |
| [58343](#task-58343) | 原包无必改项 | 6 / 9 | 缺陷测试 6 项、回归测试 9 项均有稳定配对，原入口可运行。 |
| [58917](#task-58917) | 原包无必改项 | 15 / 3 | 缺陷测试 15 项、回归测试 3 项均有稳定配对，原入口可运行。 |
| [59021](#task-59021) | 整体验证未通过 | 3 / 6 | 恢复历史验证条件后，选定目标及回归双轮稳定 3F/6P。原脚本未固定 len 所需 flags，pytest 入口还漏了 fuse 静态初始化；原完整范围另有 TensorArray 崩溃，尚不能确定该崩溃的根因。本次只确认目标及选定回归子集；原完整范围仍有故障，整题保持未通过。 |
| [59127](#task-59127) | 核心通过、包待修 | 84 / 42 | 84 项缺陷测试和 42 项回归测试可复现；原脚本找不到 white_list，在收集 test_stack_op.py 时停止。 |
| [59348](#task-59348) | 核心通过、包待修 | 13 / 2 | 同一完整15节点在正确静态模式下Base双轮13失败/2通过，Gold双轮15通过；缺静态初始化时test_errors因异常类型不同在两边失败。属于入口前置条件缺失，不能称参考修复仍错误。 |
| [59374](#task-59374) | 整体验证未通过 | 5 / 0 | 原脚本Base双轮5 failed/1 skipped，Gold双轮5 passed/1 skipped；没有真正两边都通过的回归节点。旧版5F/1P额外加入了原脚本未选的TestInplace::test_forward_version。未通过的是回归覆盖要求，不能说 Gold 测试执行失败。 |
| [59383](#task-59383) | 核心通过、包待修 | 28 / 680 | 分文件运行可复现 28F/680P；原脚本导入 test_masked_scatter.py 时找不到 white_list。16 项 CPU 跳过未计为通过。 |
| [59715](#task-59715) | 原包无必改项 | 56 / 52 | 缺陷测试 56 项、回归测试 52 项均有稳定配对，原入口可运行。 |
| [59847](#task-59847) | 必需硬件未完成 | 未完成/未运行 | README 明确要求 CPU + GPU（CUDA）。CPU 四轮已完成：Base 原脚本两轮退出 1、Gold 两轮退出 0；诊断观察到 36 个 CPU F→P，32 个 FP16/BF16 节点因 CUDA 不可用而跳过。CPU 通过不能代替必需 GPU 核函数验证。 |
| [59909](#task-59909) | 原包无必改项 | 1 / 2 | 缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。 |
| [59973](#task-59973) | 整体验证未通过 | 47 / 23 | 原脚本 Gold 两轮都卡在两个 scatter 静态测试。TestScatterAPI.test_static 与 TestScatterInplaceAPI.test_static 四轮均在 paddle.static.data 报当前为动态图；没有执行到 scatter 结果断言。其余 47 F2P / 23 P2P 是通过子集，不能抵消这两个失败。 2026-09-11 对照：只在 pytest 前启用 static，这两个节点 Base/Gold 各两轮均由失败转为通过；确认初始化问题。原脚本本次复跑仍失败，整题状态保持未通过。 |
| [60417](#task-60417) | 原包无必改项 | 3 / 1 | 缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [60808](#task-60808) | 核心通过、包待修 | 1 / 2 | 测试没有失败：原脚本和全部测试都通过。实际是 1 项 F2P、2 项 P2P，README 写成了 2 项 F2P、1 项 P2P。 |
| [64320](#task-64320) | 必需硬件未完成 | 未完成/未运行 | CPU 已复现 6 项 F2P 和 26 项有效 P2P；另一个表面通过的护栏没有调用目标 API，不计有效 P2P。未完成的是 README 必需的 CUDA 分支，不能说 CPU 测试失败。 |
| [64519](#task-64519) | 原包无必改项 | 16 / 9 | 缺陷测试 16 项、回归测试 9 项均有稳定配对，原入口可运行。 |
| [64881](#task-64881) | 整体验证未通过 | 6 / 92 | 原入口四轮缺 op_test 导入路径而退出 2。补路径诊断有 6 F2P / 92 P2P，另 7 个 CPU 节点在 Base 和 Gold 两轮均失败：6 个 dropout 分解后的 mask shape 与原输出不符，1 个固定种子测试结果不一致。这些是当前环境真实失败，但四轮同红不能归因为 Gold 引入回归。 |
| [65724](#task-65724) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [67195](#task-67195) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [68432](#task-68432) | 原包无必改项 | 2 / 11 | 缺陷测试 2 项、回归测试 11 项均有稳定配对，原入口可运行。 |
| [70469](#task-70469) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [72800](#task-72800) | 核心通过、包待修 | 4 / 4 | 目标与回归测试均可复现；原脚本导入 test_cummax_op.py 时找不到 op_test，未进入测试断言。 |
| [73122](#task-73122) | 整体验证未通过 | 0 / 3 | 原脚本四轮退出 0，三个完整节点都通过。预期 F2P 的零尺寸 multi_dot 测试在 Base 已通过两轮，所以实际是 0 F2P / 3 P2P。没有“哪个 Gold 测试失败”；未通过的是“必须存在 Base 失败、Gold 通过的案例”这一数据验收项。 |
| [73125](#task-73125) | 核心通过、包待修 | 2 / 4 | 原脚本找不到 op_test；补齐路径后确认 2F/4P。另外两个 output 测试在 Base 的清理阶段报错，不能把测试主体通过算成完整通过。 |
| [73385](#task-73385) | 核心通过、包待修 | 4 / 4 | 原脚本找不到 op_test。诊断中的一个 Base 测试进入主体后提前以 0 退出，没有完成记录；退出码为 0 不代表该测试已通过。 |
| [73387](#task-73387) | 核心通过、包待修 | 2 / 1 | 目标与回归测试均可复现；原脚本导入 test_gather_tree_op.py 时找不到 op_test，未进入测试断言。 |
| [73535](#task-73535) | 原包无必改项 | 1 / 1 | 缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [73569](#task-73569) | 核心通过、包待修 | 1 / 2 | 目标与回归测试均可复现；原脚本导入 test_matmul_v2_op.py 时找不到 op_test，未进入测试断言。 |
| [73570](#task-73570) | 原包无必改项 | 3 / 4 | 缺陷测试 3 项、回归测试 4 项均有稳定配对，原入口可运行。 |
| [73582](#task-73582) | 原包无必改项 | 2 / 3 | 缺陷测试 2 项、回归测试 3 项均有稳定配对，原入口可运行。 |
| [73691](#task-73691) | 原包无必改项 | 3 / 3 | 缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。 |
| [73702](#task-73702) | 原包无必改项 | 1 / 2 | 缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。 |
| [73776](#task-73776) | 原包无必改项 | 1 / 2 | 缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。 |
| [73821](#task-73821) | 原包无必改项 | 3 / 2 | 缺陷测试 3 项、回归测试 2 项均有稳定配对，原入口可运行。 |
| [73850](#task-73850) | 原包无必改项 | 1 / 3 | 缺陷测试 1 项、回归测试 3 项均有稳定配对，原入口可运行。 |
| [73854](#task-73854) | 原包无必改项 | 2 / 3 | 缺陷测试 2 项、回归测试 3 项均有稳定配对，原入口可运行。 |
| [73855](#task-73855) | 原包无必改项 | 1 / 1 | 缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [73880](#task-73880) | 原包无必改项 | 4 / 2 | 缺陷测试 4 项、回归测试 2 项均有稳定配对，原入口可运行。 |
| [74184](#task-74184) | 核心通过、包待修 | 2 / 5 | 实际可复现 2F/5P；原来标成 F2P 的两个测试在 Base 中也通过，应算 P2P。原脚本另因找不到 op_test 而停止。 |
| [74212](#task-74212) | 核心通过、包待修 | 2 / 5 | 目标与回归测试均可复现；原脚本导入 test_multiplex_op.py 时找不到 op_test，未进入测试断言。 |
| [74221](#task-74221) | 核心通过、包待修 | 1 / 2 | 目标与回归测试均可复现；原脚本导入 test_fold_op.py 时找不到 op_test，未进入测试断言。 |
| [74305](#task-74305) | 核心通过、包待修 | 1 / 1 | 目标与回归测试均可复现；原脚本导入 test_unique.py 时找不到 op_test，未进入测试断言。 |
| [74421](#task-74421) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [74439](#task-74439) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [74444](#task-74444) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [74491](#task-74491) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [74586](#task-74586) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [74594](#task-74594) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [75274](#task-75274) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [76259](#task-76259) | 整体验证未通过 | 未完成/未运行 | Gold 补丁在指定 Base 的 paddle/fluid/inference/api/helper.h:15 无法应用；先测试补丁后 Gold、先 Gold 后测试补丁均失败。2026-09-11 用独立 index 重跑同样复现。Base/Gold 测试双轮均未开始，F2P/P2P 不适用。 |
| [76522](#task-76522) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [76736](#task-76736) | 原包无必改项 | 3 / 7 | 缺陷测试 3 项、回归测试 7 项均有稳定配对，原入口可运行。 |
| [76873](#task-76873) | 整体验证未通过 | 9 / 14 | 原脚本四轮退出 4：symbolic 测试需要的 utils.apply_to_static 被同名 legacy_test/utils.py 遮蔽。分目录诊断仍有 8 个 Gold 失败：7 个 symbolic 节点缺 sym_shape_str，加载的 CPU 原生库报告 CINN=False；另 SELU inplace 测试 1/750 元素超过精度阈值。其余为 9 F2P / 14 P2P。 |
| [77064](#task-77064) | 核心通过、包待修 | 4 / 19 | 目标与回归测试均可复现；原脚本导入 test_allclose_op.py 时找不到 op_test，未进入测试断言。 |
| [77078](#task-77078) | 原包无必改项 | 3 / 33 | 缺陷测试 3 项、回归测试 33 项均有稳定配对，原入口可运行。 |
| [77150](#task-77150) | 原包无必改项 | 1 / 1 | 缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [77495](#task-77495) | 整体验证未通过 | 未完成/未运行 | Gold 在 python/paddle/nn/functional/pooling.py:573 与 python/paddle/nn/layer/pooling.py:629 不匹配，且 test/legacy_test/test_max_pool_dilation.py 在 Base index 中不存在。两种应用顺序同样失败，2026-09-11 独立 index 重跑复现。没有 Base/Gold 测试双轮结果。 |
| [77749](#task-77749) | 原包无必改项 | 21 / 1 | 缺陷测试 21 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [78048](#task-78048) | 原包无必改项 | 3 / 3 | 缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。 |
| [78082](#task-78082) | 原包无必改项 | 9 / 23 | 缺陷测试 9 项、回归测试 23 项均有稳定配对，原入口可运行。 |
| [78104](#task-78104) | 原包无必改项 | 1 / 1 | 缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [78138](#task-78138) | 原包无必改项 | 2 / 15 | 缺陷测试 2 项、回归测试 15 项均有稳定配对，原入口可运行。 |
| [78238](#task-78238) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [78301](#task-78301) | 原包无必改项 | 13 / 21 | 缺陷测试 13 项、回归测试 21 项均有稳定配对，原入口可运行。 |
| [78342](#task-78342) | 原包无必改项 | 7 / 24 | 缺陷测试 7 项、回归测试 24 项均有稳定配对，原入口可运行。 |
| [78440](#task-78440) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [78441](#task-78441) | 核心通过、包待修 | 27 / 4 | Gold 的 31 项测试均通过；7 个清理错误发生在 Base，不能说修复后仍有 7 项失败。部分空梯度测试只调用 API，没有检查梯度值。 |
| [78452](#task-78452) | 原包无必改项 | 16 / 27 | 缺陷测试 16 项、回归测试 27 项均有稳定配对，原入口可运行。 |
| [78522](#task-78522) | 原包无必改项 | 3 / 1 | 缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [78570](#task-78570) | 原包无必改项 | 6 / 3 | 缺陷测试 6 项、回归测试 3 项均有稳定配对，原入口可运行。 |
| [78823](#task-78823) | 必需硬件未完成 | 未完成/未运行 | README 要求 CUDA 或 XPU 设备，当前仅 CPU。Base 两轮在导入 _to_pinned_place 时失败，Gold 原脚本两轮退出 0；Gold 中三个 CUDA pinned 案例均跳过，CPU 上通过的四个新 API 案例不能证明 pinned 分配在设备上有效。其余 143 个节点观察为 P→P（其中设备条件空返回需按实际覆盖解释）。 |
| [78911](#task-78911) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [78922](#task-78922) | 原包无必改项 | 1 / 1 | 缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [78932](#task-78932) | 原包无必改项 | 3 / 3 | 缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。 |
| [79035](#task-79035) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [79057](#task-79057) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [79161](#task-79161) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [79167](#task-79167) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [79197](#task-79197) | 核心通过、包待修 | 6 / 1 | 目标与回归测试均可复现；原脚本导入 test_lr_scheduler.py 时找不到 op_test，未进入测试断言。 |
| [79268](#task-79268) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [79275](#task-79275) | 原包无必改项 | 3 / 1 | 缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [79276](#task-79276) | 核心通过、包待修 | 1 / 2 | 目标与回归测试均可复现；原脚本导入 test_add_n_op.py 时找不到 op_test，未进入测试断言。 |
| [79310](#task-79310) | 原包无必改项 | 4 / 1 | 缺陷测试 4 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [79321](#task-79321) | 原包无必改项 | 1 / 1 | 缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [79353](#task-79353) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [79369](#task-79369) | 原包无必改项 | 1 / 1 | 缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。 |
| [79386](#task-79386) | 整体验证未通过 | 0 / 3 | 原脚本四轮退出 0，三个测试在 Base/Gold 各两轮均通过。专门验证 uint64.max 的测试在 Base 已通过，因此实际 0 F2P / 3 P2P。不能据此声称补丁失败；当前声明的 Linux CPU 环境没有复现目标缺陷。 |
| [79633](#task-79633) | 原包无必改项 | 2 / 1 | 缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。 |

## Task 18687

缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 27247

缺陷测试 2 项、回归测试 4 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 6 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 33369

缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 36684

缺陷测试 8 项、回归测试 2 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 11 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 41202

目标测试已复现 2F/1P；原脚本以 python.paddle 再次加载底层模块，报 VarBase 重复注册，测试尚未开始就停止。

**问题位置：**测试入口重复导入模块

**与之前的差异：**与上一版结论一致。

**处理方法：**统一测试入口的包导入路径，避免同一 Paddle 模块被加载两次，再执行原脚本。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 标准生成文件已经补齐，但原脚本又以 python.paddle 的名字加载同一底层模块，导致类型重复注册，测试还没开始就中断。独立诊断能跑通不等于原入口可用，需要统一包导入方式后再用原脚本复验。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → Paddle 包导入` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 目标测试已复现 2F/1P；原脚本以 python.paddle 再次加载底层模块，报 VarBase 重复注册，测试尚未开始就停止。 |

## Task 50086

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 52948

目标测试已复现 5F/14P；原脚本重复导入 python.paddle 导致 VarBase 注册冲突。已完成源码编译，当前问题不是缺少编译产物。

**问题位置：**测试入口重复导入模块

**与之前的差异：**与上一版结论一致。

**处理方法：**修正测试入口的包导入方式，再执行原脚本确认完整测试能够完成。

核对 2026-09-09 封存记录；本题已记录 19 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 这条已经完成精确原生构建，缺少编译产物不是当前原因；原脚本在收集测试时重复加载底层模块，仍触发 VarBase 注册冲突。应修正入口的包导入方式，让原脚本也能执行已验证的断言，而不是修改断言让它通过。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → Paddle 包导入` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 目标测试已复现 5F/14P；原脚本重复导入 python.paddle 导致 VarBase 注册冲突。已完成源码编译，当前问题不是缺少编译产物。 |

## Task 53534

缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 54435

缺陷测试 3 项、回归测试 2 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 5 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 54625

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 55890

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 56135

缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 56470

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 56705

缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 57741

原脚本选了两个不存在的 Cuda 类名，四轮均未执行测试（退出码 4）。独立诊断改成真实的 CUDA 类名后，唯一 CPU 测试四轮全通过，3 个可选 GPU 测试四轮跳过，因此是 0 F2P / 1 P2P，不能证明补丁修复了 CPU 失败。

**问题位置：**测试入口错误；缺 F2P

**与之前的差异：**与上一版结论一致。

**处理方法：**先将 TestTensorCopyToCudaOnDefaultCPU/GPU 改为 TestTensorCopyToCUDAOnDefaultCPU/GPU，再补能在 Base 上实际触发失败的 CPU 案例；可选 GPU 跳过不算通过。

核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `test.dygraph_to_static.test_tensor_memcpy_on_cpu.TestTensorCopyToCUDAOnDefaultCPU::test_tensor_cuda_on_default_cpu` | 跳过 | 跳过 | 跳过 | 跳过 | 四轮均跳过：无 CUDA，不能计 F2P/P2P。 |
| `test.dygraph_to_static.test_tensor_memcpy_on_gpu.TestTensorCopyToCUDAOnDefaultGPU::test_tensor_cuda_on_default_gpu` | 跳过 | 跳过 | 跳过 | 跳过 | 四轮均跳过：无 CUDA，不能计 F2P/P2P。 |
| `test.dygraph_to_static.test_tensor_memcpy_on_gpu.TestTensorCopyToCpuOnDefaultGPU::test_tensor_cpu_on_default_gpu` | 跳过 | 跳过 | 跳过 | 跳过 | 四轮均跳过：无 CUDA，不能计 F2P/P2P。 |

## Task 57827

目标修复和选定回归双轮通过。原来的0F误排除了由目标算子缺失引起的可重复崩溃；原始整文件脚本仍有两个误收集helper和一个legacy MKLDNN崩溃，包入口需修。本次只确认目标及选定回归子集；原完整范围仍有故障，整题保持未通过。

**问题位置：**目标子集已复现，原完整范围仍有故障

**与之前的差异：**任务的 7 个输入文件与封存快照完全一致。开发者此前能复现目标缺陷的结论得到支持；修正原来 0F 的解释，保留整题未通过，避免以子集替代原完整范围。

**处理方法：**将原入口明确选择已复现的两个PIR目标与两个TestError回归，或者修正误收集并解决legacy MKLDNN旁支后全包复验。

README建议选择稳定节点；两个PIR fused-op目标及两个TestError既有回归，原整文件不在通过范围。新验证2P仅为两个TestError节点，不将旧报告的额外legacy ResNet 1P拼入。 两个目标Base异常退出已用关闭pytest捕获的独立运行确认缺pd_op.fused_elemwise_add_activation注册；不是对所有崩溃一概算F2P。 原始脚本和测试包未修改，也未宣称原包直接可用。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_resnet__ast_pir_exe` | 目标缺陷导致崩溃 | 目标缺陷导致崩溃 | 通过 | 通过 | 2026-09-11 同条件复验。Base因目标算子pd_op.fused_elemwise_add_activation未注册而SIGABRT，Gold完成测试并通过；关闭pytest捕获已定位错误。 |
| `test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_in_static_mode_mkldnn__ast_pir_exe` | 目标缺陷导致崩溃 | 目标缺陷导致崩溃 | 通过 | 通过 | 2026-09-11 同条件复验。Base因目标算子pd_op.fused_elemwise_add_activation未注册而SIGABRT，Gold完成测试并通过；关闭pytest捕获已定位错误。 |
| `test/dygraph_to_static/test_build_strategy.py::TestError::test_type_error__ast_legacy_ir` | 通过 | 通过 | 通过 | 通过 | 2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。 |
| `test/dygraph_to_static/test_build_strategy.py::TestError::test_type_error__sot_legacy_ir` | 通过 | 通过 | 通过 | 通过 | 2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。 |
| `原范围仍需处理：test/dygraph_to_static/test_build_strategy.py::test_ast_only` | 准备报错 | 准备报错 | 准备报错 | 准备报错 | 2026-09-09 原范围证据：fixture 'fn' not found，导入装饰器误当成测试。不在本次子集通过范围内。 |
| `原范围仍需处理：test/dygraph_to_static/test_build_strategy.py::test_legacy_and_pir` | 准备报错 | 准备报错 | 准备报错 | 准备报错 | 2026-09-09 原范围证据：fixture 'fn' not found，导入装饰器误当成测试。不在本次子集通过范围内。 |
| `原范围仍需处理：test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_in_static_mode_mkldnn__ast_legacy_ir` | 进程崩溃 | 进程崩溃 | 进程崩溃 | 进程崩溃 | 2026-09-09 原范围证据：原整文件包含的legacy oneDNN旁支SIGABRT，未在选定核心通过范围。不在本次子集通过范围内。 |

## Task 58219

缺陷测试 4 项、回归测试 4 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 8 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 58323

原脚本四轮均因 reshape 测试依赖 white_list 无法导入退出 2。补路径的独立诊断中，Base 在模块顶层访问不存在的 paddle.atleast_1d，41 个 atleast 测试尚未执行；Gold 可执行 41 个，其中 test_as_tensor_method 两轮失败，其余 40 个通过。另 48 个节点才是完整 P2P。

**问题位置：**入口导入错误；测试模式隔离错误；Base 收集失败

**与之前的差异：**与上一版结论一致。

**处理方法：**修复 white_list 的导入路径；将新 API 查找移入测试体以收集 Base 节点；显式设置并恢复测试的动静态模式，然后重跑原脚本。

核对 2026-09-09 封存记录；本题已记录 91 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `test/legacy_test/test_atleast_nd.py::TestAtleastAsTensorMethod::test_as_tensor_method` | 未收集到 | 未收集到 | 失败 | 失败 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮在 reshape 中把静态 Variable 传入动态图 Tensor 接口，模式未隔离。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_0::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_10::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_11::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_12::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_13::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_14::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_1::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_2::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_3::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_4::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_5::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_6::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_7::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_8::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_9::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_0::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_10::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_11::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_12::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_13::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_14::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_1::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_2::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_3::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_4::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_5::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_6::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_7::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_8::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastDim_9::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastErrorCombineInputs_0::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastErrorCombineInputs_1::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastErrorCombineInputs_2::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastMixData_0::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastMixData_1::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastMixData_2::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastMixData_3::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastMixData_4::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastMixDim_0::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_atleast_nd.py::TestAtleastMixDtypes_0::test_all` | 未收集到 | 未收集到 | 通过 | 通过 | Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。 |
| `test/legacy_test/test_reshape_op.py::TestReshapeBF16Op::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_reshape_op.py::TestReshapeBF16Op::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |

## Task 58343

缺陷测试 6 项、回归测试 9 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 15 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 58917

缺陷测试 15 项、回归测试 3 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 18 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 59021

恢复历史验证条件后，选定目标及回归双轮稳定 3F/6P。原脚本未固定 len 所需 flags，pytest 入口还漏了 fuse 静态初始化；原完整范围另有 TensorArray 崩溃，尚不能确定该崩溃的根因。本次只确认目标及选定回归子集；原完整范围仍有故障，整题保持未通过。

**问题位置：**目标子集已复现，原完整范围仍有故障

**与之前的差异：**任务的 7 个输入文件与封存快照完全一致。开发者此前能复现目标缺陷的结论得到支持；修正原来 0F 的解释，保留整题未通过，避免以子集替代原完整范围。

**处理方法：**为SelectedRows和TestLen设置FLAGS_enable_pir_with_pt_in_dy2st=false及FLAGS_enable_pir_in_executor=true；fuse回归直接运行Python脚本或显式启静态模式；原入口固定目标及回归后重验。

历史同条件：SelectedRows/TestLen分别启用两个executor/dy2st flags；CPU fuse回归直接运行脚本以执行__main__静态初始化。CPU下test_fuse_act_add_grad_pass_cuda空返回不计P2P。 len同一语义目标有3个参数化节点；3F不是3种不同功能。 仅恢复历史条件的独立诊断通过；未修改或宣布原入口通过。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `test/dygraph_to_static/test_len.py::TestLenWithSelectedRows::test_len__ast_legacy_ir` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/dygraph_to_static/test_len.py::TestLenWithSelectedRows::test_len__sot_legacy_ir` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/dygraph_to_static/test_len.py::TestLenWithSelectedRows::test_len__sot_mgs10_legacy_ir` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/dygraph_to_static/test_len.py::TestLen::test_len__ast_legacy_ir` | 通过 | 通过 | 通过 | 通过 | 2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。 |
| `test/dygraph_to_static/test_len.py::TestLen::test_len__sot_legacy_ir` | 通过 | 通过 | 通过 | 通过 | 2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。 |
| `test/dygraph_to_static/test_len.py::TestLen::test_len__sot_mgs10_legacy_ir` | 通过 | 通过 | 通过 | 通过 | 2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。 |
| `test/legacy_test/test_fuse_elewise_add_act_pass.py::TestMNIST::test_batchnorm_fc_with_fuse_op` | 通过 | 通过 | 通过 | 通过 | 2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。 |
| `test/legacy_test/test_fuse_elewise_add_act_pass.py::TestMNIST::test_simple_fc_with_fuse_op` | 通过 | 通过 | 通过 | 通过 | 2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。 |
| `test/legacy_test/test_fuse_elewise_add_act_pass.py::TestFuseActElewiseAddInplaceGradPass::test_fuse_act_add_grad_pass_cpu` | 通过 | 通过 | 通过 | 通过 | 2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。 |
| `原范围仍需处理：test/dygraph_to_static/test_len.py::TestLenWithTensorArray::test_len__ast_legacy_ir` | 失败 | 失败 | 失败 | 失败 | 2026-09-09 原范围证据：默认执行模式触发非目标TensorArray段错误，原脚本未完成。不在本次子集通过范围内。 |
| `原范围仍需处理：test/legacy_test/test_fuse_elewise_add_act_pass.py::TestMNIST::test_batchnorm_fc_with_fuse_op` | 失败 | 失败 | 失败 | 失败 | 2026-09-09 原范围证据：未调用paddle.enable_static()。不在本次子集通过范围内。 |
| `原范围仍需处理：test/legacy_test/test_fuse_elewise_add_act_pass.py::TestMNIST::test_simple_fc_with_fuse_op` | 失败 | 失败 | 失败 | 失败 | 2026-09-09 原范围证据：未调用paddle.enable_static()。不在本次子集通过范围内。 |
| `原范围仍需处理：test/legacy_test/test_fuse_elewise_add_act_pass.py::TestFuseActElewiseAddInplaceGradPass::test_fuse_act_add_grad_pass_cpu` | 失败 | 失败 | 失败 | 失败 | 2026-09-09 原范围证据：未调用paddle.enable_static()。不在本次子集通过范围内。 |

## Task 59127

84 项缺陷测试和 42 项回归测试可复现；原脚本找不到 white_list，在收集 test_stack_op.py 时停止。

**问题位置：**测试入口缺少辅助模块路径

**与之前的差异：**与上一版结论一致。

**处理方法：**在 tests/test.sh 中配置包含 white_list 的仓库测试目录，并用原入口复验。

核对 2026-09-09 封存记录；本题已记录 126 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 white_list 是仓库测试使用的辅助模块，原脚本找不到它，会在收集测试时停止，尚未执行目标断言。补齐搜索路径的独立诊断已通过，但还需要把必要的路径配置落实到原脚本并复验。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_stack_op.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 84 项缺陷测试和 42 项回归测试可复现；原脚本找不到 white_list，在收集 test_stack_op.py 时停止。 |

## Task 59348

同一完整15节点在正确静态模式下Base双轮13失败/2通过，Gold双轮15通过；缺静态初始化时test_errors因异常类型不同在两边失败。属于入口前置条件缺失，不能称参考修复仍错误。

**问题位置：**入口缺少静态模式初始化，完整核心已恢复

**与之前的差异：**任务的 7 个输入文件与封存快照完全一致。全 15 节点同条件复验通过，改为核心通过、原包待修。

**处理方法：**在原入口补test/legacy_test搜索路径，并在pytest.main之前调用paddle.enable_static()；保持原15节点与断言完整复验。

原选定sequence_mask全15节点，加入test/legacy_test搜索路径并在pytest前调用paddle.enable_static()。未改任何TypeError断言，未删除失败节点。 原任务脚本仍缺helper路径及显式静态初始化。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `test/sequence/test_sequence_mask.py::SequenceMaskTestBase::test_check_output` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/sequence/test_sequence_mask.py::SequenceMaskTest1::test_check_output` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/sequence/test_sequence_mask.py::SequenceMaskTest2::test_check_output` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/sequence/test_sequence_mask.py::SequenceMaskTest3::test_check_output` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/sequence/test_sequence_mask.py::SequenceMaskTest4::test_check_output` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/sequence/test_sequence_mask.py::SequenceMaskTest5::test_check_output` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/sequence/test_sequence_mask.py::SequenceMaskTest6::test_check_output` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/sequence/test_sequence_mask.py::SequenceMaskTestBase_tensor_attr::test_check_output` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/sequence/test_sequence_mask.py::SequenceMaskTest1_tensor_attr::test_check_output` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/sequence/test_sequence_mask.py::SequenceMaskTest2_tensor_attr::test_check_output` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/sequence/test_sequence_mask.py::SequenceMaskTest3_tensor_attr::test_check_output` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/sequence/test_sequence_mask.py::SequenceMaskTest4_tensor_attr::test_check_output` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/sequence/test_sequence_mask.py::SequenceMaskTest5_tensor_attr::test_check_output` | 失败 | 失败 | 通过 | 通过 | 2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。 |
| `test/sequence/test_sequence_mask.py::TestSequenceMaskOpError::test_errors` | 通过 | 通过 | 通过 | 通过 | 2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。 |
| `test/sequence/test_sequence_mask.py::TestSequenceMaskWithEmptyTensor::test_empty` | 通过 | 通过 | 通过 | 通过 | 2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。 |
| `原始 tests/test.sh 导入 test_sequence_mask.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 原入口未补 op_test 路径；正确静态模式下的完整 15 节点通过，并不表示原脚本已修改。 |

## Task 59374

原脚本Base双轮5 failed/1 skipped，Gold双轮5 passed/1 skipped；没有真正两边都通过的回归节点。旧版5F/1P额外加入了原脚本未选的TestInplace::test_forward_version。未通过的是回归覆盖要求，不能说 Gold 测试执行失败。

**问题位置：**缺少有效 P2P，Gold 测试本身通过

**与之前的差异：**以前的 5F/1P 包含原脚本没有选择的额外回归 TestInplace::test_forward_version。当前原脚本只有 5F/0P；测试范围不同，不是同一个回归测试由通过变失败。

**处理方法：**补入一个真实既有CPU回归节点，再完整复验。

已核对原入口四轮日志：Base 两轮各 5 failed / 1 skipped，Gold 两轮各 5 passed / 1 skipped；跳过不能当 P2P。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `test.legacy_test.test_apply.TestTensorApplyAPI::test_on_gpu` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test.legacy_test.test_apply.TestTensorApplyAPI::test_dtype` | 失败 | 失败 | 通过 | 通过 | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| `test.legacy_test.test_apply.TestTensorApplyAPI::test_dygraph` | 失败 | 失败 | 通过 | 通过 | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| `test.legacy_test.test_apply.TestTensorApplyAPI::test_error` | 失败 | 失败 | 通过 | 通过 | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| `test.legacy_test.test_apply.TestTensorApplyAPI::test_to_static` | 失败 | 失败 | 通过 | 通过 | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| `test.legacy_test.test_inplace.TestDygraphTensorApplyInplace::test_inplace_api` | 失败 | 失败 | 通过 | 通过 | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

## Task 59383

分文件运行可复现 28F/680P；原脚本导入 test_masked_scatter.py 时找不到 white_list。16 项 CPU 跳过未计为通过。

**问题位置：**测试入口缺少辅助模块路径

**与之前的差异：**与上一版结论一致。

**处理方法：**在原脚本中配置辅助模块路径并核对整套测试收集；保留跳过项。

核对 2026-09-09 封存记录；本题已记录 724 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 目前通过的是补齐辅助模块路径后的分文件诊断，原脚本仍找不到 white_list，不能直接得到同样的结果。需修正原入口的依赖搜索路径和收集方式，再验证整条执行流程；跳过的 16 个节点不算通过。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_masked_scatter.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 分文件运行可复现 28F/680P；原脚本导入 test_masked_scatter.py 时找不到 white_list。16 项 CPU 跳过未计为通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterBF16::test_dygraph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterBF16::test_static_graph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterBF16APIBroadcast2::test_dygraph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterBF16APIBroadcast2::test_static_graph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API1::test_dygraph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API1::test_static_graph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API2::test_dygraph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API2::test_static_graph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API3::test_dygraph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API3::test_static_graph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast2::test_dygraph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast2::test_static_graph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast3::test_dygraph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast3::test_static_graph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast::test_dygraph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast::test_static_graph` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |

## Task 59715

缺陷测试 56 项、回归测试 52 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 108 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 59847

README 明确要求 CPU + GPU（CUDA）。CPU 四轮已完成：Base 原脚本两轮退出 1、Gold 两轮退出 0；诊断观察到 36 个 CPU F→P，32 个 FP16/BF16 节点因 CUDA 不可用而跳过。CPU 通过不能代替必需 GPU 核函数验证。

**问题位置：**必需 CUDA 验证缺失（CPU Gold 已通过）

**与之前的差异：**与上一版结论一致。

**处理方法：**使用 CUDA 构建与设备对相同 Base/Gold 各跑两轮；补齐 fractional_max_pool2d/3d 的 FP16/BF16 及 GPU 执行结果。

CPU 子集的原始四轮结果已与日志核对；所需硬件未执行。此表的通过状态不能当作整题验收通过或自动累加为有效回归数。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `必需硬件分支：CUDA` | 未执行 | 未执行 | 未执行 | 未执行 | 使用 CUDA 构建与设备对相同 Base/Gold 各跑两轮；补齐 fractional_max_pool2d/3d 的 FP16/BF16 及 GPU 执行结果。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_BF16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_BF16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_FP16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_FP16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_BF16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_BF16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_FP16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_FP16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_BF16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_BF16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_FP16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_FP16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_BF16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_BF16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_FP16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_FP16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_BF16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_BF16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_FP16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_FP16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_BF16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_BF16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_FP16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_FP16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |

## Task 59909

缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 59973

原脚本 Gold 两轮都卡在两个 scatter 静态测试。TestScatterAPI.test_static 与 TestScatterInplaceAPI.test_static 四轮均在 paddle.static.data 报当前为动态图；没有执行到 scatter 结果断言。其余 47 F2P / 23 P2P 是通过子集，不能抵消这两个失败。 2026-09-11 对照：只在 pytest 前启用 static，这两个节点 Base/Gold 各两轮均由失败转为通过；确认初始化问题。原脚本本次复跑仍失败，整题状态保持未通过。

**问题位置：**测试模式初始化错误

**与之前的差异：**与上一版结论一致。

**处理方法：**给静态测试显式启用并恢复 static 模式，复跑这两个完整节点及原 test.sh；两个 CPU 空返回节点不应计 P2P。

2026-09-11 对照：同一测试和断言，只在入口增加 paddle.enable_static()，两个静态节点由 Base/Gold 各两轮均失败变为均通过。该对照只验证两个节点；原脚本仍失败，未将局部修正当成完整任务通过。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `test/legacy_test/test_scatter_op.py::TestScatterAPI::test_static` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均在 paddle.static.data 处报“只能用于静态图”。今天对照仅补 paddle.enable_static() 后，四轮均通过，确认是测试模式初始化问题。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op0::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op0::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op1::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op1::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op2::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op2::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op3::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op3::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op4::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op4::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op5::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op5::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op6::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op6::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterBF16Op::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterFP16Op2::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterFP16Op2::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterFP16Op3::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterFP16Op3::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterFP16Op5::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterFP16Op5::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterInplaceAPI::test_static` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均在 paddle.static.data 处报“只能用于静态图”。今天对照仅补 paddle.enable_static() 后，四轮均通过，确认是测试模式初始化问题。 |
| `test/legacy_test/test_scatter_op.py::TestScatterOp2::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterOp2::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterOp3::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterOp3::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterOp5::test_check_grad` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterOp5::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_scatter_op.py::TestScatterOpFp16::test_scatter_fp16` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |

## Task 60417

缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 60808

测试没有失败：原脚本和全部测试都通过。实际是 1 项 F2P、2 项 P2P，README 写成了 2 项 F2P、1 项 P2P。

**问题位置：**仅说明中的数量写错

**与之前的差异：**上一版：原包通过；封存全量报告：核心通过、任务包待修。变化仅涉及文档数量，运行结果没有退化。

**处理方法：**只需修正 environment/README.md 中的数量，不需要修改实现或测试断言。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 这条的原脚本和核心测试都已通过，只是 README 把实际的 1F/2P 写成了 2F/1P。需要改的是说明中的数量，不是修复运行故障，也不需要为了凑数改动测试断言。

## Task 64320

CPU 已复现 6 项 F2P 和 26 项有效 P2P；另一个表面通过的护栏没有调用目标 API，不计有效 P2P。未完成的是 README 必需的 CUDA 分支，不能说 CPU 测试失败。

**问题位置：**必需 CUDA 验证尚未执行

**与之前的差异：**与上一版结论一致。

**处理方法：**用 CUDA 构建和设备补跑 sparse.mask_as 的 COO 1d/2d/3d/4d、CSR 2d/3d 及其回归分支，保留 CPU 已通过结论。

CPU 子集的原始四轮结果已与日志核对；所需硬件未执行。此表的通过状态不能当作整题验收通过或自动累加为有效回归数。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `必需硬件分支：CUDA` | 未执行 | 未执行 | 未执行 | 未执行 | 用 CUDA 构建和设备补跑 sparse.mask_as 的 COO 1d/2d/3d/4d、CSR 2d/3d 及其回归分支，保留 CPU 已通过结论。 |

## Task 64519

缺陷测试 16 项、回归测试 9 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**上一版：验证未通过；封存全量报告：原包通过。当前完整诊断恢复通过；此前的失败记录不能继续当作现状。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 28 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 64881

原入口四轮缺 op_test 导入路径而退出 2。补路径诊断有 6 F2P / 92 P2P，另 7 个 CPU 节点在 Base 和 Gold 两轮均失败：6 个 dropout 分解后的 mask shape 与原输出不符，1 个固定种子测试结果不一致。这些是当前环境真实失败，但四轮同红不能归因为 Gold 引入回归。

**问题位置：**入口导入错误；原生运行时/数值断言问题（Base 已存在）

**与之前的差异：**上一版：验证未完成；封存全量报告：验证未通过。

**处理方法：**修复 op_test 路径；定位 dropout primitive 分解的 shape 和随机种子问题，并确认环境开关与开发者通过时一致。保持原断言重新验证全部节点。

核对 2026-09-09 封存记录；本题已记录 134 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `test/legacy_test/test_dropout_op.py::TestBF16DropoutOp::test_check_grad_normal` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。dropout 分解得到的 mask 为标量 shape []，与预期的 [32,64] 不符。 |
| `test/legacy_test/test_dropout_op.py::TestBF16DropoutOp::test_check_output` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。dropout 分解得到的 mask 为标量 shape []，与预期的 [32,64] 不符。 |
| `test/legacy_test/test_dropout_op.py::TestDropoutOp2::test_check_output` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。dropout 分解得到的 mask 为标量 shape []，与预期的 [32,64] 不符。 |
| `test/legacy_test/test_dropout_op.py::TestDropoutOp6::test_check_output` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。dropout 分解得到的 mask 为标量 shape []，与预期的 [32,64] 不符。 |
| `test/legacy_test/test_dropout_op.py::TestDropoutWithDeterminateSeedGenerator::test_static` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。固定种子的两次 dropout 输出未达到一致性断言：Gold 第一轮 665/1600 个元素不同，最大绝对差 1.4280633。 |
| `test/legacy_test/test_dropout_op.py::TestFP16DropoutOp2::test_check_grad_normal` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_dropout_op.py::TestFP16DropoutOp2::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_dropout_op.py::TestFP16DropoutOp::test_check_grad_normal` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_dropout_op.py::TestFP16DropoutOp::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。 |
| `test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_6_p_1_0_test_False::test_static_comp` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。dropout 分解得到的 mask 为标量 shape []，与预期的 [100000] 不符。 |
| `test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_7_p_1_0_test_False_dtype_bfp16::test_static_comp` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。dropout 分解得到的 mask 为标量 shape []，与预期的 [100000] 不符。 |

## Task 65724

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 67195

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 68432

缺陷测试 2 项、回归测试 11 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 13 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 70469

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 72800

目标与回归测试均可复现；原脚本导入 test_cummax_op.py 时找不到 op_test，未进入测试断言。

**问题位置：**测试入口缺少辅助模块路径

**与之前的差异：**与上一版结论一致。

**处理方法：**在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。

核对 2026-09-09 封存记录；本题已记录 8 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 op_test 是 Paddle 仓库里的测试辅助模块；原脚本找不到它，失败发生在导入阶段，不能说明目标功能断言已经失败。独立诊断补齐路径后已复现核心矩阵，需要让原入口也明确配置该路径并完成复验。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_cummax_op.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 目标与回归测试均可复现；原脚本导入 test_cummax_op.py 时找不到 op_test，未进入测试断言。 |

## Task 73122

原脚本四轮退出 0，三个完整节点都通过。预期 F2P 的零尺寸 multi_dot 测试在 Base 已通过两轮，所以实际是 0 F2P / 3 P2P。没有“哪个 Gold 测试失败”；未通过的是“必须存在 Base 失败、Gold 通过的案例”这一数据验收项。

**问题位置：**缺 F2P（测试本身全通过）

**与之前的差异：**与上一版结论一致。

**处理方法：**补充能稳定暴露该补丁行为差异的零尺寸输入，并核对 Base 原生库与开发者环境；不能将全通过当作 F2P 通过。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `test.legacy_test.test_multi_dot_op.TestMultiDotOp::test_check_grad` | 通过 | 通过 | 通过 | 通过 | Base、Gold 各两轮都通过。可作 P2P 回归观察；并无 Gold 失败。 |
| `test.legacy_test.test_multi_dot_op.TestMultiDotOp::test_check_output` | 通过 | 通过 | 通过 | 通过 | Base、Gold 各两轮都通过。可作 P2P 回归观察；并无 Gold 失败。 |
| `test.legacy_test.test_multi_dot_op.TestMultiDotOp_ZeroSize1::test_check_output` | 通过 | 通过 | 通过 | 通过 | Base、Gold 各两轮都通过。该预期 F2P 节点在修复前已通过，未复现目标缺陷。 |

## Task 73125

原脚本找不到 op_test；补齐路径后确认 2F/4P。另外两个 output 测试在 Base 的清理阶段报错，不能把测试主体通过算成完整通过。

**问题位置：**入口路径与测试清理问题

**与之前的差异：**与上一版结论一致。

**处理方法：**配置 op_test 路径，并修复两个 output 测试的类清理逻辑，再跑完整生命周期。

核对 2026-09-09 封存记录；本题已记录 8 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 除原入口缺少 op_test 路径外，另两个输出测试虽然执行主体通过，独立运行时在 Base 上的类清理却未完整通过，因此只确认 2F/4P。需修正入口并核对完整测试生命周期，不能把这两个未配对节点加进通过数。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_determinant_op.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 原脚本找不到 op_test；补齐路径后确认 2F/4P。另外两个 output 测试在 Base 的清理阶段报错，不能把测试主体通过算成完整通过。 |
| `test/legacy_test/test_determinant_op.py::TestDeterminantOp_ZeroSize2::test_check_output` | 清理报错 | 清理报错 | 通过 | 通过 | 测试主体之后的清理未正常完成，不能只按主体结果计通过。 |
| `test/legacy_test/test_determinant_op.py::TestSlogDeterminantOp_ZeroSize2::test_check_output` | 清理报错 | 清理报错 | 通过 | 通过 | 测试主体之后的清理未正常完成，不能只按主体结果计通过。 |

## Task 73385

原脚本找不到 op_test。诊断中的一个 Base 测试进入主体后提前以 0 退出，没有完成记录；退出码为 0 不代表该测试已通过。

**问题位置：**入口路径与提前退出问题

**与之前的差异：**与上一版结论一致。

**处理方法：**补齐测试辅助路径，并让测试框架检查每个预期测试是否正常完成，防止提前退出被误判为通过。

核对 2026-09-09 封存记录；本题已记录 8 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 一个 Base 用例进入测试主体后提前以 0 退出，却没有完成记录；只看退出码会误判为通过，这也不是普通的断言失败。除补齐辅助模块路径外，还需检查预期测试是否真正全部执行完成。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_eigvals_op.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 原脚本找不到 op_test。诊断中的一个 Base 测试进入主体后提前以 0 退出，没有完成记录；退出码为 0 不代表该测试已通过。 |

## Task 73387

目标与回归测试均可复现；原脚本导入 test_gather_tree_op.py 时找不到 op_test，未进入测试断言。

**问题位置：**测试入口缺少辅助模块路径

**与之前的差异：**与上一版结论一致。

**处理方法：**在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 原脚本在导入 op_test 时就中断，修复态也未能进入实际测试，不能用独立诊断通过来代替原包通过。需要在入口中声明辅助模块搜索路径，再确认原脚本能完整执行目标与回归测试。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_gather_tree_op.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 目标与回归测试均可复现；原脚本导入 test_gather_tree_op.py 时找不到 op_test，未进入测试断言。 |

## Task 73535

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 73569

目标与回归测试均可复现；原脚本导入 test_matmul_v2_op.py 时找不到 op_test，未进入测试断言。

**问题位置：**测试入口缺少辅助模块路径

**与之前的差异：**与上一版结论一致。

**处理方法：**在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 完整测试包运行时需要 op_test，但原入口没有提供可用的搜索路径，所以测试在收集阶段被挡住。独立诊断已复现 1F/2P，后续应修正入口配置，而不是删除依赖或缩减断言来避开报错。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_matmul_v2_op.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 目标与回归测试均可复现；原脚本导入 test_matmul_v2_op.py 时找不到 op_test，未进入测试断言。 |

## Task 73570

缺陷测试 3 项、回归测试 4 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 7 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 73582

缺陷测试 2 项、回归测试 3 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 5 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 73691

缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 6 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 73702

缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 73776

缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 73821

缺陷测试 3 项、回归测试 2 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 5 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 73850

缺陷测试 1 项、回归测试 3 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 73854

缺陷测试 2 项、回归测试 3 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 5 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 73855

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 73880

缺陷测试 4 项、回归测试 2 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 6 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 74184

实际可复现 2F/5P；原来标成 F2P 的两个测试在 Base 中也通过，应算 P2P。原脚本另因找不到 op_test 而停止。

**问题位置：**入口路径与测试角色标注

**与之前的差异：**与上一版结论一致。

**处理方法：**补齐 op_test 路径，并按实际结果修正两项测试角色；用完整入口重新验证。

核对 2026-09-09 封存记录；本题已记录 7 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 原来标为 F2P 的两个候选在 Base 中也通过，应归为 P2P，所以实际是 2F/5P。核心矩阵可以复现，待修主因仍是原入口缺少 op_test 路径，同时应校正对应的角色说明。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_linalg_pinv_op.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 实际可复现 2F/5P；原来标成 F2P 的两个测试在 Base 中也通过，应算 P2P。原脚本另因找不到 op_test 而停止。 |

## Task 74212

目标与回归测试均可复现；原脚本导入 test_multiplex_op.py 时找不到 op_test，未进入测试断言。

**问题位置：**测试入口缺少辅助模块路径

**与之前的差异：**上一版：原包通过；封存全量报告：核心通过、任务包待修。新增的是原入口导入问题，核心 F2P/P2P 仍通过。

**处理方法：**在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。

核对 2026-09-09 封存记录；本题已记录 7 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 原入口缺少 op_test 的搜索路径，导致测试在执行断言之前就停止，这与目标功能本身是否正确是两回事。独立诊断补齐路径后确认了 2F/5P，还需让原脚本在相同环境中正常完成。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_multiplex_op.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 目标与回归测试均可复现；原脚本导入 test_multiplex_op.py 时找不到 op_test，未进入测试断言。 |

## Task 74221

目标与回归测试均可复现；原脚本导入 test_fold_op.py 时找不到 op_test，未进入测试断言。

**问题位置：**测试入口缺少辅助模块路径

**与之前的差异：**上一版：验证未完成；封存全量报告：核心通过、任务包待修。已经补齐双轮测试，当前需处理的是原入口导入路径。

**处理方法：**在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 这条已补齐双轮核心诊断，不再只是历史单轮记录；但 Gold 的原脚本两轮都因找不到 op_test 而停止。需要把辅助模块路径写入原入口，再确认无需额外诊断配置也能执行完整测试。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_fold_op.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 目标与回归测试均可复现；原脚本导入 test_fold_op.py 时找不到 op_test，未进入测试断言。 |

## Task 74305

目标与回归测试均可复现；原脚本导入 test_unique.py 时找不到 op_test，未进入测试断言。

**问题位置：**测试入口缺少辅助模块路径

**与之前的差异：**上一版：验证未完成；封存全量报告：核心通过、任务包待修。已经补齐双轮测试，当前需处理的是原入口导入路径。

**处理方法：**在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。

核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 双轮诊断已确认 1F/1P，当前障碍不是缺少第二轮结果，而是原脚本仍无法导入 op_test。修复该入口配置后还要重验原脚本，不能直接把诊断结果当作原包可运行的证明。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_unique.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 目标与回归测试均可复现；原脚本导入 test_unique.py 时找不到 op_test，未进入测试断言。 |

## Task 74421

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 74439

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 74444

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 74491

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 74586

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 74594

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 75274

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 76259

Gold 补丁在指定 Base 的 paddle/fluid/inference/api/helper.h:15 无法应用；先测试补丁后 Gold、先 Gold 后测试补丁均失败。2026-09-11 用独立 index 重跑同样复现。Base/Gold 测试双轮均未开始，F2P/P2P 不适用。

**问题位置：**Gold 补丁无法应用，未运行测试

**与之前的差异：**与上一版结论一致。

**处理方法：**按 exact Base fcf3b100085b10efed4c1fb8880b1df1fd5241d6 重新生成可应用的 Gold 补丁，再进行编译和四轮测试。 本题需要 Windows CPU / MSVC x64，Linux 运行不能替代。

2026-09-11 重新检查两种补丁应用顺序，均复现与封存记录相同的应用失败。没有执行测试，四轮栏保留未执行。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `参考补丁应用检查（测试开始前）` | 未执行 | 未执行 | 未执行 | 未执行 | Gold 补丁在指定 Base 的 paddle/fluid/inference/api/helper.h:15 无法应用；先测试补丁后 Gold、先 Gold 后测试补丁均失败。2026-09-11 用独立 index 重跑同样复现。Base/Gold 测试双轮均未开始，F2P/P2P 不适用。 |

## Task 76522

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 76736

缺陷测试 3 项、回归测试 7 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 10 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 76873

原脚本四轮退出 4：symbolic 测试需要的 utils.apply_to_static 被同名 legacy_test/utils.py 遮蔽。分目录诊断仍有 8 个 Gold 失败：7 个 symbolic 节点缺 sym_shape_str，加载的 CPU 原生库报告 CINN=False；另 SELU inplace 测试 1/750 元素超过精度阈值。其余为 9 F2P / 14 P2P。

**问题位置：**入口模块名冲突；CINN 环境未满足；数值精度断言

**与之前的差异：**与上一版结论一致。

**处理方法：**隔离 legacy 与 symbolic 的 utils 导入；用启用 CINN 的对应 Base/Gold 构建验证 symbolic 节点；对 SELU 精度差异单独复现，确认误差来源后再决定补丁或测试容差是否需要调整。

核对 2026-09-09 封存记录；本题已记录 31 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `test.ir.pir.cinn.symbolic.test_infer_sym_shape_multinary_op.CELUOpInferSymbolicShapeTest::test_eval_symbolic` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。 |
| `test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.HardSigmoidInferSymbolicShapeTest::test_eval_symbolic` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。 |
| `test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.MishOpInferSymbolicShapeTest::test_eval_symbolic` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。 |
| `test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.RRELUOpInferSymbolicShapeTest::test_eval_symbolic` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。 |
| `test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SELUOpInferSymbolicShapeTest::test_eval_symbolic` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。 |
| `test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SumOpInferSymbolicShapeTest::test_eval_symbolic` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。 |
| `test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SwishOpInferSymbolicShapeTest::test_eval_symbolic` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。 |
| `test.legacy_test.test_selu_op.TestSELUOpClass_Inplace::test_cases` | 失败 | 失败 | 失败 | 失败 | Base、Gold 各两轮均失败。数值断言 1/750 个元素超过误差限，最大绝对误差 4.172325e-07、相对误差 2.8709233e-05。 |

## Task 77064

目标与回归测试均可复现；原脚本导入 test_allclose_op.py 时找不到 op_test，未进入测试断言。

**问题位置：**测试入口缺少辅助模块路径

**与之前的差异：**上一版：原包通过；封存全量报告：核心通过、任务包待修。新增的是原入口导入问题，核心 F2P/P2P 仍通过。

**处理方法：**在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。

核对 2026-09-09 封存记录；本题已记录 23 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 独立诊断能够验证功能修复和回归测试，但原脚本在加载测试辅助模块 op_test 时就失败。需明确配置辅助模块所在路径，并以原入口重新执行，才能从核心通过进入原包可直接使用。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_allclose_op.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 目标与回归测试均可复现；原脚本导入 test_allclose_op.py 时找不到 op_test，未进入测试断言。 |

## Task 77078

缺陷测试 3 项、回归测试 33 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 36 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 77150

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 77495

Gold 在 python/paddle/nn/functional/pooling.py:573 与 python/paddle/nn/layer/pooling.py:629 不匹配，且 test/legacy_test/test_max_pool_dilation.py 在 Base index 中不存在。两种应用顺序同样失败，2026-09-11 独立 index 重跑复现。没有 Base/Gold 测试双轮结果。

**问题位置：**Gold 补丁无法应用，未运行测试

**与之前的差异：**与上一版结论一致。

**处理方法：**按 exact Base 0604f65af5397848b6803c2bf577b9b82b8d8e08 重新生成补丁，补齐新测试文件，再执行四轮。

2026-09-11 重新检查两种补丁应用顺序，均复现与封存记录相同的应用失败。没有执行测试，四轮栏保留未执行。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `参考补丁应用检查（测试开始前）` | 未执行 | 未执行 | 未执行 | 未执行 | Gold 在 python/paddle/nn/functional/pooling.py:573 与 python/paddle/nn/layer/pooling.py:629 不匹配，且 test/legacy_test/test_max_pool_dilation.py 在 Base index 中不存在。两种应用顺序同样失败，2026-09-11 独立 index 重跑复现。没有 Base/Gold 测试双轮结果。 |

## Task 77749

缺陷测试 21 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 22 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78048

缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 6 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78082

缺陷测试 9 项、回归测试 23 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 32 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78104

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78138

缺陷测试 2 项、回归测试 15 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 19 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78238

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78301

缺陷测试 13 项、回归测试 21 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 34 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78342

缺陷测试 7 项、回归测试 24 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 31 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78440

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78441

Gold 的 31 项测试均通过；7 个清理错误发生在 Base，不能说修复后仍有 7 项失败。部分空梯度测试只调用 API，没有检查梯度值。

**问题位置：**Base 测试清理与断言范围

**与之前的差异：**上一版：原包通过；封存全量报告：核心通过、任务包待修。变化来自测试清理和断言检查，Gold 测试仍全部通过。

**处理方法：**整理 Base 缺少 API 时的清理逻辑，并为梯度测试补充实际断言或明确只检查 API 可调用。

核对 2026-09-09 封存记录；本题已记录 31 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 Gold 的 31 个节点已通过，7 个附带清理错误发生在 Base，不能说成 Gold 仍有 7 个失败。另有空梯度测试没有实际梯度断言，目前只能体现 API 从无到有；需整理清理逻辑，并补充断言或明确重分类。

## Task 78452

缺陷测试 16 项、回归测试 27 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 43 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78522

缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78570

缺陷测试 6 项、回归测试 3 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 9 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78823

README 要求 CUDA 或 XPU 设备，当前仅 CPU。Base 两轮在导入 _to_pinned_place 时失败，Gold 原脚本两轮退出 0；Gold 中三个 CUDA pinned 案例均跳过，CPU 上通过的四个新 API 案例不能证明 pinned 分配在设备上有效。其余 143 个节点观察为 P→P（其中设备条件空返回需按实际覆盖解释）。

**问题位置：**必需 CUDA/XPU 验证缺失；Base 新 API 导入未进入测试体

**与之前的差异：**与上一版结论一致。

**处理方法：**在 CUDA 或 XPU 构建/设备补跑 pinned allocation、CPU→pinned 和设备 place 转换；避免将 Base 模块收集失败或 CPU 空返回当作逐测试 F2P/P2P。

CPU 子集的原始四轮结果已与日志核对；所需硬件未执行。此表的通过状态不能当作整题验收通过或自动累加为有效回归数。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `必需硬件分支：CUDA 或 XPU（至少一种）` | 未执行 | 未执行 | 未执行 | 未执行 | 在 CUDA 或 XPU 构建/设备补跑 pinned allocation、CPU→pinned 和设备 place 转换；避免将 Base 模块收集失败或 CPU 空返回当作逐测试 F2P/P2P。 |
| `test/legacy_test/test_randperm_op.py::TestRandpermBF16Op::test_check_output` | 跳过 | 跳过 | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_already_cuda_pinned_returns_same_object` | None | None | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cpu_place_on_cuda_build` | None | None | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| `test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cuda_place_to_cuda_pinned` | None | None | 跳过 | 跳过 | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |

## Task 78911

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78922

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 78932

缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**上一版：核心通过、任务包待修；封存全量报告：原包通过。最新任务已修正 alias 身份断言，当前通过。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 6 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 79035

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 79057

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 79161

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 79167

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 79197

目标与回归测试均可复现；原脚本导入 test_lr_scheduler.py 时找不到 op_test，未进入测试断言。

**问题位置：**测试入口缺少辅助模块路径

**与之前的差异：**与上一版结论一致。

**处理方法：**在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。

核对 2026-09-09 封存记录；本题已记录 7 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 当前通过结果来自精确 Python 源码配合兼容原生载体的诊断；原脚本两轮仍因找不到 op_test 中断。需固化这条运行环境并修正入口路径，不能把兼容诊断直接扩展成原脚本或精确原生环境均已通过。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_lr_scheduler.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 目标与回归测试均可复现；原脚本导入 test_lr_scheduler.py 时找不到 op_test，未进入测试断言。 |

## Task 79268

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 79275

缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 79276

目标与回归测试均可复现；原脚本导入 test_add_n_op.py 时找不到 op_test，未进入测试断言。

**问题位置：**测试入口缺少辅助模块路径

**与之前的差异：**与上一版结论一致。

**处理方法：**在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 本题已有精确原生环境中的核心配对证据，但原脚本仍卡在 op_test 导入，编译成功并不能解决这个入口问题。需补齐辅助模块搜索路径，再用完整原脚本确认目标与回归测试都实际执行。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `tests/test.sh → test_add_n_op.py` | 导入报错 | 导入报错 | 导入报错 | 导入报错 | 目标与回归测试均可复现；原脚本导入 test_add_n_op.py 时找不到 op_test，未进入测试断言。 |

## Task 79310

缺陷测试 4 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 5 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 79321

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 79353

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 79369

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## Task 79386

原脚本四轮退出 0，三个测试在 Base/Gold 各两轮均通过。专门验证 uint64.max 的测试在 Base 已通过，因此实际 0 F2P / 3 P2P。不能据此声称补丁失败；当前声明的 Linux CPU 环境没有复现目标缺陷。

**问题位置：**缺 F2P（当前 Linux CPU 测试全通过）

**与之前的差异：**上一版：验证未完成；封存全量报告：验证未通过。

**处理方法：**与开发者通过时的平台、编译器、原生库和触发输入对齐；在能够暴露 uint64 边界问题的环境建立失败案例，并将前提写进任务说明。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

| 完整测试名/检查项 | Base 1 | Base 2 | Gold 1 | Gold 2 | 原因 |
| --- | --- | --- | --- | --- | --- |
| `test.legacy_test.test_iinfo_and_finfo.TestIInfoUInt64Boundary::test_int64_signed_boundaries_remain_unchanged` | 通过 | 通过 | 通过 | 通过 | Base、Gold 各两轮都通过。可作 P2P 回归观察；并无 Gold 失败。 |
| `test.legacy_test.test_iinfo_and_finfo.TestIInfoUInt64Boundary::test_neighboring_unsigned_metadata_remains_unchanged` | 通过 | 通过 | 通过 | 通过 | Base、Gold 各两轮都通过。可作 P2P 回归观察；并无 Gold 失败。 |
| `test.legacy_test.test_iinfo_and_finfo.TestIInfoUInt64Boundary::test_uint64_max_preserves_unsigned_boundary` | 通过 | 通过 | 通过 | 通过 | Base、Gold 各两轮都通过。该预期 F2P 节点在修复前已通过，未复现目标缺陷。 |

## Task 79633

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

**问题位置：**验证通过（限记录的运行环境）

**与之前的差异：**与上一版结论一致。

**处理方法：**按记录的环境和测试入口使用。

核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。

## 证据版本

原 105 条报告 SHA-256：`7f7a9ee8f3d16116b2982cf60ec74e7bd1a28c2181c78c93f89e374cf402da9e`。原报告和历史文件保持字节不变。

3 条专项复验报告 SHA-256：`ccb18c90ac84ed744d809c151ee88b5c2d17e68f096a442c4706708f1d8d1a73`。本次仅采纳 59348 的完整范围通过修正；对 57827/59021 保留完整范围未通过。

公开发布资源清单：[verification-audit-20260911.sha256](verification-audit-20260911.sha256)。当前状态由 [acceptance-recheck-20260911.js](assets/acceptance-recheck-20260911.js) 明确修订，逐项解释见 [verification-audit-20260911.js](assets/verification-audit-20260911.js)。
