import { trustBar } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";

export function TrustBar() {
  return (
    <section aria-label="Domaines d'accompagnement" className="border-y border-border bg-brand-slate-light">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-widest text-slate-500 uppercase">{trustBar.label}</p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {trustBar.items.map((item) => (
              <li key={item} className="flex items-center gap-2 font-heading text-base font-bold text-brand-dark/80">
                <span aria-hidden className="size-1.5 rounded-full bg-brand-green" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
