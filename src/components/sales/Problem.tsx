import { XCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const pains = [
  "Não sabe por onde começar no marketing digital",
  "Já tentou e não teve resultados consistentes",
  "Falta conhecimento prático e aplicável",
  "Perde tempo consumindo conteúdo gratuito que não leva a lugar nenhum",
];

export const Problem = () => (
  <section className="py-20 md:py-28 bg-background relative">
    <div className="container">
      <SectionHeading
        eyebrow="O problema"
        title={
          <>
            Cansado de tentar e <span className="text-destructive">não sair do lugar</span>?
          </>
        }
        description="Se você se identifica com algum desses pontos, este pacote foi feito para você."
      />

      <div className="mt-14 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {pains.map((pain) => (
          <div
            key={pain}
            className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-card border border-border hover:border-destructive/50 transition-smooth shadow-card-elevated"
          >
            <div className="h-11 w-11 rounded-xl bg-destructive/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-smooth">
              <XCircle className="text-destructive" />
            </div>
            <p className="text-base md:text-lg font-medium pt-1.5">{pain}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
