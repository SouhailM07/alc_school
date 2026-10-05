export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Hero timeline (seconds) — 0.0s → 1.2s, named tracks. */
export const HERO_TIMELINE = {
  scene: 0,
  object: 0.15,
  headline: 0.25,
  cards: 0.45,
  desc: 0.65,
  cta: 0.85,
  settle: 1.2,
} as const;

export const DUR = { fast: 0.4, base: 0.6, slow: 0.9 } as const;

export function delay(track: keyof typeof HERO_TIMELINE) {
  return HERO_TIMELINE[track];
}
