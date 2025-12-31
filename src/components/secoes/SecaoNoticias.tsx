import Link from "next/link";
import { CardNoticia } from "../ui/CardNoticia";
import type { Noticia } from "@/lib/tipos";

interface SecaoNoticiasProps {
  titulo?: string;
  linkVerTodas?: string;
  noticias: Noticia[];
}

export function SecaoNoticias({
  titulo = "Últimas Notícias",
  linkVerTodas = "/noticias",
  noticias,
}: SecaoNoticiasProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-black text-foreground">{titulo}</h2>
          <Link
            href={linkVerTodas}
            className="text-primary font-bold text-sm hover:underline"
          >
            Ver Blog
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noticias.slice(0, 3).map((noticia) => (
            <CardNoticia key={noticia.slug} noticia={noticia} />
          ))}
        </div>
      </div>
    </section>
  );
}

