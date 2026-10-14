#!/usr/bin/env python3
"""Project existing Oracle observations; never start or change evaluation jobs."""
import argparse
from collections import Counter
import datetime
import hashlib
import json
from pathlib import Path
import re

SITE = Path(__file__).resolve().parents[1]
LIMIT = 16 * 1024 * 1024
FIELDS = ('passed', 'failed', 'error', 'skipped')


def load(path):
    path = Path(path)
    assert path.is_file() and not path.is_symlink() and path.stat().st_size < LIMIT
    content = path.read_bytes()
    return json.loads(content.decode()), dict(path=str(path), bytes=len(content),
        sha256=hashlib.sha256(content).hexdigest())


def stamp(value):
    value = str(value or '')
    if re.match(r'^\d{8}T\d{6}Z', value):
        return datetime.datetime.strptime(value[:16], '%Y%m%dT%H%M%SZ').isoformat() + 'Z'
    if re.match(r'^\d{4}-\d{2}-\d{2}T', value):
        return value[:19] + 'Z'
    return ''


def counts(value):
    if not isinstance(value, dict) or not all(type(value.get(k)) is int and value[k] >= 0 for k in FIELDS):
        return None
    return {k: value[k] for k in FIELDS}


def record(rounds, exit_key, when, entry, reference, complete=None):
    result = []
    for item in rounds:
        result.append(dict(counts=counts(item.get('counts')),
            complete=item.get('complete') is True if complete is None else complete,
            shellExit=item.get(exit_key)))
    passed = len(result) == 2 and all(z['complete'] and z['counts'] and
        z['counts']['passed'] > 0 and z['counts']['failed'] == z['counts']['error'] == 0 and
        z['shellExit'] == 0 for z in result)
    observed_failure = any((z['shellExit'] not in (None, 0)) or
        (z['counts'] and (z['counts']['failed'] or z['counts']['error'])) for z in result)
    return dict(date=stamp(when), entry=entry, rounds=result,
        result='passed' if passed else 'failed' if observed_failure else 'incomplete',
        source=reference)


def summary(item):
    rounds = item.get('rounds') or []
    if len(rounds) == 2 and all(z['counts'] for z in rounds):
        values = []
        for z in rounds:
            c = z['counts']
            values.append('%d 通过 / %d 失败 / %d 错误 / %d 跳过' % tuple(c[k] for k in FIELDS))
        return '两轮各 ' + values[0] if values[0] == values[1] else '第 1 轮 ' + values[0] + '；第 2 轮 ' + values[1]
    exits = [z['shellExit'] for z in rounds]
    if any(z in (134, -6) for z in exits):
        return '测试异常退出（SIGABRT），完整测试计数未闭合'
    if any(z in (139, -11) for z in exits):
        return '测试崩溃（SIGSEGV），完整测试计数未闭合'
    return '完整测试结果尚未确认'


def new_task(number, root):
    text = (root / 'community/swe-paddle/tasks' / ('PaddlePaddle__Paddle-%d' % number) / 'README.md').read_text()
    title = re.search(r'\| (?:PR title|PR 标题) \| `([^`]+)`', text)
    topics = {59910: 'PIR distribution.Normal', 60346: 'PIR LookAhead optimizer',
        62012: 'SOT resume function generation', 78085: '模型保存与加载兼容性',
        78728: 'recompute context', 79657: 'CUDA min/max backward indexing'}
    return dict(id=number, title=title.group(1) if title else topics[number], type='feature',
        author='unknown', status='incomplete', packageChangeRequired=False,
        f2p=None, p2p=None, evidence='environment_incomplete', corePassed=False,
        cause='verification', summary='', whatFailed='', why='', fix='', proof='',
        requirements='遵循该任务的运行入口、测试范围及设备条件。',
        problemTests=[], countsNote='F2P/P2P 需独立的 Base/Gold 配对；Gold 通过不能代替配对。', checks=[])


def apply_progress_notes(data):
    notes, _ = load(SITE / 'scripts/validation-progress-notes.json')
    for task in data['tasks']:
        task.pop('validationProgress', None)
        note = notes.get(str(task['id']))
        if not note or task['status'] != note['status'] or task['oracle']['date'] != note['resultDate']:
            continue
        task['validationProgress'] = {key: note[key] for key in ('meaning', 'completed', 'problem', 'remaining')}
        task['validationProgress']['resultDate'] = note['resultDate']
        task['summary'] = ('Oracle 已通过：' if task['oracle']['passed'] else 'Oracle 尚未通过：') + note['meaning'] + '。'
        task['whatFailed'] = note['problem']
        task['why'] = note['why']
        task['fix'] = note['remaining']
        task['cause'] = note['cause']
        if note.get('requirements'):
            task['requirements'] = note['requirements']
        task['problemTests'] = list(dict.fromkeys(task['problemTests'] + note.get('tests', [])))
    data['meta']['explanationsReviewedAt'] = (datetime.datetime.utcnow() + datetime.timedelta(hours=8)).strftime('%Y-%m-%d')


def write_public(data):
    serialized = json.dumps(data, ensure_ascii=False, indent=2) + ';\n'
    assert not any(s in serialized for s in ('/home/', '/data/home/', 'container_id', 'LIBINFER_', 'ugate', 'candidate.patch'))
    (SITE / 'docs/assets/latest-data.js').write_text('window.SWE_PADDLE_LATEST = ' + serialized)
    passed = data['oracleSummary']['passed']
    total = data['meta']['total']
    labels = dict(passed='Oracle 通过', needs_fix='Oracle 已通过，运行说明待同步', failed='Oracle 测试失败', incomplete='完整验证未完成')
    lines = ['# SWE-Paddle 最新验证情况', '', '结果截至：' + data['meta']['resultsAsOf'] + '。', '',
        '**Oracle 累计通过 %d / %d 题（%.1f%%）；其余 %d 题尚未确认通过。**' % (passed, total, 100.0*passed/total, total-passed), '',
        data['oracleSummary']['note'], '',
        'Oracle 指官方参考补丁（Gold）的测试结果。“运行说明待同步”表示正确入口已经完整通过，只需同步运行说明，已计入累计通过。“完整验证未完成”表示缺少完整可确认结果，可能已尝试、做过补测或遇到环境阻断，不等于从未验证。', '',
        'Oracle 通过适用于各题注明的测试范围；硬件跳过不代表该分支通过。Gold 通过不自动证明 F2P/P2P 配对。已有配对明细保留其确认日期。', '',
        '## 尚未通过题的实际进展', '', '| 任务 | 实际含义 | 已做验证 | 遇到的问题 | 还需完成 |', '| --- | --- | --- | --- | --- |']
    for task in data['tasks']:
        if task['oracle']['passed']:
            continue
        progress = task.get('validationProgress')
        values = ([progress[key] for key in ('meaning', 'completed', 'problem', 'remaining')] if progress else
            [task['summary'], task['proof'], task['whatFailed'], task['fix']])
        lines.append('| #%d | %s |' % (task['id'], ' | '.join(value.replace('|', '\\|') for value in values)))
    lines.extend(['', '## 全部任务的 Oracle 结果', '', '| 任务 | Oracle 状态 | 两轮结果 |', '| --- | --- | --- |'])
    for task in data['tasks']:
        lines.append('| #%d | %s | %s |' % (task['id'], labels[task['status']], task['oracle']['summary']))
    for task in data['tasks']:
        lines.extend(['', '<a id="task-%d"></a>' % task['id'], '', '## #%d · %s' % (task['id'], task['title']), '', task['summary']])
        if task.get('validationProgress'):
            progress = task['validationProgress']
            lines.extend(['', '**已做验证：** ' + progress['completed'], '', '**遇到的问题：** ' + progress['problem'], '',
                '**还需完成：** ' + progress['remaining']])
        lines.extend(['', task['whatFailed'], '', '**原因：** ' + task['why'], '', '**处理：** ' + task['fix'], '',
            '**确认方法：** ' + task['proof'], '', '**运行条件：** ' + task['requirements'], '',
            '**Oracle 入口：** ' + task['oracle']['entry'], '', '**Oracle 确认时间：** ' + (task['oracle']['date'] or '尚未确认')])
        if task['oracle']['activity']:
            lines.extend(['', '**当前任务：** ' + task['oracle']['activity']])
        if not task['checks'] and task.get('countsNote'):
            lines.extend(['', '**计数说明：** ' + task['countsNote']])
        if task['checks']:
            lines.extend(['', '**已有 F2P/P2P 配对记录：** %s / %s，确认日期 %s。' % (task['f2p'], task['p2p'], task['pairedResultDate']), '',
                task['countsNote'], '', '| 测试 | Base 两轮 | Gold 两轮 | 说明 |', '| --- | --- | --- | --- |'])
            for check in task['checks']:
                lines.append('| %s | %s | %s | %s |' % (check['name'].replace('|', '\\|'),
                    ' / '.join(check['base']), ' / '.join(check['gold']), check['explanation'].replace('|', '\\|')))
    (SITE / 'docs/latest-report.md').write_text('\n'.join(lines) + '\n')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--eval-root', type=Path)
    parser.add_argument('--audit', type=Path)
    parser.add_argument('--notes-only', action='store_true', help='Update explanations from existing public results without reading or running evaluation jobs')
    args = parser.parse_args()
    if args.notes_only:
        data = json.loads((SITE / 'docs/assets/latest-data.js').read_text().split('=', 1)[1].strip().rstrip(';'))
        def outcome_projection():
            return json.dumps(dict(oracleSummary=data['oracleSummary'], counts=data['counts'], resultsAsOf=data['meta']['resultsAsOf'],
                tasks=[{key: task[key] for key in ('id', 'status', 'oracle', 'checks', 'f2p', 'p2p', 'corePassed')} for task in data['tasks']]), sort_keys=True)
        before = outcome_projection()
        apply_progress_notes(data)
        assert outcome_projection() == before, 'Explanation update changed recorded outcomes'
        assert all(task.get('validationProgress') for task in data['tasks'] if task['status'] != 'passed'), 'Unmatched result date; review the changed observations first'
        write_public(data)
        print(json.dumps(dict(explanations=sum(bool(t.get('validationProgress')) for t in data['tasks']),
            oracle_passed=data['oracleSummary']['passed'], evaluation_jobs_started=False)))
        return
    if args.eval_root is None or args.audit is None:
        parser.error('--eval-root and --audit are required unless --notes-only is used')
    root = args.eval_root.resolve()
    args.audit.mkdir(parents=True, exist_ok=True)
    native, native_ref = load(root / 'reports/native-full-build-current-v1.json')
    canonical_path = max((root / 'reports').glob('all111-current-canonical-dispositions*.json'), key=lambda p: p.stat().st_mtime)
    canonical, canonical_ref = load(canonical_path)
    direct, direct_ref = load(root / 'reports/all111-static-main-entry-actual-coverage-readonly-20261012-v2.json')
    flag, flag_ref = load(root / 'reports/pr57741-fresh-Gold-flag1-bootstrap-complete-Original5-strict-readonly-actual-20261012-v1.json')
    dispatch, dispatch_ref = load(root / 'reports/task-check-policy-dispatch-current-v2.json')
    source_data = (SITE / 'docs/assets/latest-data.js').read_text()
    data = json.loads(source_data.split('=', 1)[1].strip().rstrip(';'))
    tasks = {t['id']: t for t in data['tasks']}
    original_public_ids = {t['id'] for t in data['tasks'] if t.get('taskFilesAvailable', True)}
    ids = {int(t['number']) for t in canonical['tasks']}
    assert len(ids) == 111
    # The canonical input covers the original cohort. Keep later published tasks
    # with their own frozen source and observations outside that input's scope.
    assert all(tasks[number].get('sourceSnapshot') for number in set(tasks) - ids)
    records = {number: [] for number in ids}
    private = []
    for item in canonical['tasks']:
        number = int(item['number'])
        if number not in tasks:
            tasks[number] = new_task(number, root)
        role = item['canonical_roles'].get('gold')
        if not role:
            continue
        state = role.get('Docker_state_recorded_by_original_actor') or {}
        records[number].append(record(role.get('original_rounds') or [], 'shell_signed_exit',
            state.get('FinishedAt') or Path(role['run']).name, '原 tests/test.sh', 'canonical'))
    for item in native['task_check_policy_observations']:
        if item['role'] != 'gold':
            continue
        number = int(item['task'].rsplit('-', 1)[-1])
        if number not in ids:
            continue
        state = item.get('terminal_state') or {}
        rec = record(item.get('original_rounds') or [], 'original_shell_signed_exit_code',
            state.get('FinishedAt') or Path(item['run']).name, '原 tests/test.sh', 'runtime')
        records[number].append(rec)
        private.append(dict(task=number, record=rec, run=item['run']))
    for item in direct['Gold_closed_whole_direct_rows']:
        number = int(item['number'])
        assert item['all_main_providers_complete_twice'] is True and item['whole_direct_typed_complete'] is True
        actual, actual_ref = load(item['whole_direct_result_entry']['path'])
        assert actual_ref['sha256'] == item['whole_direct_result_entry']['sha256']
        providers = item['provider_rounds']
        assert providers and all(z['complete'] is True for z in providers)
        grouped = []
        for index in (1, 2):
            selected = [z for z in providers if z['round'] == index]
            assert selected
            total = {key: sum(z['counts'][key] for z in selected) for key in FIELDS}
            assert total == item['counts_by_round'][index - 1]
            grouped.append(dict(complete=True, counts=total,
                exit=0 if item['whole_direct_result'] else None))
        when = (item['actual_terminal_state'] or {}).get('FinishedAt') or Path(item['actual_U_run']).name
        rec = record(grouped, 'exit', when, 'python 直接运行原测试文件（执行 __main__ 初始化）', 'direct')
        assert (rec['result'] == 'passed') == item['whole_direct_result']
        records[number].append(rec)
        private.append(dict(task=number, record=rec, evidence=actual_ref))
    assert flag['runtime_typed_complete_as_recorded'] == [True, True]
    assert flag['independent_flag1_shell_exits'] == [0, 0]
    assert flag['supported_conclusion']['actual_all_five_nodes_accounted'] is True
    flag_rounds = []
    for item in flag['independent_flag1_actual_two_rounds']:
        assert item['runtime_typed_complete_as_recorded'] is True
        flag_rounds.append(dict(complete=True, counts=item['actual_observed_counts'],
            exit=item['actual_shell']['result']['signed_exit_code']))
    rec = record(flag_rounds, 'exit', flag['independent_flag1_actual_two_rounds'][-1]['actual_shell']['result']['finished_at_utc'],
        'FLAGS_enable_new_ir_in_executor=1 + 原 tests/test.sh', 'corrected-entry')
    assert rec['result'] == 'passed'
    records[57741].append(rec)
    private.append(dict(task=57741, record=rec, evidence=flag_ref))
    diagnoses = {
        57827: ('oneDNN pooling backward 描述符创建失败，测试异常退出。',
            '已定位首次异常；实际失败的池化节点、描述符参数和唯一根因仍需继续诊断。'),
        59021: ('TensorArray 测试发生 SIGSEGV，完整原测试尚未通过。',
            '已定位到静态图转换的切片处理边界；不能认定仅更换入口就能解决。'),
        59127: ('最近完整测试崩溃；已确认此前 Python 模块与运行库接口混用。',
            '独立配套构建后的完整测试仍需执行，不能把接口诊断当作已通过。'),
        64881: ('完整直接入口仍有 1 项失败、6 项错误、4 项跳过。',
            '6 项错误涉及 dropout 掩码的维度，另 1 项失败涉及指定随机种子的传递。'),
        76873: ('完整 CINN 测试尚未完成；已有独立补测出现失败。',
            '还需正确隔离同名 utils，并匹配 CINN 构建和设备；已有局部通过不能代替整题。'),
        78823: ('此前导入遇到跨版本接口不匹配，新的配套构建尚无完整通过结果。',
            '最近完整原测试结果尚未闭合，不能把构建进行中或局部 CPU 结果当成通过。'),
        79657: ('CUDA 梯度索引的目标测试尚未完成。',
            '目标缺陷需要匹配的 CUDA 编译包和 NVIDIA 设备；CPU 补测不代表目标 GPU 通过。'),
        76259: ('目前没有完整 Oracle 执行记录。', '需要补齐可执行任务及完整测试记录。'),
    }
    active = {}
    for item in dispatch['actors'].values():
        if item.get('role') == 'gold' and item.get('state') in ('waiting_for_original_terminal', 'dispatch_running'):
            number = int(item['task'].rsplit('-', 1)[-1])
            active[number] = '编译进行中' if item['state'] == 'waiting_for_original_terminal' else '测试进行中'
    for number, task in tasks.items():
        if number not in records:
            continue
        entries = records[number]
        entries.sort(key=lambda z: (z['date'], z['source'] != 'canonical', z['entry'] != '原 tests/test.sh'))
        passed = [z for z in entries if z['result'] == 'passed']
        chosen = passed[-1] if passed else entries[-1] if entries else dict(
            date='', entry='尚未执行完整测试', rounds=[], result='incomplete', source='none')
        latest = entries[-1] if entries else chosen
        note = summary(chosen)
        adjusted = bool(passed) and chosen['source'] in ('direct', 'corrected-entry') and not any(z['entry'] == '原 tests/test.sh' for z in passed)
        task['taskFilesAvailable'] = number in original_public_ids
        task['oracle'] = dict(passed=bool(passed), result=chosen['result'],
            date=chosen['date'], entry=chosen['entry'], rounds=chosen['rounds'],
            summary=note, latestAttempt=latest, activity=active.get(number),
            baselinePassPreserved=bool(passed) and latest['result'] != 'passed')
        task['pairedResultDate'] = '2026-09-11' if task['checks'] else None
        task['status'] = ('needs_fix' if adjusted else 'passed') if passed else (
            'incomplete' if number in (76259, 76873, 78823, 79657) or latest['result'] == 'incomplete' else 'failed')
        task['summary'] = ('Oracle 已执行范围通过：' if passed else 'Oracle 未通过：' if task['status'] == 'failed' else 'Oracle 尚未完成：') + note + '。'
        task['whatFailed'] = ('所注明入口的两轮完整结果已记录。' if passed else diagnoses.get(number, ('测试仍有失败或错误。', '保留失败结果，继续逐项诊断。'))[0])
        task['why'] = ('通过记录按题号去重保留；未执行的硬件分支不计为通过。' if passed else diagnoses.get(number, ('', '保留失败结果，继续逐项诊断。'))[1])
        task['fix'] = ('使用注明的运行入口；跳过项仍需匹配编译能力和设备补测。' if passed else '继续处理该题失败或缺失条件，再运行完整 Oracle。')
        task['proof'] = ('完整范围的实际 Oracle 结果：' if passed else '当前 Oracle 实际观察：') + note + '；入口：' + chosen['entry'] + '。'
        if adjusted:
            task['why'] = '原 pytest 入口遗漏初始化或运行模式；已按注明的入口执行完整原测试，保留原失败记录。'
            task['fix'] = '将已验证的入口和必要运行设置纳入任务说明；不改测试断言。'
        if number in (59715, 62012, 74439, 74444, 74491, 74586, 78728):
            task['requirements'] = '已完成该题配套编译包的安装、导入与原测试；设备覆盖以实际测试结果为准。'
            task['evidence'] = 'exact_native'
        if number == 74444:
            task['proof'] += '独立正常 CPU 补测另有两轮各 6 项通过，不合并到原 3 项中。'
        if number == 78085:
            task['why'] += '独立正常保存、加载兼容性补测曾有 12 项通过、3 项失败，不能由原 20 项通过推定全部兼容性通过。'
        if passed:
            task['cause'] = 'verification' if adjusted else 'none'
        else:
            task['cause'] = 'machine' if number == 79657 else 'mixed' if number in (76873, 78823) else 'verification' if number == 59127 else 'unknown'
        task['packageChangeRequired'] = adjusted
    data['tasks'] = [tasks[number] for number in sorted(tasks)]
    data['counts'] = dict(Counter(t['status'] for t in data['tasks']))
    for key in ('passed', 'needs_fix', 'failed', 'incomplete'):
        data['counts'].setdefault(key, 0)
    passed_ids = [t['id'] for t in data['tasks'] if t['oracle']['passed']]
    assert len(passed_ids) >= 87
    now = datetime.datetime.utcnow().isoformat() + 'Z'
    checked_local_date = (datetime.datetime.utcnow() + datetime.timedelta(hours=8)).strftime('%Y-%m-%d')
    total = len(data['tasks'])
    data['meta'].update(total=total, updatedAt=checked_local_date,
        resultsAsOf=max(data['meta']['resultsAsOf'], native['task_check_policy_observed_at_utc']))
    data['oracleSummary'] = dict(total=total, passed=len(passed_ids), notConfirmed=total-len(passed_ids),
        passedIds=passed_ids, retainedMinimum=87, allPassed=len(passed_ids)==total,
        note='累计通过按已有完整 Gold 测试记录去重；修正入口后的完整结果纳入，跳过仍单独显示。已有通过不会因缺少构建复核证据扣减。')
    data['authors']['unknown'] = dict(label='作者信息未补录')
    apply_progress_notes(data)
    write_public(data)
    audit = dict(at_utc=now, source_entries=[native_ref, canonical_ref, direct_ref, flag_ref, dispatch_ref],
        passed_ids=passed_ids, counts=data['counts'], oracle_summary=data['oracleSummary'],
        original_public_pair_records_preserved=True, new_evaluation_jobs_started=False,
        private_evidence=private)
    (args.audit / 'projection.json').write_text(json.dumps(audit, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps(dict(oracle=data['oracleSummary'], counts=data['counts']), ensure_ascii=False))


if __name__ == '__main__':
    main()
