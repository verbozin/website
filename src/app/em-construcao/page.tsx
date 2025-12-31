import { Metadata } from "next";
import { Cabecalho, Rodape } from "@/components/layout";
import { Botao } from "@/components/ui/Botao";

export const metadata: Metadata = {
  title: "Em Construção",
  description: "Esta página está em construção. Em breve teremos novidades!",
};

export default function PaginaEmConstrucao() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Cabecalho />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
          <div className="size-32 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-6xl">
              construction
            </span>
          </div>
          
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              Estamos Construindo
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Esta página está em construção. Estamos trabalhando para trazer
              conteúdo incrível em breve!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Botao href="/" tamanho="lg">
              Voltar ao Início
            </Botao>
            <Botao href="/sobre-nos" variante="secundario" tamanho="lg">
              Conheça Nossa História
            </Botao>
          </div>
        </div>
      </main>

      <Rodape />
    </div>
  );
}

