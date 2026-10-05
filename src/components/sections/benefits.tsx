import { benefits } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

export function Benefits() {
  return (
    <section id="atouts" className="bg-brand-slate-light">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <SectionHeading
          eyebrow="Vos avantages"
          titleA="Pourquoi nos élèves"
          emphasized="progressent"
          titleB="plus vite."
        />
        <ol className="mt-10">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <li className="grid gap-2 border-t border-border py-7 last:border-b sm:grid-cols-[64px_1fr_1.4fr] sm:items-baseline sm:gap-6">
                <span aria-hidden className="font-heading text-2xl font-bold text-brand-navy/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl font-bold text-brand-navy">{b.title}</h3>
                <p className="leading-7 text-slate-600">{b.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
