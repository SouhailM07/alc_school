import { FaStar } from "react-icons/fa6";
import { showPlaceholderTestimonials, testimonials } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  if (!showPlaceholderTestimonials) return null;
  return (
    <section id="avis" className="scroll-mt-20 bg-brand-dark">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <SectionHeading dark={true}
          eyebrow="Témoignages"
          titleA="Ils apprennent"
          emphasized="avec ALC."
          titleB=""
        />
        <p className="mt-3 inline-block rounded-md bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
          Témoignages illustratifs — à remplacer par de vrais avis.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-[10px] border border-border bg-brand-slate-light p-6">
                <div aria-label="Note : 5 sur 5" className="flex gap-1 text-brand-green" style={{ color: "#2E8540" }}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FaStar key={s} aria-hidden size={14} />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-6 text-slate-700">« {t.text} »</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-bold text-brand-dark">{t.name}</span>
                  <span className="block text-xs text-slate-500">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
