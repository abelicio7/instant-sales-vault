import { ArrowRight, Frown, Trophy } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const before = ["Confuso e perdido", "Sem direção clara", "Tentando sozinho", "Sem resultados"];
const after = ["Domínio do método", "Estratégia clara", "Ferramentas prontas", "Pronto para vender"];

export const Transformation = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <SectionHeading
        eyebrow="Sua transformação"
        title={<>De <span className="text-destructive">perdido</span> para <span className="text-gradient">vendendo online</span></>}
      />

      <div className="mt-14 grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center max-w-5xl mx-auto">
        <div className="p-8 rounded-3xl border border-destructive/30 bg-destructive/5 shadow-card-elevated">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-12 w-12 rounded-xl bg-destructive/20 flex items-center justify-center">
              <Frown className="text-destructive" />
            </div>
            <h3 className="text-xl font-black uppercase text-destructive">Antes</h3>
          </div>
          <ul className="space-y-3">
            {before.map((b) => (
              <li key={b} className="flex items-center gap-3 text-muted-foreground line-through">
                <span className="h-1.5 w-1.5 rounded-full bg-destructive" /> {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex h-16 w-16 rounded-full bg-gradient-cta items-center justify-center shadow-glow-green animate-pulse-glow">
          <ArrowRight className="text-brand-black h-7 w-7" />
        </div>
        <div className="flex md:hidden justify-center">
          <div className="h-12 w-12 rounded-full bg-gradient-cta flex items-center justify-center shadow-glow-green rotate-90">
            <ArrowRight className="text-brand-black" />
          </div>
        </div>

        <div className="p-8 rounded-3xl border border-brand-green/40 bg-brand-green/5 shadow-glow-green">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-12 w-12 rounded-xl bg-brand-green/20 flex items-center justify-center">
              <Trophy className="text-brand-green" />
            </div>
            <h3 className="text-xl font-black uppercase text-brand-green">Depois</h3>
          </div>
          <ul className="space-y-3">
            {after.map((a) => (
              <li key={a} className="flex items-center gap-3 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
