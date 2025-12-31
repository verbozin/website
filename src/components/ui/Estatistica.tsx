import type { EstatisticaImpacto } from "@/lib/tipos";

interface EstatisticaProps {
  estatistica: EstatisticaImpacto;
  corIcone?: string;
}

export function Estatistica({
  estatistica,
  corIcone = "text-primary",
}: EstatisticaProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl p-8 bg-card shadow-sm border border-border text-center md:text-left transition-transform hover:-translate-y-1">
      <div
        className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${corIcone} mb-2 mx-auto md:mx-0`}
      >
        <span className="material-symbols-outlined">{estatistica.icone}</span>
      </div>
      <p className="text-foreground-muted text-base font-medium">
        {estatistica.label}
      </p>
      <p className="text-foreground text-4xl font-black tracking-tight">
        {estatistica.valor}
      </p>
      {estatistica.descricao && (
        <p className="text-foreground-muted text-sm">{estatistica.descricao}</p>
      )}
    </div>
  );
}

interface EstatisticaSimplificadaProps {
  icone: string;
  valor: string;
  label: string;
}

export function EstatisticaSimplificada({
  icone,
  valor,
  label,
}: EstatisticaSimplificadaProps) {
  return (
    <div className="bg-card p-4 rounded-xl shadow-sm border border-border flex flex-col items-center text-center">
      <span className="material-symbols-outlined text-primary text-3xl mb-2">
        {icone}
      </span>
      <span className="text-2xl font-bold text-foreground">{valor}</span>
      <span className="text-sm text-foreground-muted">{label}</span>
    </div>
  );
}

