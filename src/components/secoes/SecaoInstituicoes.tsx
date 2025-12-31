import Link from "next/link";
import type { Instituicao } from "@/lib/tipos";

interface SecaoInstituicoesProps {
  titulo?: string;
  descricao?: string;
  instituicoes: Instituicao[];
  linkVerTodas?: string;
}

export function SecaoInstituicoes({
  titulo = "Instituições que Apoiamos",
  descricao = "Trabalhamos em rede para fortalecer organizações locais que fazem a diferença na ponta.",
  instituicoes,
  linkVerTodas = "/projetos",
}: SecaoInstituicoesProps) {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black text-foreground mb-4">
              {titulo}
            </h2>
            <p className="text-foreground-muted">{descricao}</p>
          </div>
          <Link
            href={linkVerTodas}
            className="text-primary font-bold hover:underline flex items-center gap-1"
          >
            Ver todas{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {instituicoes.map((instituicao) => (
            <Link
              key={instituicao.id}
              href="/em-construcao"
              className="group relative aspect-video overflow-hidden rounded-xl bg-background cursor-pointer"
            >
              {instituicao.imagem && (
                <img
                  src={instituicao.imagem}
                  alt={instituicao.imagemAlt || instituicao.nome}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <span className="text-white font-bold text-sm">
                  {instituicao.nome}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

