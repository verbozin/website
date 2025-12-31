import { Metadata } from "next";
import { Cabecalho, Rodape } from "@/components/layout";
import { EstatisticaSimplificada } from "@/components/ui/Estatistica";
import { ListaNoticias } from "@/components/noticias/ListaNoticias";
import { obterTodasNoticias } from "@/lib/markdown";
import type { Noticia } from "@/lib/tipos";

export const metadata: Metadata = {
  title: "Notícias e Impacto",
  description:
    "Acompanhe as últimas notícias, histórias de sucesso e atualizações do Verbo Zin Institute.",
};

// Notícias de exemplo para quando não houver conteúdo markdown
const noticiasExemplo: Noticia[] = [
  {
    slug: "jornada-de-maria",
    titulo: "A jornada de Maria: Do abrigo à universidade",
    data: "2025-12-20",
    categoria: "Educação",
    resumo:
      "Conheça a história inspiradora de uma das jovens apoiadas pelo nosso programa de educação bíblica.",
    conteudo: "",
    imagem:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
    imagemAlt: "Jovem estudante sorrindo segurando livros",
    destaque: true,
  },
  {
    slug: "relatorio-trimestral-2025",
    titulo: "Relatório Trimestral: Onde seu investimento foi aplicado",
    data: "2025-12-15",
    categoria: "Transparência",
    resumo:
      "Divulgamos hoje o balanço do 4º trimestre com detalhamento de todas as ações realizadas.",
    conteudo: "",
    imagem:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    imagemAlt: "Gráficos financeiros em uma mesa",
  },
  {
    slug: "nova-parceria-igreja",
    titulo: "Nova Parceria: Igreja Comunidade Esperança",
    data: "2025-12-10",
    categoria: "Parcerias",
    resumo:
      "É com alegria que anunciamos nossa nova parceria para expandir a distribuição de alimentos.",
    conteudo: "",
    imagem:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop",
    imagemAlt: "Pessoas apertando as mãos em frente a um prédio",
  },
  {
    slug: "dia-voluntariado-2025",
    titulo: "Resultados do Dia do Voluntariado 2025",
    data: "2025-12-05",
    categoria: "Eventos",
    resumo:
      "Mais de 300 voluntários se uniram para distribuir cestas básicas em 5 comunidades.",
    conteudo: "",
    imagem:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    imagemAlt: "Grupo de voluntários reunidos usando camisetas iguais",
  },
  {
    slug: "campanha-natal-2025",
    titulo: "Campanha de Natal: Precisamos da sua ajuda",
    data: "2025-12-01",
    categoria: "Urgente",
    resumo:
      "O Natal está chegando e nossos estoques estão baixos. Doe alimentos e brinquedos.",
    conteudo: "",
    imagem:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=400&fit=crop",
    imagemAlt: "Pilha de roupas de inverno e cobertores para doação",
    urgente: true,
  },
  {
    slug: "app-biblico-lancado",
    titulo: "Aplicativo Bíblico inaugurado",
    data: "2025-11-20",
    categoria: "Tecnologia",
    resumo:
      "Milhares de pessoas agora têm acesso gratuito às Escrituras em formato digital.",
    conteudo: "",
    imagem:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    imagemAlt: "Pessoa usando tablet mostrando conteúdo digital de educação",
  },
];

export default async function PaginaNoticias() {
  let noticias: Noticia[];

  try {
    noticias = await obterTodasNoticias();
    if (noticias.length === 0) {
      noticias = noticiasExemplo;
    }
  } catch {
    noticias = noticiasExemplo;
  }

  const noticiaDestaque = noticias.find((n) => n.destaque) || noticias[0];
  const outrasNoticias = noticias.filter((n) => n.slug !== noticiaDestaque?.slug);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Cabecalho />

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        {noticiaDestaque && (
          <div className="w-full max-w-[1280px] px-4 md:px-10 py-6">
            <div
              className="flex flex-col gap-6 md:min-h-[480px] bg-cover bg-center bg-no-repeat rounded-2xl items-start justify-end px-6 pb-10 pt-40 md:px-12 relative overflow-hidden group shadow-xl"
              style={{
                backgroundImage: noticiaDestaque.imagem
                  ? `url("${noticiaDestaque.imagem}")`
                  : undefined,
              }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-4 text-left max-w-2xl">
                <span className="inline-flex items-center rounded-md bg-primary/90 px-2.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-blue-700/10 w-fit">
                  Destaque do Mês
                </span>
                <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                  {noticiaDestaque.titulo}
                </h1>
                <h2 className="text-gray-200 text-base md:text-lg font-normal leading-relaxed">
                  {noticiaDestaque.resumo}
                </h2>
                <div className="flex gap-3 mt-2">
                  <a
                    href={`/noticias/${noticiaDestaque.slug}`}
                    className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors"
                  >
                    <span className="truncate">Ler História Completa</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Impact Metrics Widget */}
        <div className="w-full max-w-[1280px] px-4 md:px-10 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <EstatisticaSimplificada
              icone="water_drop"
              valor="xxx+"
              label="Famílias Atendidas"
            />
            <EstatisticaSimplificada
              icone="school"
              valor="xxx"
              label="Igrejas Apoiadas"
            />
            <EstatisticaSimplificada
              icone="volunteer_activism"
              valor="R$ xxx"
              label="Investidos em 2025"
            />
            <EstatisticaSimplificada
              icone="groups"
              valor="xxx+"
              label="Voluntários Ativos"
            />
          </div>
        </div>

        {/* News Feed with Filters */}
        <div className="w-full max-w-[1280px] px-4 md:px-10 py-6 pb-12">
          <ListaNoticias noticias={outrasNoticias} />
        </div>

        {/* Newsletter Section */}
        <section className="w-full bg-primary/5 py-16 px-4">
          <div className="max-w-[720px] mx-auto text-center flex flex-col items-center gap-6">
            <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-4xl">mail</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground">
              Não perca nenhuma história
            </h2>
            <p className="text-foreground-muted text-lg">
              Junte-se aos nossos apoiadores e receba atualizações mensais sobre
              o impacto da sua doação.
            </p>
            <form className="flex w-full max-w-md gap-3 flex-col sm:flex-row mt-4">
              <input
                className="flex-1 rounded-lg border border-border px-4 py-3 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-card text-foreground placeholder-foreground-muted"
                placeholder="Seu melhor e-mail"
                required
                type="email"
              />
              <button
                className="rounded-lg bg-primary px-6 py-3 font-bold text-white hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20 whitespace-nowrap"
                type="submit"
              >
                Inscrever-se
              </button>
            </form>
            <p className="text-xs text-foreground-muted mt-2">
              Respeitamos sua privacidade. Cancele a qualquer momento.
            </p>
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

