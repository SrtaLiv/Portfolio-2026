"use client";

import { siteData } from "@/data/portfolio";
import { useSiteTheme } from "@/contexts/ThemeContext";
import ScrollReveal from "./ScrollReveal";

export default function HelpSection() {
  const { theme } = useSiteTheme();
  const content = siteData.themeContent[theme];

  return (
    <section className="section bg-surface-muted/50">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            {content.helpTitle}
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {content.help.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 + i * 0.05}>
              <div className="card card-hover h-full p-6 text-left">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
