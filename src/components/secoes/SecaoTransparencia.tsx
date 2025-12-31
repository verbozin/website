import { Botao } from "../ui/Botao";

interface SecaoTransparenciaProps {
  titulo?: string;
  descricao?: string;
  linkRelatorios?: string;
}

export function SecaoTransparencia({
  titulo = "Transparência é nosso compromisso",
  descricao = "Acreditamos que a confiança é a base da solidariedade. Disponibilizamos relatórios financeiros detalhados trimestralmente.",
  linkRelatorios = "/transparencia",
}: SecaoTransparenciaProps) {
  return (
    <section className="bg-primary text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-start gap-6 max-w-2xl">
          <div className="hidden md:flex p-4 bg-white/10 rounded-full shrink-0">
            <span className="material-symbols-outlined text-4xl">
              description
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-black mb-2">{titulo}</h2>
            <p className="text-blue-100 text-lg">{descricao}</p>
          </div>
        </div>
        <Botao
          href={linkRelatorios}
          className="shrink-0 !bg-white !text-primary hover:!bg-gray-100 shadow-lg !border-2 border-white/30"
        >
          Ver Relatórios Financeiros
        </Botao>
      </div>
    </section>
  );
}

