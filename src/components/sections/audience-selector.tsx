"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { audiences } from "@/content/site";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

export function AudienceSelector() {
  return (
    <section id="publics" aria-labelledby="publics-title" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <SectionHeading
          id="publics-title"
          eyebrow="Pour qui ?"
          titleA="Choisissez votre profil,"
          emphasized="on s'occupe"
          titleB="du reste."
        />
        <Reveal delay={0.1} className="mt-10">
          <Tabs defaultValue="adultes">
            <TabsList aria-label="Profils d'apprenants" className="flex w-full flex-wrap gap-2 bg-brand-slate-light p-1.5 sm:w-fit">
              {audiences.map((a) => (
                <TabsTrigger key={a.id} value={a.id} className="flex-1 px-4 py-2 sm:flex-none">
                  {a.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {audiences.map((a) => (
              <TabsContent key={a.id} value={a.id} className="mt-6 rounded-[10px] border border-border bg-brand-slate-light p-6 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-brand-navy">{a.title}</h3>
                    <p className="mt-2 max-w-xl leading-7 text-slate-600">{a.text}</p>
                    <Link href="#contact" className="mt-4 inline-flex h-11 items-center rounded-lg bg-brand-navy px-5 text-sm font-bold text-white transition hover:bg-brand-navy-light">
                      Tester mon niveau gratuitement
                    </Link>
                  </div>
                  <ul className="space-y-2.5">
                    {a.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-brand-navy">
                        <FaCheck aria-hidden className="text-brand-gold" style={{ color: "#B07C1A" }} /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
