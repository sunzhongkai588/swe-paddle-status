// Public review annotations and test outcomes; original acceptance bytes remain unchanged.
window.SWE_PADDLE_VERIFICATION_AUDIT = {
  "schemaVersion": 1,
  "meta": {
    "snapshot": "207998dab8c4c76c8558c3cca8ef177c69f10c1c",
    "sourceReportSha256": "7f7a9ee8f3d16116b2982cf60ec74e7bd1a28c2181c78c93f89e374cf402da9e",
    "reviewedAt": "2026-09-11",
    "reportUrl": "verification-audit-20260911.md"
  },
  "tasks": [
    {
      "id": 18687,
      "summary": "缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr18687_launch_ps.py::test_f2p_failed_child_process_is_reported_to_the_launcher",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr18687_launch_ps.py::test_f2p_parameter_server_parser_accepts_counts_and_script_arguments",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr18687_launch_ps.py::test_f2p_server_and_worker_roles_receive_consistent_environment",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr18687_launch_ps.py::test_p2p_existing_collective_parser_forwards_training_arguments",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 27247,
      "summary": "缺陷测试 2 项、回归测试 4 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr27247_dataloader_spawn_pickle.py::test_reader_loop_keeps_batch_handoff_behavior",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr27247_dataloader_spawn_pickle.py::test_reader_process_and_consumer_thread_are_started",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr27247_dataloader_spawn_pickle.py::test_reader_target_can_be_serialized_for_spawn",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr27247_dataloader_spawn_pickle.py::test_worker_loop_keeps_batch_handoff_behavior",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr27247_dataloader_spawn_pickle.py::test_worker_processes_are_started_and_registered",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr27247_dataloader_spawn_pickle.py::test_worker_target_can_be_serialized_for_spawn",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 6 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 33369,
      "summary": "缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr33369_elastic_fault_tolerance.py::test_collective_launch_is_managed_by_the_elastic_lifecycle",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr33369_elastic_fault_tolerance.py::test_failed_training_requests_an_elastic_restart",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr33369_elastic_fault_tolerance.py::test_membership_change_holds_the_current_training_group",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr33369_elastic_fault_tolerance.py::test_parameter_server_mode_is_preserved",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 36684,
      "summary": "缺陷测试 8 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_INIT_CASE::test_enable_elastic",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_INIT_CASE::test_launch_elastic",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_MANAGER_CASE::test_elastic_manager_init",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_MANAGER_CASE::test_exit",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_MANAGER_CASE::test_match_elastic",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_MANAGER_CASE::test_match_faulttolerance",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_MANAGER_CASE::test_update_hosts_for_elastic",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr36684_elastic_scale.py::UPSTREAM_MANAGER_CASE::test_update_hosts_for_faulttolerance",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr36684_elastic_scale.py::test_f2p_scale_out_and_scale_in_update_training_hosts",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr36684_elastic_scale.py::test_f2p_variable_host_range_is_matched",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr36684_elastic_scale.py::test_p2p_existing_elastic_enablement_is_preserved",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 11 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 41202,
      "summary": "目标测试已复现 2F/1P；原脚本以 python.paddle 再次加载底层模块，报 VarBase 重复注册，测试尚未开始就停止。",
      "category": "测试入口重复导入模块",
      "history": "与上一版结论一致。",
      "action": "统一测试入口的包导入路径，避免同一 Paddle 模块被加载两次，再执行原脚本。",
      "checks": [
        {
          "name": "tests/test.sh → Paddle 包导入",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "目标测试已复现 2F/1P；原脚本以 python.paddle 再次加载底层模块，报 VarBase 重复注册，测试尚未开始就停止。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_dataloader_autotune.py::TestAutoTune::test_dataloader_disable_autotune",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_dataloader_autotune.py::TestAutoTune::test_dataloader_use_autotune",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_dataloader_autotune.py::TestAutoTune::test_distributer_batch_sampler_autotune",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 标准生成文件已经补齐，但原脚本又以 python.paddle 的名字加载同一底层模块，导致类型重复注册，测试还没开始就中断。独立诊断能跑通不等于原入口可用，需要统一包导入方式后再用原脚本复验。"
    },
    {
      "id": 50086,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_conditional_block_scope_lifecycle.py::test_first_run_and_legacy_executor_behavior_remain_valid",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_conditional_block_scope_lifecycle.py::test_new_executor_repeated_run_uses_fresh_child_scope",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_conditional_block_scope_lifecycle.py::test_stale_cached_scope_is_not_reused",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 52948,
      "summary": "目标测试已复现 5F/14P；原脚本重复导入 python.paddle 导致 VarBase 注册冲突。已完成源码编译，当前问题不是缺少编译产物。",
      "category": "测试入口重复导入模块",
      "history": "与上一版结论一致。",
      "action": "修正测试入口的包导入方式，再执行原脚本确认完整测试能够完成。",
      "checks": [
        {
          "name": "tests/test.sh → Paddle 包导入",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "目标测试已复现 5F/14P；原脚本重复导入 python.paddle 导致 VarBase 注册冲突。已完成源码编译，当前问题不是缺少编译产物。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestRegsiterBackwardFinalHook::test_register_backward_hook",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterBackwardHook::test_register_backward_hook",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterBackwardHook::test_register_backward_hook_for_interior_var",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterBackwardHook::test_register_backward_hook_for_var_without_gradient",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_hook_for_accumulated_grad_interior_var",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_hook_for_accumulated_grad_leaf_var",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_hook_for_interior_var",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_hook_for_leaf_var",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_hook_in_double_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_hook_in_model",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_multiple_hooks_for_interior_var",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_register_hook_for_stop_gradient_var",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_register_hook_in_dy2static_mode",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_register_hook_in_static_mode",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py::TestTensorRegisterHook::test_remove_one_hook_multiple_times",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/dygraph_to_static/test_tensor_hook.py::TestStaticAnalysis::test_hook_for_different_parameter",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/dygraph_to_static/test_tensor_hook.py::TestStaticAnalysis::test_hook_for_reassignment_parameter",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/dygraph_to_static/test_tensor_hook.py::TestStaticAnalysis::test_hook_for_repeat_register",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/dygraph_to_static/test_tensor_hook.py::TestStaticAnalysis::test_hook_in_init_for_layer",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 19 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 这条已经完成精确原生构建，缺少编译产物不是当前原因；原脚本在收集测试时重复加载底层模块，仍触发 VarBase 注册冲突。应修正入口的包导入方式，让原脚本也能执行已验证的断言，而不是修改断言让它通过。"
    },
    {
      "id": 53534,
      "summary": "缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_to_tensor_numpy124_contract.py::test_nested_variable_sequence_uses_recursive_conversion",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_to_tensor_numpy124_contract.py::test_numeric_sequence_behavior_remains_valid",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_to_tensor_numpy124_contract.py::test_unsupported_mapping_has_clear_error",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_to_tensor_numpy124_contract.py::test_variable_passthrough_and_explicit_cast_remain_valid",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 54435,
      "summary": "缺陷测试 3 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr54435_sort_ip.py::test_disabled_sort_keeps_existing_key_order",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr54435_sort_ip.py::test_etcd_master_assigns_rank_by_numeric_ip",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr54435_sort_ip.py::test_existing_rank_argument_is_unchanged",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr54435_sort_ip.py::test_http_master_assigns_rank_by_numeric_ip",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr54435_sort_ip.py::test_sort_ip_option_and_environment_mapping",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 5 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 54625,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr54625_pipeline_output_release.py::test_initialized_pristine_outputs_are_released",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr54625_pipeline_output_release.py::test_inplace_modified_outputs_are_not_released",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr54625_pipeline_output_release.py::test_uninitialized_outputs_are_not_released",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 55890,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr55890_vpp_overlap_schedule.py::test_aligned_legacy_schedule_keeps_existing_chunk_selection",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr55890_vpp_overlap_schedule.py::test_nonzero_stage_flushes_first_chunk_at_model_chunk_boundary",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr55890_vpp_overlap_schedule.py::test_overlap_communication_uses_pipeline_stage_cadence",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 56135,
      "summary": "缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_bmm_dynamic_shape_contract.py::test_cpp_infermeta_resolves_unknown_dimensions",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_bmm_dynamic_shape_contract.py::test_known_incompatible_shapes_are_rejected",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_bmm_dynamic_shape_contract.py::test_known_shape_behavior_remains_valid",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_bmm_dynamic_shape_contract.py::test_python_static_bmm_accepts_unknown_dimensions",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 56470,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr56470_upsampling_single_int.py::test_bilinear_2d_accepts_single_integer_size",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr56470_upsampling_single_int.py::test_existing_sequence_and_scale_factor_behavior_remains_valid",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr56470_upsampling_single_int.py::test_nearest_2d_accepts_single_integer_size",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 56705,
      "summary": "缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr56705_mp_ops_pylayer_lifecycle.py::test_c_identity_forward_backward_contract",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr56705_mp_ops_pylayer_lifecycle.py::test_c_identity_reuses_pylayer_class_across_calls",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr56705_mp_ops_pylayer_lifecycle.py::test_mp_allreduce_forward_backward_contract",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr56705_mp_ops_pylayer_lifecycle.py::test_mp_allreduce_reuses_pylayer_class_across_calls",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 57741,
      "summary": "原脚本选了两个不存在的 Cuda 类名，四轮均未执行测试（退出码 4）。独立诊断改成真实的 CUDA 类名后，唯一 CPU 测试四轮全通过，3 个可选 GPU 测试四轮跳过，因此是 0 F2P / 1 P2P，不能证明补丁修复了 CPU 失败。",
      "category": "测试入口错误；缺 F2P",
      "history": "与上一版结论一致。",
      "action": "先将 TestTensorCopyToCudaOnDefaultCPU/GPU 改为 TestTensorCopyToCUDAOnDefaultCPU/GPU，再补能在 Base 上实际触发失败的 CPU 案例；可选 GPU 跳过不算通过。",
      "checks": [
        {
          "name": "test.dygraph_to_static.test_tensor_memcpy_on_cpu.TestTensorCopyToCUDAOnDefaultCPU::test_tensor_cuda_on_default_cpu",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "四轮均跳过：无 CUDA，不能计 F2P/P2P。"
        },
        {
          "name": "test.dygraph_to_static.test_tensor_memcpy_on_gpu.TestTensorCopyToCUDAOnDefaultGPU::test_tensor_cuda_on_default_gpu",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "四轮均跳过：无 CUDA，不能计 F2P/P2P。"
        },
        {
          "name": "test.dygraph_to_static.test_tensor_memcpy_on_gpu.TestTensorCopyToCpuOnDefaultGPU::test_tensor_cpu_on_default_gpu",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "四轮均跳过：无 CUDA，不能计 F2P/P2P。"
        },
        {
          "name": "test.dygraph_to_static.test_tensor_memcpy_on_cpu.TestTensorCopyToCpuOnDefaultCPU::test_tensor_cpu_on_default_cpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "四轮均通过：CPU 路径未复现修复前失败，实际没有 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 57827,
      "summary": "目标修复和选定回归双轮通过。原来的0F误排除了由目标算子缺失引起的可重复崩溃；原始整文件脚本仍有两个误收集helper和一个legacy MKLDNN崩溃，包入口需修。本次只确认目标及选定回归子集；原完整范围仍有故障，整题保持未通过。",
      "category": "目标子集已复现，原完整范围仍有故障",
      "history": "任务的 7 个输入文件与封存快照完全一致。开发者此前能复现目标缺陷的结论得到支持；修正原来 0F 的解释，保留整题未通过，避免以子集替代原完整范围。",
      "action": "将原入口明确选择已复现的两个PIR目标与两个TestError回归，或者修正误收集并解决legacy MKLDNN旁支后全包复验。",
      "checks": [
        {
          "name": "test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_resnet__ast_pir_exe",
          "base": [
            "target_sigabrt",
            "target_sigabrt"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。Base因目标算子pd_op.fused_elemwise_add_activation未注册而SIGABRT，Gold完成测试并通过；关闭pytest捕获已定位错误。"
        },
        {
          "name": "test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_in_static_mode_mkldnn__ast_pir_exe",
          "base": [
            "target_sigabrt",
            "target_sigabrt"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。Base因目标算子pd_op.fused_elemwise_add_activation未注册而SIGABRT，Gold完成测试并通过；关闭pytest捕获已定位错误。"
        },
        {
          "name": "test/dygraph_to_static/test_build_strategy.py::TestError::test_type_error__ast_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。"
        },
        {
          "name": "test/dygraph_to_static/test_build_strategy.py::TestError::test_type_error__sot_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。"
        },
        {
          "name": "原范围仍需处理：test/dygraph_to_static/test_build_strategy.py::test_ast_only",
          "base": [
            "setup_error",
            "setup_error"
          ],
          "gold": [
            "setup_error",
            "setup_error"
          ],
          "explanation": "2026-09-09 原范围证据：fixture 'fn' not found，导入装饰器误当成测试。不在本次子集通过范围内。"
        },
        {
          "name": "原范围仍需处理：test/dygraph_to_static/test_build_strategy.py::test_legacy_and_pir",
          "base": [
            "setup_error",
            "setup_error"
          ],
          "gold": [
            "setup_error",
            "setup_error"
          ],
          "explanation": "2026-09-09 原范围证据：fixture 'fn' not found，导入装饰器误当成测试。不在本次子集通过范围内。"
        },
        {
          "name": "原范围仍需处理：test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_in_static_mode_mkldnn__ast_legacy_ir",
          "base": [
            "aborted",
            "aborted"
          ],
          "gold": [
            "aborted",
            "aborted"
          ],
          "explanation": "2026-09-09 原范围证据：原整文件包含的legacy oneDNN旁支SIGABRT，未在选定核心通过范围。不在本次子集通过范围内。"
        }
      ],
      "evidenceNote": "README建议选择稳定节点；两个PIR fused-op目标及两个TestError既有回归，原整文件不在通过范围。新验证2P仅为两个TestError节点，不将旧报告的额外legacy ResNet 1P拼入。 两个目标Base异常退出已用关闭pytest捕获的独立运行确认缺pd_op.fused_elemwise_add_activation注册；不是对所有崩溃一概算F2P。 原始脚本和测试包未修改，也未宣称原包直接可用。"
    },
    {
      "id": 58219,
      "summary": "缺陷测试 4 项、回归测试 4 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_floordiv",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_item",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_math_exists",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_matmul",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_mod",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_place",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_pow",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_math_op_patch_pir.TestMathOpPatchesPir::test_some_dim",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 8 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 58323,
      "summary": "原脚本四轮均因 reshape 测试依赖 white_list 无法导入退出 2。补路径的独立诊断中，Base 在模块顶层访问不存在的 paddle.atleast_1d，41 个 atleast 测试尚未执行；Gold 可执行 41 个，其中 test_as_tensor_method 两轮失败，其余 40 个通过。另 48 个节点才是完整 P2P。",
      "category": "入口导入错误；测试模式隔离错误；Base 收集失败",
      "history": "与上一版结论一致。",
      "action": "修复 white_list 的导入路径；将新 API 查找移入测试体以收集 Base 节点；显式设置并恢复测试的动静态模式，然后重跑原脚本。",
      "checks": [
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastAsTensorMethod::test_as_tensor_method",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮在 reshape 中把静态 Variable 传入动态图 Tensor 接口，模式未隔离。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_0::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_10::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_11::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_12::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_13::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_14::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_1::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_2::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_3::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_4::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_5::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_6::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_7::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_8::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_9::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_0::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_10::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_11::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_12::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_13::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_14::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_1::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_2::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_3::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_4::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_5::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_6::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_7::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_8::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_9::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastErrorCombineInputs_0::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastErrorCombineInputs_1::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastErrorCombineInputs_2::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixData_0::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixData_1::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixData_2::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixData_3::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixData_4::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixDim_0::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixDtypes_0::test_all",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入模块时找不到 paddle.atleast_1d，此节点未进入测试体。Gold 两轮通过，但 Base 缺逐节点执行结果，不能计算 F2P。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeBF16Op::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeBF16Op::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestDygraphReshapeAPI::test_out",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestDygraphReshapeAPI::test_out_float32",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestDygraphReshapeAPI::test_out_uint8",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestDygraphReshapeInplaceAPI::test_out",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestDygraphReshapeInplaceAPI::test_out_float32",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestDygraphReshapeInplaceAPI::test_out_uint8",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeAPI::test_imperative",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeAPI::test_paddle_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeAPI_ZeroDim::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeAPI_ZeroDim::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeFP16Op::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeFP16Op::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeInt8Op::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeInt8Op::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpBool::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpBool::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer1::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer1::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer1_attr_OnlyShape::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer1_attr_OnlyShape::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer1_attr_ShapeTensor::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer1_attr_ShapeTensor::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer2::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer2::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer2_attr_OnlyShape::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer2_attr_OnlyShape::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer2_attr_ShapeTensor::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpDimInfer2_attr_ShapeTensor::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpError::test_paddle_api_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpWithInputShape::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOpWithInputShape::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOp_ZeroDim1::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOp_ZeroDim1::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOp_ZeroDim2::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOp_ZeroDim2::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOp_attr_OnlyShape::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOp_attr_OnlyShape::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOp_attr_ShapeTensor::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeOp_attr_ShapeTensor::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapePirOpResultListShape::test_opresult_list_shape",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeUint8Op::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeUint8Op::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeZeroTensor::test_reshape_zero_tensor_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestReshapeZeroTensor::test_reshape_zero_tensor_success",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestStaticReshape_::test_imperative",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_reshape_op.py::TestStaticReshape_::test_paddle_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 91 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 58343,
      "summary": "缺陷测试 6 项、回归测试 9 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_bitwise_and",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_bitwise_not",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_bitwise_or",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_bitwise_xor",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_equal_and_nequal",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_floordiv",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_greater",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_item",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_less",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_math_exists",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_matmul",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_mod",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_place",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_pow",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_math_op_patch_pir.py::TestMathOpPatchesPir::test_some_dim",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 15 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 58917,
      "summary": "缺陷测试 15 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_splits_api.py::TestDSplit::test_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestDSplit::test_error_dim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestDSplit::test_error_split",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestDSplit::test_split_dim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestHSplit::test_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestHSplit::test_error_dim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestHSplit::test_error_split",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestHSplit::test_split_dim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestTensorSplit::test_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestTensorSplit::test_error_dim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestTensorSplit::test_error_split",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestTensorSplit::test_special_indices",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestTensorSplit::test_split_axis",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestTensorSplit::test_split_dim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestVSplit::test_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestVSplit::test_error_dim",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestVSplit::test_error_split",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_splits_api.py::TestVSplit::test_split_dim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 18 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 59021,
      "summary": "恢复历史验证条件后，选定目标及回归双轮稳定 3F/6P。原脚本未固定 len 所需 flags，pytest 入口还漏了 fuse 静态初始化；原完整范围另有 TensorArray 崩溃，尚不能确定该崩溃的根因。本次只确认目标及选定回归子集；原完整范围仍有故障，整题保持未通过。",
      "category": "目标子集已复现，原完整范围仍有故障",
      "history": "任务的 7 个输入文件与封存快照完全一致。开发者此前能复现目标缺陷的结论得到支持；修正原来 0F 的解释，保留整题未通过，避免以子集替代原完整范围。",
      "action": "为SelectedRows和TestLen设置FLAGS_enable_pir_with_pt_in_dy2st=false及FLAGS_enable_pir_in_executor=true；fuse回归直接运行Python脚本或显式启静态模式；原入口固定目标及回归后重验。",
      "checks": [
        {
          "name": "test/dygraph_to_static/test_len.py::TestLenWithSelectedRows::test_len__ast_legacy_ir",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/dygraph_to_static/test_len.py::TestLenWithSelectedRows::test_len__sot_legacy_ir",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/dygraph_to_static/test_len.py::TestLenWithSelectedRows::test_len__sot_mgs10_legacy_ir",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/dygraph_to_static/test_len.py::TestLen::test_len__ast_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。"
        },
        {
          "name": "test/dygraph_to_static/test_len.py::TestLen::test_len__sot_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。"
        },
        {
          "name": "test/dygraph_to_static/test_len.py::TestLen::test_len__sot_mgs10_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。"
        },
        {
          "name": "test/legacy_test/test_fuse_elewise_add_act_pass.py::TestMNIST::test_batchnorm_fc_with_fuse_op",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。"
        },
        {
          "name": "test/legacy_test/test_fuse_elewise_add_act_pass.py::TestMNIST::test_simple_fc_with_fuse_op",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。"
        },
        {
          "name": "test/legacy_test/test_fuse_elewise_add_act_pass.py::TestFuseActElewiseAddInplaceGradPass::test_fuse_act_add_grad_pass_cpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。"
        },
        {
          "name": "原范围仍需处理：test/dygraph_to_static/test_len.py::TestLenWithTensorArray::test_len__ast_legacy_ir",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "2026-09-09 原范围证据：默认执行模式触发非目标TensorArray段错误，原脚本未完成。不在本次子集通过范围内。"
        },
        {
          "name": "原范围仍需处理：test/legacy_test/test_fuse_elewise_add_act_pass.py::TestMNIST::test_batchnorm_fc_with_fuse_op",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "2026-09-09 原范围证据：未调用paddle.enable_static()。不在本次子集通过范围内。"
        },
        {
          "name": "原范围仍需处理：test/legacy_test/test_fuse_elewise_add_act_pass.py::TestMNIST::test_simple_fc_with_fuse_op",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "2026-09-09 原范围证据：未调用paddle.enable_static()。不在本次子集通过范围内。"
        },
        {
          "name": "原范围仍需处理：test/legacy_test/test_fuse_elewise_add_act_pass.py::TestFuseActElewiseAddInplaceGradPass::test_fuse_act_add_grad_pass_cpu",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "2026-09-09 原范围证据：未调用paddle.enable_static()。不在本次子集通过范围内。"
        }
      ],
      "evidenceNote": "历史同条件：SelectedRows/TestLen分别启用两个executor/dy2st flags；CPU fuse回归直接运行脚本以执行__main__静态初始化。CPU下test_fuse_act_add_grad_pass_cuda空返回不计P2P。 len同一语义目标有3个参数化节点；3F不是3种不同功能。 仅恢复历史条件的独立诊断通过；未修改或宣布原入口通过。"
    },
    {
      "id": 59127,
      "summary": "84 项缺陷测试和 42 项回归测试可复现；原脚本找不到 white_list，在收集 test_stack_op.py 时停止。",
      "category": "测试入口缺少辅助模块路径",
      "history": "与上一版结论一致。",
      "action": "在 tests/test.sh 中配置包含 white_list 的仓库测试目录，并用原入口复验。",
      "checks": [
        {
          "name": "tests/test.sh → test_stack_op.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "84 项缺陷测试和 42 项回归测试可复现；原脚本找不到 white_list，在收集 test_stack_op.py 时停止。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_0d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_0d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_1d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_1d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_2d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_2d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_3d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_4d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_4d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestColumnStack::test_mix_ndim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestDStack::test_0d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestDStack::test_0d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestDStack::test_1d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestDStack::test_1d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestDStack::test_2d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestDStack::test_2d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestDStack::test_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestDStack::test_3d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestDStack::test_4d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestDStack::test_4d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestDStack::test_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestDStack::test_mix_ndim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorColumnStack::test_1d_2d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorColumnStack::test_1d_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorColumnStack::test_2d_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorColumnStack::test_mix_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorColumnStack::test_vstack_0d_1d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorDStack::test_1d_2d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorDStack::test_1d_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorDStack::test_2d_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorDStack::test_mix_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorDStack::test_vstack_0d_1d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorHStack::test_1d_2d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorHStack::test_1d_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorHStack::test_2d_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorHStack::test_mix_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorRowStack::test_1d_2d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorRowStack::test_1d_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorRowStack::test_2d_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorRowStack::test_mix_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorRowStack::test_vstack_0d_1d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorVStack::test_1d_2d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorVStack::test_1d_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorVStack::test_2d_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorVStack::test_mix_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestErrorVStack::test_vstack_0d_1d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestHStack::test_0d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestHStack::test_0d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestHStack::test_1d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestHStack::test_1d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestHStack::test_2d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestHStack::test_2d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestHStack::test_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestHStack::test_3d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestHStack::test_4d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestHStack::test_4d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestHStack::test_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestHStack::test_mix_ndim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestRowStack::test_0d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestRowStack::test_0d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestRowStack::test_1d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestRowStack::test_1d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestRowStack::test_2d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestRowStack::test_2d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestRowStack::test_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestRowStack::test_3d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestRowStack::test_4d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestRowStack::test_4d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestRowStack::test_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestRowStack::test_mix_ndim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestVStack::test_0d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestVStack::test_0d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestVStack::test_1d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestVStack::test_1d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestVStack::test_2d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestVStack::test_2d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestVStack::test_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestVStack::test_3d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestVStack::test_4d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestVStack::test_4d_more",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestVStack::test_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_extension_api.py::TestVStack::test_mix_ndim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::API_DygraphTest::test_out",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::API_DygraphTest::test_single_tensor_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::API_test::test_out",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::API_test::test_pir_single_tensor_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::API_test::test_single_tensor_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackAPIWithLoDTensorArray::test_case",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackAPI_ZeroDim::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackBF16Op::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackBF16Op::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op1::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op1::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op2::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op2::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op3::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op3::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op4::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op4::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op5::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op5::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op6::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op6::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackFP16Op::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackListOfSingleTensor::test_list_single_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp1::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp1::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp2::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp2::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp3::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp3::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp4::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp4::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp5::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp5::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp6::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp6::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOpBase::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOpBase::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOpWithNegativeShape::test_out",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp_ZeroDim::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestStackOp_ZeroDim::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_stack_op.py::TestTensorStackAPIWithLoDTensorArray::test_case",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 126 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 white_list 是仓库测试使用的辅助模块，原脚本找不到它，会在收集测试时停止，尚未执行目标断言。补齐搜索路径的独立诊断已通过，但还需要把必要的路径配置落实到原脚本并复验。"
    },
    {
      "id": 59348,
      "summary": "同一完整15节点在正确静态模式下Base双轮13失败/2通过，Gold双轮15通过；缺静态初始化时test_errors因异常类型不同在两边失败。属于入口前置条件缺失，不能称参考修复仍错误。",
      "category": "入口缺少静态模式初始化，完整核心已恢复",
      "history": "任务的 7 个输入文件与封存快照完全一致。全 15 节点同条件复验通过，改为核心通过、原包待修。",
      "action": "在原入口补test/legacy_test搜索路径，并在pytest.main之前调用paddle.enable_static()；保持原15节点与断言完整复验。",
      "checks": [
        {
          "name": "test/sequence/test_sequence_mask.py::SequenceMaskTestBase::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::SequenceMaskTest1::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::SequenceMaskTest2::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::SequenceMaskTest3::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::SequenceMaskTest4::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::SequenceMaskTest5::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::SequenceMaskTest6::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::SequenceMaskTestBase_tensor_attr::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::SequenceMaskTest1_tensor_attr::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::SequenceMaskTest2_tensor_attr::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::SequenceMaskTest3_tensor_attr::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::SequenceMaskTest4_tensor_attr::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::SequenceMaskTest5_tensor_attr::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一节点在Base两轮失败、Gold两轮通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::TestSequenceMaskOpError::test_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。"
        },
        {
          "name": "test/sequence/test_sequence_mask.py::TestSequenceMaskWithEmptyTensor::test_empty",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "2026-09-11 同条件复验。同一既有回归节点在Base和Gold各两轮均通过。"
        },
        {
          "name": "原始 tests/test.sh 导入 test_sequence_mask.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "原入口未补 op_test 路径；正确静态模式下的完整 15 节点通过，并不表示原脚本已修改。"
        }
      ],
      "evidenceNote": "原选定sequence_mask全15节点，加入test/legacy_test搜索路径并在pytest前调用paddle.enable_static()。未改任何TypeError断言，未删除失败节点。 原任务脚本仍缺helper路径及显式静态初始化。"
    },
    {
      "id": 59374,
      "summary": "原脚本Base双轮5 failed/1 skipped，Gold双轮5 passed/1 skipped；没有真正两边都通过的回归节点。旧版5F/1P额外加入了原脚本未选的TestInplace::test_forward_version。未通过的是回归覆盖要求，不能说 Gold 测试执行失败。",
      "category": "缺少有效 P2P，Gold 测试本身通过",
      "history": "以前的 5F/1P 包含原脚本没有选择的额外回归 TestInplace::test_forward_version。当前原脚本只有 5F/0P；测试范围不同，不是同一个回归测试由通过变失败。",
      "action": "补入一个真实既有CPU回归节点，再完整复验。",
      "checks": [
        {
          "name": "test.legacy_test.test_apply.TestTensorApplyAPI::test_on_gpu",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test.legacy_test.test_apply.TestTensorApplyAPI::test_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_apply.TestTensorApplyAPI::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_apply.TestTensorApplyAPI::test_error",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_apply.TestTensorApplyAPI::test_to_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_inplace.TestDygraphTensorApplyInplace::test_inplace_api",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "已核对原入口四轮日志：Base 两轮各 5 failed / 1 skipped，Gold 两轮各 5 passed / 1 skipped；跳过不能当 P2P。"
    },
    {
      "id": 59383,
      "summary": "分文件运行可复现 28F/680P；原脚本导入 test_masked_scatter.py 时找不到 white_list。16 项 CPU 跳过未计为通过。",
      "category": "测试入口缺少辅助模块路径",
      "history": "与上一版结论一致。",
      "action": "在原脚本中配置辅助模块路径并核对整套测试收集；保留跳过项。",
      "checks": [
        {
          "name": "tests/test.sh → test_masked_scatter.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "分文件运行可复现 28F/680P；原脚本导入 test_masked_scatter.py 时找不到 white_list。16 项 CPU 跳过未计为通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterBF16::test_dygraph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterBF16::test_static_graph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterBF16APIBroadcast2::test_dygraph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterBF16APIBroadcast2::test_static_graph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API1::test_dygraph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API1::test_static_graph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API2::test_dygraph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API2::test_static_graph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API3::test_dygraph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16API3::test_static_graph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast2::test_dygraph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast2::test_static_graph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast3::test_dygraph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast3::test_static_graph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast::test_dygraph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterFP16APIBroadcast::test_static_graph",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestContinuouslyInplace::test_continuously_inplace",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceMultiply::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceRenorm::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceT::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygrapInplaceTranspose::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisNot::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisOr::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwisXor::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacBitwiseAnd::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplace::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplace::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplace::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplace::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplace::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplace::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplace::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATan::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceATanh::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAbs::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcos::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAcosh::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAdd::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAddMM::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsin::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceAsinh::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCast::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCeil::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceClip::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCos::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCosh::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumprod::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceCumsum::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDigamma::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceDivide::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceElu::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceEqual::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceExp::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFlatten::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloor::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFloorDivide::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceFrac::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGcd::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterEqual::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceGreaterThan::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHardTanh::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceHypot::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceI0::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceIndexFill::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLcm::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLdexp::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLeakyRelu::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessEqual::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLessThan::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLgamma::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog10::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog1p::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog2::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLog::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicAnd::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicNot::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicOr::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogicXor::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceLogit::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill2::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedFill::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_backward_error",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_backward_success_1",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_backward_success_2",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_forward_result",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_forward_version",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_inplace_api",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMaskedScatter::test_leaf_inplace_var_error",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceMutilgammaln::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNanToNum::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNeg::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_broadcast_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceNotEqual::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePolygamma::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplacePowerScalar::test_type_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReciprocal::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRelu::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRemainder::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshape::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceReshapeTensor::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRound::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceRsqrt::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScale::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceScatter::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSinh::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSoftmax::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSqrt::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceSubtract::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTan::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTanh::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceThresholdedRelu::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTril::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTriu::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceTrunc::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceUnsqueeze::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhere::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWhereBroadcast::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_continuous_inplace_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_forward_result",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_inplace_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestDygraphInplaceWithContinuous::test_leaf_inplace_var_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestGetitemBeforeInplace::test_getitem_before_inplace",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestInplace::test_backward_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestInplace::test_backward_success_1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestInplace::test_backward_success_2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestInplace::test_forward_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_inplace.py::TestLossIsInplaceVar::test_loss_is_inplace_var",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI1::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI1::test_static_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI2::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI2::test_static_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI3::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI3::test_static_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPI::test_static_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast2::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast2::test_static_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast3::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast3::test_static_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast4::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast4::test_static_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast5::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast5::test_static_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterAPIBroadcast::test_static_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterError::test_dtype_error",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterError::test_mask_error",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_masked_scatter.py::TestMaskedScatterError::test_numel_error",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 724 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 目前通过的是补齐辅助模块路径后的分文件诊断，原脚本仍找不到 white_list，不能直接得到同样的结果。需修正原入口的依赖搜索路径和收集方式，再验证整条执行流程；跳过的 16 个节点不算通过。"
    },
    {
      "id": 59715,
      "summary": "缺陷测试 56 项、回归测试 52 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase3D::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase3D::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase3D::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase3DFloat32::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase3DFloat32::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase3DFloat32::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase4D::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase4D::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase4D::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase4DFloat32::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase4DFloat32::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase4DFloat32::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCase::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseEmpty::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseEmpty::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseEmpty::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseEmptyFloat32::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseEmptyFloat32::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseEmptyFloat32::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseError::test_error_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseError::test_error_ndim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseFloat32::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseFloat32::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseFloat32::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm0::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm0::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm0::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm1::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm1::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm1::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm2::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm2::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat32L1norm2::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm0::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm0::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm0::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm1::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm1::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm1::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm2::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm2::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm2::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm3::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm3::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm3::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm4::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm4::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCasePrecisionFloat64L1norm4::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseScalar::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseScalar::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseScalar::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseScalarFloat32::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseScalarFloat32::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_matrix_exp.py::MatrixExpTestCaseScalarFloat32::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase1::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase1::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase1::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase2::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase2::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase2::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch1::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch1::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch1::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch2::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch2::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch2::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch3::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch3::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch3::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch4::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch4::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatch4::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatchBig::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatchBig::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseBatchBig::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseFP32::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseFP32::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseFP32::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian1::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian1::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian1::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian2::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian2::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian2::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian3::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian3::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian3::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian4::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian4::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian4::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian5::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian5::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian5::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian6::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian6::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian6::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitianFP32::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitianFP32::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitianFP32::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseRcond::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseRcond::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseRcond::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::TestDivByZero::test_div_by_zero",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 108 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 59847,
      "summary": "README 明确要求 CPU + GPU（CUDA）。CPU 四轮已完成：Base 原脚本两轮退出 1、Gold 两轮退出 0；诊断观察到 36 个 CPU F→P，32 个 FP16/BF16 节点因 CUDA 不可用而跳过。CPU 通过不能代替必需 GPU 核函数验证。",
      "category": "必需 CUDA 验证缺失（CPU Gold 已通过）",
      "history": "与上一版结论一致。",
      "action": "使用 CUDA 构建与设备对相同 Base/Gold 各跑两轮；补齐 fractional_max_pool2d/3d 的 FP16/BF16 及 GPU 执行结果。",
      "checks": [
        {
          "name": "必需硬件分支：CUDA",
          "base": [
            "not_run",
            "not_run"
          ],
          "gold": [
            "not_run",
            "not_run"
          ],
          "explanation": "使用 CUDA 构建与设备对相同 Base/Gold 各跑两轮；补齐 fractional_max_pool2d/3d 的 FP16/BF16 及 GPU 执行结果。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPI::test_dynamic_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPI::test_static_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPI::test_static_graph_return_mask",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPIDtype::test_dtypes",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPIErrorOutputSize::test_error_output_size",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPIRandomU::test_error_random_u",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DAPIRandomU::test_none_random_u",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DClassAPI::test_dynamic_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_api.py::TestFractionalMaxPool2DClassAPI::test_static_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_api.py::TestOutDtype::test_max_pool",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_BF16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_BF16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_FP16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_FP16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_BF16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_BF16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_FP16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_FP16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_BF16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_BF16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_FP16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_FP16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPI::test_dynamic_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPI::test_static_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPI::test_static_graph_return_mask",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPIDtype::test_dtypes",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPIErrorOutputSize::test_error_output_size",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPIRandomU::test_error_random_u",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DAPIRandomU::test_none_random_u",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DClassAPI::test_dynamic_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_api.py::TestFractionalMaxPool3DClassAPI::test_static_graph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_api.py::TestOutDtype::test_max_pool",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_BF16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_BF16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_FP16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_FP16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_BF16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_BF16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_FP16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_FP16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_BF16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_BF16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_FP16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_FP16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_pool2d_api.py::TestPool2DError_API::test_error_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_pool2d_api.py::TestPool2D_API::test_pool2d",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_pool2d_api.py::TestPool2D_API::test_pool2d_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_pool3d_api.py::TestPool3DError_API::test_error_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_pool3d_api.py::TestPool3D_API::test_pool3d",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_pool3d_api.py::TestPool3D_API::test_static_bf16_gpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_pool3d_api.py::TestPool3D_API::test_static_fp16_gpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        }
      ],
      "evidenceNote": "CPU 子集的原始四轮结果已与日志核对；所需硬件未执行。此表的通过状态不能当作整题验收通过或自动累加为有效回归数。"
    },
    {
      "id": 59909,
      "summary": "缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_hybrid_parallel_mode_selection.py::test_existing_data_and_pure_sharding_modes",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_hybrid_parallel_mode_selection.py::test_sharding_with_data_parallel_uses_sharding_mode",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_hybrid_parallel_mode_selection.py::test_tensor_and_pipeline_modes_take_precedence",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 59973,
      "summary": "原脚本 Gold 两轮都卡在两个 scatter 静态测试。TestScatterAPI.test_static 与 TestScatterInplaceAPI.test_static 四轮均在 paddle.static.data 报当前为动态图；没有执行到 scatter 结果断言。其余 47 F2P / 23 P2P 是通过子集，不能抵消这两个失败。 2026-09-11 对照：只在 pytest 前启用 static，这两个节点 Base/Gold 各两轮均由失败转为通过；确认初始化问题。原脚本本次复跑仍失败，整题状态保持未通过。",
      "category": "测试模式初始化错误",
      "history": "与上一版结论一致。",
      "action": "给静态测试显式启用并恢复 static 模式，复跑这两个完整节点及原 test.sh；两个 CPU 空返回节点不应计 P2P。",
      "checks": [
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterAPI::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均在 paddle.static.data 处报“只能用于静态图”。今天对照仅补 paddle.enable_static() 后，四轮均通过，确认是测试模式初始化问题。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op0::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op0::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op1::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op1::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op2::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op2::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op3::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op3::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op4::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op4::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op5::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op5::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op6::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op6::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterBF16Op::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op2::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op2::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op3::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op3::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op5::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op5::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterInplaceAPI::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均在 paddle.static.data 处报“只能用于静态图”。今天对照仅补 paddle.enable_static() 后，四轮均通过，确认是测试模式初始化问题。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp2::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp2::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp3::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp3::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp5::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp5::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOpFp16::test_scatter_fp16",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterAPI::test_large_data",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterError::test_scatter_index",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op0::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op0::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op1::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op1::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op4::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op4::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op6::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op6::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterFP16Op::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterInplaceAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterInplaceAPI::test_large_data",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp0::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp0::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp1::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp1::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp4::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp4::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp6::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp6::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi3D::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi3D::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi3DFloat32::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi3DFloat32::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4D::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4D::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4DAxis3::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4DAxis3::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4DAxis3Float32::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4DAxis3Float32::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4DFloat32::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi4DFloat32::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApi::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBfloat16::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBfloat16::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBool::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBool::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase2D::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase2D::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase2DFloat32::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase2DFloat32::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase3D::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase3D::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase3DFloat32::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiBroadcase3DFloat32::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiError::test_error_index",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiError::test_error_ndim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiFloat16::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiFloat16::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiFloat32::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiFloat32::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt16::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt16::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt32::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt32::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt64::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt64::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt8::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiInt8::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiIntComplex128::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiIntComplex128::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiIntComplex64::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiIntComplex64::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiUint8::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterApiUint8::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_slice_scatter.py::TestSliceScatterTensorApi::test_tensor",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "2026-09-11 对照：同一测试和断言，只在入口增加 paddle.enable_static()，两个静态节点由 Base/Gold 各两轮均失败变为均通过。该对照只验证两个节点；原脚本仍失败，未将局部修正当成完整任务通过。"
    },
    {
      "id": 60417,
      "summary": "缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_test/test_auto_tuner_resume.py::test_existing_search_and_history_flow_is_unchanged",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_test/test_auto_tuner_resume.py::test_launch_reuses_history_without_starting_training",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_test/test_auto_tuner_resume.py::test_resume_history_loads_values_and_preserves_a_copy",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_test/test_auto_tuner_resume.py::test_resume_lookup_returns_first_matching_configuration",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 60808,
      "summary": "测试没有失败：原脚本和全部测试都通过。实际是 1 项 F2P、2 项 P2P，README 写成了 2 项 F2P、1 项 P2P。",
      "category": "仅说明中的数量写错",
      "history": "上一版：原包通过；封存全量报告：核心通过、任务包待修。变化仅涉及文档数量，运行结果没有退化。",
      "action": "只需修正 environment/README.md 中的数量，不需要修改实现或测试断言。",
      "checks": [
        {
          "name": "test.legacy_test.test_broadcast_to_zero_dim_shape::test_broadcast_to_accepts_zero_dim_tensor_shape_element",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_broadcast_to_zero_dim_shape::test_expand_accepts_multi_element_1d_shape_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_broadcast_to_zero_dim_shape::test_integer_list_shape_regression",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 这条的原脚本和核心测试都已通过，只是 README 把实际的 1F/2P 写成了 2F/1P。需要改的是说明中的数量，不是修复运行故障，也不需要为了凑数改动测试断言。"
    },
    {
      "id": 64320,
      "summary": "CPU 已复现 6 项 F2P 和 26 项有效 P2P；另一个表面通过的护栏没有调用目标 API，不计有效 P2P。未完成的是 README 必需的 CUDA 分支，不能说 CPU 测试失败。",
      "category": "必需 CUDA 验证尚未执行",
      "history": "与上一版结论一致。",
      "action": "用 CUDA 构建和设备补跑 sparse.mask_as 的 COO 1d/2d/3d/4d、CSR 2d/3d 及其回归分支，保留 CPU 已通过结论。",
      "checks": [
        {
          "name": "必需硬件分支：CUDA",
          "base": [
            "not_run",
            "not_run"
          ],
          "gold": [
            "not_run",
            "not_run"
          ],
          "explanation": "用 CUDA 构建和设备补跑 sparse.mask_as 的 COO 1d/2d/3d/4d、CSR 2d/3d 及其回归分支，保留 CPU 已通过结论。"
        },
        {
          "name": "test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCoo::test_1d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCoo::test_2d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCoo::test_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCoo::test_4d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCsr::test_2d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCsr::test_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。"
        },
        {
          "name": "test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCsr::test_error_dimension",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestCooError::test_indices_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestCooError::test_same_dimensions",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestCooError::test_same_nnz",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestCooError::test_small_shape",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_crows_first_value",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_dimension1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_dimension2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_same_shape1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_same_shape2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestCsrError::test_same_shape3",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_batch_csr",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_coo_to_dense",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_coo_values_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_sparse_coo_tensor_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_sparse_coo_tensor_sorted",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_to_sparse_coo",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_to_sparse_csr",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseConvert::test_zero_nnz",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_create_coo_by_np",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_create_coo_by_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_create_coo_no_shape",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_create_csr_by_np",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_create_csr_by_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_sparse_utils_op.py::TestSparseCreate::test_place",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        }
      ],
      "evidenceNote": "CPU 子集的原始四轮结果已与日志核对；所需硬件未执行。此表的通过状态不能当作整题验收通过或自动累加为有效回归数。"
    },
    {
      "id": 64519,
      "summary": "缺陷测试 16 项、回归测试 9 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "上一版：验证未通过；封存全量报告：原包通过。当前完整诊断恢复通过；此前的失败记录不能继续当作现状。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_cholesky_op.py::test_with_pir_api",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "missing",
            "missing"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_cholesky_op.py::TestCholeskyOp2D::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_cholesky_op.py::TestCholeskyOp2D::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_cholesky_op.py::TestCholeskyOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_cholesky_op.py::TestCholeskyOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_cholesky_op.py::TestCholeskyOpLower::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_cholesky_op.py::TestCholeskyOpLower::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_cholesky_op.py::TestCholeskySingularAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_cholesky_op.py::TestCholeskySingularAPI::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_cholesky_op.py::TestDygraph::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestCholeskyDecompositionData::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestCholeskyDecompositionData::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestCholeskyDecompositionData::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestCholeskyInverse::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestCholeskyInverse::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestCholeskyInverse::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestErrorDimension::test_0d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestErrorDimension::test_1d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestErrorDimension::test_3d",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestErrorDimension::test_asymmetric_matrix",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestErrorDtype::test_bfloat16",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestErrorDtype::test_float16",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestFloat32::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestFloat32::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestFloat32::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestUpperTriangularMatrix::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestUpperTriangularMatrix::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_cholesky_inverse.py::TestUpperTriangularMatrix::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 28 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 64881,
      "summary": "原入口四轮缺 op_test 导入路径而退出 2。补路径诊断有 6 F2P / 92 P2P，另 7 个 CPU 节点在 Base 和 Gold 两轮均失败：6 个 dropout 分解后的 mask shape 与原输出不符，1 个固定种子测试结果不一致。这些是当前环境真实失败，但四轮同红不能归因为 Gold 引入回归。",
      "category": "入口导入错误；原生运行时/数值断言问题（Base 已存在）",
      "history": "上一版：验证未完成；封存全量报告：验证未通过。",
      "action": "修复 op_test 路径；定位 dropout primitive 分解的 shape 和随机种子问题，并确认环境开关与开发者通过时一致。保持原断言重新验证全部节点。",
      "checks": [
        {
          "name": "test/legacy_test/test_dropout_op.py::TestBF16DropoutOp::test_check_grad_normal",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。dropout 分解得到的 mask 为标量 shape []，与预期的 [32,64] 不符。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestBF16DropoutOp::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。dropout 分解得到的 mask 为标量 shape []，与预期的 [32,64] 不符。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp2::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。dropout 分解得到的 mask 为标量 shape []，与预期的 [32,64] 不符。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp6::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。dropout 分解得到的 mask 为标量 shape []，与预期的 [32,64] 不符。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutWithDeterminateSeedGenerator::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。固定种子的两次 dropout 输出未达到一致性断言：Gold 第一轮 665/1600 个元素不同，最大绝对差 1.4280633。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestFP16DropoutOp2::test_check_grad_normal",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestFP16DropoutOp2::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestFP16DropoutOp::test_check_grad_normal",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestFP16DropoutOp::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_6_p_1_0_test_False::test_static_comp",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。dropout 分解得到的 mask 为标量 shape []，与预期的 [100000] 不符。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_7_p_1_0_test_False_dtype_bfp16::test_static_comp",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。dropout 分解得到的 mask 为标量 shape []，与预期的 [100000] 不符。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutClassAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutClassAPI::test_dygraph_bfp16",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutClassAPI::test_static_bfp16_gpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutClassAPI::test_static_fp16_gpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutFunctionAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutFunctionAPI::test_dygraph_bfp16",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutFunctionAPI::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutFunctionAPIError::test_input_dtype_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestAlphaDropoutFunctionAPIError::test_input_type_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutClassAPI::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutClassAPI::test_dygraph_bfp16",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutClassAPI::test_static_bfp16_gpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutClassAPI::test_static_fp16_gpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutFunctionAPI::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutFunctionAPI::test_dygraph_bfp16",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutFunctionAPI::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutFunctionAPIError::test_input_dtype_errors",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutFunctionAPIError::test_input_ndim_errors",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_alpha_dropout.py::TestFeatureAlphaDropoutFunctionAPIError::test_input_type_errors",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestAlphaDropoutCAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestAlphaDropoutCAPI::test_static_fp16_gpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestAlphaDropoutFAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestAlphaDropoutFAPI::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestAlphaDropoutFAPIError::test_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestAlphaDropoutFAPIError::test_errors2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_0_fp32::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_0_fp32::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_0_fp32::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_10_downgrade_train::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_10_downgrade_train::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_10_downgrade_train::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_11_downgrade_train_dtype_bfp16::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_11_downgrade_train_dtype_bfp16::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_11_downgrade_train_dtype_bfp16::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_12_fp32_cpu::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_12_fp32_cpu::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_12_fp32_cpu::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_13_fp64_cpu::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_13_fp64_cpu::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_13_fp64_cpu::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_14_downgrade_train_cpu::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_14_downgrade_train_cpu::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_14_downgrade_train_cpu::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_1_bfp16::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_1_bfp16::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_1_bfp16::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_2_fp64::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_2_fp64::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_2_fp64::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_3_is_test_True::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_3_is_test_True::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_3_is_test_True::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_4_p_1_0::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_4_p_1_0::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_4_p_1_0::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_5_p_1_0_dtype_bfp16::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_5_p_1_0_dtype_bfp16::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_5_p_1_0_dtype_bfp16::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_6_p_1_0_test_False::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_6_p_1_0_test_False::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_6_p_1_0_test_False::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_7_p_1_0_test_False_dtype_bfp16::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_7_p_1_0_test_False_dtype_bfp16::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_7_p_1_0_test_False_dtype_bfp16::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_8_p_0_0::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_8_p_0_0::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_8_p_0_0::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_9_p_0_0_dtype_bfp16::test_jit_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_9_p_0_0_dtype_bfp16::test_jit_comp_with_cinn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestCompositeDropout_9_p_0_0_dtype_bfp16::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropOut2DWithProbTensor::test_p_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropOut3DWithProbTensor::test_p_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropOutWithProbTensor::test_p_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropout2DCAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropout2DCAPI::test_static_fp16_with_gpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。CPU 条件分支直接返回或未执行目标断言。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropout2DFAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropout2DFAPI::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropout2DFAPIError::test_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropout3DCAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropout3DFAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropout3DFAPI::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropout3DFAPIError::test_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutCAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutFAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutFAPI::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutFAPIError::test_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutFAPIError::test_errors2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp2::test_check_grad_normal",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp2_ZeroDim::test_check_grad_normal",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp2_ZeroDim::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp3::test_check_grad_normal",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp3::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp4::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp5::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp6::test_check_grad_normal",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp7::test_check_grad_normal",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp7::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp8::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp9::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp::test_check_grad_normal",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOpError::test_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOpInput1d::test_check_grad_normal",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOpInput1d::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOpWithSeed::test_check_grad_normal",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOpWithSeed::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOpWithSeedOnCPUPlace::test_seed_cpu_place",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp_ZeroDim::test_check_grad_normal",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestDropoutOp_ZeroDim::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_0_fp32::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_10_downgrade_train::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_11_downgrade_train_dtype_bfp16::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_12_fp32_cpu::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_13_fp64_cpu::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_14_downgrade_train_cpu::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_1_bfp16::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_2_fp64::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_3_is_test_True::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_4_p_1_0::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_5_p_1_0_dtype_bfp16::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_8_p_0_0::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_9_p_0_0_dtype_bfp16::test_static_comp",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dropout_op.py::TestRandomValue::test_fixed_random_number",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 134 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 65724,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_dataloader_persistent_workers_structure.py::test_existing_fifo_structure_handoff",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_dataloader_persistent_workers_structure.py::test_persistent_worker_reset_preserves_shared_metadata_channel",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_dataloader_persistent_workers_structure.py::test_structure_metadata_supports_thread_handoff",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 67195,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_pp_nan_checker_before_send.py::test_finite_send_and_receive_only_behavior",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_pp_nan_checker_before_send.py::test_invalid_send_is_rejected_before_communication",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_pp_nan_checker_before_send.py::test_mixed_batch_is_not_launched_when_outgoing_tensor_is_invalid",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 68432,
      "summary": "缺陷测试 2 项、回归测试 11 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_sparse_elementwise_op.TestSparseAddStaticAPI::test_coo",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_sparse_elementwise_op.TestSparseAddStaticAPI::test_coo_dense",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_sparse_elementwise_op.TestSparseDivStaticAPI::test_coo",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPI::test_add_bias",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPI::test_add_same_indices",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPI::test_support_dtypes_coo",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPI::test_support_dtypes_csr",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPIComplex::test_add_bias",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPIComplex::test_add_same_indices",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPIComplex::test_support_dtypes_coo",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_sparse_elementwise_op.TestSparseElementWiseAPIComplex::test_support_dtypes_csr",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_sparse_elementwise_op.TestSparseMulStaticAPI::test_coo",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_sparse_elementwise_op.TestSparseSubStaticAPI::test_coo",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 13 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 70469,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_fused_dropout_add_fallback.py::test_inference_fallback_warns_once_and_preserves_arguments",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_fused_dropout_add_fallback.py::test_training_uses_reference_dropout_add_semantics",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_fused_dropout_add_fallback.py::test_zero_probability_result_remains_valid",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 72800,
      "summary": "目标与回归测试均可复现；原脚本导入 test_cummax_op.py 时找不到 op_test，未进入测试断言。",
      "category": "测试入口缺少辅助模块路径",
      "history": "与上一版结论一致。",
      "action": "在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。",
      "checks": [
        {
          "name": "tests/test.sh → test_cummax_op.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "目标与回归测试均可复现；原脚本导入 test_cummax_op.py 时找不到 op_test，未进入测试断言。"
        },
        {
          "name": "test/legacy_test/test_cummax_op.py::TestCummaxOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_cummax_op.py::TestCummaxOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_cummax_op.py::TestCummaxOp_ZeroSize::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_cummax_op.py::TestCummaxOp_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_cummin_op.py::TestCumminOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_cummin_op.py::TestCumminOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_cummin_op.py::TestCumminOp_ZeroSize::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_cummin_op.py::TestCumminOp_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 8 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 op_test 是 Paddle 仓库里的测试辅助模块；原脚本找不到它，失败发生在导入阶段，不能说明目标功能断言已经失败。独立诊断补齐路径后已复现核心矩阵，需要让原入口也明确配置该路径并完成复验。"
    },
    {
      "id": 73122,
      "summary": "原脚本四轮退出 0，三个完整节点都通过。预期 F2P 的零尺寸 multi_dot 测试在 Base 已通过两轮，所以实际是 0 F2P / 3 P2P。没有“哪个 Gold 测试失败”；未通过的是“必须存在 Base 失败、Gold 通过的案例”这一数据验收项。",
      "category": "缺 F2P（测试本身全通过）",
      "history": "与上一版结论一致。",
      "action": "补充能稳定暴露该补丁行为差异的零尺寸输入，并核对 Base 原生库与开发者环境；不能将全通过当作 F2P 通过。",
      "checks": [
        {
          "name": "test.legacy_test.test_multi_dot_op.TestMultiDotOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base、Gold 各两轮都通过。可作 P2P 回归观察；并无 Gold 失败。"
        },
        {
          "name": "test.legacy_test.test_multi_dot_op.TestMultiDotOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base、Gold 各两轮都通过。可作 P2P 回归观察；并无 Gold 失败。"
        },
        {
          "name": "test.legacy_test.test_multi_dot_op.TestMultiDotOp_ZeroSize1::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base、Gold 各两轮都通过。该预期 F2P 节点在修复前已通过，未复现目标缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 73125,
      "summary": "原脚本找不到 op_test；补齐路径后确认 2F/4P。另外两个 output 测试在 Base 的清理阶段报错，不能把测试主体通过算成完整通过。",
      "category": "入口路径与测试清理问题",
      "history": "与上一版结论一致。",
      "action": "配置 op_test 路径，并修复两个 output 测试的类清理逻辑，再跑完整生命周期。",
      "checks": [
        {
          "name": "tests/test.sh → test_determinant_op.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "原脚本找不到 op_test；补齐路径后确认 2F/4P。另外两个 output 测试在 Base 的清理阶段报错，不能把测试主体通过算成完整通过。"
        },
        {
          "name": "test/legacy_test/test_determinant_op.py::TestDeterminantOp_ZeroSize2::test_check_output",
          "base": [
            "teardown_error",
            "teardown_error"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "测试主体之后的清理未正常完成，不能只按主体结果计通过。"
        },
        {
          "name": "test/legacy_test/test_determinant_op.py::TestSlogDeterminantOp_ZeroSize2::test_check_output",
          "base": [
            "teardown_error",
            "teardown_error"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "测试主体之后的清理未正常完成，不能只按主体结果计通过。"
        },
        {
          "name": "test/legacy_test/test_determinant_op.py::TestDeterminantOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_determinant_op.py::TestDeterminantOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_determinant_op.py::TestDeterminantOp_ZeroSize2::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_determinant_op.py::TestSlogDeterminantOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_determinant_op.py::TestSlogDeterminantOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_determinant_op.py::TestSlogDeterminantOp_ZeroSize2::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 8 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 除原入口缺少 op_test 路径外，另两个输出测试虽然执行主体通过，独立运行时在 Base 上的类清理却未完整通过，因此只确认 2F/4P。需修正入口并核对完整测试生命周期，不能把这两个未配对节点加进通过数。"
    },
    {
      "id": 73385,
      "summary": "原脚本找不到 op_test。诊断中的一个 Base 测试进入主体后提前以 0 退出，没有完成记录；退出码为 0 不代表该测试已通过。",
      "category": "入口路径与提前退出问题",
      "history": "与上一版结论一致。",
      "action": "补齐测试辅助路径，并让测试框架检查每个预期测试是否正常完成，防止提前退出被误判为通过。",
      "checks": [
        {
          "name": "tests/test.sh → test_eigvals_op.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "原脚本找不到 op_test。诊断中的一个 Base 测试进入主体后提前以 0 退出，没有完成记录；退出码为 0 不代表该测试已通过。"
        },
        {
          "name": "test.legacy_test.test_eigvals_op.TestEigvalsOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_eigvals_op.TestEigvalsOp_ZeroSize2::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_eigvals_op.TestEigvalsOp_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_svdvals_op.TestSvdvalsOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_svdvals_op.TestSvdvalsOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_svdvals_op.TestSvdvalsOp::test_svdvals_forward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_svdvals_op.TestSvdvalsOp_ZeroSize::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_svdvals_op.TestSvdvalsOp_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 8 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 一个 Base 用例进入测试主体后提前以 0 退出，却没有完成记录；只看退出码会误判为通过，这也不是普通的断言失败。除补齐辅助模块路径外，还需检查预期测试是否真正全部执行完成。"
    },
    {
      "id": 73387,
      "summary": "目标与回归测试均可复现；原脚本导入 test_gather_tree_op.py 时找不到 op_test，未进入测试断言。",
      "category": "测试入口缺少辅助模块路径",
      "history": "与上一版结论一致。",
      "action": "在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。",
      "checks": [
        {
          "name": "tests/test.sh → test_gather_tree_op.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "目标与回归测试均可复现；原脚本导入 test_gather_tree_op.py 时找不到 op_test，未进入测试断言。"
        },
        {
          "name": "test.legacy_test.test_gather_tree_op.TestGatherTreeOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_gather_tree_op.TestGatherTreeOp_ZeroSize2::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_gather_tree_op.TestGatherTreeOp_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 原脚本在导入 op_test 时就中断，修复态也未能进入实际测试，不能用独立诊断通过来代替原包通过。需要在入口中声明辅助模块搜索路径，再确认原脚本能完整执行目标与回归测试。"
    },
    {
      "id": 73535,
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_functional_conv1d.py::TestFunctionalConv1DError::test_exception",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_functional_conv1d.py::TestFunctionalConv1D_CPU_FP16::test_cpu_fp16",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 73569,
      "summary": "目标与回归测试均可复现；原脚本导入 test_matmul_v2_op.py 时找不到 op_test，未进入测试断言。",
      "category": "测试入口缺少辅助模块路径",
      "history": "与上一版结论一致。",
      "action": "在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。",
      "checks": [
        {
          "name": "tests/test.sh → test_matmul_v2_op.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "目标与回归测试均可复现；原脚本导入 test_matmul_v2_op.py 时找不到 op_test，未进入测试断言。"
        },
        {
          "name": "test/legacy_test/test_matmul_v2_op.py::TestMatMulOp_trans_y::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_matmul_v2_op.py::TestMatMulV2Op::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_matmul_v2_op.py::TestMatMulV2Op::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 完整测试包运行时需要 op_test，但原入口没有提供可用的搜索路径，所以测试在收集阶段被挡住。独立诊断已复现 1F/2P，后续应修正入口配置，而不是删除依赖或缩减断言来避开报错。"
    },
    {
      "id": 73570,
      "summary": "缺陷测试 3 项、回归测试 4 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_diag_v2.TestDiagV2Op::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_diag_v2.TestDiagV2Op::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_diag_v2.TestDiagV2Op_ZeroSize::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_diag_v2.TestDiagV2Op_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_masked_fill.TestMaskedFillAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_masked_fill.TestMaskedFillAPI::test_static_graph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_masked_fill.TestMaskedFillAPI_ZeroSize2::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 7 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 73582,
      "summary": "缺陷测试 2 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_fill_constant_op.py::TestFillConstantOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_fill_constant_op.py::TestFillConstantOp_ZeroSize::test_shape",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_squeeze2_op.py::TestSqueezeAPI::test_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_squeeze2_op.py::TestSqueezeAPI::test_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_squeeze2_op.py::TestSqueezeAPI_ZeroSize::test_api",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 5 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 73691,
      "summary": "缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_functional_conv1d.TestFunctionalConv1DError::test_exception",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_functional_conv1d.TestFunctionalConv1D_ZeroSize::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_functional_conv2d.TestFunctionalConv2DError::test_exception",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_functional_conv2d.TestFunctionalConv2D_ZeroSize::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_functional_conv3d.TestFunctionalConv3DError::test_exception",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_functional_conv3d.TestFunctionalConv3D_ZeroSize2::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 6 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 73702,
      "summary": "缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_gather_nd_op.TestGatherNdOpWithEmptyIndex::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_gather_nd_op.TestGatherNdOpWithEmptyIndex::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_gather_nd_op.TestGatherNdOp_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 73776,
      "summary": "缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_svd_lowrank.py::TestSvdLowRankAPI_ZeroSize::test_dygraph_api",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_svd_lowrank.py::TestSvdLowrankAPI::test_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_svd_lowrank.py::TestSvdLowrankAPI::test_forward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 73821,
      "summary": "缺陷测试 3 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_pad3d_op.TestPad3dOp_ZeroSize_Circular::test_circular_0size",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_pad3d_op.TestPad3dOp_ZeroSize_Replicate::test_replicate_0size",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_pad_op.TestPadOp::test_check_grad_normal",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pad_op.TestPadOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pad_op.TestPadOp_ZeroSize2::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 5 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 73850,
      "summary": "缺陷测试 1 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_triangular_solve_op.TestTriangularSolveOp::test_check_grad_normal",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_triangular_solve_op.TestTriangularSolveOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_triangular_solve_op.TestTriangularSolveOp_ZeroSize::test_check_grad_normal",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_triangular_solve_op.TestTriangularSolveOp_ZeroSize::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 73854,
      "summary": "缺陷测试 2 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_instance_norm_op_v2.TestInstanceNorm::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_instance_norm_op_v2.TestInstanceNorm::test_error",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_instance_norm_op_v2.TestInstanceNorm::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_instance_norm_op_v2.TestInstanceNormOp_ZeroSize::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_instance_norm_op_v2.TestInstanceNormOp_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 5 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 73855,
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_nn_dice_loss.py::TestDiceLossOpApi::test_api_with_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_nn_dice_loss.py::TestDiceLossOpApi_ZeroSize::test_api_with_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 73880,
      "summary": "缺陷测试 4 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_softmax_with_cross_entropy_op.TestSoftmaxWithCrossEntropyOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_softmax_with_cross_entropy_op.TestSoftmaxWithCrossEntropyOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_softmax_with_cross_entropy_op.TestSoftmaxWithCrossEntropyOp_ZeroSize2::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_softmax_with_cross_entropy_op.TestSoftmaxWithCrossEntropyOp_ZeroSize2::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_softmax_with_cross_entropy_op.TestSoftmaxWithCrossEntropyOp_ZeroSize::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_softmax_with_cross_entropy_op.TestSoftmaxWithCrossEntropyOp_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 6 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 74184,
      "summary": "实际可复现 2F/5P；原来标成 F2P 的两个测试在 Base 中也通过，应算 P2P。原脚本另因找不到 op_test 而停止。",
      "category": "入口路径与测试角色标注",
      "history": "与上一版结论一致。",
      "action": "补齐 op_test 路径，并按实际结果修正两项测试角色；用完整入口重新验证。",
      "checks": [
        {
          "name": "tests/test.sh → test_linalg_pinv_op.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "实际可复现 2F/5P；原来标成 F2P 的两个测试在 Base 中也通过，应算 P2P。原脚本另因找不到 op_test 而停止。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian_ZeroSize::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCaseHermitian_ZeroSize::test_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase_ZeroSize::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_linalg_pinv_op.py::LinalgPinvTestCase_ZeroSize::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 7 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 原来标为 F2P 的两个候选在 Base 中也通过，应归为 P2P，所以实际是 2F/5P。核心矩阵可以复现，待修主因仍是原入口缺少 op_test 路径，同时应校正对应的角色说明。"
    },
    {
      "id": 74212,
      "summary": "目标与回归测试均可复现；原脚本导入 test_multiplex_op.py 时找不到 op_test，未进入测试断言。",
      "category": "测试入口缺少辅助模块路径",
      "history": "上一版：原包通过；封存全量报告：核心通过、任务包待修。新增的是原入口导入问题，核心 F2P/P2P 仍通过。",
      "action": "在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。",
      "checks": [
        {
          "name": "tests/test.sh → test_multiplex_op.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "目标与回归测试均可复现；原脚本导入 test_multiplex_op.py 时找不到 op_test，未进入测试断言。"
        },
        {
          "name": "test.legacy_test.test_multiplex_op.TestMultiplexOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_multiplex_op.TestMultiplexOp::test_check_grad_ignore_x1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_multiplex_op.TestMultiplexOp::test_check_grad_ignore_x1_x2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_multiplex_op.TestMultiplexOp::test_check_grad_ignore_x3",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_multiplex_op.TestMultiplexOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_multiplex_op.TestMultiplexOp_ZeroSize::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_multiplex_op.TestMultiplexOp_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 7 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 原入口缺少 op_test 的搜索路径，导致测试在执行断言之前就停止，这与目标功能本身是否正确是两回事。独立诊断补齐路径后确认了 2F/5P，还需让原脚本在相同环境中正常完成。"
    },
    {
      "id": 74221,
      "summary": "目标与回归测试均可复现；原脚本导入 test_fold_op.py 时找不到 op_test，未进入测试断言。",
      "category": "测试入口缺少辅助模块路径",
      "history": "上一版：验证未完成；封存全量报告：核心通过、任务包待修。已经补齐双轮测试，当前需处理的是原入口导入路径。",
      "action": "在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。",
      "checks": [
        {
          "name": "tests/test.sh → test_fold_op.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "目标与回归测试均可复现；原脚本导入 test_fold_op.py 时找不到 op_test，未进入测试断言。"
        },
        {
          "name": "test/legacy_test/test_fold_op.py::TestFoldOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_fold_op.py::TestFoldOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_fold_op.py::TestFoldOpError::test_errors",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 这条已补齐双轮核心诊断，不再只是历史单轮记录；但 Gold 的原脚本两轮都因找不到 op_test 而停止。需要把辅助模块路径写入原入口，再确认无需额外诊断配置也能执行完整测试。"
    },
    {
      "id": 74305,
      "summary": "目标与回归测试均可复现；原脚本导入 test_unique.py 时找不到 op_test，未进入测试断言。",
      "category": "测试入口缺少辅助模块路径",
      "history": "上一版：验证未完成；封存全量报告：核心通过、任务包待修。已经补齐双轮测试，当前需处理的是原入口导入路径。",
      "action": "在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。",
      "checks": [
        {
          "name": "tests/test.sh → test_unique.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "目标与回归测试均可复现；原脚本导入 test_unique.py 时找不到 op_test，未进入测试断言。"
        },
        {
          "name": "test/legacy_test/test_unique.py::TestUniqueAPI_ZeroSize::test_dygraph_api_out",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_unique.py::TestUniqueOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 双轮诊断已确认 1F/1P，当前障碍不是缺少第二轮结果，而是原脚本仍无法导入 op_test。修复该入口配置后还要重验原脚本，不能直接把诊断结果当作原包可运行的证明。"
    },
    {
      "id": 74421,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr74421_msort.py::test_existing_sort_dynamic_path_remains_compatible",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr74421_msort.py::test_msort_is_reexported_from_public_namespaces",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr74421_msort.py::test_msort_sorts_multidimensional_input_along_axis_zero",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 74439,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr74439_ravel.py::test_existing_flatten_dynamic_path_remains_compatible",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr74439_ravel.py::test_ravel_flattens_scalar_multidimensional_and_empty_inputs",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr74439_ravel.py::test_ravel_is_reexported_from_public_namespaces",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 74444,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr74444_dropout1d.py::test_dropout1d_is_public_and_preserves_2d_3d_channel_semantics",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr74444_dropout1d.py::test_dropout1d_rejects_invalid_inputs_and_warns_for_inplace",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr74444_dropout1d.py::test_existing_dropout2d_channel_axis_behavior_remains_compatible",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 74491,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr74491_requires_grad.py::test_existing_dim_metadata_behavior_remains_compatible",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr74491_requires_grad.py::test_requires_grad_rejects_non_boolean_assignments",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr74491_requires_grad.py::test_requires_grad_tracks_stop_gradient_across_tensor_modes",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 74586,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr74586_scatter_add.py::test_existing_index_add_dynamic_path_remains_compatible",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr74586_scatter_add.py::test_scatter_add_accumulates_repeated_indices_along_requested_dim",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr74586_scatter_add.py::test_scatter_add_is_reexported_from_public_namespaces",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 74594,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr74594_broadcast_shapes.py::test_broadcast_shapes_combines_multiple_shapes_and_rejects_mismatch",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr74594_broadcast_shapes.py::test_broadcast_shapes_supports_empty_and_single_shape_inputs",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr74594_broadcast_shapes.py::test_existing_broadcast_shape_delegation_remains_compatible",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 75274,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_normal_benchmark::test_dygraph_path_preserves_output_shape",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_normal_benchmark::test_scalar_static_path_is_independent_of_initial_mode",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_normal_benchmark::test_tensor_static_path_is_independent_of_initial_mode",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 76259,
      "summary": "Gold 补丁在指定 Base 的 paddle/fluid/inference/api/helper.h:15 无法应用；先测试补丁后 Gold、先 Gold 后测试补丁均失败。2026-09-11 用独立 index 重跑同样复现。Base/Gold 测试双轮均未开始，F2P/P2P 不适用。",
      "category": "Gold 补丁无法应用，未运行测试",
      "history": "与上一版结论一致。",
      "action": "按 exact Base fcf3b100085b10efed4c1fb8880b1df1fd5241d6 重新生成可应用的 Gold 补丁，再进行编译和四轮测试。 本题需要 Windows CPU / MSVC x64，Linux 运行不能替代。",
      "checks": [
        {
          "name": "参考补丁应用检查（测试开始前）",
          "base": [
            "not_run",
            "not_run"
          ],
          "gold": [
            "not_run",
            "not_run"
          ],
          "explanation": "Gold 补丁在指定 Base 的 paddle/fluid/inference/api/helper.h:15 无法应用；先测试补丁后 Gold、先 Gold 后测试补丁均失败。2026-09-11 用独立 index 重跑同样复现。Base/Gold 测试双轮均未开始，F2P/P2P 不适用。"
        }
      ],
      "evidenceNote": "2026-09-11 重新检查两种补丁应用顺序，均复现与封存记录相同的应用失败。没有执行测试，四轮栏保留未执行。"
    },
    {
      "id": 76522,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr76522_torch_proxy_compat_overrides.py::test_enable_torch_proxy_auto_registers_public_compat_exports",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr76522_torch_proxy_compat_overrides.py::test_existing_proxy_module_falls_back_to_original_attribute",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr76522_torch_proxy_compat_overrides.py::test_nested_override_is_visible_through_parent_proxy",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 76736,
      "summary": "缺陷测试 3 项、回归测试 7 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_api_compatibility.TestAtan2API_Compatibility::test_dygraph_Compatibility",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility.TestAtan2API_Compatibility::test_static_Compatibility",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility.TestAtan2API_Compatibility::test_tensor_method",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_atan2_op.TestAtan2API::test_dygraph_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_atan2_op.TestAtan2API::test_static_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_atan2_op.TestAtan2Broadcasting::test_api_with_dygraph_empty_tensor_input",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_atan2_op.TestAtan2Broadcasting::test_dygraph_broadcast_gradient_values",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_atan2_op.TestAtan2EmptyTensorInput::test_api_with_dygraph_empty_tensor_input",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_atan2_op.TestAtan2_int32::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_atan2_op.TestAtan2_int64::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 10 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 76873,
      "summary": "原脚本四轮退出 4：symbolic 测试需要的 utils.apply_to_static 被同名 legacy_test/utils.py 遮蔽。分目录诊断仍有 8 个 Gold 失败：7 个 symbolic 节点缺 sym_shape_str，加载的 CPU 原生库报告 CINN=False；另 SELU inplace 测试 1/750 元素超过精度阈值。其余为 9 F2P / 14 P2P。",
      "category": "入口模块名冲突；CINN 环境未满足；数值精度断言",
      "history": "与上一版结论一致。",
      "action": "隔离 legacy 与 symbolic 的 utils 导入；用启用 CINN 的对应 Base/Gold 构建验证 symbolic 节点；对 SELU 精度差异单独复现，确认误差来源后再决定补丁或测试容差是否需要调整。",
      "checks": [
        {
          "name": "test.ir.pir.cinn.symbolic.test_infer_sym_shape_multinary_op.CELUOpInferSymbolicShapeTest::test_eval_symbolic",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。"
        },
        {
          "name": "test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.HardSigmoidInferSymbolicShapeTest::test_eval_symbolic",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。"
        },
        {
          "name": "test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.MishOpInferSymbolicShapeTest::test_eval_symbolic",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。"
        },
        {
          "name": "test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.RRELUOpInferSymbolicShapeTest::test_eval_symbolic",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。"
        },
        {
          "name": "test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SELUOpInferSymbolicShapeTest::test_eval_symbolic",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。"
        },
        {
          "name": "test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SumOpInferSymbolicShapeTest::test_eval_symbolic",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。"
        },
        {
          "name": "test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SwishOpInferSymbolicShapeTest::test_eval_symbolic",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。symbolic shape 检查读取不到 sym_shape_str 属性（KeyError）；当前 CPU 原生库报告 CINN=False，需要在启用 CINN 的匹配构建中补验。"
        },
        {
          "name": "test.legacy_test.test_selu_op.TestSELUOpClass_Inplace::test_cases",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "failed",
            "failed"
          ],
          "explanation": "Base、Gold 各两轮均失败。数值断言 1/750 个元素超过误差限，最大绝对误差 4.172325e-07、相对误差 2.8709233e-05。"
        },
        {
          "name": "test.legacy_test.test_celu_op.TestCELUAPI::test_api_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_celu_op.TestCELUAPI::test_api_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_celu_op.TestCELUOpClass_Inplace::test_cases",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_celu_op.TestCELUParamDecorator::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_hardsigmoid_op.TestHardSigmoidAPI::test_api_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_hardsigmoid_op.TestHardSigmoidAPI::test_api_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_hardsigmoid_op.TestHardSigmoidOpClass_Inplace::test_cases",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_imperative_layers.TestLayerPrint::test_layer_str",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_mish_op.TestMishAPI::test_api_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_mish_op.TestMishAPI::test_api_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_mish_op.TestMishOpClass_Inplace::test_case",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_rrelu_op.RReluTest::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_rrelu_op.RReluTest::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_rrelu_op.TestRRELUAPI::test_api_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_rrelu_op.TestRRELUAPI::test_api_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_rrelu_op.TestRRELUOpClass_Inplace::test_case",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_selu_op.SeluTest::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_selu_op.SeluTest::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_selu_op.TestSELUAPI::test_api_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_selu_op.TestSELUAPI::test_api_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_swish_op.TestSwishAPI::test_api_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_swish_op.TestSwishAPI::test_api_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_swish_op.TestSwishOpClass_Inplace::test_cases",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 31 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 77064,
      "summary": "目标与回归测试均可复现；原脚本导入 test_allclose_op.py 时找不到 op_test，未进入测试断言。",
      "category": "测试入口缺少辅助模块路径",
      "history": "上一版：原包通过；封存全量报告：核心通过、任务包待修。新增的是原入口导入问题，核心 F2P/P2P 仍通过。",
      "action": "在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。",
      "checks": [
        {
          "name": "tests/test.sh → test_allclose_op.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "目标与回归测试均可复现；原脚本导入 test_allclose_op.py 时找不到 op_test，未进入测试断言。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseAlias::test_alias",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseAlias::test_tensor_method_alias",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseDygraph::test_api_case",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseError::test_input_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpBool::test_close_False",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpBool::test_close_True",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpException::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpFloat16::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpFloat32::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpFloat64::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpFp16::test_fp16",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpInt32::test_close_False",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpInt32::test_close_True",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpInt64::test_close_False",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpInt64::test_close_True",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpLargeDimInput::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpNanFalse::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpNanTrue::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOpSmallNum::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_allclose_op.TestAllcloseOp_ZeroSize::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_compat_allclose.TestCompatAllclose::test_allclose_args",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_compat_allclose.TestCompatAllclose::test_allclose_return_bool",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 23 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 独立诊断能够验证功能修复和回归测试，但原脚本在加载测试辅助模块 op_test 时就失败。需明确配置辅助模块所在路径，并以原入口重新执行，才能从核心通过进入原包可直接使用。"
    },
    {
      "id": 77078,
      "summary": "缺陷测试 3 项、回归测试 33 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseAPI::test_dygraph_with_name",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseAPI::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseAPI::test_static_with_name",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseAPICompatibility::test_dimension_validation",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseAPICompatibility::test_dygraph_compatibility",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseAPICompatibility::test_edge_cases",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseAPICompatibility::test_parameter_aliases",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseAPICompatibility::test_static_compatibility",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseAPICompatibility::test_tensor_method_compatibility",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseAPIError::test_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseAPI_ZeroSize::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOp::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpBatched::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpBatched::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpBatchedComplex::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpBatchedComplex::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpBatchedFP32::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpBatchedFP32::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpBatchedZeroSize::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpBatchedZeroSize::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpComplex128::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpComplex128::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpComplex64::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpComplex64::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpFP32::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpFP32::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpLarge::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpLarge::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpLargeFP32::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpLargeFP32::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpZeroSize::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseOpZeroSize::test_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseSingularAPI::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_inverse_op.TestInverseSingularAPI::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 36 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 77150,
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_pylayer_op.TestPyLayer::test_pylayer_with_partial_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_pylayer_op.TestPyLayer::test_simple_pylayer_multiple_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 77495,
      "summary": "Gold 在 python/paddle/nn/functional/pooling.py:573 与 python/paddle/nn/layer/pooling.py:629 不匹配，且 test/legacy_test/test_max_pool_dilation.py 在 Base index 中不存在。两种应用顺序同样失败，2026-09-11 独立 index 重跑复现。没有 Base/Gold 测试双轮结果。",
      "category": "Gold 补丁无法应用，未运行测试",
      "history": "与上一版结论一致。",
      "action": "按 exact Base 0604f65af5397848b6803c2bf577b9b82b8d8e08 重新生成补丁，补齐新测试文件，再执行四轮。",
      "checks": [
        {
          "name": "参考补丁应用检查（测试开始前）",
          "base": [
            "not_run",
            "not_run"
          ],
          "gold": [
            "not_run",
            "not_run"
          ],
          "explanation": "Gold 在 python/paddle/nn/functional/pooling.py:573 与 python/paddle/nn/layer/pooling.py:629 不匹配，且 test/legacy_test/test_max_pool_dilation.py 在 Base index 中不存在。两种应用顺序同样失败，2026-09-11 独立 index 重跑复现。没有 Base/Gold 测试双轮结果。"
        }
      ],
      "evidenceNote": "2026-09-11 重新检查两种补丁应用顺序，均复现与封存记录相同的应用失败。没有执行测试，四轮栏保留未执行。"
    },
    {
      "id": 77749,
      "summary": "缺陷测试 21 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_rnn_cell_api.py::TestRnnUtil::test_case",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadSequence::test_0d_trailing_dims",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadSequence::test_basic_batch_first_false",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadSequence::test_basic_batch_first_true",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadSequence::test_custom_padding_value",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadSequence::test_equal_length_sequences",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadSequence::test_error_invalid_padding_side",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadSequence::test_error_not_list",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadSequence::test_integer_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadSequence::test_multidimensional_sequences",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadSequence::test_padding_side_left",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadSequence::test_padding_side_left_with_value",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadSequence::test_single_sequence",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadUnpadIntegration::test_left_pad_unpad_roundtrip",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestPadUnpadIntegration::test_various_dtypes",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_basic_batch_first_false",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_basic_batch_first_true",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_equal_length",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_multidimensional",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_roundtrip",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_roundtrip_batch_first_false",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_rnn_utils.py::TestUnpadSequence::test_single_sequence",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 22 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78048,
      "summary": "缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_api_compatibility.py::TestDsplitAPI::test_dygraph_Compatibility",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_api_compatibility.py::TestHsplitAPI::test_dygraph_Compatibility",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_api_compatibility.py::TestVsplitAPI::test_dygraph_Compatibility",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr78048_p2p.py::test_p2p_dsplit_original_parameters",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr78048_p2p.py::test_p2p_hsplit_original_parameters",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr78048_p2p.py::test_p2p_vsplit_original_parameters",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 6 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78082,
      "summary": "缺陷测试 9 项、回归测试 23 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestImperativeContainerParameterDict::test_parameter_dict",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictAccess::test_getitem",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictAccess::test_len_iter_contains",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictAccess::test_setitem",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictAccess::test_setitem_non_parameter_raises",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictForwardBackward::test_float64_params",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictForwardBackward::test_forward_and_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictForwardBackward::test_replace_param_changes_output_shape",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictInit::test_init_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictInit::test_init_preserves_order",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictInit::test_init_types",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictInit::test_init_with_parameter_dict",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictInit::test_init_with_values_alias",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_keys_after_update",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_keys_returns_all_in_order",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_pop_all_items_leaves_empty",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_pop_missing_key_raises",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_pop_reduces_values",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_pop_returns_correct_param",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_values_are_parameters",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_values_count_matches_len",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictPopKeysValues::test_values_shapes",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictRegistration::test_dynamic_setitem_and_update_registered",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictRegistration::test_gradient_flows",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictRegistration::test_registered_in_parameters_named_state_dict",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictStateDictRoundtrip::test_output_matches_after_load",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictStateDictRoundtrip::test_state_dict_keys_present",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictStateDictRoundtrip::test_state_dict_roundtrip_values",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictUpdate::test_update_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictUpdate::test_update_from_parameter_dict",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictUpdate::test_update_input_types",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_imperative_container_parameterdict.py::TestParameterDictUpdate::test_update_overwrites",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 32 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78104,
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_device_place_conversion_contract.py::test_existing_string_and_concrete_place_behavior_remains_valid",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_device_place_conversion_contract.py::test_generic_place_preserves_device_type_and_id",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78138,
      "summary": "缺陷测试 2 项、回归测试 15 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleBF16Op::test_check_grad",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleBF16Op::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "本节点未计入有效 F2P/P2P；保留实际运行结果。跳过或未执行不能当作通过。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility.TestPixelShuffleAPI_Compatibility::test_dygraph_Compatibility",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility.TestPixelShuffleAPI_Compatibility::test_static_Compatibility",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestChannelLast::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestChannelLast::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleAPI::test_api_fp16",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleAPI::test_dygraph1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleAPI::test_dygraph2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleAPI::test_static_graph_functional",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleAPI::test_static_graph_layer",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleError::test_error_functional",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleError::test_error_layer",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleFP16Op::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleFP16Op::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleOp_ZeroSize::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_pixel_shuffle_op.TestPixelShuffleOp_ZeroSize::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 19 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78238,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_put_along_axis_zero_size.py::TestPutAlongAxisZeroSize::test_non_empty_indices_existing_behavior",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_put_along_axis_zero_size.py::TestPutAlongAxisZeroSize::test_zero_size_indices_in_place",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_put_along_axis_zero_size.py::TestPutAlongAxisZeroSize::test_zero_size_indices_out_of_place",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78301,
      "summary": "缺陷测试 13 项、回归测试 21 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_blocking_non_blocking_conflict_raises",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_invalid_first_arg",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_cast_all_with_keyword_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_cast_all_with_positional_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_cast_all_with_tensor",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_keyword_blocking",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_keyword_device",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_keyword_device_and_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_keyword_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_keyword_non_blocking",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_no_args",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_positional_device_and_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_positional_device_string",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_positional_dtype_float16",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_positional_dtype_string",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_positional_paddle_dtype",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_positional_tensor",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_returns_self",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_sequential_to_calls",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_layer_sublayers_cast",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_blocking_non_blocking_conflict_raises",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_keyword_device",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_keyword_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_keyword_non_blocking",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_no_args",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_positional_device",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_positional_device_and_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_positional_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_positional_dtype_string",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_tensor_positional_other",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_too_many_args",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestLayerAndTensorToAPI::test_unexpected_keyword",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_api_compatibility_part3.TestTensorToCopyCompatibility::test_copy_as_positional_argument",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_base_layer.TestLayerTo::test_main",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 34 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78342,
      "summary": "缺陷测试 7 项、回归测试 24 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_dygraph_compatibility_with_torch",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_dygraph_default_message",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_dygraph_non_tensor_fail",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_dygraph_non_tensor_pass",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_dygraph_tensor_fail",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_dygraph_tensor_pass",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_api_compatibility_part2.py::TestAssertAPI::test_static_tensor_condition",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_complex_numbers",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_mappings",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_msg_callable",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_msg_override",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_nan_handling",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_nested_structure_error_msg",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_numpy_scalars",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_object_pair_broken_eq",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_pair_repr_and_extra_repr",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_scalars_exact_match",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_scalars_mismatch",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_scalars_tolerances",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_sequences",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_static_graph_variable",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_tensor_device_check",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_tensor_dtype_check",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_tensor_exact_match",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_tensor_mismatch_msg_details",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_tensor_shape_mismatch",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_tensor_tolerances",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_tolerance_validation_logic",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_type_promotion_logic",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_unsupported_types",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_assert_close.py::TestAssertClose::test_zero_dim_tensor_mismatch",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 31 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78440,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_cdist.TestCdistZeroSizeBatch4D::test_dygraph_api",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_cdist.TestCdistZeroSizeGrad::test_stop_gradient_false",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_cdist.TestCdistZeroSizeGrad::test_stop_gradient_true",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78441,
      "summary": "Gold 的 31 项测试均通过；7 个清理错误发生在 Base，不能说修复后仍有 7 项失败。部分空梯度测试只调用 API，没有检查梯度值。",
      "category": "Base 测试清理与断言范围",
      "history": "上一版：原包通过；封存全量报告：核心通过、任务包待修。变化来自测试清理和断言检查，Gold 测试仍全部通过。",
      "action": "整理 Base 缺少 API 时的清理逻辑，并为梯度测试补充实际断言或明确只检查 API 可调用。",
      "checks": [
        {
          "name": "test/ir/pir/cinn/symbolic/test_infer_sym_shape_unary_op.py::AminmaxOpInferSymbolicShapeTest::test_eval_symbolic",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_dygraph",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_dygraph_gradient",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_dygraph_gradient_duplicate_values",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_dygraph_gradient_with_axis",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_dygraph_out",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_dygraph_out_with_axis",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxAPI::test_static",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxAPI_Compatibility::test_dygraph_Compatibility",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxAPI_Compatibility::test_static_Compatibility",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxDynamicShape::test_all_dynamic",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxInferSymbolicShapePass::test_infer_symbolic_shape_pass",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOp::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOp::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOpAxis0::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOpAxis0::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOpAxis1::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOpAxis1::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOpAxisNeg::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOpAxisNeg::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOpEmptyTensor::test_empty_tensor_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOpFloat32::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOpFloat32::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOpKeepdim::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOpKeepdim::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOpZeroDim::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_aminmax_op.py::TestAminmaxOpZeroDim::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_max_min_amax_amin_op.py::TestAmaxAPI_Compatibility::test_dygraph_Compatibility",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_max_min_amax_amin_op.py::TestAmaxAminOutAPI::test_amax_out_in_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_max_min_amax_amin_op.py::TestAmaxAminOutAPI::test_amin_out_in_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_max_min_amax_amin_op.py::TestAminAPI_Compatibility::test_dygraph_Compatibility",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 31 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 Gold 的 31 个节点已通过，7 个附带清理错误发生在 Base，不能说成 Gold 仍有 7 个失败。另有空梯度测试没有实际梯度断言，目前只能体现 API 从无到有；需整理清理逻辑，并补充断言或明确重分类。"
    },
    {
      "id": 78452,
      "summary": "缺陷测试 16 项、回归测试 27 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestDataclassInParseEveryObject::test_dataclass_in_list",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestDataclassInParseEveryObject::test_dataclass_in_ordered_dict",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestDataclassInParseEveryObject::test_dataclass_in_tuple",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestDataclassInParseEveryObject::test_dataclass_passthrough",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestDataclassInParseEveryObject::test_nested_dataclass_in_dict",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_builtin_function",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_builtin_method",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_class_with_getstate",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_class_with_reduce",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_class_with_reduce_ex",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_class_with_setstate",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_module_type",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_reject_non_class",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_safe_class_with_nested_attributes",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_safe_class_with_regular_methods",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_safe_dataclass",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestIsSafeClass::test_safe_user_defined_class",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestPickleLoadsMac::test_pickle_loads_mac_basic",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestPickleLoadsMac::test_pickle_loads_mac_state_dict",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestReconstructDenseTensorData::test_reconstruct_returns_data_unchanged",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestReconstructDenseTensorData::test_reconstruct_with_multidim_array",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_dict_with_numpy",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_list_of_arrays",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_nested_dict",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_numpy_float64",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_numpy_ndarray",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_ordered_dict",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerAllowedTypes::test_safe_loads_pickle",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_arbitrary_module",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_eval",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_exec",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_open",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_os_popen",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_os_system",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerBlocked::test_block_subprocess",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerWithFile::test_malicious_model_file",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestRestrictedUnpicklerWithFile::test_safe_model_file",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestSafeUserDefinedClassLoading::test_config_class_like_arguments",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestSafeUserDefinedClassLoading::test_load_dict_with_safe_classes",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestSafeUserDefinedClassLoading::test_load_safe_dataclass",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestSafeUserDefinedClassLoading::test_load_safe_user_defined_class",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestSafeUserDefinedClassLoading::test_reject_class_with_reduce_ex",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler.py::TestSafeUserDefinedClassLoading::test_reject_mixed_safe_and_unsafe_classes",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 43 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78522,
      "summary": "缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_launch_coverage.py::TestCoverage::test_find_free_ports",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_launch_main_kill.py::TestLaunchMainProcessCleanup::test_filter_pids",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_launch_main_kill.py::TestLaunchMainProcessCleanup::test_terminate_processes_permission_error",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_launch_main_kill.py::TestLaunchMainProcessCleanup::test_terminate_processes_process_lookup",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78570,
      "summary": "缺陷测试 6 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_f2p_closure_runs_with_grad_enabled_and_supplies_update_grad[Adam-path1]",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_f2p_closure_runs_with_grad_enabled_and_supplies_update_grad[AdamW-path2]",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_f2p_closure_runs_with_grad_enabled_and_supplies_update_grad[Optimizer-path0]",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_f2p_optimizer_steps_accept_closure_and_return_loss[Adam-path1]",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_f2p_optimizer_steps_accept_closure_and_return_loss[AdamW-path2]",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_f2p_optimizer_steps_accept_closure_and_return_loss[Optimizer-path0]",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_p2p_step_without_closure_keeps_existing_update_path[Adam-path1]",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_p2p_step_without_closure_keeps_existing_update_path[AdamW-path2]",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr78570_optimizer_step_closure.py::test_p2p_step_without_closure_keeps_existing_update_path[Optimizer-path0]",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 9 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78823,
      "summary": "README 要求 CUDA 或 XPU 设备，当前仅 CPU。Base 两轮在导入 _to_pinned_place 时失败，Gold 原脚本两轮退出 0；Gold 中三个 CUDA pinned 案例均跳过，CPU 上通过的四个新 API 案例不能证明 pinned 分配在设备上有效。其余 143 个节点观察为 P→P（其中设备条件空返回需按实际覆盖解释）。",
      "category": "必需 CUDA/XPU 验证缺失；Base 新 API 导入未进入测试体",
      "history": "与上一版结论一致。",
      "action": "在 CUDA 或 XPU 构建/设备补跑 pinned allocation、CPU→pinned 和设备 place 转换；避免将 Base 模块收集失败或 CPU 空返回当作逐测试 F2P/P2P。",
      "checks": [
        {
          "name": "必需硬件分支：CUDA 或 XPU（至少一种）",
          "base": [
            "not_run",
            "not_run"
          ],
          "gold": [
            "not_run",
            "not_run"
          ],
          "explanation": "在 CUDA 或 XPU 构建/设备补跑 pinned allocation、CPU→pinned 和设备 place 转换；避免将 Base 模块收集失败或 CPU 空返回当作逐测试 F2P/P2P。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestDenseTensorToTensor::test_same_place_data_ptr_consistency",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test___cuda_array_interface__",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_backward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_deep_copy",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_deep_copy_0size_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_detach",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_dlpack_device",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_element_size",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_gradient",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_if",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_itemsize",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_leaf_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_list_to_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_print_tensor_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_set_value",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_slice",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor__format__",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_and_to_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_as_np",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_dtype_compare",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_dtype_hash",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_dtype_singleton_pir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_eq_unsupported_type",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_method_or_module",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_module",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_pin_memory_and_device",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str3",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_bf16",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_complex128",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_complex64",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_fp8_e4m3fn",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_fp8_e5m2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_linewidth",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_linewidth2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_scaler",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_str_shape_with_zero",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_to_np",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tensor_to_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_string",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_tensor_attributes",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_tensor_change_place",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_tensor_from___cuda_array_interface__",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_tensor_not_change_input_stop_gradient",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_to_tensor_with_densetensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_tuple_to_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensor::test_write_property",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorClear::test_clear",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorCopyGradientFrom::test_copy_gradient_from",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorGradNameValue::test_eager_tensor_grad_name_value",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorIndex::test__index__with_0size_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorIndex::test__index__with_non_scalar_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorInitEagerTensorFromTensorWithDevice::test_tensor_init",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorInplaceVersion::test_bump_inplace_version",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorInplaceVersion::test_setitem",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorIsCudaIsCpu::test_dynamic_is_cuda_is_cpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorIsCudaIsCpu::test_static_is_cuda_is_cpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorNelement::test_nelement",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorNumel::test_numel_normal",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorNumel::test_numel_without_holder",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorOffset::test_offset",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitem::test_value_int",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitem::test_value_numpy",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitem::test_value_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemBoolIndex::test_value_int",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemBoolIndex::test_value_numpy",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemBoolIndex::test_value_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp32::test_value_float",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp32::test_value_int",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp32::test_value_numpy",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp32::test_value_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp64::test_value_int",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp64::test_value_numpy",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemFp64::test_value_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemInt64::test_value_int",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemInt64::test_value_numpy",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSetitemInt64::test_value_tensor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorShareBufferTo::test_share_buffer_To",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorSlice::test_slice",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_different_dtypes",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_dim_none_equiv",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_invalid_type",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_negative_dim",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_no_dim",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_out_of_bounds",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_various_shapes",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_with_dim",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorStride::test_stride_zero_size_contiguous_view_reshape_and_slice",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestEagerTensorTo::test_to_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestListToTensor::test_list_to_tensor_bfloat16",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestListToTensor::test_list_to_tensor_bfloat16_float32",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestListToTensor::test_list_to_tensor_float16",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestListToTensor::test_list_to_tensor_float16_float32",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestSetDynamicAttributeToEagerTensorInstance::test_set_dynamic_attribute_to_eager_tensor_instance_create_via_constructor",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_eager_tensor.py::TestSetDynamicAttributeToEagerTensorInstance::test_set_dynamic_attribute_to_eager_tensor_instance_create_via_to_pyobject",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_rand.py::TestCreationOut::test_rand",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_rand.py::TestTensorCreation::test_pin_memory_cpu_device",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_rand.py::TestTensorCreation::test_rand",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintAPI::test_api",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintAPI_ZeroDim::test_dygraph",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintAPI_ZeroDim::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintAliasAndOut::test_alias_and_out",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintAliasAndOut::test_out_static_mode",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintAliasAndOut::test_size_alias_static_mode",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_device_and_requires_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_device_cpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_pin_memory_cpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_pin_memory_cpu_xpu_branch",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_pin_memory_cuda",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_requires_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintDeviceRequiresGradPinMemory::test_requires_grad_false",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintHighAsList::test_high_is_list",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintHighAsList::test_high_is_tuple",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintImperative::test_case",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintOldStaticMode::test_out_none_old_static_mode",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintOldStaticMode::test_size_alias_old_static_mode",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintOpError::test_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandintOp_attr_tensorlist::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandint_attr_tensor::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randint_op.py::TestRandomValue::test_fixed_random_number",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandomValue::test_fixed_random_number",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermAPI::test_out",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermBF16Op::test_check_output",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermEager::test_out",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermFP16Op::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermImperative::test_out",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_device_parameter",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_out_parameter",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_out_parameter_dtype_consistency",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_out_parameter_shape_mismatch",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_parameter_combinations",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_pin_memory_cpu_device",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_pin_memory_parameter",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermNewParams::test_requires_grad_parameter",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermOpFloat32::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermOpFloat64::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermOpInt32::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandpermOpN::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandperm_compatible::test_large_n_cpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_randperm_op.py::TestRandperm_compatible::test_small_n_cpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。"
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_already_cuda_pinned_returns_same_object",
          "base": [
            null,
            null
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cpu_place_on_cuda_build",
          "base": [
            null,
            null
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cpu_place_on_pure_cpu_build_raises",
          "base": [
            null,
            null
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入 _to_pinned_place 时失败，节点尚未执行；Gold 两轮通过仅为 CPU 覆盖。"
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cpu_place_on_xpu_compiled_branch",
          "base": [
            null,
            null
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入 _to_pinned_place 时失败，节点尚未执行；Gold 两轮通过仅为 CPU 覆盖。"
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cuda_place_to_cuda_pinned",
          "base": [
            null,
            null
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。"
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_unsupported_place_raises",
          "base": [
            null,
            null
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入 _to_pinned_place 时失败，节点尚未执行；Gold 两轮通过仅为 CPU 覆盖。"
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_xpu_place_branch",
          "base": [
            null,
            null
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base 两轮在导入 _to_pinned_place 时失败，节点尚未执行；Gold 两轮通过仅为 CPU 覆盖。"
        }
      ],
      "evidenceNote": "CPU 子集的原始四轮结果已与日志核对；所需硬件未执行。此表的通过状态不能当作整题验收通过或自动累加为有效回归数。"
    },
    {
      "id": 78911,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_recompute_context_detection.TestRecomputeContext::test_context_active_with_rng_state",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_recompute_context_detection.TestRecomputeContext::test_context_active_without_rng_state",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_recompute_context_detection.TestRecomputeContext::test_gradient_and_context_cleanup",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78922,
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_flatten_state_dict_lifetime.TestFlattenStateDict::test_nested_state_dict_round_trip",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_flatten_state_dict_lifetime.TestFlattenStateDict::test_tensor_reference_released_without_cycle_gc",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 78932,
      "summary": "缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "上一版：核心通过、任务包待修；封存全量报告：原包通过。最新任务已修正 alias 身份断言，当前通过。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/ai_edited_test/test_ai_dataloader.py::TestTensorDataset::test_tensor_dataset_1d",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/ai_edited_test/test_ai_dataloader.py::TestTensorDataset::test_tensor_dataset_basic",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/ai_edited_test/test_ai_dataloader.py::TestTensorDataset::test_tensor_dataset_iter",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/ai_edited_test/test_ai_dataloader.py::TestTensorDataset::test_tensor_dataset_varargs",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/ai_edited_test/test_ai_dataloader.py::TestTensorDataset::test_tensor_dataset_varargs_single",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_paddle_utils_data.py::TestAlias::test_compatibility",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 6 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 79035,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr79035_lr_scheduler_alias.py::test_f2p_lr_scheduler_aliases_match_existing_schedulers",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr79035_lr_scheduler_alias.py::test_f2p_paddle_optim_initialization_exposes_lr_scheduler_namespace",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr79035_lr_scheduler_alias.py::test_p2p_legacy_step_decay_keeps_initial_learning_rate",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 79057,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_restricted_unpickler_mro.py::TestRestrictedUnpicklerMRO::test_existing_safe_class_policy",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler_mro.py::TestRestrictedUnpicklerMRO::test_inherited_dangerous_methods_are_rejected",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_restricted_unpickler_mro.py::TestRestrictedUnpicklerMRO::test_inherited_setstate_payload_is_blocked",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 79161,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr79161_set_rng_state_alias.py::test_existing_state_list_calls_remain_valid",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr79161_set_rng_state_alias.py::test_new_state_alias_sets_the_same_generator_state",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr79161_set_rng_state_alias.py::test_state_list_and_new_state_conflict_is_rejected",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 79167,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr79167_initial_seed_alias.py::test_existing_seed_exports_remain_unchanged",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr79167_initial_seed_alias.py::test_initial_seed_is_exported_at_top_level",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr79167_initial_seed_alias.py::test_initial_seed_is_in_public_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 79197,
      "summary": "目标与回归测试均可复现；原脚本导入 test_lr_scheduler.py 时找不到 op_test，未进入测试断言。",
      "category": "测试入口缺少辅助模块路径",
      "history": "与上一版结论一致。",
      "action": "在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。",
      "checks": [
        {
          "name": "tests/test.sh → test_lr_scheduler.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "目标与回归测试均可复现；原脚本导入 test_lr_scheduler.py 时找不到 op_test，未进入测试断言。"
        },
        {
          "name": "test/legacy_test/test_lr_scheduler.py::TestCosineAnnealingWarmRestarts::test_CosineRestartsLR",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_lr_scheduler.py::TestLRSchedulerWithOptimizerArg::test_cosine_annealing_decay",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_lr_scheduler.py::TestLRSchedulerWithOptimizerArg::test_cosine_annealing_warm_restarts",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_lr_scheduler.py::TestLRSchedulerWithOptimizerArg::test_exponential_decay",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_lr_scheduler.py::TestLRSchedulerWithOptimizerArg::test_multi_step_decay",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_lr_scheduler.py::TestLRSchedulerWithOptimizerArg::test_reduce_on_plateau",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_lr_scheduler.py::TestLRSchedulerWithOptimizerArg::test_step_decay",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 7 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 当前通过结果来自精确 Python 源码配合兼容原生载体的诊断；原脚本两轮仍因找不到 op_test 中断。需固化这条运行环境并修正入口路径，不能把兼容诊断直接扩展成原脚本或精确原生环境均已通过。"
    },
    {
      "id": 79268,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr79268_distributed_sampler.py::test_distributed_batch_sampler_seed_controls_shuffle",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr79268_distributed_sampler.py::test_distributed_sampler_is_public_and_forwards_arguments",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr79268_distributed_sampler.py::test_existing_distributed_batch_sampler_behavior_remains_valid",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 79275,
      "summary": "缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr79275_flex_attention_masks.py::test_existing_attention_exports_remain_available",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr79275_flex_attention_masks.py::test_non_callable_mask_inputs_are_rejected",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr79275_flex_attention_masks.py::test_or_and_masks_combine_results_and_forward_arguments",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr79275_flex_attention_masks.py::test_single_and_empty_mask_combinations_have_identity_behavior",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 4 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 79276,
      "summary": "目标与回归测试均可复现；原脚本导入 test_add_n_op.py 时找不到 op_test，未进入测试断言。",
      "category": "测试入口缺少辅助模块路径",
      "history": "与上一版结论一致。",
      "action": "在 tests/test.sh 中将仓库 test/legacy_test 加入模块搜索路径，再执行原脚本确认完整测试通过。",
      "checks": [
        {
          "name": "tests/test.sh → test_add_n_op.py",
          "base": [
            "collection_error",
            "collection_error"
          ],
          "gold": [
            "collection_error",
            "collection_error"
          ],
          "explanation": "目标与回归测试均可复现；原脚本导入 test_add_n_op.py 时找不到 op_test，未进入测试断言。"
        },
        {
          "name": "test/legacy_test/test_add_n_op.py::TestAddnOpZeroSizeAndNonZeroSize::test_add_n_compatible_ordinary_tensors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_add_n_op.py::TestAddnOpZeroSizeAndNonZeroSize::test_add_n_compatible_zero_size_tensors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_add_n_op.py::TestAddnOpZeroSizeAndNonZeroSize::test_add_n_zero_size_and_non_zero_size",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。 本题已有精确原生环境中的核心配对证据，但原脚本仍卡在 op_test 导入，编译成功并不能解决这个入口问题。需补齐辅助模块搜索路径，再用完整原脚本确认目标与回归测试都实际执行。"
    },
    {
      "id": 79310,
      "summary": "缺陷测试 4 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/swe_paddle/test_pr79310_sparse_initializer.py::test_dygraph_inplace_initializer_helpers_return_input_tensor",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr79310_sparse_initializer.py::test_existing_normal_non_dygraph_path_keeps_initializer_return_value",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/swe_paddle/test_pr79310_sparse_initializer.py::test_eye_dygraph_returns_input_tensor_after_inplace_share",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr79310_sparse_initializer.py::test_sparse_initializer_rejects_non_2d_tensor",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/swe_paddle/test_pr79310_sparse_initializer.py::test_sparse_initializer_zeros_ceil_fraction_in_every_column",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 5 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 79321,
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_state_dict_convert.py::TestStateDictReturn::test_missing_keys_and_unexpected_keys",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test/legacy_test/test_state_dict_convert.py::TestStateDictReturn::test_missing_keys_and_unexpected_keys_attr",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 79353,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_p2p_overlap_boundary.TestP2pOverlapBoundary::test_non_overlap_boundary_behavior",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_p2p_overlap_boundary.TestP2pOverlapBoundary::test_recv_forward_overlap_at_first_stage",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test.legacy_test.test_p2p_overlap_boundary.TestP2pOverlapBoundary::test_send_backward_overlap_at_first_stage",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 79369,
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test.legacy_test.test_check_memory_usage.TestCheckMemoryUsage::test_existing_memory_logging",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        },
        {
          "name": "test.legacy_test.test_check_memory_usage.TestCheckMemoryUsage::test_unsupported_cpu_allocator_api",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 2 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 79386,
      "summary": "原脚本四轮退出 0，三个测试在 Base/Gold 各两轮均通过。专门验证 uint64.max 的测试在 Base 已通过，因此实际 0 F2P / 3 P2P。不能据此声称补丁失败；当前声明的 Linux CPU 环境没有复现目标缺陷。",
      "category": "缺 F2P（当前 Linux CPU 测试全通过）",
      "history": "上一版：验证未完成；封存全量报告：验证未通过。",
      "action": "与开发者通过时的平台、编译器、原生库和触发输入对齐；在能够暴露 uint64 边界问题的环境建立失败案例，并将前提写进任务说明。",
      "checks": [
        {
          "name": "test.legacy_test.test_iinfo_and_finfo.TestIInfoUInt64Boundary::test_int64_signed_boundaries_remain_unchanged",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base、Gold 各两轮都通过。可作 P2P 回归观察；并无 Gold 失败。"
        },
        {
          "name": "test.legacy_test.test_iinfo_and_finfo.TestIInfoUInt64Boundary::test_neighboring_unsigned_metadata_remains_unchanged",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base、Gold 各两轮都通过。可作 P2P 回归观察；并无 Gold 失败。"
        },
        {
          "name": "test.legacy_test.test_iinfo_and_finfo.TestIInfoUInt64Boundary::test_uint64_max_preserves_unsigned_boundary",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "Base、Gold 各两轮都通过。该预期 F2P 节点在修复前已通过，未复现目标缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    },
    {
      "id": 79633,
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "category": "验证通过（限记录的运行环境）",
      "history": "与上一版结论一致。",
      "action": "按记录的环境和测试入口使用。",
      "checks": [
        {
          "name": "test/legacy_test/test_kv_server.py::TestKVServerConcurrent::test_concurrent_put_get_prefix",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_kv_server.py::TestKVServerRequestTimeout::test_half_open_connection_is_released_after_timeout",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。"
        },
        {
          "name": "test/legacy_test/test_kv_server.py::TestKVServerStop::test_stop_is_clean_and_idempotent_state",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。"
        }
      ],
      "evidenceNote": "核对 2026-09-09 封存记录；本题已记录 3 个节点。表格逐项保留 Base/Gold 各两轮结果，跳过、缺失、无有效断言及异常完成不自动计通过。"
    }
  ]
};
