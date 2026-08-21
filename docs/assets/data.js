window.SWE_PADDLE_DATA = {
  meta: {
    title: "SWE-Paddle 可评测性雷达",
    updatedAt: "2026-08-19",
    snapshot: "e394cae253591ac87b8a3763ea335f37ba84005f",
    repository: "https://github.com/PaddlePaddle/community",
    taskBase:
      "https://github.com/PaddlePaddle/community/tree/e394cae253591ac87b8a3763ea335f37ba84005f/swe-paddle/tasks/PaddlePaddle__Paddle-",
    sourcePrBase: "https://github.com/PaddlePaddle/Paddle/pull/",
    total: 63,
    passed: 50,
    failed: 13,
    bugfix: 35,
    feature: 28,
    refactor: 0,
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
    { id: 74184, type: "bugfix", author: "co63oc", title: "pinv zero-size Tensor" },
    { id: 74212, type: "bugfix", author: "co63oc", title: "multiplex zero-size Tensor" },
    { id: 74221, type: "bugfix", author: "co63oc", title: "fold zero-size Tensor" },
    { id: 74305, type: "bugfix", author: "co63oc", title: "unique zero-size Tensor" },
    { id: 74421, type: "feature", author: "Echo-Nie", title: "msort API compatibility" },
    { id: 74594, type: "feature", author: "Echo-Nie", title: "broadcast_shapes API compatibility" },
    { id: 75274, type: "bugfix", author: "Echo-Nie", title: "Normal distribution unittest fix" },
    { id: 76259, type: "bugfix", author: "Echo-Nie", title: "Windows UTF-8 inference paths" },
    { id: 76736, type: "feature", author: "Manfredss", title: "atan2 C++ sinking" },
    { id: 76873, type: "feature", author: "yangguohao", title: "Activation APIs inplace support" },
    { id: 77064, type: "feature", author: "Manfredss", title: "allclose C++ sinking" },
    { id: 77078, type: "feature", author: "Manfredss", title: "inverse C++ sinking" },
    { id: 77150, type: "bugfix", author: "Echo-Nie", title: "PyLayer grad-node attribute copy" },
    { id: 77749, type: "feature", author: "Manfredss", title: "pad_sequence / unpad_sequence" },
    { id: 78082, type: "feature", author: "Manfredss", title: "ParameterDict pop / values / keys" },
    { id: 78104, type: "bugfix", author: "Echo-Nie", title: "CUDA device conversion from Tensor place" },
    { id: 78138, type: "feature", author: "Manfredss", title: "pixel_shuffle C++ sinking" },
    { id: 78238, type: "bugfix", author: "Echo-Nie", title: "put_along_axis zero-size indices" },
    { id: 78301, type: "feature", author: "Manfredss", title: "Layer.to / Tensor.to compatibility" },
    { id: 78342, type: "feature", author: "Manfredss", title: "paddle._assert API" },
    { id: 78440, type: "bugfix", author: "Echo-Nie", title: "cdist zero-size Tensor handling" },
    { id: 78441, type: "feature", author: "Manfredss", title: "aminmax operator" },
    { id: 78823, type: "bugfix", author: "Manfredss", title: "pin_memory support for random APIs" },
    { id: 78911, type: "bugfix", author: "Echo-Nie", title: "Recompute context detection" },
    { id: 78922, type: "bugfix", author: "Echo-Nie", title: "Flex checkpoint flatten_state_dict lifetime" },
    { id: 79057, type: "bugfix", author: "Echo-Nie", title: "RestrictedUnpickler MRO security" },
    { id: 79161, type: "feature", author: "Echo-Nie", title: "set_rng_state parameter alias" },
    { id: 79167, type: "feature", author: "Echo-Nie", title: "random.initial_seed alias" },
    { id: 79268, type: "feature", author: "Echo-Nie", title: "DistributedSampler alias" },
    { id: 79275, type: "feature", author: "Echo-Nie", title: "flex_attention or_masks / and_masks" },
    { id: 79310, type: "feature", author: "Echo-Nie", title: "nn.init.sparse_" },
    { id: 79353, type: "bugfix", author: "Echo-Nie", title: "P2P local_var bug" },
    { id: 79369, type: "bugfix", author: "Echo-Nie", title: "check_memory_usage logging" },
  ],

  failures: {
    52948: {
      category: "evidence",
      matrix: "关键测试未触发目标 API",
      reason:
        "结构检查通过，但关键 static 用例调用 net(x) 时没有开启 hook，实际上没有执行 register_hook；当前也没有完成可采信的 exact Base / Gold 功能矩阵。",
      action:
        "修正测试调用，让 static / dy2static 路径真实执行 register_hook，并保留现有动态图 P2P 后重新运行。",
      contributionPr: 1459,
    },
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
      matrix: "Base 36F / 32S → Gold 33P / 3F / 32S",
      reason:
        "聚合运行时 2D / 3D static Program 相互污染，Gold 仍有 3 个失败；全部节点又都是新增目标测试，P2P 为 0。",
      action:
        "隔离四个测试文件的进程或重置 static Program，并增加至少一个相关、有效的 P2P。",
      contributionPr: 1472,
    },
    64320: {
      category: "roles",
      matrix: "Base 1P / 6F → Gold 7P · 有效 P2P 0",
      reason:
        "唯一 Base pass 与目标无关；invalid-rank 用例在调用 sparse.mask_as 前就失败，探针观测到目标调用次数为 0。",
      action:
        "让边界测试真正命中 sparse.mask_as，并增加一个在 Base、Gold 均通过的相关回归节点。",
      contributionPr: 1471,
    },
    73122: {
      category: "package",
      matrix: "Test / Gold patch 均不可应用",
      reason:
        "tests/test.patch 的 hunk 行数损坏；Gold patch 在 multi_dot_kernel_impl.h 的 preimage 也不匹配 exact Base。",
      action: "从 README 声明的 exact Base 重新导出 test patch 与 Gold patch。",
      contributionPr: 1480,
    },
    76259: {
      category: "package",
      matrix: "Test patch 无法解析",
      reason:
        "tests/test.patch 第 214 行附近损坏：新文件 hunk 声明 116 行，实际只有 114 行。",
      action:
        "重新导出完整 test patch；通过静态门禁后，再在 Windows / MSVC 环境运行 F2P/P2P。",
      contributionPr: 1399,
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
    78911: {
      category: "package",
      matrix: "Test patch cannot apply",
      reason:
        "test patch 把 exact Base 已存在的 test_recompute_context.py 声明成新文件，apply 报 already exists in index。",
      action:
        "换成不冲突的测试文件名，同时更新 patch 与 test.sh，再重新导入和验证。",
      contributionPr: 1407,
      sourceAuthor: "liufengwei0103",
      sourceAuthorProfile: "https://github.com/liufengwei0103",
    },
  },

  correction: {
    id: 74184,
    title: "74184 已从不通过集合中移除",
    summary:
      "补齐 legacy test 路径后，Base 为 5P / 2F，Gold 为 7P：有效 F2P 2 个、P2P 5 个，满足当前最低验证门槛。",
    caveat:
      "原始 runner 仍需补 PYTHONPATH，且 test patch 把旧除零回归改成空 pass；这些影响直接评测和 judge 质量，但不改变 Core F2P/P2P 结论。",
    contributionPr: 1476,
  },
};
