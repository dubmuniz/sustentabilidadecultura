/*
 * Conteúdo editável do site.
 * Para adicionar uma publicação ou um projeto, copie um dos objetos
 * abaixo, cole no fim da lista e ajuste os campos.
 */

window.SITE_DATA = {
  // Link do portfólio completo (Adobe Express)
  portfolioUrl: "https://new.express.adobe.com/webpage/VbRZKnf9rPtqm",

  // Coloque o arquivo do CV em assets/cv/ com este nome
  cvUrl: "assets/cv/cv-bruno-barboza-muniz.pdf",

  // Publicação em destaque (Início e topo da aba Pesquisa)
  destaque: {
    selo: "Artigo de opinião · JOTA · 2026",
    titulo: "Quem financia o ‘vale da morte’ da inovação em saúde?",
    texto:
      "O Brasil produz ciência, mas ainda não estruturou o financiamento necessário para levar uma descoberta até o sistema de saúde. O artigo discute essa lacuna entre a pesquisa e o produto e defende que ela se torne objeto de política pública.",
    url: "https://www.jota.info/opiniao-e-analise/artigos/quem-financia-o-vale-da-morte-da-inovacao-em-saude",
    botao: "Ler no JOTA",
  },

  /*
   * tipo: "opiniao" | "artigo" | "tese" | "comunicacao" | "audiovisual"
   */
  publicacoes: [
    {
      tipo: "opiniao",
      ano: 2026,
      autores: "Muniz, B. B.",
      titulo: "Quem financia o ‘vale da morte’ da inovação em saúde?",
      veiculo: "JOTA – Opinião & Análise",
      resumo:
        "Sobre a lacuna de financiamento entre a produção científica e a chegada de novas tecnologias ao sistema de saúde, e por que ela precisa se tornar política pública.",
      url: "https://www.jota.info/opiniao-e-analise/artigos/quem-financia-o-vale-da-morte-da-inovacao-em-saude",
      rotulo: "JOTA",
    },
    {
      tipo: "artigo",
      ano: 2024,
      autores: "Silva, M. A. B.; Muniz, B. B.",
      titulo:
        "Racismo institucional e o campo jurídico: limites, expectativas e potencialidades da produção de conhecimento sobre raça em universidades brasileiras",
      veiculo: "Revista Direito e Práxis, v. 15, n. 4, p. 1–30",
      resumo:
        "Discute as abordagens antirracistas adotadas por instituições do Estado, movimentos sociais e universidades, a partir dos discursos de estudantes e docentes de Direito de duas universidades do Rio de Janeiro.",
      url: "https://doi.org/10.1590/2179-8966/2024/75948",
      rotulo: "DOI",
    },
    {
      tipo: "artigo",
      ano: 2024,
      autores: "Araujo, D. P.; Muniz, B.",
      titulo:
        "A criminalização do baile funk e do rap e o genocídio negro nas cidades do Rio de Janeiro e de Lisboa",
      veiculo: "Sociedade e Estado, v. 39, n. 2, e48167",
      resumo:
        "Analisa as condições históricas, políticas e institucionais que normalizam um regime de exceção permanente imposto pela polícia e pela justiça a pessoas racializadas e às suas formas de expressão artística, no Brasil e em Portugal.",
      url: "https://periodicos.unb.br/index.php/sociedade/article/view/48167",
      rotulo: "Artigo",
    },
    {
      tipo: "artigo",
      ano: 2022,
      autores: "Muniz, B.; Silva, M. A. B.",
      titulo: "Os usos do funk na educação antirracista: pensando o poder da música",
      veiculo: "EccoS – Revista Científica (Uninove)",
      resumo:
        "Reflexões sobre os usos do funk na educação e na ação social, especialmente na educação antirracista, à luz das Ciências Sociais e de uma leitura crítica das noções de cultura e identidade.",
      url: "https://periodicos.uninove.br/eccos/article/view/21819",
      rotulo: "Artigo",
    },
    {
      tipo: "artigo",
      ano: 2016,
      autores: "Muniz, B. B.",
      titulo: "Quem precisa de cultura? O capital existencial do funk e a conveniência da cultura",
      veiculo: "Sociologia & Antropologia, v. 6, n. 2, p. 447–467",
      resumo:
        "Questiona leituras utilitaristas do funk sem negar sua utilidade, propondo a noção de capital existencial, mobilizado de forma coletiva e afetiva.",
      url: "https://www.scielo.br/j/sant/a/YQYbXhztm9XSYZtd47T34Pc/abstract/?lang=pt",
      rotulo: "SciELO",
    },
    {
      tipo: "tese",
      ano: 2015,
      autores: "Muniz, B. B.",
      titulo:
        "An affective and embodied push to Bourdieu’s dispositional model: funk’s cultural practices in Rio de Janeiro",
      veiculo: "Tese de doutorado em Sociologia, London School of Economics and Political Science (LSE)",
      resumo:
        "Analisa como produtores musicais, pesquisadores e estudantes criaram no Rio de Janeiro o movimento “Funk é Cultura”, contra a criminalização dos bailes, a partir de teorias pós-coloniais e de uma leitura crítica de Bourdieu.",
      url: "https://etheses.lse.ac.uk/3384/",
      rotulo: "LSE Theses",
    },
    {
      tipo: "comunicacao",
      ano: 2020,
      autores: "Muniz, B.",
      titulo:
        "Space, anti-blackness and the criminalization of baile funk in Rio de Janeiro: articulating the juridical and cultural fields",
      veiculo: "Sound System Outernational #6 – Goldsmiths, University of London",
      resumo: "Comunicação apresentada como pesquisador do Centro de Estudos Sociais da Universidade de Coimbra.",
      url: "https://sites.gold.ac.uk/sound-system-outernational/sso6/",
      rotulo: "Evento",
    },
    {
      tipo: "comunicacao",
      ano: null,
      autores: "Muniz, B.",
      titulo: "O genocídio da população negra: colonialismo, pacificação e funk",
      veiculo: "Projeto POLITICS – Centro de Estudos Sociais, Universidade de Coimbra",
      resumo: "Comunicação no âmbito do projeto POLITICS, sobre raça, políticas de pacificação e cultura urbana.",
      url: "https://politics.ces.uc.pt/index.php?id=21683&id_lingua=2&pag=26046",
      rotulo: "CES",
    },
    {
      tipo: "audiovisual",
      ano: null,
      autores: "Muniz, B.",
      titulo: "Funk is Culture: music politics in Brazil",
      veiculo: "Documentário",
      resumo: "Documentário sobre como a cultura do baile funk é afetada pelas políticas de governo e de segurança no Rio de Janeiro.",
      url: "https://www.academia.edu/20135625/Funk_is_Culture_Music_Politics_in_Brazil",
      rotulo: "Ver",
    },
  ],

  // Perfis acadêmicos e de mídia
  perfis: [
    { nome: "Academia.edu", url: "https://independent.academia.edu/BrunoMuniz94" },
    { nome: "ResearchGate", url: "https://www.researchgate.net/scientific-contributions/Bruno-Muniz-2224819586" },
    { nome: "Artigos no JOTA", url: "https://www.jota.info/autor/bruno-barboza-muniz" },
    { nome: "Escavador", url: "https://www.escavador.com/sobre/2839126/bruno-barboza-muniz" },
  ],

  // Números de destaque (aba Início)
  numeros: [
    { valor: "R$ 4,5 mi", rotulo: "captados entre 2021 e 2025" },
    { valor: "450", rotulo: "crianças e adolescentes no Vem Viver (PNUD)" },
    { valor: "4.000+", rotulo: "estudantes alcançados pelo Vizinho do Bem" },
    { valor: "1.862", rotulo: "empreendimentos solidários na plataforma EcoSol" },
  ],

  /*
   * Projetos. Imagens ficam em assets/img/projetos/.
   * "numeros" é opcional: pequenos destaques exibidos no card.
   */
  projetos: [
    {
      titulo: "Vizinho do Bem",
      categoria: "Educação ambiental · MRV",
      periodo: "Captação + coordenação · 2023–2025",
      descricao:
        "Projeto socioeducativo que fortalece vínculos comunitários em bairros periféricos com educação ambiental, cultura maker e empreendedorismo social. Recursos captados junto à MRV Engenharia por meio de sua política de investimento social privado. Sua frente mais inovadora é a Smart Horta: hortas escolares inteligentes com sensores e automação, usadas como espaço de aprendizagem sobre sustentabilidade, alimentação, ciências e cidadania.",
      numeros: ["100 adolescentes inscritos", "4.000+ estudantes impactados"],
      imagem: "assets/img/projetos/smart-horta.jpg",
      url: "",
    },
    {
      titulo: "Parangolé Bate-Bola",
      categoria: "Cultura · Edital Mosaico",
      periodo: "Estreia em 6 jun. 2025 · SESI Firjan Macaé",
      descricao:
        "Espetáculo que conecta música, moda, instalação e performance para celebrar a cultura popular periférica do Rio. Inspirado nos bate-bolas e nos parangolés de Hélio Oiticica, reúne o rapper Jeza da Pedra e a banda MEXITAPI, com figurinos em upcycling, projeções, aromas e trilhas que mesclam rap, dub, funk e eletrônico.",
      numeros: ["Patrocínio: edital Mosaico", "Organização e produção"],
      imagem: "assets/img/projetos/parangole.jpg",
      video: "R3_TQLECKzI",
      url: "",
    },
    {
      titulo: "Plataforma Solidária EcoSol Bahia",
      categoria: "Economia solidária · Tecnologia",
      periodo: "Captação + coordenação · 2022–2023",
      descricao:
        "Soluções digitais para o comércio justo: apoio à comercialização de produtos da economia solidária e organização, sistematização e apresentação dos dados do CadCidadão no estado da Bahia. O projeto também iniciou o CadCesol, sistema que substituirá o CadCidadão.",
      numeros: ["1.862 dados parametrizados", "60 EES diagnosticados", "6 municípios"],
      imagem: "assets/img/projetos/ecosol.jpg",
      url: "",
    },
    {
      titulo: "Vem Viver",
      categoria: "Educação e comunidade · PNUD",
      periodo: "Captação + coordenação · 2020–2023",
      descricao:
        "Programa financiado pelo Programa das Nações Unidas para o Desenvolvimento (PNUD) que engajou crianças em atividades extracurriculares e promoveu um ambiente comunitário mais seguro e solidário.",
      numeros: ["5 escolas", "55+ professores formados", "296 famílias", "450 crianças e adolescentes"],
      imagem: "assets/img/projetos/vem-viver-numeros.jpg",
      url: "",
    },
  ],

  // Galeria de imagens (aba Projetos)
  galeria: [
    { src: "assets/img/projetos/vizinho-do-bem-equipe.jpg", legenda: "Equipe do Vizinho do Bem" },
    { src: "assets/img/projetos/parangole-2.jpg", legenda: "Parangolé Bate-Bola" },
    { src: "assets/img/projetos/mudas.jpg", legenda: "Mudas da Smart Horta" },
    { src: "assets/img/projetos/guaras.jpg", legenda: "Guarás" },
    { src: "assets/img/projetos/horta.jpg", legenda: "Horta escolar" },
  ],
};
