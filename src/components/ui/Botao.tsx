import Link from "next/link";
import { ReactNode } from "react";

interface BotaoProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variante?: "primario" | "secundario" | "outline" | "ghost";
  tamanho?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icone?: string;
  iconePosicao?: "esquerda" | "direita";
}

export function Botao({
  children,
  href,
  onClick,
  variante = "primario",
  tamanho = "md",
  className = "",
  type = "button",
  disabled = false,
  icone,
  iconePosicao = "direita",
}: BotaoProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold transition-all rounded-lg";

  const varianteClasses = {
    primario:
      "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]",
    secundario:
      "bg-card text-foreground border border-border hover:bg-background-alt",
    outline:
      "bg-transparent text-primary border-2 border-primary hover:bg-primary/10",
    ghost: "bg-transparent text-foreground hover:bg-background-alt",
  };

  const tamanhoClasses = {
    sm: "h-8 px-3 text-xs gap-1",
    md: "h-10 px-4 text-sm gap-2",
    lg: "h-12 px-8 text-base gap-2",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  // Se className contém !bg- ou !text-, prioriza o className customizado
  const hasImportantClasses = className.includes('!bg-') || className.includes('!text-') || className.includes('!border-');
  const classes = hasImportantClasses
    ? `${baseClasses} ${tamanhoClasses[tamanho]} ${disabledClasses} ${className}`
    : `${baseClasses} ${varianteClasses[variante]} ${tamanhoClasses[tamanho]} ${disabledClasses} ${className}`;

  const conteudo = (
    <>
      {icone && iconePosicao === "esquerda" && (
        <span className="material-symbols-outlined text-[18px]">{icone}</span>
      )}
      <span className="truncate">{children}</span>
      {icone && iconePosicao === "direita" && (
        <span className="material-symbols-outlined text-[18px]">{icone}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {conteudo}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {conteudo}
    </button>
  );
}

