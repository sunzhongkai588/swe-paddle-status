// New review revision; the original full-105 acceptance stays immutable.
(function () {
  "use strict";
  const original = window.SWE_PADDLE_ACCEPTANCE;
  if (!original || original.meta.sourceReportSha256 !== "7f7a9ee8f3d16116b2982cf60ec74e7bd1a28c2181c78c93f89e374cf402da9e") throw new Error("SWE-Paddle recheck: incorrect frozen source");
  const corrections = [
  {
    "id": 57827,
    "status": "failed",
    "f2p": 2,
    "p2p": 2,
    "corePassed": false,
    "reason": "目标修复和选定回归双轮通过。原来的0F误排除了由目标算子缺失引起的可重复崩溃；原始整文件脚本仍有两个误收集helper和一个legacy MKLDNN崩溃，包入口需修。本次只确认目标及选定回归子集；原完整范围仍有故障，整题保持未通过。",
    "action": "将原入口明确选择已复现的两个PIR目标与两个TestError回归，或者修正误收集并解决legacy MKLDNN旁支后全包复验。",
    "countsNote": "2026-09-11 仅选定目标/回归子集的配对数；完整任务仍未通过，不拼接旧轮次的其他 P2P。",
    "matrix": "2 F2P / 2 P2P · 已配对子集，整题未通过",
    "selectedEvidenceSha256": "ccb18c90ac84ed744d809c151ee88b5c2d17e68f096a442c4706708f1d8d1a73"
  },
  {
    "id": 59021,
    "status": "failed",
    "f2p": 3,
    "p2p": 6,
    "corePassed": false,
    "reason": "恢复历史验证条件后，选定目标及回归双轮稳定 3F/6P。原脚本未固定 len 所需 flags，pytest 入口还漏了 fuse 静态初始化；原完整范围另有 TensorArray 崩溃，尚不能确定该崩溃的根因。本次只确认目标及选定回归子集；原完整范围仍有故障，整题保持未通过。",
    "action": "为SelectedRows和TestLen设置FLAGS_enable_pir_with_pt_in_dy2st=false及FLAGS_enable_pir_in_executor=true；fuse回归直接运行Python脚本或显式启静态模式；原入口固定目标及回归后重验。",
    "countsNote": "2026-09-11 仅选定目标/回归子集的配对数；完整任务仍未通过，不拼接旧轮次的其他 P2P。",
    "matrix": "3 F2P / 6 P2P · 已配对子集，整题未通过",
    "selectedEvidenceSha256": "ccb18c90ac84ed744d809c151ee88b5c2d17e68f096a442c4706708f1d8d1a73"
  },
  {
    "id": 59348,
    "status": "needs_fix",
    "f2p": 13,
    "p2p": 2,
    "corePassed": true,
    "reason": "同一完整15节点在正确静态模式下Base双轮13失败/2通过，Gold双轮15通过；缺静态初始化时test_errors因异常类型不同在两边失败。属于入口前置条件缺失，不能称参考修复仍错误。",
    "action": "在原入口补test/legacy_test搜索路径，并在pytest.main之前调用paddle.enable_static()；保持原15节点与断言完整复验。",
    "countsNote": "2026-09-11 完整 15 节点配对；原入口仍待修。",
    "matrix": "13 F2P / 2 P2P · 核心通过，原入口待修",
    "selectedEvidenceSha256": "ccb18c90ac84ed744d809c151ee88b5c2d17e68f096a442c4706708f1d8d1a73"
  }
];
  const current = JSON.parse(JSON.stringify(original));
  for (const correction of corrections) {
    const task = current.tasks.find((task) => task.id === correction.id);
    if (!task || task.status !== "failed") throw new Error("SWE-Paddle recheck: incorrect previous status");
    Object.assign(task, correction, {recordUpdatedAt:"2026-09-11",packageChangeRequired:true,originalEntryPassed:false});
  }
  const count = (status) => current.tasks.filter((task) => task.status === status).length;
  current.counts = {total:current.tasks.length,passed:count("passed")+count("needs_fix"),packageUnchanged:count("passed"),packageNeedsFix:count("needs_fix"),failed:count("failed"),incomplete:count("incomplete")};
  const passed = current.tasks.filter((task) => task.corePassed === true);
  current.evidenceCounts = {
    exactPassed:passed.filter((task) => ["exact_native","exact_python"].includes(task.evidence)).length,
    compatiblePassed:passed.filter((task) => task.evidence === "exact_python_compatible_native").length,
    lightweightPassed:passed.filter((task) => ["lightweight_source","lightweight_cpp"].includes(task.evidence)).length
  };
  current.meta.reportUrl = "verification-audit-20260911.md";
  current.meta.updatedAt = "2026-09-11";
  current.meta.recheckedTaskIds = corrections.map((task) => task.id);
  current.meta.recheckSourceSha256 = "ccb18c90ac84ed744d809c151ee88b5c2d17e68f096a442c4706708f1d8d1a73";
  current.meta.recheckScope = "59348完整15节点恢复通过；57827/59021仅确认目标子集，完整任务未通过；其余102条保持封存结论。";
  if (JSON.stringify(current.counts) !== JSON.stringify({total:105,passed:90,packageUnchanged:71,packageNeedsFix:19,failed:12,incomplete:3})) throw new Error("SWE-Paddle recheck: count partition mismatch");
  window.SWE_PADDLE_CURRENT_ACCEPTANCE = current;
})();
