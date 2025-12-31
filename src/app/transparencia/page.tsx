import { Metadata } from "next";
import { Cabecalho, Rodape } from "@/components/layout";
import { Botao } from "@/components/ui/Botao";
import { obterTodosRelatorios } from "@/lib/markdown";
import type { RelatorioTransparencia, MembroEquipe } from "@/lib/tipos";

export const metadata: Metadata = {
  title: "Transparência",
  description:
    "Acesse nossos relatórios financeiros, auditoria externa, estatuto social e prestação de contas detalhada.",
};

// Relatórios de exemplo
const relatoriosExemplo: RelatorioTransparencia[] = [
  {
    slug: "relatorio-2023",
    titulo: "Relatório Anual 2023",
    tipo: "relatorio_anual",
    ano: 2023,
    descricao:
      "Balanço completo das atividades, projetos realizados, impacto social e demonstrativos financeiros.",
    arquivoUrl: "/docs/relatorio-2023.pdf",
    tamanhoArquivo: "2.4 MB",
  },
  {
    slug: "relatorio-2022",
    titulo: "Relatório Anual 2022",
    tipo: "relatorio_anual",
    ano: 2022,
    descricao:
      "Demonstrativos financeiros e prestação de contas do exercício de 2022.",
    arquivoUrl: "/docs/relatorio-2022.pdf",
    tamanhoArquivo: "1.8 MB",
  },
  {
    slug: "auditoria-2023",
    titulo: "Auditoria Independente 2023",
    tipo: "auditoria",
    ano: 2023,
    descricao:
      "Parecer de auditoria externa realizada por empresa credenciada.",
    arquivoUrl: "/docs/auditoria-2023.pdf",
    tamanhoArquivo: "1.2 MB",
  },
  {
    slug: "balanco-q3-2024",
    titulo: "Balanço Trimestral Q3/2024",
    tipo: "balanco",
    ano: 2024,
    trimestre: 3,
    descricao:
      "Demonstrativo financeiro do terceiro trimestre de 2024 com análise de gastos.",
    arquivoUrl: "/docs/balanco-q3-2024.pdf",
    tamanhoArquivo: "850 KB",
  },
];

// Placeholder para foto de perfil vazia (SVG data URI)
const placeholderFotoPerfil =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23e5e7eb'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%239ca3af'/%3E%3Cpath d='M50 180 Q50 150 100 150 Q150 150 150 180 L150 200 L50 200 Z' fill='%239ca3af'/%3E%3C/svg%3E";

// Conselho diretivo de exemplo
const conselhoGestao: MembroEquipe[] = [
  {
    nome: "Itamar Oliveira Macedo",
    cargo: "Presidente do Conselho",
    descricao:
      "Advogado, especialista em direito do terceiro setor. Membro desde 2010.",
    imagem: placeholderFotoPerfil,
  },
  {
    nome: "XXXXXX",
    cargo: "Vice-Presidente",
    descricao:
      "Administradora, com 20 anos de experiência em gestão de ONGs.",
    imagem: placeholderFotoPerfil,
  },
  {
    nome: "XXXXXX",
    cargo: "Conselheiro Fiscal",
    descricao: "Contador, especialista em auditoria e compliance.",
    imagem: placeholderFotoPerfil,
  },
  {
    nome: "XXXXXX",
    cargo: "Conselheira",
    descricao:
      "Economista, atua na área de projetos sociais há mais de 15 anos.",
    imagem: placeholderFotoPerfil,
  },
];

// Indicadores de governança
const indicadoresGovernanca = [
  {
    icone: "account_balance",
    titulo: "Estatuto Aprovado",
    valor: "Desde 2025",
    descricao: "Documento que rege a organização.",
  },
  {
    icone: "supervisor_account",
    titulo: "Conselho Fiscal",
    valor: "3 membros",
    descricao: "Fiscalização independente.",
  },
  {
    icone: "how_to_reg",
    titulo: "Assembleia Geral",
    valor: "Anual",
    descricao: "Prestação de contas aos associados.",
  },
  {
    icone: "verified_user",
    titulo: "Auditoria Externa",
    valor: "Anual",
    descricao: "Verificação por empresa independente.",
  },
];

export default async function PaginaTransparencia() {
  let relatorios: RelatorioTransparencia[];

  try {
    relatorios = await obterTodosRelatorios();
    if (relatorios.length === 0) {
      relatorios = relatoriosExemplo;
    }
  } catch {
    relatorios = relatoriosExemplo;
  }

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Cabecalho />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-background py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-sm">
                  verified
                </span>
                Compromisso com a verdade
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-tight mb-6">
                Transparência que constrói confiança
              </h1>
              <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                Acreditamos que a confiança é o alicerce da solidariedade. Por
                isso, disponibilizamos todos os nossos relatórios financeiros,
                auditorias e documentos de governança para consulta pública.
              </p>
              <div className="flex flex-wrap gap-4">
                <Botao
                  href="#relatorios"
                  icone="description"
                  iconePosicao="esquerda"
                >
                  Ver Relatórios
                </Botao>
                <Botao
                  href="#governanca"
                  variante="secundario"
                  icone="account_balance"
                  iconePosicao="esquerda"
                >
                  Governança
                </Botao>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-black">R$ 2M</p>
                <p className="text-blue-100 mt-2">Movimentados em 2023</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-black">85%</p>
                <p className="text-blue-100 mt-2">Direto para Projetos</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-black">12</p>
                <p className="text-blue-100 mt-2">Anos de Operação</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-black">A</p>
                <p className="text-blue-100 mt-2">Nota em Transparência</p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Distribution */}
        <section className="bg-card py-16 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Como seu dinheiro é utilizado
              </h2>
              <p className="text-foreground-muted max-w-2xl mx-auto">
                Detalhamento da aplicação dos recursos recebidos em 2023.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Chart Placeholder */}
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-6xl text-primary">
                      pie_chart
                    </span>
                    <p className="text-sm text-foreground-muted mt-2">
                      Distribuição 2023
                    </p>
                  </div>
                </div>
                {/* Decorative circles */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    className="text-primary"
                    strokeDasharray="230 53"
                    transform="rotate(-90 50 50)"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    className="text-green-500"
                    strokeDasharray="0 230 28 55"
                    transform="rotate(-90 50 50)"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    className="text-orange-500"
                    strokeDasharray="0 258 14 100"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>

              {/* Legend */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background">
                  <div className="w-4 h-4 rounded-full bg-primary mt-1 shrink-0"></div>
                  <div>
                    <p className="font-bold text-foreground">
                      85% - Ações Diretas
                    </p>
                    <p className="text-sm text-foreground-muted">
                      Alimentação, saúde, educação e moradia para beneficiários.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background">
                  <div className="w-4 h-4 rounded-full bg-green-500 mt-1 shrink-0"></div>
                  <div>
                    <p className="font-bold text-foreground">
                      10% - Expansão e Infraestrutura
                    </p>
                    <p className="text-sm text-foreground-muted">
                      Investimentos para alcançar novas regiões e aumentar o
                      impacto.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background">
                  <div className="w-4 h-4 rounded-full bg-orange-500 mt-1 shrink-0"></div>
                  <div>
                    <p className="font-bold text-foreground">
                      5% - Administrativo
                    </p>
                    <p className="text-sm text-foreground-muted">
                      Custos operacionais, contabilidade e auditorias externas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reports Section */}
        <section id="relatorios" className="py-16 bg-background scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Relatórios e Documentos
                </h2>
                <p className="text-foreground-muted">
                  Acesse nossos balanços, auditorias e prestação de contas.
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium">
                  Todos
                </button>
                <button className="px-4 py-2 rounded-lg bg-card border border-border text-foreground-muted text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                  2024
                </button>
                <button className="px-4 py-2 rounded-lg bg-card border border-border text-foreground-muted text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                  2023
                </button>
                <button className="px-4 py-2 rounded-lg bg-card border border-border text-foreground-muted text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                  2022
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              {relatorios.map((relatorio) => (
                <div
                  key={relatorio.slug}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                        relatorio.tipo === "relatorio_anual"
                          ? "bg-blue-100 text-primary"
                          : relatorio.tipo === "auditoria"
                            ? "bg-green-100 text-green-600"
                            : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      <span className="material-symbols-outlined">
                        {relatorio.tipo === "relatorio_anual"
                          ? "summarize"
                          : relatorio.tipo === "auditoria"
                            ? "verified"
                            : "receipt_long"}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">
                        {relatorio.titulo}
                      </h3>
                      <p className="text-sm text-foreground-muted mt-1">
                        {relatorio.descricao}
                      </p>
                      <div className="flex gap-4 mt-2">
                        <span className="text-xs text-foreground-muted flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">
                            calendar_today
                          </span>
                          {relatorio.ano}
                          {relatorio.trimestre && ` • Q${relatorio.trimestre}`}
                        </span>
                        <span className="text-xs text-foreground-muted flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">
                            folder
                          </span>
                          {relatorio.tamanhoArquivo}
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={relatorio.arquivoUrl}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm hover:bg-primary hover:text-white transition-colors shrink-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-lg">
                      download
                    </span>
                    Baixar PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Section */}
        <section id="governanca" className="py-16 bg-card scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Governança Corporativa
              </h2>
              <p className="text-foreground-muted max-w-2xl mx-auto">
                Nossa estrutura de governança garante transparência, ética e
                responsabilidade em todas as decisões.
              </p>
            </div>

            {/* Governance Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {indicadoresGovernanca.map((indicador, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined">
                      {indicador.icone}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground">
                    {indicador.titulo}
                  </h3>
                  <p className="text-lg font-black text-primary mt-1">
                    {indicador.valor}
                  </p>
                  <p className="text-xs text-foreground-muted mt-1">
                    {indicador.descricao}
                  </p>
                </div>
              ))}
            </div>

            {/* Board Members */}
            <div>
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                Conselho de Gestão
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {conselhoGestao.map((membro, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 rounded-xl bg-background"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-card shadow-lg">
                      {membro.imagem && (
                        <img
                          src={membro.imagem}
                          alt={membro.nome}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <h4 className="font-bold text-foreground">{membro.nome}</h4>
                    <p className="text-sm text-primary font-medium">
                      {membro.cargo}
                    </p>
                    {membro.descricao && (
                      <p className="text-xs text-foreground-muted mt-2">
                        {membro.descricao}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary to-blue-700 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Tem alguma dúvida sobre nossas finanças?
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Estamos à disposição para esclarecer qualquer questão sobre
                nossa prestação de contas. Entre em contato com nosso setor de
                transparência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Botao
                  href="mailto:transparencia@verbozin.org"
                  className="!bg-white !text-primary hover:!bg-gray-100 shadow-lg border-2 border-white/30"
                  icone="mail"
                  iconePosicao="esquerda"
                >
                  transparencia@verbozin.org
                </Botao>
                <Botao
                  href="/doacoes"
                  className="!bg-white/10 backdrop-blur-sm !border-2 !border-white !text-white hover:!bg-white/20 shadow-lg"
                >
                  Fazer uma doação
                </Botao>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

