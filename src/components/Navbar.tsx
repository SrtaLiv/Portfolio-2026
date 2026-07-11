"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/data/portfolio";

export default function Navbar() {
  const { nav } = siteData;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-foreground transition-colors hover:text-accent focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {nav.name}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {nav.links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "font-medium text-foreground"
                    : "text-muted hover:bg-surface-muted hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-3 right-3 h-px bg-accent" />
                )}
              </Link>
            );
          })}
          <a
            href={nav.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all hover:bg-muted hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {nav.cta.label}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          ref={menuRef}
          className="border-b border-border bg-background px-6 pb-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm ${
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted hover:bg-surface-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={nav.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-foreground px-4 py-2 text-center text-sm font-semibold text-background"
              onClick={() => setMobileOpen(false)}
            >
              {nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
