import Link from "next/link";
import type { Noticia } from "@/lib/tipos";
import {
  Card,
  CardImagem,
  CardConteudo,
  CardCategoria,
  CardTitulo,
  CardDescricao,
} from "./Card";

// Função de formatação de data (evita importar markdown.ts que usa fs)
function formatarData(data: string): string {
  const date = new Date(data);
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface CardNoticiaProps {
  noticia: Noticia;
}

const CORES_CATEGORIA: Record<string, { cor: string; icone: string }> = {
  Educação: { cor: "text-primary", icone: "school" },
  Transparência: { cor: "text-green-600", icone: "bar_chart" },
  Parcerias: { cor: "text-purple-600", icone: "handshake" },
  Eventos: { cor: "text-orange-500", icone: "event" },
  Tecnologia: { cor: "text-blue-500", icone: "laptop_mac" },
  Urgente: { cor: "text-red-600", icone: "campaign" },
  Institucional: { cor: "text-primary", icone: "business" },
};

export function CardNoticia({ noticia }: CardNoticiaProps) {
  const categoria = CORES_CATEGORIA[noticia.categoria] || {
    cor: "text-primary",
    icone: "article",
  };

  const cardClasses = noticia.urgente
    ? "bg-red-50 border-red-100"
    : "bg-card border-border";

  return (
    <Link href={`/noticias/${noticia.slug}`} className="group">
      <Card className={`flex flex-col overflow-hidden ${cardClasses}`} hover>
        {noticia.imagem && (
          <CardImagem
            src={noticia.imagem}
            alt={noticia.imagemAlt || noticia.titulo}
            className="h-48 w-full"
            overlay
          />
        )}
        <CardConteudo className="flex flex-col flex-1 gap-3">
          <CardCategoria cor={categoria.cor} icone={categoria.icone}>
            {noticia.categoria}
          </CardCategoria>

          <CardTitulo>{noticia.titulo}</CardTitulo>

          <CardDescricao>{noticia.resumo}</CardDescricao>

          <div className="mt-auto pt-4 flex items-center justify-between border-t border-border-muted">
            <span className="text-xs text-foreground-muted font-medium">
              {formatarData(noticia.data)}
            </span>
            <span
              className={`text-sm font-bold ${noticia.urgente ? "text-red-600" : "text-primary"} hover:underline flex items-center gap-1`}
            >
              Ler mais
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </span>
          </div>
        </CardConteudo>
      </Card>
    </Link>
  );
}

