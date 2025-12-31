import { Metadata } from "next";
import { Suspense } from "react";
import { Cabecalho, Rodape } from "@/components/layout";
import { WidgetDoacao } from "@/components/doacoes/WidgetDoacao";
import { obterTodosProjetos } from "@/lib/markdown";
import { PROJETOS_EXEMPLO, projetosParaInstituicoes } from "@/lib/dados-projetos";

export const metadata: Metadata = {
  title: "Doações",
  description:
    "Faça sua doação e ajude a transformar vidas. Toda contribuição é transparente e faz a diferença.",
};

export default async function PaginaDoacoes() {
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
  const instituicoesBeneficiadas = projetosParaInstituicoes(projetos);
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Cabecalho />

      <main className="flex-grow">
        {/* Hero Section with Donation Widget */}
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Story & Impact */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Urgente
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1] mb-6">
                    Sua contribuição transforma vidas hoje
                  </h1>
                  <p className="text-lg text-foreground-muted leading-relaxed mb-8 max-w-2xl">
                    Milhares de famílias dependem do nosso apoio para ter acesso
                    a alimentos, saúde e educação bíblica. Com a sua ajuda,
                    podemos levar esperança e recursos essenciais para quem mais
                    precisa.
                  </p>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap gap-6 items-center pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground-muted">
                      <span className="material-symbols-outlined text-green-600">
                        lock
                      </span>
                      Pagamento Seguro
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground-muted">
                      <span className="material-symbols-outlined text-blue-600">
                        verified_user
                      </span>
                      Certificado SSL
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground-muted">
                      <span className="material-symbols-outlined text-yellow-600">
                        stars
                      </span>
                      Transparência Nota A
                    </div>
                  </div>
                </div>

                {/* Impact Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=450&fit=crop"
                    alt="Criança sorrindo recebendo assistência humanitária"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                    <p className="font-bold text-lg">
                      &quot;O apoio chegou na hora certa&quot;
                    </p>
                    <p className="text-sm opacity-90">
                      Maria, beneficiada pelo programa de nutrição
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Donation Widget */}
              <div className="lg:col-span-5 relative">
                <div className="sticky top-24">
                  <Suspense fallback={<div className="bg-card rounded-2xl shadow-2xl shadow-primary/10 border border-border p-6 sm:p-8 h-96 animate-pulse" />}>
                    <WidgetDoacao />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="bg-card py-16 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Transparência é nosso compromisso
              </h2>
              <p className="text-foreground-muted">
                Sabemos que a confiança é a base de tudo. Por isso, prestamos
                contas de cada centavo recebido e investido nas causas que
                apoiamos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl">
                    home_health
                  </span>
                </div>
                <h3 className="text-4xl font-black text-foreground mb-2">
                  xx%
                </h3>
                <p className="font-bold text-lg mb-2">Projetos Sociais</p>
                <p className="text-sm text-foreground-muted">
                  Diretamente aplicado em alimentação, saúde e educação nas
                  comunidades.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl">
                    trending_up
                  </span>
                </div>
                <h3 className="text-4xl font-black text-foreground mb-2">
                  xx%
                </h3>
                <p className="font-bold text-lg mb-2">Expansão</p>
                <p className="text-sm text-foreground-muted">
                  Investimento para alcançar novas regiões e ajudar mais
                  pessoas.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background">
                <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl">
                    settings
                  </span>
                </div>
                <h3 className="text-4xl font-black text-foreground mb-2">x%</h3>
                <p className="font-bold text-lg mb-2">Administrativo</p>
                <p className="text-sm text-foreground-muted">
                  Custos operacionais mantidos no mínimo para máxima eficiência.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                href="/transparencia"
              >
                Ver relatórios financeiros completos
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Institutions Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Instituições Beneficiadas
                </h2>
                <p className="text-foreground-muted mt-2">
                  Veja quem recebe o seu apoio diretamente.
                </p>
              </div>
              <a
                className="hidden md:block text-primary font-semibold hover:underline"
                href="/projetos"
              >
                Ver todas
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {instituicoesBeneficiadas.map((instituicao) => (
                <div
                  key={instituicao.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  <div className="aspect-[4/3] bg-background relative overflow-hidden">
                    {instituicao.imagem ? (
                      <img
                        src={instituicao.imagem}
                        alt={instituicao.imagemAlt || instituicao.nome}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <img
                        src="/logo.png"
                        alt={instituicao.nome}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {instituicao.nome}
                    </h3>
                    <p className="text-sm text-foreground-muted mb-3 line-clamp-2">
                      {instituicao.descricao}
                    </p>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {instituicao.categoria}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-card border-t border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-foreground mb-10">
              Dúvidas Frequentes
            </h2>

            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4 cursor-pointer hover:bg-background transition-colors">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-foreground">
                    <span>
                      Posso cancelar minha doação mensal a qualquer momento?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </span>
                  </summary>
                  <p className="text-foreground-muted mt-3 text-sm leading-relaxed">
                    Sim! Você tem total controle sobre sua doação. O
                    cancelamento pode ser feito diretamente na área do doador ou
                    entrando em contato com nosso suporte, sem burocracia.
                  </p>
                </details>
              </div>

              <div className="border border-border rounded-lg p-4 cursor-pointer hover:bg-background transition-colors">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-foreground">
                    <span>Recebo comprovante fiscal para Imposto de Renda?</span>
                    <span className="transition group-open:rotate-180">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </span>
                  </summary>
                  <p className="text-foreground-muted mt-3 text-sm leading-relaxed">
                    Sim, todas as doações são registradas e enviamos anualmente
                    o informe de rendimentos para que você possa declarar sua
                    contribuição no Imposto de Renda.
                  </p>
                </details>
              </div>

              <div className="border border-border rounded-lg p-4 cursor-pointer hover:bg-background transition-colors">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-foreground">
                    <span>Meus dados de cartão de crédito estão seguros?</span>
                    <span className="transition group-open:rotate-180">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </span>
                  </summary>
                  <p className="text-foreground-muted mt-3 text-sm leading-relaxed">
                    Absolutamente. Utilizamos gateways de pagamento líderes de
                    mercado com criptografia de ponta a ponta (SSL). Não
                    armazenamos os dados sensíveis do seu cartão em nossos
                    servidores.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

