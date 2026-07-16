import Image from "next/image";
import { getLatestVideos } from "@/lib/youtube";

export default async function LatestVideos() {
  let videos: Awaited<ReturnType<typeof getLatestVideos>> = [];
  let error = false;

  try {
    videos = await getLatestVideos(3);
  } catch {
    error = true;
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="text-muted">No pudimos cargar los últimos videos.</p>
        <a
          href="https://www.youtube.com/@oliviatodesco"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost mt-4 inline-flex"
        >
          Ver canal en YouTube ↗
        </a>
      </div>
    );
  }

  if (videos.length === 0) return null;

  return (
    <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-none sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
      {videos.map((video) => (
        <a
          key={video.id}
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-[75vw] shrink-0 snap-start flex-col gap-3 sm:w-auto sm:shrink"
        >
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              fill
              sizes="(max-width: 640px) 75vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <span className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white/90 text-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                ▶
              </span>
            </div>
          </div>
          <p className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
            {video.title}
          </p>
        </a>
      ))}
    </div>
  );
}
