"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT, HERO_TIMELINE } from "@/components/motion/timeline";

export function HeroIntro({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: HERO_TIMELINE.object, ease: [...EASE_OUT] }}
    >
      {children}
    </motion.div>
  );
}

export function HeroFade({
  children,
  at,
  className,
}: {
  children: ReactNode;
  at: keyof typeof HERO_TIMELINE;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: HERO_TIMELINE[at], ease: [...EASE_OUT] }}
    >
      {children}
    </motion.div>
  );
}
