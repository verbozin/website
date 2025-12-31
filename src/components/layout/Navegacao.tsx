"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LINKS_NAVEGACAO } from "@/lib/constantes";

interface NavegacaoProps {
  className?: string;
  mobile?: boolean;
  onItemClick?: () => void;
}

export function Navegacao({
  className = "",
  mobile = false,
  onItemClick,
}: NavegacaoProps) {
  const pathname = usePathname();

  const baseClasses = mobile
    ? "flex flex-col gap-4"
    : "hidden md:flex items-center gap-8";

  const linkBaseClasses = mobile
    ? "text-base font-medium py-2 transition-colors"
    : "text-sm font-medium transition-colors";

  return (
    <nav className={`${baseClasses} ${className}`}>
      {LINKS_NAVEGACAO.map((link) => {
        const isActive = pathname === link.href;
        const linkClasses = isActive
          ? `${linkBaseClasses} text-primary`
          : `${linkBaseClasses} text-foreground hover:text-primary`;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={linkClasses}
            onClick={onItemClick}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

