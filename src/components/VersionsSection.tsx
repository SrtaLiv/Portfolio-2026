"use client";

import { useState } from "react";
import { siteData } from "@/data/portfolio";
import Modal from "./Modal";
import ScrollReveal from "./ScrollReveal";

export default function VersionsSection() {
  const { versions } = siteData;
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeVersion = versions.items.find((v) => v.id === activeId);

  return (
    <section id="versions" className="section">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            {versions.title}
          </h2>
          <p className="mt-4 text-muted">{versions.subtitle}</p>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {versions.items.map((version, i) => (
            <ScrollReveal key={version.id} delay={i * 0.08}>
              <div
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                onClick={() => setActiveId(version.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveId(version.id);
                  }
                }}
                className="card card-hover group flex cursor-pointer flex-col items-start gap-4 p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-2xl transition-transform duration-300 group-hover:scale-110">
                  {version.emoji}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{version.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{version.short}</p>
                </div>
                <span className="mt-auto text-sm font-semibold text-accent transition-all duration-300 group-hover:gap-2 group-hover:translate-x-1">
                  Explorar →
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Modal open={!!activeVersion} onClose={() => setActiveId(null)}>
        {activeVersion && (
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-3xl">
                {activeVersion.emoji}
              </span>
              <h3 className="text-2xl font-bold text-foreground">{activeVersion.title}</h3>
            </div>

            <div className="space-y-3 text-base leading-relaxed text-muted">
              {activeVersion.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            {(activeVersion.tags || activeVersion.metrics) && (
              <div className="flex flex-wrap gap-2 pt-1">
                {(activeVersion.tags || activeVersion.metrics || []).map((tag) => (
                  <span key={tag} className="tag tag-accent">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <a
              href={activeVersion.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex pt-2"
            >
              {activeVersion.cta.text}
              <span className="text-sm">↗</span>
            </a>
          </div>
        )}
      </Modal>
    </section>
  );
}
