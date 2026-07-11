"use client";

import { useInView } from "@/hooks/useInView";
import { siteData } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function TimelineSection() {
  const { timeline } = siteData;
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="journey" className="section bg-surface-muted/50">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            {timeline.title}
          </h2>
          <p className="mt-4 text-muted">{timeline.subtitle}</p>
        </ScrollReveal>

        <div ref={ref} className="relative">
          {/* Background line */}
          <div className="absolute left-6 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />
          {/* Animated progress line */}
          <div
            className={`absolute left-6 top-0 w-px -translate-x-1/2 bg-accent transition-transform duration-[1500ms] ease-out sm:left-1/2 ${
              isInView ? "scale-y-100" : "scale-y-0"
            }`}
            style={{ height: "100%", transformOrigin: "top" }}
          />

          {timeline.items.map((item, i) => (
            <ScrollReveal key={item.year + item.label} delay={i * 0.1}>
              <div
                className={`relative mb-10 flex gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div
                  className={`hidden w-1/2 px-8 sm:flex ${
                    i % 2 === 0 ? "justify-end text-right" : "justify-start text-left"
                  }`}
                >
                  <span className="text-sm font-bold text-accent">{item.year}</span>
                </div>

                <div
                  className={`absolute left-6 top-1.5 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-accent transition-all duration-500 sm:left-1/2 ${
                    isInView ? "scale-100 opacity-100 shadow-[0_0_0_6px_rgba(109,40,217,0.15)]" : "scale-0 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                />

                <div className="w-full pl-14 sm:w-1/2 sm:pl-8">
                  <span className="text-sm font-bold text-accent sm:hidden">{item.year}</span>
                  <h3 className="text-lg font-semibold text-foreground">{item.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.note}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
