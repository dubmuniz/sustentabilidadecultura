(function () {
  "use strict";
  var data = window.SITE_DATA || {};

  // Logo (mesmo desenho de assets/img/logo.svg, inline para herdar a cor do texto)
  var LOGO = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 100" role="img" aria-label="Instituto Sustentabilidade e Cultura"> <circle cx="72" cy="48" r="31" fill="#899b5d"/> <g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round">  <path d="M43.1,16.6 L45.8,14.2 L48.9,11.9 L51.8,13.7 L55.2,12.9 L57.9,14.7 L60.0,17.4 L61.7,20.4 L64.7,19.9 L67.9,19.5 L69.4,21.7 L71.3,23.2 L73.5,24.6 L75.6,26.2 L73.4,30.8 L76.7,31.0 L79.5,31.8 L81.8,33.2 L81.6,35.7 L81.4,38.1 L83.1,39.9 L78.8,43.0 L83.6,43.9 L82.8,45.9 L82.9,47.8 L82.9,49.6 L83.1,51.5 L83.8,53.4 L79.2,54.7 L82.5,57.2 L83.0,59.4 L82.0,61.3 L81.9,63.5 L79.3,64.6 L77.7,66.1 L75.0,66.8 L77.3,70.8 L75.9,72.6 L74.5,74.5 L73.5,76.8 L71.2,77.9 L68.6,78.4 L65.2,77.4 L65.6,82.1 L63.2,82.6 L61.8,85.0 L59.5,85.8 L57.5,87.2 L54.8,86.6 L51.8,83.0 L50.0,88.3 L47.3,86.5 L44.7,87.9 L41.9,88.8 L39.6,86.1 L37.1,85.8 L35.6,81.9 L31.6,84.6 L28.4,84.3 L25.8,82.6 L22.7,81.7 L21.7,78.1 L19.2,76.4 L20.3,71.5 L15.7,71.6 L13.7,69.3 L10.8,67.4 L9.2,64.6 L10.0,61.1 L9.4,58.2 L12.8,54.7 L8.5,52.6 L7.8,50.0 L6.4,47.2 L7.2,44.5 L9.8,42.3 L10.8,39.9 L14.5,38.5 L13.8,35.3 L13.2,31.7 L15.2,29.4 L17.0,27.1 L19.4,25.3 L20.4,22.2 Z"/>  <path d="M45.8,48.0 Q45.9,33.3 43.1,16.6 M46.9,48.2 Q55.0,35.9 61.7,20.4 M47.6,48.9 Q60.4,41.5 73.4,30.8 M48.0,49.6 Q62.6,47.8 78.8,43.0 M48.0,50.3 Q62.3,53.6 79.2,54.7 M47.7,51.0 Q59.8,59.5 75.0,66.8 M47.1,51.6 Q54.5,64.4 65.2,77.4 M46.3,52.0 Q47.6,66.7 51.8,83.0 M45.4,51.9 Q39.6,65.5 35.6,81.9 M44.5,51.3 Q32.3,59.7 20.3,71.5 M44.0,50.3 Q29.3,51.0 12.8,54.7 M44.1,49.3 Q30.8,43.0 14.5,38.5"/>  <rect x="43.8" y="47.8" width="4.4" height="4.4" transform="rotate(20 46 50)"/> </g></svg>';
  document.querySelectorAll("[data-logo]").forEach(function (el) {
    el.innerHTML = LOGO;
    if (el.hasAttribute("aria-hidden")) el.firstChild.removeAttribute("aria-label");
  });

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Links configuráveis
  if (data.portfolioUrl) document.getElementById("portfolio-link").href = data.portfolioUrl;
  if (data.cvUrl) document.getElementById("cv-link").href = data.cvUrl;

  // Publicações
  var TIPOS = { artigo: "Artigo", tese: "Tese", comunicacao: "Comunicação", audiovisual: "Audiovisual" };
  var pubs = (data.publicacoes || []).slice().sort(function (a, b) { return (b.ano || 0) - (a.ano || 0); });
  var pubList = document.getElementById("pubs");
  pubList.innerHTML = pubs.map(function (p) {
    return '<li class="pub" data-tipo="' + esc(p.tipo) + '">' +
      '<div class="pub__meta"><span class="pub__year">' + esc(p.ano || "—") + '</span>' +
      '<span class="pub__type">' + esc(TIPOS[p.tipo] || p.tipo) + "</span></div>" +
      '<div class="pub__body"><h4>' + esc(p.titulo) + "</h4>" +
      '<p class="pub__authors">' + esc(p.autores) + " · <em>" + esc(p.veiculo) + "</em></p>" +
      (p.resumo ? '<p class="pub__abstract">' + esc(p.resumo) + "</p>" : "") +
      (p.url ? '<a class="pub__link" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.rotulo || "Acessar") + " ↗</a>" : "") +
      "</div></li>";
  }).join("");

  document.querySelectorAll("[data-filter]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.getAttribute("data-filter");
      document.querySelectorAll("[data-filter]").forEach(function (b) { b.classList.toggle("is-active", b === btn); });
      pubList.querySelectorAll(".pub").forEach(function (li) {
        li.hidden = f !== "todos" && li.getAttribute("data-tipo") !== f;
      });
    });
  });

  document.getElementById("perfis").innerHTML = (data.perfis || []).map(function (p) {
    return '<li><a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.nome) + " ↗</a></li>";
  }).join("");

  // Projetos
  document.getElementById("projetos-grid").innerHTML = (data.projetos || []).map(function (p) {
    var media = p.imagem
      ? '<img class="project__img" src="' + esc(p.imagem) + '" alt="" loading="lazy">'
      : '<div class="project__img project__img--empty" aria-hidden="true">' + LOGO + "</div>";
    return '<article class="card project">' + media +
      '<div class="project__body"><p class="project__cat">' + esc(p.categoria) +
      (p.periodo ? " · " + esc(p.periodo) : "") + "</p>" +
      "<h4>" + esc(p.titulo) + "</h4><p>" + esc(p.descricao) + "</p>" +
      (p.url ? '<a class="pub__link" href="' + esc(p.url) + '" target="_blank" rel="noopener">Saiba mais ↗</a>' : "") +
      "</div></article>";
  }).join("");

  // Abas (navegação por hash)
  var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-tab]"));
  var names = tabs.map(function (t) { return t.getAttribute("data-tab"); });
  document.documentElement.classList.add("js");

  function show(name, focus) {
    if (names.indexOf(name) < 0) name = "inicio";
    tabs.forEach(function (t) { t.classList.toggle("is-active", t.getAttribute("data-tab") === name); });
    document.querySelectorAll(".nav [data-tab-link]").forEach(function (a) {
      if (a.getAttribute("data-tab-link") === name) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    document.body.classList.toggle("on-hero", name === "inicio");
    closeMenu();
    window.scrollTo(0, 0);
    if (focus) {
      var h = document.querySelector('[data-tab="' + name + '"] h1, [data-tab="' + name + '"] h2');
      if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    }
  }

  window.addEventListener("hashchange", function () { show(location.hash.slice(1), true); });

  // Menu mobile
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  function closeMenu() { nav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  show(location.hash.slice(1), false);
})();
