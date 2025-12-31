"use client";

import { useState } from "react";
import Link from "next/link";
import { Navegacao } from "./Navegacao";
import { Botao } from "../ui/Botao";
import { SITE_CONFIG } from "@/lib/constantes";

export function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <div className="flex items-center justify-center">
            <img
              src="/logo.png"
              alt={SITE_CONFIG.nomeAbreviado}
              className="h-12 w-auto object-contain"
            />
          </div>
          <h2 className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em]">
            {SITE_CONFIG.nomeAbreviado}
          </h2>
        </Link>

        {/* Navegação Desktop */}
        <Navegacao />

        {/* Botões */}
        <div className="flex items-center gap-4">
          <Botao href="/doacoes" className="hidden sm:flex">
            Doar Agora
          </Botao>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
          >
            <span className="material-symbols-outlined">
              {menuAberto ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-6 space-y-4">
            <Navegacao mobile onItemClick={() => setMenuAberto(false)} />
            <div className="pt-4 border-t border-border">
              <Botao href="/doacoes" className="w-full justify-center">
                Doar Agora
              </Botao>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

