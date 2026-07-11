import { siteData } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

const gradientClasses = [
  "bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
  "bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-violet-500/20",
  "bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
  "bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-yellow-500/20",
  "bg-gradient-to-br from-rose-500/20 via-pink-500/20 to-fuchsia-500/20",
  "bg-gradient-to-br from-slate-500/20 via-zinc-500/20 to-neutral-500/20",
];

export default function ProjectsSection() {
  const { projects } = siteData;

  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              {projects.title}
            </h2>
            <p className="mt-4 text-muted">{projects.subtitle}</p>
          </div>
          <a
            href={projects.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline shrink-0"
          >
            {projects.cta.text} ↗
          </a>
        </ScrollReveal>

        <div className="space-y-24">
          {projects.items.map((project, i) => (
            <ScrollReveal key={project.id} delay={0.1}>
              <article
                className={`group grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`card relative flex aspect-[4/3] items-center justify-center overflow-hidden ${gradientClasses[i]} ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className={`absolute inset-0 ${gradientClasses[i]}`} />
                  <div className="relative text-center transition-transform duration-500 group-hover:scale-105">
                    <span className="text-6xl font-bold text-foreground/10">
                      {project.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted">
                    <span>🌍 {project.country}</span>
                    <span>·</span>
                    <span className="font-medium text-foreground">{project.budget}</span>
                    <span>·</span>
                    <span>{project.duration}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted">{project.role}</p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                        Problema
                      </h4>
                      <p className="leading-relaxed text-muted">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                        Solución
                      </h4>
                      <p className="leading-relaxed text-muted">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                        Impacto
                      </h4>
                      <p className="leading-relaxed text-muted">{project.impact}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                        Aprendizajes
                      </h4>
                      <p className="leading-relaxed text-muted">{project.learnings}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
