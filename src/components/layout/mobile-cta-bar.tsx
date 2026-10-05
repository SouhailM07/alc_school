"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { contact } from "@/content/site";
import { cn } from "cn";

export function MobileCtaBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = document.getElementById("contact");
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 md:hidden",
        hidden && "translate-y-full"
      )}
    >
      <nav
        aria-label="Actions rapides"
        className="grid grid-cols-3 gap-px border-t border-border bg-white pb-[env(safe-area-inset-bottom)]"
      >
        <a href={contact.phoneMobileHref} className="flex min-h-12 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-semibold text-brand-dark">
          <FaPhone aria-hidden size={16} /> Appeler
        </a>
        <a href={contact.whatsappHref} target="_blank" rel="noopener" className="flex min-h-12 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-semibold text-brand-dark">
          <FaWhatsapp aria-hidden size={18} /> WhatsApp
        </a>
        <Link href="#contact" className="flex min-h-12 flex-col items-center justify-center bg-brand-medium py-2 text-[11px] font-bold text-white">
          S&apos;inscrire
        </Link>
      </nav>
    </div>
  );
}
