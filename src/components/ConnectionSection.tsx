"use client";

import { useInView } from "@/hooks/useInView";
import { siteData } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

const icons = ["✍️", "🌟", "🚀", "🤝", "📦"];

export default function ConnectionSection() {
  const { connection } = siteData;
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="section bg-surface-muted/50">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            {connection.title}
          </h2>
          <p className="mt-4 text-muted">{connection.subtitle}</p>
        </ScrollReveal>

        <div ref={ref} className="relative flex flex-col items-center gap-0">
          {/* Progress line background */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />
          {/* Animated progress line */}
          <div
            className={`absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-accent to-pink-500 transition-transform duration-1000 ease-out ${
              isInView ? "scale-y-100" : "scale-y-0"
            }`}
            style={{ height: "100%", transformOrigin: "top" }}
          />

          {connection.steps.map((step, i) => (
            <div
              key={step.label}
              className="group relative z-10 flex w-full max-w-md flex-col items-center"
            >
              <ScrollReveal delay={i * 0.12}>
                <div className="flex w-full flex-col items-center gap-2 rounded-2xl border border-border bg-surface p-5 text-center shadow-sm transition-all duration-300 group-hover:border-accent-soft group-hover:shadow-md group-hover:-translate-y-1">
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    {icons[i]}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{step.label}</span>
                  <span className="text-xs text-muted">{step.note}</span>
                </div>
              </ScrollReveal>
              {i < connection.steps.length - 1 && <div className="h-12 w-px" />}
            </div>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="mx-auto mt-16 max-w-2xl text-center text-lg leading-relaxed text-muted">
            {connection.paragraph}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
