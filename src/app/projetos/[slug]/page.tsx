import { redirect } from "next/navigation";
import { obterSlugsProjetos } from "@/lib/markdown";
import { PROJETOS_EXEMPLO } from "@/lib/dados-projetos";

// Gera os parâmetros estáticos para SSG
export async function generateStaticParams() {
  let slugs: string[] = [];
  
  try {
    slugs = obterSlugsProjetos();
  } catch {
    // Se não houver markdown, usa os slugs dos projetos exemplo
    slugs = PROJETOS_EXEMPLO.map((projeto) => projeto.slug);
  }
  
  return slugs.map((slug) => ({
    slug,
  }));
}

export default function PaginaDetalheProjeto() {
  redirect("/em-construcao");
}

