"use client";

import { Briefcase, Laptop, Palette } from "lucide-react";
import { useSiteTheme, type SiteTheme } from "@/contexts/ThemeContext";

const modes: { id: SiteTheme; label: string; icon: typeof Palette }[] = [
  { id: "creative", label: "Creativa", icon: Palette },
  { id: "tech", label: "Tech", icon: Laptop },
  { id: "corporate", label: "CEO", icon: Briefcase },
];

export default function ThemeSwitcher({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useSiteTheme();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1 ${className}`}
      role="radiogroup"
      aria-label="Modo de visualización del portfolio"
    >
      {modes.map((mode) => (
        <button
          key={mode.id}
          type="button"
          role="radio"
          aria-checked={theme === mode.id}
          onClick={() => setTheme(mode.id)}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
            theme === mode.id
              ? "bg-foreground text-background"
              : "text-muted hover:bg-surface-muted hover:text-foreground"
          }`}
        >
          <mode.icon className="h-3.5 w-3.5" aria-hidden="true" />
          {mode.label}
        </button>
      ))}
    </div>
  );
}
