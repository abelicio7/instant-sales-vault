import { AlertTriangle, Clock } from "lucide-react";

export const Scarcity = () => (
  <section className="py-12 md:py-16 bg-gradient-yellow text-brand-black relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 22px)" }} />
    <div className="container relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-8 w-8 md:h-10 md:w-10 animate-blink" />
          <Clock className="h-8 w-8 md:h-10 md:w-10" />
        </div>
        <div>
          <p className="text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight">
            Atenção: este pacote pode sair do ar a qualquer momento
          </p>
          <p className="mt-2 text-sm sm:text-base md:text-lg font-semibold opacity-80">
            Aproveite enquanto ainda está disponível por este preço.
          </p>
        </div>
      </div>
    </div>
  </section>
);
