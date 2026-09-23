/*
 * Conteúdo editável do site.
 * Para adicionar uma publicação ou um projeto, copie um dos objetos
 * abaixo, cole no fim da lista e ajuste os campos.
 */

window.SITE_DATA = {
  // Link do portfólio completo (Adobe Express)
  portfolioUrl:
    "https://new.express.adobe.com/webpage/design/urn:aaid:sc:US:d6edff72-5a8b-59aa-8266-95ac573e91fe?accept=true&invite=true&promoid=Z662FLTQ&mv=other",

  // Coloque o arquivo do CV em assets/cv/ com este nome
  cvUrl: "assets/cv/cv-bruno-barboza-muniz.pdf",

  /*
   * tipo: "artigo" | "tese" | "comunicacao" | "audiovisual"
   */
  publicacoes: [
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
      url: "http://etheses.lse.ac.uk/3384/",
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

  /*
   * Projetos. Para incluir imagem, salve em assets/img/projetos/
   * e informe o caminho em "imagem".
   */
  projetos: [
    {
      titulo: "Programas de oportunidades e captação",
      categoria: "Captação de recursos",
      periodo: "2026 —",
      descricao:
        "Radar de editais, prêmios e fundos, priorização de candidaturas e construção de bases reutilizáveis de materiais para organizações de impacto socioambiental e cultural.",
      imagem: "",
      url: "",
    },
    {
      titulo: "Funk é Cultura",
      categoria: "Pesquisa e audiovisual",
      periodo: "Doutorado · LSE",
      descricao:
        "Pesquisa de doutorado e documentário sobre o movimento que reuniu artistas, pesquisadores e estudantes contra a criminalização do baile funk no Rio de Janeiro.",
      imagem: "",
      url: "https://www.academia.edu/20135625/Funk_is_Culture_Music_Politics_in_Brazil",
    },
    {
      titulo: "POLITICS — CES / Universidade de Coimbra",
      categoria: "Pesquisa internacional",
      periodo: "Pós-doutorado",
      descricao:
        "Investigação sobre raça, racismo institucional e produção de conhecimento, com trabalho comparado entre Rio de Janeiro e Lisboa.",
      imagem: "",
      url: "https://politics.ces.uc.pt/",
    },
  ],
};
