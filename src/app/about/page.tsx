import Link from "next/link";
import { siteData } from "@/data/portfolio";

export const metadata = {
  title: "Sobre Olivia Todesco",
  description:
    "Desarrolladora de software, diseñadora UX/UI, creadora de contenido y cofundadora de Nebula Solutions.",
};

export default function AboutPage() {
  const { about } = siteData;

  return (
    <main className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <article className="w-full max-w-2xl space-y-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          {about.title}
        </h1>

        <blockquote>
          <p className="text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            “{about.quote}”
          </p>
        </blockquote>

        <div className="space-y-5 text-left text-base leading-7 text-muted sm:text-lg">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          ← Volver al inicio
        </Link>
      </article>
    </main>
  );
}
