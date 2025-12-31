import { Cabecalho, Rodape } from "@/components/layout";
import {
  SecaoHero,
  SecaoEstatisticas,
  SecaoValores,
  SecaoDoacoes,
  SecaoInstituicoes,
  SecaoTransparencia,
  SecaoNoticias,
} from "@/components/secoes";
import {
  ESTATISTICAS_IMPACTO,
  VALORES,
  PLANOS_DOACOES,
} from "@/lib/constantes";
import { obterTodasNoticias, obterTodosProjetos } from "@/lib/markdown";
import { PROJETOS_EXEMPLO, projetosParaInstituicoes } from "@/lib/dados-projetos";
import type { Noticia } from "@/lib/tipos";

export default async function PaginaInicial() {
  // Obtém as últimas notícias
  let noticias: Noticia[] = [];
  try {
    noticias = await obterTodasNoticias();
  } catch {
    noticias = [];
  }

  // Obtém projetos (fonte única de verdade)
  let projetos;
  try {
    projetos = await obterTodosProjetos();
    if (projetos.length === 0) {
      projetos = PROJETOS_EXEMPLO;
    }
  } catch {
    projetos = PROJETOS_EXEMPLO;
  }

  // Converte projetos em instituições para exibição
  const instituicoes = projetosParaInstituicoes(projetos);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Cabecalho />

      <main className="flex-1">
        {/* Hero Section */}
        <SecaoHero
          titulo="Transformando vidas através da solidariedade"
          descricao="Saciando a fome e semeando a palavra de Deus. O Verbo Zin Institute promove o ensino da Bíblia e ações missionárias para atender necessidades espirituais e materiais."
          badge="Junte-se aos doadores da esperança"
          imagemFundo="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop"
          imagemAlt="Grupo de pessoas sorrindo e dando as mãos em comunidade"
          botaoPrimario={{
            texto: "Quero Doar",
            href: "/doacoes",
          }}
          botaoSecundario={{
            texto: "Saiba Mais",
            href: "/sobre-nos",
          }}
        />

        {/* Estatísticas */}
        <SecaoEstatisticas estatisticas={ESTATISTICAS_IMPACTO} />

        {/* Valores */}
        <SecaoValores valores={VALORES} />

        {/* Planos de Doação */}
        <SecaoDoacoes planos={PLANOS_DOACOES} />

        {/* Instituições */}
        <SecaoInstituicoes instituicoes={instituicoes} />

        {/* Transparência */}
        <SecaoTransparencia />

        {/* Notícias */}
        {noticias.length > 0 && <SecaoNoticias noticias={noticias} />}
      </main>

      <Rodape />
    </div>
  );
}
