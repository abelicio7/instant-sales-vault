import { Hero } from "@/components/sales/Hero";
import { Problem } from "@/components/sales/Problem";
import { Solution } from "@/components/sales/Solution";
import { WhatYouGet } from "@/components/sales/WhatYouGet";
import { Benefits } from "@/components/sales/Benefits";
import { Transformation } from "@/components/sales/Transformation";
import { Scarcity } from "@/components/sales/Scarcity";
import { CTA } from "@/components/sales/CTA";
import { Guarantee } from "@/components/sales/Guarantee";
import { FAQ } from "@/components/sales/FAQ";
import { Footer } from "@/components/sales/Footer";
import { StickyBar } from "@/components/sales/StickyBar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased pb-24 md:pb-0 overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <WhatYouGet />
      <Benefits />
      <Transformation />
      <Scarcity />
      <CTA />
      <Guarantee />
      <FAQ />
      <Footer />
      <StickyBar />
    </main>
  );
};

export default Index;
