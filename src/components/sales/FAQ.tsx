import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  { q: "Preciso ter experiência em marketing digital?", a: "Não. O pacote foi pensado para quem está começando do absoluto zero, com passo a passo claro e direto." },
  { q: "Funciona para iniciantes?", a: "Sim. Os cursos partem do básico e te levam até estratégias avançadas de tráfego e vendas." },
  { q: "Posso usar os materiais para vender?", a: "Sim. Os PLR vêm com direito de revenda e os kits foram criados para você aplicar em clientes ou no seu próprio negócio." },
  { q: "O acesso é imediato?", a: "Sim. Após a confirmação do pagamento você recebe acesso na hora a toda a plataforma e materiais." },
  { q: "Por quanto tempo terei acesso?", a: "O acesso é vitalício. Você compra uma vez e pode acessar quando quiser." },
  { q: "Tem garantia?", a: "Sim, 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor." },
];

export const FAQ = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <SectionHeading
        eyebrow="FAQ"
        title="Perguntas Frequentes"
        description="Tirando as últimas dúvidas antes de você começar."
      />
      <div className="mt-10 md:mt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-2xl bg-gradient-card px-4 sm:px-6 shadow-card-elevated"
            >
              <AccordionTrigger className="text-left font-bold text-sm sm:text-base md:text-lg hover:no-underline py-4 sm:py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
