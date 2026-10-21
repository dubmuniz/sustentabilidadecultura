"""Gera site-instituto.html e site-instituto-en.html: o site inteiro em um
único arquivo por idioma, com CSS, JS e imagens embutidos.
Uso: python3 scripts/build-standalone.py"""
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


def build(page, data_js, out_name):
    page_dir = (ROOT / page).parent
    html = (ROOT / page).read_text()
    css = inline_assets((ROOT / "assets/css/style.css").read_text(), ROOT / "assets/css")
    js_data = inline_assets((ROOT / "assets/js" / data_js).read_text(), ROOT)
    js_main = (ROOT / "assets/js/main.js").read_text()

    html = re.sub(r'<link rel="stylesheet" href="(?:\.\./)?assets/css/style.css">',
                  lambda m: f"<style>\n{css}</style>", html)
    html = re.sub(r'<script src="(?:\.\./)?assets/js/' + re.escape(data_js) + r'"></script>',
                  lambda m: f"<script>\n{js_data}</script>", html)
    html = re.sub(r'<script src="(?:\.\./)?assets/js/main.js"></script>',
                  lambda m: f"<script>\n{js_main}</script>", html)
    html = inline_assets(html, page_dir)
    # O arquivo único usa CSS/JS embutidos, então a política de segurança do site não se aplica
    html = re.sub(r'\s*<meta http-equiv="Content-Security-Policy"[^>]*>', "", html)
    # Sem pasta /en/ ao lado, o seletor de idioma aponta para o outro arquivo único
    other = "site-instituto.html" if out_name.endswith("-en.html") else "site-instituto-en.html"
    html = re.sub(r'href="(?:en/|\.\./)" data-lang-link="(?:en/|\.\./)"',
                  f'href="{other}" data-lang-link="{other}"', html)
    html = html.replace(' data-base="../"', "")

    out = ROOT / out_name
    out.write_text(html)
    print(f"{out.name}: {out.stat().st_size // 1024} KB")


build("index.html", "data.js", "site-instituto.html")
build("en/index.html", "data-en.js", "site-instituto-en.html")
