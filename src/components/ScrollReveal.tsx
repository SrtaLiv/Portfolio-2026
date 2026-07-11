"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
}: ScrollRevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  const directions: Record<string, { x: number; y: number }> = {
    up: { x: 0, y: 24 },
    down: { x: 0, y: -24 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
  };

  return (
    <div
      ref={ref}
      className={cn("transition-all will-change-transform", className)}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? "translate3d(0, 0, 0)"
          : `translate3d(${directions[direction].x ?? 0}px, ${directions[direction].y ?? 0}px, 0)`,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionProperty: "opacity, transform",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}
