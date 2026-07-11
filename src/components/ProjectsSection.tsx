"use client";

import { useState } from "react";
import { siteData } from "@/data/portfolio";

export default function ProjectsSection() {
  const { projects } = siteData;
  const [activeId, setActiveId] = useState<string>(projects.items[0].id);
  const activeProject = projects.items.find((p) => p.id === activeId)!;

  return (
    <section id="projects" className="w-full px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-5xl">{projects.title}</h2>
          <p className="mt-4 text-text-muted">{projects.subtitle}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Project list */}
          <div className="flex flex-col gap-3 lg:col-span-4">
            {projects.items.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  activeId === project.id
                    ? "border-accent-violet/40 bg-accent-violet-soft"
                    : "border-border bg-surface hover:border-accent-violet/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">{project.name}</span>
                  <span className="text-xs text-text-muted">{project.country}</span>
                </div>
                <span className="block text-sm text-text-muted">{project.role}</span>
              </button>
            ))}
          </div>

          {/* Project detail */}
          <div className="card p-6 sm:p-8 lg:col-span-8">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold text-foreground">{activeProject.name}</h3>
              <span className="tag text-accent-warm">{activeProject.budget}</span>
              <span className="tag">{activeProject.duration}</span>
              <span className="tag">{activeProject.country}</span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent-violet">
                    Problema
                  </h4>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {activeProject.problem}
                  </p>
                </div>
                <div>
                  <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent-violet">
                    Proceso
                  </h4>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {activeProject.process}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent-violet">
                    Resultado
                  </h4>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {activeProject.result}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-violet">
                    Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.stack.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {(activeProject.team || activeProject.design) && (
                  <div className="text-xs text-text-muted">
                    {activeProject.team && <p>Equipo: {activeProject.team}</p>}
                    {activeProject.design && <p>Diseño: {activeProject.design}</p>}
                  </div>
                )}
              </div>
            </div>

            {activeProject.link !== "#" && (
              <div className="mt-8">
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Ver proyecto →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
