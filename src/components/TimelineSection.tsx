import { siteData } from "@/data/portfolio";

export default function TimelineSection() {
  const { timeline } = siteData;

  return (
    <section className="w-full px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-16 text-center text-3xl font-bold text-foreground sm:text-5xl">
          {timeline.title}
        </h2>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border sm:left-1/2 sm:-translate-x-1/2" />

          {timeline.items.map((item, i) => (
            <div
              key={item.year + item.label}
              className={`relative mb-12 flex items-start gap-6 sm:gap-0 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div
                className={`hidden w-1/2 px-8 sm:block ${
                  i % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <span className="text-sm font-semibold text-accent-violet">{item.year}</span>
              </div>

              <div className="absolute left-4 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-accent-violet sm:left-1/2" />

              <div className="w-full pl-10 sm:w-1/2 sm:pl-8">
                <span className="text-sm font-semibold text-accent-violet sm:hidden">
                  {item.year}
                </span>
                <p className="text-lg font-medium text-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
