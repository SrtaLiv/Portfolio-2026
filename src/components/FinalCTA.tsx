import { siteData } from "@/data/portfolio";
import SocialLinks from "./SocialLinks";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  const { contact } = siteData;

  return (
    <section className="section">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="text-balance text-3xl font-semibold leading-snug text-foreground sm:text-5xl">
            {contact.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {contact.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10">
            <a
              href={contact.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              {contact.cta.text} →
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
  );
}
