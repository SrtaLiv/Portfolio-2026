import { siteData } from "@/data/portfolio";
import LatestVideos from "./LatestVideos";
import InstagramFeed from "./InstagramFeed";
import ScrollReveal from "./ScrollReveal";

export default function ContentSection() {
  const { content } = siteData;

  return (
    <section id="content" className="section bg-surface-muted/50">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-4 text-muted">{content.subtitle}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xl">🎥</span>
            <h3 className="text-lg font-semibold text-foreground">Últimos videos</h3>
          </div>
          <LatestVideos />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mb-4 mt-16 flex items-center gap-3">
            <span className="text-xl">📸</span>
            <h3 className="text-lg font-semibold text-foreground">Instagram</h3>
          </div>
          <InstagramFeed />
        </ScrollReveal>
      </div>
    </section>
  );
}
