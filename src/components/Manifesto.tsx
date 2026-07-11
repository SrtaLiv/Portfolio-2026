import { siteData } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Manifesto() {
  const { manifesto } = siteData;

  const weights = ["font-bold", "font-semibold", "font-medium", "font-normal", "font-bold"];

  return (
    <section className="section flex items-center justify-center">
      <div className="mx-auto max-w-4xl text-center">
        <div className="space-y-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {manifesto.lines.map((line, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <span
                className={`block ${weights[i]} ${
                  i === manifesto.lines.length - 1 ? "text-accent" : ""
                }`}
              >
                {line}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
