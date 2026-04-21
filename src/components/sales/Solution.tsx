import { GraduationCap, Wrench, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  { icon: GraduationCap, title: "Aprendizado", desc: "Cursos completos do básico ao avançado." },
  { icon: Wrench, title: "Ferramentas", desc: "Kits prontos para acelerar a execução." },
  { icon: Rocket, title: "Execução", desc: "Materiais editáveis para vender já." },
];

export const Solution = () => (
  <section className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-40" />
    <div className="container relative">
      <SectionHeading
        eyebrow="A solução"
        title={
          <>
            Tudo o que você precisa em <span className="text-gradient">um só lugar</span>
          </>
        }
        description="Com o PACOTE COMPLETO DE MARKETING DIGITAL você não precisa comprar vários cursos separados. É o caminho direto: aprenda, execute e venda."
      />

      <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pillars.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className="relative p-8 rounded-3xl bg-gradient-card border border-border shadow-card-elevated hover:-translate-y-1 transition-smooth animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="h-14 w-14 rounded-2xl bg-gradient-cta flex items-center justify-center mb-5 shadow-glow-green">
              <Icon className="text-brand-black" />
            </div>
            <h3 className="text-2xl font-black mb-2">{title}</h3>
            <p className="text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
