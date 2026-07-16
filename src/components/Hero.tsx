"use client";

import { useSiteTheme } from "@/contexts/ThemeContext";
import HeroCreative from "./hero/HeroCreative";
import HeroTech from "./hero/HeroTech";
import HeroCorporate from "./hero/HeroCorporate";

export default function Hero() {
  const { theme } = useSiteTheme();

  if (theme === "tech") return <HeroTech />;
  if (theme === "corporate") return <HeroCorporate />;
  return <HeroCreative />;
}
