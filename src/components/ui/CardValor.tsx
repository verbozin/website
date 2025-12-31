import type { Valor } from "@/lib/tipos";

interface CardValorProps {
  valor: Valor;
}

const CORES_ICONE: Record<string, string> = {
  "text-primary": "bg-blue-100 text-primary",
  "text-pink-500": "bg-pink-100 text-pink-500",
  "text-purple-600": "bg-purple-100 text-purple-600",
  "text-green-600": "bg-green-100 text-green-600",
  "text-orange-500": "bg-orange-100 text-orange-500",
};

export function CardValor({ valor }: CardValorProps) {
  const corClasse =
    CORES_ICONE[valor.corIcone || "text-primary"] || CORES_ICONE["text-primary"];

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-8">
      <div
        className={`size-12 rounded-full ${corClasse} flex items-center justify-center`}
      >
        <span className="material-symbols-outlined">{valor.icone}</span>
      </div>
      <div>
        <h4 className="text-xl font-bold text-foreground mb-2">
          {valor.titulo}
        </h4>
        <p className="text-foreground-muted leading-relaxed">
          {valor.descricao}
        </p>
      </div>
    </div>
  );
}

