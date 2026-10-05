import { contact, seo, siteUrl } from "@/content/site";
import { SiteHeader } from "@/components/layout/site-header";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/hero/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Formations } from "@/components/sections/formations";
import { PourquoiAlc } from "@/components/sections/pourquoi-alc";
import { AudienceSelector } from "@/components/sections/audience-selector";
import { KidsTeens } from "@/components/sections/kids-teens";
import { Examens } from "@/components/sections/examens";
import { Entreprises } from "@/components/sections/entreprises";
import { Gallery } from "@/components/sections/gallery";
import { Benefits } from "@/components/sections/benefits";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { ContactSection } from "@/components/sections/contact-section";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#org`,
        name: "ALC — Advanced Learning Centre",
        description: seo.description,
        url: siteUrl,
        foundingDate: "1995",
        email: contact.email,
        telephone: contact.phoneMobile,
        address: {
          "@type": "PostalAddress",
          streetAddress: contact.address,
          addressLocality: "Alger",
          addressCountry: "DZ",
        },
      },
      {
        "@type": "LocalBusiness",
        name: "ALC — Advanced Learning Centre",
        telephone: contact.phoneMobile,
        email: contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: contact.address,
          addressLocality: "Alger",
          addressCountry: "DZ",
        },
      },
    ],
  };
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <SiteHeader />
      <main id="contenu">
        <Hero />
        <TrustBar />
        <Formations />
        <PourquoiAlc />
        <AudienceSelector />
        <KidsTeens />
        <Examens />
        <Entreprises />
        <Gallery />
        <Benefits />
        <Testimonials />
        <FinalCta />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}
