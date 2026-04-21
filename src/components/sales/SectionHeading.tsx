import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, description, align = "center" }: Props) => (
  <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
    {eyebrow && (
      <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand-green mb-4 px-3 py-1 rounded-full border border-brand-green/30 bg-brand-green/10">
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-base md:text-lg text-muted-foreground">{description}</p>
    )}
  </div>
);
