"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type SiteTheme = "creative" | "tech" | "corporate";

const STORAGE_KEY = "site-theme";

const ThemeContext = createContext<{
  theme: SiteTheme;
  setTheme: (theme: SiteTheme) => void;
} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<SiteTheme>("tech");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as SiteTheme | null;
    const resolved =
      stored === "creative" || stored === "tech" || stored === "corporate" ? stored : "tech";
    setThemeState(resolved);
    document.documentElement.setAttribute("data-theme", resolved);
  }, []);

  const setTheme = (next: SiteTheme) => {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useSiteTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useSiteTheme must be used within ThemeProvider");
  return ctx;
}
