# SWE-Paddle 最新验证情况

结果截至：2026-10-14T02:03:48.157951Z。

**Oracle 累计通过 102 / 115 题（88.7%）；其余 13 题尚未确认通过。**

累计通过按已有完整 Gold 测试记录去重；修正入口后的完整结果纳入，跳过仍单独显示。已有通过不会因缺少构建复核证据扣减。

Oracle 指官方参考补丁（Gold）的测试结果。“运行说明待同步”表示正确入口已经完整通过，只需同步运行说明，已计入累计通过。“完整验证未完成”表示缺少完整可确认结果，可能已尝试、做过补测或遇到环境阻断，不等于从未验证。

Oracle 通过适用于各题注明的测试范围；硬件跳过不代表该分支通过。Gold 通过不自动证明 F2P/P2P 配对。已有配对明细保留其确认日期。

## 尚未通过题的实际进展

| 任务 | 实际含义 | 已做验证 | 遇到的问题 | 还需完成 |
| --- | --- | --- | --- | --- |
| #33369 | 已执行两轮，2 项因缺少依赖失败 | 原 4 项测试两轮执行完整，每轮 2 项通过、2 项失败。 | 弹性训练重启和成员变更测试导入 elastic 模块时缺少 six，报 ModuleNotFoundError；这两项尚未进入目标行为。 | 在该次验证的独立 Python 环境补齐 six，重新执行完整 4 项测试，确认目标行为实际运行。 |
| #54435 | 已执行两轮，1 项类型断言不匹配 | 原 5 项测试两轮执行完整，每轮 4 项通过、1 项失败。 | sort_ip 选项解析得到整数 1，测试却使用 args.sort_ip is True 要求布尔对象 True，导致断言失败。 | 核对选项及环境变量的类型约定，区分解析结果错误与测试判据过严；确认后再执行完整 5 项测试。 |
| #57827 | 已执行，oneDNN 反向池化异常退出 | 已用该题独立构建的 Gold 包执行原测试；两轮均 SIGABRT，完整 8 项结果未收齐。另有独立测试尾部记录。 | 首次真实异常发生在 oneDNN pooling backward 描述符创建，返回 unimplemented 后退出；完整测试没有通过。 | 取得失败池化节点的真实形状、内存描述符及前向提示参数，定位根因后再执行完整原测试。 |
| #58917 | 已执行两轮，10 项因 PIR 接口不匹配失败 | 原 splits API 范围两轮各 8 项通过、10 项失败，原命令排除了 test_with_pir_api。 | 10 项均报 paddle.pir 缺少 OpResult；原 Python 源码与借用运行库的接口不匹配。 | 使用该题配套源码与独立编译包，核对 PIR 接口，再执行完整注明的测试范围。 |
| #59021 | 已执行，TensorArray 静态图转换崩溃 | 原测试已实际运行，两轮均 SIGSEGV；崩溃前和独立补测的局部结果保留，整题计数未收齐。 | TensorArray 的 len 测试在静态图转换的切片处理边界崩溃。 | 检查配套构建下的实际切片操作、输入向量、索引和指针，定位崩溃原因后重跑完整原测试。 |
| #59127 | 已执行并崩溃，配套运行库复测未完成 | 原测试两轮出现 SIGSEGV；另已核对 Python 源码与底层运行库的接口，确认有版本混用。 | 此前 overlay 与借用包缺少测试所需的 pir.OpResult 接口；接口不匹配已确认，但崩溃的唯一根因仍未确认。 | 用该题独立配套编译包执行完整原测试，确认接口一致，并继续诊断仍然发生的崩溃。 |
| #64881 | 已完整验证，仍有 1 项失败和 6 项错误 | 已独立从零编译 Gold，并直接执行原脚本的 __main__ 初始化；两轮各 123 项通过、1 项失败、6 项错误、4 项跳过。 | 6 项错误涉及 dropout 比例为 1 时的掩码维度；另 1 项失败涉及命名随机种子的传递及两次输出不一致。 | 核对 dropout 掩码形状和随机种子在实际运算中的传递，确认修复边界后再跑完整原脚本；跳过项另按条件补测。 |
| #76259 | 已做前置核查，Windows 目标测试未执行完整 | 已核对原补丁应用和运行平台；尚无 Windows 目标测试的完整执行记录。 | 原 Gold 补丁存在上下文不匹配；已有机器核查为 Linux，缺少该题要求的 Windows 与 MSVC 环境。 | 先解决原补丁应用问题，再在 Windows / MSVC x64 环境编译并执行 UTF-8 推理路径的目标测试。 |
| #76873 | 已尝试和补测，完整 CINN 验证未完成 | 已有原入口尝试及独立 CPU、符号形状补测；补测记录中存在失败，完整原测试仍未收齐。 | pytest 曾导入错误的同名 utils，找不到 apply_to_static；无 CINN 的包不能提供符号形状测试所需信息，另有 SELU 数值阈值失败。 | 隔离正确的 utils，用具有所需 CINN / GPU 能力的配套编译包和设备执行完整测试，并单独复核 SELU 的数值差异。 |
| #77078 | 已完整执行，4 项静态 inverse 调用报错 | 原 inverse 测试两轮各 32 项通过、4 项错误，原脚本均退出 1。 | 4 项静态模式测试调用 paddle.inverse 时，底层要求 Value 参数却收到 None；报错经过 generated_tensor_methods_patch 的 inverse 调用。 | 核对静态模式初始化、inverse 的 Python 接口绑定和配套构建，查明 None 的来源，再执行完整 36 项测试。 |
| #78823 | 已尝试，导入受阻且完整目标结果缺失 | 已有运行尝试与接口核查；记录中的两次脚本退出 0，但没有完整测试节点计数，不能据此判通过。 | 混用 Python 模块时缺少 convert_to_vartype；该题还涉及 pin_memory，目标覆盖需要匹配的 CUDA 或 XPU 编译包与设备。 | 使用该题配套源码独立编译，解决导入接口不匹配，在所需设备上执行完整目标测试并收齐节点结果。 |
| #79369 | 已执行两轮，2 项因 CPU 模块绑定缺失失败 | 原内存日志测试两轮各 0 项通过、2 项失败；失败发生在测试访问或设置 CPU 内存 API 时。 | 当前 paddle.device 没有 cpu 属性，两项均报 AttributeError；将 cpu.py 放到目录中并未使父模块自动导出该属性。 | 用该题独立配套编译包核对 paddle.device.cpu 的加载与导出，再执行内存日志及不支持 CPU allocator 的原测试。 |
| #79657 | 目标 CUDA 梯度测试尚未完成 | 已核对原入口要求 CUDA，也有独立 CPU 检查记录；目标 GPU 原测试没有完整两轮结果。 | 缺少已确认的匹配 CUDA 编译包和 NVIDIA 设备测试结果；CPU 检查无法覆盖目标 min/max 梯度索引缺陷。 | 准备配套 CUDA 编译包，在 NVIDIA 设备上运行原 min/max 梯度索引测试并确认两轮完整结果。 |

## 全部任务的 Oracle 结果

| 任务 | Oracle 状态 | 两轮结果 |
| --- | --- | --- |
| #18687 | Oracle 通过 | 两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #27247 | Oracle 通过 | 两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #33369 | Oracle 测试失败 | 两轮各 2 通过 / 2 失败 / 0 错误 / 0 跳过 |
| #36684 | Oracle 通过 | 两轮各 11 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #41202 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #50086 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #52948 | Oracle 通过 | 两轮各 19 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #53534 | Oracle 通过 | 两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #54435 | Oracle 测试失败 | 两轮各 4 通过 / 1 失败 / 0 错误 / 0 跳过 |
| #54625 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #55890 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #56135 | Oracle 通过 | 两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #56470 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #56705 | Oracle 通过 | 两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #57741 | Oracle 已通过，运行说明待同步 | 两轮各 2 通过 / 0 失败 / 0 错误 / 3 跳过 |
| #57827 | Oracle 测试失败 | 测试异常退出（SIGABRT），完整测试计数未闭合 |
| #58219 | Oracle 通过 | 两轮各 8 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #58323 | Oracle 已通过，运行说明待同步 | 两轮各 89 通过 / 0 失败 / 0 错误 / 2 跳过 |
| #58343 | Oracle 通过 | 两轮各 15 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #58917 | Oracle 测试失败 | 两轮各 8 通过 / 10 失败 / 0 错误 / 0 跳过 |
| #59021 | Oracle 测试失败 | 测试崩溃（SIGSEGV），完整测试计数未闭合 |
| #59127 | Oracle 测试失败 | 测试崩溃（SIGSEGV），完整测试计数未闭合 |
| #59348 | Oracle 通过 | 两轮各 15 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #59374 | Oracle 通过 | 两轮各 5 通过 / 0 失败 / 0 错误 / 1 跳过 |
| #59383 | Oracle 通过 | 两轮各 708 通过 / 0 失败 / 0 错误 / 16 跳过 |
| #59715 | Oracle 通过 | 两轮各 108 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #59847 | Oracle 通过 | 两轮各 43 通过 / 0 失败 / 0 错误 / 32 跳过 |
| #59909 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #59910 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #59973 | Oracle 已通过，运行说明待同步 | 两轮各 74 通过 / 0 失败 / 0 错误 / 29 跳过 |
| #60346 | Oracle 通过 | 两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #60417 | Oracle 通过 | 两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #60808 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #62012 | Oracle 通过 | 两轮各 15 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #64320 | Oracle 通过 | 两轮各 33 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #64323 | Oracle 通过 | 两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #64519 | Oracle 通过 | 两轮各 27 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #64881 | Oracle 测试失败 | 两轮各 123 通过 / 1 失败 / 6 错误 / 4 跳过 |
| #65724 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #67195 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #68432 | Oracle 通过 | 两轮各 13 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #70469 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #71525 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #71747 | Oracle 通过 | 两轮各 13 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #72800 | Oracle 通过 | 两轮各 8 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73122 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73125 | Oracle 通过 | 两轮各 8 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73329 | Oracle 通过 | 两轮各 11 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73385 | Oracle 通过 | 两轮各 8 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73387 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73535 | Oracle 通过 | 两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73569 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73570 | Oracle 通过 | 两轮各 7 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73582 | Oracle 通过 | 两轮各 5 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73691 | Oracle 通过 | 两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73702 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73776 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73821 | Oracle 通过 | 两轮各 5 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73850 | Oracle 通过 | 两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73854 | Oracle 通过 | 两轮各 5 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73855 | Oracle 通过 | 两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #73880 | Oracle 通过 | 两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #74184 | Oracle 通过 | 两轮各 7 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #74212 | Oracle 通过 | 两轮各 7 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #74221 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #74305 | Oracle 通过 | 两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #74421 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #74439 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #74444 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #74491 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #74586 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #74594 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #75274 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #76259 | 完整验证未完成 | 完整测试结果尚未确认 |
| #76522 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #76736 | Oracle 通过 | 两轮各 10 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #76873 | 完整验证未完成 | 完整测试结果尚未确认 |
| #77064 | Oracle 通过 | 两轮各 23 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #77078 | Oracle 测试失败 | 两轮各 32 通过 / 0 失败 / 4 错误 / 0 跳过 |
| #77150 | Oracle 通过 | 两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #77495 | Oracle 通过 | 两轮各 20 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #77749 | Oracle 通过 | 两轮各 22 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78048 | Oracle 通过 | 两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78082 | Oracle 通过 | 两轮各 32 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78085 | Oracle 通过 | 两轮各 20 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78104 | Oracle 通过 | 两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78138 | Oracle 通过 | 两轮各 17 通过 / 0 失败 / 0 错误 / 2 跳过 |
| #78238 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78301 | Oracle 通过 | 两轮各 34 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78342 | Oracle 通过 | 两轮各 31 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78440 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78441 | Oracle 通过 | 两轮各 30 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78452 | Oracle 通过 | 两轮各 43 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78522 | Oracle 通过 | 两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78570 | Oracle 通过 | 两轮各 9 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78728 | Oracle 通过 | 两轮各 14 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78823 | 完整验证未完成 | 完整测试结果尚未确认 |
| #78911 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78922 | Oracle 通过 | 两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #78932 | Oracle 通过 | 两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79035 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79057 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79161 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79167 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79197 | Oracle 通过 | 两轮各 7 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79268 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79275 | Oracle 通过 | 两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79276 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79310 | Oracle 通过 | 两轮各 5 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79321 | Oracle 通过 | 两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79353 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79369 | Oracle 测试失败 | 两轮各 0 通过 / 2 失败 / 0 错误 / 0 跳过 |
| #79386 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79633 | Oracle 通过 | 两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过 |
| #79657 | 完整验证未完成 | 完整测试结果尚未确认 |

<a id="task-18687"></a>

## #18687 · Parameter-server launch

Oracle 已执行范围通过：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用选定版本的 Python 源码，按任务约定的入口和依赖运行。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:08:05Z

**已有 F2P/P2P 配对记录：** 3 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr18687_launch_ps.py::test_f2p_failed_child_process_is_reported_to_the_launcher | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr18687_launch_ps.py::test_f2p_parameter_server_parser_accepts_counts_and_script_arguments | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr18687_launch_ps.py::test_f2p_server_and_worker_roles_receive_consistent_environment | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr18687_launch_ps.py::test_p2p_existing_collective_parser_forwards_training_arguments | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-27247"></a>

## #27247 · DataLoader spawn worker serialization

Oracle 已执行范围通过：两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用选定版本的 Python 源码，按任务约定的入口和依赖运行。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:23:54Z

**已有 F2P/P2P 配对记录：** 2 / 4，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr27247_dataloader_spawn_pickle.py::test_reader_loop_keeps_batch_handoff_behavior | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr27247_dataloader_spawn_pickle.py::test_reader_process_and_consumer_thread_are_started | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr27247_dataloader_spawn_pickle.py::test_reader_target_can_be_serialized_for_spawn | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr27247_dataloader_spawn_pickle.py::test_worker_loop_keeps_batch_handoff_behavior | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr27247_dataloader_spawn_pickle.py::test_worker_processes_are_started_and_registered | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr27247_dataloader_spawn_pickle.py::test_worker_target_can_be_serialized_for_spawn | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-33369"></a>

## #33369 · Fleet elastic fault tolerance

Oracle 尚未通过：已执行两轮，2 项因缺少依赖失败。

**已做验证：** 原 4 项测试两轮执行完整，每轮 2 项通过、2 项失败。

**遇到的问题：** 弹性训练重启和成员变更测试导入 elastic 模块时缺少 six，报 ModuleNotFoundError；这两项尚未进入目标行为。

**还需完成：** 在该次验证的独立 Python 环境补齐 six，重新执行完整 4 项测试，确认目标行为实际运行。

弹性训练重启和成员变更测试导入 elastic 模块时缺少 six，报 ModuleNotFoundError；这两项尚未进入目标行为。

**原因：** 日志明确定位到 import six；当前失败首先是验证依赖缺失，不能直接据此判定 Gold 的容错逻辑错误。

**处理：** 在该次验证的独立 Python 环境补齐 six，重新执行完整 4 项测试，确认目标行为实际运行。

**确认方法：** 当前 Oracle 实际观察：两轮各 2 通过 / 2 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用选定版本的 Python 源码，按任务约定的入口和依赖运行。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:19:54Z

**已有 F2P/P2P 配对记录：** 3 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr33369_elastic_fault_tolerance.py::test_collective_launch_is_managed_by_the_elastic_lifecycle | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr33369_elastic_fault_tolerance.py::test_failed_training_requests_an_elastic_restart | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr33369_elastic_fault_tolerance.py::test_membership_change_holds_the_current_training_group | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr33369_elastic_fault_tolerance.py::test_parameter_server_mode_is_preserved | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-36684"></a>

## #36684 · Fleet elastic scale up / down

Oracle 已执行范围通过：两轮各 11 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 11 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用选定版本的 Python 源码，按任务约定的入口和依赖运行。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T19:16:54Z

**已有 F2P/P2P 配对记录：** 8 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_INIT_CASE::test_enable_elastic | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_INIT_CASE::test_launch_elastic | passed / passed | passed / passed | 原AST加载器把launch_elastic注入为literal no-op，原方法无断言；保留raw通过但不计有效P2P |
| test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_MANAGER_CASE::test_elastic_manager_init | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_MANAGER_CASE::test_exit | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_MANAGER_CASE::test_match_elastic | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_MANAGER_CASE::test_match_faulttolerance | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_MANAGER_CASE::test_update_hosts_for_elastic | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_MANAGER_CASE::test_update_hosts_for_faulttolerance | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr36684_elastic_scale.py::test_f2p_scale_out_and_scale_in_update_training_hosts | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr36684_elastic_scale.py::test_f2p_variable_host_range_is_matched | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr36684_elastic_scale.py::test_p2p_existing_elastic_enablement_is_preserved | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-41202"></a>

## #41202 · DataLoader reader AutoTune

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行，保证该 task 的 Paddle Python 包和原生运行库可导入。；使用每个测试文件自带的 unittest 入口，避免 pytest 再按 python.paddle 导入同一份库。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T17:56:58Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| python/paddle/fluid/tests/unittests/test_dataloader_autotune.py::TestAutoTune::test_dataloader_disable_autotune | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_dataloader_autotune.py::TestAutoTune::test_dataloader_use_autotune | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| python/paddle/fluid/tests/unittests/test_dataloader_autotune.py::TestAutoTune::test_distributer_batch_sampler_autotune | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-50086"></a>

## #50086 · ConditionalBlock scope validation

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定编译、运行轻量 C++ 测试，不代表完整 Paddle 构建通过。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T19:23:47Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_conditional_block_scope_lifecycle.py::test_first_run_and_legacy_executor_behavior_remain_valid | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_conditional_block_scope_lifecycle.py::test_new_executor_repeated_run_uses_fresh_child_scope | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_conditional_block_scope_lifecycle.py::test_stale_cached_scope_is_not_reused | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-52948"></a>

## #52948 · Static / dy2static Tensor.register_hook

Oracle 已执行范围通过：两轮各 19 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 19 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行，保证该 task 的 Paddle Python 包和原生运行库可导入。；使用每个测试文件自带的 unittest 入口，避免 pytest 再按 python.paddle 导入同一份库。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T20:09:51Z

**已有 F2P/P2P 配对记录：** 5 / 14，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/dygraph_to_static/test_tensor_hook.py::TestStaticAnalysis::test_hook_for_different_parameter | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/dygraph_to_static/test_tensor_hook.py::TestStaticAnalysis::test_hook_for_reassignment_parameter | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/dygraph_to_static/test_tensor_hook.py::TestStaticAnalysis::test_hook_for_repeat_register | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/dygraph_to_static/test_tensor_hook.py::TestStaticAnalysis::test_hook_in_init_for_layer | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_hook_for_accumulated_grad_interior_var | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_hook_for_accumulated_grad_leaf_var | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_hook_for_interior_var | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_hook_for_leaf_var | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_hook_in_double_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_hook_in_model | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_multiple_hooks_for_interior_var | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_register_hook_for_stop_gradient_var | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_register_hook_in_dy2static_mode | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_register_hook_in_static_mode | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_remove_one_hook_multiple_times | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterBackwardHook::test_register_backward_hook | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterBackwardHook::test_register_backward_hook_for_interior_var | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterBackwardHook::test_register_backward_hook_for_var_without_gradient | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestRegsiterBackwardFinalHook::test_register_backward_hook | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-53534"></a>

## #53534 · to_tensor compatibility with NumPy

Oracle 已执行范围通过：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:08:51Z

**已有 F2P/P2P 配对记录：** 2 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_to_tensor_numpy124_contract.py::test_nested_variable_sequence_uses_recursive_conversion | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_to_tensor_numpy124_contract.py::test_numeric_sequence_behavior_remains_valid | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_to_tensor_numpy124_contract.py::test_unsupported_mapping_has_clear_error | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_to_tensor_numpy124_contract.py::test_variable_passthrough_and_explicit_cast_remain_valid | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-54435"></a>

## #54435 · Distributed launch numeric IP ordering

Oracle 尚未通过：已执行两轮，1 项类型断言不匹配。

**已做验证：** 原 5 项测试两轮执行完整，每轮 4 项通过、1 项失败。

**遇到的问题：** sort_ip 选项解析得到整数 1，测试却使用 args.sort_ip is True 要求布尔对象 True，导致断言失败。

**还需完成：** 核对选项及环境变量的类型约定，区分解析结果错误与测试判据过严；确认后再执行完整 5 项测试。

sort_ip 选项解析得到整数 1，测试却使用 args.sort_ip is True 要求布尔对象 True，导致断言失败。

**原因：** 整数 1 与布尔 True 的值可相等，但不是同一对象。失败发生在类型身份断言，不能由此推断 IP 数字排序本身失败，也尚不能直接改断言宣告通过。

**处理：** 核对选项及环境变量的类型约定，区分解析结果错误与测试判据过严；确认后再执行完整 5 项测试。

**确认方法：** 当前 Oracle 实际观察：两轮各 4 通过 / 1 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用选定版本的 Python 源码，按任务约定的入口和依赖运行。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:09:21Z

**已有 F2P/P2P 配对记录：** 3 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr54435_sort_ip.py::test_disabled_sort_keeps_existing_key_order | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr54435_sort_ip.py::test_etcd_master_assigns_rank_by_numeric_ip | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr54435_sort_ip.py::test_existing_rank_argument_is_unchanged | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr54435_sort_ip.py::test_http_master_assigns_rank_by_numeric_ip | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr54435_sort_ip.py::test_sort_ip_option_and_environment_mapping | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-54625"></a>

## #54625 · Pipeline output release state

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:11:32Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr54625_pipeline_output_release.py::test_initialized_pristine_outputs_are_released | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr54625_pipeline_output_release.py::test_inplace_modified_outputs_are_not_released | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr54625_pipeline_output_release.py::test_uninitialized_outputs_are_not_released | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-55890"></a>

## #55890 · VPP + sharding overlap scheduling

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:25:37Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr55890_vpp_overlap_schedule.py::test_aligned_legacy_schedule_keeps_existing_chunk_selection | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr55890_vpp_overlap_schedule.py::test_nonzero_stage_flushes_first_chunk_at_model_chunk_boundary | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr55890_vpp_overlap_schedule.py::test_overlap_communication_uses_pipeline_stage_cadence | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-56135"></a>

## #56135 · BMM dynamic-shape infermeta

Oracle 已执行范围通过：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定编译、运行轻量 C++ 测试，不代表完整 Paddle 构建通过。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T19:04:13Z

**已有 F2P/P2P 配对记录：** 2 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_bmm_dynamic_shape_contract.py::test_cpp_infermeta_resolves_unknown_dimensions | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_bmm_dynamic_shape_contract.py::test_known_incompatible_shapes_are_rejected | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_bmm_dynamic_shape_contract.py::test_known_shape_behavior_remains_valid | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_bmm_dynamic_shape_contract.py::test_python_static_bmm_accepts_unknown_dimensions | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-56470"></a>

## #56470 · Upsampling accepts integer size

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:23:20Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr56470_upsampling_single_int.py::test_bilinear_2d_accepts_single_integer_size | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr56470_upsampling_single_int.py::test_existing_sequence_and_scale_factor_behavior_remains_valid | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr56470_upsampling_single_int.py::test_nearest_2d_accepts_single_integer_size | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-56705"></a>

## #56705 · Model-parallel memory leak

Oracle 已执行范围通过：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:21:42Z

**已有 F2P/P2P 配对记录：** 2 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr56705_mp_ops_pylayer_lifecycle.py::test_c_identity_forward_backward_contract | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr56705_mp_ops_pylayer_lifecycle.py::test_c_identity_reuses_pylayer_class_across_calls | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr56705_mp_ops_pylayer_lifecycle.py::test_mp_allreduce_forward_backward_contract | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr56705_mp_ops_pylayer_lifecycle.py::test_mp_allreduce_reuses_pylayer_class_across_calls | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-57741"></a>

## #57741 · PIR memcpy

Oracle 已通过：已通过，运行模式说明待同步。

**已做验证：** 设置 FLAGS_enable_new_ir_in_executor=1 后，完整原 5 项测试两轮各 2 项通过、3 项 CUDA 条件跳过；已计入累计通过。

**遇到的问题：** 未设置该运行模式的原入口仍出现失败；GPU 跳过项没有通过结论。

**还需完成：** 将已验证的环境变量和入口写入任务运行说明；3 项 CUDA 分支另需匹配编译包与设备补测。

未设置该运行模式的原入口仍出现失败；GPU 跳过项没有通过结论。

**原因：** 通过范围已有完整结果，待同步的是如何复现该结果的运行说明；这不是尚未做验证。

**处理：** 将已验证的环境变量和入口写入任务运行说明；3 项 CUDA 分支另需匹配编译包与设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 2 通过 / 0 失败 / 0 错误 / 3 跳过；入口：FLAGS_enable_new_ir_in_executor=1 + 原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** FLAGS_enable_new_ir_in_executor=1 + 原 tests/test.sh

**Oracle 确认时间：** 2026-10-12T01:04:31Z

**已有 F2P/P2P 配对记录：** 1 / 0，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/dygraph_to_static/test_tensor_memcpy_on_cpu.py::TestTensorCopyToCpuOnDefaultCPU::test_tensor_cpu_on_default_cpu | target_abort / target_abort | passed / passed | Base明确缺少本题修复的pd_op.memcpy；参考补丁修复，1个目标修复信号。 |
| test/dygraph_to_static/test_tensor_memcpy_on_cpu.py::TestTensorCopyToCUDAOnDefaultCPU::test_tensor_cuda_on_default_cpu | skipped / skipped | skipped / skipped | 无CUDA构建，原skipIf条件跳过，不计F/P。 |
| test/dygraph_to_static/test_tensor_memcpy_on_gpu.py::TestTensorCopyToCpuOnDefaultGPU::test_tensor_cpu_on_default_gpu | skipped / skipped | skipped / skipped | 无CUDA构建，原skipIf条件跳过，不计F/P。 |
| test/dygraph_to_static/test_tensor_memcpy_on_gpu.py::TestTensorCopyToCUDAOnDefaultGPU::test_tensor_cuda_on_default_gpu | skipped / skipped | skipped / skipped | 无CUDA构建，原skipIf条件跳过，不计F/P。 |

<a id="task-57827"></a>

## #57827 · PIR fused_elemwise_add_activation

Oracle 尚未通过：已执行，oneDNN 反向池化异常退出。

**已做验证：** 已用该题独立构建的 Gold 包执行原测试；两轮均 SIGABRT，完整 8 项结果未收齐。另有独立测试尾部记录。

**遇到的问题：** 首次真实异常发生在 oneDNN pooling backward 描述符创建，返回 unimplemented 后退出；完整测试没有通过。

**还需完成：** 取得失败池化节点的真实形状、内存描述符及前向提示参数，定位根因后再执行完整原测试。

首次真实异常发生在 oneDNN pooling backward 描述符创建，返回 unimplemented 后退出；完整测试没有通过。

**原因：** 已确认底层异常位置，但实际失败的是哪个池化节点、具体参数为何被拒绝尚未闭合；独立尾部通过不能拼成整题通过。

**处理：** 取得失败池化节点的真实形状、内存描述符及前向提示参数，定位根因后再执行完整原测试。

**确认方法：** 当前 Oracle 实际观察：测试异常退出（SIGABRT），完整测试计数未闭合；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 CPU Paddle 运行库。该项验证的是 CPU 加速的最大池化反向计算，不需要 GPU。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-11T20:33:05Z

**已有 F2P/P2P 配对记录：** 2 / 3，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/dygraph_to_static/test_build_strategy.py::test_ast_only | setup_error / setup_error | setup_error / setup_error | pytest误收集辅助装饰器，缺少fn；不计F/P。 |
| test/dygraph_to_static/test_build_strategy.py::test_legacy_and_pir | setup_error / setup_error | setup_error / setup_error | pytest误收集辅助装饰器，缺少fn；不计F/P。 |
| test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_in_static_mode_mkldnn__ast_legacy_ir | native_abort / native_abort | native_abort / native_abort | 最大池化反向需要沿用前向的数据排列；实际传入另一种排列，库不支持，所以修复前后都失败。最小对照中，只对齐排列就能通过原先失败的计算准备步骤。 |
| test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_in_static_mode_mkldnn__ast_pir_exe | target_abort / target_abort | passed / passed | 已由不捕获stderr的控制日志定位为缺少本题要补的PIR算子；与普通native abort区分。 |
| test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_resnet__ast_legacy_ir | passed / passed | passed / passed | 原范围独立回归测试。 |
| test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_resnet__ast_pir_exe | target_abort / target_abort | passed / passed | 已由不捕获stderr的控制日志定位为缺少本题要补的PIR算子；与普通native abort区分。 |
| test/dygraph_to_static/test_build_strategy.py::TestError::test_type_error__ast_legacy_ir | passed / passed | passed / passed | 原范围独立回归测试。 |
| test/dygraph_to_static/test_build_strategy.py::TestError::test_type_error__sot_legacy_ir | passed / passed | passed / passed | 原范围独立回归测试。 |

<a id="task-58219"></a>

## #58219 · PIR floor_divide / remainder operations

Oracle 已执行范围通过：两轮各 8 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 8 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T20:19:57Z

**已有 F2P/P2P 配对记录：** 4 / 4，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_floordiv | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_item | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_math_exists | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_matmul | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_mod | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_place | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_pow | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_some_dim | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-58323"></a>

## #58323 · atleast_1d / atleast_2d / atleast_3d APIs

Oracle 已通过：已通过，直接执行脚本的说明待同步。

**已做验证：** 直接执行原 Python 测试脚本，两轮各 89 项通过、2 项条件跳过；已计入累计通过。

**遇到的问题：** pytest 入口没有执行 __main__ 中所需的初始化；已验证的直接执行方式尚需写清楚。

**还需完成：** 将 python 直接执行原脚本的入口写入任务说明；跳过分支按其编译和设备条件补测。

pytest 入口没有执行 __main__ 中所需的初始化；已验证的直接执行方式尚需写清楚。

**原因：** 入口修正后的完整结果已经通过；需要同步的是任务说明，不是等待首次验证。

**处理：** 将 python 直接执行原脚本的入口写入任务说明；跳过分支按其编译和设备条件补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 89 通过 / 0 失败 / 0 错误 / 2 跳过；入口：python 直接运行原测试文件（执行 __main__ 初始化）。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** python 直接运行原测试文件（执行 __main__ 初始化）

**Oracle 确认时间：** 2026-10-11T18:59:35Z

**已有 F2P/P2P 配对记录：** 41 / 48，确认日期 2026-09-11。

上述 F2P/P2P 来自修正测试准备后的完整范围对照；任务包仍需正式修改。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_atleast_nd.py::TestAtleastAsTensorMethod::test_as_tensor_method | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_0::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_10::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_11::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_12::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_13::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_14::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_1::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_2::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_3::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_4::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_5::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_6::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_7::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_8::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_9::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_0::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_10::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_11::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_12::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_13::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_14::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_1::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_2::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_3::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_4::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_5::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_6::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_7::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_8::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastDim_9::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastErrorCombineInputs_0::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastErrorCombineInputs_1::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastErrorCombineInputs_2::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastMixData_0::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastMixData_1::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastMixData_2::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastMixData_3::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastMixData_4::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastMixDim_0::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_atleast_nd.py::TestAtleastMixDtypes_0::test_all | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_reshape_op.py::TestDygraphReshapeAPI::test_out | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestDygraphReshapeAPI::test_out_float32 | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestDygraphReshapeAPI::test_out_uint8 | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestDygraphReshapeInplaceAPI::test_out | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestDygraphReshapeInplaceAPI::test_out_float32 | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestDygraphReshapeInplaceAPI::test_out_uint8 | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeAPI::test_imperative | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeAPI::test_paddle_api | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeAPI_ZeroDim::test_dygraph | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeAPI_ZeroDim::test_static | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeBF16Op::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_reshape_op.py::TestReshapeBF16Op::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_reshape_op.py::TestReshapeFP16Op::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeFP16Op::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeInt8Op::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeInt8Op::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOp::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOp::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpBool::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpBool::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer1::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer1::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer1_attr_OnlyShape::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer1_attr_OnlyShape::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer1_attr_ShapeTensor::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer1_attr_ShapeTensor::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer2::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer2::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer2_attr_OnlyShape::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer2_attr_OnlyShape::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer2_attr_ShapeTensor::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer2_attr_ShapeTensor::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpError::test_paddle_api_error | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpWithInputShape::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOpWithInputShape::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOp_ZeroDim1::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOp_ZeroDim1::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOp_ZeroDim2::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOp_ZeroDim2::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOp_attr_OnlyShape::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOp_attr_OnlyShape::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOp_attr_ShapeTensor::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeOp_attr_ShapeTensor::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapePirOpResultListShape::test_opresult_list_shape | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeUint8Op::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeUint8Op::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeZeroTensor::test_reshape_zero_tensor_error | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestReshapeZeroTensor::test_reshape_zero_tensor_success | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestStaticReshape_::test_imperative | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_reshape_op.py::TestStaticReshape_::test_paddle_api | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |

<a id="task-58343"></a>

## #58343 · PIR logical, bitwise and scalar-power methods

Oracle 已执行范围通过：两轮各 15 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 15 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T20:18:03Z

**已有 F2P/P2P 配对记录：** 6 / 9，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_bitwise_and | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_bitwise_not | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_bitwise_or | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_bitwise_xor | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_equal_and_nequal | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_floordiv | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_greater | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_item | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_less | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_math_exists | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_matmul | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_mod | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_place | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_pow | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_some_dim | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-58917"></a>

## #58917 · tensor_split / hsplit / dsplit APIs

Oracle 尚未通过：已执行两轮，10 项因 PIR 接口不匹配失败。

**已做验证：** 原 splits API 范围两轮各 8 项通过、10 项失败，原命令排除了 test_with_pir_api。

**遇到的问题：** 10 项均报 paddle.pir 缺少 OpResult；原 Python 源码与借用运行库的接口不匹配。

**还需完成：** 使用该题配套源码与独立编译包，核对 PIR 接口，再执行完整注明的测试范围。

10 项均报 paddle.pir 缺少 OpResult；原 Python 源码与借用运行库的接口不匹配。

**原因：** 失败轨迹明确落在接口缺失，不能把版本混用导致的异常当作 tensor_split、hsplit、dsplit 数值功能已被验证失败。

**处理：** 使用该题配套源码与独立编译包，核对 PIR 接口，再执行完整注明的测试范围。

**确认方法：** 当前 Oracle 实际观察：两轮各 8 通过 / 10 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T20:23:52Z

**已有 F2P/P2P 配对记录：** 15 / 3，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_splits_api.py::TestDSplit::test_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestDSplit::test_error_dim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestDSplit::test_error_split | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestDSplit::test_split_dim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestHSplit::test_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestHSplit::test_error_dim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestHSplit::test_error_split | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestHSplit::test_split_dim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestTensorSplit::test_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestTensorSplit::test_error_dim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestTensorSplit::test_error_split | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestTensorSplit::test_special_indices | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestTensorSplit::test_split_axis | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestTensorSplit::test_split_dim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_splits_api.py::TestVSplit::test_dtype | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_splits_api.py::TestVSplit::test_error_dim | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_splits_api.py::TestVSplit::test_error_split | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_splits_api.py::TestVSplit::test_split_dim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-59021"></a>

## #59021 · PIR test_len

Oracle 尚未通过：已执行，TensorArray 静态图转换崩溃。

**已做验证：** 原测试已实际运行，两轮均 SIGSEGV；崩溃前和独立补测的局部结果保留，整题计数未收齐。

**遇到的问题：** TensorArray 的 len 测试在静态图转换的切片处理边界崩溃。

**还需完成：** 检查配套构建下的实际切片操作、输入向量、索引和指针，定位崩溃原因后重跑完整原测试。

TensorArray 的 len 测试在静态图转换的切片处理边界崩溃。

**原因：** 已定位 InsertSliceTarget 到输入和 ProgramTranslator 的调用边界，但真实参数与唯一根因未确认；更换入口并未被证明能解决。

**处理：** 检查配套构建下的实际切片操作、输入向量、索引和指针，定位崩溃原因后重跑完整原测试。

**确认方法：** 当前 Oracle 实际观察：测试崩溃（SIGSEGV），完整测试计数未闭合；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-10T01:23:15Z

**已有 F2P/P2P 配对记录：** 3 / 12，确认日期 2026-09-11。

3 条 F2P 在单独的 PIR 执行条件下确认；12 条 P2P 来自完整回归范围。条件不同，不能冒充原脚本已通过。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_fuse_elewise_add_act_pass.TestMNIST::test_batchnorm_fc_with_fuse_op | passed / passed | passed / passed | 静态初始化补齐后在Base/Gold双轮通过。 |
| test.legacy_test.test_fuse_elewise_add_act_pass.TestMNIST::test_simple_fc_with_fuse_op | passed / passed | passed / passed | 静态初始化补齐后在Base/Gold双轮通过。 |
| test.legacy_test.test_fuse_elewise_add_act_pass.TestFuseActElewiseAddInplaceGradPass::test_fuse_act_add_grad_pass_cpu | passed / passed | passed / passed | 静态初始化补齐后在Base/Gold双轮通过。 |
| test.legacy_test.test_fuse_elewise_add_act_pass.TestFuseActElewiseAddInplaceGradPass::test_fuse_act_add_grad_pass_cuda | empty_return / empty_return | empty_return / empty_return | 无CUDA时方法直接返回，不能计P2P。 |
| test.dygraph_to_static.test_len.TestLenWithTensorArray::test_len__ast_legacy_ir | passed / passed | passed / passed | 静态初始化补齐后在Base/Gold双轮通过。 |
| test.dygraph_to_static.test_len.TestLen::test_len__ast_legacy_ir | passed / passed | passed / passed | 静态初始化补齐后在Base/Gold双轮通过。 |
| test.dygraph_to_static.test_len.TestLen::test_len__sot_legacy_ir | passed / passed | passed / passed | 静态初始化补齐后在Base/Gold双轮通过。 |
| test.dygraph_to_static.test_len.TestLen::test_len__sot_mgs10_legacy_ir | passed / passed | passed / passed | 静态初始化补齐后在Base/Gold双轮通过。 |
| test.dygraph_to_static.test_len.TestLenWithTensorArray::test_len__sot_legacy_ir | passed / passed | passed / passed | 静态初始化补齐后在Base/Gold双轮通过。 |
| test.dygraph_to_static.test_len.TestLenWithTensorArray::test_len__sot_mgs10_legacy_ir | passed / passed | passed / passed | 静态初始化补齐后在Base/Gold双轮通过。 |
| test.dygraph_to_static.test_len.TestLenWithSelectedRows::test_len__ast_legacy_ir | passed / passed | passed / passed | 静态初始化补齐后在Base/Gold双轮通过。 |
| test.dygraph_to_static.test_len.TestLenWithSelectedRows::test_len__sot_legacy_ir | passed / passed | passed / passed | 静态初始化补齐后在Base/Gold双轮通过。 |
| test.dygraph_to_static.test_len.TestLenWithSelectedRows::test_len__sot_mgs10_legacy_ir | passed / passed | passed / passed | 静态初始化补齐后在Base/Gold双轮通过。 |
| test.dygraph_to_static.test_len.TestLenWithSelectedRows::test_len__ast_legacy_ir | failed / failed | passed / passed | 同名测试切换到题目要修复的PIR条件后构成F2P；为补充诊断，不替代前面完整原范围。 |
| test.dygraph_to_static.test_len.TestLenWithSelectedRows::test_len__sot_legacy_ir | failed / failed | passed / passed | 同名测试切换到题目要修复的PIR条件后构成F2P；为补充诊断，不替代前面完整原范围。 |
| test.dygraph_to_static.test_len.TestLenWithSelectedRows::test_len__sot_mgs10_legacy_ir | failed / failed | passed / passed | 同名测试切换到题目要修复的PIR条件后构成F2P；为补充诊断，不替代前面完整原范围。 |

<a id="task-59127"></a>

## #59127 · column_stack / row_stack / dstack / hstack / vstack APIs

Oracle 尚未通过：已执行并崩溃，配套运行库复测未完成。

**已做验证：** 原测试两轮出现 SIGSEGV；另已核对 Python 源码与底层运行库的接口，确认有版本混用。

**遇到的问题：** 此前 overlay 与借用包缺少测试所需的 pir.OpResult 接口；接口不匹配已确认，但崩溃的唯一根因仍未确认。

**还需完成：** 用该题独立配套编译包执行完整原测试，确认接口一致，并继续诊断仍然发生的崩溃。

此前 overlay 与借用包缺少测试所需的 pir.OpResult 接口；接口不匹配已确认，但崩溃的唯一根因仍未确认。

**原因：** 接口诊断只能解释已观察的部分失败；尚无配套构建下完整通过结果，不能由补齐接口推定崩溃已修复。

**处理：** 用该题独立配套编译包执行完整原测试，确认接口一致，并继续诊断仍然发生的崩溃。

**确认方法：** 当前 Oracle 实际观察：测试崩溃（SIGSEGV），完整测试计数未闭合；入口：原 tests/test.sh。

**运行条件：** 使用该题配套的 Python 源码与独立编译包；核对原测试需要的 legacy_test 辅助模块及 PIR 类型接口。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-10T02:27:25Z

**已有 F2P/P2P 配对记录：** 84 / 42，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_0d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_0d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_1d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_1d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_2d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_2d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_3d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_4d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_4d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_mix_ndim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestDStack::test_0d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestDStack::test_0d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestDStack::test_1d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestDStack::test_1d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestDStack::test_2d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestDStack::test_2d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestDStack::test_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestDStack::test_3d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestDStack::test_4d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestDStack::test_4d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestDStack::test_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestDStack::test_mix_ndim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorColumnStack::test_1d_2d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorColumnStack::test_1d_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorColumnStack::test_2d_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorColumnStack::test_mix_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorColumnStack::test_vstack_0d_1d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorDStack::test_1d_2d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorDStack::test_1d_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorDStack::test_2d_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorDStack::test_mix_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorDStack::test_vstack_0d_1d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorHStack::test_1d_2d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorHStack::test_1d_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorHStack::test_2d_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorHStack::test_mix_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorRowStack::test_1d_2d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorRowStack::test_1d_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorRowStack::test_2d_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorRowStack::test_mix_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorRowStack::test_vstack_0d_1d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorVStack::test_1d_2d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorVStack::test_1d_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorVStack::test_2d_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorVStack::test_mix_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestErrorVStack::test_vstack_0d_1d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestHStack::test_0d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestHStack::test_0d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestHStack::test_1d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestHStack::test_1d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestHStack::test_2d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestHStack::test_2d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestHStack::test_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestHStack::test_3d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestHStack::test_4d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestHStack::test_4d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestHStack::test_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestHStack::test_mix_ndim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestRowStack::test_0d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestRowStack::test_0d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestRowStack::test_1d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestRowStack::test_1d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestRowStack::test_2d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestRowStack::test_2d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestRowStack::test_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestRowStack::test_3d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestRowStack::test_4d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestRowStack::test_4d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestRowStack::test_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestRowStack::test_mix_ndim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestVStack::test_0d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestVStack::test_0d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestVStack::test_1d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestVStack::test_1d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestVStack::test_2d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestVStack::test_2d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestVStack::test_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestVStack::test_3d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestVStack::test_4d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestVStack::test_4d_more | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestVStack::test_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_extension_api.py::TestVStack::test_mix_ndim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_stack_op.py::API_DygraphTest::test_out | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::API_DygraphTest::test_single_tensor_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::API_test::test_out | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::API_test::test_pir_single_tensor_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::API_test::test_single_tensor_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackAPIWithLoDTensorArray::test_case | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackAPI_ZeroDim::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackBF16Op::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackBF16Op::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op1::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op1::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op2::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op2::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op3::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op3::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op4::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op4::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op5::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op5::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op6::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op6::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackFP16Op::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackListOfSingleTensor::test_list_single_tensor | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp1::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp1::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp2::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp2::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp3::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp3::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp4::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp4::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp5::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp5::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp6::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp6::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOpBase::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOpBase::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOpWithNegativeShape::test_out | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp_ZeroDim::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestStackOp_ZeroDim::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_stack_op.py::TestTensorStackAPIWithLoDTensorArray::test_case | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-59348"></a>

## #59348 · PIR sequence_mask

Oracle 已执行范围通过：两轮各 15 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 15 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-08T17:32:30Z

**已有 F2P/P2P 配对记录：** 13 / 2，确认日期 2026-09-11。

配对结果来自补静态初始化后的完整 15 项；任务入口仍待修改。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.sequence.test_sequence_mask.SequenceMaskTestBase::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.sequence.test_sequence_mask.SequenceMaskTest1::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.sequence.test_sequence_mask.SequenceMaskTest2::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.sequence.test_sequence_mask.SequenceMaskTest3::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.sequence.test_sequence_mask.SequenceMaskTest4::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.sequence.test_sequence_mask.SequenceMaskTest5::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.sequence.test_sequence_mask.SequenceMaskTest6::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.sequence.test_sequence_mask.SequenceMaskTestBase_tensor_attr::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.sequence.test_sequence_mask.SequenceMaskTest1_tensor_attr::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.sequence.test_sequence_mask.SequenceMaskTest2_tensor_attr::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.sequence.test_sequence_mask.SequenceMaskTest3_tensor_attr::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.sequence.test_sequence_mask.SequenceMaskTest4_tensor_attr::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.sequence.test_sequence_mask.SequenceMaskTest5_tensor_attr::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.sequence.test_sequence_mask.TestSequenceMaskOpError::test_errors | passed / passed | passed / passed | 修复前后各两轮通过：P2P。 |
| test.sequence.test_sequence_mask.TestSequenceMaskWithEmptyTensor::test_empty | passed / passed | passed / passed | 修复前后各两轮通过：P2P。 |

<a id="task-59374"></a>

## #59374 · Tensor apply / apply_ API

Oracle 已执行范围通过：两轮各 5 通过 / 0 失败 / 0 错误 / 1 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 5 通过 / 0 失败 / 0 错误 / 1 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T03:11:02Z

**已有 F2P/P2P 配对记录：** 5 / 0，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_apply.TestTensorApplyAPI::test_on_gpu | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test.legacy_test.test_apply.TestTensorApplyAPI::test_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_apply.TestTensorApplyAPI::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_apply.TestTensorApplyAPI::test_error | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_apply.TestTensorApplyAPI::test_to_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_inplace.TestDygraphTensorApplyInplace::test_inplace_api | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-59383"></a>

## #59383 · masked_scatter API

Oracle 已执行范围通过：两轮各 708 通过 / 0 失败 / 0 错误 / 16 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 708 通过 / 0 失败 / 0 错误 / 16 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用与该时期 API 兼容的 CPU Paddle 运行库；本次沿用已核对的 Python 源码覆盖方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T22:20:46Z

**已有 F2P/P2P 配对记录：** 28 / 680，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_inplace.py::TestContinuouslyInplace::test_continuously_inplace | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplace::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplace::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplace::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplace::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplace::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplace::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplace::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_errors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_errors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_backward_error | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_backward_success_1 | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_backward_success_2 | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_forward_result | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_forward_version | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_inplace_api | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_leaf_inplace_var_error | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_broadcast_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_type_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_continuous_inplace_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_forward_result | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_inplace_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_leaf_inplace_var_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestGetitemBeforeInplace::test_getitem_before_inplace | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestInplace::test_backward_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestInplace::test_backward_success_1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestInplace::test_backward_success_2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestInplace::test_forward_version | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_inplace.py::TestLossIsInplaceVar::test_loss_is_inplace_var | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI1::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI1::test_static_graph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI2::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI2::test_static_graph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI3::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI3::test_static_graph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI::test_static_graph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast2::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast2::test_static_graph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast3::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast3::test_static_graph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast4::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast4::test_static_graph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast5::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast5::test_static_graph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast::test_static_graph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterBF16::test_dygraph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterBF16::test_static_graph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterBF16APIBroadcast2::test_dygraph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterBF16APIBroadcast2::test_static_graph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterError::test_dtype_error | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterError::test_mask_error | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterError::test_numel_error | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API1::test_dygraph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API1::test_static_graph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API2::test_dygraph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API2::test_static_graph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API3::test_dygraph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API3::test_static_graph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast2::test_dygraph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast2::test_static_graph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast3::test_dygraph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast3::test_static_graph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast::test_dygraph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast::test_static_graph | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |

<a id="task-59715"></a>

## #59715 · matrix_exp API

Oracle 已执行范围通过：两轮各 108 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 108 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 已完成该题配套编译包的安装、导入与原测试；设备覆盖以实际测试结果为准。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-11T17:21:37Z

**已有 F2P/P2P 配对记录：** 56 / 52，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase3D::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase3D::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase3D::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase3DFloat32::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase3DFloat32::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase3DFloat32::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase4D::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase4D::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase4D::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase4DFloat32::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase4DFloat32::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase4DFloat32::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseEmpty::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseEmpty::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseEmpty::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseEmptyFloat32::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseEmptyFloat32::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseEmptyFloat32::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseError::test_error_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseError::test_error_ndim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseFloat32::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseFloat32::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseFloat32::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm0::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm0::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm0::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm1::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm1::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm1::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm2::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm2::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm2::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm0::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm0::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm0::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm1::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm1::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm1::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm2::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm2::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm2::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm3::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm3::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm3::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm4::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm4::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm4::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseScalar::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseScalar::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseScalar::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseScalarFloat32::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseScalarFloat32::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseScalarFloat32::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase1::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase1::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase1::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase2::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase2::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase2::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch1::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch1::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch1::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch2::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch2::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch2::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch3::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch3::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch3::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch4::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch4::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch4::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatchBig::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatchBig::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatchBig::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseFP32::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseFP32::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseFP32::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian1::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian1::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian1::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian2::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian2::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian2::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian3::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian3::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian3::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian4::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian4::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian4::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian5::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian5::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian5::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian6::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian6::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian6::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitianFP32::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitianFP32::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitianFP32::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseRcond::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseRcond::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseRcond::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::TestDivByZero::test_div_by_zero | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-59847"></a>

## #59847 · FractionalMaxPool2D / 3D

Oracle 已执行范围通过：两轮各 43 通过 / 0 失败 / 0 错误 / 32 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 43 通过 / 0 失败 / 0 错误 / 32 跳过；入口：原 tests/test.sh。

**运行条件：** CUDA设备与匹配的CUDA Paddle构建，FP16/BF16能力按节点要求确认

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T06:26:48Z

**已有 F2P/P2P 配对记录：** None / None，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPI::test_dynamic_graph | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPI::test_static_graph | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPI::test_static_graph_return_mask | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPIDtype::test_dtypes | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPIErrorOutputSize::test_error_output_size | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPIRandomU::test_error_random_u | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPIRandomU::test_none_random_u | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DClassAPI::test_dynamic_graph | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DClassAPI::test_static_graph | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_api.py::TestOutDtype::test_max_pool | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1::test_check_grad | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1::test_check_output | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_BF16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_BF16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_FP16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_FP16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2::test_check_grad | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2::test_check_output | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_BF16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_BF16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_FP16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_FP16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3::test_check_grad | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3::test_check_output | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_BF16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_BF16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_FP16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_FP16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op::test_check_grad | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op::test_check_output | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPI::test_dynamic_graph | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPI::test_static_graph | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPI::test_static_graph_return_mask | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPIDtype::test_dtypes | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPIErrorOutputSize::test_error_output_size | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPIRandomU::test_error_random_u | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPIRandomU::test_none_random_u | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DClassAPI::test_dynamic_graph | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DClassAPI::test_static_graph | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_api.py::TestOutDtype::test_max_pool | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1::test_check_grad | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1::test_check_output | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_BF16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_BF16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_FP16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_FP16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2::test_check_grad | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2::test_check_output | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_BF16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_BF16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_FP16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_FP16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3::test_check_grad | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3::test_check_output | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_BF16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_BF16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_FP16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_FP16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op::test_check_grad | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op::test_check_output | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_grad | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_pool2d_api.py::TestPool2DError_API::test_error_api | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_pool2d_api.py::TestPool2D_API::test_pool2d | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_pool2d_api.py::TestPool2D_API::test_pool2d_static | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_pool3d_api.py::TestPool3DError_API::test_error_api | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_pool3d_api.py::TestPool3D_API::test_pool3d | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_pool3d_api.py::TestPool3D_API::test_static_bf16_gpu | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_pool3d_api.py::TestPool3D_API::test_static_fp16_gpu | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |

<a id="task-59909"></a>

## #59909 · Parallel mode selection under sharding

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:12:13Z

**已有 F2P/P2P 配对记录：** 1 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_hybrid_parallel_mode_selection.py::test_existing_data_and_pure_sharding_modes | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_hybrid_parallel_mode_selection.py::test_sharding_with_data_parallel_uses_sharding_mode | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_hybrid_parallel_mode_selection.py::test_tensor_and_pipeline_modes_take_precedence | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-59910"></a>

## #59910 · 【PIR API adaptor No.31】Migrate paddle.distribution.Normal into pir

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 遵循该任务的运行入口、测试范围及设备条件。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:49:15Z

**计数说明：** F2P/P2P 需独立的 Base/Gold 配对；Gold 通过不能代替配对。

<a id="task-59973"></a>

## #59973 · slice_scatter API

Oracle 已通过：已通过，直接执行脚本的说明待同步。

**已做验证：** 直接执行原 Python 测试脚本，两轮各 74 项通过、29 项硬件条件跳过；已计入累计通过。

**遇到的问题：** pytest 不执行 __main__ 中的静态图初始化；29 项硬件条件跳过仍没有通过结论。

**还需完成：** 将 python 直接执行原脚本的入口写入任务说明；29 项跳过分支另需匹配编译能力和设备补测。

pytest 不执行 __main__ 中的静态图初始化；29 项硬件条件跳过仍没有通过结论。

**原因：** 已修正入口并取得完整两轮通过结果；待同步的是如何运行该题的说明，不是等待首次验证。

**处理：** 将 python 直接执行原脚本的入口写入任务说明；29 项跳过分支另需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 74 通过 / 0 失败 / 0 错误 / 29 跳过；入口：python 直接运行原测试文件（执行 __main__ 初始化）。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** python 直接运行原测试文件（执行 __main__ 初始化）

**Oracle 确认时间：** 2026-10-11T14:54:31Z

**已有 F2P/P2P 配对记录：** 47 / 25，确认日期 2026-09-11。

上述 F2P/P2P 来自修正测试准备后的完整范围对照；任务包仍需正式修改。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_scatter_op.py::TestScatterAPI::test_dygraph | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterAPI::test_large_data | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterAPI::test_static | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op0::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op0::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op1::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op1::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op2::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op2::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op3::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op3::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op4::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op4::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op5::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op5::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op6::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op6::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterBF16Op::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterError::test_scatter_index | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op0::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op0::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op1::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op1::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op2::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op2::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op3::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op3::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op4::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op4::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op5::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op5::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op6::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op6::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterFP16Op::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterInplaceAPI::test_dygraph | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterInplaceAPI::test_large_data | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterInplaceAPI::test_static | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp0::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp0::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp1::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp1::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp2::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp2::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp3::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp3::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp4::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp4::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp5::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp5::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp6::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp6::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterOp::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P 回归测试。 |
| test/legacy_test/test_scatter_op.py::TestScatterOpFp16::test_scatter_fp16 | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi3D::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi3D::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi3DFloat32::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi3DFloat32::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4D::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4D::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4DAxis3::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4DAxis3::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4DAxis3Float32::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4DAxis3Float32::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4DFloat32::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4DFloat32::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApi::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBfloat16::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBfloat16::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBool::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBool::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase2D::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase2D::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase2DFloat32::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase2DFloat32::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase3D::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase3D::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase3DFloat32::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase3DFloat32::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiError::test_error_index | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiError::test_error_ndim | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiFloat16::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiFloat16::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiFloat32::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiFloat32::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt16::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt16::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt32::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt32::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt64::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt64::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt8::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt8::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiIntComplex128::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiIntComplex128::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiIntComplex64::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiIntComplex64::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiUint8::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterApiUint8::test_api_static | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |
| test/legacy_test/test_slice_scatter.py::TestSliceScatterTensorApi::test_tensor | failed / failed | passed / passed | 修复前两轮失败，修复后两轮通过：有效 F2P。 |

<a id="task-60346"></a>

## #60346 · 【PIR API adaptor No.272】Migrate LookAhead to pir

Oracle 已执行范围通过：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 遵循该任务的运行入口、测试范围及设备条件。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:18:11Z

**计数说明：** F2P/P2P 需独立的 Base/Gold 配对；Gold 通过不能代替配对。

<a id="task-60417"></a>

## #60417 · Auto-tuner resume from CSV history

Oracle 已执行范围通过：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:46:03Z

**已有 F2P/P2P 配对记录：** 3 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_test/test_auto_tuner_resume.py::test_existing_search_and_history_flow_is_unchanged | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_test/test_auto_tuner_resume.py::test_launch_reuses_history_without_starting_training | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_test/test_auto_tuner_resume.py::test_resume_history_loads_values_and_preserves_a_copy | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_test/test_auto_tuner_resume.py::test_resume_lookup_returns_first_matching_configuration | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-60808"></a>

## #60808 · broadcast_to with zero dimensions

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold CPU 运行时；测试加载选定版本的 broadcast_to/expand 函数，任务也允许免重编译的验证路线。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T19:02:36Z

**已有 F2P/P2P 配对记录：** 1 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_broadcast_to_zero_dim_shape::test_integer_list_shape_regression | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_broadcast_to_zero_dim_shape::test_broadcast_to_accepts_zero_dim_tensor_shape_element | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_broadcast_to_zero_dim_shape::test_expand_accepts_multi_element_1d_shape_tensor | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-62012"></a>

## #62012 · [SOT] rewrite resume function generation

Oracle 已执行范围通过：两轮各 15 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 15 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 已完成该题配套编译包的安装、导入与原测试；设备覆盖以实际测试结果为准。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-11T20:53:51Z

**计数说明：** F2P/P2P 需独立的 Base/Gold 配对；Gold 通过不能代替配对。

<a id="task-64320"></a>

## #64320 · sparse.mask_as API

Oracle 已执行范围通过：两轮各 33 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 33 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** CUDA设备与匹配的CUDA Paddle构建

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T16:39:13Z

**已有 F2P/P2P 配对记录：** None / None，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCoo::test_1d | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCoo::test_2d | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCoo::test_3d | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCoo::test_4d | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCsr::test_2d | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCsr::test_3d | failed / failed | passed / passed | CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。 |
| test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCsr::test_error_dimension | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestCooError::test_indices_dtype | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestCooError::test_same_dimensions | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestCooError::test_same_nnz | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestCooError::test_small_shape | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_crows_first_value | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_dimension1 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_dimension2 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_dtype | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_same_shape1 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_same_shape2 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_same_shape3 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_batch_csr | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_coo_to_dense | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_coo_values_grad | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_sparse_coo_tensor_grad | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_sparse_coo_tensor_sorted | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_to_sparse_coo | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_to_sparse_csr | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_zero_nnz | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_create_coo_by_np | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_create_coo_by_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_create_coo_no_shape | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_create_csr_by_np | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_create_csr_by_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_dtype | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_place | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |

<a id="task-64323"></a>

## #64323 · [SOT][dynamic shape] Support dynamic int input

Oracle 已执行范围通过：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过。

原测试两轮均无失败、错误或跳过；Base 对照尚未执行。

**原因：** 逐题独立从零编译 Gold，并安装该题实际产生的 wheel；两轮完整运行原测试入口。Gold 结果按题号计入累计通过。

**处理：** 保留已通过的原测试入口和环境设置；另行执行独立 Base 对照，确认 F2P/P2P。

**确认方法：** 独立空构建目录完成配置、ALL 编译与安装，退出码均为 0；该题 wheel 安装、依赖检查和原生库导入通过。两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过，两轮原脚本退出码均为 0。生成输入来源检查仍待确认，未记为通过。

**运行条件：** CPU，Python 3.10，STRICT_MODE=1，MIN_GRAPH_SIZE=0；CCACHE_DISABLE=1，独立从零构建，无借包或 Python overlay。编译包 paddlepaddle-0.0.0-cp310-cp310-linux_x86_64.whl（119233611 字节）保存在磁盘，构建输出和归档目录各有一份。

**Oracle 入口：** 原 tests/test.sh：python -m pytest test/sot/test_dynamic_shape.py -q（CPU，STRICT_MODE=1，MIN_GRAPH_SIZE=0）

**Oracle 确认时间：** 2026-10-13T11:22:58.966619Z

**计数说明：** Base 对照尚未执行，F2P/P2P 配对未确认；Gold 完整通过不自动证明配对。每轮 2 项通过中，目标测试 1 项、导入的辅助测试 1 项；辅助项不计入目标覆盖。

<a id="task-64519"></a>

## #64519 · cholesky_inverse API

Oracle 已执行范围通过：两轮各 27 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 27 通过 / 0 失败 / 0 错误 / 0 跳过；入口：python 直接运行原测试文件（执行 __main__ 初始化）。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** python 直接运行原测试文件（执行 __main__ 初始化）

**Oracle 确认时间：** 2026-10-11T22:45:08Z

**已有 F2P/P2P 配对记录：** 16 / 9，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_cholesky_op.py::test_with_pir_api | missing / missing | missing / missing | 此项不构成有效测试配对，不计入 F2P/P2P。 |
| test/legacy_test/test_cholesky_op.py::TestCholeskyOp2D::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_cholesky_op.py::TestCholeskyOp2D::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_cholesky_op.py::TestCholeskyOp::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_cholesky_op.py::TestCholeskyOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_cholesky_op.py::TestCholeskyOpLower::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_cholesky_op.py::TestCholeskyOpLower::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_cholesky_op.py::TestCholeskySingularAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_cholesky_op.py::TestCholeskySingularAPI::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_cholesky_op.py::TestDygraph::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestCholeskyDecompositionData::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestCholeskyDecompositionData::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestCholeskyDecompositionData::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestCholeskyInverse::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestCholeskyInverse::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestCholeskyInverse::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestErrorDimension::test_0d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestErrorDimension::test_1d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestErrorDimension::test_3d | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestErrorDimension::test_asymmetric_matrix | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestErrorDtype::test_bfloat16 | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestErrorDtype::test_float16 | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestFloat32::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestFloat32::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestFloat32::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestUpperTriangularMatrix::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestUpperTriangularMatrix::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_cholesky_inverse.py::TestUpperTriangularMatrix::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-64881"></a>

## #64881 · FeatureAlphaDropout API

Oracle 尚未通过：已完整验证，仍有 1 项失败和 6 项错误。

**已做验证：** 已独立从零编译 Gold，并直接执行原脚本的 __main__ 初始化；两轮各 123 项通过、1 项失败、6 项错误、4 项跳过。

**遇到的问题：** 6 项错误涉及 dropout 比例为 1 时的掩码维度；另 1 项失败涉及命名随机种子的传递及两次输出不一致。

**还需完成：** 核对 dropout 掩码形状和随机种子在实际运算中的传递，确认修复边界后再跑完整原脚本；跳过项另按条件补测。

6 项错误涉及 dropout 比例为 1 时的掩码维度；另 1 项失败涉及命名随机种子的传递及两次输出不一致。

**原因：** 入口修正已经执行，失败仍可复现。掩码与种子相关源码已定位，但还需验证因果关系，不能假定入口修正足以解决。

**处理：** 核对 dropout 掩码形状和随机种子在实际运算中的传递，确认修复边界后再跑完整原脚本；跳过项另按条件补测。

**确认方法：** 当前 Oracle 实际观察：两轮各 123 通过 / 1 失败 / 6 错误 / 4 跳过；入口：python 直接运行原测试文件（执行 __main__ 初始化）。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** python 直接运行原测试文件（执行 __main__ 初始化）

**Oracle 确认时间：** 2026-10-12T01:22:54Z

**已有 F2P/P2P 配对记录：** 6 / 92，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutClassAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutClassAPI::test_dygraph_bfp16 | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutClassAPI::test_static_bfp16_gpu | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutClassAPI::test_static_fp16_gpu | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutFunctionAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutFunctionAPI::test_dygraph_bfp16 | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutFunctionAPI::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutFunctionAPIError::test_input_dtype_errors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutFunctionAPIError::test_input_type_errors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutClassAPI::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutClassAPI::test_dygraph_bfp16 | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutClassAPI::test_static_bfp16_gpu | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutClassAPI::test_static_fp16_gpu | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutFunctionAPI::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutFunctionAPI::test_dygraph_bfp16 | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutFunctionAPI::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutFunctionAPIError::test_input_dtype_errors | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutFunctionAPIError::test_input_ndim_errors | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutFunctionAPIError::test_input_type_errors | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_dropout_op.py::TestAlphaDropoutCAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestAlphaDropoutCAPI::test_static_fp16_gpu | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestAlphaDropoutFAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestAlphaDropoutFAPI::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestAlphaDropoutFAPIError::test_errors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestAlphaDropoutFAPIError::test_errors2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestBF16DropoutOp::test_check_grad_normal | failed / failed | failed / failed | 丢弃比例为100%时，旧dropout代码返回一个零值作为mask；测试要求mask和输入数组同样大小，因此6项报形状不符。Base和参考补丁均未修复这个旧问题。 |
| test/legacy_test/test_dropout_op.py::TestBF16DropoutOp::test_check_output | failed / failed | failed / failed | 丢弃比例为100%时，旧dropout代码返回一个零值作为mask；测试要求mask和输入数组同样大小，因此6项报形状不符。Base和参考补丁均未修复这个旧问题。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_0_fp32::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_0_fp32::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_0_fp32::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_10_downgrade_train::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_10_downgrade_train::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_10_downgrade_train::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_11_downgrade_train_dtype_bfp16::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_11_downgrade_train_dtype_bfp16::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_11_downgrade_train_dtype_bfp16::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_12_fp32_cpu::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_12_fp32_cpu::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_12_fp32_cpu::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_13_fp64_cpu::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_13_fp64_cpu::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_13_fp64_cpu::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_14_downgrade_train_cpu::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_14_downgrade_train_cpu::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_14_downgrade_train_cpu::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_1_bfp16::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_1_bfp16::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_1_bfp16::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_2_fp64::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_2_fp64::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_2_fp64::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_3_is_test_True::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_3_is_test_True::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_3_is_test_True::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_4_p_1_0::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_4_p_1_0::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_4_p_1_0::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_5_p_1_0_dtype_bfp16::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_5_p_1_0_dtype_bfp16::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_5_p_1_0_dtype_bfp16::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_6_p_1_0_test_False::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_6_p_1_0_test_False::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_6_p_1_0_test_False::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_7_p_1_0_test_False_dtype_bfp16::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_7_p_1_0_test_False_dtype_bfp16::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_7_p_1_0_test_False_dtype_bfp16::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_8_p_0_0::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_8_p_0_0::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_8_p_0_0::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_9_p_0_0_dtype_bfp16::test_jit_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_9_p_0_0_dtype_bfp16::test_jit_comp_with_cinn | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestCompositeDropout_9_p_0_0_dtype_bfp16::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropOut2DWithProbTensor::test_p_tensor | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropOut3DWithProbTensor::test_p_tensor | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropOutWithProbTensor::test_p_tensor | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropout2DCAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropout2DCAPI::test_static_fp16_with_gpu | passed / passed | passed / passed | 此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestDropout2DFAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropout2DFAPI::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropout2DFAPIError::test_errors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropout3DCAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropout3DFAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropout3DFAPI::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropout3DFAPIError::test_errors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutCAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutFAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutFAPI::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutFAPIError::test_errors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutFAPIError::test_errors2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp2::test_check_grad_normal | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp2::test_check_output | failed / failed | failed / failed | 丢弃比例为100%时，旧dropout代码返回一个零值作为mask；测试要求mask和输入数组同样大小，因此6项报形状不符。Base和参考补丁均未修复这个旧问题。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp2_ZeroDim::test_check_grad_normal | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp2_ZeroDim::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp3::test_check_grad_normal | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp3::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp4::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp5::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp6::test_check_grad_normal | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp6::test_check_output | failed / failed | failed / failed | 丢弃比例为100%时，旧dropout代码返回一个零值作为mask；测试要求mask和输入数组同样大小，因此6项报形状不符。Base和参考补丁均未修复这个旧问题。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp7::test_check_grad_normal | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp7::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp8::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp9::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp::test_check_grad_normal | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOpError::test_errors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOpInput1d::test_check_grad_normal | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOpInput1d::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOpWithSeed::test_check_grad_normal | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOpWithSeed::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOpWithSeedOnCPUPlace::test_seed_cpu_place | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp_ZeroDim::test_check_grad_normal | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutOp_ZeroDim::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestDropoutWithDeterminateSeedGenerator::test_static | failed / failed | failed / failed | 测试给两次dropout指定相同随机种子，但旧实现没有把指定种子传到运算中，实际仍随机生成，所以两次输出不同。 |
| test/legacy_test/test_dropout_op.py::TestFP16DropoutOp2::test_check_grad_normal | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestFP16DropoutOp2::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestFP16DropoutOp::test_check_grad_normal | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestFP16DropoutOp::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_0_fp32::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_10_downgrade_train::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_11_downgrade_train_dtype_bfp16::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_12_fp32_cpu::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_13_fp64_cpu::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_14_downgrade_train_cpu::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_1_bfp16::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_2_fp64::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_3_is_test_True::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_4_p_1_0::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_5_p_1_0_dtype_bfp16::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_6_p_1_0_test_False::test_static_comp | failed / failed | failed / failed | 丢弃比例为100%时，旧dropout代码返回一个零值作为mask；测试要求mask和输入数组同样大小，因此6项报形状不符。Base和参考补丁均未修复这个旧问题。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_7_p_1_0_test_False_dtype_bfp16::test_static_comp | failed / failed | failed / failed | 丢弃比例为100%时，旧dropout代码返回一个零值作为mask；测试要求mask和输入数组同样大小，因此6项报形状不符。Base和参考补丁均未修复这个旧问题。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_8_p_0_0::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_9_p_0_0_dtype_bfp16::test_static_comp | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dropout_op.py::TestRandomValue::test_fixed_random_number | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-65724"></a>

## #65724 · DataLoader persistent_workers

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:28:36Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_dataloader_persistent_workers_structure.py::test_existing_fifo_structure_handoff | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_dataloader_persistent_workers_structure.py::test_persistent_worker_reset_preserves_shared_metadata_channel | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_dataloader_persistent_workers_structure.py::test_structure_metadata_supports_thread_handoff | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-67195"></a>

## #67195 · Pipeline NaN checker

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:13:35Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_pp_nan_checker_before_send.py::test_finite_send_and_receive_only_behavior | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_pp_nan_checker_before_send.py::test_invalid_send_is_rejected_before_communication | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_pp_nan_checker_before_send.py::test_mixed_batch_is_not_launched_when_outgoing_tensor_is_invalid | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-68432"></a>

## #68432 · Sparse complex multiply / divide

Oracle 已执行范围通过：两轮各 13 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 13 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T21:07:07Z

**已有 F2P/P2P 配对记录：** 2 / 11，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_sparse_elementwise_op.TestSparseAddStaticAPI::test_coo | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_sparse_elementwise_op.TestSparseAddStaticAPI::test_coo_dense | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_sparse_elementwise_op.TestSparseDivStaticAPI::test_coo | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPI::test_add_bias | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPI::test_add_same_indices | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPI::test_support_dtypes_coo | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPI::test_support_dtypes_csr | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPIComplex::test_add_bias | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPIComplex::test_add_same_indices | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPIComplex::test_support_dtypes_coo | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPIComplex::test_support_dtypes_csr | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_sparse_elementwise_op.TestSparseMulStaticAPI::test_coo | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_sparse_elementwise_op.TestSparseSubStaticAPI::test_coo | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-70469"></a>

## #70469 · Fused dropout-add fallback

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:27:55Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_fused_dropout_add_fallback.py::test_inference_fallback_warns_once_and_preserves_arguments | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_fused_dropout_add_fallback.py::test_training_uses_reference_dropout_add_semantics | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_fused_dropout_add_fallback.py::test_zero_probability_result_remains_valid | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-71525"></a>

## #71525 · [SOT] Add JSON dumping and Base64 encoding for log output

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

原测试两轮均无失败、错误或跳过；Base 对照尚未执行。

**原因：** 逐题独立从零编译 Gold，并安装该题实际产生的 wheel；两轮完整运行原测试入口。Gold 结果按题号计入累计通过。

**处理：** 保留已通过的原测试入口和环境设置；另行执行独立 Base 对照，确认 F2P/P2P。

**确认方法：** 独立空构建目录完成配置、ALL 编译与安装，退出码均为 0；该题 wheel 安装、依赖检查和原生库导入通过。两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过，两轮原脚本退出码均为 0。生成输入来源检查仍待确认，未记为通过。

**运行条件：** CPU，Python 3.11，STRICT_MODE=1，MIN_GRAPH_SIZE=0；CCACHE_DISABLE=1，独立从零构建，无借包或 Python overlay。编译包 paddlepaddle-0.0.0-cp311-cp311-linux_x86_64.whl（129856218 字节）保存在磁盘，构建输出和归档目录各有一份。

**Oracle 入口：** 原 tests/test.sh：python -m pytest test/sot/test_info_collect.py -q（CPU，STRICT_MODE=1，MIN_GRAPH_SIZE=0）

**Oracle 确认时间：** 2026-10-13T09:29:42.228070Z

**计数说明：** Base 对照尚未执行，F2P/P2P 配对未确认；Gold 完整通过不自动证明配对。

<a id="task-71747"></a>

## #71747 · [SOT] Support reduce-like operation for all iterables

Oracle 已执行范围通过：两轮各 13 通过 / 0 失败 / 0 错误 / 0 跳过。

原测试两轮均无失败、错误或跳过；Base 对照尚未执行。

**原因：** 逐题独立从零编译 Gold，并安装该题实际产生的 wheel；两轮完整运行原测试入口。Gold 结果按题号计入累计通过。

**处理：** 保留已通过的原测试入口和环境设置；另行执行独立 Base 对照，确认 F2P/P2P。

**确认方法：** 独立空构建目录完成配置、ALL 编译与安装，退出码均为 0；该题 wheel 安装、依赖检查和原生库导入通过。两轮各 13 通过 / 0 失败 / 0 错误 / 0 跳过，两轮原脚本退出码均为 0。生成输入来源检查仍待确认，未记为通过。

**运行条件：** CPU，Python 3.11，STRICT_MODE=1，MIN_GRAPH_SIZE=0；CCACHE_DISABLE=1，独立从零构建，无借包或 Python overlay。编译包 paddlepaddle-0.0.0-cp311-cp311-linux_x86_64.whl（129942491 字节）保存在磁盘，构建输出和归档目录各有一份。

**Oracle 入口：** 原 tests/test.sh：python -m pytest test/sot/test_22_generator.py -q（CPU，STRICT_MODE=1，MIN_GRAPH_SIZE=0）

**Oracle 确认时间：** 2026-10-13T10:28:15.942259Z

**计数说明：** Base 对照尚未执行，F2P/P2P 配对未确认；Gold 完整通过不自动证明配对。

<a id="task-72800"></a>

## #72800 · cummin / cummax zero-size Tensor

Oracle 已执行范围通过：两轮各 8 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 8 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-11T21:45:54Z

**已有 F2P/P2P 配对记录：** 4 / 4，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_cummax_op.py::TestCummaxOp::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_cummax_op.py::TestCummaxOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_cummin_op.py::TestCumminOp::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_cummin_op.py::TestCumminOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_cummax_op.py::TestCummaxOp_ZeroSize::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_cummax_op.py::TestCummaxOp_ZeroSize::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_cummin_op.py::TestCumminOp_ZeroSize::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_cummin_op.py::TestCumminOp_ZeroSize::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-73122"></a>

## #73122 · multi_dot zero-size Tensor

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 复用精确 Base/Gold Paddle 库，将数学运算绑定到 MKL 2019.0.5。结论限此运行组合，没有重新编译完整 MKL 版 Paddle。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T02:41:54Z

**已有 F2P/P2P 配对记录：** 1 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_multi_dot_op.TestMultiDotOp_ZeroSize1::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过：F2P。 |
| test.legacy_test.test_multi_dot_op.TestMultiDotOp::test_check_grad | passed / passed | passed / passed | 修复前后各两轮通过：P2P。 |
| test.legacy_test.test_multi_dot_op.TestMultiDotOp::test_check_output | passed / passed | passed / passed | 修复前后各两轮通过：P2P。 |

<a id="task-73125"></a>

## #73125 · det / slogdet zero-size Tensor

Oracle 已执行范围通过：两轮各 8 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 8 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T02:27:32Z

**已有 F2P/P2P 配对记录：** 2 / 4，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_determinant_op.py::TestDeterminantOp::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_determinant_op.py::TestDeterminantOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_determinant_op.py::TestSlogDeterminantOp::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_determinant_op.py::TestSlogDeterminantOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_determinant_op.py::TestDeterminantOp_ZeroSize2::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_determinant_op.py::TestDeterminantOp_ZeroSize2::test_check_output | teardown_error / teardown_error | passed / passed | 测试主体之后的清理未正常完成，不能只按主体结果计通过。 |
| test/legacy_test/test_determinant_op.py::TestSlogDeterminantOp_ZeroSize2::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_determinant_op.py::TestSlogDeterminantOp_ZeroSize2::test_check_output | teardown_error / teardown_error | passed / passed | 测试主体之后的清理未正常完成，不能只按主体结果计通过。 |

<a id="task-73329"></a>

## #73329 · [SOT] Support `dataclass` construction and basic access

Oracle 已执行范围通过：两轮各 11 通过 / 0 失败 / 0 错误 / 0 跳过。

原测试两轮均无失败、错误或跳过；Base 对照尚未执行。

**原因：** 逐题独立从零编译 Gold，并安装该题实际产生的 wheel；两轮完整运行原测试入口。Gold 结果按题号计入累计通过。

**处理：** 保留已通过的原测试入口和环境设置；另行执行独立 Base 对照，确认 F2P/P2P。

**确认方法：** 独立空构建目录完成配置、ALL 编译与安装，退出码均为 0；该题 wheel 安装、依赖检查和原生库导入通过。两轮各 11 通过 / 0 失败 / 0 错误 / 0 跳过，两轮原脚本退出码均为 0。生成输入来源检查仍待确认，未记为通过。

**运行条件：** CPU，Python 3.11，STRICT_MODE=1，MIN_GRAPH_SIZE=0；CCACHE_DISABLE=1，独立从零构建，无借包或 Python overlay。编译包 paddlepaddle-0.0.0-cp311-cp311-linux_x86_64.whl（131360479 字节）保存在磁盘，构建输出和归档目录各有一份。

**Oracle 入口：** 原 tests/test.sh：python -m pytest test/sot/test_dataclass.py -q（CPU，STRICT_MODE=1，MIN_GRAPH_SIZE=0）

**Oracle 确认时间：** 2026-10-13T09:29:43.211919Z

**计数说明：** Base 对照尚未执行，F2P/P2P 配对未确认；Gold 完整通过不自动证明配对。

<a id="task-73385"></a>

## #73385 · svdvals / eigvals zero-size Tensor

Oracle 已执行范围通过：两轮各 8 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 8 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T02:50:52Z

**已有 F2P/P2P 配对记录：** 4 / 4，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_eigvals_op.py::TestEigvalsOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_svdvals_op.py::TestSvdvalsOp::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_svdvals_op.py::TestSvdvalsOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_svdvals_op.py::TestSvdvalsOp::test_svdvals_forward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_eigvals_op.py::TestEigvalsOp_ZeroSize::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_eigvals_op.py::TestEigvalsOp_ZeroSize2::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_svdvals_op.py::TestSvdvalsOp_ZeroSize::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_svdvals_op.py::TestSvdvalsOp_ZeroSize::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-73387"></a>

## #73387 · gather_tree zero-size Tensor

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T02:58:21Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_gather_tree_op.py::TestGatherTreeOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_gather_tree_op.py::TestGatherTreeOp_ZeroSize::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_gather_tree_op.py::TestGatherTreeOp_ZeroSize2::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-73535"></a>

## #73535 · conv1d CPU FP16 accuracy

Oracle 已执行范围通过：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T20:21:59Z

**已有 F2P/P2P 配对记录：** 1 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_functional_conv1d.py::TestFunctionalConv1DError::test_exception | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_functional_conv1d.py::TestFunctionalConv1D_CPU_FP16::test_cpu_fp16 | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-73569"></a>

## #73569 · matmul 1-D transpose gradient

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T02:48:18Z

**已有 F2P/P2P 配对记录：** 1 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_matmul_v2_op.py::TestMatMulV2Op::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_matmul_v2_op.py::TestMatMulV2Op::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_matmul_v2_op.py::TestMatMulOp_trans_y::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-73570"></a>

## #73570 · masked_fill zero-size Tensor

Oracle 已执行范围通过：两轮各 7 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 7 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-10T03:06:12Z

**已有 F2P/P2P 配对记录：** 3 / 4，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_diag_v2.TestDiagV2Op::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_diag_v2.TestDiagV2Op::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_diag_v2.TestDiagV2Op_ZeroSize::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_diag_v2.TestDiagV2Op_ZeroSize::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_masked_fill.TestMaskedFillAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_masked_fill.TestMaskedFillAPI::test_static_graph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_masked_fill.TestMaskedFillAPI_ZeroSize2::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-73582"></a>

## #73582 · squeeze / full zero-size Tensor

Oracle 已执行范围通过：两轮各 5 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 5 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T20:32:55Z

**已有 F2P/P2P 配对记录：** 2 / 3，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_fill_constant_op.py::TestFillConstantOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_fill_constant_op.py::TestFillConstantOp_ZeroSize::test_shape | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_squeeze2_op.py::TestSqueezeAPI::test_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_squeeze2_op.py::TestSqueezeAPI::test_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_squeeze2_op.py::TestSqueezeAPI_ZeroSize::test_api | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-73691"></a>

## #73691 · conv1d / conv2d / conv3d zero-size Tensor

Oracle 已执行范围通过：两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-10T03:07:11Z

**已有 F2P/P2P 配对记录：** 3 / 3，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_functional_conv1d.TestFunctionalConv1DError::test_exception | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_functional_conv1d.TestFunctionalConv1D_ZeroSize::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_functional_conv2d.TestFunctionalConv2DError::test_exception | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_functional_conv2d.TestFunctionalConv2D_ZeroSize::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_functional_conv3d.TestFunctionalConv3DError::test_exception | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_functional_conv3d.TestFunctionalConv3D_ZeroSize2::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-73702"></a>

## #73702 · gather_nd zero-size Tensor

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T02:46:32Z

**已有 F2P/P2P 配对记录：** 1 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_gather_nd_op.TestGatherNdOpWithEmptyIndex::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_gather_nd_op.TestGatherNdOpWithEmptyIndex::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_gather_nd_op.TestGatherNdOp_ZeroSize::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-73776"></a>

## #73776 · svd_lowrank zero-size Tensor

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-11T22:43:12Z

**已有 F2P/P2P 配对记录：** 1 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_svd_lowrank.py::TestSvdLowRankAPI_ZeroSize::test_dygraph_api | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_svd_lowrank.py::TestSvdLowrankAPI::test_errors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_svd_lowrank.py::TestSvdLowrankAPI::test_forward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-73821"></a>

## #73821 · pad zero-size Tensor

Oracle 已执行范围通过：两轮各 5 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 5 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-12T02:22:17Z

**已有 F2P/P2P 配对记录：** 3 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_pad3d_op.TestPad3dOp_ZeroSize_Circular::test_circular_0size | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_pad3d_op.TestPad3dOp_ZeroSize_Replicate::test_replicate_0size | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_pad_op.TestPadOp::test_check_grad_normal | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pad_op.TestPadOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pad_op.TestPadOp_ZeroSize2::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-73850"></a>

## #73850 · triangular_solve zero-size Tensor

Oracle 已执行范围通过：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T02:35:10Z

**已有 F2P/P2P 配对记录：** 1 / 3，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_triangular_solve_op.TestTriangularSolveOp::test_check_grad_normal | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_triangular_solve_op.TestTriangularSolveOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_triangular_solve_op.TestTriangularSolveOp_ZeroSize::test_check_grad_normal | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_triangular_solve_op.TestTriangularSolveOp_ZeroSize::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-73854"></a>

## #73854 · instance_norm zero-size Tensor

Oracle 已执行范围通过：两轮各 5 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 5 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T02:43:35Z

**已有 F2P/P2P 配对记录：** 2 / 3，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_instance_norm_op_v2.TestInstanceNorm::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_instance_norm_op_v2.TestInstanceNorm::test_error | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_instance_norm_op_v2.TestInstanceNorm::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_instance_norm_op_v2.TestInstanceNormOp_ZeroSize::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_instance_norm_op_v2.TestInstanceNormOp_ZeroSize::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-73855"></a>

## #73855 · dice_loss zero-size Tensor

Oracle 已执行范围通过：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-10T21:26:23Z

**已有 F2P/P2P 配对记录：** 1 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_nn_dice_loss.py::TestDiceLossOpApi::test_api_with_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_nn_dice_loss.py::TestDiceLossOpApi_ZeroSize::test_api_with_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-73880"></a>

## #73880 · softmax_with_cross_entropy zero-size Tensor

Oracle 已执行范围通过：两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T02:21:19Z

**已有 F2P/P2P 配对记录：** 4 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_softmax_with_cross_entropy_op.TestSoftmaxWithCrossEntropyOp::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_softmax_with_cross_entropy_op.TestSoftmaxWithCrossEntropyOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_softmax_with_cross_entropy_op.TestSoftmaxWithCrossEntropyOp_ZeroSize2::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_softmax_with_cross_entropy_op.TestSoftmaxWithCrossEntropyOp_ZeroSize2::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_softmax_with_cross_entropy_op.TestSoftmaxWithCrossEntropyOp_ZeroSize::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_softmax_with_cross_entropy_op.TestSoftmaxWithCrossEntropyOp_ZeroSize::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-74184"></a>

## #74184 · pinv zero-size Tensor

Oracle 已执行范围通过：两轮各 7 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 7 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用 README 允许的兼容 CPU 运行库，并加载该 task 的准确 Python 改动。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-10T22:56:04Z

**已有 F2P/P2P 配对记录：** 2 / 5，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase_ZeroSize::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase_ZeroSize::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian_ZeroSize::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian_ZeroSize::test_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-74212"></a>

## #74212 · multiplex zero-size Tensor

Oracle 已执行范围通过：两轮各 7 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 7 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T02:28:44Z

**已有 F2P/P2P 配对记录：** 2 / 5，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_multiplex_op.py::TestMultiplexOp_ZeroSize::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_multiplex_op.py::TestMultiplexOp_ZeroSize::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_multiplex_op.py::TestMultiplexOp::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_multiplex_op.py::TestMultiplexOp::test_check_grad_ignore_x1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_multiplex_op.py::TestMultiplexOp::test_check_grad_ignore_x1_x2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_multiplex_op.py::TestMultiplexOp::test_check_grad_ignore_x3 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_multiplex_op.py::TestMultiplexOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-74221"></a>

## #74221 · fold zero-size Tensor

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用 README 允许的兼容 CPU 运行库，并加载该 task 的准确 Python 改动。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-12T00:34:37Z

**已有 F2P/P2P 配对记录：** 1 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_fold_op.py::TestFoldOpError::test_errors | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_fold_op.py::TestFoldOp::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_fold_op.py::TestFoldOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-74305"></a>

## #74305 · unique zero-size Tensor

Oracle 已执行范围通过：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用 README 允许的兼容 CPU 运行库，并加载该 task 的准确 Python 改动。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-12T04:30:27Z

**已有 F2P/P2P 配对记录：** 1 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_unique.py::TestUniqueAPI_ZeroSize::test_dygraph_api_out | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_unique.py::TestUniqueOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-74421"></a>

## #74421 · msort API compatibility

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T17:55:01Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr74421_msort.py::test_existing_sort_dynamic_path_remains_compatible | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr74421_msort.py::test_msort_is_reexported_from_public_namespaces | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr74421_msort.py::test_msort_sorts_multidimensional_input_along_axis_zero | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-74439"></a>

## #74439 · ravel API compatibility

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 已完成该题配套编译包的安装、导入与原测试；设备覆盖以实际测试结果为准。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-12T06:17:41Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr74439_ravel.py::test_existing_flatten_dynamic_path_remains_compatible | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr74439_ravel.py::test_ravel_flattens_scalar_multidimensional_and_empty_inputs | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr74439_ravel.py::test_ravel_is_reexported_from_public_namespaces | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-74444"></a>

## #74444 · dropout1d API compatibility

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。独立正常 CPU 补测另有两轮各 6 项通过，不合并到原 3 项中。

**运行条件：** 已完成该题配套编译包的安装、导入与原测试；设备覆盖以实际测试结果为准。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-12T03:17:35Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr74444_dropout1d.py::test_dropout1d_is_public_and_preserves_2d_3d_channel_semantics | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr74444_dropout1d.py::test_dropout1d_rejects_invalid_inputs_and_warns_for_inplace | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr74444_dropout1d.py::test_existing_dropout2d_channel_axis_behavior_remains_compatible | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-74491"></a>

## #74491 · Tensor.requires_grad compatibility

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 已完成该题配套编译包的安装、导入与原测试；设备覆盖以实际测试结果为准。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-12T05:23:23Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr74491_requires_grad.py::test_existing_dim_metadata_behavior_remains_compatible | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr74491_requires_grad.py::test_requires_grad_rejects_non_boolean_assignments | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr74491_requires_grad.py::test_requires_grad_tracks_stop_gradient_across_tensor_modes | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-74586"></a>

## #74586 · scatter_add API compatibility

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 已完成该题配套编译包的安装、导入与原测试；设备覆盖以实际测试结果为准。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:17:03Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr74586_scatter_add.py::test_existing_index_add_dynamic_path_remains_compatible | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr74586_scatter_add.py::test_scatter_add_accumulates_repeated_indices_along_requested_dim | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr74586_scatter_add.py::test_scatter_add_is_reexported_from_public_namespaces | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-74594"></a>

## #74594 · broadcast_shapes API compatibility

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T17:58:18Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr74594_broadcast_shapes.py::test_broadcast_shapes_combines_multiple_shapes_and_rejects_mismatch | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr74594_broadcast_shapes.py::test_broadcast_shapes_supports_empty_and_single_shape_inputs | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr74594_broadcast_shapes.py::test_existing_broadcast_shape_delegation_remains_compatible | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-75274"></a>

## #75274 · Normal distribution unittest fix

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T17:25:02Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_normal_benchmark::test_dygraph_path_preserves_output_shape | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_normal_benchmark::test_scalar_static_path_is_independent_of_initial_mode | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_normal_benchmark::test_tensor_static_path_is_independent_of_initial_mode | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-76259"></a>

## #76259 · Windows UTF-8 inference paths

Oracle 尚未通过：已做前置核查，Windows 目标测试未执行完整。

**已做验证：** 已核对原补丁应用和运行平台；尚无 Windows 目标测试的完整执行记录。

**遇到的问题：** 原 Gold 补丁存在上下文不匹配；已有机器核查为 Linux，缺少该题要求的 Windows 与 MSVC 环境。

**还需完成：** 先解决原补丁应用问题，再在 Windows / MSVC x64 环境编译并执行 UTF-8 推理路径的目标测试。

原 Gold 补丁存在上下文不匹配；已有机器核查为 Linux，缺少该题要求的 Windows 与 MSVC 环境。

**原因：** 目前做的是补丁和平台前置核查，不是目标测试通过；Linux 检查不能替代 Windows 的路径编码行为。

**处理：** 先解决原补丁应用问题，再在 Windows / MSVC x64 环境编译并执行 UTF-8 推理路径的目标测试。

**确认方法：** 当前 Oracle 实际观察：完整测试结果尚未确认；入口：尚未执行完整测试。

**运行条件：** Windows CPU、MSVC x64，以及能够正确应用原补丁的精确源码。

**Oracle 入口：** 尚未执行完整测试

**Oracle 确认时间：** 尚未确认

**计数说明：** 只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

<a id="task-76522"></a>

## #76522 · Torch proxy compat override registration

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:26:11Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr76522_torch_proxy_compat_overrides.py::test_enable_torch_proxy_auto_registers_public_compat_exports | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr76522_torch_proxy_compat_overrides.py::test_existing_proxy_module_falls_back_to_original_attribute | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr76522_torch_proxy_compat_overrides.py::test_nested_override_is_visible_through_parent_proxy | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-76736"></a>

## #76736 · atan2 C++ sinking

Oracle 已执行范围通过：两轮各 10 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 10 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-08T17:46:29Z

**已有 F2P/P2P 配对记录：** 3 / 7，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_api_compatibility.TestAtan2API_Compatibility::test_dygraph_Compatibility | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility.TestAtan2API_Compatibility::test_static_Compatibility | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility.TestAtan2API_Compatibility::test_tensor_method | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_atan2_op.TestAtan2API::test_dygraph_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_atan2_op.TestAtan2API::test_static_api | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_atan2_op.TestAtan2Broadcasting::test_api_with_dygraph_empty_tensor_input | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_atan2_op.TestAtan2Broadcasting::test_dygraph_broadcast_gradient_values | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_atan2_op.TestAtan2EmptyTensorInput::test_api_with_dygraph_empty_tensor_input | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_atan2_op.TestAtan2_int32::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_atan2_op.TestAtan2_int64::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-76873"></a>

## #76873 · Activation APIs inplace support

Oracle 尚未通过：已尝试和补测，完整 CINN 验证未完成。

**已做验证：** 已有原入口尝试及独立 CPU、符号形状补测；补测记录中存在失败，完整原测试仍未收齐。

**遇到的问题：** pytest 曾导入错误的同名 utils，找不到 apply_to_static；无 CINN 的包不能提供符号形状测试所需信息，另有 SELU 数值阈值失败。

**还需完成：** 隔离正确的 utils，用具有所需 CINN / GPU 能力的配套编译包和设备执行完整测试，并单独复核 SELU 的数值差异。

pytest 曾导入错误的同名 utils，找不到 apply_to_static；无 CINN 的包不能提供符号形状测试所需信息，另有 SELU 数值阈值失败。

**原因：** 已有验证尝试，但入口、编译能力及数值问题尚未全部解决；不能把无 CINN 时的报错直接当作模型或 Gold 的实现错误。

**处理：** 隔离正确的 utils，用具有所需 CINN / GPU 能力的配套编译包和设备执行完整测试，并单独复核 SELU 的数值差异。

**确认方法：** 当前 Oracle 实际观察：完整测试结果尚未确认；入口：原 tests/test.sh。

**运行条件：** 正确的测试辅助模块搜索路径、启用 CINN 的配套构建，以及目标测试要求的 GPU 设备。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-11T11:41:32Z

**已有 F2P/P2P 配对记录：** 9 / 14，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.ir.pir.cinn.symbolic.test_infer_sym_shape_multinary_op.CELUOpInferSymbolicShapeTest::test_eval_symbolic | failed / failed | failed / failed | 当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。 |
| test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.HardSigmoidInferSymbolicShapeTest::test_eval_symbolic | failed / failed | failed / failed | 当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。 |
| test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.MishOpInferSymbolicShapeTest::test_eval_symbolic | failed / failed | failed / failed | 当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。 |
| test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.RRELUOpInferSymbolicShapeTest::test_eval_symbolic | failed / failed | failed / failed | 当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。 |
| test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SELUOpInferSymbolicShapeTest::test_eval_symbolic | failed / failed | failed / failed | 当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。 |
| test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SwishOpInferSymbolicShapeTest::test_eval_symbolic | failed / failed | failed / failed | 当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。 |
| test.legacy_test.test_celu_op.TestCELUAPI::test_api_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_celu_op.TestCELUAPI::test_api_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_celu_op.TestCELUOpClass_Inplace::test_cases | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_celu_op.TestCELUParamDecorator::test_all | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_hardsigmoid_op.TestHardSigmoidAPI::test_api_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_hardsigmoid_op.TestHardSigmoidAPI::test_api_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_hardsigmoid_op.TestHardSigmoidOpClass_Inplace::test_cases | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_imperative_layers.TestLayerPrint::test_layer_str | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_mish_op.TestMishAPI::test_api_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_mish_op.TestMishAPI::test_api_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_mish_op.TestMishOpClass_Inplace::test_case | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_rrelu_op.TestRRELUAPI::test_api_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_rrelu_op.TestRRELUAPI::test_api_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_rrelu_op.TestRRELUOpClass_Inplace::test_case | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_selu_op.TestSELUAPI::test_api_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_selu_op.TestSELUAPI::test_api_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_selu_op.TestSELUOpClass_Inplace::test_cases | failed / failed | failed / failed | 750个数中有1个很接近0，CPU结果与NumPy参考值的舍入差异超过测试阈值。相同输入下，普通SELU和原地SELU完全一致，修复前后也完全一致；没有发现本题补丁引入数值变化。 |
| test.legacy_test.test_swish_op.TestSwishAPI::test_api_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_swish_op.TestSwishAPI::test_api_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_swish_op.TestSwishOpClass_Inplace::test_cases | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SumOpInferSymbolicShapeTest::test_eval_symbolic | failed / failed | failed / failed | 当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。 |
| test.legacy_test.test_rrelu_op.RReluTest::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_rrelu_op.RReluTest::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_selu_op.SeluTest::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_selu_op.SeluTest::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-77064"></a>

## #77064 · allclose C++ sinking

Oracle 已执行范围通过：两轮各 23 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 23 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T04:48:39Z

**已有 F2P/P2P 配对记录：** 4 / 19，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_allclose_op.py::TestAllcloseOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpException::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpSmallNum::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpNanFalse::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpNanTrue::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseDygraph::test_api_case | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseError::test_input_dtype | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpFp16::test_fp16 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpFloat16::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpFloat32::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpFloat64::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpBool::test_close_False | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpBool::test_close_True | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpInt32::test_close_False | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpInt32::test_close_True | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpInt64::test_close_False | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpInt64::test_close_True | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOpLargeDimInput::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseOp_ZeroSize::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseAlias::test_alias | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_allclose_op.py::TestAllcloseAlias::test_tensor_method_alias | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_compat_allclose.py::TestCompatAllclose::test_allclose_args | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_compat_allclose.py::TestCompatAllclose::test_allclose_return_bool | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-77078"></a>

## #77078 · inverse C++ sinking

Oracle 尚未通过：已完整执行，4 项静态 inverse 调用报错。

**已做验证：** 原 inverse 测试两轮各 32 项通过、4 项错误，原脚本均退出 1。

**遇到的问题：** 4 项静态模式测试调用 paddle.inverse 时，底层要求 Value 参数却收到 None；报错经过 generated_tensor_methods_patch 的 inverse 调用。

**还需完成：** 核对静态模式初始化、inverse 的 Python 接口绑定和配套构建，查明 None 的来源，再执行完整 36 项测试。

4 项静态模式测试调用 paddle.inverse 时，底层要求 Value 参数却收到 None；报错经过 generated_tensor_methods_patch 的 inverse 调用。

**原因：** 报错位置已从实际日志确认；Python 路由、运行模式和底层实现之间的唯一根因尚未定位，不能仅凭换入口认定解决。

**处理：** 核对静态模式初始化、inverse 的 Python 接口绑定和配套构建，查明 None 的来源，再执行完整 36 项测试。

**确认方法：** 当前 Oracle 实际观察：两轮各 32 通过 / 0 失败 / 4 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-08T20:28:36Z

**已有 F2P/P2P 配对记录：** 3 / 33，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_inverse_op.TestInverseAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseAPI::test_dygraph_with_name | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseAPI::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseAPI::test_static_with_name | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseAPICompatibility::test_dimension_validation | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseAPICompatibility::test_dygraph_compatibility | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_inverse_op.TestInverseAPICompatibility::test_edge_cases | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseAPICompatibility::test_parameter_aliases | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_inverse_op.TestInverseAPICompatibility::test_static_compatibility | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_inverse_op.TestInverseAPICompatibility::test_tensor_method_compatibility | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseAPIError::test_errors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseAPI_ZeroSize::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOp::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpBatched::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpBatched::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpBatchedComplex::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpBatchedComplex::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpBatchedFP32::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpBatchedFP32::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpBatchedZeroSize::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpBatchedZeroSize::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpComplex128::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpComplex128::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpComplex64::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpComplex64::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpFP32::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpFP32::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpLarge::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpLarge::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpLargeFP32::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpLargeFP32::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpZeroSize::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseOpZeroSize::test_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseSingularAPI::test_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_inverse_op.TestInverseSingularAPI::test_static | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-77150"></a>

## #77150 · PyLayer grad-node attribute copy

Oracle 已执行范围通过：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-08T19:05:32Z

**已有 F2P/P2P 配对记录：** 1 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_pylayer_op.TestPyLayer::test_pylayer_with_partial_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_pylayer_op.TestPyLayer::test_simple_pylayer_multiple_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-77495"></a>

## #77495 · MaxPool dilation option

Oracle 已执行范围通过：两轮各 20 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 20 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 必须先成功应用补丁，再编译和运行测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-10T18:00:15Z

**计数说明：** 只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

<a id="task-77749"></a>

## #77749 · pad_sequence / unpad_sequence

Oracle 已执行范围通过：两轮各 22 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 22 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-10T00:37:46Z

**已有 F2P/P2P 配对记录：** 21 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_rnn_cell_api.py::TestRnnUtil::test_case | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_rnn_utils.py::TestPadSequence::test_0d_trailing_dims | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestPadSequence::test_basic_batch_first_false | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestPadSequence::test_basic_batch_first_true | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestPadSequence::test_custom_padding_value | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestPadSequence::test_equal_length_sequences | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestPadSequence::test_error_invalid_padding_side | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestPadSequence::test_error_not_list | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestPadSequence::test_integer_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestPadSequence::test_multidimensional_sequences | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestPadSequence::test_padding_side_left | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestPadSequence::test_padding_side_left_with_value | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestPadSequence::test_single_sequence | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestPadUnpadIntegration::test_left_pad_unpad_roundtrip | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestPadUnpadIntegration::test_various_dtypes | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_basic_batch_first_false | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_basic_batch_first_true | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_equal_length | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_multidimensional | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_roundtrip | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_roundtrip_batch_first_false | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_single_sequence | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-78048"></a>

## #78048 · dsplit / hsplit / vsplit parameter aliases

Oracle 已执行范围通过：两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-12T01:29:38Z

**已有 F2P/P2P 配对记录：** 3 / 3，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_api_compatibility.py::TestDsplitAPI::test_dygraph_Compatibility | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_api_compatibility.py::TestHsplitAPI::test_dygraph_Compatibility | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_api_compatibility.py::TestVsplitAPI::test_dygraph_Compatibility | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr78048_p2p.py::test_p2p_dsplit_original_parameters | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr78048_p2p.py::test_p2p_hsplit_original_parameters | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr78048_p2p.py::test_p2p_vsplit_original_parameters | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-78082"></a>

## #78082 · ParameterDict pop / values / keys

Oracle 已执行范围通过：两轮各 32 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 32 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T16:08:52Z

**已有 F2P/P2P 配对记录：** 9 / 23，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_imperative_container_parameterdict.py::TestImperativeContainerParameterDict::test_parameter_dict | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictAccess::test_getitem | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictAccess::test_len_iter_contains | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictAccess::test_setitem | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictAccess::test_setitem_non_parameter_raises | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictForwardBackward::test_float64_params | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictForwardBackward::test_forward_and_backward | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictForwardBackward::test_replace_param_changes_output_shape | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictInit::test_init_errors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictInit::test_init_preserves_order | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictInit::test_init_types | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictInit::test_init_with_parameter_dict | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictInit::test_init_with_values_alias | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_keys_after_update | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_keys_returns_all_in_order | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_pop_all_items_leaves_empty | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_pop_missing_key_raises | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_pop_reduces_values | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_pop_returns_correct_param | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_values_are_parameters | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_values_count_matches_len | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_values_shapes | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictRegistration::test_dynamic_setitem_and_update_registered | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictRegistration::test_gradient_flows | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictRegistration::test_registered_in_parameters_named_state_dict | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictStateDictRoundtrip::test_output_matches_after_load | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictStateDictRoundtrip::test_state_dict_keys_present | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictStateDictRoundtrip::test_state_dict_roundtrip_values | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictUpdate::test_update_errors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictUpdate::test_update_from_parameter_dict | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictUpdate::test_update_input_types | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictUpdate::test_update_overwrites | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-78085"></a>

## #78085 · fix: Implement RestrictedUnpickler to prevent RCE via pickle deserialization (CWE-502)

Oracle 已执行范围通过：两轮各 20 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。独立正常保存、加载兼容性补测曾有 12 项通过、3 项失败，不能由原 20 项通过推定全部兼容性通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 20 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 遵循该任务的运行入口、测试范围及设备条件。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T22:00:49Z

**计数说明：** F2P/P2P 需独立的 Base/Gold 配对；Gold 通过不能代替配对。

<a id="task-78104"></a>

## #78104 · CUDA device conversion from Tensor place

Oracle 已执行范围通过：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:29:38Z

**已有 F2P/P2P 配对记录：** 1 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_device_place_conversion_contract.py::test_existing_string_and_concrete_place_behavior_remains_valid | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_device_place_conversion_contract.py::test_generic_place_preserves_device_type_and_id | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-78138"></a>

## #78138 · pixel_shuffle C++ sinking

Oracle 已执行范围通过：两轮各 17 通过 / 0 失败 / 0 错误 / 2 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 17 通过 / 0 失败 / 0 错误 / 2 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T02:29:45Z

**已有 F2P/P2P 配对记录：** 2 / 15，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleBF16Op::test_check_grad | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleBF16Op::test_check_output | skipped / skipped | skipped / skipped | 按测试自身的运行条件跳过，不计有效 F2P/P2P。 |
| test.legacy_test.test_api_compatibility.TestPixelShuffleAPI_Compatibility::test_dygraph_Compatibility | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility.TestPixelShuffleAPI_Compatibility::test_static_Compatibility | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_pixel_shuffle_op.TestChannelLast::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestChannelLast::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleAPI::test_api_fp16 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleAPI::test_dygraph1 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleAPI::test_dygraph2 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleAPI::test_static_graph_functional | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleAPI::test_static_graph_layer | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleError::test_error_functional | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleError::test_error_layer | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleFP16Op::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleFP16Op::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleOp::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleOp::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleOp_ZeroSize::test_check_grad | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleOp_ZeroSize::test_check_output | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-78238"></a>

## #78238 · put_along_axis zero-size indices

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T20:52:02Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_put_along_axis_zero_size.py::TestPutAlongAxisZeroSize::test_non_empty_indices_existing_behavior | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_put_along_axis_zero_size.py::TestPutAlongAxisZeroSize::test_zero_size_indices_in_place | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_put_along_axis_zero_size.py::TestPutAlongAxisZeroSize::test_zero_size_indices_out_of_place | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-78301"></a>

## #78301 · Layer.to / Tensor.to compatibility

Oracle 已执行范围通过：两轮各 34 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 34 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T21:03:09Z

**已有 F2P/P2P 配对记录：** 13 / 21，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_blocking_non_blocking_conflict_raises | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_invalid_first_arg | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_cast_all_with_keyword_dtype | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_cast_all_with_positional_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_cast_all_with_tensor | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_keyword_blocking | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_keyword_device | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_keyword_device_and_dtype | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_keyword_dtype | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_keyword_non_blocking | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_no_args | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_positional_device_and_dtype | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_positional_device_string | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_positional_dtype_float16 | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_positional_dtype_string | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_positional_paddle_dtype | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_positional_tensor | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_returns_self | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_sequential_to_calls | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_sublayers_cast | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_blocking_non_blocking_conflict_raises | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_keyword_device | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_keyword_dtype | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_keyword_non_blocking | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_no_args | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_positional_device | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_positional_device_and_dtype | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_positional_dtype | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_positional_dtype_string | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_positional_other | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_too_many_args | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_unexpected_keyword | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_api_compatibility_part3.TestTensorToCopyCompatibility::test_copy_as_positional_argument | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_base_layer.TestLayerTo::test_main | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-78342"></a>

## #78342 · paddle._assert API

Oracle 已执行范围通过：两轮各 31 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 31 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T20:38:30Z

**已有 F2P/P2P 配对记录：** 7 / 24，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_dygraph_compatibility_with_torch | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_dygraph_default_message | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_dygraph_non_tensor_fail | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_dygraph_non_tensor_pass | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_dygraph_tensor_fail | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_dygraph_tensor_pass | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_static_tensor_condition | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_complex_numbers | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_mappings | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_msg_callable | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_msg_override | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_nan_handling | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_nested_structure_error_msg | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_numpy_scalars | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_object_pair_broken_eq | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_pair_repr_and_extra_repr | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_scalars_exact_match | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_scalars_mismatch | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_scalars_tolerances | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_sequences | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_static_graph_variable | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_tensor_device_check | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_tensor_dtype_check | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_tensor_exact_match | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_tensor_mismatch_msg_details | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_tensor_shape_mismatch | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_tensor_tolerances | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_tolerance_validation_logic | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_type_promotion_logic | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_unsupported_types | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_assert_close.py::TestAssertClose::test_zero_dim_tensor_mismatch | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-78440"></a>

## #78440 · cdist zero-size Tensor handling

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-10T01:26:47Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_cdist.TestCdistZeroSizeBatch4D::test_dygraph_api | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_cdist.TestCdistZeroSizeGrad::test_stop_gradient_false | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_cdist.TestCdistZeroSizeGrad::test_stop_gradient_true | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-78441"></a>

## #78441 · aminmax operator

Oracle 已执行范围通过：两轮各 30 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 30 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 精确源码构建的 CPU Paddle，启用 CINN；任务脚本已包含所需测试路径和运行开关。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T10:51:37Z

**已有 F2P/P2P 配对记录：** 26 / 4，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOp::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOp::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOpAxis0::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOpAxis0::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOpAxis1::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOpAxis1::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOpAxisNeg::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOpAxisNeg::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOpKeepdim::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOpKeepdim::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOpFloat32::test_check_grad | failed / failed | passed / passed | 测试函数只有 pass，无有效断言，不计入有效 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOpFloat32::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOpZeroDim::test_check_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOpZeroDim::test_check_output | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxOpEmptyTensor::test_empty_tensor_grad | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_dygraph | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_dygraph_gradient | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_dygraph_gradient_duplicate_values | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_dygraph_gradient_with_axis | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_dygraph_out | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_dygraph_out_with_axis | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_static | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxAPI_Compatibility::test_dygraph_Compatibility | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxAPI_Compatibility::test_static_Compatibility | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxDynamicShape::test_all_dynamic | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_aminmax_op.py::TestAminmaxInferSymbolicShapePass::test_infer_symbolic_shape_pass | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/ir/pir/cinn/symbolic/test_infer_sym_shape_unary_op.py::AminmaxOpInferSymbolicShapeTest::test_eval_symbolic | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_max_min_amax_amin_op.py::TestAmaxAPI_Compatibility::test_dygraph_Compatibility | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_max_min_amax_amin_op.py::TestAminAPI_Compatibility::test_dygraph_Compatibility | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_max_min_amax_amin_op.py::TestAmaxAminOutAPI::test_amax_out_in_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_max_min_amax_amin_op.py::TestAmaxAminOutAPI::test_amin_out_in_dygraph | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-78452"></a>

## #78452 · paddle.load dataclass objects

Oracle 已执行范围通过：两轮各 43 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 43 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T22:08:44Z

**已有 F2P/P2P 配对记录：** 16 / 27，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_restricted_unpickler.py::TestDataclassInParseEveryObject::test_dataclass_in_list | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestDataclassInParseEveryObject::test_dataclass_in_ordered_dict | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestDataclassInParseEveryObject::test_dataclass_in_tuple | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestDataclassInParseEveryObject::test_dataclass_passthrough | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestDataclassInParseEveryObject::test_nested_dataclass_in_dict | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_builtin_function | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_builtin_method | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_class_with_getstate | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_class_with_reduce | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_class_with_reduce_ex | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_class_with_setstate | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_module_type | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_non_class | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_safe_class_with_nested_attributes | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_safe_class_with_regular_methods | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_safe_dataclass | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_safe_user_defined_class | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestPickleLoadsMac::test_pickle_loads_mac_basic | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestPickleLoadsMac::test_pickle_loads_mac_state_dict | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestReconstructDenseTensorData::test_reconstruct_returns_data_unchanged | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestReconstructDenseTensorData::test_reconstruct_with_multidim_array | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_dict_with_numpy | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_list_of_arrays | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_nested_dict | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_numpy_float64 | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_numpy_ndarray | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_ordered_dict | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_safe_loads_pickle | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_arbitrary_module | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_eval | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_exec | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_open | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_os_popen | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_os_system | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_subprocess | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerWithFile::test_malicious_model_file | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerWithFile::test_safe_model_file | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestSafeUserDefinedClassLoading::test_config_class_like_arguments | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestSafeUserDefinedClassLoading::test_load_dict_with_safe_classes | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestSafeUserDefinedClassLoading::test_load_safe_dataclass | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestSafeUserDefinedClassLoading::test_load_safe_user_defined_class | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler.py::TestSafeUserDefinedClassLoading::test_reject_class_with_reduce_ex | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler.py::TestSafeUserDefinedClassLoading::test_reject_mixed_safe_and_unsafe_classes | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-78522"></a>

## #78522 · distributed launch os.kill

Oracle 已执行范围通过：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T19:00:26Z

**已有 F2P/P2P 配对记录：** 3 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_launch_coverage.py::TestCoverage::test_find_free_ports | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_launch_main_kill.py::TestLaunchMainProcessCleanup::test_filter_pids | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_launch_main_kill.py::TestLaunchMainProcessCleanup::test_terminate_processes_permission_error | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_launch_main_kill.py::TestLaunchMainProcessCleanup::test_terminate_processes_process_lookup | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-78570"></a>

## #78570 · Optimizer.step closure compatibility

Oracle 已执行范围通过：两轮各 9 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 9 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:49:49Z

**已有 F2P/P2P 配对记录：** 6 / 3，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_f2p_closure_runs_with_grad_enabled_and_supplies_update_grad[Adam-path1] | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_f2p_closure_runs_with_grad_enabled_and_supplies_update_grad[AdamW-path2] | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_f2p_closure_runs_with_grad_enabled_and_supplies_update_grad[Optimizer-path0] | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_f2p_optimizer_steps_accept_closure_and_return_loss[Adam-path1] | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_f2p_optimizer_steps_accept_closure_and_return_loss[AdamW-path2] | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_f2p_optimizer_steps_accept_closure_and_return_loss[Optimizer-path0] | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_p2p_step_without_closure_keeps_existing_update_path[Adam-path1] | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_p2p_step_without_closure_keeps_existing_update_path[AdamW-path2] | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_p2p_step_without_closure_keeps_existing_update_path[Optimizer-path0] | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-78728"></a>

## #78728 · support to detect the recompute context

Oracle 已执行范围通过：两轮各 14 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 14 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 已完成该题配套编译包的安装、导入与原测试；设备覆盖以实际测试结果为准。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-12T07:12:40Z

**计数说明：** F2P/P2P 需独立的 Base/Gold 配对；Gold 通过不能代替配对。

<a id="task-78823"></a>

## #78823 · pin_memory support for random APIs

Oracle 尚未通过：已尝试，导入受阻且完整目标结果缺失。

**已做验证：** 已有运行尝试与接口核查；记录中的两次脚本退出 0，但没有完整测试节点计数，不能据此判通过。

**遇到的问题：** 混用 Python 模块时缺少 convert_to_vartype；该题还涉及 pin_memory，目标覆盖需要匹配的 CUDA 或 XPU 编译包与设备。

**还需完成：** 使用该题配套源码独立编译，解决导入接口不匹配，在所需设备上执行完整目标测试并收齐节点结果。

混用 Python 模块时缺少 convert_to_vartype；该题还涉及 pin_memory，目标覆盖需要匹配的 CUDA 或 XPU 编译包与设备。

**原因：** 导入失败和记录不完整都已有证据；构建准备、局部 CPU 检查或脚本退出 0 均不能代替 pin_memory 目标分支的完整结果。

**处理：** 使用该题配套源码独立编译，解决导入接口不匹配，在所需设备上执行完整目标测试并收齐节点结果。

**确认方法：** 当前 Oracle 实际观察：完整测试结果尚未确认；入口：原 tests/test.sh。

**运行条件：** 至少一张CUDA或XPU设备和匹配的Paddle构建；按实际后端允许另一后端条件跳过

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-11T06:10:53Z

**已有 F2P/P2P 配对记录：** None / None，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_eager_tensor.py::TestDenseTensorToTensor::test_same_place_data_ptr_consistency | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test___cuda_array_interface__ | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_backward | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_deep_copy | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_deep_copy_0size_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_detach | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_dlpack_device | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_element_size | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_gradient | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_if | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_itemsize | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_leaf_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_list_to_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_print_tensor_dtype | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_set_value | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_slice | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor__format__ | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_and_to_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_as_np | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_dtype_compare | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_dtype_hash | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_dtype_singleton_pir | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_eq_unsupported_type | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_method_or_module | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_module | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_pin_memory_and_device | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str2 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str3 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_bf16 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_complex128 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_complex64 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_fp8_e4m3fn | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_fp8_e5m2 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_linewidth | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_linewidth2 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_scaler | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_shape_with_zero | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_to_np | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_to_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_string | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_tensor_attributes | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_tensor_change_place | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_tensor_from___cuda_array_interface__ | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_tensor_not_change_input_stop_gradient | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_tensor_with_densetensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tuple_to_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_write_property | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorClear::test_clear | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorCopyGradientFrom::test_copy_gradient_from | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorGradNameValue::test_eager_tensor_grad_name_value | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorIndex::test__index__with_0size_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorIndex::test__index__with_non_scalar_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorInitEagerTensorFromTensorWithDevice::test_tensor_init | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorInplaceVersion::test_bump_inplace_version | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorInplaceVersion::test_setitem | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorIsCudaIsCpu::test_dynamic_is_cuda_is_cpu | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorIsCudaIsCpu::test_static_is_cuda_is_cpu | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorNelement::test_nelement | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorNumel::test_numel_normal | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorNumel::test_numel_without_holder | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorOffset::test_offset | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitem::test_value_int | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitem::test_value_numpy | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitem::test_value_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemBoolIndex::test_value_int | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemBoolIndex::test_value_numpy | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemBoolIndex::test_value_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp32::test_value_float | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp32::test_value_int | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp32::test_value_numpy | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp32::test_value_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp64::test_value_int | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp64::test_value_numpy | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp64::test_value_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemInt64::test_value_int | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemInt64::test_value_numpy | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemInt64::test_value_tensor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorShareBufferTo::test_share_buffer_To | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorSlice::test_slice | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_different_dtypes | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_dim_none_equiv | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_invalid_type | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_negative_dim | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_no_dim | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_out_of_bounds | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_various_shapes | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_with_dim | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_zero_size_contiguous_view_reshape_and_slice | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestEagerTensorTo::test_to_api | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestListToTensor::test_list_to_tensor_bfloat16 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestListToTensor::test_list_to_tensor_bfloat16_float32 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestListToTensor::test_list_to_tensor_float16 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestListToTensor::test_list_to_tensor_float16_float32 | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestSetDynamicAttributeToEagerTensorInstance::test_set_dynamic_attribute_to_eager_tensor_instance_create_via_constructor | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_eager_tensor.py::TestSetDynamicAttributeToEagerTensorInstance::test_set_dynamic_attribute_to_eager_tensor_instance_create_via_to_pyobject | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_rand.py::TestCreationOut::test_rand | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_rand.py::TestTensorCreation::test_pin_memory_cpu_device | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_rand.py::TestTensorCreation::test_rand | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintAPI::test_api | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintAPI_ZeroDim::test_dygraph | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintAPI_ZeroDim::test_static | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintAliasAndOut::test_alias_and_out | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintAliasAndOut::test_out_static_mode | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintAliasAndOut::test_size_alias_static_mode | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_device_and_requires_grad | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_device_cpu | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_pin_memory_cpu | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_pin_memory_cpu_xpu_branch | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_pin_memory_cuda | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_requires_grad | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_requires_grad_false | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintHighAsList::test_high_is_list | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintHighAsList::test_high_is_tuple | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintImperative::test_case | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintOldStaticMode::test_out_none_old_static_mode | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintOldStaticMode::test_size_alias_old_static_mode | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintOp::test_check_output | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintOpError::test_errors | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandintOp_attr_tensorlist::test_check_output | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandint_attr_tensor::test_check_output | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randint_op.py::TestRandomValue::test_fixed_random_number | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandomValue::test_fixed_random_number | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermAPI::test_out | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermBF16Op::test_check_output | skipped / skipped | skipped / skipped | 此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。 |
| test/legacy_test/test_randperm_op.py::TestRandpermEager::test_out | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermFP16Op::test_check_output | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermImperative::test_out | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_device_parameter | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_out_parameter | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_out_parameter_dtype_consistency | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_out_parameter_shape_mismatch | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_parameter_combinations | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_pin_memory_cpu_device | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_pin_memory_parameter | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_requires_grad_parameter | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermOp::test_check_output | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermOpFloat32::test_check_output | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermOpFloat64::test_check_output | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermOpInt32::test_check_output | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandpermOpN::test_check_output | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandperm_compatible::test_large_n_cpu | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_randperm_op.py::TestRandperm_compatible::test_small_n_cpu | passed / passed | passed / passed | CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。 |
| test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_already_cuda_pinned_returns_same_object | missing / missing | skipped / skipped | 完整结果尚未通过，具体原因见本题说明。 |
| test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cpu_place_on_cuda_build | missing / missing | skipped / skipped | 完整结果尚未通过，具体原因见本题说明。 |
| test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cpu_place_on_pure_cpu_build_raises | missing / missing | passed / passed | 修复后通过；修复前存在缺失、跳过或未配对结果，不能计为有效 F2P/P2P。 |
| test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cpu_place_on_xpu_compiled_branch | missing / missing | passed / passed | 修复后通过；修复前存在缺失、跳过或未配对结果，不能计为有效 F2P/P2P。 |
| test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cuda_place_to_cuda_pinned | missing / missing | skipped / skipped | 完整结果尚未通过，具体原因见本题说明。 |
| test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_unsupported_place_raises | missing / missing | passed / passed | 修复后通过；修复前存在缺失、跳过或未配对结果，不能计为有效 F2P/P2P。 |
| test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_xpu_place_branch | missing / missing | passed / passed | 修复后通过；修复前存在缺失、跳过或未配对结果，不能计为有效 F2P/P2P。 |

<a id="task-78911"></a>

## #78911 · Recompute context detection

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T21:04:53Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_recompute_context_detection.TestRecomputeContext::test_context_active_with_rng_state | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_recompute_context_detection.TestRecomputeContext::test_context_active_without_rng_state | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_recompute_context_detection.TestRecomputeContext::test_gradient_and_context_cleanup | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-78922"></a>

## #78922 · Flex checkpoint flatten_state_dict lifetime

Oracle 已执行范围通过：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T20:41:14Z

**已有 F2P/P2P 配对记录：** 1 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_flatten_state_dict_lifetime.TestFlattenStateDict::test_nested_state_dict_round_trip | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_flatten_state_dict_lifetime.TestFlattenStateDict::test_tensor_reference_released_without_cycle_gc | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-78932"></a>

## #78932 · TensorDataset varargs and alias

Oracle 已执行范围通过：两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 6 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:57:56Z

**已有 F2P/P2P 配对记录：** 3 / 3，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/ai_edited_test/test_ai_dataloader.py::TestTensorDataset::test_tensor_dataset_1d | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/ai_edited_test/test_ai_dataloader.py::TestTensorDataset::test_tensor_dataset_basic | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/ai_edited_test/test_ai_dataloader.py::TestTensorDataset::test_tensor_dataset_iter | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/ai_edited_test/test_ai_dataloader.py::TestTensorDataset::test_tensor_dataset_varargs | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/ai_edited_test/test_ai_dataloader.py::TestTensorDataset::test_tensor_dataset_varargs_single | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_paddle_utils_data.py::TestAlias::test_compatibility | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-79035"></a>

## #79035 · Optimizer LR scheduler aliases

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T17:27:57Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr79035_lr_scheduler_alias.py::test_f2p_lr_scheduler_aliases_match_existing_schedulers | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr79035_lr_scheduler_alias.py::test_f2p_paddle_optim_initialization_exposes_lr_scheduler_namespace | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr79035_lr_scheduler_alias.py::test_p2p_legacy_step_decay_keeps_initial_learning_rate | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-79057"></a>

## #79057 · RestrictedUnpickler MRO security

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:47:31Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_restricted_unpickler_mro.py::TestRestrictedUnpicklerMRO::test_existing_safe_class_policy | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_restricted_unpickler_mro.py::TestRestrictedUnpicklerMRO::test_inherited_dangerous_methods_are_rejected | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_restricted_unpickler_mro.py::TestRestrictedUnpicklerMRO::test_inherited_setstate_payload_is_blocked | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-79161"></a>

## #79161 · set_rng_state parameter alias

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T17:59:53Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr79161_set_rng_state_alias.py::test_existing_state_list_calls_remain_valid | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr79161_set_rng_state_alias.py::test_new_state_alias_sets_the_same_generator_state | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr79161_set_rng_state_alias.py::test_state_list_and_new_state_conflict_is_rejected | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-79167"></a>

## #79167 · random.initial_seed alias

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:01:00Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr79167_initial_seed_alias.py::test_existing_seed_exports_remain_unchanged | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr79167_initial_seed_alias.py::test_initial_seed_is_exported_at_top_level | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr79167_initial_seed_alias.py::test_initial_seed_is_in_public_all | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-79197"></a>

## #79197 · LR scheduler optimizer argument

Oracle 已执行范围通过：两轮各 7 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 7 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用 README 允许的兼容 CPU 运行库，并加载该 task 的准确 Python 改动。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:56:59Z

**已有 F2P/P2P 配对记录：** 6 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_lr_scheduler.py::TestCosineAnnealingWarmRestarts::test_CosineRestartsLR | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_lr_scheduler.py::TestLRSchedulerWithOptimizerArg::test_cosine_annealing_decay | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_lr_scheduler.py::TestLRSchedulerWithOptimizerArg::test_cosine_annealing_warm_restarts | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_lr_scheduler.py::TestLRSchedulerWithOptimizerArg::test_exponential_decay | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_lr_scheduler.py::TestLRSchedulerWithOptimizerArg::test_multi_step_decay | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_lr_scheduler.py::TestLRSchedulerWithOptimizerArg::test_reduce_on_plateau | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_lr_scheduler.py::TestLRSchedulerWithOptimizerArg::test_step_decay | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-79268"></a>

## #79268 · DistributedSampler alias

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T15:44:28Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr79268_distributed_sampler.py::test_distributed_batch_sampler_seed_controls_shuffle | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr79268_distributed_sampler.py::test_distributed_sampler_is_public_and_forwards_arguments | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr79268_distributed_sampler.py::test_existing_distributed_batch_sampler_behavior_remains_valid | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-79275"></a>

## #79275 · flex_attention or_masks / and_masks

Oracle 已执行范围通过：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 4 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T17:06:18Z

**已有 F2P/P2P 配对记录：** 3 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr79275_flex_attention_masks.py::test_existing_attention_exports_remain_available | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr79275_flex_attention_masks.py::test_non_callable_mask_inputs_are_rejected | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr79275_flex_attention_masks.py::test_or_and_masks_combine_results_and_forward_arguments | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr79275_flex_attention_masks.py::test_single_and_empty_mask_combinations_have_identity_behavior | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-79276"></a>

## #79276 · add_n zero-size shape validation

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T02:10:33Z

**已有 F2P/P2P 配对记录：** 1 / 2，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_add_n_op.py::TestAddnOpZeroSizeAndNonZeroSize::test_add_n_zero_size_and_non_zero_size | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_add_n_op.py::TestAddnOpZeroSizeAndNonZeroSize::test_add_n_compatible_zero_size_tensors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_add_n_op.py::TestAddnOpZeroSizeAndNonZeroSize::test_add_n_compatible_ordinary_tensors | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-79310"></a>

## #79310 · nn.init.sparse_

Oracle 已执行范围通过：两轮各 5 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 5 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T16:58:52Z

**已有 F2P/P2P 配对记录：** 4 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/swe_paddle/test_pr79310_sparse_initializer.py::test_dygraph_inplace_initializer_helpers_return_input_tensor | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr79310_sparse_initializer.py::test_existing_normal_non_dygraph_path_keeps_initializer_return_value | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/swe_paddle/test_pr79310_sparse_initializer.py::test_eye_dygraph_returns_input_tensor_after_inplace_share | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr79310_sparse_initializer.py::test_sparse_initializer_rejects_non_2d_tensor | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/swe_paddle/test_pr79310_sparse_initializer.py::test_sparse_initializer_zeros_ceil_fraction_in_every_column | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-79321"></a>

## #79321 · Layer.set_state_dict named return fields

Oracle 已执行范围通过：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 2 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T18:58:43Z

**已有 F2P/P2P 配对记录：** 1 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_state_dict_convert.py::TestStateDictReturn::test_missing_keys_and_unexpected_keys | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test/legacy_test/test_state_dict_convert.py::TestStateDictReturn::test_missing_keys_and_unexpected_keys_attr | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-79353"></a>

## #79353 · P2P local_var bug

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T20:42:06Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_p2p_overlap_boundary.TestP2pOverlapBoundary::test_non_overlap_boundary_behavior | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_p2p_overlap_boundary.TestP2pOverlapBoundary::test_recv_forward_overlap_at_first_stage | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test.legacy_test.test_p2p_overlap_boundary.TestP2pOverlapBoundary::test_send_backward_overlap_at_first_stage | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-79369"></a>

## #79369 · check_memory_usage logging

Oracle 尚未通过：已执行两轮，2 项因 CPU 模块绑定缺失失败。

**已做验证：** 原内存日志测试两轮各 0 项通过、2 项失败；失败发生在测试访问或设置 CPU 内存 API 时。

**遇到的问题：** 当前 paddle.device 没有 cpu 属性，两项均报 AttributeError；将 cpu.py 放到目录中并未使父模块自动导出该属性。

**还需完成：** 用该题独立配套编译包核对 paddle.device.cpu 的加载与导出，再执行内存日志及不支持 CPU allocator 的原测试。

当前 paddle.device 没有 cpu 属性，两项均报 AttributeError；将 cpu.py 放到目录中并未使父模块自动导出该属性。

**原因：** 实际日志确认的是模块属性缺失，尚未测到这次 Gold 的目标日志行为；原测试模拟内存 API、logger 和系统命令，其通过范围仍须注明。

**处理：** 用该题独立配套编译包核对 paddle.device.cpu 的加载与导出，再执行内存日志及不支持 CPU allocator 的原测试。

**确认方法：** 当前 Oracle 实际观察：两轮各 0 通过 / 2 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T20:39:36Z

**已有 F2P/P2P 配对记录：** 1 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_check_memory_usage.TestCheckMemoryUsage::test_existing_memory_logging | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |
| test.legacy_test.test_check_memory_usage.TestCheckMemoryUsage::test_unsupported_cpu_allocator_api | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |

<a id="task-79386"></a>

## #79386 · iinfo uint64 maximum boundary

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-10T00:11:07Z

**已有 F2P/P2P 配对记录：** 0 / 3，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test.legacy_test.test_iinfo_and_finfo.TestIInfoUInt64Boundary::test_int64_signed_boundaries_remain_unchanged | passed / passed | passed / passed | Base、Gold 各两轮都通过。可作 P2P 回归观察；并无 Gold 失败。 |
| test.legacy_test.test_iinfo_and_finfo.TestIInfoUInt64Boundary::test_neighboring_unsigned_metadata_remains_unchanged | passed / passed | passed / passed | Base、Gold 各两轮都通过。可作 P2P 回归观察；并无 Gold 失败。 |
| test.legacy_test.test_iinfo_and_finfo.TestIInfoUInt64Boundary::test_uint64_max_preserves_unsigned_boundary | passed / passed | passed / passed | Base、Gold 各两轮都通过。该预期 F2P 节点在修复前已通过，未复现目标缺陷。 |

<a id="task-79633"></a>

## #79633 · Distributed launch KV server concurrency

Oracle 已执行范围通过：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过。

所注明入口的两轮完整结果已记录。

**原因：** 通过记录按题号去重保留；未执行的硬件分支不计为通过。

**处理：** 使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。

**确认方法：** 完整范围的实际 Oracle 结果：两轮各 3 通过 / 0 失败 / 0 错误 / 0 跳过；入口：原 tests/test.sh。

**运行条件：** 选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。

**Oracle 入口：** 原 tests/test.sh

**Oracle 确认时间：** 2026-10-09T21:01:10Z

**已有 F2P/P2P 配对记录：** 2 / 1，确认日期 2026-09-11。

只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。

| 测试 | Base 两轮 | Gold 两轮 | 说明 |
| --- | --- | --- | --- |
| test/legacy_test/test_kv_server.py::TestKVServerConcurrent::test_concurrent_put_get_prefix | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_kv_server.py::TestKVServerRequestTimeout::test_half_open_connection_is_released_after_timeout | failed / failed | passed / passed | 修复前两轮失败、修复后两轮通过，属于 F2P。 |
| test/legacy_test/test_kv_server.py::TestKVServerStop::test_stop_is_clean_and_idempotent_state | passed / passed | passed / passed | 修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。 |

<a id="task-79657"></a>

## #79657 · [Operator Mechanism] Fix paddle.compat.min/max gradient indexing

Oracle 尚未通过：目标 CUDA 梯度测试尚未完成。

**已做验证：** 已核对原入口要求 CUDA，也有独立 CPU 检查记录；目标 GPU 原测试没有完整两轮结果。

**遇到的问题：** 缺少已确认的匹配 CUDA 编译包和 NVIDIA 设备测试结果；CPU 检查无法覆盖目标 min/max 梯度索引缺陷。

**还需完成：** 准备配套 CUDA 编译包，在 NVIDIA 设备上运行原 min/max 梯度索引测试并确认两轮完整结果。

缺少已确认的匹配 CUDA 编译包和 NVIDIA 设备测试结果；CPU 检查无法覆盖目标 min/max 梯度索引缺陷。

**原因：** 待确认的是目标 GPU 行为，不等于所有检查从未开展；独立 CPU 结果不能计为 CUDA 目标分支通过。

**处理：** 准备配套 CUDA 编译包，在 NVIDIA 设备上运行原 min/max 梯度索引测试并确认两轮完整结果。

**确认方法：** 当前 Oracle 实际观察：完整测试结果尚未确认；入口：尚未执行完整测试。

**运行条件：** 匹配任务源码的 CUDA 编译包、NVIDIA 设备，以及原梯度索引测试入口。

**Oracle 入口：** 尚未执行完整测试

**Oracle 确认时间：** 尚未确认

**计数说明：** F2P/P2P 需独立的 Base/Gold 配对；Gold 通过不能代替配对。
