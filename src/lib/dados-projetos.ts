import type { Projeto, Instituicao } from "./tipos";

/**
 * Fonte única de verdade para projetos e instituições
 * Em produção, isso virá do markdown, mas mantemos mocks para desenvolvimento
 */

export const PROJETOS_EXEMPLO: Projeto[] = [
  {
    id: "educacao-biblica",
    slug: "educacao-biblica",
    nome: "Programa de Educação Bíblica",
    categoria: "Educação",
    descricao:
      "Ensino sistemático das Escrituras para todas as idades, com materiais em formatos acessíveis.",
    instituicao: "Verbo Zin Institute",
    imagem:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
    imagemAlt: "Programa de Educação Bíblica",
    status: "em_andamento",
    meta: 80000,
    atingido: 45000,
  },
  {
    id: "cesta-solidaria",
    slug: "cesta-solidaria",
    nome: "Cesta Solidária",
    categoria: "Combate à Fome",
    descricao:
      "Distribuição mensal de cestas básicas para famílias em extrema pobreza na região.",
    instituicao: "Mesa Brasil",
    imagem:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
    imagemAlt: "Cesta Solidária",
    status: "em_andamento",
  },
  {
    id: "1",
    slug: "reforco-escolar",
    nome: "Reforço Escolar para Todos",
    categoria: "Educação",
    descricao:
      "Programa de tutoria no contraturno escolar para crianças em situação de vulnerabilidade.",
    instituicao: "Instituto Esperança",
    imagem:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    imagemAlt: "Estudantes em sala de aula",
    meta: 50000,
    atingido: 37500,
    status: "em_andamento",
  },
  {
    id: "2",
    slug: "saude-melhor-idade",
    nome: "Saúde na Melhor Idade",
    categoria: "Saúde",
    descricao:
      "Reforma da enfermaria e compra de medicamentos essenciais para o lar de idosos.",
    instituicao: "Lar Vovô Feliz",
    imagem:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    imagemAlt: "Médico segurando mãos de paciente idoso",
    status: "em_andamento",
  },
  {
    id: "3",
    slug: "reflorestamento-urbano",
    nome: "Reflorestamento Urbano",
    categoria: "Meio Ambiente",
    descricao:
      "Plantio de 1000 mudas nativas em áreas degradadas da cidade, envolvendo a comunidade local.",
    instituicao: "Projeto Verde Vida",
    imagem:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
    imagemAlt: "Mãos plantando uma muda de árvore",
    status: "concluido",
  },
  {
    id: "5",
    slug: "orquestra-amanha",
    nome: "Orquestra do Amanhã",
    categoria: "Cultura",
    descricao:
      "Aulas de música clássica e instrumentos para jovens da periferia, promovendo inclusão.",
    instituicao: "Arte para Todos",
    imagem:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
    imagemAlt: "Crianças tocando instrumentos musicais",
    status: "em_andamento",
  },
  {
    id: "6",
    slug: "inclusao-digital",
    nome: "Inclusão Digital Jovem",
    categoria: "Educação",
    descricao:
      "Cursos de programação e design para jovens em busca do primeiro emprego.",
    instituicao: "Tech Future",
    imagem:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    imagemAlt: "Pessoas colaborando em laptops",
    meta: 30000,
    atingido: 30000,
    status: "concluido",
  },
];

/**
 * Converte projetos em instituições para exibição na página inicial
 */
export function projetosParaInstituicoes(projetos: Projeto[]): Instituicao[] {
  // Agrupa por instituição e pega o primeiro projeto de cada uma
  const instituicoesMap = new Map<string, Instituicao>();

  projetos.forEach((projeto) => {
    if (!instituicoesMap.has(projeto.instituicao)) {
      instituicoesMap.set(projeto.instituicao, {
        id: projeto.id,
        nome: projeto.instituicao,
        descricao: projeto.descricao,
        categoria: projeto.categoria,
        imagem: projeto.imagem,
        imagemAlt: projeto.imagemAlt,
      });
    }
  });

  return Array.from(instituicoesMap.values());
}

