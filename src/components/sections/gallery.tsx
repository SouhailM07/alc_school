import Image from "next/image";
import { gallery } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";
import { cn } from "cn";

export function Gallery() {
  return (
    <section id="galerie" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <SectionHeading
          eyebrow="La vie à ALC"
          titleA="Des classes"
          emphasized="vivantes,"
          titleB="des progrès visibles."
          description="Un aperçu de nos salles et de nos séances. Images d'illustration."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 4) * 0.06} className={cn(g.wide && "sm:col-span-2 lg:col-span-2")}>
              <figure className="group overflow-hidden rounded-[10px] border border-border">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={g.wide ? 1200 : 896}
                  height={g.wide ? 896 : 1200}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">Images d&apos;illustration.</p>
      </div>
    </section>
  );
}
