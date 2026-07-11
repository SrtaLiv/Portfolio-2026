"use client";

import { siteData } from "@/data/portfolio";

export default function Hero() {
  const { hero } = siteData;

  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent-violet-soft blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent-warm-soft blur-3xl" />
      </div>

      <div className="max-w-4xl space-y-8">
        <span className="eyebrow">{hero.eyebrow}</span>

        <h1 className="space-y-2 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {hero.title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className="mx-auto max-w-2xl space-y-3 text-lg leading-relaxed text-text-muted sm:text-xl">
          {hero.subtitle.map((line, i) => (
            <p
              key={i}
              className={i === 2 ? "pt-2 font-semibold text-accent-warm" : ""}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <a href={hero.primaryCta.href} className="btn-primary">
            {hero.primaryCta.text}
          </a>
          <a href={hero.secondaryCta.href} className="btn-outline">
            {hero.secondaryCta.text}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-text-muted">
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <span className="ml-2">↓</span>
      </div>
    </section>
  );
}
