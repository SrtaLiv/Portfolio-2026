import { siteData } from "@/data/portfolio";

export default function ConnectionSection() {
  const { connection } = siteData;

  return (
    <section className="w-full bg-surface-muted px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between">
        {/* Flow chart */}
        <div className="flex flex-col items-center gap-1">
          {connection.steps.map((step, i) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`flex min-w-[180px] items-center justify-center rounded-full border px-6 py-3 text-center text-sm font-semibold ${
                  i === 0 || i === connection.steps.length - 1
                    ? "border-accent-violet/30 bg-accent-violet-soft text-accent-violet"
                    : "border-border bg-surface text-text-muted"
                }`}
              >
                {step}
              </div>
              {i < connection.steps.length - 1 && (
                <div className="my-1 h-8 w-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-foreground sm:text-5xl">{connection.title}</h2>
          <h3 className="text-xl font-semibold text-accent-warm sm:text-2xl">
            {connection.subtitle}
          </h3>
          <div className="space-y-4 text-base leading-relaxed text-text-muted sm:text-lg">
            {connection.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
