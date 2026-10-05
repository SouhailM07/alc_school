"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT } from "./timeline";

function Emphasized({ word }: { word: string }) {
  return <em className="font-serif italic font-normal">{word}</em>;
}

/**
 * Word-split headline, screen-reader safe (aria-label on parent,
 * word spans are aria-hidden).
 */
export function SplitWords({
  a,
  emphasized,
  b,
  baseDelay = 0.25,
  className = "",
  ariaLabel,
}: {
  a: string;
  emphasized?: string;
  b?: string;
  baseDelay?: number;
  className?: string;
  ariaLabel?: string;
}) {
  const reduce = useReducedMotion();
  const words: { w: string; em?: boolean }[] = [
    ...a.split(" ").map((w) => ({ w })),
    ...(emphasized ? emphasized.split(" ").map((w) => ({ w, em: true })) : []),
    ...(b ? b.split(" ").map((w) => ({ w })) : []),
  ];
  const label = ariaLabel ?? `${a} ${emphasized ?? ""} ${b ?? ""}`.trim();
  if (reduce) {
    return (
      <span className={className} aria-label={label}>
        {a} {emphasized && <Emphasized word={emphasized} />} {b}
      </span>
    );
  }
  return (
    <span className={className} aria-label={label} role="text">
      {words.map(({ w, em }, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: baseDelay + i * 0.06, ease: [...EASE_OUT] }}
        >
          {em ? <Emphasized word={w} /> : w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
