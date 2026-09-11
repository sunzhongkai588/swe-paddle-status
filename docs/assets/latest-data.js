window.SWE_PADDLE_LATEST = {
  "schemaVersion": 1,
  "meta": {
    "updatedAt": "2026-09-11",
    "snapshot": "207998dab8c4c76c8558c3cca8ef177c69f10c1c",
    "total": 105,
    "proposalOnlyIds": [
      56723,
      78220,
      79391,
      79657
    ],
    "taskBase": "https://github.com/PaddlePaddle/community/tree/207998dab8c4c76c8558c3cca8ef177c69f10c1c/swe-paddle/tasks/PaddlePaddle__Paddle-"
  },
  "counts": {
    "passed": 86,
    "needs_fix": 7,
    "failed": 8,
    "incomplete": 4
  },
  "authors": {
    "Echo-Nie": {
      "label": "Echo-Nie",
      "profile": "https://github.com/Echo-Nie"
    },
    "yangguohao": {
      "label": "yangguohao",
      "profile": "https://github.com/yangguohao"
    },
    "gouzil": {
      "label": "gouzil",
      "profile": "https://github.com/gouzil"
    },
    "megemini": {
      "label": "megemini",
      "profile": "https://github.com/megemini"
    },
    "sunzhongkai588": {
      "label": "Zachary Sun",
      "profile": "https://github.com/sunzhongkai588"
    },
    "co63oc": {
      "label": "co63oc",
      "profile": "https://github.com/co63oc"
    },
    "Manfredss": {
      "label": "Manfredss",
      "profile": "https://github.com/Manfredss"
    },
    "jinyouzhi": {
      "label": "iLeGend",
      "profile": "https://github.com/jinyouzhi"
    },
    "wwaawwaaee": {
      "label": "SkyWalker",
      "profile": "https://github.com/wwaawwaaee"
    }
  },
  "tasks": [
    {
      "id": 18687,
      "title": "Parameter-server launch",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 3,
      "p2p": 1,
      "evidence": "exact_python",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用选定版本的 Python 源码，按任务约定的入口和依赖运行。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 27247,
      "title": "DataLoader spawn worker serialization",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 4,
      "evidence": "exact_python",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 4 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用选定版本的 Python 源码，按任务约定的入口和依赖运行。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 33369,
      "title": "Fleet elastic fault tolerance",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 3,
      "p2p": 1,
      "evidence": "exact_python",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用选定版本的 Python 源码，按任务约定的入口和依赖运行。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 36684,
      "title": "Fleet elastic scale up / down",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 8,
      "p2p": 2,
      "evidence": "exact_python",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 8 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用选定版本的 Python 源码，按任务约定的入口和依赖运行。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "原AST加载器把launch_elastic注入为literal no-op，原方法无断言；保留raw通过但不计有效P2P",
          "effective": false
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 41202,
      "title": "DataLoader reader AutoTune",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "needs_fix",
      "packageChangeRequired": true,
      "f2p": 2,
      "p2p": 1,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "data",
      "summary": "DataLoader 自动调节进程数的测试启动命令有问题：收集测试时重复加载 Paddle，尚未执行断言。",
      "whatFailed": "DataLoader 自动调节进程数的测试启动命令有问题：收集测试时重复加载 Paddle，尚未执行断言。",
      "why": "test.sh 用 pytest 从源码路径收集这份旧版测试，导致同一份 Paddle 被按 paddle 和 python.paddle 两个名字加载，原生模块重复初始化。切换 pytest 导入模式仍失败；直接执行测试文件自带入口则通过。",
      "fix": "将 test.sh 改为按顺序直接执行测试文件：python python/paddle/fluid/tests/unittests/test_dataloader_autotune.py。保留测试内容和完整范围。",
      "proof": "原入口复现失败；只改启动方式，原 3 项测试全部两轮通过。断言、测试文件和参考补丁均未修改。核心确认 2F/1P。",
      "requirements": "从 Paddle 源码根目录运行，保证该 task 的 Paddle Python 包和原生运行库可导入。；使用每个测试文件自带的 unittest 入口，避免 pytest 再按 python.paddle 导入同一份库。",
      "problemTests": [
        "python/paddle/fluid/tests/unittests/test_dataloader_autotune.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 50086,
      "title": "ConditionalBlock scope validation",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_cpp",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定编译、运行轻量 C++ 测试，不代表完整 Paddle 构建通过。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 52948,
      "title": "Static / dy2static Tensor.register_hook",
      "type": "feature",
      "author": "yangguohao",
      "status": "needs_fix",
      "packageChangeRequired": true,
      "f2p": 5,
      "p2p": 14,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "data",
      "summary": "静态图和动转静梯度 hook的测试启动命令有问题：收集测试时重复加载 Paddle，尚未执行断言。",
      "whatFailed": "静态图和动转静梯度 hook的测试启动命令有问题：收集测试时重复加载 Paddle，尚未执行断言。",
      "why": "test.sh 用 pytest 从源码路径收集这份旧版测试，导致同一份 Paddle 被按 paddle 和 python.paddle 两个名字加载，原生模块重复初始化。切换 pytest 导入模式仍失败；直接执行测试文件自带入口则通过。",
      "fix": "将 test.sh 改为按顺序直接执行测试文件：python test/dygraph_to_static/test_tensor_hook.py；python python/paddle/fluid/tests/unittests/test_tensor_register_hook.py。保留测试内容和完整范围。",
      "proof": "原入口复现失败；只改启动方式，原 19 项测试全部两轮通过。断言、测试文件和参考补丁均未修改。核心确认 5F/14P。",
      "requirements": "从 Paddle 源码根目录运行，保证该 task 的 Paddle Python 包和原生运行库可导入。；使用每个测试文件自带的 unittest 入口，避免 pytest 再按 python.paddle 导入同一份库。",
      "problemTests": [
        "test/dygraph_to_static/test_tensor_hook.py",
        "python/paddle/fluid/tests/unittests/test_tensor_register_hook.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 53534,
      "title": "to_tensor compatibility with NumPy",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 2,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 54435,
      "title": "Distributed launch numeric IP ordering",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 3,
      "p2p": 2,
      "evidence": "exact_python",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 3 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用选定版本的 Python 源码，按任务约定的入口和依赖运行。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 54625,
      "title": "Pipeline output release state",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 55890,
      "title": "VPP + sharding overlap scheduling",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 56135,
      "title": "BMM dynamic-shape infermeta",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 2,
      "evidence": "lightweight_cpp",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定编译、运行轻量 C++ 测试，不代表完整 Paddle 构建通过。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 56470,
      "title": "Upsampling accepts integer size",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 56705,
      "title": "Model-parallel memory leak",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 2,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 57741,
      "title": "PIR memcpy",
      "type": "feature",
      "author": "yangguohao",
      "status": "failed",
      "packageChangeRequired": true,
      "f2p": 1,
      "p2p": 0,
      "evidence": "exact_native",
      "corePassed": false,
      "cause": "data",
      "summary": "脚本写错测试名、漏了运行模式，还缺一条独立 P2P。",
      "whatFailed": "原入口找不到 TestTensorCopyToCudaOnDefaultCPU、TestTensorCopyToCudaOnDefaultGPU；实际名称中的 CUDA 必须全部大写。 默认运行方式下 CPU 测试在修复前也通过，无法验证修复；3 项 GPU 测试属于题目允许的可选跳过。 改正名称并设置 ENABLE_FALL_BACK=False 后，CPU 测试才复现缺少 pd_op.memcpy；现有任务只有这 1 个 CPU 测试，没有独立 P2P。",
      "why": "任务要测的是旧静态图转成新执行图时的内存复制。默认的另一种转换方式绕过了这个缺陷，测试虽然执行了，未经过出错的代码。 新控制保持 Base/Gold 原生库及测试断言不变，仅改变运行方式。Base 两轮明确报缺 pd_op.memcpy，Gold 两轮通过，说明不是机器缺 CPU 能力。",
      "fix": "修正两个 CUDA 类名，并在测试入口固定 ENABLE_FALL_BACK=False。 补选至少一个修复前后都能真正执行并通过的 CPU 回归测试，再按完整入口复验。",
      "proof": "核对完整测试清单，并只调整运行方式做修复前后各两轮对照：CPU 测试稳定暴露缺少 memcpy 算子的问题、修复后通过；3 条可选 GPU 测试跳过，未找到独立 P2P。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
        {
          "name": "test/dygraph_to_static/test_tensor_memcpy_on_cpu.py::TestTensorCopyToCpuOnDefaultCPU::test_tensor_cpu_on_default_cpu",
          "base": [
            "target_abort",
            "target_abort"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "类名改为CUDA；ENABLE_FALL_BACK=False；原测试断言及Base/Gold库不变",
          "explanation": "Base明确缺少本题修复的pd_op.memcpy；参考补丁修复，1个目标修复信号。",
          "effective": true
        },
        {
          "name": "test/dygraph_to_static/test_tensor_memcpy_on_cpu.py::TestTensorCopyToCUDAOnDefaultCPU::test_tensor_cuda_on_default_cpu",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "condition": "类名改为CUDA；ENABLE_FALL_BACK=False；原测试断言及Base/Gold库不变；GPU三个选择项单独运行，避免CPU预期abort遮住结果",
          "explanation": "无CUDA构建，原skipIf条件跳过，不计F/P。",
          "effective": false
        },
        {
          "name": "test/dygraph_to_static/test_tensor_memcpy_on_gpu.py::TestTensorCopyToCpuOnDefaultGPU::test_tensor_cpu_on_default_gpu",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "condition": "类名改为CUDA；ENABLE_FALL_BACK=False；原测试断言及Base/Gold库不变；GPU三个选择项单独运行，避免CPU预期abort遮住结果",
          "explanation": "无CUDA构建，原skipIf条件跳过，不计F/P。",
          "effective": false
        },
        {
          "name": "test/dygraph_to_static/test_tensor_memcpy_on_gpu.py::TestTensorCopyToCUDAOnDefaultGPU::test_tensor_cuda_on_default_gpu",
          "base": [
            "skipped",
            "skipped"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "condition": "类名改为CUDA；ENABLE_FALL_BACK=False；原测试断言及Base/Gold库不变；GPU三个选择项单独运行，避免CPU预期abort遮住结果",
          "explanation": "无CUDA构建，原skipIf条件跳过，不计F/P。",
          "effective": false
        }
      ]
    },
    {
      "id": 57827,
      "title": "PIR fused_elemwise_add_activation",
      "type": "feature",
      "author": "yangguohao",
      "status": "failed",
      "packageChangeRequired": true,
      "f2p": 2,
      "p2p": 3,
      "evidence": "exact_native",
      "corePassed": false,
      "cause": "data",
      "summary": "入口误收集辅助函数，还测到了旧版池化的数据排列错误。",
      "whatFailed": "两个辅助函数被误当作测试，报缺少参数；最大池化的反向计算在修复前后都会退出。",
      "why": "脚本把两个以 test_ 开头的辅助函数当成了测试。另一个最大池化测试在前向和反向使用不同的数据排列方式，但底层库要求两边一致，因此拒绝计算。这是旧版 Paddle 已有的调用问题，本题补丁没有处理它；不是机器缺硬件。",
      "fix": "修正入口的测试收集方式；明确本题验收范围，另行处理这个旧池化问题后再完整复验。已通过的两个目标测试不能替代整题。",
      "proof": "记录实际失败参数，并用同一个 oneDNN 3.2.1 做最小对照：只对齐前后数据排列，原先报错的计算准备步骤就能通过；限制 CPU 指令集后结果相同。源码也要求排列一致，确认是旧版调用问题。整题仍未通过。",
      "requirements": "使用记录中的精确 CPU Paddle 运行库。该项验证的是 CPU 加速的最大池化反向计算，不需要 GPU。",
      "problemTests": [
        "test/dygraph_to_static/test_build_strategy.py::test_ast_only",
        "test/dygraph_to_static/test_build_strategy.py::test_legacy_and_pir",
        "test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_in_static_mode_mkldnn__ast_legacy_ir",
        "test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_in_static_mode_mkldnn__ast_pir_exe",
        "test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_resnet__ast_pir_exe"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
        {
          "name": "test/dygraph_to_static/test_build_strategy.py::test_ast_only",
          "base": [
            "setup_error",
            "setup_error"
          ],
          "gold": [
            "setup_error",
            "setup_error"
          ],
          "condition": "原完整文件的逐项控制；oneDNN另核上游CMake前提与AVX2，保持断言不变",
          "explanation": "pytest误收集辅助装饰器，缺少fn；不计F/P。",
          "effective": false
        },
        {
          "name": "test/dygraph_to_static/test_build_strategy.py::test_legacy_and_pir",
          "base": [
            "setup_error",
            "setup_error"
          ],
          "gold": [
            "setup_error",
            "setup_error"
          ],
          "condition": "原完整文件的逐项控制；oneDNN另核上游CMake前提与AVX2，保持断言不变",
          "explanation": "pytest误收集辅助装饰器，缺少fn；不计F/P。",
          "effective": false
        },
        {
          "name": "test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_in_static_mode_mkldnn__ast_legacy_ir",
          "base": [
            "native_abort",
            "native_abort"
          ],
          "gold": [
            "native_abort",
            "native_abort"
          ],
          "condition": "原完整文件的逐项控制；oneDNN另核上游CMake前提与AVX2，保持断言不变",
          "explanation": "最大池化反向需要沿用前向的数据排列；实际传入另一种排列，库不支持，所以修复前后都失败。最小对照中，只对齐排列就能通过原先失败的计算准备步骤。",
          "effective": true
        },
        {
          "name": "test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_in_static_mode_mkldnn__ast_pir_exe",
          "base": [
            "target_abort",
            "target_abort"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "原完整文件的逐项控制；oneDNN另核上游CMake前提与AVX2，保持断言不变",
          "explanation": "已由不捕获stderr的控制日志定位为缺少本题要补的PIR算子；与普通native abort区分。",
          "effective": true
        },
        {
          "name": "test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_resnet__ast_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "原完整文件的逐项控制；oneDNN另核上游CMake前提与AVX2，保持断言不变",
          "explanation": "原范围独立回归测试。",
          "effective": true
        },
        {
          "name": "test/dygraph_to_static/test_build_strategy.py::TestResnetWithPass::test_resnet__ast_pir_exe",
          "base": [
            "target_abort",
            "target_abort"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "原完整文件的逐项控制；oneDNN另核上游CMake前提与AVX2，保持断言不变",
          "explanation": "已由不捕获stderr的控制日志定位为缺少本题要补的PIR算子；与普通native abort区分。",
          "effective": true
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
          "condition": "原完整文件的逐项控制；oneDNN另核上游CMake前提与AVX2，保持断言不变",
          "explanation": "原范围独立回归测试。",
          "effective": true
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
          "condition": "原完整文件的逐项控制；oneDNN另核上游CMake前提与AVX2，保持断言不变",
          "explanation": "原范围独立回归测试。",
          "effective": true
        }
      ]
    },
    {
      "id": 58219,
      "title": "PIR floor_divide / remainder operations",
      "type": "feature",
      "author": "gouzil",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 4,
      "p2p": 4,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 4 项、回归测试 4 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 58323,
      "title": "atleast_1d / atleast_2d / atleast_3d APIs",
      "type": "feature",
      "author": "megemini",
      "status": "needs_fix",
      "packageChangeRequired": true,
      "f2p": 41,
      "p2p": 48,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "data",
      "summary": "测试加载和模式设置有误；调整测试准备后，完整范围通过。",
      "whatFailed": "41 条新接口测试在修复前无法启动；修复后另有一条 Tensor 方法测试用错了运行模式。",
      "why": "测试文件一加载就查询尚不存在的新接口，导致整组测试退出。另一条测试在创建输入后才切回动态图，输入类型因此不对。",
      "fix": "把新接口查询放到具体测试执行时，并在创建输入前切回动态图；保留全部测试和断言。",
      "proof": "在临时测试副本中只调整加载时机和模式准备，完整两个测试文件在修复前后各跑两轮：41 条 F2P、48 条 P2P，另 2 条按 CPU 条件跳过。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [
        "test/legacy_test/test_atleast_nd.py::<module>",
        "test/legacy_test/test_atleast_nd.py::TestAtleastAsTensorMethod::test_as_tensor_method",
        "tests/test.sh"
      ],
      "countsNote": "上述 F2P/P2P 来自修正测试准备后的完整范围对照；任务包仍需正式修改。",
      "checks": [
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastAsTensorMethod::test_as_tensor_method",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_0::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_10::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_11::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_12::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_13::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_14::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_1::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_2::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_3::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_4::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_5::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_6::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_7::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_8::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDimMoreInputs_9::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_0::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_10::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_11::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_12::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_13::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_14::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_1::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_2::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_3::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_4::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_5::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_6::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_7::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_8::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastDim_9::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastErrorCombineInputs_0::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastErrorCombineInputs_1::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastErrorCombineInputs_2::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixData_0::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixData_1::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixData_2::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixData_3::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixData_4::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixDim_0::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_atleast_nd.py::TestAtleastMixDtypes_0::test_all",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
        }
      ]
    },
    {
      "id": 58343,
      "title": "PIR logical, bitwise and scalar-power methods",
      "type": "feature",
      "author": "gouzil",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 6,
      "p2p": 9,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 6 项、回归测试 9 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 58917,
      "title": "tensor_split / hsplit / dsplit APIs",
      "type": "feature",
      "author": "megemini",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 15,
      "p2p": 3,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 15 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 59021,
      "title": "PIR test_len",
      "type": "bugfix",
      "author": "yangguohao",
      "status": "failed",
      "packageChangeRequired": true,
      "f2p": 3,
      "p2p": 12,
      "evidence": "exact_native",
      "corePassed": false,
      "cause": "data",
      "summary": "入口漏了运行设置；还需分开验证两种执行模式。",
      "whatFailed": "TestLenWithTensorArray::test_len__ast_legacy_ir 默认进入不受支持的新图转换路径而崩溃。 TestMNIST 的两个融合测试，以及 TestFuseActElewiseAddInplaceGradPass::test_fuse_act_add_grad_pass_cpu，没有先开启静态模式而失败。 3 个 TestLenWithSelectedRows 测试在原入口未开启 PIR 执行器，修复前后都通过，缺 F2P 信号。",
      "why": "指定 Base 的 CMakeLists.txt 明确把 test_len 加入 DISABLE_PIR_PT_MODES，并设置 FLAGS_enable_pir_with_pt_in_dy2st=0。task 的 pytest 入口漏抄了这个前提。 融合文件把 paddle.enable_static() 写在直接运行文件才会执行的入口中，改用 pytest 导入时没有执行。 只给 SelectedRows 开启 PIR 执行器就能重现并验证参考修复；对整个 test_len 强开 PIR 则会再次导致 TensorArray 崩溃，所以不能用一个全局开关混跑两种测试。",
      "fix": "test_len 按上游要求关闭 PIR 自动转换，保留全部 9 项回归；融合测试先开启静态模式。 为 SelectedRows 单独补一组开启 PIR 执行器的验证入口，保留完整原有回归范围后再验收。",
      "proof": "按上游设置完整跑 13 个节点，修复前后各两轮均通过，其中 1 条在 CPU 上直接返回、不计回归。另将 3 条 SelectedRows 单独用 PIR 执行器运行，可复现修复前失败、修复后通过。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [
        "test.legacy_test.test_fuse_elewise_add_act_pass.TestMNIST::test_batchnorm_fc_with_fuse_op",
        "test.legacy_test.test_fuse_elewise_add_act_pass.TestMNIST::test_simple_fc_with_fuse_op",
        "test.legacy_test.test_fuse_elewise_add_act_pass.TestFuseActElewiseAddInplaceGradPass::test_fuse_act_add_grad_pass_cpu",
        "test.dygraph_to_static.test_len.TestLenWithTensorArray::test_len__ast_legacy_ir"
      ],
      "countsNote": "3 条 F2P 在单独的 PIR 执行条件下确认；12 条 P2P 来自完整回归范围。条件不同，不能冒充原脚本已通过。",
      "checks": [
        {
          "name": "test.legacy_test.test_fuse_elewise_add_act_pass.TestMNIST::test_batchnorm_fc_with_fuse_op",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "FLAGS_enable_pir_in_executor=true；pytest前paddle.enable_static()；完整fusion文件",
          "explanation": "静态初始化补齐后在Base/Gold双轮通过。",
          "effective": true
        },
        {
          "name": "test.legacy_test.test_fuse_elewise_add_act_pass.TestMNIST::test_simple_fc_with_fuse_op",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "FLAGS_enable_pir_in_executor=true；pytest前paddle.enable_static()；完整fusion文件",
          "explanation": "静态初始化补齐后在Base/Gold双轮通过。",
          "effective": true
        },
        {
          "name": "test.legacy_test.test_fuse_elewise_add_act_pass.TestFuseActElewiseAddInplaceGradPass::test_fuse_act_add_grad_pass_cpu",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "FLAGS_enable_pir_in_executor=true；pytest前paddle.enable_static()；完整fusion文件",
          "explanation": "静态初始化补齐后在Base/Gold双轮通过。",
          "effective": true
        },
        {
          "name": "test.legacy_test.test_fuse_elewise_add_act_pass.TestFuseActElewiseAddInplaceGradPass::test_fuse_act_add_grad_pass_cuda",
          "base": [
            "empty_return",
            "empty_return"
          ],
          "gold": [
            "empty_return",
            "empty_return"
          ],
          "condition": "FLAGS_enable_pir_in_executor=true；pytest前paddle.enable_static()；完整fusion文件",
          "explanation": "无CUDA时方法直接返回，不能计P2P。",
          "effective": false
        },
        {
          "name": "test.dygraph_to_static.test_len.TestLenWithTensorArray::test_len__ast_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "FLAGS_enable_pir_in_executor=true；pytest前paddle.enable_static()；完整fusion文件",
          "explanation": "静态初始化补齐后在Base/Gold双轮通过。",
          "effective": true
        },
        {
          "name": "test.dygraph_to_static.test_len.TestLen::test_len__ast_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "FLAGS_enable_pir_in_executor=true；pytest前paddle.enable_static()；完整fusion文件",
          "explanation": "静态初始化补齐后在Base/Gold双轮通过。",
          "effective": true
        },
        {
          "name": "test.dygraph_to_static.test_len.TestLen::test_len__sot_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "FLAGS_enable_pir_in_executor=true；pytest前paddle.enable_static()；完整fusion文件",
          "explanation": "静态初始化补齐后在Base/Gold双轮通过。",
          "effective": true
        },
        {
          "name": "test.dygraph_to_static.test_len.TestLen::test_len__sot_mgs10_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "FLAGS_enable_pir_in_executor=true；pytest前paddle.enable_static()；完整fusion文件",
          "explanation": "静态初始化补齐后在Base/Gold双轮通过。",
          "effective": true
        },
        {
          "name": "test.dygraph_to_static.test_len.TestLenWithTensorArray::test_len__sot_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "FLAGS_enable_pir_in_executor=true；pytest前paddle.enable_static()；完整fusion文件",
          "explanation": "静态初始化补齐后在Base/Gold双轮通过。",
          "effective": true
        },
        {
          "name": "test.dygraph_to_static.test_len.TestLenWithTensorArray::test_len__sot_mgs10_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "FLAGS_enable_pir_in_executor=true；pytest前paddle.enable_static()；完整fusion文件",
          "explanation": "静态初始化补齐后在Base/Gold双轮通过。",
          "effective": true
        },
        {
          "name": "test.dygraph_to_static.test_len.TestLenWithSelectedRows::test_len__ast_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "FLAGS_enable_pir_in_executor=true；pytest前paddle.enable_static()；完整fusion文件",
          "explanation": "静态初始化补齐后在Base/Gold双轮通过。",
          "effective": true
        },
        {
          "name": "test.dygraph_to_static.test_len.TestLenWithSelectedRows::test_len__sot_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "FLAGS_enable_pir_in_executor=true；pytest前paddle.enable_static()；完整fusion文件",
          "explanation": "静态初始化补齐后在Base/Gold双轮通过。",
          "effective": true
        },
        {
          "name": "test.dygraph_to_static.test_len.TestLenWithSelectedRows::test_len__sot_mgs10_legacy_ir",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "FLAGS_enable_pir_in_executor=true；pytest前paddle.enable_static()；完整fusion文件",
          "explanation": "静态初始化补齐后在Base/Gold双轮通过。",
          "effective": true
        },
        {
          "name": "test.dygraph_to_static.test_len.TestLenWithSelectedRows::test_len__ast_legacy_ir",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "单独SelectedRows：FLAGS_enable_pir_with_pt_in_dy2st=false；FLAGS_enable_pir_in_executor=true",
          "explanation": "同名测试切换到题目要修复的PIR条件后构成F2P；为补充诊断，不替代前面完整原范围。",
          "effective": true
        },
        {
          "name": "test.dygraph_to_static.test_len.TestLenWithSelectedRows::test_len__sot_legacy_ir",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "单独SelectedRows：FLAGS_enable_pir_with_pt_in_dy2st=false；FLAGS_enable_pir_in_executor=true",
          "explanation": "同名测试切换到题目要修复的PIR条件后构成F2P；为补充诊断，不替代前面完整原范围。",
          "effective": true
        },
        {
          "name": "test.dygraph_to_static.test_len.TestLenWithSelectedRows::test_len__sot_mgs10_legacy_ir",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "condition": "单独SelectedRows：FLAGS_enable_pir_with_pt_in_dy2st=false；FLAGS_enable_pir_in_executor=true",
          "explanation": "同名测试切换到题目要修复的PIR条件后构成F2P；为补充诊断，不替代前面完整原范围。",
          "effective": true
        }
      ]
    },
    {
      "id": 59127,
      "title": "column_stack / row_stack / dstack / hstack / vstack APIs",
      "type": "feature",
      "author": "megemini",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 84,
      "p2p": 42,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "stack 系列拼接接口测试已通过。",
      "whatFailed": "stack 系列拼接接口测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 white_list（测试用的白名单），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 84 项修复前失败后通过、42 项修复前后都通过。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用与该时期 API 兼容的 CPU Paddle 运行库；本次沿用已核对的 Python 源码覆盖方式。",
      "problemTests": [
        "test/legacy_test/test_stack_op.py",
        "test/legacy_test/test_stack_extension_api.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 59348,
      "title": "PIR sequence_mask",
      "type": "feature",
      "author": "yangguohao",
      "status": "needs_fix",
      "packageChangeRequired": true,
      "f2p": 13,
      "p2p": 2,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "data",
      "summary": "15 个测试已通过；任务入口仍需补静态模式初始化。",
      "whatFailed": "原入口中的 TestSequenceMaskOpError::test_errors 没在正确模式下执行，误报失败。",
      "why": "测试文件把 paddle.enable_static() 放在直接运行文件的入口里，pytest 导入时跳过了它。 同一份测试、同一 Base/Gold 库，仅补上静态模式后，全部 15 项在修复后通过；其中 13 项验证目标修复，2 项验证原有行为。",
      "fix": "在 pytest 启动前调用 paddle.enable_static()，或采用保留此初始化的测试入口。",
      "proof": "同一份完整测试、同一版本运行库，仅补静态初始化，修复前后各两轮确认 13 条 F2P、2 条 P2P；修复后的 15 条全部通过。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [
        "test.sequence.test_sequence_mask.SequenceMaskTestBase::test_check_output",
        "test.sequence.test_sequence_mask.SequenceMaskTest1::test_check_output",
        "test.sequence.test_sequence_mask.SequenceMaskTest2::test_check_output",
        "test.sequence.test_sequence_mask.SequenceMaskTest3::test_check_output",
        "test.sequence.test_sequence_mask.SequenceMaskTest4::test_check_output",
        "test.sequence.test_sequence_mask.SequenceMaskTest5::test_check_output",
        "test.sequence.test_sequence_mask.SequenceMaskTest6::test_check_output",
        "test.sequence.test_sequence_mask.SequenceMaskTestBase_tensor_attr::test_check_output",
        "test.sequence.test_sequence_mask.SequenceMaskTest1_tensor_attr::test_check_output",
        "test.sequence.test_sequence_mask.SequenceMaskTest2_tensor_attr::test_check_output",
        "test.sequence.test_sequence_mask.SequenceMaskTest3_tensor_attr::test_check_output",
        "test.sequence.test_sequence_mask.SequenceMaskTest4_tensor_attr::test_check_output",
        "test.sequence.test_sequence_mask.SequenceMaskTest5_tensor_attr::test_check_output"
      ],
      "countsNote": "配对结果来自补静态初始化后的完整 15 项；任务入口仍待修改。",
      "checks": [
        {
          "name": "test.sequence.test_sequence_mask.SequenceMaskTestBase::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.SequenceMaskTest1::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.SequenceMaskTest2::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.SequenceMaskTest3::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.SequenceMaskTest4::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.SequenceMaskTest5::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.SequenceMaskTest6::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.SequenceMaskTestBase_tensor_attr::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.SequenceMaskTest1_tensor_attr::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.SequenceMaskTest2_tensor_attr::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.SequenceMaskTest3_tensor_attr::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.SequenceMaskTest4_tensor_attr::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.SequenceMaskTest5_tensor_attr::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.TestSequenceMaskOpError::test_errors",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前后各两轮通过：P2P。"
        },
        {
          "name": "test.sequence.test_sequence_mask.TestSequenceMaskWithEmptyTensor::test_empty",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前后各两轮通过：P2P。"
        }
      ]
    },
    {
      "id": 59374,
      "title": "Tensor apply / apply_ API",
      "type": "feature",
      "author": "yangguohao",
      "status": "failed",
      "packageChangeRequired": true,
      "f2p": 5,
      "p2p": 0,
      "evidence": "exact_native",
      "corePassed": false,
      "cause": "data",
      "summary": "5 条缺陷测试通过，但没有选入独立的 P2P。",
      "whatFailed": "TestTensorApplyAPI 的 test_dtype、test_dygraph、test_error、test_to_static，以及 TestDygraphTensorApplyInplace::test_inplace_api 都是 F2P。 唯一剩下的 test_on_gpu 在 CPU 机器上按题目设计跳过，不能充当 P2P。",
      "why": "这些测试全部调用本题新加入的 apply/apply_，所以未修复版本本来就都会失败；测试清单没有覆盖一个不依赖新 API 的既有功能。 5 项在 Gold 上都通过，当前没有证据表明补丁或机器有问题。缺的是数据包的回归测试选择。",
      "fix": "补选至少一个与 Tensor 既有行为有关、修复前后都能执行并通过的 CPU 测试，加入 test.sh 后完整复验。",
      "proof": "核对原脚本选中的全部 6 个节点和双轮日志：5 个 CPU 测试修复前失败、修复后通过；1 个 GPU 测试按约定跳过，没有可计数的 P2P。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [
        "test.legacy_test.test_apply.TestTensorApplyAPI::test_dtype",
        "test.legacy_test.test_apply.TestTensorApplyAPI::test_dygraph",
        "test.legacy_test.test_apply.TestTensorApplyAPI::test_error",
        "test.legacy_test.test_apply.TestTensorApplyAPI::test_on_gpu",
        "test.legacy_test.test_apply.TestTensorApplyAPI::test_to_static",
        "test.legacy_test.test_inplace.TestDygraphTensorApplyInplace::test_inplace_api"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 59383,
      "title": "masked_scatter API",
      "type": "feature",
      "author": "yangguohao",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 28,
      "p2p": 680,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "masked_scatter 和原地操作测试已通过。",
      "whatFailed": "masked_scatter 和原地操作测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 white_list（测试用的白名单），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 28 项修复前失败后通过、680 项修复前后都通过。另有 16 项按测试自身条件在 CPU 上跳过，未计入通过。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用与该时期 API 兼容的 CPU Paddle 运行库；本次沿用已核对的 Python 源码覆盖方式。",
      "problemTests": [
        "test/legacy_test/test_masked_scatter.py",
        "test/legacy_test/test_inplace.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
        }
      ]
    },
    {
      "id": 59715,
      "title": "matrix_exp API",
      "type": "feature",
      "author": "megemini",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 56,
      "p2p": 52,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 56 项、回归测试 52 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 59847,
      "title": "FractionalMaxPool2D / 3D",
      "type": "feature",
      "author": "megemini",
      "status": "incomplete",
      "packageChangeRequired": false,
      "f2p": null,
      "p2p": null,
      "evidence": "environment_incomplete",
      "corePassed": false,
      "cause": "machine",
      "summary": "CPU 部分已验证通过；机器没有题目必需的 CUDA 设备，所以 GPU 部分还没验证。",
      "whatFailed": "fractional_max_pool2d/3d 的 32 个 FP16/BF16 测试被跳过，以及相同功能的 GPU 执行分支。",
      "why": "题目明确要求 CPU + GPU。当前机器没有 NVIDIA 设备或驱动接口，无法运行这些 CUDA 核函数。 CPU 子集观察到 36 项目标修复、7 项回归通过，没有发现 Gold 的 CPU 测试失败。",
      "fix": "在符合题目要求的设备上，保持相同 Base、参考补丁和测试范围，各跑两轮；保留已完成的 CPU 结果。",
      "proof": "检查机器设备和任务硬件要求，并核对 CPU 双轮记录。CPU 已有通过结果，但当前没有 NVIDIA 设备，GPU 节点确实未执行。",
      "requirements": "CUDA设备与匹配的CUDA Paddle构建，FP16/BF16能力按节点要求确认",
      "problemTests": [
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_BF16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_BF16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_FP16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase1_FP16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_BF16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_BF16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_FP16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase2_FP16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_BF16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_BF16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_FP16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestCase3_FP16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool2d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_BF16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_BF16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_FP16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase1_FP16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_BF16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_BF16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_FP16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase2_FP16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_BF16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_BF16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_FP16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestCase3_FP16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_BF16OP::test_check_output",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_grad",
        "test/legacy_test/test_fractional_max_pool3d_op.py::TestMaxPoolWithIndex_Op_FP16OP::test_check_output"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
        }
      ]
    },
    {
      "id": 59909,
      "title": "Parallel mode selection under sharding",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 2,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 59973,
      "title": "slice_scatter API",
      "type": "feature",
      "author": "megemini",
      "status": "needs_fix",
      "packageChangeRequired": true,
      "f2p": 47,
      "p2p": 25,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "data",
      "summary": "两个静态测试漏了初始化；补齐后，完整范围通过。",
      "whatFailed": "TestScatterAPI::test_static 和 TestScatterInplaceAPI::test_static 在创建输入时就报错。",
      "why": "脚本用 pytest 启动，不会执行文件末尾的静态模式初始化；两个测试自己也没打开静态模式，因此还没测试 scatter 就失败了。",
      "fix": "在这两个测试类的准备步骤中调用 paddle.enable_static()，不要依赖文件末尾的启动代码。",
      "proof": "只补静态模式准备，不改断言或测试范围；修复前后各跑两轮，确认 47 条 F2P、25 条有效 P2P。另 2 条在 CPU 上直接返回、29 条跳过，均不计数。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [
        "test/legacy_test/test_scatter_op.py::TestScatterAPI::test_static",
        "test/legacy_test/test_scatter_op.py::TestScatterInplaceAPI::test_static"
      ],
      "countsNote": "上述 F2P/P2P 来自修正测试准备后的完整范围对照；任务包仍需正式修改。",
      "checks": [
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterAPI::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
        },
        {
          "name": "test/legacy_test/test_scatter_op.py::TestScatterInplaceAPI::test_static",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "修复前后各两轮通过：P2P 回归测试。",
          "effective": true
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败，修复后两轮通过：有效 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 60417,
      "title": "Auto-tuner resume from CSV history",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 3,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 60808,
      "title": "broadcast_to with zero dimensions",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "needs_fix",
      "packageChangeRequired": true,
      "f2p": 1,
      "p2p": 2,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "data",
      "summary": "测试通过；环境说明把一条回归测试错写成了缺陷测试。",
      "whatFailed": "没有修复后仍失败的测试。问题是 environment/README.md 说有两条 F2P，实际只有一条。",
      "why": "一维 shape Tensor 的 expand 测试在修复前就已通过，它检查的是原有功能，应算 P2P。任务主 README 的分类是正确的，但环境说明与它矛盾。",
      "fix": "把 environment/README.md 的运行步骤和预期表改为 1 条 F2P、2 条 P2P；不需要改代码、测试断言或机器配置。",
      "proof": "核对原脚本的修复前后各两轮结果：零维 shape 测试由失败变通过，另外两条始终通过，修复后完整脚本两轮都成功。",
      "requirements": "使用记录中的精确 Base/Gold CPU 运行时；测试加载选定版本的 broadcast_to/expand 函数，任务也允许免重编译的验证路线。",
      "problemTests": [
        "test/legacy_test/test_broadcast_to_zero_dim_shape.py::test_expand_accepts_multi_element_1d_shape_tensor"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 64320,
      "title": "sparse.mask_as API",
      "type": "feature",
      "author": "megemini",
      "status": "incomplete",
      "packageChangeRequired": false,
      "f2p": null,
      "p2p": null,
      "evidence": "environment_incomplete",
      "corePassed": false,
      "cause": "machine",
      "summary": "CPU 的稀疏张量测试已通过；机器缺少题目要求的 CUDA 设备，GPU 分支还没跑。",
      "whatFailed": "sparse.mask_as 的 COO 1d/2d/3d/4d、CSR 2d/3d 及相关稀疏运算的 GPU 分支。",
      "why": "原题要求 CPU + GPU。当前只能运行 CPU 路径，GPU 条件分支没有执行。 6 项 CPU 目标测试已由失败变为通过；27 项表面 P2P 中有 GPU 条件空返回，不能把这些空返回当成有效回归覆盖。",
      "fix": "在符合题目要求的设备上，保持相同 Base、参考补丁和测试范围，各跑两轮；保留已完成的 CPU 结果。",
      "proof": "核对任务要求、设备清单和 CPU 双轮日志。6 个 CPU 缺陷测试由失败变通过；部分设备条件分支直接返回，不能据此声称 GPU 通过。",
      "requirements": "CUDA设备与匹配的CUDA Paddle构建",
      "problemTests": [
        "test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCoo",
        "test/legacy_test/test_sparse_mask_as_op.py::TestMaskAsCsr"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集观察到 Base 两轮失败、Gold 两轮通过；任务所需设备分支尚未验证。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
        }
      ]
    },
    {
      "id": 64519,
      "title": "cholesky_inverse API",
      "type": "feature",
      "author": "megemini",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 16,
      "p2p": 9,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 16 项、回归测试 9 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "此项不构成有效测试配对，不计入 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 64881,
      "title": "FeatureAlphaDropout API",
      "type": "feature",
      "author": "megemini",
      "status": "failed",
      "packageChangeRequired": true,
      "f2p": 6,
      "p2p": 92,
      "evidence": "exact_native",
      "corePassed": false,
      "cause": "data",
      "summary": "测试范围包含 7 项原本就坏的 dropout 功能，整题仍未通过。",
      "whatFailed": "6 项检查发现随机掩码的形状不对；另 1 项设了相同随机种子却得到不同结果。",
      "why": "丢弃比例为 100% 时，旧代码给出一个零值，测试要的是与输入一样大的掩码。随机种子测试则没有把指定种子传进实际运算。这些问题在修复前已存在，也不在本题补丁修改范围内。",
      "fix": "明确任务应覆盖的功能，将无关旧缺陷另行处理；这些失败项不能算 P2P，也不能直接删掉后宣称原完整测试通过。",
      "proof": "用精确版本重跑完整两个测试文件，并检查运行开关；7 项在修复前后仍失败。小数组单独实验也复现掩码变成标量、指定种子未传入，排除了验证器强开模式或缺 GPU 的解释。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [
        "test/legacy_test/test_dropout_op.py::TestBF16DropoutOp::test_check_grad_normal",
        "test/legacy_test/test_dropout_op.py::TestBF16DropoutOp::test_check_output",
        "test/legacy_test/test_dropout_op.py::TestDropoutOp2::test_check_output",
        "test/legacy_test/test_dropout_op.py::TestDropoutOp6::test_check_output",
        "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_6_p_1_0_test_False::test_static_comp",
        "test/legacy_test/test_dropout_op.py::TestPirCompositeDropout_7_p_1_0_test_False_dtype_bfp16::test_static_comp",
        "test/legacy_test/test_dropout_op.py::TestDropoutWithDeterminateSeedGenerator::test_static",
        "tests/test.sh"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
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
          "explanation": "丢弃比例为100%时，旧dropout代码返回一个零值作为mask；测试要求mask和输入数组同样大小，因此6项报形状不符。Base和参考补丁均未修复这个旧问题。",
          "effective": true
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
          "explanation": "丢弃比例为100%时，旧dropout代码返回一个零值作为mask；测试要求mask和输入数组同样大小，因此6项报形状不符。Base和参考补丁均未修复这个旧问题。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "此机器条件下直接返回，没有执行实际检查，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "丢弃比例为100%时，旧dropout代码返回一个零值作为mask；测试要求mask和输入数组同样大小，因此6项报形状不符。Base和参考补丁均未修复这个旧问题。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "丢弃比例为100%时，旧dropout代码返回一个零值作为mask；测试要求mask和输入数组同样大小，因此6项报形状不符。Base和参考补丁均未修复这个旧问题。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "测试给两次dropout指定相同随机种子，但旧实现没有把指定种子传到运算中，实际仍随机生成，所以两次输出不同。",
          "effective": true
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "丢弃比例为100%时，旧dropout代码返回一个零值作为mask；测试要求mask和输入数组同样大小，因此6项报形状不符。Base和参考补丁均未修复这个旧问题。",
          "effective": true
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
          "explanation": "丢弃比例为100%时，旧dropout代码返回一个零值作为mask；测试要求mask和输入数组同样大小，因此6项报形状不符。Base和参考补丁均未修复这个旧问题。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 65724,
      "title": "DataLoader persistent_workers",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 67195,
      "title": "Pipeline NaN checker",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 68432,
      "title": "Sparse complex multiply / divide",
      "type": "feature",
      "author": "sunzhongkai588",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 11,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 11 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 70469,
      "title": "Fused dropout-add fallback",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 72800,
      "title": "cummin / cummax zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 4,
      "p2p": 4,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "cummin/cummax 的空张量测试已通过。",
      "whatFailed": "cummin/cummax 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 4 项修复前失败后通过、4 项修复前后都通过。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。",
      "problemTests": [
        "test/legacy_test/test_cummax_op.py",
        "test/legacy_test/test_cummin_op.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 73122,
      "title": "multi_dot zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 2,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "固定为任务默认的 MKL 数学库后，完整原脚本通过。",
      "whatFailed": "OpenBLAS 构建下，TestMultiDotOp_ZeroSize1::test_check_output 在修复前就通过，掩盖了缺陷。 采用题目默认 MKL 后，原 test.sh 的全部 3 项已完成双轮验证，没有剩余失败项。",
      "why": "README 的构建命令在本机默认开启 MKL；原验证却关闭 MKL，改用 OpenBLAS。两套库处理空矩阵时的行为不同。 Base 把零尺寸矩阵直接传给数学库。MKL 拒绝其中为零的矩阵步长并留下未初始化输出，OpenBLAS 则直接填零。参考补丁提前处理空矩阵，避免了这个非法调用。 控制实验保持 Base/Gold 原生库、测试脚本、所有 3 个测试和断言不变，只将实际 BLAS 调用绑定到源代码指定系列的 MKL 2019.0.5；两轮均得到 Base 1 失败/2 通过，Gold 3 通过。",
      "fix": "验证环境固定为 MKL，并记录数学库版本；不需要修改本题测试断言或参考补丁。",
      "proof": "完整原 test.sh 和 3 个测试均未修改，只把数学运算绑定到 MKL 2019.0.5；修复前两轮 1 失败、2 通过，修复后两轮 3 个全通过。已检查实际函数绑定到 MKL。",
      "requirements": "复用精确 Base/Gold Paddle 库，将数学运算绑定到 MKL 2019.0.5。结论限此运行组合，没有重新编译完整 MKL 版 Paddle。",
      "problemTests": [
        "test.legacy_test.test_multi_dot_op.TestMultiDotOp_ZeroSize1::test_check_output"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
        {
          "name": "test.legacy_test.test_multi_dot_op.TestMultiDotOp_ZeroSize1::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "effective": true,
          "explanation": "修复前两轮失败、修复后两轮通过：F2P。"
        },
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
          "effective": true,
          "explanation": "修复前后各两轮通过：P2P。"
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
          "effective": true,
          "explanation": "修复前后各两轮通过：P2P。"
        }
      ]
    },
    {
      "id": 73125,
      "title": "det / slogdet zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 4,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "det/slogdet 的空张量测试已通过。",
      "whatFailed": "det/slogdet 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。未修复版本在空张量梯度计算时中途退出，这是该题要修的原始问题。将后续输出测试单独拆出来又会触发“本组没有做梯度检查”的收尾检查，因此不能把这两项算成已确认 P2P，也不能说参考补丁仍失败。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 2 项修复前失败后通过、4 项修复前后都通过。完整参考补丁运行 8 项均通过；新跑未修复版本的完整原脚本两轮都在空张量梯度测试中退出（返回 136）。后续两项输出测试无法取得完整结束记录，暂不计入 F/P。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。",
      "problemTests": [
        "test/legacy_test/test_determinant_op.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "测试主体之后的清理未正常完成，不能只按主体结果计通过。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "测试主体之后的清理未正常完成，不能只按主体结果计通过。",
          "effective": true
        }
      ]
    },
    {
      "id": 73385,
      "title": "svdvals / eigvals zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 4,
      "p2p": 4,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "eigvals/svdvals 的空张量测试已通过。",
      "whatFailed": "eigvals/svdvals 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 4 项修复前失败后通过、4 项修复前后都通过。Base 的一项空张量特征值测试会中途退出且返回 0；必须核对测试结束记录，不能只看进程返回值。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。",
      "problemTests": [
        "test/legacy_test/test_eigvals_op.py",
        "test/legacy_test/test_svdvals_op.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
        {
          "name": "test/legacy_test/test_eigvals_op.py::TestEigvalsOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_svdvals_op.py::TestSvdvalsOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_svdvals_op.py::TestSvdvalsOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_svdvals_op.py::TestSvdvalsOp::test_svdvals_forward",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_eigvals_op.py::TestEigvalsOp_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_eigvals_op.py::TestEigvalsOp_ZeroSize2::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_svdvals_op.py::TestSvdvalsOp_ZeroSize::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_svdvals_op.py::TestSvdvalsOp_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 73387,
      "title": "gather_tree zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "gather_tree 的空张量测试已通过。",
      "whatFailed": "gather_tree 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 2 项修复前失败后通过、1 项修复前后都通过。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。",
      "problemTests": [
        "test/legacy_test/test_gather_tree_op.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
        {
          "name": "test/legacy_test/test_gather_tree_op.py::TestGatherTreeOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_gather_tree_op.py::TestGatherTreeOp_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_gather_tree_op.py::TestGatherTreeOp_ZeroSize2::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 73535,
      "title": "conv1d CPU FP16 accuracy",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 1,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 73569,
      "title": "matmul 1-D transpose gradient",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 2,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "matmul 矩阵乘法的空张量测试已通过。",
      "whatFailed": "matmul 矩阵乘法的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 1 项修复前失败后通过、2 项修复前后都通过。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。",
      "problemTests": [
        "test/legacy_test/test_matmul_v2_op.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 73570,
      "title": "masked_fill zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 3,
      "p2p": 4,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 3 项、回归测试 4 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 73582,
      "title": "squeeze / full zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 3,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 73691,
      "title": "conv1d / conv2d / conv3d zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 3,
      "p2p": 3,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 73702,
      "title": "gather_nd zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 2,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 73776,
      "title": "svd_lowrank zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 2,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 1 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 73821,
      "title": "pad zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 3,
      "p2p": 2,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 3 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 73850,
      "title": "triangular_solve zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 3,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 1 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 73854,
      "title": "instance_norm zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 3,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 73855,
      "title": "dice_loss zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 1,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 73880,
      "title": "softmax_with_cross_entropy zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 4,
      "p2p": 2,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 4 项、回归测试 2 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 74184,
      "title": "pinv zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 5,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "pinv 的空张量测试已通过。",
      "whatFailed": "pinv 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 2 项修复前失败后通过、5 项修复前后都通过。非 Hermitian 的两个空张量用例在 Base 就能通过，实际属于 P2P。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用 README 允许的兼容 CPU 运行库，并加载该 task 的准确 Python 改动。",
      "problemTests": [
        "test/legacy_test/test_linalg_pinv_op.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 74212,
      "title": "multiplex zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 5,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "multiplex 的空张量测试已通过。",
      "whatFailed": "multiplex 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 2 项修复前失败后通过、5 项修复前后都通过。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。",
      "problemTests": [
        "test/legacy_test/test_multiplex_op.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
        {
          "name": "test/legacy_test/test_multiplex_op.py::TestMultiplexOp_ZeroSize::test_check_grad",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_multiplex_op.py::TestMultiplexOp_ZeroSize::test_check_output",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_multiplex_op.py::TestMultiplexOp::test_check_grad",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_multiplex_op.py::TestMultiplexOp::test_check_grad_ignore_x1",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_multiplex_op.py::TestMultiplexOp::test_check_grad_ignore_x1_x2",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_multiplex_op.py::TestMultiplexOp::test_check_grad_ignore_x3",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_multiplex_op.py::TestMultiplexOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 74221,
      "title": "fold zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 2,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "fold 的输入检查测试已通过。",
      "whatFailed": "fold 的输入检查测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 1 项修复前失败后通过、2 项修复前后都通过。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用 README 允许的兼容 CPU 运行库，并加载该 task 的准确 Python 改动。",
      "problemTests": [
        "test/legacy_test/test_fold_op.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 74305,
      "title": "unique zero-size Tensor",
      "type": "bugfix",
      "author": "co63oc",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 1,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "unique 的空张量测试已通过。",
      "whatFailed": "unique 的空张量测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 1 项修复前失败后通过、1 项修复前后都通过。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用 README 允许的兼容 CPU 运行库，并加载该 task 的准确 Python 改动。",
      "problemTests": [
        "test/legacy_test/test_unique.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 74421,
      "title": "msort API compatibility",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 74439,
      "title": "ravel API compatibility",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 74444,
      "title": "dropout1d API compatibility",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 74491,
      "title": "Tensor.requires_grad compatibility",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 74586,
      "title": "scatter_add API compatibility",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 74594,
      "title": "broadcast_shapes API compatibility",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 75274,
      "title": "Normal distribution unittest fix",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 76259,
      "title": "Windows UTF-8 inference paths",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "failed",
      "packageChangeRequired": true,
      "f2p": null,
      "p2p": null,
      "evidence": "patch_preflight",
      "corePassed": false,
      "cause": "data",
      "summary": "参考补丁对不上题目指定的代码版本，测试还没有开始。",
      "whatFailed": "solution/code.patch 无法修改 paddle/fluid/inference/api/helper.h 的开头。",
      "why": "补丁要求文件开头按 algorithm、fstream、iostream 的顺序排列；指定 Base 实际是 glog、sys/stat、fstream 等另一套内容，补丁找不到要替换的位置。 先打测试补丁或先打参考补丁都失败；这是数据包的版本与补丁不匹配，换 CPU/GPU 或 Python 都不会修好。",
      "fix": "基于 README 声明的 Base 重新生成参考补丁，并确保所需前置改动齐全；两种状态构建成功后再跑 F2P/P2P。",
      "proof": "在指定 Base 上单独检查两种补丁应用顺序，均在同一文件失败；对照文件内容确认上下文不匹配。测试尚未启动。",
      "requirements": "先修正补丁；随后按任务要求用 Windows CPU / MSVC x64 构建验证，Linux 测试不能替代。",
      "problemTests": [
        "solution/code.patch",
        "paddle/fluid/inference/api/helper.h"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": []
    },
    {
      "id": 76522,
      "title": "Torch proxy compat override registration",
      "type": "refactor",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 76736,
      "title": "atan2 C++ sinking",
      "type": "feature",
      "author": "Manfredss",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 3,
      "p2p": 7,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 3 项、回归测试 7 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 76873,
      "title": "Activation APIs inplace support",
      "type": "feature",
      "author": "yangguohao",
      "status": "incomplete",
      "packageChangeRequired": true,
      "f2p": 9,
      "p2p": 14,
      "evidence": "exact_native",
      "corePassed": false,
      "cause": "mixed",
      "summary": "环境缺 CINN，另有数值比较和测试导入问题；完整验证未完成。",
      "whatFailed": "7 项符号形状测试读不到形状信息；1 项 SELU 测试在接近零的数值上超过比较阈值。任务入口还把两组同名辅助模块混在一起导入。",
      "why": "当前 Paddle 没编入 CINN，生成形状信息的代码根本不执行。SELU 的 CPU 结果与测试参考值有舍入差异，但相同输入下修复前后完全一致，尚不能归为补丁错误。两组测试各有一个 utils 文件，需要隔离导入。",
      "fix": "准备带 CINN 的同版本构建，把两组测试分进程运行；核定 SELU 在零附近的数值参考和精度要求，再跑完整范围。不能直接放宽误差阈值算通过。",
      "proof": "31 个节点按原范围分组各跑两轮，确认 7 项缺 CINN、1 项数值差异。另用 5 组固定输入对照，普通/原地 SELU 和修复前后输出均相同；已定位差异来自零附近的浮点计算。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [
        "test.ir.pir.cinn.symbolic.test_infer_sym_shape_multinary_op.CELUOpInferSymbolicShapeTest::test_eval_symbolic",
        "test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.HardSigmoidInferSymbolicShapeTest::test_eval_symbolic",
        "test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.MishOpInferSymbolicShapeTest::test_eval_symbolic",
        "test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.RRELUOpInferSymbolicShapeTest::test_eval_symbolic",
        "test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SELUOpInferSymbolicShapeTest::test_eval_symbolic",
        "test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SwishOpInferSymbolicShapeTest::test_eval_symbolic",
        "test.ir.pir.cinn.symbolic.test_infer_sym_shape_unary_op.SumOpInferSymbolicShapeTest::test_eval_symbolic",
        "test.legacy_test.test_selu_op.TestSELUOpClass_Inplace::test_cases",
        "tests/test.sh"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。",
          "effective": true
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
          "explanation": "当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。",
          "effective": true
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
          "explanation": "当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。",
          "effective": true
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
          "explanation": "当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。",
          "effective": true
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
          "explanation": "当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。",
          "effective": true
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
          "explanation": "当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "750个数中有1个很接近0，CPU结果与NumPy参考值的舍入差异超过测试阈值。相同输入下，普通SELU和原地SELU完全一致，修复前后也完全一致；没有发现本题补丁引入数值变化。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "当前Paddle编译包不带CINN。生成测试所需形状说明的那段C++代码在无CINN时直接不执行，因此7项读取形状说明时报错，尚未测到补丁对不对。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 77064,
      "title": "allclose C++ sinking",
      "type": "feature",
      "author": "Manfredss",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 4,
      "p2p": 19,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "allclose 参数别名和返回类型测试已通过。",
      "whatFailed": "allclose 参数别名和返回类型测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 4 项修复前失败后通过、19 项修复前后都通过。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。",
      "problemTests": [
        "test/legacy_test/test_allclose_op.py",
        "test/legacy_test/test_compat_allclose.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOp::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpException::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpSmallNum::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpNanFalse::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpNanTrue::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseDygraph::test_api_case",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseError::test_input_dtype",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpFp16::test_fp16",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpFloat16::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpFloat32::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpFloat64::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpBool::test_close_False",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpBool::test_close_True",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpInt32::test_close_False",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpInt32::test_close_True",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpInt64::test_close_False",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpInt64::test_close_True",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOpLargeDimInput::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseOp_ZeroSize::test_check_output",
          "base": [
            "passed",
            "passed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseAlias::test_alias",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_allclose_op.py::TestAllcloseAlias::test_tensor_method_alias",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_compat_allclose.py::TestCompatAllclose::test_allclose_args",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_compat_allclose.py::TestCompatAllclose::test_allclose_return_bool",
          "base": [
            "failed",
            "failed"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 77078,
      "title": "inverse C++ sinking",
      "type": "feature",
      "author": "Manfredss",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 3,
      "p2p": 33,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 3 项、回归测试 33 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 77150,
      "title": "PyLayer grad-node attribute copy",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 1,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 77495,
      "title": "MaxPool dilation option",
      "type": "feature",
      "author": "jinyouzhi",
      "status": "failed",
      "packageChangeRequired": true,
      "f2p": null,
      "p2p": null,
      "evidence": "patch_preflight",
      "corePassed": false,
      "cause": "data",
      "summary": "参考补丁来自另一套池化接口，套不到题目指定的代码版本；测试还没有开始。",
      "whatFailed": "python/paddle/nn/functional/pooling.py、python/paddle/nn/layer/pooling.py 的补丁不匹配。 补丁要修改的 test/legacy_test/test_max_pool_dilation.py 在指定 Base 中不存在。",
      "why": "补丁假定 max_pool 系列接口已经有 dilation 参数，指定 Base 却还没有这个参数；它还依赖一个 Base 中不存在的测试文件。 两种补丁应用顺序都失败，证明不是打补丁顺序或机器环境造成的。",
      "fix": "基于 README 声明的 Base 重新生成参考补丁，并确保所需前置改动齐全；两种状态构建成功后再跑 F2P/P2P。",
      "proof": "在指定 Base 上尝试两种补丁应用顺序，均失败；逐段对照池化接口，确认缺少前置参数和测试文件。测试尚未启动。",
      "requirements": "必须先成功应用补丁，再编译和运行测试。",
      "problemTests": [
        "solution/code.patch",
        "python/paddle/nn/functional/pooling.py",
        "python/paddle/nn/layer/pooling.py",
        "test/legacy_test/test_max_pool_dilation.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": []
    },
    {
      "id": 77749,
      "title": "pad_sequence / unpad_sequence",
      "type": "feature",
      "author": "Manfredss",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 21,
      "p2p": 1,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 21 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 78048,
      "title": "dsplit / hsplit / vsplit parameter aliases",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 3,
      "p2p": 3,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 78082,
      "title": "ParameterDict pop / values / keys",
      "type": "feature",
      "author": "Manfredss",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 9,
      "p2p": 23,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 9 项、回归测试 23 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 78104,
      "title": "CUDA device conversion from Tensor place",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 78138,
      "title": "pixel_shuffle C++ sinking",
      "type": "feature",
      "author": "Manfredss",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 15,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 15 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "按测试自身的运行条件跳过，不计有效 F2P/P2P。",
          "effective": false
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 78238,
      "title": "put_along_axis zero-size indices",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 78301,
      "title": "Layer.to / Tensor.to compatibility",
      "type": "feature",
      "author": "Manfredss",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 13,
      "p2p": 21,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 13 项、回归测试 21 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 78342,
      "title": "paddle._assert API",
      "type": "feature",
      "author": "Manfredss",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 7,
      "p2p": 24,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 7 项、回归测试 24 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 78440,
      "title": "cdist zero-size Tensor handling",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 78441,
      "title": "aminmax operator",
      "type": "feature",
      "author": "Manfredss",
      "status": "needs_fix",
      "packageChangeRequired": true,
      "f2p": 26,
      "p2p": 4,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "data",
      "summary": "修复后完整脚本通过；其中一条“梯度测试”是空的，不能算有效 F2P。",
      "whatFailed": "TestAminmaxOpFloat32::test_check_grad 的测试内容只有 pass，没有检查任何结果。",
      "why": "这条测试在修复前因为 aminmax API 不存在而准备失败；修复后只是执行了空函数。这个“先失败再通过”不能证明梯度正确。其他梯度测试有实际检查。",
      "fix": "给这条测试补上可靠的梯度断言，或明确标成跳过并从 F2P 数量中去掉；同时把说明改为 26 条有效 F2P、4 条 P2P。",
      "proof": "逐行核对测试补丁并用 Python 语法树确认空函数；完整 31 个节点在修复后两轮都通过，去掉空测试后有 26 条有效 F2P、4 条 P2P。",
      "requirements": "精确源码构建的 CPU Paddle，启用 CINN；任务脚本已包含所需测试路径和运行开关。",
      "problemTests": [
        "test/legacy_test/test_aminmax_op.py::TestAminmaxOpFloat32::test_check_grad"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "测试函数只有 pass，无有效断言，不计入有效 F2P。",
          "effective": false
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        },
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 78452,
      "title": "paddle.load dataclass objects",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 16,
      "p2p": 27,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 16 项、回归测试 27 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 78522,
      "title": "distributed launch os.kill",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 3,
      "p2p": 1,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 78570,
      "title": "Optimizer.step closure compatibility",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 6,
      "p2p": 3,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 6 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 78823,
      "title": "pin_memory support for random APIs",
      "type": "bugfix",
      "author": "Manfredss",
      "status": "incomplete",
      "packageChangeRequired": false,
      "f2p": null,
      "p2p": null,
      "evidence": "environment_incomplete",
      "corePassed": false,
      "cause": "machine",
      "summary": "CPU 能检查的部分已通过；真正的锁页内存分配需要 CUDA 或 XPU，当前机器没有这些设备。",
      "whatFailed": "TestToPinnedPlace::test_already_cuda_pinned_returns_same_object、test_cpu_place_on_cuda_build、test_cuda_place_to_cuda_pinned 均未执行。 还缺实际设备上的 pinned 分配、CPU 到 pinned 内存转换和设备地址转换结果。",
      "why": "CPU构建没有这类设备锁页内存分配器；通过CPU异常分支或模拟分支不能证明实际设备分配正确。 Base缺少本题新增的 _to_pinned_place，整个模块在导入时失败；因此不能把Gold新增4项CPU通过直接写成4个逐测试F2P。",
      "fix": "在符合题目要求的设备上，保持相同 Base、参考补丁和测试范围，各跑两轮；保留已完成的 CPU 结果。",
      "proof": "检查任务对 CUDA/XPU 的要求、当前设备和测试条件分支。当前只有 CPU 运行结果，3 个 CUDA 锁页内存测试明确跳过，真实设备分配尚未执行。",
      "requirements": "至少一张CUDA或XPU设备和匹配的Paddle构建；按实际后端允许另一后端条件跳过",
      "problemTests": [
        "test/legacy_test/test_randperm_op.py::TestRandpermBF16Op::test_check_output",
        "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_already_cuda_pinned_returns_same_object",
        "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cpu_place_on_cuda_build",
        "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cuda_place_to_cuda_pinned"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "此节点有跳过结果；当前 CPU 构建未执行所需的设备分支，跳过不算通过。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
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
          "explanation": "CPU 子集四轮观察为通过；设备分支未验证，条件空返回不代表执行了设备断言。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_already_cuda_pinned_returns_same_object",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "完整结果尚未通过，具体原因见本题说明。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cpu_place_on_cuda_build",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "完整结果尚未通过，具体原因见本题说明。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cpu_place_on_pure_cpu_build_raises",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复后通过；修复前存在缺失、跳过或未配对结果，不能计为有效 F2P/P2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cpu_place_on_xpu_compiled_branch",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复后通过；修复前存在缺失、跳过或未配对结果，不能计为有效 F2P/P2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_cuda_place_to_cuda_pinned",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "skipped",
            "skipped"
          ],
          "explanation": "完整结果尚未通过，具体原因见本题说明。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_unsupported_place_raises",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复后通过；修复前存在缺失、跳过或未配对结果，不能计为有效 F2P/P2P。",
          "effective": true
        },
        {
          "name": "test/legacy_test/test_to_pinned_place.py::TestToPinnedPlace::test_xpu_place_branch",
          "base": [
            "missing",
            "missing"
          ],
          "gold": [
            "passed",
            "passed"
          ],
          "explanation": "修复后通过；修复前存在缺失、跳过或未配对结果，不能计为有效 F2P/P2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 78911,
      "title": "Recompute context detection",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 78922,
      "title": "Flex checkpoint flatten_state_dict lifetime",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 1,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 78932,
      "title": "TensorDataset varargs and alias",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 3,
      "p2p": 3,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 3 项、回归测试 3 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 79035,
      "title": "Optimizer LR scheduler aliases",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 79057,
      "title": "RestrictedUnpickler MRO security",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 79161,
      "title": "set_rng_state parameter alias",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 79167,
      "title": "random.initial_seed alias",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 79197,
      "title": "LR scheduler optimizer argument",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 6,
      "p2p": 1,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "学习率调度器接收优化器参数测试已通过。",
      "whatFailed": "学习率调度器接收优化器参数测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 6 项修复前失败后通过、1 项修复前后都通过。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；使用 README 允许的兼容 CPU 运行库，并加载该 task 的准确 Python 改动。",
      "problemTests": [
        "test/legacy_test/test_lr_scheduler.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 79268,
      "title": "DistributedSampler alias",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 79275,
      "title": "flex_attention or_masks / and_masks",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 3,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 3 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 79276,
      "title": "add_n zero-size shape validation",
      "type": "bugfix",
      "author": "wwaawwaaee",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 2,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "verification",
      "summary": "add_n 混合空张量输入测试已通过。",
      "whatFailed": "add_n 混合空张量输入测试已通过。补齐测试工具的搜索路径后，原 test.sh 两轮均成功。",
      "why": "验证器没有带上 Paddle 单元测试需要的搜索路径，Python 找不到 op_test（Paddle 自带的测试工具），所以测试还没开始就停了。补上路径后，同一份补丁和测试通过。",
      "fix": "在验证器启动测试时，将 Paddle 源码的 test/legacy_test 和 test 加入 PYTHONPATH；保留 Paddle 运行库路径。无需修改参考补丁或测试断言。",
      "proof": "相同参考补丁、相同测试文件、相同选择范围，仅补测试路径；完整入口两轮均返回 0。已确认 1 项修复前失败后通过、2 项修复前后都通过。",
      "requirements": "从 Paddle 源码根目录运行原 tests/test.sh。；PYTHONPATH 加入 <Paddle源码>/test/legacy_test 和 <Paddle源码>/test；这里提供 op_test.py 和 white_list 包。；加载该 Base/参考补丁对应的已编译 CPU Paddle 运行库。",
      "problemTests": [
        "test/legacy_test/test_add_n_op.py"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
      "checks": [
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 79310,
      "title": "nn.init.sparse_",
      "type": "feature",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 4,
      "p2p": 1,
      "evidence": "lightweight_source",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 4 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "按任务约定的轻量源码路线验证，没有执行完整 Paddle 原生构建。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 79321,
      "title": "Layer.set_state_dict named return fields",
      "type": "feature",
      "author": "wwaawwaaee",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 1,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 79353,
      "title": "P2P local_var bug",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 79369,
      "title": "check_memory_usage logging",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 1,
      "p2p": 1,
      "evidence": "exact_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 1 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
        }
      ]
    },
    {
      "id": 79386,
      "title": "iinfo uint64 maximum boundary",
      "type": "bugfix",
      "author": "wwaawwaaee",
      "status": "failed",
      "packageChangeRequired": true,
      "f2p": 0,
      "p2p": 3,
      "evidence": "exact_native",
      "corePassed": false,
      "cause": "data",
      "summary": "指定版本在当前 Linux 环境已能算对，未复现目标缺陷。",
      "whatFailed": "TestIInfoUInt64Boundary::test_uint64_max_preserves_unsigned_boundary 修复前已通过；另两项回归也通过。",
      "why": "指定 Base 的 iinfo.max 本来就是 uint64_t；实际编译使用的 pybind 会按无符号整数把它传给 Python，不会变成 -1。 同一份当前测试、分别对应 Base/Gold 的原生库各跑两轮，3 项全部通过；实际值都是 18446744073709551615。没有发生导入失败、跳过或机器异常。",
      "fix": "提供确实会返回错误值的 Base 或明确可复现的平台/依赖组合，再固定成任务环境；不能为了制造失败改断言。",
      "proof": "精确 Base/Gold 库配合完整 3 个测试各跑两轮，全部通过；核对无符号整数类型和 Python 转换代码，确认两边都返回 18446744073709551615。",
      "requirements": "使用记录中的精确 Base/Gold 源码构建的 Paddle，按任务要求选择 CPU 或设备测试。",
      "problemTests": [
        "test/legacy_test/test_iinfo_and_finfo.py::TestIInfoUInt64Boundary::test_uint64_max_preserves_unsigned_boundary"
      ],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "Base、Gold 各两轮都通过。可作 P2P 回归观察；并无 Gold 失败。",
          "effective": true
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
          "explanation": "Base、Gold 各两轮都通过。可作 P2P 回归观察；并无 Gold 失败。",
          "effective": true
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
          "explanation": "Base、Gold 各两轮都通过。该预期 F2P 节点在修复前已通过，未复现目标缺陷。",
          "effective": true
        }
      ]
    },
    {
      "id": 79633,
      "title": "Distributed launch KV server concurrency",
      "type": "bugfix",
      "author": "Echo-Nie",
      "status": "passed",
      "packageChangeRequired": false,
      "f2p": 2,
      "p2p": 1,
      "evidence": "exact_python_compatible_native",
      "corePassed": true,
      "cause": "none",
      "summary": "缺陷测试 2 项、回归测试 1 项均有稳定配对，原入口可运行。",
      "whatFailed": "所选测试的 F2P/P2P 配对成立，任务脚本可运行。",
      "why": "缺陷测试在修复前失败、修复后通过，回归测试在两边均通过。",
      "fix": "按任务说明与下列运行方式使用。",
      "proof": "核对原始测试日志和逐项配对结果，修复前后各有两轮记录。",
      "requirements": "选定版本的 Python 源码配合兼容的 Paddle 底层运行时；结论限此运行方式。",
      "problemTests": [],
      "countsNote": "只统计实际执行且有效的测试；跳过、空检查及未配对项不计入。",
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前两轮失败、修复后两轮通过，属于 F2P。",
          "effective": true
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
          "explanation": "修复前后均通过，属于回归测试 P2P，不能证明复现了待修缺陷。",
          "effective": true
        }
      ]
    }
  ]
};
