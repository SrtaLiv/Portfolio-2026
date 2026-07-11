import { siteData } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  const { about } = siteData;

  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            {about.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <blockquote className="relative mb-16 rounded-3xl bg-accent-soft px-8 py-12 text-center sm:px-16">
            <span className="absolute left-6 top-4 text-6xl leading-none text-accent/20">
              &ldquo;
            </span>
            <p className="relative z-10 text-2xl font-semibold leading-snug text-foreground sm:text-4xl">
              {about.quote}
            </p>
          </blockquote>
        </ScrollReveal>

        <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.1}>
              <p>{p}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
