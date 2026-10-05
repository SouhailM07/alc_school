import Link from "next/link";
import { finalCta } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-brand-dark">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <Reveal>
          <h2 id="cta-title" className="font-heading text-3xl font-bold tracking-tight text-balance text-white sm:text-5xl">
            {finalCta.titleA} <em className="font-serif font-normal text-brand-green italic">{finalCta.emphasized}</em> {finalCta.titleB}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">{finalCta.text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={finalCta.primary.href} className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-medium px-7 font-bold text-white transition hover:bg-brand-dark">
              {finalCta.primary.label}
            </Link>
            <Link href={finalCta.secondary.href} className="inline-flex h-12 items-center justify-center rounded-lg border border-white/25 px-7 font-semibold text-white transition hover:border-white">
              {finalCta.secondary.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
