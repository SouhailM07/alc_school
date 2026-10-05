"use client";

import { useState } from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { contact } from "@/content/site";

export function LocationCard() {
  const [loadMap, setLoadMap] = useState(false);
  const dirHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.mapsQuery)}`;
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&output=embed`;

  return (
    <div className="flex h-full flex-col rounded-[10px] border border-border bg-white p-6 shadow-[0_2px_16px_rgba(10,37,69,0.06)] sm:p-8">
      <h3 className="font-heading text-xl font-bold text-brand-navy">Nous trouver</h3>
      <ul className="mt-4 space-y-3 text-sm">
        <li className="flex items-start gap-2.5 text-slate-700">
          <FaLocationDot aria-hidden className="mt-0.5 shrink-0 text-brand-navy" /> {contact.address}
        </li>
        <li>
          <a href={contact.phoneMobileHref} className="flex items-center gap-2.5 font-semibold text-brand-navy hover:underline hover:decoration-brand-gold hover:underline-offset-4">
            <FaPhone aria-hidden className="shrink-0" /> {contact.phoneMobile} <span className="font-normal text-slate-500">(mobile)</span>
          </a>
        </li>
        <li>
          <a href={contact.phoneLandlineHref} className="flex items-center gap-2.5 text-slate-700 hover:text-brand-navy">
            <FaPhone aria-hidden className="shrink-0" /> {contact.phoneLandline} <span className="text-slate-500">(fixe)</span>
          </a>
        </li>
        <li>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2.5 text-slate-700 hover:text-brand-navy">
            <FaEnvelope aria-hidden className="shrink-0" /> {contact.email}
          </a>
        </li>
      </ul>
      <div className="mt-5 flex-1 overflow-hidden rounded-lg border border-border bg-brand-slate-light">
        {loadMap ? (
          <iframe title="Carte — ALC Bir Mourad Raïs, Alger" src={embedSrc} loading="lazy" className="h-64 w-full border-0" referrerPolicy="no-referrer-when-downgrade" />
        ) : (
          <button type="button" onClick={() => setLoadMap(true)} className="flex h-64 w-full flex-col items-center justify-center gap-2 p-6 text-center transition hover:bg-slate-100">
            <FaLocationDot aria-hidden size={24} className="text-brand-navy" />
            <span className="font-heading font-bold text-brand-navy">Voir la carte</span>
            <span className="text-xs text-slate-500">Cliquez pour charger Google Maps</span>
          </button>
        )}
      </div>
      <a href={dirHref} target="_blank" rel="noopener" className="mt-4 inline-flex h-9 w-full items-center justify-center rounded-lg border border-border bg-white px-4 text-sm font-medium transition hover:bg-brand-slate-light">
        Voir l&apos;itinéraire
      </a>
    </div>
  );
}
