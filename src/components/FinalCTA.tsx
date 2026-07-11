import { siteData } from "@/data/portfolio";
import SocialLinks from "./SocialLinks";

export default function FinalCTA() {
  const { contact } = siteData;

  return (
    <section className="w-full px-6 py-24">
      <div className="card mx-auto max-w-3xl p-8 text-center sm:p-12">
        <h2 className="text-3xl font-bold text-foreground sm:text-5xl">{contact.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-text-muted">
          {contact.subtitle}
        </p>

        <div className="mt-8">
          <a
            href={contact.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-warm text-base"
          >
            {contact.cta.text} →
          </a>
        </div>

        <div className="mt-10">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
