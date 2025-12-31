// Tipos para conteúdo do site

export interface Noticia {
  slug: string;
  titulo: string;
  data: string;
  categoria: NoticiaCategoria;
  resumo: string;
  conteudo: string;
  imagem?: string;
  imagemAlt?: string;
  destaque?: boolean;
  urgente?: boolean;
}

export type NoticiaCategoria =
  | "Educação"
  | "Transparência"
  | "Parcerias"
  | "Eventos"
  | "Tecnologia"
  | "Urgente"
  | "Institucional";

export interface Projeto {
  id: string;
  slug: string;
  nome: string;
  categoria: ProjetoCategoria;
  descricao: string;
  descricaoCompleta?: string;
  instituicao: string;
  instituicaoLogo?: string;
  imagem?: string;
  imagemAlt?: string;
  meta?: number;
  atingido?: number;
  status?: "em_andamento" | "concluido" | "planejado";
}

export type ProjetoCategoria =
  | "Educação"
  | "Saúde"
  | "Combate à Fome"
  | "Meio Ambiente"
  | "Cultura"
  | "Tecnologia";

export interface Instituicao {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
  imagem?: string;
  imagemAlt?: string;
}

export interface RelatorioTransparencia {
  slug: string;
  titulo: string;
  tipo: "relatorio_anual" | "balanco" | "auditoria" | "outro";
  ano: number;
  trimestre?: number;
  descricao: string;
  arquivoUrl: string;
  tamanhoArquivo: string;
}

export interface MembroEquipe {
  nome: string;
  cargo: string;
  descricao?: string;
  imagem?: string;
}

export interface EstatisticaImpacto {
  icone: string;
  valor: string;
  label: string;
  descricao?: string;
}

export interface PlanoDoacoes {
  id: string;
  nome: string;
  valor: number;
  descricao: string;
  beneficios: string[];
  popular?: boolean;
}

export interface Valor {
  icone: string;
  titulo: string;
  descricao: string;
  corIcone?: string;
}

export interface LinkNavegacao {
  href: string;
  label: string;
  ativo?: boolean;
}

export interface ConteudoSobre {
  missao: string;
  visao?: string;
  valores: Valor[];
  principiosBiblicos: {
    referencia: string;
    texto: string;
  }[];
  historia?: {
    ano: string;
    titulo: string;
    descricao: string;
    icone?: string;
  }[];
  equipe?: MembroEquipe[];
}

// Frontmatter types para markdown
export interface NoticiaFrontmatter {
  titulo: string;
  data: string;
  categoria: NoticiaCategoria;
  resumo: string;
  imagem?: string;
  imagemAlt?: string;
  destaque?: boolean;
  urgente?: boolean;
}

export interface ProjetoFrontmatter {
  nome: string;
  categoria: ProjetoCategoria;
  descricao: string;
  instituicao: string;
  instituicaoLogo?: string;
  imagem?: string;
  imagemAlt?: string;
  meta?: number;
  atingido?: number;
  status?: "em_andamento" | "concluido" | "planejado";
}

export interface RelatorioFrontmatter {
  titulo: string;
  tipo: "relatorio_anual" | "balanco" | "auditoria" | "outro";
  ano: number;
  trimestre?: number;
  descricao: string;
  arquivoUrl: string;
  tamanhoArquivo: string;
}

