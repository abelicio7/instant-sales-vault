import { GraduationCap, Briefcase, FileText, Sparkles, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const blocks = [
  {
    icon: GraduationCap,
    label: "Cursos Inclusos",
    accent: "green" as const,
    items: [
      "Tráfego Pago",
      "Tráfego Pago para Negócios Locais",
      "Facebook Ads para Afiliados",
      "Dropshipping",
    ],
  },
  {
    icon: Briefcase,
    label: "Kits Profissionais",
    accent: "yellow" as const,
    items: ["Kit Agência", "Kit Gestor de Tráfego", "Kit Social Media"],
  },
  {
    icon: FileText,
    label: "PLR (Produto com Direito de Revenda)",
    accent: "green" as const,
    items: ["Cursos prontos", "E-books editáveis", "Conteúdos para revenda"],
  },
  {
    icon: Sparkles,
    label: "Materiais Extras",
    accent: "yellow" as const,
    items: [
      "Copys e Headlines de Alta Conversão",
      "E-books lucrativos",
      "Scripts para vender no WhatsApp",
    ],
  },
];

export const WhatYouGet = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <SectionHeading
        eyebrow="O que você vai receber"
        title={
          <>
            Mais de <span className="text-gradient">15 produtos</span> em um único pacote
          </>
        }
        description="Cada bloco foi pensado para você ter tudo na mão e começar hoje mesmo."
      />

      <div className="mt-14 grid md:grid-cols-2 gap-8 md:gap-6 max-w-5xl mx-auto">
        {blocks.map(({ icon: Icon, label, items, accent }) => (
          <div
            key={label}
            className="group relative p-6 md:p-8 rounded-3xl bg-gradient-card border border-border shadow-card-elevated hover:border-brand-green/50 transition-smooth"
          >
            <div
              className={`absolute top-0 left-6 md:left-8 -translate-y-1/2 h-12 w-12 rounded-2xl flex items-center justify-center ${
                accent === "green"
                  ? "bg-gradient-cta shadow-glow-green"
                  : "bg-gradient-yellow shadow-glow-yellow"
              }`}
            >
              <Icon className="text-brand-black" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black mt-4 mb-5">{label}</h3>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-brand-green" />
                  </span>
                  <span className="text-sm sm:text-base text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
