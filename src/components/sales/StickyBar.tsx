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
        <a href="https://my.debito.co.mz/pay/b29587ee-8f58-40e6-a36c-f01477cd8c9d" target="_blank" rel="noopener noreferrer">
          Comprar Agora <ArrowRight />
        </a>
      </Button>
    </div>
  </div>
);
