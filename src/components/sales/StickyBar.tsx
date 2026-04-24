import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const StickyBar = () => (
  <div className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-border bg-background/95 backdrop-blur px-3 py-2.5 shadow-elevated">
    <div className="flex items-center justify-between gap-3">
      <div className="flex flex-col leading-tight shrink-0">
        <span className="text-[10px] text-muted-foreground">Apenas</span>
        <span className="text-lg font-black text-brand-yellow">197 Mt</span>
      </div>
      <Button variant="cta" size="lg" className="flex-1 px-3 text-sm" asChild>
        <a href="https://www.ensinapay.com/checkout/b3ab3c55-0c53-4410-bf48-48bb9dcb4943">
          Comprar Agora <ArrowRight />
        </a>
      </Button>
    </div>
  </div>
);
