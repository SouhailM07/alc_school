import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { exams } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

export function Examens() {
  const offered = exams.filter((e) => e.offered);
  return (
    <section id="examens" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Examens internationaux"
            titleA="Visez le"
            emphasized="meilleur score,"
            titleB="on vous y prépare."
            description="Entraînements en conditions réelles, correction détaillée et stratégie d'épreuve pour chaque test."
          />
          <Reveal delay={0.1}>
            <Link href="#contact" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:underline hover:decoration-brand-gold hover:underline-offset-4">
              Préparation sur mesure <FaArrowRight aria-hidden className="text-xs" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {offered.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.07} className="min-w-[240px] snap-start lg:min-w-0">
              <article className="flex h-full min-h-44 flex-col justify-between rounded-[10px] border border-border bg-brand-slate-light p-6 transition hover:-translate-y-1 hover:border-brand-gold hover:shadow-[0_8px_24px_rgba(10,37,69,0.10)]">
                <div>
                  <p className="font-heading text-2xl font-bold text-brand-navy">{e.name}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{e.full}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-700">{e.blurb}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
