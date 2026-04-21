export const Footer = () => (
  <footer className="border-t border-border py-10 bg-background">
    <div className="container text-center text-sm text-muted-foreground space-y-2">
      <p className="font-black text-brand-white uppercase tracking-wider">Pacote Completo de Marketing Digital</p>
      <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
      <p className="text-xs max-w-2xl mx-auto opacity-70">
        Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como garantia de resultados.
      </p>
    </div>
  </footer>
);
