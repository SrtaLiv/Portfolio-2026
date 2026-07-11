import { siteData } from "@/data/portfolio";

export default function AboutSection() {
  const { about, contact } = siteData;

  return (
    <section id="about" className="w-full bg-surface-muted px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-5xl">{about.title}</h2>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-text-muted sm:text-xl">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "text-2xl font-bold text-foreground sm:text-3xl" : ""}>
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <a href={contact.cta.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {contact.cta.text} →
          </a>
        </div>
      </div>
    </section>
  );
}
