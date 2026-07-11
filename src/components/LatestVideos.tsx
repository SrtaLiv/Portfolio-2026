import Image from "next/image";
import { getLatestVideos } from "@/lib/youtube";

export default async function LatestVideos() {
  const videos = await getLatestVideos(3);

  if (videos.length === 0) return null;

  return (
    <section className="w-full max-w-3xl py-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Últimos videos</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
              <Image
                src={video.thumbnailUrl}
                alt={video.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <p className="text-sm font-medium text-foreground">{video.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
