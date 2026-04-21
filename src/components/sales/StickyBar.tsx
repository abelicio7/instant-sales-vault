import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const StickyBar = () => (
  <div className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-border bg-background/95 backdrop-blur p-3 shadow-elevated">
    <Button variant="cta" size="lg" className="w-full" asChild>
      <a href="#cta">Quero Acesso Imediato <ArrowRight /></a>
    </Button>
  </div>
);
