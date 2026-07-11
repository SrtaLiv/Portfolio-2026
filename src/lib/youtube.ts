const YOUTUBE_CHANNEL_ID = "UCdlIwDLPcw8E_FJV49wTtUQ";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

export interface YoutubeVideo {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  publishedAt: string;
}

function extractTag(block: string, tag: string) {
  const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return match ? match[1].trim() : "";
}

export async function getLatestVideos(limit = 3): Promise<YoutubeVideo[]> {
  const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });

  if (!res.ok) return [];

  const xml = await res.text();
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];

  return entries.slice(0, limit).map((entry) => {
    const id = extractTag(entry, "yt:videoId");
    return {
      id,
      title: extractTag(entry, "media:title"),
      url: `https://www.youtube.com/watch?v=${id}`,
      thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      publishedAt: extractTag(entry, "published"),
    };
  });
}
