import { ShieldCheck } from "lucide-react";

export const Guarantee = () => (
  <section className="py-20 bg-secondary/30">
    <div className="container">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-card border border-border shadow-card-elevated">
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-brand-green/30 blur-2xl rounded-full" />
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-gradient-cta flex items-center justify-center shadow-glow-green">
            <div className="text-center text-brand-black">
              <ShieldCheck className="mx-auto h-8 w-8" strokeWidth={2.5} />
              <p className="text-xs font-black uppercase mt-1 leading-none">7 dias</p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-2">Garantia incondicional de 7 dias</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Se em até 7 dias você sentir que o pacote não é para você, basta nos enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
          </p>
        </div>
      </div>
    </div>
  </section>
);
