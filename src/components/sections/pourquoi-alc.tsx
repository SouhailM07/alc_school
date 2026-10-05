import Image from "next/image";
import { whyAlc } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

export function PourquoiAlc() {
  return (
    <section id="pourquoi" className="scroll-mt-20 bg-brand-slate-light">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[10px] border border-border shadow-[0_4px_20px_rgba(10,37,69,0.08)]">
            <Image src={whyAlc.image.src} alt={whyAlc.image.alt} width={1200} height={896} sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[4/3] w-full object-cover" />
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow={whyAlc.eyebrow} titleA={whyAlc.titleA} emphasized={whyAlc.emphasized} titleB={whyAlc.titleB} description={whyAlc.description} />
          <ol className="mt-8 space-y-0">
            {whyAlc.points.map((pt, i) => (
              <Reveal key={pt.title} delay={i * 0.08}>
                <li className="flex gap-4 border-t border-border py-5 last:border-b">
                  <span aria-hidden className="font-heading text-sm font-bold text-brand-gold" style={{ color: "#B07C1A" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-brand-navy">{pt.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{pt.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
