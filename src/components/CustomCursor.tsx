"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useSiteTheme } from "@/contexts/ThemeContext";

export default function CustomCursor() {
  const { theme } = useSiteTheme();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const enabled = finePointer && theme !== "corporate";

  useEffect(() => {
    document.body.classList.toggle("cursor-none", enabled);
    return () => document.body.classList.remove("cursor-none");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const isTech = theme === "tech";
    const ringDuration = isTech ? 0.15 : 0.55;
    const ringEase = isTech ? "power3.out" : "elastic.out(1, 0.4)";

    const moveDotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
    const moveDotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });
    const moveRingX = gsap.quickTo(ring, "x", { duration: ringDuration, ease: ringEase });
    const moveRingY = gsap.quickTo(ring, "y", { duration: ringDuration, ease: ringEase });

    const handleMove = (e: MouseEvent) => {
      moveDotX(e.clientX);
      moveDotY(e.clientY);
      moveRingX(e.clientX);
      moveRingY(e.clientY);
    };
    const handleDown = () => gsap.to([dot, ring], { scale: 0.7, duration: 0.2, ease: "power2.out" });
    const handleUp = () => gsap.to([dot, ring], { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.4)" });

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [enabled, theme]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className={`custom-cursor-ring custom-cursor-ring--${theme}`}>
        {theme === "tech" && (
          <>
            <span className="custom-cursor-crosshair-h" />
            <span className="custom-cursor-crosshair-v" />
          </>
        )}
      </div>
    </>
  );
}
