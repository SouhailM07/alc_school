import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  titleA,
  emphasized,
  titleB,
  description,
  dark = false,
  id,
}: {
  eyebrow: string;
  titleA: string;
  emphasized?: string;
  titleB?: string;
  description?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <Reveal>
      <div className="max-w-2xl">
        <p className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-green uppercase">
          <span aria-hidden className="inline-block h-px w-6 bg-brand-green" />
          {eyebrow}
        </p>
        <h2 id={id} className={`mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl ${dark ? "text-white" : "text-brand-dark"}`}>
          {titleA} {emphasized && <em className="font-serif font-normal italic">{emphasized}</em>} {titleB}
        </h2>
        {description && <p className={`mt-4 text-base leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>}
      </div>
    </Reveal>
  );
}
