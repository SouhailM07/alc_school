import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { kidsSection } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

export function KidsTeens() {
  return (
    <section id="jeunes" className="scroll-mt-20 bg-brand-slate-light">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-32">
        <div className="order-2 lg:order-1">
          <SectionHeading eyebrow={kidsSection.eyebrow} titleA={kidsSection.titleA} emphasized={kidsSection.emphasized} titleB={kidsSection.titleB} description={kidsSection.description} />
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {kidsSection.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.06}>
                <li className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-brand-dark">
                  <FaCheck aria-hidden className="shrink-0" style={{ color: "#2E8540" }} /> {f}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.2}>
            <Link href="#contact" className="mt-6 inline-flex h-12 items-center rounded-lg bg-brand-medium px-6 font-bold text-white hover:bg-brand-dark">
              Inscrire mon enfant
            </Link>
          </Reveal>
        </div>
        <Reveal className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-[10px] border border-border shadow-[0_4px_20px_rgba(10,37,69,0.08)]">
            <Image src={kidsSection.image.src} alt={kidsSection.image.alt} width={1200} height={896} sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
