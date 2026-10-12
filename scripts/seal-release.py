#!/usr/bin/env python3
"""Bind cache keys and the manifest to every current public resource."""
import hashlib
from pathlib import Path
import re

docs = Path(__file__).resolve().parents[1] / 'docs'
index = docs / 'index.html'
html = index.read_text()
for name in ('assets/styles.css', 'assets/latest-data.js', 'assets/app.js'):
    digest = hashlib.sha256((docs / name).read_bytes()).hexdigest()
    html, replaced = re.subn(re.escape(name) + r'\?v=[0-9a-f]+', name + '?v=' + digest[:12], html)
    assert replaced == 1
index.write_text(html)
files = sorted(p for p in docs.rglob('*') if p.is_file() and p.name != 'latest.sha256')
lines = [hashlib.sha256(p.read_bytes()).hexdigest() + '  ' + p.relative_to(docs).as_posix() for p in files]
(docs / 'latest.sha256').write_text('\n'.join(lines) + '\n')
print('Sealed %d public resources' % len(files))
