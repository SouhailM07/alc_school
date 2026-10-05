import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { contact, footer, socials } from "@/content/site";
import { Logo } from "@/components/brand/logo";

export function SiteFooter() {
  const socialList = [
    { href: socials.facebook, label: "Facebook", Icon: FaFacebook },
    { href: socials.instagram, label: "Instagram", Icon: FaInstagram },
    { href: socials.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-border bg-brand-dark">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">{footer.tagline}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <FaLocationDot aria-hidden className="text-brand-green" /> {contact.address}
            </li>
            <li>
              <a href={contact.phoneMobileHref} className="flex items-center gap-2 hover:text-white">
                <FaPhone aria-hidden className="text-brand-green" /> {contact.phoneMobile}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-white">
                <FaEnvelope aria-hidden className="text-brand-green" /> {contact.email}
              </a>
            </li>
          </ul>
          {socialList.length > 0 && (
            <div className="mt-4 flex gap-2">
              {socialList.map(({ href, label, Icon }) => (
                <a key={label} href={href} aria-label={`ALC sur ${label}`} target="_blank" rel="noopener" className="grid size-9 place-items-center rounded-md border border-border text-white hover:border-brand-green">
                  <Icon aria-hidden />
                </a>
              ))}
            </div>
          )}
        </div>
        {footer.columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="font-heading text-sm font-bold tracking-wide text-white uppercase">{col.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-slate-300 hover:text-white hover:underline hover:decoration-brand-green hover:underline-offset-4">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 ALC — Advanced Learning Centre. Tous droits réservés.</p>
          <p>Chéraga, Alger · {contact.phoneMobile} · {contact.phoneLandline}</p>
        </div>
      </div>
    </footer>
  );
}
