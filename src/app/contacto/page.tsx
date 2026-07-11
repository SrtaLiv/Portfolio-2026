import { siteData } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";
import SocialLinks from "@/components/SocialLinks";

export const metadata = {
  title: "Contacto | Olivia Todesco",
  description:
    "¿Tenés una idea, un negocio o querés charlar sobre tecnología? Escribime o agendá una llamada.",
};

export default function ContactPage() {
  const { contact } = siteData;

  return (
    <main className="flex w-full flex-1 flex-col items-center px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Contacto
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {contact.subtitle}
          </p>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-16 grid w-full max-w-4xl gap-6 sm:grid-cols-2">
        <ScrollReveal delay={0.2}>
          <div className="card card-hover flex h-full flex-col items-start p-8">
            <span className="mb-4 text-3xl">📅</span>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              Agendá una llamada
            </h2>
            <p className="mb-6 flex-1 leading-relaxed text-muted">
              Si querés hablar de un proyecto, una idea o simplemente conocernos,
              reservá un espacio de 30 minutos.
            </p>
            <a
              href={contact.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              {contact.cta.text} →
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="card card-hover flex h-full flex-col items-start p-8">
            <span className="mb-4 text-3xl">✉️</span>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              Escribime un mail
            </h2>
            <p className="mb-6 flex-1 leading-relaxed text-muted">
              Preferís algo más formal? Mandame un correo con tu propuesta y te
              respondo en cuanto pueda.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="btn-outline w-full text-center"
            >
              {contact.email}
            </a>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mx-auto mt-20 max-w-3xl text-center">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            También podés encontrarme acá
          </h2>
          <SocialLinks />
        </div>
      </ScrollReveal>
    </main>
  );
}
