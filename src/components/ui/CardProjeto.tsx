import Link from "next/link";
import type { Projeto } from "@/lib/tipos";
import {
  Card,
  CardImagem,
  CardConteudo,
  CardTitulo,
  CardDescricao,
} from "./Card";

interface CardProjetoProps {
  readonly projeto: Projeto;
}

const CORES_CATEGORIA: Record<string, { cor: string; bgCor: string }> = {
  Educação: { cor: "text-blue-800", bgCor: "bg-blue-100" },
  Saúde: { cor: "text-red-800", bgCor: "bg-red-100" },
  "Combate à Fome": { cor: "text-orange-800", bgCor: "bg-orange-100" },
  "Meio Ambiente": { cor: "text-green-800", bgCor: "bg-green-100" },
  Cultura: { cor: "text-purple-800", bgCor: "bg-purple-100" },
  Tecnologia: { cor: "text-blue-800", bgCor: "bg-blue-100" },
};

export function CardProjeto({ projeto }: CardProjetoProps) {
  const categoria = CORES_CATEGORIA[projeto.categoria] || {
    cor: "text-gray-800",
    bgCor: "bg-gray-100",
  };

  const porcentagemAtingida =
    projeto.meta && projeto.atingido
      ? Math.round((projeto.atingido / projeto.meta) * 100)
      : null;

  // Usa a imagem do projeto ou o logo como padrão
  const imagem = projeto.imagem || "/logo.png";
  const imagemAlt = projeto.imagemAlt || projeto.nome;

  return (
    <Link href={`/projetos/${projeto.slug}`} className="group">
      <Card className="flex flex-col overflow-hidden" hover>
        {/* Imagem com overlay */}
        <div className="relative h-48 overflow-hidden">
          <CardImagem
            src={imagem}
            alt={imagemAlt}
            className="absolute inset-0"
            overlay
          />

          {/* Badge de categoria */}
          <span
            className={`absolute top-4 left-4 inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium ${categoria.bgCor} ${categoria.cor}`}
          >
            {projeto.categoria}
          </span>

          {/* Info da instituição */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            {projeto.instituicaoLogo && (
              <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-gray-100">
                <img
                  src={projeto.instituicaoLogo}
                  alt={projeto.instituicao}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <span className="text-sm font-bold text-white drop-shadow-md">
              {projeto.instituicao}
            </span>
          </div>
        </div>

        <CardConteudo className="flex flex-col flex-1 gap-3">
          <CardTitulo>{projeto.nome}</CardTitulo>
          <CardDescricao>{projeto.descricao}</CardDescricao>

          {/* Métricas */}
          {(projeto.meta || projeto.status) && (
            <div className="mb-5 flex items-center gap-4 border-t border-border-muted pt-4">
              {projeto.meta && (
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground-muted">
                    Meta
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    R$ {projeto.meta.toLocaleString("pt-BR")}
                  </span>
                </div>
              )}
              {porcentagemAtingida !== null && (
                <>
                  <div className="h-8 w-px bg-border" />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-foreground-muted">
                      Atingido
                    </span>
                    <span className="text-sm font-bold text-green-600">
                      {porcentagemAtingida}%
                    </span>
                  </div>
                </>
              )}
              {projeto.status && !projeto.meta && (
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground-muted">
                    Status
                  </span>
                  <span className="text-sm font-bold text-primary">
                    {(() => {
                      if (projeto.status === "em_andamento") return "Em andamento";
                      if (projeto.status === "concluido") return "Concluído";
                      return "Planejado";
                    })()}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Botão */}
          <button className="mt-auto w-full inline-flex items-center justify-center rounded-lg bg-background px-4 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-background-alt">
            <span>Ver Detalhes</span>
            <span className="material-symbols-outlined ml-2 text-sm">
              arrow_forward
            </span>
          </button>
        </CardConteudo>
      </Card>
    </Link>
  );
}

