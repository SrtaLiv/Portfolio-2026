"use client";

import { siteData } from "@/data/portfolio";
import { useSiteTheme } from "@/contexts/ThemeContext";
import ScrollReveal from "./ScrollReveal";

export default function ToolsSection() {
  const { theme } = useSiteTheme();
  const content = siteData.themeContent[theme];

  return (
    <section className="section">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            {content.toolsTitle}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {content.tools.map((tool) => (
              <span key={tool} className="tag tag-accent text-sm">
                {tool}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
