export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.alc-dz.net";

export const contact = {
  phoneMobile: "0550 59 02 88",
  phoneMobileHref: "tel:+213550590288",
  whatsappHref: "https://wa.me/213550590288",
  phoneLandline: "023 48 08 10",
  phoneLandlineHref: "tel:+21323480810",
  email: "contact@alc-dz.net",
  address: "Rue des Frères Bouadou, Bir Mourad Raïs, Alger",
  mapsQuery: "ALC Algerian Learning Centers Bir Mourad Raïs Alger",
  foundingYear: 1995,
} as const;

export const socials = {
  facebook: "",
  instagram: "",
  linkedin: "",
} as const;

export const navLinks = [
  { label: "Formations", href: "#formations" },
  { label: "Pourquoi ALC", href: "#pourquoi" },
  { label: "Enfants & Ados", href: "#jeunes" },
  { label: "Examens", href: "#examens" },
  { label: "Entreprises", href: "#entreprises" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  badge: "Depuis 1995 · Alger",
  titleA: "Apprenez l'anglais",
  emphasized: "avec confiance,",
  titleB: "parlez au monde.",
  description:
    "ALC — Algerian Learning Centers vous accompagne de vos premiers mots jusqu'aux certifications internationales, avec des formateurs expérimentés et des groupes à taille humaine.",
  primaryCta: { label: "S'inscrire", href: "#contact" },
  secondaryCta: { label: "Découvrir nos formations", href: "#formations" },
  trust: [
    { value: "30+", label: "années d'expérience" },
    { value: "15k+", label: "apprenants accompagnés" },
    { value: "4", label: "examens préparés" },
  ],
} as const;

export const trustBar = {
  label: "Ils nous font confiance pour progresser en anglais",
  items: ["Cours du soir", "Préparation TOEIC", "Anglais juniors", "Formation entreprises"],
} as const;

export type Program = {
  id: string;
  title: string;
  audience: string;
  description: string;
  points: string[];
  duration: string;
};

export const programs: Program[] = [
  {
    id: "general",
    title: "Anglais général",
    audience: "Adultes · tous niveaux",
    description:
      "Le socle ALC : grammaire, vocabulaire et prise de parole pour communiquer avec aisance au quotidien et au travail.",
    points: ["Niveaux A1 → C1", "Groupes réduits", "2 séances / semaine"],
    duration: "Session de 10 semaines",
  },
  {
    id: "kids",
    title: "Kids & Teens",
    audience: "6 – 17 ans",
    description:
      "Un apprentissage ludique et structuré qui donne à vos enfants le goût de l'anglais et des résultats visibles à l'école.",
    points: ["Pédagogie ludique", "Suivi des parents", "Clubs de conversation"],
    duration: "Trimestre renouvelable",
  },
  {
    id: "exam",
    title: "Préparation aux examens",
    audience: "TOEIC · TOEFL · IELTS · TFI",
    description:
      "Des entraînements ciblés, des examens blancs et des stratégies d'épreuve pour viser votre meilleur score.",
    points: ["Examens blancs", "Coaching individualisé", "Planning intensif"],
    duration: "4 à 8 semaines",
  },
  {
    id: "business",
    title: "Anglais professionnel",
    audience: "Entreprises & cadres",
    description:
      "Réunions, e-mails, négociations : un anglais opérationnel adapté à votre secteur et à vos objectifs.",
    points: ["Audit de niveau offert", "Sur site ou au centre", "Reporting RH"],
    duration: "Programme sur mesure",
  },
];

export const whyAlc = {
  eyebrow: "Pourquoi ALC",
  titleA: "Une école",
  emphasized: "exigeante,",
  titleB: "une ambiance chaleureuse.",
  description:
    "Depuis 1995, ALC forme des générations d'algériens à l'anglais. Notre méthode allie rigueur académique et pratique intensive de l'oral.",
  image: { src: "/images/why-classroom.webp", alt: "Image d'illustration — salle de cours ALC" },
  points: [
    {
      title: "Formateurs expérimentés",
      text: "Des enseignants qualifiés qui corrigent, encouragent et font parler chaque élève à chaque séance.",
    },
    {
      title: "Groupes à taille humaine",
      text: "Des classes limitées pour garantir du temps de parole et un suivi véritablement personnalisé.",
    },
    {
      title: "Méthode orientée résultats",
      text: "Tests de niveau réguliers, objectifs clairs et préparation intensive aux certifications reconnues.",
    },
  ],
} as const;

export const audiences = [
  {
    id: "adultes",
    label: "Adultes",
    title: "Reprenez l'anglais, à votre rythme",
    text: "Cours du soir et du week-end compatibles avec votre travail. Progressez d'un niveau CECR par session avec un vrai temps de parole.",
    bullets: ["Cours du soir & week-end", "Conversation intensive", "Certificat de niveau"],
  },
  {
    id: "etudiants",
    label: "Étudiants",
    title: "Boostez vos études et vos bourses",
    text: "Préparez IELTS et TOEFL pour vos dossiers d'études à l'étranger, avec des examens blancs en conditions réelles.",
    bullets: ["IELTS / TOEFL / TOEIC", "Examens blancs notés", "Dossier universitaire"],
  },
  {
    id: "jeunes",
    label: "Enfants & Ados",
    title: "Le bon moment pour commencer",
    text: "Des cours ludiques qui construisent des bases solides : chansons, jeux, théâtre et clubs de conversation.",
    bullets: ["Groupes par âge", "Suivi des parents", "Activités ludiques"],
  },
  {
    id: "pro",
    label: "Professionnels",
    title: "Un anglais qui fait carrière",
    text: "Présentations, réunions, e-mails : gagnez en crédibilité avec un coaching ciblé sur votre poste.",
    bullets: ["Audit de niveau offert", "Formation sur site", "Horaires flexibles"],
  },
] as const;

export const kidsSection = {
  eyebrow: "Kids & Teens",
  titleA: "Vos enfants vont",
  emphasized: "adorer",
  titleB: "l'anglais.",
  description:
    "Dès 6 ans, vos enfants apprennent l'anglais en s'amusant — et vous suivez leurs progrès en toute transparence.",
  image: { src: "/images/kids-learning.webp", alt: "Image d'illustration — enfants en cours d'anglais" },
  features: ["Groupes par tranche d'âge", "Méthode ludique et orale", "Bilans réguliers aux parents", "Clubs et activités vacances"],
} as const;

export type Exam = { name: string; full: string; offered: boolean; blurb: string };

export const exams: Exam[] = [
  { name: "TOEIC", full: "Test of English for International Communication", offered: true, blurb: "Valorisez votre CV et évoluez en entreprise." },
  { name: "TOEFL", full: "Test of English as a Foreign Language", offered: true, blurb: "La référence pour étudier en Amérique du Nord." },
  { name: "IELTS", full: "International English Language Testing System", offered: true, blurb: "Études, immigration et carrières internationales." },
  { name: "TFI", full: "Test de Français International", offered: true, blurb: "Certifiez votre français à usage professionnel." },
  { name: "Cambridge", full: "Cambridge English Qualifications", offered: false, blurb: "B2 First, C1 Advanced — à confirmer." },
  { name: "DELF / DALF", full: "Diplômes de langue française", offered: false, blurb: "Diplômes officiels — à confirmer." },
  { name: "TEF / TCF", full: "Tests de français Canada", offered: false, blurb: "Immigration Canada — à confirmer." },
  { name: "LanguageCert", full: "LanguageCert International", offered: false, blurb: "Certification en ligne — à confirmer." },
];

export const corporate = {
  eyebrow: "Entreprises",
  titleA: "Formez vos équipes",
  emphasized: "à l'anglais",
  titleB: "qui rapporte.",
  description:
    "Audit gratuit, programme sur mesure et reporting RH : ALC rend vos collaborateurs opérationnels en anglais professionnel.",
  image: { src: "/images/corporate-training.webp", alt: "Image d'illustration — formation en entreprise" },
  features: [
    { title: "Audit de niveau offert", text: "Positionnement CECR de chaque collaborateur avant de démarrer." },
    { title: "Programme sur mesure", text: "Contenus adaptés à votre secteur : réunions, e-mails, négociations." },
    { title: "Flexible", text: "Au centre ALC ou dans vos locaux, en présentiel ou en hybride." },
    { title: "Suivi RH", text: "Présences, progrès et attestations pour vos dossiers formation." },
  ],
  cta: { label: "Demander un devis entreprise", href: "#contact" },
} as const;

export type GalleryImage = { src: string; alt: string; illustrative: boolean; wide?: boolean };

export const gallery: GalleryImage[] = [
  { src: "/images/gallery-modern-classroom.webp", alt: "Image d'illustration — salle de classe moderne", illustrative: true },
  { src: "/images/gallery-speaking-practice.webp", alt: "Image d'illustration — pratique de la conversation", illustrative: true },
  { src: "/images/gallery-teens-collab.webp", alt: "Image d'illustration — adolescents en travail de groupe", illustrative: true, wide: true },
  { src: "/images/gallery-tutoring.webp", alt: "Image d'illustration — accompagnement individualisé", illustrative: true },
];

export const benefits = [
  { title: "Parlez dès la première semaine", text: "50 % du temps de cours consacré à l'oral : dialogues, débats et mises en situation réelles." },
  { title: "Des groupes qui vous font parler", text: "Des classes limitées pour que chaque élève prenne la parole à chaque séance." },
  { title: "Un niveau mesuré et certifié", text: "Tests d'entrée et de sortie alignés CECR, plus une préparation intensive aux examens officiels." },
  { title: "Au cœur d'Alger", text: "Un centre accessible à Bir Mourad Raïs, avec des horaires du matin au soir et le week-end." },
] as const;

export const showPlaceholderTestimonials = false;

export const testimonials = [
  { name: "Amine B.", role: "Étudiant — IELTS 7.0", text: "Après deux mois de préparation intensive, j'ai obtenu le score qu'il me fallait pour mon dossier universitaire.", placeholder: true },
  { name: "Sara M.", role: "Parent d'élève", text: "Ma fille attend ses cours d'anglais avec impatience et ses notes à l'école se sont nettement améliorées.", placeholder: true },
  { name: "Yacine K.", role: "Cadre commercial", text: "La formation entreprise a changé mes réunions : je présente et je négocie en anglais sans stress.", placeholder: true },
] as const;

export const finalCta = {
  titleA: "Prêt à parler",
  emphasized: "anglais",
  titleB: "avec assurance ?",
  text: "Laissez-nous vos coordonnées : nous vous rappelons sous 24 h pour un test de niveau gratuit et un plan de formation.",
  primary: { label: "Demander un rappel gratuit", href: "#contact" },
  secondary: { label: "Appeler le 0550 59 02 88", href: "tel:+213550590288" },
} as const;

export const contactSection = {
  eyebrow: "Contact",
  titleA: "Discutons de",
  emphasized: "votre projet",
  titleB: "en anglais.",
  text: "Remplissez le formulaire — nous vous répondons sous 24 heures ouvrées.",
  successMessage: "Merci ! Votre demande a bien été envoyée. Nous vous recontactons sous 24 heures ouvrées.",
  courseOptions: ["Anglais général", "Kids & Teens", "Préparation TOEIC / TOEFL / IELTS / TFI", "Anglais professionnel / Entreprises"],
} as const;

export const footer = {
  tagline: "Algerian Learning Centers — l'anglais avec confiance, depuis 1995.",
  columns: [
    { title: "Formations", links: [{ label: "Anglais général", href: "#formations" }, { label: "Kids & Teens", href: "#jeunes" }, { label: "Examens", href: "#examens" }, { label: "Entreprises", href: "#entreprises" }] },
    { title: "L'école", links: [{ label: "Pourquoi ALC", href: "#pourquoi" }, { label: "Galerie", href: "#galerie" }, { label: "Avis", href: "#avis" }, { label: "Contact", href: "#contact" }] },
  ],
} as const;

export const seo = {
  title: "ALC — Algerian Learning Centers | Cours d'anglais à Alger depuis 1995",
  description:
    "ALC à Bir Mourad Raïs, Alger : cours d'anglais adultes, enfants & ados, préparation TOEIC, TOEFL, IELTS, TFI et formation entreprises. Test de niveau gratuit.",
  keywords: ["cours anglais Alger", "école anglais Alger", "ALC Alger", "TOEIC Alger", "TOEFL Alger", "IELTS Alger", "anglais enfants Alger", "formation entreprise anglais Alger", "Bir Mourad Raïs"],
} as const;
