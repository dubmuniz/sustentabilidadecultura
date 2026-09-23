"""Gera site-instituto.html: o site inteiro em um único arquivo, com CSS,
JS e imagens embutidos. Uso: python3 scripts/build-standalone.py"""
import base64
import mimetypes
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def data_uri(path):
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode()


def inline_assets(text, base):
    # assets/... em HTML/JS e ../img/... no CSS
    def repl(m):
        path = (base / m.group(2)).resolve()
        return m.group(1) + data_uri(path) if path.is_file() else m.group(0)
    return re.sub(r'(["(])((?:\.\./|assets/)[^"()]+\.(?:jpg|jpeg|png|svg|webp))', repl, text)


html = (ROOT / "index.html").read_text()
css = inline_assets((ROOT / "assets/css/style.css").read_text(), ROOT / "assets/css")
js_data = inline_assets((ROOT / "assets/js/data.js").read_text(), ROOT)
js_main = (ROOT / "assets/js/main.js").read_text()

html = html.replace('<link rel="stylesheet" href="assets/css/style.css">', f"<style>\n{css}</style>")
html = html.replace('<script src="assets/js/data.js"></script>', f"<script>\n{js_data}</script>")
html = html.replace('<script src="assets/js/main.js"></script>', f"<script>\n{js_main}</script>")
html = inline_assets(html, ROOT)

out = ROOT / "site-instituto.html"
out.write_text(html)
print(f"{out.name}: {out.stat().st_size // 1024} KB")
