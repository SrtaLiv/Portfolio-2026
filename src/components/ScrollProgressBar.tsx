"use client";

import { useEffect, useRef, useState } from "react";

const BLOCK_COUNT = 12;

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
        setProgress(Math.min(1, Math.max(0, pct)));
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filledBlocks = Math.round(progress * BLOCK_COUNT);

  return (
    <div
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 md:right-6 sm:flex"
      aria-hidden="true"
    >
      {Array.from({ length: BLOCK_COUNT }, (_, i) => (
        <span key={i} className="scroll-progress-block" data-filled={i < filledBlocks} />
      ))}
      <span className="mt-2 text-center font-mono text-[10px] font-semibold text-muted">
        {Math.round(progress * 100)}%
      </span>
    </div>
  );
}
