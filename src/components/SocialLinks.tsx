import { siteData } from "@/data/portfolio";

export default function SocialLinks() {
  const { contact } = siteData;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {contact.social.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent-violet hover:text-accent-violet"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
