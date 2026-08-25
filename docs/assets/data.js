window.SWE_PADDLE_DATA = {
  meta: {
    title: "SWE-Paddle 可评测性雷达",
    updatedAt: "2026-08-25",
    snapshot: "8db0e409d8a753c596eb1e124fcd9f37b6d217e1",
    repository: "https://github.com/PaddlePaddle/community",
    taskBase:
      "https://github.com/PaddlePaddle/community/tree/8db0e409d8a753c596eb1e124fcd9f37b6d217e1/swe-paddle/tasks/PaddlePaddle__Paddle-",
    sourcePrBase: "https://github.com/PaddlePaddle/Paddle/pull/",
    total: 78,
    passed: 66,
    failed: 12,
    bugfix: 42,
    feature: 35,
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
    { id: 59021, type: "bugfix", author: "yangguohao", title: "PIR test_len" },
    { id: 59348, type: "feature", author: "yangguohao", title: "PIR sequence_mask" },
    { id: 59374, type: "feature", author: "yangguohao", title: "Tensor apply / apply_ API" },
    { id: 59383, type: "feature", author: "yangguohao", title: "masked_scatter API" },
    { id: 59847, type: "feature", author: "megemini", title: "FractionalMaxPool2D / 3D" },
    { id: 59909, type: "bugfix", author: "Echo-Nie", title: "Parallel mode selection under sharding" },
    { id: 60808, type: "bugfix", author: "Echo-Nie", title: "broadcast_to with zero dimensions" },
    { id: 64320, type: "feature", author: "megemini", title: "sparse.mask_as API" },
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
    { id: 73702, type: "bugfix", author: "co63oc", title: "gather_nd zero-size Tensor" },
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
    { id: 78082, type: "feature", author: "Manfredss", title: "ParameterDict pop / values / keys" },
    { id: 78104, type: "bugfix", author: "Echo-Nie", title: "CUDA device conversion from Tensor place" },
    { id: 78138, type: "feature", author: "Manfredss", title: "pixel_shuffle C++ sinking" },
    { id: 78238, type: "bugfix", author: "Echo-Nie", title: "put_along_axis zero-size indices" },
    { id: 78301, type: "feature", author: "Manfredss", title: "Layer.to / Tensor.to compatibility" },
    { id: 78342, type: "feature", author: "Manfredss", title: "paddle._assert API" },
    { id: 78440, type: "bugfix", author: "Echo-Nie", title: "cdist zero-size Tensor handling" },
    { id: 78441, type: "feature", author: "Manfredss", title: "aminmax operator" },
    { id: 78570, type: "feature", author: "Echo-Nie", title: "Optimizer.step closure compatibility" },
    { id: 78823, type: "bugfix", author: "Manfredss", title: "pin_memory support for random APIs" },
    { id: 78911, type: "bugfix", author: "Echo-Nie", title: "Recompute context detection" },
    { id: 78922, type: "bugfix", author: "Echo-Nie", title: "Flex checkpoint flatten_state_dict lifetime" },
    { id: 79035, type: "feature", author: "Echo-Nie", title: "Optimizer LR scheduler aliases" },
    { id: 79057, type: "bugfix", author: "Echo-Nie", title: "RestrictedUnpickler MRO security" },
    { id: 79161, type: "feature", author: "Echo-Nie", title: "set_rng_state parameter alias" },
    { id: 79167, type: "feature", author: "Echo-Nie", title: "random.initial_seed alias" },
    { id: 79268, type: "feature", author: "Echo-Nie", title: "DistributedSampler alias" },
    { id: 79275, type: "feature", author: "Echo-Nie", title: "flex_attention or_masks / and_masks" },
    { id: 79276, type: "bugfix", author: "wwaawwaaee", title: "add_n zero-size shape validation" },
    { id: 79310, type: "feature", author: "Echo-Nie", title: "nn.init.sparse_" },
    { id: 79353, type: "bugfix", author: "Echo-Nie", title: "P2P local_var bug" },
    { id: 79369, type: "bugfix", author: "Echo-Nie", title: "check_memory_usage logging" },
  ],

  failures: {
    57741: {
      category: "roles",
      matrix: "F2P 0 · P2P 1",
      reason:
        "Base、Gold 两轮均为表面 4P，没有 Base-fail / Gold-pass。两个 CUDA 用例在 CPU 下直接返回，另有 imported helper 被误收集。",
      action:
        "增加 CPU 上真正经过 PIR memcpy 的 F2P，或把资源切到 CUDA；同时清理 helper 误收集和 bare-return。",
      contributionPr: 1490,
    },
    59383: {
      category: "gold",
      matrix: "Gold 1F / 20P / 16S",
      reason:
        "修正运行环境后，TestMaskedScatterError.test_numel_error 在 Gold 中仍未抛出预期 AssertionError。",
      action: "统一 Gold 行为和测试预期，确保目标文件在 Gold 上稳定全绿。",
      contributionPr: 1482,
    },
    59847: {
      category: "gold",
      matrix: "打包态无有效 gate · 隔离 CPU 为 F2P 36 / P2P 5",
      reason:
        "原始 P2P 命令把 test_with_pir_api helper 误收集为测试并在 set -e 下阻断 F2P；四个 F2P 文件合跑时 Gold 仍有 3 个 static Program 重名失败，且必需 GPU 的 32 个节点未验证。",
      action:
        "修复 helper 收集，按文件隔离进程或重置 static Program，并在 GPU 环境补齐声明为必需的路径。",
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
    73122: {
      category: "roles",
      matrix: "F2P 0 · P2P 2 · 候选 Base / Gold 均 2P",
      reason:
        "更新后的 test / Gold patch 已能应用并完成精确 CPU 源码构建，但两个候选 F2P 在 Base 与 Gold 上连续两轮都通过；真实 eager forward / backward 探针也确认 Base 已绿，无法区分补丁。",
      action:
        "新增一个在声明 CPU Base 上稳定失败、Gold 上通过的目标用例，补充 output numel 为 0 的场景，并修正 runner 的 legacy PYTHONPATH。",
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
    76736: {
      category: "gold",
      matrix: "Gold RC 1 × 2",
      reason:
        "Gold 连续两轮在 test_dygraph_broadcast_gradient_values 中报 Atan2Grad arity 2 != 1。",
      action: "修复 broadcast gradient 实现或重新整理与目标 Base 匹配的 Gold patch。",
      contributionPr: 1426,
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
      matrix: "Base import fail → Gold 21P · P2P 0",
      reason:
        "整个测试文件都是新增 API 测试，Base 因模块不存在而 import fail，没有任何独立 P2P。",
      action:
        "加入一个相关 RNN utility 回归节点，并证明它在 Base、Gold 上均稳定通过。",
      contributionPr: 1477,
    },
    78342: {
      category: "evidence",
      matrix: "目标 Base 7E → Gold 7P · 完整 Gold 仍红",
      reason:
        "目标类有 F2P，但运行使用祖先 runtime；完整脚本 Base 79E、Gold 72E，无法形成可靠 P2P 结论。",
      action:
        "使用 exact Base / Gold runtime，或收窄 runner 并明确验证至少一个相关 P2P。",
      contributionPr: 1473,
    },
    78441: {
      category: "package",
      matrix: "Base RC 2 · Gold RC 2",
      reason:
        "原脚本在 Base、Gold 中都因 op_test 无法导入而 collection 失败，目前没有可信的角色矩阵。",
      action:
        "补 PYTHONPATH 后重跑，并加入明确的 amin / amax 相关 P2P。",
      contributionPr: 1437,
    },
  },

  notices: {
    52948: {
      matrix: "F2P 5 / P2P 2 · Core 通过",
      reason:
        "修订测试已真实触发 static / dy2static register_hook；精确 Base / Gold 两轮均形成稳定目标转换，旧假绿问题已消除。",
      action:
        "修正 pytest 从源码包路径误导入 python.paddle 的运行布局；保留两组测试后重新确认原始 test.sh。",
      contributionPr: 1541,
    },
    73570: {
      matrix: "F2P 3 / P2P 4 · Core 通过",
      reason: "补齐 legacy helper 路径后，精确 Base / Gold 两轮转换稳定，P2P 无回归。",
      action: "在 tests/test.sh 中加入 test/legacy_test 的 PYTHONPATH。",
      contributionPr: 1513,
    },
    73702: {
      matrix: "F2P 1 / P2P 2 · Core 通过",
      reason: "类级双轮验证无 skip 或假绿，目标节点稳定 Base-red / Gold-green。",
      action: "在 runner 中加入 legacy PYTHONPATH，并同步 README 最小命令。",
      contributionPr: 1516,
    },
    73850: {
      matrix: "F2P 1 / P2P 3 · Core 通过",
      reason: "严格节点审计确认只有 zero-size gradient 是 F2P，其余 3 个行为节点为 P2P。",
      action: "加入 legacy PYTHONPATH，并按实际节点行为修正 F2P / P2P 标注。",
      contributionPr: 1521,
    },
    73854: {
      matrix: "F2P 2 / P2P 3 · Core 通过",
      reason: "精确 CPU Base / Gold 与独立类级双轮均闭环，无 skip。",
      action: "在 runner 中加入 legacy PYTHONPATH，并同步 README 最小命令。",
      contributionPr: 1526,
    },
    73855: {
      matrix: "F2P 1 / P2P 1 · Core 通过",
      reason: "精确 CPU Base / Gold 双轮稳定，zero-size DiceLoss 目标转换成立。",
      action: "在 runner 中加入 legacy PYTHONPATH，并同步 README 最小命令。",
      contributionPr: 1525,
    },
    73880: {
      matrix: "F2P 4 / P2P 2 · Core 通过",
      reason: "两个 zero-size 类均已独立完成 Base / Gold 双轮，第二组不是 skip 或假绿。",
      action:
        "加入 legacy PYTHONPATH，并调整 set -e 下的执行方式，确保 Base 阶段也汇总执行两个 F2P 类。",
      contributionPr: 1527,
    },
    79276: {
      matrix: "F2P 1 / P2P 2 · Core 通过",
      reason: "精确原生 Base / Gold 库已重建并加载，目标转换连续两轮稳定。",
      action: "在 tests/test.sh 中加入 test/legacy_test 的 PYTHONPATH。",
      contributionPr: 1498,
    },
  },

  correction: {
    id: 52948,
    title: "本轮 22 条增量验证已完成",
    summary:
      "15 条新完整任务加 7 条旧失败复验：16 条 Core 通过，6 条当前不可准入。全量看板现为 78 条，其中 66 条 Core 通过、12 条待处理。",
    caveat:
      "本轮 16 条 Core 通过中，8 条可零修改直评，8 条仍需修 runner 或角色标注；52948、78911 已从旧失败集合移除，73122 因严格 F2P 为 0 仍不通过。",
    contributionPr: 1541,
  },
};
