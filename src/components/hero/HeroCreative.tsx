import { siteData } from "@/data/portfolio";
import Avatar from "@/components/Avatar";
import PixelBlast from "@/components/PixelBlast";
import { AvailabilityBadge, CtaLink, FloatTags, ScrollCue } from "./shared";

export default function HeroCreative() {
  const { hero, themeContent } = siteData;
  const floatTags = themeContent.creative.help;

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 pb-12 pt-32 text-center">
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B497CF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      <FloatTags items={floatTags} />

      <div className="relative z-10 mx-auto max-w-4xl space-y-8">
   

        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="eyebrow">{themeContent.creative.eyebrow}</span>
        </div>

        <h1
          className="animate-fade-in-up text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.3s" }}
        >
          {hero.title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p
          className="animate-fade-in-up mx-auto max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          style={{ animationDelay: "0.4s" }}
        >
          {hero.description}
        </p>

        <div
          className="animate-fade-in-up flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row"
          style={{ animationDelay: "0.5s" }}
        >
          <CtaLink href={hero.primaryCta.href} className="btn-primary">
            {hero.primaryCta.text}
          </CtaLink>
          <CtaLink href={hero.secondaryCta.href} className="btn-outline">
            {hero.secondaryCta.text}
          </CtaLink>
        </div>

        <AvailabilityBadge label="Disponible para proyectos · Co-founder en Nebula" />
      </div>

      <ScrollCue />
    </section>
  );
}
