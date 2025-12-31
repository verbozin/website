import { Estatistica } from "../ui/Estatistica";
import type { EstatisticaImpacto } from "@/lib/tipos";

interface SecaoEstatisticasProps {
  estatisticas: EstatisticaImpacto[];
  className?: string;
}

export function SecaoEstatisticas({
  estatisticas,
  className = "",
}: SecaoEstatisticasProps) {
  return (
    <section className={`bg-background py-8 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {estatisticas.map((estatistica, index) => (
            <Estatistica key={index} estatistica={estatistica} />
          ))}
        </div>
      </div>
    </section>
  );
}

