import { Metadata } from "next";
import { Cabecalho, Rodape } from "@/components/layout";
import { SecaoHero } from "@/components/secoes";
import { Botao } from "@/components/ui/Botao";
import { PRINCIPIOS_BIBLICOS } from "@/lib/constantes";
import type { MembroEquipe } from "@/lib/tipos";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história, missão, valores e equipe do Verbo Zin Institute.",
};

// Placeholder para foto de perfil vazia (SVG data URI)
const placeholderFotoPerfil =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23e5e7eb'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%239ca3af'/%3E%3Cpath d='M50 180 Q50 150 100 150 Q150 150 150 180 L150 200 L50 200 Z' fill='%239ca3af'/%3E%3C/svg%3E";

// Equipe de exemplo
const equipe: MembroEquipe[] = [
  {
    nome: "Itamar Oliveira Macedo",
    cargo: "Fundador",
    descricao: "Idealizado e Presidente do Verbo Zin Institute.",
    imagem: placeholderFotoPerfil,
  },
  {
    nome: "XXXXX",
    cargo: "Diretor Financeiro",
    descricao: "Economista especialista em gestão de projetos sociais.",
    imagem: placeholderFotoPerfil,
  },
  {
    nome: "XXXXX",
    cargo: "Gerente de Operações",
    descricao: "Coordena as ações de campo e parcerias institucionais.",
    imagem: placeholderFotoPerfil,
  },
  {
    nome: "XXXXX",
    cargo: "Coord. de Projetos",
    descricao: "Responsável pelo desenvolvimento de novos projetos.",
    imagem: placeholderFotoPerfil,
  },
];

// Timeline da organização
const historicoOrganizacao = [
  {
    ano: "2025",
    titulo: "Fundação",
    descricao:
      "Início das atividades com o objetivo de saciar a fome e semear a palavra de Deus.",
    icone: "history_edu",
  },
  {
    ano: "Hoje",
    titulo: "Expansão Digital",
    descricao:
      "Desenvolvimento de aplicativos bíblicos e plataforma de transparência em tempo real.",
    icone: "volunteer_activism",
  },
];

export default function PaginaSobreNos() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Cabecalho />

      <main className="flex-1">
        {/* Hero Section */}
        <SecaoHero
          subtitulo="Nossa História"
          titulo="Unindo corações para transformar realidades"
          descricao="Conheça a trajetória da nossa organização, os princípios que nos guiam e o impacto que construímos juntos todos os dias."
          imagemFundo="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop"
          imagemAlt="Grupo de voluntários sorrindo juntos"
          botaoPrimario={{
            texto: "Ver Relatórios",
            href: "/transparencia",
          }}
          botaoSecundario={{
            texto: "Nossa Equipe",
            href: "#equipe",
          }}
        />

        {/* Quem Somos */}
        <section className="flex justify-center px-4 py-16 md:px-20 lg:px-40 bg-card">
          <div className="flex flex-col lg:flex-row gap-12 max-w-[1200px] items-center">
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm">
                  Quem Somos
                </h3>
                <h2 className="text-foreground text-3xl md:text-4xl font-bold leading-tight">
                  Mais do que uma ONG, uma ponte para o futuro.
                </h2>
              </div>
              <div className="text-foreground-muted text-lg leading-relaxed flex flex-col gap-4">
                <p>
                  Saciando a fome e semeando a palavra de Deus, o Verbo Zin
                  Institute promove o ensino e estudo da Bíblia, sua divulgação
                  em formatos acessíveis, e ações missionárias para atender
                  necessidades espirituais e materiais.
                </p>
                <p>
                  Acreditamos que a transparência é a chave para a confiança.
                  Por isso, cada centavo doado é rastreado e revertido em
                  impacto real, auditado e divulgado em nossos relatórios
                  mensais.
                </p>
              </div>
              <div className="pt-4">
                <a
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                  href="/projetos"
                >
                  Conheça nossos projetos
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop"
                  alt="Voluntário ajudando pessoa idosa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="bg-primary py-12 px-4 md:px-20">
          <div className="mx-auto max-w-[1200px] grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-black text-white">
                10k+
              </span>
              <span className="text-white/80 font-medium">
                Vidas Impactadas
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-black text-white">
                50+
              </span>
              <span className="text-white/80 font-medium">
                Instituições Apoiadas
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-black text-white">
                12
              </span>
              <span className="text-white/80 font-medium">Anos de História</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-black text-white">
                100%
              </span>
              <span className="text-white/80 font-medium">Transparência</span>
            </div>
          </div>
        </section>

        {/* Missão, Visão, Valores */}
        <section className="flex justify-center px-4 py-20 md:px-20 lg:px-40 bg-background">
          <div className="flex flex-col max-w-[1000px] w-full gap-12">
            <div className="text-center flex flex-col items-center gap-4">
              <h2 className="text-foreground text-3xl md:text-4xl font-black leading-tight">
                Nossos Pilares
              </h2>
              <p className="text-foreground-muted text-base max-w-[720px]">
                Os princípios fundamentais que guiam cada uma de nossas ações e
                decisões estratégicas para maximizar o impacto social.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Missão */}
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex size-12 items-center justify-center rounded-full bg-blue-100 text-primary">
                  <span className="material-symbols-outlined">public</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground text-lg font-bold">Missão</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    Saciar a fome e semear a palavra de Deus, promovendo o
                    ensino bíblico e ações missionárias para necessidades
                    espirituais e materiais.
                  </p>
                </div>
              </div>

              {/* Visão */}
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex size-12 items-center justify-center rounded-full bg-blue-100 text-primary">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground text-lg font-bold">Visão</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    Ser referência em transparência, eficiência e impacto social
                    positivo, criando um modelo sustentável de solidariedade.
                  </p>
                </div>
              </div>

              {/* Valores */}
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex size-12 items-center justify-center rounded-full bg-blue-100 text-primary">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground text-lg font-bold">Valores</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    Fidelidade à Palavra de Deus, transparência, serviço ao
                    próximo com compaixão, educação bíblica com excelência.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Princípios Bíblicos */}
        <section className="bg-card py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-10">
              Princípios Bíblicos que nos norteiam
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRINCIPIOS_BIBLICOS.map((principio, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg bg-background border border-border"
                >
                  <span className="material-symbols-outlined text-primary text-2xl shrink-0">
                    menu_book
                  </span>
                  <div>
                    <p className="font-bold text-primary text-sm">
                      {principio.referencia}
                    </p>
                    <p className="text-foreground-muted text-sm mt-1">
                      {principio.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="flex justify-center px-4 py-16 md:px-20 lg:px-40 bg-card">
          <div className="flex flex-col max-w-[800px] w-full">
            <h2 className="text-foreground text-3xl font-bold mb-10 text-center">
              Nossa Jornada
            </h2>
            <div className="grid grid-cols-[50px_1fr] gap-x-4">
              {historicoOrganizacao.map((item, index) => (
                <div key={index} className="contents">
                  {/* Ícone e linha */}
                  <div className="flex flex-col items-center gap-1">
                    {index > 0 && (
                      <div className="w-[2px] bg-border h-4"></div>
                    )}
                    <div
                      className={`flex size-10 items-center justify-center rounded-full z-10 ${
                        index === historicoOrganizacao.length - 1
                          ? "bg-primary text-white shadow-lg shadow-primary/30"
                          : "bg-background border border-border text-primary"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {item.icone}
                      </span>
                    </div>
                    {index < historicoOrganizacao.length - 1 && (
                      <div className="w-[2px] bg-border h-full grow min-h-[60px]"></div>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div
                    className={`flex flex-col ${index === 0 ? "pt-1" : "py-10"} ${index === historicoOrganizacao.length - 1 ? "pt-10" : ""}`}
                  >
                    <span className="text-primary font-bold text-sm mb-1">
                      {item.ano}
                    </span>
                    <h3 className="text-foreground text-xl font-bold leading-tight mb-2">
                      {item.titulo}
                    </h3>
                    <p className="text-foreground-muted text-base">
                      {item.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section
          id="equipe"
          className="flex justify-center px-4 py-20 bg-background"
        >
          <div className="flex flex-col max-w-[1000px] w-full gap-10">
            <div className="text-center">
              <h2 className="text-foreground text-3xl font-bold mb-4">
                Quem faz acontecer
              </h2>
              <p className="text-foreground-muted max-w-2xl mx-auto">
                Nossa equipe é formada por profissionais apaixonados por impacto
                social. Conheça a liderança que move nossa missão.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {equipe.map((membro, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="size-32 rounded-full overflow-hidden mb-2 border-4 border-card shadow-md">
                    {membro.imagem && (
                      <img
                        src={membro.imagem}
                        alt={membro.nome}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-lg">
                      {membro.nome}
                    </h3>
                    <span className="text-primary text-sm font-medium">
                      {membro.cargo}
                    </span>
                    {membro.descricao && (
                      <p className="text-foreground-muted text-xs mt-2">
                        {membro.descricao}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="bg-card border-t border-border">
          <div className="flex flex-col items-center justify-center px-4 py-20 gap-8 text-center max-w-[800px] mx-auto">
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-[32px]">
                favorite
              </span>
            </div>
            <h2 className="text-foreground text-3xl md:text-4xl font-black leading-tight">
              Faça parte da mudança que você quer ver no mundo.
            </h2>
            <p className="text-foreground-muted text-lg">
              Sua doação ajuda a manter nossos projetos ativos e a transformar a
              vida de milhares de pessoas. É seguro, transparente e faz a
              diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Botao href="/doacoes" tamanho="lg">
                Doar Agora
              </Botao>
              <Botao href="/projetos" variante="secundario" tamanho="lg">
                Ver Projetos
              </Botao>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

