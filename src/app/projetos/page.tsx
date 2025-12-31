import { Metadata } from "next";
import { Cabecalho, Rodape } from "@/components/layout";
import { Botao } from "@/components/ui/Botao";
import { ListaProjetos } from "@/components/projetos/ListaProjetos";
import { obterTodosProjetos } from "@/lib/markdown";
import { PROJETOS_EXEMPLO } from "@/lib/dados-projetos";
import type { Projeto } from "@/lib/tipos";

export const metadata: Metadata = {
  title: "Projetos e Parcerias",
  description:
    "Conheça os projetos e instituições apoiadas pelo Verbo Zin Institute.",
};

export default async function PaginaProjetos() {
  let projetos: Projeto[];

  try {
    projetos = await obterTodosProjetos();
    if (projetos.length === 0) {
      projetos = PROJETOS_EXEMPLO;
    }
  } catch {
    projetos = PROJETOS_EXEMPLO;
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Cabecalho />

      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="relative bg-background-alt">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <img
              src="/logo.png"
              alt="Verbo Zin Institute"
              className="w-96 h-96 object-contain"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-[#101622]/80 to-[#101622]/60"></div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="flex max-w-2xl flex-col gap-6">
              <div className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-400" />
                <span>Juntos fazemos a diferença</span>
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Projetos que Transformam Realidades
              </h1>
              <p className="text-lg text-gray-300 sm:text-xl">
                Conheça as instituições parceiras e as iniciativas que estão
                mudando a vida de milhares de pessoas com o seu apoio direto.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Botao href="/doacoes" tamanho="lg">
                  Saiba como ajudar
                </Botao>
                <Botao
                  href="/sobre-nos"
                  variante="outline"
                  tamanho="lg"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10"
                  icone="play_circle"
                  iconePosicao="esquerda"
                >
                  Ver vídeo institucional
                </Botao>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Strip */}
        <div className="w-full bg-primary py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-white sm:text-4xl">
                  xxx+
                </span>
                <span className="mt-2 text-sm font-medium text-white/80">
                  Projetos Ativos
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-white sm:text-4xl">
                  R$ xxx
                </span>
                <span className="mt-2 text-sm font-medium text-white/80">
                  Investidos em 2023
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-white sm:text-4xl">
                  xxx
                </span>
                <span className="mt-2 text-sm font-medium text-white/80">
                  Instituições Parceiras
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-white sm:text-4xl">
                  xxx
                </span>
                <span className="mt-2 text-sm font-medium text-white/80">
                  Vidas Impactadas
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <ListaProjetos projetos={projetos} />
        </div>

        {/* CTA Section */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center shadow-2xl sm:px-12 lg:px-16">
              <div className="relative z-10 mx-auto max-w-3xl">
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Quer ver mais histórias como essas acontecerem?
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Sua doação é o combustível que move todos esses projetos.
                  Torne-se um doador mensal e ajude a transformar o futuro.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <Botao
                    href="/doacoes"
                    className="!bg-white !text-primary hover:!bg-gray-50 shadow-lg !border-2 border-white/30"
                    tamanho="lg"
                  >
                    Quero Doar Agora
                  </Botao>
                </div>
              </div>

              {/* Decorative background pattern */}
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-10">
                <svg
                  className="h-96 w-96 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="40" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-10">
                <svg
                  className="h-96 w-96 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="40" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

