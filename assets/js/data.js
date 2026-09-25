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

  /*
   * Novidades do carrossel da página inicial (depois do slide de apresentação).
   * arte: { imagem, legenda, selo: { numero, rotulo } } para foto (o selo é opcional)
   * ou { ilustracao: "vale" } para o desenho do "vale da morte".
   * link: "#aba" abre uma aba do site; endereços https abrem em nova janela.
   */
  novidades: [
    {
      selo: "Projeto aprovado · 2026–2028",
      titulo: "Rota Viva Javaé:",
      destaque: "turismo regenerativo na Ilha do Bananal",
      texto:
        "R$ 2 milhões captados para dois anos de rotas guiadas por indígenas Javaé, protocolos de acesso a áreas sensíveis, formação de guias e um edital para iniciativas de mulheres e jovens em mais de dez aldeias.",
      arte: {
        imagem: "assets/img/projetos/rota-viva-javae.jpg",
        legenda: "Juventude Javaé · Ilha do Bananal (TO)",
        selo: { numero: "R$ 2 mi", rotulo: "captados" },
      },
      link: "#projetos",
      botao: "Conheça o projeto",
    },
    {
      selo: "Novo artigo · JOTA · 2026",
      titulo: "Quem financia o",
      destaque: "‘vale da morte’ da inovação em saúde?",
      texto:
        "O Brasil produz ciência, mas ainda não estruturou o financiamento necessário para levar uma descoberta até o sistema de saúde.",
      arte: { ilustracao: "vale" },
      link: "https://www.jota.info/opiniao-e-analise/artigos/quem-financia-o-vale-da-morte-da-inovacao-em-saude",
      botao: "Ler no JOTA",
    },
  ],

  // Publicação em destaque (topo da aba Pesquisa)
  destaque: {
    selo: "Artigo de opinião · JOTA · 2026",
    titulo: "Quem financia o ‘vale da morte’ da inovação em saúde?",
    texto:
      "O Brasil produz ciência, mas ainda não estruturou o financiamento necessário para levar uma descoberta até o sistema de saúde. O artigo discute essa lacuna entre a pesquisa e o produto e defende que ela se torne objeto de política pública.",
    url: "https://www.jota.info/opiniao-e-analise/artigos/quem-financia-o-vale-da-morte-da-inovacao-em-saude",
    botao: "Ler no JOTA",
  },

  /*
   * tipo: "opiniao" | "artigo" | "capitulo" | "anais" | "tese" | "audiovisual"
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
      ano: 2021,
      autores: "Muniz, B.; Coelho, L. X. P.",
      titulo: "Law and order in postcolonial racial cities: the case of Black genocide in Rio de Janeiro",
      veiculo: "McGill GLSA Research Series, v. 1, n. 1, p. 1–31",
      resumo:
        "Analisa duas ações coletivas que contestam a violência racial da polícia do Rio de Janeiro em operações em bairros de maioria negra, examinando as narrativas de denúncia do genocídio negro e o papel do pensamento jurídico em desviar ou negar o racismo.",
      url: "https://doi.org/10.26443/glsars.v1i1.127",
      rotulo: "DOI",
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
      ano: 2016,
      autores: "Muniz, B. B.",
      titulo:
        "An affective and embodied push to Bourdieu’s dispositional model: funk’s cultural practices in Rio de Janeiro",
      veiculo: "Tese de doutorado em Sociologia, London School of Economics and Political Science (LSE), com bolsa CAPES",
      resumo:
        "Analisa como produtores musicais, pesquisadores e estudantes criaram no Rio de Janeiro o movimento “Funk é Cultura”, contra a criminalização dos bailes, a partir de teorias pós-coloniais e de uma leitura crítica de Bourdieu.",
      url: "https://etheses.lse.ac.uk/3384/",
      rotulo: "LSE Theses",
    },
    {
      tipo: "artigo",
      ano: 2020,
      autores: "Sales, M.; Muniz, B. B.",
      titulo:
        "Image and racism: racial anthropophagy and the limits of anti-racist and decolonial cultural production in Brazil",
      veiculo: "Journal of Science and Technology of the Arts, v. 12, p. 52",
      resumo:
        "Discute a antropofagia racial e os limites da produção cultural antirracista e decolonial no Brasil a partir das imagens.",
      url: "",
    },
    {
      tipo: "artigo",
      ano: 2020,
      autores: "Sales, M.; Muniz, B. B.",
      titulo: "Black women’s oppositional gaze making images",
      veiculo: "Vista: Revista de Cultura Visual, v. 6, p. 101",
      resumo: "Sobre o olhar opositor de mulheres negras na produção de imagens.",
      url: "",
    },
    {
      tipo: "capitulo",
      ano: 2021,
      autores: "Muniz, B. B.",
      titulo:
        "A questão da “eficiência policial” e a negação do racismo institucional na construção do conhecimento sobre segurança pública",
      veiculo:
        "In: Maeso, S. (org.). O estado do racismo em Portugal: racismo antinegro e anticiganismo no direito e nas políticas públicas. Coimbra: Tinta da China",
      resumo: "",
      url: "",
    },
    {
      tipo: "capitulo",
      ano: 2020,
      autores: "Muniz, B. B.",
      titulo:
        "Os limites do antirracismo branco: sistema de justiça, negacionismo e policiamento racial no Rio de Janeiro",
      veiculo:
        "In: CEDET (org.). Los afrodescendientes en las Américas: 200 años de vida republicana, ciudadanías incompletas. Lima: CEDET, v. 1, p. 83–100",
      resumo: "",
      url: "",
    },
    {
      tipo: "capitulo",
      ano: 2020,
      autores: "Muniz, B. B.",
      titulo:
        "Black music, popular culture and existential capital: the relationship between appropriation and originality",
      veiculo:
        "In: Stanley Niaah, S. (org.). Dancehall: a reader on Jamaican music and culture. Kingston: University of the West Indies Press, p. 447–461",
      resumo: "",
      url: "",
    },
    {
      tipo: "anais",
      ano: 2012,
      autores: "Muniz, B. B.",
      titulo: "Law, media and artistic creativity in “baile funk” music",
      veiculo: "British Sociological Association Conference – Sociology in an Age of Austerity, Leeds (resumo)",
      resumo: "",
      url: "",
    },
    {
      tipo: "anais",
      ano: 2009,
      autores: "Muniz, B. B.",
      titulo: "Criação e comércio: a “cultura do dancehall” comparada ao funk e ao tecnobrega",
      veiculo: "VIII Reunión de Antropología del Mercosur (RAM), Buenos Aires (trabalho completo)",
      resumo: "",
      url: "",
    },
    {
      tipo: "anais",
      ano: 2008,
      autores: "Muniz, B. B.",
      titulo: "Fluidez e hibridação na música: direito autoral, “cultura da internet” e a visão mediada pela imprensa",
      veiculo:
        "III Seminário Internacional Organizações e Sociedade: Inovações e Transformações Contemporâneas, Porto Alegre (trabalho completo)",
      resumo: "",
      url: "",
    },
    {
      tipo: "anais",
      ano: 2008,
      autores: "Muniz, B. B.",
      titulo: "Armoriais, Mangueboys e suas relações com a tradição",
      veiculo: "IX Jornada Interna dos Alunos do PPGSA/UFRJ, Rio de Janeiro (resumo)",
      resumo: "",
      url: "",
    },
    {
      tipo: "audiovisual",
      ano: 2015,
      autores: "Gonçalves, M. A.; Altmann, E.; Muniz, B. B.",
      titulo: "Versão dub da canção “Vedete da Favela” (Carolina de Jesus)",
      veiculo: "Trilha sonora do filme “Das Nuvens Para Baixo”",
      resumo: "",
      url: "",
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

  // Apresentações em congressos, seminários e palestras (Currículo Lattes)
  eventos: [
    { ano: 2023, titulo: "Redes de economia solidária: pensando futuros da sustentabilidade e transformações sociais", evento: "III Encontro de Gestores, Articuladores e Pesquisadores em Economia Solidária" },
    { ano: 2021, titulo: "Genocide & culture in the media: structural racism & funk dancing in Rio de Janeiro", evento: "SSO #7: Sound System at the Crossroad" },
    { ano: 2021, titulo: "Observar el sistema penitenciario: la calidad de los datos en una crisis carcelaria (mesa)", evento: "Balance y perspectiva de los observatorios del delito" },
    { ano: 2020, titulo: "Space, anti-blackness and the criminalization of baile funk in Rio de Janeiro: articulating the juridical and cultural fields", evento: "Sound System Outernational #6 – Goldsmiths, University of London", url: "https://sites.gold.ac.uk/sound-system-outernational/sso6/" },
    { ano: 2019, titulo: "Políticas de “segurança pública”, “guerra às drogas” e policiamento", evento: "International workshop: violência, racialização e resistências em um mundo antinegro" },
    { ano: 2019, titulo: "The limits of white (anti)racism: justice system, negationism and racial policing in Rio de Janeiro", evento: "Los afrodescendientes en las Américas: 200 años de vida republicana y ciudadanías incompletas, Lima" },
    { ano: 2019, titulo: "Crime, violence and citizen security in Brazil: the case of Rio de Janeiro", evento: "Master lecture – Ministerio de la Justicia del Perú" },
    { ano: 2018, titulo: "Genocídio da população negra: contribuições das mulheres negras na luta antirracista na América Latina", evento: "CES 40 anos: a imaginação do futuro – Universidade de Coimbra" },
    { ano: 2018, titulo: "The genocide of black youth: colonialism, pacification and funk", evento: "Corpos Insubmissos: experiências e perspectivas da luta antirracista no século XXI", url: "https://politics.ces.uc.pt/index.php?id=21683&id_lingua=2&pag=26046" },
    { ano: 2018, titulo: "The genocide of black youth: colonialism, pacification and funk", evento: "Democracy and the rule of law in erosion: when the exception becomes the rule" },
    { ano: 2016, titulo: "Music and dance as technologies of the self and technologies of control: the affordances of Passinho", evento: "Dancehall Music and the City" },
    { ano: 2013, titulo: "Affect, space, and embodiment: the case of funk music in Rio de Janeiro", evento: "Conference on Culture and Social Change: The Role of Aesthetics" },
    { ano: 2013, titulo: "Cumberland Lodge Meeting – Sociology", evento: "London School of Economics" },
    { ano: 2012, titulo: "Law, media and artistic creativity in “baile funk” music", evento: "British Sociological Association Conference, Leeds · LSE Cumberland Lodge" },
    { ano: 2009, titulo: "Criação e comércio: a “cultura do dancehall” comparada ao funk e ao tecnobrega", evento: "VIII Reunião de Antropologia do Mercosul (Buenos Aires) · II REA / XI Reunião de Antropólogos do Norte e Nordeste" },
    { ano: 2008, titulo: "Fluidez e hibridação na música: direito autoral, “cultura da internet” e a visão mediada pela imprensa", evento: "III Seminário Internacional de Organizações e Sociedade, Porto Alegre" },
    { ano: 2008, titulo: "Armoriais, Mangueboys e suas relações com a tradição", evento: "IX Jornada Interna dos Alunos do PPGSA/UFRJ" },
  ],

  // Organização de eventos (Currículo Lattes)
  organizacao: [
    { ano: 2021, titulo: "Colóquio Internacional: Racismo Institucional, Sistema de Justiça e Políticas Públicas no Peru e no Brasil" },
    { ano: 2020, titulo: "Exibição e debate do filme “Nossos Mortos Têm Voz”", nota: "com Danielle Araújo" },
    { ano: 2015, titulo: "Debating Valongo Docks Memories", nota: "com M. Assunção e Carlos Teixeira" },
    { ano: 2012, titulo: "Centres and Peripheries – Cumberland Lodge Sociology Annual Meeting (LSE)", nota: "com O. Mena" },
  ],

  // Perfis acadêmicos e de mídia
  perfis: [
    { nome: "Currículo Lattes", url: "https://lattes.cnpq.br/5182346655329232" },
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
      titulo: "Rota Viva Javaé",
      categoria: "Turismo regenerativo · Ilha do Bananal",
      periodo: "Captação + monitoramento e avaliação · 2026–2028",
      descricao:
        "Projeto aprovado da Humana Povo para Povo Brasil com o povo Javaé e a CONJABA, na Ilha do Bananal (TO). Transforma a visitação hoje desordenada em ferramenta de proteção territorial e renda: diagnóstico participativo por aldeia, protocolos de acesso pactuados em assembleia, rotas guiadas por indígenas, formação em hospitalidade e gestão, materiais bilíngues em português e Iny, restauração de 5 hectares de Cerrado e um edital de até R$ 20 mil por grupo produtivo, com 70% das vagas para mulheres e jovens.",
      numeros: ["R$ 2 milhões captados", "420 beneficiários diretos", "1.680 indiretos", "10+ aldeias"],
      imagem: "assets/img/projetos/rota-viva-javae.jpg",
      url: "",
    },
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
        "Soluções digitais para o comércio justo: apoio à comercialização de produtos da economia solidária e organização, sistematização e apresentação dos dados do CadCidadão no estado da Bahia. O projeto também iniciou o CadCesol, sistema que substituirá o CadCidadão, e entregou relatórios e dashboards para a Secretaria do Trabalho, Emprego, Renda e Esporte da Bahia (SETRE).",
      numeros: ["1.862 dados parametrizados", "60 EES diagnosticados", "6 municípios"],
      imagem: "assets/img/projetos/ecosol.jpg",
      url: "",
    },
    {
      titulo: "Vem Viver",
      categoria: "Educação e comunidade · PNUD",
      periodo: "Captação + coordenação · 2020–2023",
      descricao:
        "Programa financiado pelo Programa das Nações Unidas para o Desenvolvimento (PNUD) que engajou crianças em atividades extracurriculares e promoveu um ambiente comunitário mais seguro e solidário. Os objetivos: garantir o direito à vida, reduzir a violência com cultura de paz, integrar a rede do Sistema de Garantia de Direitos, prevenir a evasão escolar e fortalecer vínculos na família, na escola e na comunidade. A equipe coordenada por Bruno produziu oito relatórios técnicos para a Região Nordeste, de mapeamento e benchmarking a estratégia de governança, formação de multiplicadores e implantação do piloto em Salvador.",
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
