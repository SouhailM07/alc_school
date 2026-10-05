import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { corporate } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

export function Entreprises() {
  return (
    <section id="entreprises" className="scroll-mt-20 bg-brand-navy">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-36">
        <div>
          <SectionHeading dark eyebrow={corporate.eyebrow} titleA={corporate.titleA} emphasized={corporate.emphasized} titleB={corporate.titleB} description={corporate.description} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {corporate.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <div className="rounded-[10px] border border-white/15 bg-white/5 p-5">
                  <p className="flex items-center gap-2 font-heading text-base font-bold text-white">
                    <FaCheck aria-hidden className="text-brand-gold" /> {f.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link href={corporate.cta.href} className="mt-8 inline-flex h-12 items-center rounded-lg bg-brand-gold px-6 font-bold text-brand-navy transition hover:bg-brand-gold-hover">
              {corporate.cta.label}
            </Link>
          </Reveal>
        </div>
        <Reveal>
          <div className="overflow-hidden rounded-[10px] border border-white/15">
            <Image src={corporate.image.src} alt={corporate.image.alt} width={1264} height={848} sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[3/2] w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
