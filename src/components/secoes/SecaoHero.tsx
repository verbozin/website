import { Botao } from "../ui/Botao";

interface SecaoHeroProps {
  titulo: string;
  subtitulo?: string;
  descricao?: string;
  imagemFundo?: string;
  imagemAlt?: string;
  badge?: string;
  botaoPrimario?: {
    texto: string;
    href: string;
  };
  botaoSecundario?: {
    texto: string;
    href: string;
  };
}

export function SecaoHero({
  titulo,
  subtitulo,
  descricao,
  imagemFundo,
  imagemAlt,
  badge,
  botaoPrimario,
  botaoSecundario,
}: SecaoHeroProps) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div
          className="relative overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat min-h-[560px] flex items-center justify-center"
          style={{
            backgroundImage: imagemFundo
              ? `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("${imagemFundo}")`
              : "linear-gradient(to right, var(--primary), #1e40af)",
          }}
          role="img"
          aria-label={imagemAlt}
        >
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
            {badge && (
              <span className="mb-4 inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/30">
                {badge}
              </span>
            )}

            {subtitulo && (
              <span className="text-primary-300 font-bold tracking-widest uppercase text-xs md:text-sm text-white/80 mb-2">
                {subtitulo}
              </span>
            )}

            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl mb-6">
              {titulo}
            </h1>

            {descricao && (
              <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8">
                {descricao}
              </p>
            )}

            {(botaoPrimario || botaoSecundario) && (
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                {botaoPrimario && (
                  <Botao href={botaoPrimario.href} tamanho="lg">
                    {botaoPrimario.texto}
                  </Botao>
                )}
                {botaoSecundario && (
                  <Botao
                    href={botaoSecundario.href}
                    variante="outline"
                    tamanho="lg"
                    className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                  >
                    {botaoSecundario.texto}
                  </Botao>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

