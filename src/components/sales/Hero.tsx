import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-marketing.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                Acesso Vitalício • Liberação Imediata
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight">
              O Pacote Mais{" "}
              <span className="text-gradient">Completo</span>{" "}
              de Marketing Digital que Você Vai Encontrar
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              Aprenda, execute e comece a vender <strong className="text-brand-white">ainda hoje</strong> com cursos, ferramentas e materiais prontos.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-3xl md:text-4xl font-black text-brand-yellow">197 Mt</span>
              <span className="text-sm text-muted-foreground line-through">990 Mt</span>
              <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2 py-1 rounded-full">80% OFF</span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="hero" asChild className="animate-pulse-glow">
                <a href="https://my.debito.co.mz/pay/b29587ee-8f58-40e6-a36c-f01477cd8c9d" target="_blank" rel="noopener noreferrer">
                  Quero Acesso Imediato <ArrowRight />
                </a>
              </Button>
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Mais de 15 produtos inclusos",
                "Acesso 100% vitalício",
                "Garantia de 7 dias",
                "Suporte para iniciantes",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="text-brand-green shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="absolute -inset-4 bg-gradient-cta opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-brand-green/20 shadow-elevated">
              <img
                src={heroImg}
                alt="Dashboard do pacote completo de marketing digital"
                width={1280}
                height={1024}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-card border border-border rounded-2xl p-4 shadow-card-elevated hidden md:flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center">
                <Zap className="text-brand-yellow" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Liberação</p>
                <p className="font-bold">Imediata</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-gradient-card border border-border rounded-2xl p-4 shadow-card-elevated hidden md:flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-brand-green/20 flex items-center justify-center">
                <ShieldCheck className="text-brand-green" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Garantia</p>
                <p className="font-bold">7 dias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
