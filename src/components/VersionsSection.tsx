"use client";

import { useState } from "react";
import { siteData } from "@/data/portfolio";

export default function VersionsSection() {
  const { versions } = siteData;
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle(id);
    }
  };

  return (
    <section id="versions" className="w-full px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-5xl">{versions.title}</h2>
          <p className="mt-4 font-medium text-accent-violet">{versions.subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {versions.items.map((version) => {
            const isOpen = openId === version.id;
            const tags = version.tags || version.metrics || [];

            return (
              <div
                key={version.id}
                role="button"
                tabIndex={0}
                onClick={() => handleToggle(version.id)}
                onKeyDown={(e) => handleKeyDown(e, version.id)}
                aria-expanded={isOpen}
                className="card card-hover group relative flex cursor-pointer flex-col items-start gap-4 overflow-hidden p-6 text-left md:h-80"
              >
                {/* Default view */}
                <div
                  className={`flex w-full flex-col gap-4 transition-opacity ${
                    isOpen ? "hidden md:flex" : "flex"
                  } md:group-hover:opacity-0 md:group-hover:pointer-events-none`}
                >
                  <div className="flex w-full items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-violet-soft text-2xl">
                      {version.emoji}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{version.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text-muted">{version.short}</p>
                </div>

                {/* Expanded / hover view */}
                <div
                  className={`flex flex-col gap-4 text-left transition-all md:absolute md:inset-0 md:translate-y-full md:bg-surface md:p-6 md:group-hover:translate-y-0 ${
                    isOpen ? "flex" : "hidden md:flex"
                  }`}
                >
                  <div className="flex items-center gap-4 md:hidden">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-violet-soft text-2xl">
                      {version.emoji}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{version.title}</h3>
                  </div>

                  <div className="space-y-2 text-sm leading-relaxed text-text-muted">
                    {version.description.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>

                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={version.cta.href}
                    className="mt-auto self-start text-sm font-semibold text-accent-violet hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {version.cta.text}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
