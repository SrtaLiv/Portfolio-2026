import Link from "next/link";

export const metadata = {
  title: "Sobre Olivia Todesco",
  description:
    "Desarrolladora de software, cofundadora de Nebula Solutions, creadora de contenido, diseñadora UI/UX y actriz.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <article className="w-full max-w-2xl space-y-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-5xl">Sobre mí</h1>

        <div className="space-y-4 text-left text-base leading-7 text-text-muted sm:text-lg">
          <p className="text-xl font-bold text-foreground sm:text-2xl">
            Siempre me gustó construir.
          </p>
          <p>Antes eran historias. Después páginas web. Hoy son empresas, productos y contenido.</p>
          <p>
            Creo que la tecnología sirve cuando mejora la vida de alguien. Y esa es la idea detrás
            de todo lo que hago.
          </p>
        </div>

        <Link href="/" className="btn-outline">
          ← Volver al inicio
        </Link>
      </article>
    </main>
  );
}
