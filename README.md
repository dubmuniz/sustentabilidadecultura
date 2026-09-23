# Instituto Sustentabilidade e Cultura — site

Site estático (HTML/CSS/JS, sem build). Abra `index.html` no navegador ou publique pelo GitHub Pages.

## Como editar
- **Publicações, projetos, perfis e link do portfólio:** `assets/js/data.js`
- **CV:** salve o PDF como `assets/cv/cv-bruno-barboza-muniz.pdf`
- **Foto:** `assets/img/bruno.jpg`
- **Números de impacto e galeria:** também em `assets/js/data.js`
- **Imagens de projetos:** `assets/img/projetos/` e preencha o campo `imagem` em `data.js`
- **Logo:** `assets/img/logo.svg` · **Cores:** variáveis no topo de `assets/css/style.css`

## Arquivo único
`python3 scripts/build-standalone.py` gera `site-instituto.html`, com CSS, JS e imagens embutidos, que pode ser aberto sozinho em qualquer navegador.
