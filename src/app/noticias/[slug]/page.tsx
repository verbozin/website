import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Cabecalho, Rodape } from "@/components/layout";
import { Botao } from "@/components/ui/Botao";
import {
  obterNoticiaPorSlug,
  obterSlugsNoticias,
  obterTodasNoticias,
  formatarDataCompleta,
} from "@/lib/markdown";
import { CardNoticia } from "@/components/ui/CardNoticia";
import type { Noticia } from "@/lib/tipos";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Gera os parâmetros estáticos para SSG
export async function generateStaticParams() {
  const slugs = obterSlugsNoticias();
  return slugs.map((slug) => ({ slug }));
}

// Gera metadados dinâmicos
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const noticia = await obterNoticiaPorSlug(slug);

  if (!noticia) {
    return {
      title: "Notícia não encontrada",
    };
  }

  return {
    title: noticia.titulo,
    description: noticia.resumo,
    openGraph: {
      title: noticia.titulo,
      description: noticia.resumo,
      images: noticia.imagem ? [noticia.imagem] : [],
    },
  };
}

export default async function PaginaNoticia({ params }: PageProps) {
  const { slug } = await params;
  const noticia = await obterNoticiaPorSlug(slug);

  if (!noticia) {
    notFound();
  }

  // Obtém notícias relacionadas
  let noticiasRelacionadas: Noticia[] = [];
  try {
    const todasNoticias = await obterTodasNoticias();
    noticiasRelacionadas = todasNoticias
      .filter((n) => n.slug !== slug && n.categoria === noticia.categoria)
      .slice(0, 3);

    // Se não houver notícias da mesma categoria, pega as mais recentes
    if (noticiasRelacionadas.length === 0) {
      noticiasRelacionadas = todasNoticias
        .filter((n) => n.slug !== slug)
        .slice(0, 3);
    }
  } catch {
    noticiasRelacionadas = [];
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Cabecalho />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-card border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm text-foreground-muted">
              <Link href="/" className="hover:text-primary">
                Início
              </Link>
              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>
              <Link href="/noticias" className="hover:text-primary">
                Notícias
              </Link>
              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>
              <span className="text-foreground truncate max-w-[200px]">
                {noticia.titulo}
              </span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium ${
                  noticia.urgente
                    ? "bg-red-100 text-red-800"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {noticia.categoria}
              </span>
              <span className="text-foreground-muted text-sm">
                {formatarDataCompleta(noticia.data)}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6">
              {noticia.titulo}
            </h1>

            <p className="text-xl text-foreground-muted leading-relaxed">
              {noticia.resumo}
            </p>
          </header>

          {/* Featured Image */}
          {noticia.imagem && (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-10">
              <img
                src={noticia.imagem}
                alt={noticia.imagemAlt || noticia.titulo}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-foreground
              prose-headings:text-foreground prose-headings:font-bold
              prose-p:text-foreground-muted prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-ul:text-foreground-muted prose-ol:text-foreground-muted
              prose-blockquote:border-primary prose-blockquote:text-foreground-muted
              prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
          />

          {/* Share & Actions */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground">
                  Compartilhe:
                </span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-background hover:bg-primary/10 text-foreground-muted hover:text-primary transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-lg bg-background hover:bg-primary/10 text-foreground-muted hover:text-primary transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-lg bg-background hover:bg-primary/10 text-foreground-muted hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">
                      link
                    </span>
                  </button>
                </div>
              </div>

              <Botao href="/doacoes" icone="volunteer_activism">
                Apoie nossa causa
              </Botao>
            </div>
          </div>
        </article>

        {/* Related News */}
        {noticiasRelacionadas.length > 0 && (
          <section className="bg-background py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Notícias Relacionadas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {noticiasRelacionadas.map((noticia) => (
                  <CardNoticia key={noticia.slug} noticia={noticia} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Gostou do que está lendo?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Sua doação ajuda a transformar histórias como essa em realidade.
              Junte-se a nós e faça parte dessa mudança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Botao
                href="/doacoes"
                className="!bg-white !text-primary hover:!bg-gray-100 shadow-lg !border-2 border-white/30"
              >
                Fazer uma doação
              </Botao>
              <Botao
                href="/noticias"
                variante="outline"
                className="!bg-white/10 backdrop-blur-sm !border-2 !border-white !text-white hover:!bg-white/20 shadow-lg"
              >
                Ver mais notícias
              </Botao>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

