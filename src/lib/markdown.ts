import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type {
  Noticia,
  NoticiaFrontmatter,
  Projeto,
  ProjetoFrontmatter,
  RelatorioTransparencia,
  RelatorioFrontmatter,
} from "./tipos";

// Diretório base de conteúdo
const contentDirectory = path.join(process.cwd(), "content");

/**
 * Converte conteúdo markdown para HTML
 */
async function markdownParaHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

/**
 * Lê e processa um arquivo markdown com frontmatter
 */
function lerArquivoMarkdown<T>(
  diretorio: string,
  arquivo: string
): { frontmatter: T; conteudo: string; slug: string } {
  const caminhoCompleto = path.join(diretorio, arquivo);
  const conteudoArquivo = fs.readFileSync(caminhoCompleto, "utf8");
  const { data, content } = matter(conteudoArquivo);

  // Gera slug a partir do nome do arquivo (remove extensão .md)
  const slug = arquivo.replace(/\.md$/, "");

  return {
    frontmatter: data as T,
    conteudo: content,
    slug,
  };
}

/**
 * Lista todos os arquivos markdown em um diretório
 */
function listarArquivosMarkdown(diretorio: string): string[] {
  const caminhoDiretorio = path.join(contentDirectory, diretorio);

  if (!fs.existsSync(caminhoDiretorio)) {
    return [];
  }

  return fs
    .readdirSync(caminhoDiretorio)
    .filter((arquivo) => arquivo.endsWith(".md"));
}

// ==================== NOTÍCIAS ====================

/**
 * Obtém todas as notícias ordenadas por data (mais recente primeiro)
 */
export async function obterTodasNoticias(): Promise<Noticia[]> {
  const diretorioNoticias = path.join(contentDirectory, "noticias");
  const arquivos = listarArquivosMarkdown("noticias");

  const noticias = await Promise.all(
    arquivos.map(async (arquivo) => {
      const { frontmatter, conteudo, slug } =
        lerArquivoMarkdown<NoticiaFrontmatter>(diretorioNoticias, arquivo);

      const conteudoHtml = await markdownParaHtml(conteudo);

      return {
        slug,
        titulo: frontmatter.titulo,
        data: frontmatter.data,
        categoria: frontmatter.categoria,
        resumo: frontmatter.resumo,
        conteudo: conteudoHtml,
        imagem: frontmatter.imagem,
        imagemAlt: frontmatter.imagemAlt,
        destaque: frontmatter.destaque,
        urgente: frontmatter.urgente,
      } as Noticia;
    })
  );

  // Ordena por data (mais recente primeiro)
  return noticias.sort(
    (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
  );
}

/**
 * Obtém uma notícia pelo slug
 */
export async function obterNoticiaPorSlug(
  slug: string
): Promise<Noticia | null> {
  const diretorioNoticias = path.join(contentDirectory, "noticias");
  const arquivo = `${slug}.md`;
  const caminhoArquivo = path.join(diretorioNoticias, arquivo);

  if (!fs.existsSync(caminhoArquivo)) {
    return null;
  }

  const { frontmatter, conteudo } = lerArquivoMarkdown<NoticiaFrontmatter>(
    diretorioNoticias,
    arquivo
  );

  const conteudoHtml = await markdownParaHtml(conteudo);

  return {
    slug,
    titulo: frontmatter.titulo,
    data: frontmatter.data,
    categoria: frontmatter.categoria,
    resumo: frontmatter.resumo,
    conteudo: conteudoHtml,
    imagem: frontmatter.imagem,
    imagemAlt: frontmatter.imagemAlt,
    destaque: frontmatter.destaque,
    urgente: frontmatter.urgente,
  };
}

/**
 * Obtém todos os slugs de notícias (para generateStaticParams)
 */
export function obterSlugsNoticias(): string[] {
  const arquivos = listarArquivosMarkdown("noticias");
  return arquivos.map((arquivo) => arquivo.replace(/\.md$/, ""));
}

/**
 * Obtém notícias em destaque
 */
export async function obterNoticiasDestaque(): Promise<Noticia[]> {
  const todasNoticias = await obterTodasNoticias();
  return todasNoticias.filter((noticia) => noticia.destaque);
}

/**
 * Obtém notícias por categoria
 */
export async function obterNoticiasPorCategoria(
  categoria: string
): Promise<Noticia[]> {
  const todasNoticias = await obterTodasNoticias();
  return todasNoticias.filter((noticia) => noticia.categoria === categoria);
}

// ==================== PROJETOS ====================

/**
 * Obtém todos os projetos
 */
export async function obterTodosProjetos(): Promise<Projeto[]> {
  const diretorioProjetos = path.join(contentDirectory, "projetos");
  const arquivos = listarArquivosMarkdown("projetos");

  const projetos = await Promise.all(
    arquivos.map(async (arquivo) => {
      const { frontmatter, conteudo, slug } =
        lerArquivoMarkdown<ProjetoFrontmatter>(diretorioProjetos, arquivo);

      const descricaoCompleta = await markdownParaHtml(conteudo);

      return {
        id: slug,
        slug,
        nome: frontmatter.nome,
        categoria: frontmatter.categoria,
        descricao: frontmatter.descricao,
        descricaoCompleta,
        instituicao: frontmatter.instituicao,
        instituicaoLogo: frontmatter.instituicaoLogo,
        imagem: frontmatter.imagem,
        imagemAlt: frontmatter.imagemAlt,
        meta: frontmatter.meta,
        atingido: frontmatter.atingido,
        status: frontmatter.status,
      } as Projeto;
    })
  );

  return projetos;
}

/**
 * Obtém um projeto pelo slug
 */
export async function obterProjetoPorSlug(
  slug: string
): Promise<Projeto | null> {
  const diretorioProjetos = path.join(contentDirectory, "projetos");
  const arquivo = `${slug}.md`;
  const caminhoArquivo = path.join(diretorioProjetos, arquivo);

  if (!fs.existsSync(caminhoArquivo)) {
    return null;
  }

  const { frontmatter, conteudo } = lerArquivoMarkdown<ProjetoFrontmatter>(
    diretorioProjetos,
    arquivo
  );

  const descricaoCompleta = await markdownParaHtml(conteudo);

  return {
    id: slug,
    slug,
    nome: frontmatter.nome,
    categoria: frontmatter.categoria,
    descricao: frontmatter.descricao,
    descricaoCompleta,
    instituicao: frontmatter.instituicao,
    instituicaoLogo: frontmatter.instituicaoLogo,
    imagem: frontmatter.imagem,
    imagemAlt: frontmatter.imagemAlt,
    meta: frontmatter.meta,
    atingido: frontmatter.atingido,
    status: frontmatter.status,
  };
}

/**
 * Obtém slugs de projetos (para generateStaticParams)
 */
export function obterSlugsProjetos(): string[] {
  const arquivos = listarArquivosMarkdown("projetos");
  return arquivos.map((arquivo) => arquivo.replace(/\.md$/, ""));
}

// ==================== TRANSPARÊNCIA ====================

/**
 * Obtém todos os relatórios de transparência
 */
export async function obterTodosRelatorios(): Promise<RelatorioTransparencia[]> {
  const diretorioRelatorios = path.join(contentDirectory, "transparencia");
  const arquivos = listarArquivosMarkdown("transparencia");

  const relatorios = arquivos.map((arquivo) => {
    const { frontmatter, slug } = lerArquivoMarkdown<RelatorioFrontmatter>(
      diretorioRelatorios,
      arquivo
    );

    return {
      slug,
      titulo: frontmatter.titulo,
      tipo: frontmatter.tipo,
      ano: frontmatter.ano,
      trimestre: frontmatter.trimestre,
      descricao: frontmatter.descricao,
      arquivoUrl: frontmatter.arquivoUrl,
      tamanhoArquivo: frontmatter.tamanhoArquivo,
    } as RelatorioTransparencia;
  });

  // Ordena por ano (mais recente primeiro)
  return relatorios.sort((a, b) => b.ano - a.ano);
}

/**
 * Obtém relatórios por ano
 */
export async function obterRelatoriosPorAno(
  ano: number
): Promise<RelatorioTransparencia[]> {
  const todosRelatorios = await obterTodosRelatorios();
  return todosRelatorios.filter((relatorio) => relatorio.ano === ano);
}

// ==================== UTILITÁRIOS ====================

/**
 * Formata data para exibição em português
 */
export function formatarData(dataString: string): string {
  const data = new Date(dataString);
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/**
 * Formata data completa
 */
export function formatarDataCompleta(dataString: string): string {
  const data = new Date(dataString);
  return data.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

