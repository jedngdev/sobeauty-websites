import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, MapPin, Star, ArrowRight, Heart, Instagram, Music2, Phone, Facebook } from "lucide-react";
import heroImg from "@/assets/service-locs.jpg";
import aboutImg from "@/assets/service-braids.jpg";
import svcLocsImg from "@/assets/service-locs.jpg";
import svcBraidsImg from "@/assets/service-braids.jpg";
import svcWigImg from "@/assets/service-wig.jpg";
import flowerImg from "@/assets/flower.png";

const LOGO_URL = "https://mjdrordjjxnysfupzgzv.supabase.co/storage/v1/object/public/client-logos/nbqiDYMPqU8LGg5e3CRdPp/1781041519432.png";
const BOOKING_URL = "https://book.sobeauty.business/ingrid-beauty-hair";

type Lang = "fr" | "en";

const translations = {
  fr: {
    nav: { services: "Services", about: "À propos", contact: "Contact", book: "Réserver" },
    hero: {
      title1: "Sublimez",
      title2: "vos locs",
      title3: "à Andilly.",
      desc: "Ingrid Beauty Hair — Spécialiste des locs depuis 15 ans. Chaleureux et moderne, je vous accueille chez moi à Andilly. Une expérience douce, soignée et personnalisée.",
      bookNow: "Réserver maintenant",
      discover: "Découvrir",
      happy: "Clientes ravies",
      location: "Andilly · 95580 Val-d'Oise",
    },
    services: {
      tag: "Services",
      title1: "Des locs",
      title2: "soignées",
      title3: "qui vous ressemblent.",
      seeAll: "Voir tous mes services",
      items: [
        { title: "Locs — Reprise twist", desc: "Reprise des racines en twist + coiffure simple. Du plus court au plus long.", price: "à partir de 60€" },
        { title: "Locs — Reprise crochet", desc: "Reprise des racines au crochet + coiffure simple. Résultat naturel et précis.", price: "à partir de 75€" },
        { title: "Produits capillaires", desc: "Sérum Pousse Pousse, Huile explosive et Shampooing savon noir. Soins de qualité.", price: "à partir de 20€" },
      ],
    },
    about: {
      tag: "À propos",
      title1: "Je m'appelle",
      title2: "Ingrid Delishys-T",
      title3: ".",
      desc: "Je suis passionnée et autodidacte. J'aime sublimer et révéler la beauté de chaque cliente. Depuis 15 ans, je mets mon savoir-faire au service de vos locs avec douceur, précision et passion.",
      bullets: [
        "À votre écoute pour une coiffure qui vous ressemble",
        "Douce avec vos cheveux — je ne serre jamais trop",
        "Perfectionniste — chaque loc est posée avec le plus grand soin",
      ],
      sign: "Je vous attends — Ingrid",
      cta: "Prendre rendez-vous",
      experience: "ans d'expérience",
    },
    testimonials: {
      tag: "Pourquoi me choisir",
      title1: "Chaleureux",
      title2: "et moderne",
      title3: ".",
      items: [
        { label: "Écoute", text: "Je prends le temps d'écouter vos envies et de vous conseiller pour que vous repartiez avec exactement ce que vous souhaitiez." },
        { label: "Douceur", text: "Je travaille avec douceur et respect de votre cheveu. Mes clientes me font confiance depuis des années pour cette attention particulière." },
        { label: "Perfection", text: "Chaque loc est posée avec soin et précision. Je suis perfectionniste car vous méritez un résultat impeccable à chaque fois." },
      ],
    },
    cta: {
      title1: "Prête à",
      title2: "briller",
      title3: "?",
      desc: "Réservez votre rendez-vous en ligne en quelques secondes.",
      bookNow: "Réserver maintenant",
    },
    footer: {
      tagline: "Spécialiste des locs à Andilly (95). Reprise racines twist & crochet, tressage, coloration.",
      contact: "Contact",
      follow: "Suivez-moi",
      policy: "Politique d'annulation",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: { services: "Services", about: "About", contact: "Contact", book: "Book" },
    hero: {
      title1: "Reveal",
      title2: "your locs",
      title3: "in Andilly.",
      desc: "Ingrid Beauty Hair — Locs specialist with 15 years of experience. Warm and modern, I welcome you at my home in Andilly for a gentle, precise and personalised experience.",
      bookNow: "Book now",
      discover: "Discover",
      happy: "Happy clients",
      location: "Andilly · 95580 Val-d'Oise",
    },
    services: {
      tag: "Services",
      title1: "Beautiful locs",
      title2: "made for you",
      title3: ".",
      seeAll: "See all services",
      items: [
        { title: "Locs — Twist retouch", desc: "Root retouch with twist method + simple styling. From shortest to longest.", price: "from €60" },
        { title: "Locs — Crochet retouch", desc: "Root retouch with crochet method + simple styling. Natural and precise.", price: "from €75" },
        { title: "Hair products", desc: "Sérum Pousse Pousse, Explosive Oil and Black Soap Shampoo. Quality care.", price: "from €20" },
      ],
    },
    about: {
      tag: "About",
      title1: "My name is",
      title2: "Ingrid Delishys-T",
      title3: ".",
      desc: "I am self-taught and passionate. I love enhancing and revealing the beauty of every client. For 15 years, I have shared my expertise in locs with gentleness, precision and passion.",
      bullets: [
        "I listen to understand exactly what you want",
        "Gentle with your hair — I never braid too tight",
        "Perfectionist — every loc is placed with the greatest care",
      ],
      sign: "I'm waiting for you — Ingrid",
      cta: "Book an appointment",
      experience: "years of experience",
    },
    testimonials: {
      tag: "Why choose me",
      title1: "Warm",
      title2: "and modern",
      title3: ".",
      items: [
        { label: "Listening", text: "I take the time to listen and advise you so that you leave with exactly what you had in mind." },
        { label: "Gentleness", text: "I work with gentleness and respect for your hair. My clients have trusted me for years for this special care." },
        { label: "Perfection", text: "Every loc is placed with care and precision. I am a perfectionist because you deserve an impeccable result every time." },
      ],
    },
    cta: {
      title1: "Ready to",
      title2: "shine",
      title3: "?",
      desc: "Book your appointment online in seconds.",
      bookNow: "Book now",
    },
    footer: {
      tagline: "Locs specialist in Andilly (95). Twist & crochet root retouch, braiding, colouring.",
      contact: "Contact",
      follow: "Follow me",
      policy: "Cancellation policy",
      rights: "All rights reserved.",
    },
  },
} as const;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ingrid Beauty Hair - Spécialiste Locs à Andilly (95)" },
      { name: "description", content: "Ingrid Delishys-T — Spécialiste des locs à Andilly 95580. Reprise racines twist et crochet, tressage, coloration, barber. 15 ans d'expérience. Réservez en ligne." },
      { property: "og:title", content: "Ingrid Beauty Hair - Spécialiste Locs à Andilly (95)" },
      { property: "og:description", content: "Spécialiste des locs à Andilly. Reprise racines twist et crochet, tressage, coloration. 15 ans d'expérience." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang | null)) || null;
    if (stored === "fr" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setLanguage = (l: Lang) => {
    setLang(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = translations[lang];
  const serviceImgs = [svcLocsImg, svcWigImg, svcBraidsImg];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Ingrid Beauty Hair">
            <img
              src={LOGO_URL}
              alt="Ingrid Beauty Hair"
              className={`transition-all duration-500 ${scrolled ? "h-10" : "h-12"} w-auto object-contain`}
            />
          </Link>
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#services" className={`transition-colors hover:text-accent ${scrolled ? "" : "text-cream"}`}>{t.nav.services}</a>
            <a href="#about" className={`transition-colors hover:text-accent ${scrolled ? "" : "text-cream"}`}>{t.nav.about}</a>
            <Link to="/services" className={`transition-colors hover:text-accent ${scrolled ? "" : "text-cream"}`}>Menu</Link>
            <Link to="/contact" className={`transition-colors hover:text-accent ${scrolled ? "" : "text-cream"}`}>{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <div className={`hidden sm:flex items-center text-xs font-medium rounded-full border ${scrolled ? "border-border" : "border-cream/30"} overflow-hidden`}>
              {(["fr", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLanguage(l)}
                  className={`px-3 py-1.5 uppercase tracking-wider transition-colors ${
                    lang === l
                      ? "bg-copper text-accent-foreground"
                      : scrolled
                      ? "text-foreground/70 hover:text-foreground"
                      : "text-cream/80 hover:text-cream"
                  }`}
                  aria-pressed={lang === l}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-copper px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-glow hover:scale-105 transition-transform duration-300"
            >
              {t.nav.book}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen bg-hero text-cream pt-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full animate-shimmer" style={{ background: "radial-gradient(circle, oklch(0.65 0.18 310 / 0.30), transparent 70%)" }} />
          <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full animate-shimmer delay-300" style={{ background: "radial-gradient(circle, oklch(0.85 0.06 355 / 0.20), transparent 70%)" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          <div className="space-y-8">
            <h1 className="animate-float-up delay-100 font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] font-light" style={{ color: "var(--cream)" }}>
              {t.hero.title1} <br />
              <span className="italic text-gradient-copper">{t.hero.title2}</span>
              <br /> {t.hero.title3}
            </h1>
            <p className="animate-float-up delay-200 max-w-md text-lg leading-relaxed" style={{ color: "oklch(0.96 0.012 60 / 0.80)" }}>
              {t.hero.desc}
            </p>
            <div className="animate-float-up delay-300 flex flex-wrap items-center gap-4 pt-2">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-copper px-8 py-4 text-base font-medium text-accent-foreground shadow-glow hover:scale-[1.03] transition-all duration-500"
              >
                {t.hero.bookNow}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="text-sm uppercase tracking-[0.2em] border-b border-cream/40 pb-1 hover:border-copper transition-colors" style={{ color: "var(--cream)" }}>
                {t.hero.discover}
              </a>
            </div>
            <div className="animate-float-up delay-500 flex items-center gap-6 pt-6 text-sm" style={{ color: "oklch(0.96 0.012 60 / 0.7)" }}>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" style={{ color: "var(--copper-glow)" }} />)}
                <span className="ml-2">{t.hero.happy}</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {t.hero.location}
              </div>
            </div>
          </div>

          <div className="relative animate-float-up delay-200">
            <div className="absolute -inset-6 rounded-[2rem] opacity-30 blur-3xl animate-shimmer" style={{ background: "var(--gradient-copper)" }} />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant border border-cream/10">
              <img src={heroImg} alt="Locs — Ingrid Beauty Hair" className="h-full w-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.18 0.05 310 / 0.5), transparent 50%)" }} />
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="relative border-t border-cream/10 py-6 overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap font-display text-3xl italic" style={{ color: "oklch(0.96 0.012 60 / 0.4)" }}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 shrink-0">
                <span>Locs</span><span>•</span>
                <span>Reprise Racines</span><span>•</span>
                <span>Tressage</span><span>•</span>
                <span>Coloration</span><span>•</span>
                <span>Barber</span><span>•</span>
                <span>Produits Capillaires</span><span>•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">{t.services.tag}</div>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
              {t.services.title1} <em className="text-gradient-copper not-italic font-normal">{t.services.title2}</em> {t.services.title3}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.services.items.map((item, i) => (
              <article key={item.title} className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-accent transition-all duration-500 hover:-translate-y-2 shadow-elegant">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={serviceImgs[i]} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end text-cream">
                  <h3 className="font-display text-3xl mb-2">{item.title}</h3>
                  <p className="text-sm opacity-85 mb-3">{item.desc}</p>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "var(--copper-glow)" }}>{item.price}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 rounded-full bg-espresso px-8 py-4 text-cream text-sm font-medium hover:bg-copper transition-colors duration-500"
            >
              {t.services.seeAll}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6 bg-muted/40">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img src={aboutImg} alt="Ingrid Delishys-T" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 rounded-3xl text-cream p-8 max-w-[260px] shadow-elegant" style={{ background: "var(--espresso)" }}>
              <div className="font-display text-4xl text-gradient-copper">15+</div>
              <div className="text-sm uppercase tracking-[0.2em] mt-2" style={{ color: "oklch(0.96 0.012 60 / 0.7)" }}>{t.about.experience}</div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">{t.about.tag}</div>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
              {t.about.title1} <em className="text-gradient-copper not-italic font-normal">{t.about.title2}</em>{t.about.title3}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.desc}
            </p>
            <ul className="space-y-2 pt-2">
              {t.about.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-base">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="font-[Dancing_Script] text-3xl pt-4" style={{ color: "var(--accent)" }}>
              {t.about.sign}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-espresso px-7 py-3.5 text-cream text-sm font-medium hover:bg-copper transition-colors duration-500"
              style={{ color: "var(--cream)" }}
            >
              {t.about.cta}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">{t.testimonials.tag}</div>
            <h2 className="font-display text-5xl md:text-6xl font-light">
              {t.testimonials.title1} <em className="text-gradient-copper not-italic font-normal">{t.testimonials.title2}</em> {t.testimonials.title3}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.items.map((tst) => (
              <figure key={tst.label} className="rounded-3xl bg-card border border-border p-8 shadow-elegant hover:shadow-glow transition-shadow duration-500">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current text-accent" />)}
                </div>
                <blockquote className="text-lg leading-relaxed mb-6 font-display italic">{tst.text}</blockquote>
                <figcaption className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{tst.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-32 px-6 bg-hero text-cream overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full animate-shimmer" style={{ background: "radial-gradient(circle, oklch(0.65 0.18 310 / 0.25), transparent 60%)" }} />
        </div>
        <div className="relative mx-auto max-w-4xl text-center space-y-8">
          <img src={flowerImg} alt="" className="h-12 w-12 mx-auto animate-[spin_8s_linear_infinite]" />
          <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05]" style={{ color: "var(--cream)" }}>
            {t.cta.title1} <em className="text-gradient-copper not-italic font-normal">{t.cta.title2}</em> {t.cta.title3}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.96 0.012 60 / 0.80)" }}>
            {t.cta.desc}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-copper px-10 py-5 text-base font-medium text-accent-foreground shadow-glow hover:scale-105 transition-transform duration-500"
            >
              {t.cta.bookNow}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/contact" className="text-sm uppercase tracking-[0.2em] border-b border-cream/40 pb-1 hover:border-copper transition-colors" style={{ color: "var(--cream)" }}>
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter t={t} />
    </div>
  );
}

export function SiteFooter({ t }: { t: { footer: { tagline: string; contact: string; follow: string; policy: string; rights: string } } }) {
  return (
    <footer className="text-cream/80 py-16 px-6" style={{ background: "var(--espresso)" }}>
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-10 items-start">
        <div>
          <img src={LOGO_URL} alt="Ingrid Beauty Hair" className="h-16 w-auto mb-4 object-contain" />
          <p className="text-sm max-w-xs" style={{ color: "oklch(0.96 0.012 60 / 0.7)" }}>
            {t.footer.tagline}
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="font-display text-xl mb-3" style={{ color: "var(--cream)" }}>{t.footer.contact}</h4>
          <a href="mailto:ingrid.shillingford123@gmail.com" className="flex items-center gap-3 hover:text-copper transition-colors"><Mail className="h-4 w-4" /><span>ingrid.shillingford123@gmail.com</span></a>
          <a href="tel:+33660872886" className="flex items-center gap-3 hover:text-copper transition-colors"><Phone className="h-4 w-4" /><span>06 60 87 28 86</span></a>
          <div className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5" /><span>16 rue du président Paul Doumer,<br />95580 Andilly</span></div>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="font-display text-xl mb-3" style={{ color: "var(--cream)" }}>{t.footer.follow}</h4>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/Ingridbeautyhair971" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:bg-copper hover:border-transparent transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.tiktok.com/@ingridbeautyhair971" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:bg-copper hover:border-transparent transition-colors">
              <Music2 className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/Ingrid Beauty Hair - Andilly Sarcelles" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:bg-copper hover:border-transparent transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <div className="pt-4 text-xs" style={{ color: "oklch(0.96 0.012 60 / 0.6)" }}>
            <Link to="/contact" className="hover:text-copper transition-colors">{t.footer.policy}</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-cream/10 text-xs flex flex-wrap justify-between gap-3" style={{ color: "oklch(0.96 0.012 60 / 0.5)" }}>
        <span>© {new Date().getFullYear()} Ingrid Beauty Hair. {t.footer.rights}</span>
        <span className="inline-flex items-center gap-1.5">
          Made with <Heart className="h-3 w-3 fill-current text-copper" /> by{" "}
          <a href="https://sobeauty.business" target="_blank" rel="noopener noreferrer" className="hover:text-copper transition-colors underline-offset-2 hover:underline">
            SoBeauty Business
          </a>
        </span>
      </div>
    </footer>
  );
}
