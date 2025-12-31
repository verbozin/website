import type { LinkNavegacao, EstatisticaImpacto, PlanoDoacoes, Valor } from "./tipos";

// Informações do site
export const SITE_CONFIG = {
  nome: "Verbo Zin Institute",
  nomeAbreviado: "Verbo Zin",
  descricao:
    "Saciando a fome e semeando a palavra de Deus. Promovemos o ensino da Bíblia e ações missionárias.",
  url: "https://verbozin.org",
  email: "contato@verbozin.org",
  telefone: "(11) 99999-9999",
  endereco: "São Paulo, SP",
} as const;

// Links de navegação
export const LINKS_NAVEGACAO: LinkNavegacao[] = [
  { href: "/", label: "Início" },
  { href: "/sobre-nos", label: "Quem Somos" },
  { href: "/projetos", label: "Projetos" },
  { href: "/transparencia", label: "Transparência" },
  { href: "/noticias", label: "Notícias" },
];

// Links do footer
export const LINKS_FOOTER = {
  institucional: [
    { href: "/sobre-nos", label: "Nossa História" },
    { href: "/sobre-nos#equipe", label: "Equipe" },
    { href: "/sobre-nos#valores", label: "Valores" },
    { href: "/contato", label: "Contato" },
  ],
  apoio: [
    { href: "/doacoes", label: "Central de Doações" },
    { href: "/voluntarios", label: "Seja Voluntário" },
    { href: "/parcerias", label: "Parcerias" },
    { href: "/faq", label: "FAQ" },
  ],
  transparencia: [
    { href: "/transparencia", label: "Relatórios Anuais" },
    { href: "/transparencia#auditoria", label: "Auditoria Externa" },
    { href: "/transparencia#estatuto", label: "Estatuto Social" },
    { href: "/transparencia#contas", label: "Prestação de Contas" },
  ],
};

// Estatísticas de impacto (home page)
export const ESTATISTICAS_IMPACTO: EstatisticaImpacto[] = [
  {
    icone: "diversity_1",
    valor: "15.000+",
    label: "Famílias Ajudadas",
    descricao: "Pessoas impactadas diretamente",
  },
  {
    icone: "payments",
    valor: "R$ 2M+",
    label: "Valor Arrecadado",
    descricao: "Investidos em projetos sociais",
  },
  {
    icone: "home_work",
    valor: "120",
    label: "Instituições Apoiadas",
    descricao: "Parceiros em todo o Brasil",
  },
];

// Valores organizacionais
export const VALORES: Valor[] = [
  {
    icone: "visibility",
    titulo: "Transparência Total",
    descricao:
      "Prestação de contas aberta e acessível para todos os doadores. Sabemos para onde vai cada centavo.",
    corIcone: "text-primary",
  },
  {
    icone: "volunteer_activism",
    titulo: "Empatia Genuína",
    descricao:
      "Colocamos as necessidades dos beneficiários em primeiro lugar, ouvindo e entendendo suas histórias.",
    corIcone: "text-pink-500",
  },
  {
    icone: "trending_up",
    titulo: "Impacto Real",
    descricao:
      "Monitoramento constante dos resultados das ações realizadas para maximizar a eficiência.",
    corIcone: "text-purple-600",
  },
];

// Planos de doação
export const PLANOS_DOACOES: PlanoDoacoes[] = [
  {
    id: "toda-doacao",
    nome: "Toda doação importa",
    valor: 5,
    descricao: "Cada contribuição, por menor que seja, faz a diferença na vida de quem precisa.",
    beneficios: ["Ajuda imediata", "Certificado digital", "Faz parte da mudança"],
  },
  {
    id: "basico",
    nome: "Apoio Básico",
    valor: 50,
    descricao: "Garante alimentação básica para uma pessoa por uma semana.",
    beneficios: ["Ajuda imediata", "Certificado digital"],
    popular: true,
  },
  {
    id: "transformador",
    nome: "Transformador",
    valor: 100,
    descricao: "Fornece material escolar e alimentação para uma criança.",
    beneficios: [
      "Impacto contínuo",
      "Relatório mensal exclusivo",
      "Acesso a eventos online",
    ],
  },
];

// Links de redes sociais
export const REDES_SOCIAIS = {
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
  twitter: "https://twitter.com/",
};

// Categorias de notícias
export const CATEGORIAS_NOTICIAS = [
  { id: "todas", label: "Todas", icone: "check" },
  { id: "sucesso", label: "Histórias de Sucesso", icone: "star" },
  { id: "transparencia", label: "Transparência", icone: "bar_chart" },
  { id: "parcerias", label: "Parcerias", icone: "handshake" },
  { id: "eventos", label: "Eventos", icone: "event" },
];

// Categorias de projetos
export const CATEGORIAS_PROJETOS = [
  { id: "todos", label: "Todos" },
  { id: "educacao", label: "Educação" },
  { id: "saude", label: "Saúde" },
  { id: "fome", label: "Combate à Fome" },
  { id: "ambiente", label: "Meio Ambiente" },
  { id: "cultura", label: "Cultura" },
];

// Princípios bíblicos
export const PRINCIPIOS_BIBLICOS = [
  {
    referencia: "Mateus 25:35-40",
    texto: "Servimos a Cristo ao servir aos pequeninos.",
  },
  {
    referencia: "Tiago 1:27",
    texto: "A verdadeira religião inclui cuidar dos necessitados.",
  },
  {
    referencia: "Romanos 10:14-15",
    texto: "A proclamação da Palavra é essencial à salvação.",
  },
  {
    referencia: "Provérbios 31:8-9",
    texto: "Defendemos os direitos dos pobres e necessitados.",
  },
  {
    referencia: "Atos 20:35",
    texto: '"Mais bem-aventurado é dar que receber."',
  },
];

