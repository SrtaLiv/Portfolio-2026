import Image from "next/image";
import { instagramPosts } from "@/data/instagram-posts";

export default function InstagramFeed() {
  if (instagramPosts.length === 0) return null;

  return (
    <section className="w-full max-w-3xl py-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Instagram</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {instagramPosts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl border border-border">
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <p className="text-sm font-medium text-foreground">{post.caption}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
