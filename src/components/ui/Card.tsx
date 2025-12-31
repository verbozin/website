import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  const hoverClasses = hover
    ? "hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    : "";

  return (
    <div
      className={`bg-card rounded-xl border border-border shadow-sm ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}

interface CardImagemProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
}

export function CardImagem({
  src,
  alt,
  className = "",
  overlay = false,
}: CardImagemProps) {
  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      )}
    </div>
  );
}

interface CardConteudoProps {
  children: ReactNode;
  className?: string;
}

export function CardConteudo({ children, className = "" }: CardConteudoProps) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}

interface CardCategoriaProps {
  children: ReactNode;
  cor?: string;
  icone?: string;
}

export function CardCategoria({
  children,
  cor = "text-primary",
  icone,
}: CardCategoriaProps) {
  return (
    <div
      className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${cor}`}
    >
      {icone && (
        <span className="material-symbols-outlined text-[16px]">{icone}</span>
      )}
      {children}
    </div>
  );
}

interface CardTituloProps {
  children: ReactNode;
  className?: string;
}

export function CardTitulo({ children, className = "" }: CardTituloProps) {
  return (
    <h3
      className={`text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors ${className}`}
    >
      {children}
    </h3>
  );
}

interface CardDescricaoProps {
  children: ReactNode;
  className?: string;
  linhas?: number;
}

export function CardDescricao({
  children,
  className = "",
  linhas = 3,
}: CardDescricaoProps) {
  const lineClampClass = `line-clamp-${linhas}`;
  return (
    <p
      className={`text-foreground-muted text-sm leading-relaxed ${lineClampClass} ${className}`}
    >
      {children}
    </p>
  );
}

