"use client";

import { useState, useMemo, useEffect } from "react";
import { CardNoticia } from "@/components/ui/CardNoticia";
import { CATEGORIAS_NOTICIAS } from "@/lib/constantes";
import type { Noticia } from "@/lib/tipos";

interface ListaNoticiasProps {
  readonly noticias: readonly Noticia[];
}

// Mapeamento entre IDs de categoria e nomes completos
const MAPEAMENTO_CATEGORIAS: Record<string, string[]> = {
  sucesso: ["Histórias de Sucesso", "Educação"],
  transparencia: ["Transparência"],
  parcerias: ["Parcerias"],
  eventos: ["Eventos"],
  urgente: ["Urgente"],
  tecnologia: ["Tecnologia"],
};

export function ListaNoticias({ noticias }: ListaNoticiasProps) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("todas");
  const [termoBusca, setTermoBusca] = useState<string>("");
  const [noticiasExibidas, setNoticiasExibidas] = useState<number>(6);

  // Filtra notícias por categoria e busca
  const noticiasFiltradas = useMemo(() => {
    let filtradas = [...noticias];

    // Filtro por categoria
    if (categoriaSelecionada !== "todas") {
      const categoriasMapeadas = MAPEAMENTO_CATEGORIAS[categoriaSelecionada];
      if (categoriasMapeadas) {
        filtradas = filtradas.filter((noticia) =>
          categoriasMapeadas.includes(noticia.categoria)
        );
      }
    }

    // Filtro por busca
    if (termoBusca.trim()) {
      const busca = termoBusca.toLowerCase().trim();
      filtradas = filtradas.filter(
        (noticia) =>
          noticia.titulo.toLowerCase().includes(busca) ||
          noticia.resumo.toLowerCase().includes(busca) ||
          noticia.categoria.toLowerCase().includes(busca)
      );
    }

    return filtradas;
  }, [noticias, categoriaSelecionada, termoBusca]);

  // Reset notícias exibidas quando filtros mudam
  useEffect(() => {
    setNoticiasExibidas(6);
  }, [categoriaSelecionada, termoBusca]);

  const noticiasParaExibir = noticiasFiltradas.slice(0, noticiasExibidas);
  const temMaisNoticias = noticiasFiltradas.length > noticiasExibidas;

  const handleCarregarMais = () => {
    setNoticiasExibidas((prev) => prev + 6);
  };

  return (
    <>
      {/* Header com busca */}
      <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Últimas Notícias e Atualizações
          </h2>
          <p className="mt-2 text-foreground-muted">
            Acompanhe as novidades e histórias de impacto.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-auto">
          <div className="relative flex w-full max-w-xs items-center">
            <span className="absolute left-3 text-foreground-muted material-symbols-outlined">
              search
            </span>
            <input
              className="h-10 w-full rounded-lg border-none bg-card py-2 pl-10 pr-4 text-sm shadow-sm ring-1 ring-border focus:ring-2 focus:ring-primary text-foreground placeholder-foreground-muted"
              placeholder="Buscar notícia..."
              type="text"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-3">
        {CATEGORIAS_NOTICIAS.map((categoria) => {
          const isActive = categoriaSelecionada === categoria.id;
          return (
            <button
              key={categoria.id}
              onClick={() => setCategoriaSelecionada(categoria.id)}
              className={`group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-all ${
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-card ring-1 ring-border hover:ring-primary text-foreground-muted hover:text-primary"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[20px] ${isActive ? "" : "group-hover:text-primary"}`}
              >
                {categoria.icone}
              </span>
              <span className="text-sm font-medium">{categoria.label}</span>
            </button>
          );
        })}
      </div>

      {/* News Grid */}
      {noticiasFiltradas.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticiasParaExibir.map((noticia) => (
              <CardNoticia key={noticia.slug} noticia={noticia} />
            ))}
          </div>

          {/* Load More Button */}
          {temMaisNoticias && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleCarregarMais}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition-all hover:bg-background-alt hover:shadow-sm"
              >
                Carregar mais notícias
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <span className="material-symbols-outlined text-6xl text-foreground-muted mb-4">
            search_off
          </span>
          <p className="text-lg font-medium text-foreground-muted">
            Nenhuma notícia encontrada
          </p>
          <p className="text-sm text-foreground-muted mt-2">
            Tente ajustar os filtros ou a busca
          </p>
        </div>
      )}
    </>
  );
}

