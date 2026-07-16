import Image from "next/image";
import { Camera } from "lucide-react";
import { instagramPosts } from "@/data/instagram-posts";

export default function InstagramFeed() {
  if (instagramPosts.length === 0) return null;

  return (
    <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-none sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
      {instagramPosts.map((post) => (
        <a
          key={post.url}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-[75vw] shrink-0 snap-start flex-col gap-3 sm:w-auto sm:shrink"
        >
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border">
            <Image
              src={post.imageUrl}
              alt={post.caption || "Post de Instagram"}
              fill
              sizes="(max-width: 640px) 75vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <Camera
                className="h-7 w-7 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                strokeWidth={2}
              />
            </div>
          </div>
          {post.caption ? (
            <p className="line-clamp-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
              {post.caption}
            </p>
          ) : (
            <p className="text-sm text-muted">Ver en Instagram ↗</p>
          )}
        </a>
      ))}
    </div>
  );
}
