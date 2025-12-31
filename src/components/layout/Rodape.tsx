import Link from "next/link";
import { SITE_CONFIG, LINKS_FOOTER, REDES_SOCIAIS } from "@/lib/constantes";

export function Rodape() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo.png"
                alt={SITE_CONFIG.nomeAbreviado}
                className="h-12 w-auto object-contain"
              />
              <span className="font-bold text-xl text-foreground">
                {SITE_CONFIG.nomeAbreviado}
              </span>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed mb-4">
              {SITE_CONFIG.descricao}
            </p>
            <div className="text-foreground-muted text-sm leading-relaxed mb-6">
              <p className="font-medium mb-1">Endereço:</p>
              <p>Av. Otacílio Nepomuceno, 100</p>
              <p>Coliseum Center, Loja 09</p>
              <p>Catolé – Campina Grande/PB</p>
            </div>
            <div className="flex gap-4">
              {REDES_SOCIAIS.facebook && (
                <a
                  href={REDES_SOCIAIS.facebook}
                  className="text-foreground-muted hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {REDES_SOCIAIS.instagram && (
                <a
                  href={REDES_SOCIAIS.instagram}
                  className="text-foreground-muted hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Sobre Nós */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Sobre Nós</h4>
            <ul className="space-y-3 text-sm text-foreground-muted">
              {LINKS_FOOTER.institucional.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apoio */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Apoio</h4>
            <ul className="space-y-3 text-sm text-foreground-muted">
              {LINKS_FOOTER.apoio.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-foreground-muted mb-4">
              Receba atualizações sobre nosso impacto.
            </p>
            <form className="flex flex-col gap-2">
              <input
                className="rounded-lg border border-border bg-background text-sm px-4 py-2 focus:ring-primary focus:border-primary"
                placeholder="Seu e-mail"
                type="email"
              />
              <button
                type="submit"
                className="bg-primary text-white text-sm font-bold py-2 rounded-lg hover:bg-primary-hover transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground-muted">
            © {new Date().getFullYear()} {SITE_CONFIG.nome}. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6 text-xs text-foreground-muted">
            <Link href="/termos" className="hover:text-primary">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="hover:text-primary">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

