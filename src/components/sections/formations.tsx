import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { programs } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

export function Formations() {
  return (
    <section id="formations" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <SectionHeading
          eyebrow="Nos formations"
          titleA="Un parcours pour"
          emphasized="chaque objectif,"
          titleB="du premier mot au certificat."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-[10px] border border-border bg-white p-6 shadow-[0_1px_4px_rgba(10,37,69,0.05)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(10,37,69,0.10)]">
                <p className="text-xs font-bold tracking-widest text-brand-gold uppercase" style={{ color: "#B07C1A" }}>{p.audience}</p>
                <h3 className="mt-2 font-heading text-xl font-bold text-brand-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <FaCheck aria-hidden className="mt-1 shrink-0 text-xs text-brand-navy" /> {pt}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs font-medium text-slate-500">{p.duration}</p>
                <Link href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:gap-2.5 hover:underline hover:decoration-brand-gold hover:underline-offset-4">
                  Demander ce programme <FaArrowRight aria-hidden className="text-xs" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
