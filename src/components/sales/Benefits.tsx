import { Rocket, PackageCheck, PiggyBank, TrendingUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  { icon: Rocket, title: "Comece do zero", desc: "Mesmo sem nenhuma experiência prévia." },
  { icon: PackageCheck, title: "Tudo pronto para aplicar", desc: "Materiais, scripts e templates testados." },
  { icon: PiggyBank, title: "Economize tempo e dinheiro", desc: "Em vez de comprar 10 cursos, tenha tudo aqui." },
  { icon: TrendingUp, title: "Renda online real", desc: "Possibilidade concreta de gerar resultados." },
];

export const Benefits = () => (
  <section className="py-20 md:py-28 bg-secondary/30">
    <div className="container">
      <SectionHeading
        eyebrow="Benefícios"
        title={<>Por que esse pacote <span className="text-gradient">muda o jogo</span></>}
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {benefits.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="p-6 rounded-2xl bg-gradient-card border border-border shadow-card-elevated hover:-translate-y-1 transition-smooth"
          >
            <div className="h-12 w-12 rounded-xl bg-brand-green/15 flex items-center justify-center mb-4">
              <Icon className="text-brand-green" />
            </div>
            <h3 className="font-black text-lg mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
