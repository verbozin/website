"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Botao } from "@/components/ui/Botao";

export function WidgetDoacao() {
  const searchParams = useSearchParams();
  const valores = [5, 30, 50, 100];

  // Lê o valor da URL se disponível
  const getValorInicial = () => {
    const valorParam = searchParams.get("valor");
    if (valorParam) {
      const valor = parseInt(valorParam, 10);
      if (!isNaN(valor) && valores.includes(valor)) {
        return valor;
      }
    }
    return 50;
  };

  const [valorSelecionado, setValorSelecionado] = useState<number | null>(
    getValorInicial()
  );

  // Atualiza o valor selecionado quando a URL muda
  useEffect(() => {
    const valorParam = searchParams.get("valor");
    if (valorParam) {
      const valor = parseInt(valorParam, 10);
      if (!isNaN(valor) && valores.includes(valor)) {
        setValorSelecionado(valor);
      }
    }
  }, [searchParams, valores]);

  const handleValorClick = (valor: number) => {
    setValorSelecionado(valor);
  };

  const handleDoar = () => {
    // Redireciona para o link do MercadoPago
    window.open("http://link.mercadopago.com.br/zininstitute", "_blank");
  };

  return (
    <div className="bg-card rounded-2xl shadow-2xl shadow-primary/10 border border-border p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Escolha como ajudar
      </h2>

      {/* Frequency Switch */}
      <div className="flex bg-background p-1.5 rounded-xl mb-8">
        <button
          className="flex-1 py-2.5 px-4 rounded-lg text-sm font-medium text-foreground-muted hover:text-foreground transition-all relative"
          disabled
        >
          Mensal
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            Em construção
          </span>
        </button>
        <button className="flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all bg-card shadow-sm text-primary">
          Única
        </button>
      </div>

      {/* Amount Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {valores.map((valor) => (
          <button
            key={valor}
            onClick={() => handleValorClick(valor)}
            className={`border-2 rounded-xl transition-all font-bold py-3 relative ${
              valorSelecionado === valor
                ? "border-primary bg-primary/5 text-primary"
                : "border-transparent bg-background hover:bg-primary/5 hover:border-primary/30 active:border-primary text-foreground"
            }`}
          >
            R$ {valor}
            {valor === 50 && (
              <span className="absolute -top-2.5 -right-2.5 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide">
                Popular
              </span>
            )}
          </button>
        ))}
        <button
          onClick={() => handleValorClick(0)}
          className="col-span-2 border-2 border-transparent bg-background hover:bg-primary/5 hover:border-primary/30 text-foreground-muted font-medium py-3 px-4 rounded-xl transition-all text-left flex items-center gap-2 group"
        >
          <span className="material-symbols-outlined text-lg">edit</span>
          Outro valor
        </button>
      </div>

      {/* Impact Note */}
      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl mb-8">
        <span className="material-symbols-outlined text-primary mt-0.5">
          volunteer_activism
        </span>
        <p className="text-sm text-foreground">
          <span className="font-bold">R$ xx</span> garante alimentação para uma
          família por x semanas.
        </p>
      </div>

      {/* Payment Methods */}
      <div className="space-y-4 mb-8">
        <a
          href="http://link.mercadopago.com.br/zininstitute"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 border border-border rounded-xl cursor-pointer hover:border-primary transition-colors bg-card hover:bg-primary/5"
        >
          <div className="flex items-center gap-3">
            <span className="font-medium text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600">
                payments
              </span>
              MercadoPago
            </span>
          </div>
          <span className="material-symbols-outlined text-primary">
            open_in_new
          </span>
        </a>
        <a
          href="https://picpay.me/itar.oliveira.macedo/0.5"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 border border-border rounded-xl cursor-pointer hover:border-primary transition-colors bg-card hover:bg-primary/5"
        >
          <div className="flex items-center gap-3">
            <span className="font-medium text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-green-600">
                account_balance_wallet
              </span>
              PicPay
            </span>
          </div>
          <span className="material-symbols-outlined text-primary">
            open_in_new
          </span>
        </a>
        <label className="flex items-center justify-between p-4 border-2 border-primary rounded-xl cursor-pointer bg-primary/5">
          <div className="flex items-center gap-3">
            <input
              defaultChecked
              className="w-5 h-5 text-primary border-border focus:ring-primary"
              name="payment"
              type="radio"
              readOnly
            />
            <span className="font-medium text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-teal-600">
                qr_code_2
              </span>
              Pix
            </span>
          </div>
          <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
            Copiar e colar
          </span>
        </label>
      </div>

      {/* CTA Button */}
      <Botao
        onClick={handleDoar}
        className="w-full justify-center shadow-lg shadow-primary/25"
        tamanho="lg"
        icone="arrow_forward"
      >
        Doar Agora
      </Botao>

      <p className="text-center text-xs text-foreground-muted mt-4">
        Ao doar, você concorda com nossos Termos e Política de Privacidade.
      </p>
    </div>
  );
}

