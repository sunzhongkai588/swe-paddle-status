"""Exercise the actual status page in Chromium without network or evaluation jobs."""
import http.server
import json
from pathlib import Path
import shutil
import threading
from playwright.sync_api import sync_playwright

DOCS = Path('/docs')
OUT = Path('/evidence')
text = (DOCS / 'assets/latest-data.js').read_text()
data = json.loads(text.split('=', 1)[1].strip().rstrip(';'))
errors = []
checks = []


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DOCS), **kwargs)

    def log_message(self, *args):
        pass


def main():
    server = http.server.ThreadingHTTPServer(('127.0.0.1', 0), Handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    url = 'http://127.0.0.1:%d/' % server.server_port
    try:
        with sync_playwright() as playwright:
            executable = shutil.which('chromium') or shutil.which('chromium-browser')
            browser = playwright.chromium.launch(headless=True, executable_path=executable, args=['--no-sandbox'])
            page = browser.new_page(viewport=dict(width=1440, height=1000))
            page.on('pageerror', lambda error: errors.append(str(error)))
            page.goto(url, wait_until='networkidle')
            assert page.locator('#task-table-body tr').count() == 111
            assert page.locator('#core-count').inner_text() == '%d / 111 条' % data['oracleSummary']['passed']
            assert page.locator('#pass-rate').inner_text() == '%.1f%%' % (100.0 * data['oracleSummary']['passed'] / 111)
            assert page.locator('#issue-grid .issue-card').count() == sum(t['status'] != 'passed' for t in data['tasks'])
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1')
            checks.append('111 task rows, actual Oracle counts and desktop layout')
            page.screenshot(path=str(OUT / 'desktop.png'))
            for field in ('status', 'cause', 'evidence', 'author'):
                for value in sorted({t[field] for t in data['tasks']}):
                    page.select_option('#%s-filter' % field, value)
                    actual = page.locator('#task-table-body tr').evaluate_all('(rows) => rows.map(r => Number(r.dataset.rowId))')
                    assert actual == [t['id'] for t in data['tasks'] if t[field] == value]
                page.select_option('#%s-filter' % field, 'all')
            checks.append('all filter choices agree with result records')
            for task in data['tasks']:
                page.locator('#task-table-body [data-task-id="%d"]' % task['id']).first.click()
                dialog = page.locator('#dialog-content')
                contents = dialog.inner_text()
                for expected in (task['summary'], task['why'], task['fix'], task['proof'], task['oracle']['entry']):
                    assert expected in contents, task['id']
                assert page.locator('#task-dialog').evaluate('(e) => e.scrollWidth <= e.clientWidth + 1'), task['id']
                if task['checks']:
                    page.locator('.check-details > summary').click()
                    assert page.locator('.check-table tbody tr').count() == len(task['checks'])
                page.locator('.dialog-close').click()
            checks.append('all 111 task dialogs and dated paired test details')
            page.fill('#search-input', '62012')
            assert page.locator('#task-table-body tr').count() == 1
            page.locator('#task-table-body [data-task-id="62012"]').first.click()
            page.reload(wait_until='networkidle')
            assert page.locator('#task-dialog').is_visible()
            assert '15 通过' in page.locator('#dialog-content').inner_text()
            page.locator('.dialog-close').click()
            page.locator('#clear-filters').click()
            checks.append('search and shareable URL for added task')
            page.set_viewport_size(dict(width=390, height=844))
            page.goto(url, wait_until='networkidle')
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1')
            page.screenshot(path=str(OUT / 'mobile.png'))
            page.locator('#issue-grid [data-task-id="64881"]').click()
            assert '1 失败 / 6 错误 / 4 跳过' in page.locator('#dialog-content').inner_text()
            assert page.locator('#task-dialog').evaluate('(e) => e.scrollWidth <= e.clientWidth + 1')
            page.screenshot(path=str(OUT / '64881-mobile.png'))
            checks.append('mobile overview and failed Oracle detail')
            page.locator('.dialog-close').click()
            response = page.request.get(url + 'latest-report.md')
            assert response.status == 200 and '# SWE-Paddle 最新验证情况' in response.text()
            response = page.request.get(url + 'deepseek-v4-flash/results.json')
            assert response.status == 200 and len(response.json()['tasks']) == 86
            checks.append('current report and retained Flash page available')
            assert not errors, errors
            browser.close()
    finally:
        server.shutdown()
    result = dict(ok=True, checks=checks, page_errors=errors, actual_browser_executed=True)
    (OUT / 'browser-result.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps(result, ensure_ascii=False))


if __name__ == '__main__':
    main()
