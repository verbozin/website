"use client";

import { useState, useMemo, useEffect } from "react";
import { CardProjeto } from "@/components/ui/CardProjeto";
import { CATEGORIAS_PROJETOS } from "@/lib/constantes";
import type { Projeto } from "@/lib/tipos";

interface ListaProjetosProps {
  projetos: Projeto[];
}

// Mapeamento entre IDs de categoria e nomes completos
const MAPEAMENTO_CATEGORIAS: Record<string, string> = {
  educacao: "Educação",
  saude: "Saúde",
  fome: "Combate à Fome",
  ambiente: "Meio Ambiente",
  cultura: "Cultura",
  tecnologia: "Tecnologia",
};

export function ListaProjetos({ projetos }: ListaProjetosProps) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("todos");
  const [termoBusca, setTermoBusca] = useState<string>("");
  const [projetosExibidos, setProjetosExibidos] = useState<number>(6);

  // Filtra projetos por categoria e busca
  const projetosFiltrados = useMemo(() => {
    let filtrados = projetos;

    // Filtro por categoria
    if (categoriaSelecionada !== "todos") {
      const nomeCategoria = MAPEAMENTO_CATEGORIAS[categoriaSelecionada];
      if (nomeCategoria) {
        filtrados = filtrados.filter(
          (projeto) => projeto.categoria === nomeCategoria
        );
      }
    }

    // Filtro por busca
    if (termoBusca.trim()) {
      const busca = termoBusca.toLowerCase().trim();
      filtrados = filtrados.filter(
        (projeto) =>
          projeto.nome.toLowerCase().includes(busca) ||
          projeto.descricao.toLowerCase().includes(busca) ||
          projeto.instituicao.toLowerCase().includes(busca) ||
          projeto.categoria.toLowerCase().includes(busca)
      );
    }

    return filtrados;
  }, [projetos, categoriaSelecionada, termoBusca]);

  // Reset projetos exibidos quando filtros mudam
  useEffect(() => {
    setProjetosExibidos(6);
  }, [categoriaSelecionada, termoBusca]);

  const projetosParaExibir = projetosFiltrados.slice(0, projetosExibidos);
  const temMaisProjetos = projetosFiltrados.length > projetosExibidos;

  const handleCarregarMais = () => {
    setProjetosExibidos((prev) => prev + 6);
  };

  return (
    <>
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Nossos Parceiros e Projetos
          </h2>
          <p className="mt-2 text-foreground-muted">
            Explore as iniciativas separadas por categoria.
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
              placeholder="Buscar projeto ou instituição..."
              type="text"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-10 flex flex-wrap gap-3">
        {CATEGORIAS_PROJETOS.map((categoria) => {
          const isActive = categoriaSelecionada === categoria.id;
          return (
            <button
              key={categoria.id}
              onClick={() => setCategoriaSelecionada(categoria.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-card ring-1 ring-border hover:ring-primary text-foreground-muted hover:text-primary"
              }`}
            >
              {categoria.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {projetosFiltrados.length > 0 ? (
        <>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projetosParaExibir.map((projeto) => (
              <CardProjeto key={projeto.id} projeto={projeto} />
            ))}
          </div>

          {/* Load More Button */}
          {temMaisProjetos && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={handleCarregarMais}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition-all hover:bg-background-alt hover:shadow-sm"
              >
                Carregar Mais Projetos
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
            Nenhum projeto encontrado
          </p>
          <p className="text-sm text-foreground-muted mt-2">
            Tente ajustar os filtros ou a busca
          </p>
        </div>
      )}
    </>
  );
}

