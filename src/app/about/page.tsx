import { siteData } from "@/data/portfolio";
import Avatar from "@/components/Avatar";
import ScrollReveal from "@/components/ScrollReveal";
import SocialLinks from "@/components/SocialLinks";

export const metadata = {
  title: "Sobre Olivia Todesco",
  description:
    "Conocé mi historia: desarrolladora de software, diseñadora UX/UI, creadora de contenido y cofundadora de Nebula Solutions.",
};

export default function AboutPage() {
  const { about, timeline } = siteData;

  return (
    <main className="flex w-full flex-1 flex-col items-center">
      {/* Hero de la página */}
      <section className="relative flex min-h-[70vh] w-full flex-col items-center justify-center px-6 pb-12 pt-32 text-center">
        <div className="mx-auto max-w-4xl space-y-8">

          <ScrollReveal delay={0.1}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl"> 
              {about.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <blockquote>
              <p className="text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                “{about.quote}”
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mx-auto max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
              {about.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Historia */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-12 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {about.story.title}
            </h2>
          </ScrollReveal>

          <div className="space-y-6 text-lg leading-relaxed text-muted">
            {about.story.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.05}>
                <p>{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-surface-muted/50">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {timeline.title}
            </h2>
            <p className="mb-12 text-muted">{timeline.subtitle}</p>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" />
            <div className="space-y-12">
              {timeline.items.map((item, i) => (
                <ScrollReveal key={item.year + i} delay={0.1 + i * 0.05}>
                  <div
                    className={`relative flex flex-col gap-2 sm:flex-row sm:items-center ${
                      i % 2 === 0 ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="sm:w-1/2" />
                    <div className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-accent sm:left-1/2" />
                    <div className="pl-12 sm:w-1/2 sm:pl-0">
                      <div
                        className={`rounded-2xl border border-border bg-surface p-6 shadow-sm ${
                          i % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                        }`}
                      >
                        <span className="eyebrow mb-2">{item.year}</span>
                        <h3 className="mt-3 text-lg font-semibold text-foreground">
                          {item.label}
                        </h3>
                        <p className="text-muted">{item.note}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {about.values.title}
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {about.values.items.map((value, i) => (
              <ScrollReveal key={value.title} delay={0.1 + i * 0.05}>
                <div className="card card-hover h-full p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section bg-surface-muted/50">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {about.skills.title}
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {about.skills.categories.map((category, i) => (
              <ScrollReveal key={category.name} delay={0.1 + i * 0.05}>
                <div className="card h-full p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Datos personales */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {about.personal.title}
            </h2>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {about.personal.items.map((item, i) => (
              <ScrollReveal key={item.label} delay={0.1 + i * 0.05}>
                <div className="card flex items-center justify-between p-5">
                  <span className="text-sm font-medium text-muted">
                    {item.label}
                  </span>
                  <span className="text-right font-semibold text-foreground">
                    {item.value}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-balance text-3xl font-semibold leading-snug text-foreground sm:text-5xl">
              {about.cta.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {about.cta.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10">
              <a
                href={about.cta.button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                {about.cta.button.text} →
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-12">
              <SocialLinks />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
