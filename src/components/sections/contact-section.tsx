import { contactSection } from "@/content/site";
import { ContactForm } from "@/components/contact/contact-form";
import { LocationCard } from "@/components/contact/location-card";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-brand-slate-light">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <SectionHeading
          eyebrow={contactSection.eyebrow}
          titleA={contactSection.titleA}
          emphasized={contactSection.emphasized}
          titleB={contactSection.titleB}
          description={contactSection.text}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <LocationCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
