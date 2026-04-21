import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, ShieldCheck, Zap } from "lucide-react";

export const CTA = () => (
  <section id="cta" className="py-20 md:py-28 bg-background relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 grid-bg opacity-50" />
    <div className="container relative">
      <div className="max-w-4xl mx-auto text-center p-6 sm:p-10 md:p-14 rounded-3xl bg-gradient-card border border-brand-green/40 shadow-glow-green">
        <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-yellow mb-4 px-3 py-1 rounded-full border border-brand-yellow/40 bg-brand-yellow/10">
          Oferta por tempo limitado
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
          Garanta agora seu acesso ao{" "}
          <span className="text-gradient">Pacote Completo</span>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Acesso vitalício a todos os cursos, kits, PLR e materiais. Comece a vender ainda hoje.
        </p>

        <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-yellow">197 Mt</span>
            <div className="flex flex-col items-start">
              <span className="text-lg text-muted-foreground line-through">990 Mt</span>
              <span className="text-[10px] sm:text-xs font-bold text-brand-green bg-brand-green/10 px-2 py-1 rounded-full">80% OFF</span>
            </div>
          </div>
          <Button variant="ctaYellow" size="hero" asChild className="w-full sm:w-auto">
            <a href="https://my.debito.co.mz/pay/b29587ee-8f58-40e6-a36c-f01477cd8c9d" target="_blank" rel="noopener noreferrer">
              <span>Quero Acesso ao Pacote Completo</span> <ArrowRight />
            </a>
          </Button>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-brand-green" /> Pagamento 100% seguro</span>
            <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-brand-green" /> Acesso imediato</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-brand-green" /> 7 dias de garantia</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
