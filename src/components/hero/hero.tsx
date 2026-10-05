import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { hero } from "@/content/site";
import { SplitWords } from "@/components/motion/split-words";
import { HeroFade, HeroIntro } from "./hero-intro";
import { HeroVisual } from "./hero-visual";
import { HERO_TIMELINE } from "@/components/motion/timeline";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* faint grid + radial wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 70% at 30% 20%, black 30%, transparent 75%)",
          opacity: 0.35,
        }}
      />
      <div aria-hidden className="pointer-events-none absolute -top-24 right-0 size-[480px] rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pt-28 pb-16 sm:px-6 lg:grid-cols-[55fr_45fr] lg:items-center lg:pt-36 lg:pb-24">
        <HeroIntro>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-brand-slate-light px-3 py-1 text-xs font-semibold tracking-wide text-brand-navy uppercase">
              <span aria-hidden className="size-1.5 rounded-full bg-brand-gold" />
              {hero.badge}
            </p>
            <h1 className="mt-5 font-heading text-4xl leading-[1.05] font-bold tracking-tight text-balance text-brand-navy sm:text-5xl lg:text-6xl">
              <SplitWords a={hero.titleA} emphasized={hero.emphasized} b={hero.titleB} baseDelay={HERO_TIMELINE.headline} />
            </h1>
            <HeroFade at="desc">
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{hero.description}</p>
            </HeroFade>
            <HeroFade at="cta" className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-gold px-6 text-base font-bold text-brand-navy shadow-[0_2px_12px_rgba(244,185,66,0.35)] transition hover:bg-brand-gold-hover"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-white px-6 text-base font-semibold text-brand-navy transition hover:border-brand-navy"
              >
                {hero.secondaryCta.label}
              </Link>
            </HeroFade>
            <HeroFade at="settle">
              <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {hero.trust.map((t) => (
                  <div key={t.label} className="flex items-center gap-2">
                    <FaCheck aria-hidden className="text-brand-gold" />
                    <div className="text-sm">
                      <dt className="sr-only">{t.label}</dt>
                      <dd>
                        <span className="font-heading text-lg font-bold text-brand-navy">{t.value}</span>{" "}
                        <span className="text-slate-600">{t.label}</span>
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </HeroFade>
          </div>
        </HeroIntro>
        <HeroFade at="scene">
          <HeroVisual />
        </HeroFade>
      </div>
    </section>
  );
}
