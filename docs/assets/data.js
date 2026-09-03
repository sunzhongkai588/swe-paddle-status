window.SWE_PADDLE_DATA = {
  meta: {
    title: "SWE-Paddle 可评测性雷达",
    updatedAt: "2026-09-03",
    snapshot: "c9e46547a1f8dce934a8c454a9b4afd6cce1d384",
    repository: "https://github.com/PaddlePaddle/community",
    taskBase:
      "https://github.com/PaddlePaddle/community/tree/c9e46547a1f8dce934a8c454a9b4afd6cce1d384/swe-paddle/tasks/PaddlePaddle__Paddle-",
    sourcePrBase: "https://github.com/PaddlePaddle/Paddle/pull/",
    total: 96,
    corePassedTaskPackagePassed: 68,
    corePassedTaskPackageFailed: 11,
    coreFailed: 17,
    bugfix: 48,
    feature: 47,
    refactor: 1,
  },

  authors: {
    "Echo-Nie": {
      label: "Echo-Nie",
      profile: "https://github.com/Echo-Nie",
    },
    yangguohao: {
      label: "yangguohao",
      profile: "https://github.com/yangguohao",
    },
    gouzil: {
      label: "gouzil",
      profile: "https://github.com/gouzil",
    },
    megemini: {
      label: "megemini",
      profile: "https://github.com/megemini",
    },
    sunzhongkai588: {
      label: "Zachary Sun",
      profile: "https://github.com/sunzhongkai588",
    },
    co63oc: {
      label: "co63oc",
      profile: "https://github.com/co63oc",
    },
    Manfredss: {
      label: "Manfredss",
      profile: "https://github.com/Manfredss",
    },
    jinyouzhi: {
      label: "iLeGend",
      profile: "https://github.com/jinyouzhi",
    },
    wwaawwaaee: {
      label: "SkyWalker",
      profile: "https://github.com/wwaawwaaee",
    },
  },

  categories: {
    gold: {
      label: "Gold 仍红",
      shortLabel: "Gold 红",
      description: "修复态仍有目标失败，尚未完成 fail-to-pass。",
    },
    roles: {
      label: "F2P / P2P 角色缺失",
      shortLabel: "角色缺失",
      description: "缺少有效 F2P 或至少一个有意义的 P2P。",
    },
    package: {
      label: "补丁或运行入口阻塞",
      shortLabel: "入口阻塞",
      description: "补丁不可应用，或测试尚未执行到目标节点。",
    },
    evidence: {
      label: "验证证据未闭环",
      shortLabel: "证据未闭环",
      description: "局部行为可见，但 exact Base / Gold 证据不足。",
    },
  },

  tasks: [
    { id: 41202, type: "feature", author: "Echo-Nie", title: "DataLoader reader AutoTune" },
    { id: 50086, type: "bugfix", author: "Echo-Nie", title: "ConditionalBlock scope validation" },
    { id: 52948, type: "feature", author: "yangguohao", title: "Static / dy2static Tensor.register_hook" },
    { id: 53534, type: "bugfix", author: "Echo-Nie", title: "to_tensor compatibility with NumPy" },
    { id: 54625, type: "bugfix", author: "Echo-Nie", title: "Pipeline output release state" },
    { id: 55890, type: "bugfix", author: "Echo-Nie", title: "VPP + sharding overlap scheduling" },
    { id: 56135, type: "bugfix", author: "Echo-Nie", title: "BMM dynamic-shape infermeta" },
    { id: 56470, type: "feature", author: "Echo-Nie", title: "Upsampling accepts integer size" },
    { id: 56705, type: "bugfix", author: "Echo-Nie", title: "Model-parallel memory leak" },
    { id: 57741, type: "feature", author: "yangguohao", title: "PIR memcpy" },
    { id: 57827, type: "feature", author: "yangguohao", title: "PIR fused_elemwise_add_activation" },
    { id: 58219, type: "feature", author: "gouzil", title: "PIR floor_divide / remainder operations" },
    { id: 58323, type: "feature", author: "megemini", title: "atleast_1d / atleast_2d / atleast_3d APIs" },
    { id: 58917, type: "feature", author: "megemini", title: "tensor_split / hsplit / dsplit APIs" },
    { id: 59021, type: "bugfix", author: "yangguohao", title: "PIR test_len" },
    { id: 59127, type: "feature", author: "megemini", title: "column_stack / row_stack / dstack / hstack / vstack APIs" },
    { id: 59348, type: "feature", author: "yangguohao", title: "PIR sequence_mask" },
    { id: 59374, type: "feature", author: "yangguohao", title: "Tensor apply / apply_ API" },
    { id: 59383, type: "feature", author: "yangguohao", title: "masked_scatter API" },
    { id: 59715, type: "feature", author: "megemini", title: "matrix_exp API" },
    { id: 59847, type: "feature", author: "megemini", title: "FractionalMaxPool2D / 3D" },
    { id: 59909, type: "bugfix", author: "Echo-Nie", title: "Parallel mode selection under sharding" },
    { id: 59973, type: "feature", author: "megemini", title: "slice_scatter API" },
    { id: 60417, type: "feature", author: "Echo-Nie", title: "Auto-tuner resume from CSV history" },
    { id: 60808, type: "bugfix", author: "Echo-Nie", title: "broadcast_to with zero dimensions" },
    { id: 64320, type: "feature", author: "megemini", title: "sparse.mask_as API" },
    { id: 64519, type: "feature", author: "megemini", title: "cholesky_inverse API" },
    { id: 64881, type: "feature", author: "megemini", title: "FeatureAlphaDropout API" },
    { id: 65724, type: "bugfix", author: "Echo-Nie", title: "DataLoader persistent_workers" },
    { id: 67195, type: "bugfix", author: "Echo-Nie", title: "Pipeline NaN checker" },
    { id: 68432, type: "feature", author: "sunzhongkai588", title: "Sparse complex multiply / divide" },
    { id: 70469, type: "bugfix", author: "Echo-Nie", title: "Fused dropout-add fallback" },
    { id: 72800, type: "bugfix", author: "co63oc", title: "cummin / cummax zero-size Tensor" },
    { id: 73122, type: "bugfix", author: "co63oc", title: "multi_dot zero-size Tensor" },
    { id: 73125, type: "bugfix", author: "co63oc", title: "det / slogdet zero-size Tensor" },
    { id: 73385, type: "bugfix", author: "co63oc", title: "svdvals / eigvals zero-size Tensor" },
    { id: 73387, type: "bugfix", author: "co63oc", title: "gather_tree zero-size Tensor" },
    { id: 73535, type: "bugfix", author: "co63oc", title: "conv1d CPU FP16 accuracy" },
    { id: 73569, type: "bugfix", author: "co63oc", title: "matmul 1-D transpose gradient" },
    { id: 73570, type: "bugfix", author: "co63oc", title: "masked_fill zero-size Tensor" },
    { id: 73582, type: "bugfix", author: "co63oc", title: "squeeze / full zero-size Tensor" },
    { id: 73691, type: "bugfix", author: "co63oc", title: "conv1d / conv2d / conv3d zero-size Tensor" },
    { id: 73702, type: "bugfix", author: "co63oc", title: "gather_nd zero-size Tensor" },
    { id: 73776, type: "bugfix", author: "co63oc", title: "svd_lowrank zero-size Tensor" },
    { id: 73821, type: "bugfix", author: "co63oc", title: "pad zero-size Tensor" },
    { id: 73850, type: "bugfix", author: "co63oc", title: "triangular_solve zero-size Tensor" },
    { id: 73854, type: "bugfix", author: "co63oc", title: "instance_norm zero-size Tensor" },
    { id: 73855, type: "bugfix", author: "co63oc", title: "dice_loss zero-size Tensor" },
    { id: 73880, type: "bugfix", author: "co63oc", title: "softmax_with_cross_entropy zero-size Tensor" },
    { id: 74184, type: "bugfix", author: "co63oc", title: "pinv zero-size Tensor" },
    { id: 74212, type: "bugfix", author: "co63oc", title: "multiplex zero-size Tensor" },
    { id: 74221, type: "bugfix", author: "co63oc", title: "fold zero-size Tensor" },
    { id: 74305, type: "bugfix", author: "co63oc", title: "unique zero-size Tensor" },
    { id: 74421, type: "feature", author: "Echo-Nie", title: "msort API compatibility" },
    { id: 74439, type: "feature", author: "Echo-Nie", title: "ravel API compatibility" },
    { id: 74444, type: "feature", author: "Echo-Nie", title: "dropout1d API compatibility" },
    { id: 74491, type: "feature", author: "Echo-Nie", title: "Tensor.requires_grad compatibility" },
    { id: 74586, type: "feature", author: "Echo-Nie", title: "scatter_add API compatibility" },
    { id: 74594, type: "feature", author: "Echo-Nie", title: "broadcast_shapes API compatibility" },
    { id: 75274, type: "bugfix", author: "Echo-Nie", title: "Normal distribution unittest fix" },
    { id: 76259, type: "bugfix", author: "Echo-Nie", title: "Windows UTF-8 inference paths" },
    { id: 76522, type: "refactor", author: "Echo-Nie", title: "Torch proxy compat override registration" },
    { id: 76736, type: "feature", author: "Manfredss", title: "atan2 C++ sinking" },
    { id: 76873, type: "feature", author: "yangguohao", title: "Activation APIs inplace support" },
    { id: 77064, type: "feature", author: "Manfredss", title: "allclose C++ sinking" },
    { id: 77078, type: "feature", author: "Manfredss", title: "inverse C++ sinking" },
    { id: 77150, type: "bugfix", author: "Echo-Nie", title: "PyLayer grad-node attribute copy" },
    { id: 77495, type: "feature", author: "jinyouzhi", title: "MaxPool dilation option" },
    { id: 77749, type: "feature", author: "Manfredss", title: "pad_sequence / unpad_sequence" },
    { id: 78048, type: "feature", author: "Echo-Nie", title: "dsplit / hsplit / vsplit parameter aliases" },
    { id: 78082, type: "feature", author: "Manfredss", title: "ParameterDict pop / values / keys" },
    { id: 78104, type: "bugfix", author: "Echo-Nie", title: "CUDA device conversion from Tensor place" },
    { id: 78138, type: "feature", author: "Manfredss", title: "pixel_shuffle C++ sinking" },
    { id: 78238, type: "bugfix", author: "Echo-Nie", title: "put_along_axis zero-size indices" },
    { id: 78301, type: "feature", author: "Manfredss", title: "Layer.to / Tensor.to compatibility" },
    { id: 78342, type: "feature", author: "Manfredss", title: "paddle._assert API" },
    { id: 78440, type: "bugfix", author: "Echo-Nie", title: "cdist zero-size Tensor handling" },
    { id: 78441, type: "feature", author: "Manfredss", title: "aminmax operator" },
    { id: 78452, type: "bugfix", author: "Echo-Nie", title: "paddle.load dataclass objects" },
    { id: 78522, type: "bugfix", author: "Echo-Nie", title: "distributed launch os.kill" },
    { id: 78570, type: "feature", author: "Echo-Nie", title: "Optimizer.step closure compatibility" },
    { id: 78823, type: "bugfix", author: "Manfredss", title: "pin_memory support for random APIs" },
    { id: 78911, type: "bugfix", author: "Echo-Nie", title: "Recompute context detection" },
    { id: 78922, type: "bugfix", author: "Echo-Nie", title: "Flex checkpoint flatten_state_dict lifetime" },
    { id: 78932, type: "feature", author: "Echo-Nie", title: "TensorDataset varargs and alias" },
    { id: 79035, type: "feature", author: "Echo-Nie", title: "Optimizer LR scheduler aliases" },
    { id: 79057, type: "bugfix", author: "Echo-Nie", title: "RestrictedUnpickler MRO security" },
    { id: 79161, type: "feature", author: "Echo-Nie", title: "set_rng_state parameter alias" },
    { id: 79167, type: "feature", author: "Echo-Nie", title: "random.initial_seed alias" },
    { id: 79197, type: "feature", author: "Echo-Nie", title: "LR scheduler optimizer argument" },
    { id: 79268, type: "feature", author: "Echo-Nie", title: "DistributedSampler alias" },
    {
      id: 79275,
      type: "feature",
      author: "Echo-Nie",
      title: "flex_attention or_masks / and_masks",
      taskPath: "PaddlePaddle_Paddle-79275",
    },
    { id: 79276, type: "bugfix", author: "wwaawwaaee", title: "add_n zero-size shape validation" },
    { id: 79310, type: "feature", author: "Echo-Nie", title: "nn.init.sparse_" },
    { id: 79353, type: "bugfix", author: "Echo-Nie", title: "P2P local_var bug" },
    { id: 79369, type: "bugfix", author: "Echo-Nie", title: "check_memory_usage logging" },
  ],

  failures: {
    41202: {
      category: "roles",
      matrix: "F2P 0 · P2P 0 · Base 无法 collection",
      reason:
        "原始 runner 在源码包路径下触发 python.paddle 导入冲突；修正运行布局后，Base 仍因模块级导入 Gold-only set_autotune_config 而无法收集三个候选节点。",
      action:
        "修正 runner 的包导入布局，并将新增 API 的导入与调用延迟到各 F2P 测试体内，使 Base 能收集角色节点。",
      contributionPr: 1529,
    },
    57741: {
      category: "roles",
      matrix: "F2P 0 · P2P 1 · raw Base / Gold 均 RC 4",
      reason:
        "最新 runner 已把 helper 与 CUDA bare-return 改为别名和显式 skip，但两个 selector 将类名 CUDA 错写为 Cuda，Base、Gold 两轮均为 0 tests。修正拼写后两态仍同为 1P / 3S，唯一 CPU 节点没有形成 Base-red / Gold-green。",
      action:
        "修正两个 CUDA 类名，并增加一个在 CPU Base 上真实经过 PIR memcpy 且失败、Gold 上通过的目标节点；同时保留现有独立 P2P。",
      contributionPr: 1554,
    },
    58323: {
      category: "roles",
      matrix: "F2P 0 · P2P 48",
      reason:
        "修正 PYTHONPATH 后 48 个 P2P 稳定通过，但 Base 在模块级求值缺失的 paddle.atleast_1d 时即 collection 失败，41 个候选节点均未进入测试体；Gold 另有一个全局模式污染失败。",
      action:
        "让目标文件在 Base 上安全收集，把缺失 API 的访问移入测试体，并为动态图/静态图用例增加显式模式初始化与清理。",
      contributionPr: 1503,
    },
    59383: {
      category: "gold",
      matrix: "Gold 1F / 20P / 16S",
      reason:
        "修正运行环境后，TestMaskedScatterError.test_numel_error 在 Gold 中仍未抛出预期 AssertionError。",
      action: "统一 Gold 行为和测试预期，确保目标文件在 Gold 上稳定全绿。",
      contributionPr: 1482,
    },
    59715: {
      category: "gold",
      matrix: "F2P 48 · P2P 52 · Gold 8F",
      reason:
        "隔离 helper 后 P2P 在两态均为 52P，48 个目标节点形成转换；但 Gold 仍有 8 个 float64 数值断言稳定失败，误差高于当前 rtol=atol=1e-15。",
      action:
        "修正 float64 容差或参考值策略，使全部目标节点 Gold 绿；同时避免 pytest 收集导入的 test_with_pir_api helper。",
      contributionPr: 1507,
    },
    59847: {
      category: "evidence",
      matrix: "CPU F2P 36 / P2P 5 · 必需 GPU 未验证",
      reason:
        "当前 runner 已按文件隔离并清理 helper，CPU Base 两轮 RC 1、Gold 两轮 RC 0，36 个 F2P 与 5 个 meaningful P2P 均闭环；但任务声明 GPU 必需，32 个 CUDA 节点本轮全部未执行。",
      action:
        "在 exact CUDA Base / Gold 环境补跑 GPU F2P/P2P；完成前只能认定 CPU 子集通过。",
      contributionPr: 1536,
    },
    64320: {
      category: "evidence",
      matrix: "CPU F2P 6 / P2P 26 · 必需 GPU 未验证",
      reason:
        "CPU 侧两轮均形成有效 Base-red / Gold-green，26 个回归节点也保持通过；但任务声明 CPU + GPU 且 GPU 必需，本轮没有 CUDA 资源。另有 1 个错误维度用例在调用目标 API 前就失败，角色标注不准确。",
      action:
        "在 GPU 环境补齐 F2P/P2P，并把未调用 sparse.mask_as 的错误维度用例改标为非目标护栏。",
      contributionPr: 1538,
    },
    64519: {
      category: "roles",
      matrix: "F2P 16 · P2P 0 · Gold raw RC 1",
      reason:
        "16 个目标节点可形成逐节点 Base-red / Gold-green，但完整 Gold 受全局静态模式污染仍失败；两个表面通过的 dtype 节点在 CPU 下直接返回，不能计为 P2P。",
      action:
        "增加至少一个真正执行的 Base-pass / Gold-pass P2P，并为测试补充显式模式隔离，使完整 Gold runner 全绿。",
      contributionPr: 1502,
    },
    73122: {
      category: "roles",
      matrix: "F2P 0 · P2P 2 · Base / Gold raw 均 RC 1",
      reason:
        "完整候选类在 Base 与 Gold 中均为 2P，不能区分 solution；打包的 output-only selector 虽通过断言，却在两态触发同一个 OpTest teardown 错误，因此也不是有效 F2P。",
      action:
        "增加一个确定性的 CPU Base-red / Gold-green 用例，并运行满足 OpTest teardown 不变量的完整类或重写测试结构。",
      contributionPr: 1542,
    },
    76259: {
      category: "package",
      matrix: "Test patch 可应用 · Gold patch apply RC 1",
      reason:
        "本轮更新已修复 test patch，但 solution/code.patch 仍无法应用到声明的 exact Base；任务同时要求 Windows CPU / MSVC，本轮 Linux 主机无法替代该资源。",
      action:
        "基于 exact Base 重新生成 solution patch，确认两个 patch 顺序 apply-check 后，在 Windows / MSVC 环境运行 F2P/P2P。",
      contributionPr: 1539,
    },
    76873: {
      category: "package",
      matrix: "Base RC 2 · Gold RC 2",
      reason:
        "原 test.sh 未加入 test/legacy_test 到 PYTHONPATH，Base、Gold 均在 collection 阶段报 No module named op_test。",
      action:
        "补齐 legacy test import path，将 P2P 放在 F2P 前，再完成 exact Base / Gold 两轮验证。",
      contributionPr: 1468,
    },
    77495: {
      category: "package",
      matrix: "Base 17F / 3P · 无有效 Gold",
      reason:
        "solution patch 的 preimage 来自较晚提交，只包含兼容性增量，遗漏从声明 Base 到主功能提交的原生实现链，因此无法应用并形成有效 Gold。",
      action:
        "从声明 Base 重新生成包含主功能链的完整 solution patch，并同步修正 README 范围、legacy PYTHONPATH 与 P2P 数量。",
      contributionPr: 1510,
    },
    77749: {
      category: "roles",
      matrix: "F2P 0 · P2P 1 · Base collection error",
      reason:
        "P2P 节点在 Base、Gold 均稳定通过，但 F2P 文件在 Base 模块级导入缺失的 paddle.nn.utils.rnn 时即失败，21 个目标方法一个也未被收集；raw RC 转换不构成 strict F2P。",
      action:
        "将目标 API 导入延迟到测试函数或辅助函数内部，使 21 个用例在 Base 可收集并在测试体内失败，再重跑双轮验证。",
      contributionPr: 1477,
    },
    78048: {
      category: "roles",
      matrix: "F2P 3 · P2P 0",
      reason:
        "三个 input/indices/sections 别名节点均稳定 Base-red / Gold-green，但当前没有任何独立可收集且在两态通过的 meaningful P2P；同一 F2P 方法中的前置调用不能替代独立角色。",
      action: "加入至少一个独立的原参数名、位置参数或 Tensor method P2P，并完成两态双轮验证。",
      contributionPr: 1517,
    },
    78441: {
      category: "gold",
      matrix: "F2P 26 / 27 · P2P 4 · Gold 1F",
      reason:
        "主 API/operator 套件的 26 个目标节点已形成 Base-red / Gold-green，4 个 P2P 两态全绿；但 symbolic-shape 节点在 Gold 仍因缺少 sym_shape_str 抛出 KeyError，原始 Gold 两轮均为 RC 1。",
      action:
        "补全 aminmax 的 symbolic-shape 属性实现，或从任务中移除并重新分类该节点，确保完整 Gold 全绿。",
      contributionPr: 1437,
    },
    78452: {
      category: "roles",
      matrix: "F2P 0 · P2P 0 · Base collection error",
      reason:
        "test.patch 在模块级直接导入 Gold-only _is_safe_class，Base 在 collection 阶段即失败；Gold 的 43P 无法构成 strict F2P/P2P 角色矩阵。",
      action:
        "延迟或隔离 Gold-only 符号导入，使测试在 Base 可收集，再分别验证安全 dataclass F2P 与危险对象拦截 P2P。",
      contributionPr: 1524,
    },
    78522: {
      category: "roles",
      matrix: "F2P 3 · P2P 0",
      reason:
        "三个进程清理节点稳定 Base-red / Gold-green，但当前 runner 只执行新增 F2P 文件，README 声明的 launch utility 回归候选没有运行证据。",
      action: "把至少一个真实的现有 launch utility 回归节点加入 runner，并完成 Base / Gold 双轮 P2P 验证。",
      contributionPr: 1520,
    },
  },

  notices: {
    52948: {
      kind: "runner",
      matrix: "F2P 5 / P2P 2",
      reason:
        "修订测试已真实触发 static / dy2static register_hook，精确 Base / Gold 两轮均形成稳定目标转换；但原始运行布局会从源码包路径误导入 python.paddle，不能原样执行。",
      action:
        "在 tests/test.sh 中固定从仓库根目录启动，避免源码树 python/ 抢占导入路径；启动时确认 paddle.__file__ 指向当前 Base / Gold 安装产物，再保留两组测试完成原始脚本双轮复跑。",
      contributionPr: 1541,
    },
    58917: {
      kind: "runner",
      matrix: "F2P 15 / P2P 3",
      reason:
        "排除 imported helper 伪节点后，15 个目标节点稳定 Base-red / Gold-green，3 个 P2P 在两态均通过；当前 raw Base、Gold 都被 helper fixture error 置为 RC 1。",
      action:
        "将 test_with_pir_api 改为非 test_ 别名导入，或显式设置为不可收集；先用 pytest --collect-only 确认 helper 已排除，再按原始 test.sh 复跑 Base / Gold 两轮并保证 Gold 返回 0。",
      contributionPr: 1508,
    },
    59127: {
      kind: "runner",
      matrix: "F2P 84 / P2P 42",
      reason:
        "受控 runner 下 84 个目标节点和 42 个 P2P 均稳定闭环；原脚本缺少 legacy test 路径，并会误收集 imported helper，因此 Base、Gold raw 均在 P2P collection 阶段停止。",
      action:
        "在 tests/test.sh 中基于仓库根目录补齐 PYTHONPATH 的根目录与 test/legacy_test，同时把 test_with_pir_api 改为非测试别名；用 --collect-only 核对节点后，再完成原始 Base / Gold 双轮复跑。",
      contributionPr: 1509,
    },
    59973: {
      kind: "runner",
      matrix: "F2P 47 / P2P 23",
      reason:
        "47 个 slice_scatter 目标节点稳定 Base-red / Gold-green，另有 23 个真实 P2P；当前 raw P2P 还包含 2 个双态红 static 节点、2 个 CPU no-op、29 个 skip 和 imported helper。",
      action:
        "将 P2P selector 明确收窄到已验证的 23 个 meaningful 节点，或先修复两个 static 测试的模式初始化；从角色集合中排除 imported helper、CPU no-op 与 skip，并确认原始 Gold 全程返回 0。",
      contributionPr: 1506,
    },
    64881: {
      kind: "runner",
      matrix: "F2P 6 / P2P 5",
      reason:
        "目标 alpha_dropout 文件中 6 个 FeatureAlphaDropout 节点形成稳定转换，5 个现有行为节点两态通过；raw runner 先执行整份 test_dropout_op.py，双态均有 6F 和 1 个 helper error，导致 Gold 不绿。",
      action:
        "不要运行整份 test_dropout_op.py；在 test.sh 中显式选择已验证的 6 个 F2P 与 5 个 meaningful P2P 节点，并把 imported helper 改为不可收集，最后确认原始 Gold 无无关失败且返回 0。",
      contributionPr: 1501,
    },
    73582: {
      kind: "runner",
      matrix: "F2P 2 / P2P 3",
      reason:
        "补齐 legacy-test 路径后，两个 zero-size 目标节点稳定 Base-red / Gold-green，三个现有行为节点两态全绿；原始脚本在两态均因导入路径返回 RC 4。",
      action:
        "让 tests/test.sh 先解析仓库根目录，再把根目录与 test/legacy_test 加入 PYTHONPATH；用 --collect-only 确认 op_test 可导入，随后原样复跑两轮并核对 2 个 F2P、3 个 P2P。",
      contributionPr: 1512,
    },
    73691: {
      kind: "patch",
      matrix: "F2P 3 / P2P 3",
      reason:
        "exact CPU Base / Gold 原生编译及逐节点双轮验证均闭环；但仓库中的 solution/code.patch 缺少末尾换行，原样 git apply 报 corrupt patch at line 274，仅补该换行后才能构建 Gold。",
      action:
        "基于声明的 exact Base 重新导出 solution/code.patch，并确保文件末尾换行完整；提交前先执行 git apply --check，再实际应用、编译 Gold，并用原始任务包复跑 3 个 F2P 与 3 个 P2P。",
      contributionPr: 1514,
    },
    73821: {
      kind: "runner",
      matrix: "F2P 3 / P2P 2",
      reason:
        "exact CPU Base / Gold 原生编译及逐节点双轮验证均闭环；当前原始 test.sh 在两态都因缺少 legacy-test 路径而无法导入 op_test，返回 RC 4。",
      action:
        "在 tests/test.sh 中按实际仓库根目录设置 PYTHONPATH，至少包含根目录与 test/legacy_test；先确认 op_test 能在 Base / Gold 收集，再用未改动的脚本复跑两轮，核对 3 个 F2P、2 个 P2P。",
      contributionPr: 1519,
    },
    78932: {
      kind: "assertion",
      matrix: "F2P 3 / P2P 3",
      reason:
        "两个 TensorDataset varargs 行为节点和一个公开 alias 存在性节点形成转换，三个旧行为节点保持通过；但 alias 测试只检查对象 truthiness，未验证三个导出入口身份一致。",
      action:
        "把 assertTrue(pairs[0], pairs[n]) 改为逐对 assertIs(left, right)，明确验证三个公开导出入口对象身份一致；修改后在 Base / Gold 各复跑两轮，确认 identity 节点仍形成 F2P 且其余 P2P 不回退。",
      contributionPr: 1523,
    },
    79197: {
      kind: "runner",
      matrix: "F2P 6 / P2P 1",
      reason:
        "补齐 legacy-test 路径后，六个 optimizer 参数目标节点稳定转换，一个现有 scheduler 节点两态通过；原始脚本因 op_test 导入失败在两态均返回 RC 4。",
      action:
        "在 tests/test.sh 中从仓库根目录构造 PYTHONPATH，加入根目录与 test/legacy_test；先做 collection 检查，再按原始入口完成 Base / Gold 双轮运行并核对 6 个 F2P、1 个 P2P。",
      contributionPr: 1522,
    },
    79276: {
      kind: "runner",
      matrix: "F2P 1 / P2P 2",
      reason:
        "精确原生 Base / Gold 库已重建并加载，目标转换连续两轮稳定；但原始 test.sh 缺少 test/legacy_test 的 PYTHONPATH，不能原样完成验证。",
      action:
        "在 tests/test.sh 中按仓库根目录补入 test/legacy_test 的 PYTHONPATH，并增加 collection 检查避免再次出现入口失败；随后用原始任务包复跑 Base / Gold 两轮，确认 1 个 F2P、2 个 P2P。",
      contributionPr: 1498,
    },
  },

  correction: {
    id: 73691,
    title: "本轮 32 条增量验证已完成",
    summary:
      "18 条新增完整任务加 14 条修改任务复验：10 条核心验证与 Task 包均通过，9 条核心验证通过但 Task 包不通过，13 条核心验证未通过。",
    caveat:
      "全量 96 条按三个互斥状态展示：68 条核心验证与 Task 包均通过，可直接评测；11 条核心验证通过但 Task 包不通过；17 条核心验证未通过。",
    contributionPr: 1514,
  },
};
