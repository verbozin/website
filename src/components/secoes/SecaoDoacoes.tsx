"use client";

import { useRouter } from "next/navigation";
import { Botao } from "../ui/Botao";
import type { PlanoDoacoes } from "@/lib/tipos";

interface SecaoDoacoesProps {
  readonly titulo?: string;
  readonly descricao?: string;
  readonly planos: readonly PlanoDoacoes[];
}

export function SecaoDoacoes({
  titulo = "Faça a diferença hoje",
  descricao = "Escolha como você deseja contribuir. Toda doação, pontual ou recorrente, ajuda a manter nossos projetos vivos.",
  planos,
}: SecaoDoacoesProps) {
  const router = useRouter();

  const handleDoar = (valor?: number) => {
    if (valor) {
      // Redireciona para a página de doações com o valor selecionado
      router.push(`/doacoes?valor=${valor}`);
    } else {
      router.push("/doacoes");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight mb-4">
              {titulo}
            </h2>
            <p className="text-foreground-muted text-lg">{descricao}</p>
          </div>

          <div className="flex items-center gap-2 bg-card p-1 rounded-lg border border-border">
            <button
              className="px-4 py-2 rounded-md text-sm font-medium text-foreground-muted hover:text-foreground transition-all relative"
              disabled
            >
              <span>Mensal</span>
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                Em construção
              </span>
            </button>
            <button className="px-4 py-2 rounded-md text-sm font-bold transition-all bg-card shadow-sm text-primary">
              Única
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {planos.map((plano, index) => (
            <button
              key={plano.id}
              onClick={() => handleDoar(plano.valor)}
              type="button"
              className={`flex flex-col rounded-2xl bg-card p-8 shadow-sm relative overflow-hidden cursor-pointer transition-all duration-300 text-left w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                plano.popular
                  ? "border-2 border-primary shadow-lg md:-translate-y-4 hover:scale-105 hover:shadow-xl"
                  : "border border-border hover:border-primary hover:shadow-xl hover:scale-105 hover:-translate-y-1"
              }`}
            >
              {plano.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {plano.nome}
                  </h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-black text-foreground ${plano.popular ? "text-5xl" : "text-4xl"}`}
                  >
                    R$ {plano.valor}
                  </span>
                  <span className="text-foreground-muted font-medium">
                    /vez
                  </span>
                </div>
                <p className="mt-4 text-sm text-foreground-muted">
                  {plano.descricao}
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plano.beneficios.map((beneficio) => (
                  <li
                    key={beneficio}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <span
                      className={`material-symbols-outlined text-[20px] ${plano.popular ? "text-primary" : "text-green-500"}`}
                    >
                      check_circle
                    </span>
                    {beneficio}
                  </li>
                ))}
              </ul>

              <span
                className={`w-full justify-center inline-flex items-center font-bold transition-all rounded-lg px-4 py-2.5 ${
                  plano.popular
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-transparent border-2 border-primary text-primary hover:bg-primary/10"
                }`}
              >
                Doar R$ {plano.valor}
              </span>
            </button>
          ))}
        </div>

        {/* Opção Outro Valor */}
        <div className="mt-8 flex justify-center">
          <Botao
            onClick={() => handleDoar()}
            variante="outline"
            className="flex items-center gap-2"
            icone="edit"
            iconePosicao="esquerda"
          >
            Outro valor
          </Botao>
        </div>
      </div>
    </section>
  );
}

