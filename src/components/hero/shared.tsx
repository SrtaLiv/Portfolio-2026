import Link from "next/link";

export function CtaLink({
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
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
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

export function ScrollCue() {
  return (
    <div
      className="animate-fade-in absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-muted"
      aria-hidden="true"
      style={{ animationDelay: "1s" }}
    >
      <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-border p-1.5">
        <div className="h-1.5 w-1 rounded-full bg-muted animate-mouse-scroll" />
      </div>
    </div>
  );
}

export function AvailabilityBadge({ label }: { label: string }) {
  return (
    <div
      className="animate-fade-in-up flex items-center justify-center gap-2 pt-4"
      style={{ animationDelay: "0.6s" }}
    >
      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}

export const FLOAT_TAG_STYLES = [
  { position: "left-[4%] top-[22%] -rotate-6", color: "bg-emerald-400 text-emerald-950" },
  { position: "right-[4%] top-[32%] rotate-3", color: "bg-rose-400 text-rose-950" },
  { position: "left-[8%] bottom-[20%] rotate-2", color: "bg-cyan-400 text-cyan-950" },
];

export function FloatTags({ items }: { items: { title: string }[] }) {
  return (
    <div className="hero-float-tags pointer-events-none absolute inset-0 z-10 hidden xl:block" aria-hidden="true">
      {items.slice(0, 3).map((item, i) => (
        <span
          key={item.title}
          className={`animate-float absolute rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide shadow-lg ${FLOAT_TAG_STYLES[i].position} ${FLOAT_TAG_STYLES[i].color}`}
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          {item.title}
        </span>
      ))}
    </div>
  );
}
