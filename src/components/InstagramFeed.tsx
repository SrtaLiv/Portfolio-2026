import Image from "next/image";
import { instagramPosts } from "@/data/instagram-posts";

export default function InstagramFeed() {
  if (instagramPosts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {instagramPosts.map((post) => (
        <a
          key={post.url}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3"
        >
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border">
            <Image
              src={post.imageUrl}
              alt={post.caption || "Post de Instagram"}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <span className="text-2xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                📷
              </span>
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
