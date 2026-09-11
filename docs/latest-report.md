# SWE-Paddle 最新验证情况

结论核对日期：2026-09-11。105 条完整任务；另 4 条仅有提案，不计入统计。

86 条原包可用，7 条核心通过但任务包待修，8 条验证未通过，4 条环境不满足、未完成。

F2P：同一测试修复前失败、修复后通过。P2P：修复前后都通过的回归测试。只计实际执行、有意义且配对完整的节点。

各题通过结论限于注明的运行方式。核对日期不代表全部任务同日重新执行；确认方法见各题。

<a id="task-18687"></a>
## #18687 · Parameter-server launch

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用选定版本的 Python 源码，按任务约定的入口和依赖运行。
- 有效 F2P / P2P：3 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-18687)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-27247"></a>
## #27247 · DataLoader spawn worker serialization

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 4 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用选定版本的 Python 源码，按任务约定的入口和依赖运行。
- 有效 F2P / P2P：2 / 4。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-27247)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-33369"></a>
## #33369 · Fleet elastic fault tolerance

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用选定版本的 Python 源码，按任务约定的入口和依赖运行。
- 有效 F2P / P2P：3 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-33369)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-36684"></a>
## #36684 · Fleet elastic scale up / down

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 8 项、回归测试 2 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用选定版本的 Python 源码，按任务约定的入口和依赖运行。
- 有效 F2P / P2P：8 / 2。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-36684)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-41202"></a>
## #41202 · DataLoader reader AutoTune

**核心通过 · 任务包待修｜问题来源：任务数据**

DataLoader 自动调节进程数的测试启动命令有问题：收集测试时重复加载 Paddle，尚未执行断言。

- 哪里有问题：DataLoader 自动调节进程数的测试启动命令有问题：收集测试时重复加载 Paddle，尚未执行断言。
- 为什么：test.sh 用 pytest 从源码路径收集这份旧版测试，导致同一份 Paddle 被按 paddle 和 python.paddle 两个名字加载，原生模块重复初始化。切换 pytest 导入模式仍失败；直接执行测试文件自带入口则通过。
- 怎么处理：将 test.sh 改为按顺序直接执行测试文件：python python/paddle/fluid/tests/unittests/test_dataloader_autotune.py。保留测试内容和完整范围。
- 怎么确认：原入口复现失败；只改启动方式，原 3 项测试全部两轮通过。断言、测试文件和参考补丁均未修改。核心确认 2F/1P。
- 运行方式：从 Paddle 源码根目录运行，保证该 task 的 Paddle Python 包和原生运行库可导入。；使用每个测试文件自带的 unittest 入口，避免 pytest 再按 python.paddle 导入同一份库。
- 有效 F2P / P2P：2 / 1。

涉及的测试或文件：

- `python/paddle/fluid/tests/unittests/test_dataloader_autotune.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-41202)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-50086"></a>
## #50086 · ConditionalBlock scope validation

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定编译、运行轻量 C++ 测试，不代表完整 Paddle 构建通过。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-50086)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-52948"></a>
## #52948 · Static / dy2static Tensor.register_hook

**核心通过 · 任务包待修｜问题来源：任务数据**

静态图和动转静梯度 hook的测试启动命令有问题：收集测试时重复加载 Paddle，尚未执行断言。

- 哪里有问题：静态图和动转静梯度 hook的测试启动命令有问题：收集测试时重复加载 Paddle，尚未执行断言。
- 为什么：test.sh 用 pytest 从源码路径收集这份旧版测试，导致同一份 Paddle 被按 paddle 和 python.paddle 两个名字加载，原生模块重复初始化。切换 pytest 导入模式仍失败；直接执行测试文件自带入口则通过。
- 怎么处理：将 test.sh 改为按顺序直接执行测试文件：python test/dygraph_to_static/test_tensor_hook.py；python python/paddle/fluid/tests/unittests/test_tensor_register_hook.py。保留测试内容和完整范围。
- 怎么确认：原入口复现失败；只改启动方式，原 19 项测试全部两轮通过。断言、测试文件和参考补丁均未修改。核心确认 5F/14P。
- 运行方式：从 Paddle 源码根目录运行，保证该 task 的 Paddle Python 包和原生运行库可导入。；使用每个测试文件自带的 unittest 入口，避免 pytest 再按 python.paddle 导入同一份库。
- 有效 F2P / P2P：5 / 14。

涉及的测试或文件：

- `test/dygraph_to_static/test_tensor_hook.py`
- `python/paddle/fluid/tests/unittests/test_tensor_register_hook.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-52948)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-53534"></a>
## #53534 · to_tensor compatibility with NumPy

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 2。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-53534)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-54435"></a>
## #54435 · Distributed launch numeric IP ordering

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 3 项、回归测试 2 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用选定版本的 Python 源码，按任务约定的入口和依赖运行。
- 有效 F2P / P2P：3 / 2。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-54435)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-54625"></a>
## #54625 · Pipeline output release state

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-54625)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-55890"></a>
## #55890 · VPP + sharding overlap scheduling

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-55890)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-56135"></a>
## #56135 · BMM dynamic-shape infermeta

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定编译、运行轻量 C++ 测试，不代表完整 Paddle 构建通过。
- 有效 F2P / P2P：2 / 2。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-56135)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-56470"></a>
## #56470 · Upsampling accepts integer size

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-56470)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-56705"></a>
## #56705 · Model-parallel memory leak

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 2。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-56705)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-57741"></a>
## #57741 · PIR memcpy

**验证未通过｜问题来源：任务数据**

脚本写错测试名、漏了运行模式，还缺一条独立 P2P。

- 哪里有问题：原入口找不到 TestTensorCopyToCudaOnDefaultCPU、TestTensorCopyToCudaOnDefaultGPU；实际名称中的 CUDA 必须全部大写。 默认运行方式下 CPU 测试在修复前也通过，无法验证修复；3 项 GPU 测试属于题目允许的可选跳过。 改正名称并设置 ENABLE_FALL_BACK=False 后，CPU 测试才复现缺少 pd_op.memcpy；现有任务只有这 1 个 CPU 测试，没有独立 P2P。
- 为什么：任务要测的是旧静态图转成新执行图时的内存复制。默认的另一种转换方式绕过了这个缺陷，测试虽然执行了，未经过出错的代码。 新控制保持 Base/Gold 原生库及测试断言不变，仅改变运行方式。Base 两轮明确报缺 pd_op.memcpy，Gold 两轮通过，说明不是机器缺 CPU 能力。
- 怎么处理：修正两个 CUDA 类名，并在测试入口固定 ENABLE_FALL_BACK=False。 补选至少一个修复前后都能真正执行并通过的 CPU 回归测试，再按完整入口复验。
- 怎么确认：核对完整测试清单，并只调整运行方式做修复前后各两轮对照：CPU 测试稳定暴露缺少 memcpy 算子的问题、修复后通过；3 条可选 GPU 测试跳过，未找到独立 P2P。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：1 / 0（仅已确认部分，不代表整题通过）。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-57741)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-57827"></a>
## #57827 · PIR fused_elemwise_add_activation

**验证未通过｜问题来源：任务数据**

入口误收集辅助函数，还测到了旧版池化的数据排列错误。

- 哪里有问题：两个辅助函数被误当作测试，报缺少参数；最大池化的反向计算在修复前后都会退出。
- 为什么：脚本把两个以 test_ 开头的辅助函数当成了测试。另一个最大池化测试在前向和反向使用不同的数据排列方式，但底层库要求两边一致，因此拒绝计算。这是旧版 Paddle 已有的调用问题，本题补丁没有处理它；不是机器缺硬件。
- 怎么处理：修正入口的测试收集方式；明确本题验收范围，另行处理这个旧池化问题后再完整复验。已通过的两个目标测试不能替代整题。
- 怎么确认：记录实际失败参数，并用同一个 oneDNN 3.2.1 做最小对照：只对齐前后数据排列，原先报错的计算准备步骤就能通过；限制 CPU 指令集后结果相同。源码也要求排列一致，确认是旧版调用问题。整题仍未通过。
- 运行方式：使用记录中的精确 CPU Paddle 运行库。该项验证的是 CPU 加速的最大池化反向计算，不需要 GPU。
- 有效 F2P / P2P：2 / 3（仅已确认部分，不代表整题通过）。

涉及的测试或文件：

- `test/dygraph_to_static/test_build_strategy.py::test_ast_only`
- `test/dygraph_to_static/test_build_strategy.py::test_legacy_and_pir`
- `test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_in_static_mode_mkldnn__ast_legacy_ir`
- `test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_in_static_mode_mkldnn__ast_pir_exe`
- `test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_resnet__ast_pir_exe`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-57827)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-58219"></a>
## #58219 · PIR floor_divide / remainder operations

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 4 项、回归测试 4 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：4 / 4。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-58219)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-58323"></a>
## #58323 · atleast_1d / atleast_2d / atleast_3d APIs

**核心通过 · 任务包待修｜问题来源：任务数据**

测试加载和模式设置有误；调整测试准备后，完整范围通过。

- 哪里有问题：41 条新接口测试在修复前无法启动；修复后另有一条 Tensor 方法测试用错了运行模式。
- 为什么：测试文件一加载就查询尚不存在的新接口，导致整组测试退出。另一条测试在创建输入后才切回动态图，输入类型因此不对。
- 怎么处理：把新接口查询放到具体测试执行时，并在创建输入前切回动态图；保留全部测试和断言。
- 怎么确认：在临时测试副本中只调整加载时机和模式准备，完整两个测试文件在修复前后各跑两轮：41 条 F2P、48 条 P2P，另 2 条按 CPU 条件跳过。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：41 / 48。

涉及的测试或文件：

- `test/legacy_test/test_atleast_nd.py::<module>`
- `test/legacy_test/test_atleast_nd.py::TestAtleastAsTensorMethod::test_as_tensor_method`
- `tests/test.sh`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-58323)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-58343"></a>
## #58343 · PIR logical, bitwise and scalar-power methods

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 6 项、回归测试 9 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：6 / 9。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-58343)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-58917"></a>
## #58917 · tensor_split / hsplit / dsplit APIs

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 15 项、回归测试 3 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：15 / 3。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-58917)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-59021"></a>
## #59021 · PIR test_len

**验证未通过｜问题来源：任务数据**

入口漏了运行设置；还需分开验证两种执行模式。

- 哪里有问题：TestLenWithTensorArray::test_len__ast_legacy_ir 默认进入不受支持的新图转换路径而崩溃。 TestMNIST 的两个融合测试，以及 TestFuseActElewiseAddInplaceGradPass::test_fuse_act_add_grad_pass_cpu，没有先开启静态模式而失败。 3 个 TestLenWithSelectedRows 测试在原入口未开启 PIR 执行器，修复前后都通过，缺 F2P 信号。
- 为什么：指定 Base 的 CMakeLists.txt 明确把 test_len 加入 DISABLE_PIR_PT_MODES，并设置 FLAGS_enable_pir_with_pt_in_dy2st=0。task 的 pytest 入口漏抄了这个前提。 融合文件把 paddle.enable_static() 写在直接运行文件才会执行的入口中，改用 pytest 导入时没有执行。 只给 SelectedRows 开启 PIR 执行器就能重现并验证参考修复；对整个 test_len 强开 PIR 则会再次导致 TensorArray 崩溃，所以不能用一个全局开关混跑两种测试。
- 怎么处理：test_len 按上游要求关闭 PIR 自动转换，保留全部 9 项回归；融合测试先开启静态模式。 为 SelectedRows 单独补一组开启 PIR 执行器的验证入口，保留完整原有回归范围后再验收。
- 怎么确认：按上游设置完整跑 13 个节点，修复前后各两轮均通过，其中 1 条在 CPU 上直接返回、不计回归。另将 3 条 SelectedRows 单独用 PIR 执行器运行，可复现修复前失败、修复后通过。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：3 / 12（仅已确认部分，不代表整题通过）。

涉及的测试或文件：

- `test.legacy_test.test_fuse_elewise_add_act_pass.TestMNIST::test_batchnorm_fc_with_fuse_op`
- `test.legacy_test.test_fuse_elewise_add_act_pass.TestMNIST::test_simple_fc_with_fuse_op`
- `test.legacy_test.test_fuse_elewise_add_act_pass.TestFuseActElewiseAddInplaceGradPass::test_fuse_act_add_grad_pass_cpu`
- `test.dygraph_to_static.test_len.TestLenWithTensorArray::test_len__ast_legacy_ir`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59021)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-59127"></a>
## #59127 · column_stack / row_stack / dstack / hstack / vstack APIs

**通过 · 原包可用｜问题来源：验证程序配置**

stack 系列拼接接口测试已通过。

- 哪里有问题：stack 系列拼接接口测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 white_list（测试用的白名单），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 84 项修复前失败后通过、42 项修复前后都通过。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用与该时期 API 兼容的 CPU Paddle 运行库；本次沿用已核对的 Python 源码覆盖方式。
- 有效 F2P / P2P：84 / 42。

涉及的测试或文件：

- `test/legacy_test/test_stack_op.py`
- `test/legacy_test/test_stack_extension_api.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59127)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-59348"></a>
## #59348 · PIR sequence_mask

**核心通过 · 任务包待修｜问题来源：任务数据**

15 个测试已通过；任务入口仍需补静态模式初始化。

- 哪里有问题：原入口中的 TestSequenceMaskOpError::test_errors 没在正确模式下执行，误报失败。
- 为什么：测试文件把 paddle.enable_static() 放在直接运行文件的入口里，pytest 导入时跳过了它。 同一份测试、同一 Base/Gold 库，仅补上静态模式后，全部 15 项在修复后通过；其中 13 项验证目标修复，2 项验证原有行为。
- 怎么处理：在 pytest 启动前调用 paddle.enable_static()，或采用保留此初始化的测试入口。
- 怎么确认：同一份完整测试、同一版本运行库，仅补静态初始化，修复前后各两轮确认 13 条 F2P、2 条 P2P；修复后的 15 条全部通过。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：13 / 2。

涉及的测试或文件：

- `test.sequence.test_sequence_mask.SequenceMaskTestBase::test_check_output`
- `test.sequence.test_sequence_mask.SequenceMaskTest1::test_check_output`
- `test.sequence.test_sequence_mask.SequenceMaskTest2::test_check_output`
- `test.sequence.test_sequence_mask.SequenceMaskTest3::test_check_output`
- `test.sequence.test_sequence_mask.SequenceMaskTest4::test_check_output`
- `test.sequence.test_sequence_mask.SequenceMaskTest5::test_check_output`
- `test.sequence.test_sequence_mask.SequenceMaskTest6::test_check_output`
- `test.sequence.test_sequence_mask.SequenceMaskTestBase_tensor_attr::test_check_output`
- `test.sequence.test_sequence_mask.SequenceMaskTest1_tensor_attr::test_check_output`
- `test.sequence.test_sequence_mask.SequenceMaskTest2_tensor_attr::test_check_output`
- `test.sequence.test_sequence_mask.SequenceMaskTest3_tensor_attr::test_check_output`
- `test.sequence.test_sequence_mask.SequenceMaskTest4_tensor_attr::test_check_output`
- `test.sequence.test_sequence_mask.SequenceMaskTest5_tensor_attr::test_check_output`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59348)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-59374"></a>
## #59374 · Tensor apply / apply_ API

**验证未通过｜问题来源：任务数据**

5 条缺陷测试通过，但没有选入独立的 P2P。

- 哪里有问题：TestTensorApplyAPI 的 test_dtype、test_dygraph、test_error、test_to_static，以及 TestDygraphTensorApplyInplace::test_inplace_api 都是 F2P。 唯一剩下的 test_on_gpu 在 CPU 机器上按题目设计跳过，不能充当 P2P。
- 为什么：这些测试全部调用本题新加入的 apply/apply_，所以未修复版本本来就都会失败；测试清单没有覆盖一个不依赖新 API 的既有功能。 5 项在 Gold 上都通过，当前没有证据表明补丁或机器有问题。缺的是数据包的回归测试选择。
- 怎么处理：补选至少一个与 Tensor 既有行为有关、修复前后都能执行并通过的 CPU 测试，加入 test.sh 后完整复验。
- 怎么确认：核对原脚本选中的全部 6 个节点和双轮日志：5 个 CPU 测试修复前失败、修复后通过；1 个 GPU 测试按约定跳过，没有可计数的 P2P。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：5 / 0（仅已确认部分，不代表整题通过）。

涉及的测试或文件：

- `test.legacy_test.test_apply.TestTensorApplyAPI::test_dtype`
- `test.legacy_test.test_apply.TestTensorApplyAPI::test_dygraph`
- `test.legacy_test.test_apply.TestTensorApplyAPI::test_error`
- `test.legacy_test.test_apply.TestTensorApplyAPI::test_on_gpu`
- `test.legacy_test.test_apply.TestTensorApplyAPI::test_to_static`
- `test.legacy_test.test_inplace.TestDygraphTensorApplyInplace::test_inplace_api`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59374)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-59383"></a>
## #59383 · masked_scatter API

**通过 · 原包可用｜问题来源：验证程序配置**

masked_scatter 和原地操作测试已通过。

- 哪里有问题：masked_scatter 和原地操作测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 white_list（测试用的白名单），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 28 项修复前失败后通过、680 项修复前后都通过。另有 16 项按测试自身条件在 CPU 上跳过，未计入通过。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用与该时期 API 兼容的 CPU Paddle 运行库；本次沿用已核对的 Python 源码覆盖方式。
- 有效 F2P / P2P：28 / 680。

涉及的测试或文件：

- `test/legacy_test/test_masked_scatter.py`
- `test/legacy_test/test_inplace.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59383)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-59715"></a>
## #59715 · matrix_exp API

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 56 项、回归测试 52 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：56 / 52。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59715)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-59847"></a>
## #59847 · FractionalMaxPool2D / 3D

**环境不满足 · 未完成｜问题来源：机器环境**

CPU 部分已验证通过；机器没有题目必需的 CUDA 设备，所以 GPU 部分还没验证。

- 哪里有问题：fractional_max_pool2d/3d 的 32 个 FP16/BF16 测试被跳过，以及相同功能的 GPU 执行分支。
- 为什么：题目明确要求 CPU + GPU。当前机器没有 NVIDIA 设备或驱动接口，无法运行这些 CUDA 核函数。 CPU 子集观察到 36 项目标修复、7 项回归通过，没有发现 Gold 的 CPU 测试失败。
- 怎么处理：在符合题目要求的设备上，保持相同 Base、参考补丁和测试范围，各跑两轮；保留已完成的 CPU 结果。
- 怎么确认：检查机器设备和任务硬件要求，并核对 CPU 双轮记录。CPU 已有通过结果，但当前没有 NVIDIA 设备，GPU 节点确实未执行。
- 运行方式：CUDA设备与匹配的CUDA Paddle构建，FP16/BF16能力按节点要求确认
- 有效 F2P / P2P：未完成配对。

涉及的测试或文件：

- `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_BF16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_BF16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_FP16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_FP16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_BF16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_BF16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_FP16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_FP16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_BF16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_BF16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_FP16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_FP16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_BF16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_BF16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_FP16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_FP16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_BF16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_BF16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_FP16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_FP16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_BF16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_BF16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_FP16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_FP16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_output`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_grad`
- `test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_output`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59847)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-59909"></a>
## #59909 · Parallel mode selection under sharding

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：1 / 2。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59909)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-59973"></a>
## #59973 · slice_scatter API

**核心通过 · 任务包待修｜问题来源：任务数据**

两个静态测试漏了初始化；补齐后，完整范围通过。

- 哪里有问题：TestScatterAPI::test_static 和 TestScatterInplaceAPI::test_static 在创建输入时就报错。
- 为什么：脚本用 pytest 启动，不会执行文件末尾的静态模式初始化；两个测试自己也没打开静态模式，因此还没测试 scatter 就失败了。
- 怎么处理：在这两个测试类的准备步骤中调用 paddle.enable_static()，不要依赖文件末尾的启动代码。
- 怎么确认：只补静态模式准备，不改断言或测试范围；修复前后各跑两轮，确认 47 条 F2P、25 条有效 P2P。另 2 条在 CPU 上直接返回、29 条跳过，均不计数。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：47 / 25。

涉及的测试或文件：

- `test/legacy_test/test_scatter_op.py::TestScatterAPI::test_static`
- `test/legacy_test/test_scatter_op.py::TestScatterInplaceAPI::test_static`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-59973)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-60417"></a>
## #60417 · Auto-tuner resume from CSV history

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：3 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-60417)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-60808"></a>
## #60808 · broadcast_to with zero dimensions

**核心通过 · 任务包待修｜问题来源：任务数据**

测试通过；环境说明把一条回归测试错写成了缺陷测试。

- 哪里有问题：没有修复后仍失败的测试。问题是 environment/README.md 说有两条 F2P，实际只有一条。
- 为什么：一维 shape Tensor 的 expand 测试在修复前就已通过，它检查的是原有功能，应算 P2P。任务主 README 的分类是正确的，但环境说明与它矛盾。
- 怎么处理：把 environment/README.md 的运行步骤和预期表改为 1 条 F2P、2 条 P2P；不需要改代码、测试断言或机器配置。
- 怎么确认：核对原脚本的修复前后各两轮结果：零维 shape 测试由失败变通过，另外两条始终通过，修复后完整脚本两轮都成功。
- 运行方式：使用记录中的精确 Base/Gold CPU 运行时；测试加载选定版本的 broadcast_to/expand 函数，任务也允许免重编译的验证路线。
- 有效 F2P / P2P：1 / 2。

涉及的测试或文件：

- `test/legacy_test/test_broadcast_to_zero_dim_shape.py::test_expand_accepts_multi_element_1d_shape_tensor`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-60808)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-64320"></a>
## #64320 · sparse.mask_as API

**环境不满足 · 未完成｜问题来源：机器环境**

CPU 的稀疏张量测试已通过；机器缺少题目要求的 CUDA 设备，GPU 分支还没跑。

- 哪里有问题：sparse.mask_as 的 COO 1d/2d/3d/4d、CSR 2d/3d 及相关稀疏运算的 GPU 分支。
- 为什么：原题要求 CPU + GPU。当前只能运行 CPU 路径，GPU 条件分支没有执行。 6 项 CPU 目标测试已由失败变为通过；27 项表面 P2P 中有 GPU 条件空返回，不能把这些空返回当成有效回归覆盖。
- 怎么处理：在符合题目要求的设备上，保持相同 Base、参考补丁和测试范围，各跑两轮；保留已完成的 CPU 结果。
- 怎么确认：核对任务要求、设备清单和 CPU 双轮日志。6 个 CPU 缺陷测试由失败变通过；部分设备条件分支直接返回，不能据此声称 GPU 通过。
- 运行方式：CUDA设备与匹配的CUDA Paddle构建
- 有效 F2P / P2P：未完成配对。

涉及的测试或文件：

- `test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCoo`
- `test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCsr`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-64320)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-64519"></a>
## #64519 · cholesky_inverse API

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 16 项、回归测试 9 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：16 / 9。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-64519)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-64881"></a>
## #64881 · FeatureAlphaDropout API

**验证未通过｜问题来源：任务数据**

测试范围包含 7 项原本就坏的 dropout 功能，整题仍未通过。

- 哪里有问题：6 项检查发现随机掩码的形状不对；另 1 项设了相同随机种子却得到不同结果。
- 为什么：丢弃比例为 100% 时，旧代码给出一个零值，测试要的是与输入一样大的掩码。随机种子测试则没有把指定种子传进实际运算。这些问题在修复前已存在，也不在本题补丁修改范围内。
- 怎么处理：明确任务应覆盖的功能，将无关旧缺陷另行处理；这些失败项不能算 P2P，也不能直接删掉后宣称原完整测试通过。
- 怎么确认：用精确版本重跑完整两个测试文件，并检查运行开关；7 项在修复前后仍失败。小数组单独实验也复现掩码变成标量、指定种子未传入，排除了验证器强开模式或缺 GPU 的解释。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：6 / 92（仅已确认部分，不代表整题通过）。

涉及的测试或文件：

- `test/legacy_test/test_dropout_op.py::TestBF16DropoutOp::test_check_grad_normal`
- `test/legacy_test/test_dropout_op.py::TestBF16DropoutOp::test_check_output`
- `test/legacy_test/test_dropout_op.py::TestDropoutOp2::test_check_output`
- `test/legacy_test/test_dropout_op.py::TestDropoutOp6::test_check_output`
- `test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_6_p_1_0_test_False::test_static_comp`
- `test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_7_p_1_0_test_False_dtype_bfp16::test_static_comp`
- `test/legacy_test/test_dropout_op.py::TestDropoutWithDeterminateSeedGenerator::test_static`
- `tests/test.sh`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-64881)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-65724"></a>
## #65724 · DataLoader persistent_workers

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-65724)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-67195"></a>
## #67195 · Pipeline NaN checker

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-67195)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-68432"></a>
## #68432 · Sparse complex multiply / divide

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 11 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：2 / 11。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-68432)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-70469"></a>
## #70469 · Fused dropout-add fallback

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-70469)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-72800"></a>
## #72800 · cummin / cummax zero-size Tensor

**通过 · 原包可用｜问题来源：验证程序配置**

cummin/cummax 的空张量测试已通过。

- 哪里有问题：cummin/cummax 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 4 项修复前失败后通过、4 项修复前后都通过。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。
- 有效 F2P / P2P：4 / 4。

涉及的测试或文件：

- `test/legacy_test/test_cummax_op.py`
- `test/legacy_test/test_cummin_op.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-72800)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73122"></a>
## #73122 · multi_dot zero-size Tensor

**通过 · 原包可用｜问题来源：验证程序配置**

固定为任务默认的 MKL 数学库后，完整原脚本通过。

- 哪里有问题：OpenBLAS 构建下，TestMultiDotOp_ZeroSize1::test_check_output 在修复前就通过，掩盖了缺陷。 采用题目默认 MKL 后，原 test.sh 的全部 3 项已完成双轮验证，没有剩余失败项。
- 为什么：README 的构建命令在本机默认开启 MKL；原验证却关闭 MKL，改用 OpenBLAS。两套库处理空矩阵时的行为不同。 Base 把零尺寸矩阵直接传给数学库。MKL 拒绝其中为零的矩阵步长并留下未初始化输出，OpenBLAS 则直接填零。参考补丁提前处理空矩阵，避免了这个非法调用。 控制实验保持 Base/Gold 原生库、测试脚本、所有 3 个测试和断言不变，只将实际 BLAS 调用绑定到源代码指定系列的 MKL 2019.0.5；两轮均得到 Base 1 失败/2 通过，Gold 3 通过。
- 怎么处理：验证环境固定为 MKL，并记录数学库版本；不需要修改本题测试断言或参考补丁。
- 怎么确认：完整原 test.sh 和 3 个测试均未修改，只把数学运算绑定到 MKL 2019.0.5；修复前两轮 1 失败、2 通过，修复后两轮 3 个全通过。已检查实际函数绑定到 MKL。
- 运行方式：复用精确 Base/Gold Paddle 库，将数学运算绑定到 MKL 2019.0.5。结论限此运行组合，没有重新编译完整 MKL 版 Paddle。
- 有效 F2P / P2P：1 / 2。

涉及的测试或文件：

- `test.legacy_test.test_multi_dot_op.TestMultiDotOp_ZeroSize1::test_check_output`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73122)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73125"></a>
## #73125 · det / slogdet zero-size Tensor

**通过 · 原包可用｜问题来源：验证程序配置**

det/slogdet 的空张量测试已通过。

- 哪里有问题：det/slogdet 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。未修复版本在空张量梯度计算时中途退出，这是该题要修的原始问题。将后续输出测试单独拆出来又会触发“本组没有做梯度检查”的收尾检查，因此不能把这两项算成已确认 P2P，也不能说参考补丁仍失败。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 2 项修复前失败后通过、4 项修复前后都通过。完整参考补丁运行 8 项均通过；新跑未修复版本的完整原脚本两轮都在空张量梯度测试中退出（返回 136）。后续两项输出测试无法取得完整结束记录，暂不计入 F/P。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。
- 有效 F2P / P2P：2 / 4。

涉及的测试或文件：

- `test/legacy_test/test_determinant_op.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73125)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73385"></a>
## #73385 · svdvals / eigvals zero-size Tensor

**通过 · 原包可用｜问题来源：验证程序配置**

eigvals/svdvals 的空张量测试已通过。

- 哪里有问题：eigvals/svdvals 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 4 项修复前失败后通过、4 项修复前后都通过。Base 的一项空张量特征值测试会中途退出且返回 0；必须核对测试结束记录，不能只看进程返回值。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。
- 有效 F2P / P2P：4 / 4。

涉及的测试或文件：

- `test/legacy_test/test_eigvals_op.py`
- `test/legacy_test/test_svdvals_op.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73385)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73387"></a>
## #73387 · gather_tree zero-size Tensor

**通过 · 原包可用｜问题来源：验证程序配置**

gather_tree 的空张量测试已通过。

- 哪里有问题：gather_tree 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 2 项修复前失败后通过、1 项修复前后都通过。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。
- 有效 F2P / P2P：2 / 1。

涉及的测试或文件：

- `test/legacy_test/test_gather_tree_op.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73387)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73535"></a>
## #73535 · conv1d CPU FP16 accuracy

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：1 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73535)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73569"></a>
## #73569 · matmul 1-D transpose gradient

**通过 · 原包可用｜问题来源：验证程序配置**

matmul 矩阵乘法的空张量测试已通过。

- 哪里有问题：matmul 矩阵乘法的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 1 项修复前失败后通过、2 项修复前后都通过。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。
- 有效 F2P / P2P：1 / 2。

涉及的测试或文件：

- `test/legacy_test/test_matmul_v2_op.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73569)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73570"></a>
## #73570 · masked_fill zero-size Tensor

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 3 项、回归测试 4 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：3 / 4。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73570)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73582"></a>
## #73582 · squeeze / full zero-size Tensor

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 3 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：2 / 3。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73582)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73691"></a>
## #73691 · conv1d / conv2d / conv3d zero-size Tensor

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：3 / 3。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73691)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73702"></a>
## #73702 · gather_nd zero-size Tensor

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：1 / 2。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73702)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73776"></a>
## #73776 · svd_lowrank zero-size Tensor

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：1 / 2。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73776)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73821"></a>
## #73821 · pad zero-size Tensor

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 3 项、回归测试 2 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：3 / 2。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73821)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73850"></a>
## #73850 · triangular_solve zero-size Tensor

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 1 项、回归测试 3 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：1 / 3。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73850)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73854"></a>
## #73854 · instance_norm zero-size Tensor

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 3 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：2 / 3。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73854)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73855"></a>
## #73855 · dice_loss zero-size Tensor

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：1 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73855)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-73880"></a>
## #73880 · softmax_with_cross_entropy zero-size Tensor

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 4 项、回归测试 2 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：4 / 2。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-73880)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-74184"></a>
## #74184 · pinv zero-size Tensor

**通过 · 原包可用｜问题来源：验证程序配置**

pinv 的空张量测试已通过。

- 哪里有问题：pinv 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 2 项修复前失败后通过、5 项修复前后都通过。非 Hermitian 的两个空张量用例在 Base 就能通过，实际属于 P2P。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用 README 允许的兼容 CPU 运行库，并加载该 task 的准确 Python 改动。
- 有效 F2P / P2P：2 / 5。

涉及的测试或文件：

- `test/legacy_test/test_linalg_pinv_op.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74184)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-74212"></a>
## #74212 · multiplex zero-size Tensor

**通过 · 原包可用｜问题来源：验证程序配置**

multiplex 的空张量测试已通过。

- 哪里有问题：multiplex 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 2 项修复前失败后通过、5 项修复前后都通过。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。
- 有效 F2P / P2P：2 / 5。

涉及的测试或文件：

- `test/legacy_test/test_multiplex_op.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74212)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-74221"></a>
## #74221 · fold zero-size Tensor

**通过 · 原包可用｜问题来源：验证程序配置**

fold 的输入检查测试已通过。

- 哪里有问题：fold 的输入检查测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 1 项修复前失败后通过、2 项修复前后都通过。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用 README 允许的兼容 CPU 运行库，并加载该 task 的准确 Python 改动。
- 有效 F2P / P2P：1 / 2。

涉及的测试或文件：

- `test/legacy_test/test_fold_op.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74221)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-74305"></a>
## #74305 · unique zero-size Tensor

**通过 · 原包可用｜问题来源：验证程序配置**

unique 的空张量测试已通过。

- 哪里有问题：unique 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 1 项修复前失败后通过、1 项修复前后都通过。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用 README 允许的兼容 CPU 运行库，并加载该 task 的准确 Python 改动。
- 有效 F2P / P2P：1 / 1。

涉及的测试或文件：

- `test/legacy_test/test_unique.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74305)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-74421"></a>
## #74421 · msort API compatibility

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74421)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-74439"></a>
## #74439 · ravel API compatibility

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74439)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-74444"></a>
## #74444 · dropout1d API compatibility

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74444)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-74491"></a>
## #74491 · Tensor.requires_grad compatibility

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74491)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-74586"></a>
## #74586 · scatter_add API compatibility

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74586)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-74594"></a>
## #74594 · broadcast_shapes API compatibility

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-74594)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-75274"></a>
## #75274 · Normal distribution unittest fix

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-75274)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-76259"></a>
## #76259 · Windows UTF-8 inference paths

**验证未通过｜问题来源：任务数据**

参考补丁对不上题目指定的代码版本，测试还没有开始。

- 哪里有问题：solution/code.patch 无法修改 paddle/fluid/inference/api/helper.h 的开头。
- 为什么：补丁要求文件开头按 algorithm、fstream、iostream 的顺序排列；指定 Base 实际是 glog、sys/stat、fstream 等另一套内容，补丁找不到要替换的位置。 先打测试补丁或先打参考补丁都失败；这是数据包的版本与补丁不匹配，换 CPU/GPU 或 Python 都不会修好。
- 怎么处理：基于 README 声明的 Base 重新生成参考补丁，并确保所需前置改动齐全；两种状态构建成功后再跑 F2P/P2P。
- 怎么确认：在指定 Base 上单独检查两种补丁应用顺序，均在同一文件失败；对照文件内容确认上下文不匹配。测试尚未启动。
- 运行方式：先修正补丁；随后按任务要求用 Windows CPU / MSVC x64 构建验证，Linux 测试不能替代。
- 有效 F2P / P2P：未完成配对。

涉及的测试或文件：

- `solution/code.patch`
- `paddle/fluid/inference/api/helper.h`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-76259)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-76522"></a>
## #76522 · Torch proxy compat override registration

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-76522)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-76736"></a>
## #76736 · atan2 C++ sinking

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 3 项、回归测试 7 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：3 / 7。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-76736)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-76873"></a>
## #76873 · Activation APIs inplace support

**环境不满足 · 未完成｜问题来源：多处原因**

环境缺 CINN，另有数值比较和测试导入问题；完整验证未完成。

- 哪里有问题：7 项符号形状测试读不到形状信息；1 项 SELU 测试在接近零的数值上超过比较阈值。任务入口还把两组同名辅助模块混在一起导入。
- 为什么：当前 Paddle 没编入 CINN，生成形状信息的代码根本不执行。SELU 的 CPU 结果与测试参考值有舍入差异，但相同输入下修复前后完全一致，尚不能归为补丁错误。两组测试各有一个 utils 文件，需要隔离导入。
- 怎么处理：准备带 CINN 的同版本构建，把两组测试分进程运行；核定 SELU 在零附近的数值参考和精度要求，再跑完整范围。不能直接放宽误差阈值算通过。
- 怎么确认：31 个节点按原范围分组各跑两轮，确认 7 项缺 CINN、1 项数值差异。另用 5 组固定输入对照，普通/原地 SELU 和修复前后输出均相同；已定位差异来自零附近的浮点计算。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：9 / 14（仅已确认部分，不代表整题通过）。

涉及的测试或文件：

- `test.ir.pir.cinn.symbolic.test_infer_sym_shape_multinary_op.CELUOpInferSymbolicShapeTest::test_eval_symbolic`
- `test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.HardSigmoidInferSymbolicShapeTest::test_eval_symbolic`
- `test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.MishOpInferSymbolicShapeTest::test_eval_symbolic`
- `test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.RRELUOpInferSymbolicShapeTest::test_eval_symbolic`
- `test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SELUOpInferSymbolicShapeTest::test_eval_symbolic`
- `test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SwishOpInferSymbolicShapeTest::test_eval_symbolic`
- `test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SumOpInferSymbolicShapeTest::test_eval_symbolic`
- `test.legacy_test.test_selu_op.TestSELUOpClass_Inplace::test_cases`
- `tests/test.sh`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-76873)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-77064"></a>
## #77064 · allclose C++ sinking

**通过 · 原包可用｜问题来源：验证程序配置**

allclose 参数别名和返回类型测试已通过。

- 哪里有问题：allclose 参数别名和返回类型测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 4 项修复前失败后通过、19 项修复前后都通过。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。
- 有效 F2P / P2P：4 / 19。

涉及的测试或文件：

- `test/legacy_test/test_allclose_op.py`
- `test/legacy_test/test_compat_allclose.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-77064)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-77078"></a>
## #77078 · inverse C++ sinking

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 3 项、回归测试 33 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：3 / 33。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-77078)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-77150"></a>
## #77150 · PyLayer grad-node attribute copy

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：1 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-77150)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-77495"></a>
## #77495 · MaxPool dilation option

**验证未通过｜问题来源：任务数据**

参考补丁来自另一套池化接口，套不到题目指定的代码版本；测试还没有开始。

- 哪里有问题：python/paddle/nn/functional/pooling.py、python/paddle/nn/layer/pooling.py 的补丁不匹配。 补丁要修改的 test/legacy_test/test_max_pool_dilation.py 在指定 Base 中不存在。
- 为什么：补丁假定 max_pool 系列接口已经有 dilation 参数，指定 Base 却还没有这个参数；它还依赖一个 Base 中不存在的测试文件。 两种补丁应用顺序都失败，证明不是打补丁顺序或机器环境造成的。
- 怎么处理：基于 README 声明的 Base 重新生成参考补丁，并确保所需前置改动齐全；两种状态构建成功后再跑 F2P/P2P。
- 怎么确认：在指定 Base 上尝试两种补丁应用顺序，均失败；逐段对照池化接口，确认缺少前置参数和测试文件。测试尚未启动。
- 运行方式：必须先成功应用补丁，再编译和运行测试。
- 有效 F2P / P2P：未完成配对。

涉及的测试或文件：

- `solution/code.patch`
- `python/paddle/nn/functional/pooling.py`
- `python/paddle/nn/layer/pooling.py`
- `test/legacy_test/test_max_pool_dilation.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-77495)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-77749"></a>
## #77749 · pad_sequence / unpad_sequence

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 21 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：21 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-77749)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78048"></a>
## #78048 · dsplit / hsplit / vsplit parameter aliases

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：3 / 3。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78048)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78082"></a>
## #78082 · ParameterDict pop / values / keys

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 9 项、回归测试 23 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：9 / 23。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78082)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78104"></a>
## #78104 · CUDA device conversion from Tensor place

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：1 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78104)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78138"></a>
## #78138 · pixel_shuffle C++ sinking

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 15 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：2 / 15。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78138)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78238"></a>
## #78238 · put_along_axis zero-size indices

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78238)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78301"></a>
## #78301 · Layer.to / Tensor.to compatibility

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 13 项、回归测试 21 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：13 / 21。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78301)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78342"></a>
## #78342 · paddle._assert API

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 7 项、回归测试 24 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：7 / 24。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78342)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78440"></a>
## #78440 · cdist zero-size Tensor handling

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78440)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78441"></a>
## #78441 · aminmax operator

**核心通过 · 任务包待修｜问题来源：任务数据**

修复后完整脚本通过；其中一条“梯度测试”是空的，不能算有效 F2P。

- 哪里有问题：TestAminmaxOpFloat32::test_check_grad 的测试内容只有 pass，没有检查任何结果。
- 为什么：这条测试在修复前因为 aminmax API 不存在而准备失败；修复后只是执行了空函数。这个“先失败再通过”不能证明梯度正确。其他梯度测试有实际检查。
- 怎么处理：给这条测试补上可靠的梯度断言，或明确标成跳过并从 F2P 数量中去掉；同时把说明改为 26 条有效 F2P、4 条 P2P。
- 怎么确认：逐行核对测试补丁并用 Python 语法树确认空函数；完整 31 个节点在修复后两轮都通过，去掉空测试后有 26 条有效 F2P、4 条 P2P。
- 运行方式：精确源码构建的 CPU Paddle，启用 CINN；任务脚本已包含所需测试路径和运行开关。
- 有效 F2P / P2P：26 / 4。

涉及的测试或文件：

- `test/legacy_test/test_aminmax_op.py::TestAminmaxOpFloat32::test_check_grad`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78441)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78452"></a>
## #78452 · paddle.load dataclass objects

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 16 项、回归测试 27 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：16 / 27。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78452)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78522"></a>
## #78522 · distributed launch os.kill

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：3 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78522)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78570"></a>
## #78570 · Optimizer.step closure compatibility

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 6 项、回归测试 3 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：6 / 3。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78570)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78823"></a>
## #78823 · pin_memory support for random APIs

**环境不满足 · 未完成｜问题来源：机器环境**

CPU 能检查的部分已通过；真正的锁页内存分配需要 CUDA 或 XPU，当前机器没有这些设备。

- 哪里有问题：TestToPinnedPlace::test_already_cuda_pinned_returns_same_object、test_cpu_place_on_cuda_build、test_cuda_place_to_cuda_pinned 均未执行。 还缺实际设备上的 pinned 分配、CPU 到 pinned 内存转换和设备地址转换结果。
- 为什么：CPU构建没有这类设备锁页内存分配器；通过CPU异常分支或模拟分支不能证明实际设备分配正确。 Base缺少本题新增的 _to_pinned_place，整个模块在导入时失败；因此不能把Gold新增4项CPU通过直接写成4个逐测试F2P。
- 怎么处理：在符合题目要求的设备上，保持相同 Base、参考补丁和测试范围，各跑两轮；保留已完成的 CPU 结果。
- 怎么确认：检查任务对 CUDA/XPU 的要求、当前设备和测试条件分支。当前只有 CPU 运行结果，3 个 CUDA 锁页内存测试明确跳过，真实设备分配尚未执行。
- 运行方式：至少一张CUDA或XPU设备和匹配的Paddle构建；按实际后端允许另一后端条件跳过
- 有效 F2P / P2P：未完成配对。

涉及的测试或文件：

- `test/legacy_test/test_randperm_op.py::TestRandpermBF16Op::test_check_output`
- `test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_already_cuda_pinned_returns_same_object`
- `test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cpu_place_on_cuda_build`
- `test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cuda_place_to_cuda_pinned`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78823)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78911"></a>
## #78911 · Recompute context detection

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78911)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78922"></a>
## #78922 · Flex checkpoint flatten_state_dict lifetime

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：1 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78922)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-78932"></a>
## #78932 · TensorDataset varargs and alias

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：3 / 3。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-78932)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79035"></a>
## #79035 · Optimizer LR scheduler aliases

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79035)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79057"></a>
## #79057 · RestrictedUnpickler MRO security

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79057)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79161"></a>
## #79161 · set_rng_state parameter alias

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79161)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79167"></a>
## #79167 · random.initial_seed alias

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79167)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79197"></a>
## #79197 · LR scheduler optimizer argument

**通过 · 原包可用｜问题来源：验证程序配置**

学习率调度器接收优化器参数测试已通过。

- 哪里有问题：学习率调度器接收优化器参数测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 6 项修复前失败后通过、1 项修复前后都通过。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用 README 允许的兼容 CPU 运行库，并加载该 task 的准确 Python 改动。
- 有效 F2P / P2P：6 / 1。

涉及的测试或文件：

- `test/legacy_test/test_lr_scheduler.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79197)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79268"></a>
## #79268 · DistributedSampler alias

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79268)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79275"></a>
## #79275 · flex_attention or_masks / and_masks

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：3 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79275)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79276"></a>
## #79276 · add_n zero-size shape validation

**通过 · 原包可用｜问题来源：验证程序配置**

add_n 混合空张量输入测试已通过。

- 哪里有问题：add_n 混合空张量输入测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。
- 为什么：验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。
- 怎么处理：在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。
- 怎么确认：相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 1 项修复前失败后通过、2 项修复前后都通过。
- 运行方式：从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。
- 有效 F2P / P2P：1 / 2。

涉及的测试或文件：

- `test/legacy_test/test_add_n_op.py`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79276)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79310"></a>
## #79310 · nn.init.sparse_

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 4 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。
- 有效 F2P / P2P：4 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79310)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79321"></a>
## #79321 · Layer.set_state_dict named return fields

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：1 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79321)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79353"></a>
## #79353 · P2P local_var bug

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79353)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79369"></a>
## #79369 · check_memory_usage logging

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：1 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79369)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79386"></a>
## #79386 · iinfo uint64 maximum boundary

**验证未通过｜问题来源：任务数据**

指定版本在当前 Linux 环境已能算对，未复现目标缺陷。

- 哪里有问题：TestIInfoUInt64Boundary::test_uint64_max_preserves_unsigned_boundary 修复前已通过；另两项回归也通过。
- 为什么：指定 Base 的 iinfo.max 本来就是 uint64_t；实际编译使用的 pybind 会按无符号整数把它传给 Python，不会变成 -1。 同一份当前测试、分别对应 Base/Gold 的原生库各跑两轮，3 项全部通过；实际值都是 18446744073709551615。没有发生导入失败、跳过或机器异常。
- 怎么处理：提供确实会返回错误值的 Base 或明确可复现的平台/依赖组合，再固定成任务环境；不能为了制造失败改断言。
- 怎么确认：精确 Base/Gold 库配合完整 3 个测试各跑两轮，全部通过；核对无符号整数类型和 Python 转换代码，确认两边都返回 18446744073709551615。
- 运行方式：使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。
- 有效 F2P / P2P：0 / 3（仅已确认部分，不代表整题通过）。

涉及的测试或文件：

- `test/legacy_test/test_iinfo_and_finfo.py::TestIInfoUInt64Boundary::test_uint64_max_preserves_unsigned_boundary`

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79386)。逐项双轮结果可在网页任务详情中展开查看。

<a id="task-79633"></a>
## #79633 · Distributed launch KV server concurrency

**通过 · 原包可用｜问题来源：未发现问题**

缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。

- 哪里有问题：所选测试的 F2P/P2P 配对成立，任务脚本可运行。
- 为什么：缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。
- 怎么处理：按任务说明与下列运行方式使用。
- 怎么确认：核对原始测试日志和逐项配对结果，修复前后各有两轮记录。
- 运行方式：选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。
- 有效 F2P / P2P：2 / 1。

[查看任务文件](https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-79633)。逐项双轮结果可在网页任务详情中展开查看。
