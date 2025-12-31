import { CardValor } from "../ui/CardValor";
import type { Valor } from "@/lib/tipos";

interface SecaoValoresProps {
  titulo?: string;
  subtitulo?: string;
  descricao?: string;
  valores: Valor[];
}

export function SecaoValores({
  titulo = "Nossos Princípios",
  subtitulo = "Valores que guiam nossas ações",
  descricao = "Trabalhamos com pilares sólidos para garantir que sua ajuda chegue a quem precisa com integridade.",
  valores,
}: SecaoValoresProps) {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold text-sm tracking-wide uppercase mb-2">
            {titulo}
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-foreground leading-tight mb-4">
            {subtitulo}
          </h3>
          <p className="text-foreground-muted text-lg">{descricao}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valores.map((valor, index) => (
            <CardValor key={index} valor={valor} />
          ))}
        </div>
      </div>
    </section>
  );
}

