"use client";

import Link from "next/link";
import { siteData } from "@/data/portfolio";
import Avatar from "./Avatar";

function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Hero() {
  const { hero } = siteData;

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 pb-12 pt-32 text-center">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <Avatar />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="eyebrow">{hero.eyebrow}</span>
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
          className="animate-fade-in-up flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row"
          style={{ animationDelay: "0.5s" }}
        >
          <CtaLink href={hero.primaryCta.href} className="btn-primary">
            {hero.primaryCta.text}
          </CtaLink>
          <CtaLink href={hero.secondaryCta.href} className="btn-outline">
            {hero.secondaryCta.text}
          </CtaLink>
        </div>

        <div
          className="animate-fade-in-up flex items-center justify-center gap-2 pt-4"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-sm text-muted">Disponible para proyectos · Co-founder en Nebula</span>
        </div>
      </div>

      <div
        className="animate-fade-in absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
        aria-hidden="true"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-border p-1.5">
          <div className="h-1.5 w-1 rounded-full bg-muted animate-mouse-scroll" />
        </div>
      </div>
    </section>
  );
}
