import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, MapPin, Star, ArrowRight, Heart, Instagram, Phone } from "lucide-react";
import delieLogoImg from "@/assets/delie-logo.png";
import posePerruqueImg from "@/assets/pose-perruque.jpg";
import fulaniBraidsImg from "@/assets/fulani-braids.jpg";
import wigCustomImg from "@/assets/wig-custom.jpg";
import aboutDelieImg from "@/assets/about-delie.jpg";
import flowerImg from "@/assets/flower.png";
const BOOKING_URL = "https://book.sobeauty.business/deliebeauty";
const INSTAGRAM_URL = "https://www.instagram.com/delie_beauty";
const TIKTOK_URL = "https://www.tiktok.com/@delie_beauty";

type Lang = "fr" | "en";

const translations = {
  fr: {
    nav: { services: "Services", about: "À propos", testimonials: "Témoignages", contact: "Contact", book: "Réserver" },
    hero: {
      title1: "Un mélange",
      title2: "de beauté",
      title3: "et d'élégance.",
      desc: "Ketsia Bitoumbou — spécialiste pose de perruques, fulani braids et jayda wayda à Roubaix. Patience, bienveillance, passion à chaque prestation.",
      bookNow: "Réserver maintenant",
      discover: "Découvrir",
      happy: "Clientes ravies",
      location: "Roubaix, 59100",
    },
    marquee: ["Pose Perruque", "Fulani Braids", "Jayda Wayda", "Customisation", "Pose Nigérienne", "Coiffure Afro"],
    services: {
      tag: "— Services",
      title1: "Des prestations",
      title2: "soignées",
      title3: "pour chaque cliente.",
      seeAll: "Voir tous les services & tarifs",
      items: [
        { title: "Pose Perruque", desc: "Pose sans styliste, avec lissage ou avec boucles. Résultat naturel, soigné et adapté à votre style.", price: "à partir de 25€" },
        { title: "Fulani Braids", desc: "Fulani braids larges, medium ou small. Nattes tendance, légères et polyvalentes — durée 4h à 6h.", price: "à partir de 50€" },
        { title: "Customisation Perruque", desc: "Customisation, rattrapage, lavage. Redonnez vie à votre perruque avec une finition parfaite.", price: "à partir de 20€" },
      ],
    },
    about: {
      tag: "— À propos",
      title1: "Je m'appelle",
      title2: "Ketsia",
      title3: ".",
      desc: "Patience, bienveillance, passion — ce sont les valeurs qui guident chaque prestation. Depuis 3 ans, je me consacre à l'art de la pose de perruques et de la coiffure afro avec une attention particulière portée au détail et au confort de chaque cliente. Mon objectif : que vous vous sentiez belle et en confiance.",
      sign: "Je vous attends — KETSIA",
      cta: "Prendre rendez-vous",
      experience: "ans de passion",
    },
    testimonials: {
      tag: "— Témoignages",
      title1: "Ce que",
      title2: "disent",
      title3: "mes clientes.",
      seeAll: "Voir tous mes avis clients",
      items: [
        { name: "Inès M.", text: "La pose de perruque était impeccable. Un résultat naturel et soigné, Ketsia est vraiment douée et à l'écoute.", service: "Pose Perruque" },
        { name: "Raïssa K.", text: "Mes fulani braids sont magnifiques. Précise, patiente et bienveillante — une vraie expérience premium.", service: "Fulani Braids" },
        { name: "Nadège B.", text: "La customisation de ma perruque est parfaite. Je ne pouvais pas espérer un meilleur résultat.", service: "Customisation" },
      ],
    },
    cta: {
      title1: "Prête à",
      title2: "rayonner",
      title3: "?",
      desc: "Réservez votre rendez-vous en quelques secondes. Un acompte est requis pour confirmer votre créneau.",
      bookNow: "Réserver maintenant",
    },
    footer: {
      tagline: "Pose perruque • Fulani braids • Jayda wayda • Customisation à Roubaix. Un mélange de beauté et élégance.",
      contact: "Contact",
      follow: "Suivez-moi",
      rights: "Tous droits réservés.",
      madeWith: "Made with",
      by: "by",
    },
  },
  en: {
    nav: { services: "Services", about: "About", testimonials: "Testimonials", contact: "Contact", book: "Book" },
    hero: {
      title1: "A blend of",
      title2: "beauty",
      title3: "and elegance.",
      desc: "Ketsia Bitoumbou — wig install, fulani braids and jayda wayda specialist in Roubaix. Patience, care, passion in every appointment.",
      bookNow: "Book now",
      discover: "Discover",
      happy: "Happy clients",
      location: "Roubaix, 59100",
    },
    marquee: ["Wig Install", "Fulani Braids", "Jayda Wayda", "Customisation", "Nigerian Style", "Afro Hair"],
    services: {
      tag: "— Services",
      title1: "Tailored",
      title2: "services",
      title3: "for every client.",
      seeAll: "See all services & pricing",
      items: [
        { title: "Wig Install", desc: "Wig install without stylist, with straightening or with curls. Natural, neat finish tailored to your style.", price: "from €25" },
        { title: "Fulani Braids", desc: "Fulani braids in large, medium or small. Trendy, lightweight and versatile — 4h to 6h session.", price: "from €50" },
        { title: "Wig Customisation", desc: "Customisation, touch-up and washing. Revive your wig with a flawless finish.", price: "from €20" },
      ],
    },
    about: {
      tag: "— About",
      title1: "My name is",
      title2: "Ketsia",
      title3: ".",
      desc: "Patience, kindness, passion — these are the values behind every appointment. For 3 years, I have dedicated myself to the art of wig install and afro hairstyling with particular care for detail and the comfort of each client. My goal: that you feel beautiful and confident.",
      sign: "I'm waiting for you — KETSIA",
      cta: "Book an appointment",
      experience: "years of passion",
    },
    testimonials: {
      tag: "— Testimonials",
      title1: "What my",
      title2: "clients",
      title3: "say.",
      seeAll: "See all my client reviews",
      items: [
        { name: "Inès M.", text: "The wig install was impeccable. Natural and neat result, Ketsia is truly talented and attentive.", service: "Wig Install" },
        { name: "Raïssa K.", text: "My fulani braids are stunning. Precise, patient and caring — a truly premium experience.", service: "Fulani Braids" },
        { name: "Nadège B.", text: "The wig customisation is perfect. I couldn't have hoped for a better result.", service: "Customisation" },
      ],
    },
    cta: {
      title1: "Ready to",
      title2: "shine",
      title3: "?",
      desc: "Book your appointment in seconds. A deposit is required to confirm your slot.",
      bookNow: "Book now",
    },
    footer: {
      tagline: "Wig install • Fulani braids • Jayda wayda • Customisation in Roubaix. A blend of beauty and elegance.",
      contact: "Contact",
      follow: "Follow me",
      rights: "All rights reserved.",
      madeWith: "Made with",
      by: "by",
    },
  },
} as const;

export const Route = createFileRoute("/")({
  component: Index,
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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img
              src={delieLogoImg}
              alt="Delie Beauty"
              className={`transition-all duration-500 ${scrolled ? "h-10" : "h-14"} w-auto`}
              style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
            />
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#services" className={`transition-colors hover:text-accent ${scrolled ? "" : "text-cream"}`}>{t.nav.services}</a>
            <a href="#about" className={`transition-colors hover:text-accent ${scrolled ? "" : "text-cream"}`}>{t.nav.about}</a>
            <a href="#testimonials" className={`transition-colors hover:text-accent ${scrolled ? "" : "text-cream"}`}>{t.nav.testimonials}</a>
            <a href="#contact" className={`transition-colors hover:text-accent ${scrolled ? "" : "text-cream"}`}>{t.nav.contact}</a>
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
                  aria-label={l === "fr" ? "Français" : "English"}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href={BOOKING_URL}
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
          <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full animate-shimmer" style={{ background: "radial-gradient(circle, oklch(0.71 0.12 75 / 0.25), transparent 70%)" }} />
          <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full animate-shimmer delay-300" style={{ background: "radial-gradient(circle, oklch(0.86 0.08 75 / 0.15), transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, oklch(0.96 0.022 75) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          <div className="space-y-8">
            <h1 className="animate-float-up delay-100 font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] font-light" style={{ color: "var(--cream)" }}>
              {t.hero.title1} <br />
              <span className="italic text-gradient-copper">{t.hero.title2}</span>
              <br /> {t.hero.title3}
            </h1>
            <p className="animate-float-up delay-200 max-w-md text-lg leading-relaxed" style={{ color: "oklch(0.96 0.022 75 / 0.75)" }}>
              {t.hero.desc}
            </p>
            <div className="animate-float-up delay-300 flex flex-wrap items-center gap-4 pt-2">
              <a
                href={BOOKING_URL}
                className="group inline-flex items-center gap-3 rounded-full bg-copper px-8 py-4 text-base font-medium text-accent-foreground shadow-glow hover:scale-[1.03] transition-all duration-500"
              >
                {t.hero.bookNow}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="text-sm uppercase tracking-[0.2em] border-b border-cream/40 pb-1 hover:border-copper transition-colors" style={{ color: "var(--cream)" }}>
                {t.hero.discover}
              </a>
            </div>
            <div className="animate-float-up delay-500 flex items-center gap-6 pt-6 text-sm" style={{ color: "oklch(0.96 0.022 75 / 0.6)" }}>
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
            <div className="absolute -inset-6 rounded-[2rem] bg-copper opacity-20 blur-3xl animate-shimmer" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant border border-cream/10">
              <img
                src={aboutDelieImg}
                alt="Delie Beauty — pose de perruques et coiffure afro"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.10 0.015 45 / 0.5), transparent 50%)" }} />
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="relative border-t border-cream/10 py-6 overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap font-display text-3xl italic" style={{ color: "oklch(0.96 0.022 75 / 0.4)" }}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 shrink-0">
                {t.marquee.flatMap((item, j) => [
                  <span key={`i${j}`}>{item}</span>,
                  <span key={`d${j}`}>•</span>,
                ])}
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
            {([posePerruqueImg, fulaniBraidsImg, wigCustomImg] as const).map((img, i) => {
              const item = t.services.items[i];
              return (
                <article key={item.title} className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-accent transition-all duration-500 hover:-translate-y-2 shadow-elegant">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={img} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 p-7 flex flex-col justify-end text-cream">
                    <h3 className="font-display text-2xl mb-2">{item.title}</h3>
                    <p className="text-sm opacity-80 mb-3">{item.desc}</p>
                    <div className="text-xs uppercase tracking-wider" style={{ color: "var(--copper-glow)" }}>{item.price}</div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={BOOKING_URL}
              className="group inline-flex items-center gap-3 rounded-full bg-espresso px-8 py-4 text-cream text-sm font-medium hover:bg-copper transition-colors duration-500"
            >
              {t.services.seeAll}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6 bg-muted/40">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={aboutDelieImg}
                alt="Ketsia Bitoumbou — Delie Beauty"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 rounded-3xl p-8 max-w-[260px] shadow-elegant" style={{ background: "var(--espresso)" }}>
              <div className="font-display text-5xl text-gradient-copper">3+</div>
              <div className="text-sm uppercase tracking-[0.2em] mt-2" style={{ color: "oklch(0.96 0.022 75 / 0.7)" }}>{t.about.experience}</div>
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
            <p className="font-[Dancing_Script] text-3xl pt-4" style={{ color: "var(--accent)" }}>
              {t.about.sign}
            </p>
            <a
              href={BOOKING_URL}
              className="group inline-flex items-center gap-3 rounded-full bg-espresso px-7 py-3.5 text-cream text-sm font-medium hover:bg-copper transition-colors duration-500"
              style={{ color: "var(--cream)" }}
            >
              {t.about.cta}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">{t.testimonials.tag}</div>
            <h2 className="font-display text-5xl md:text-6xl font-light">
              {t.testimonials.title1} <em className="text-gradient-copper not-italic font-normal">{t.testimonials.title2}</em> {t.testimonials.title3}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.items.map((tst) => (
              <figure key={tst.name} className="rounded-3xl bg-card border border-border p-8 shadow-elegant hover:shadow-glow transition-shadow duration-500">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current text-accent" />)}
                </div>
                <blockquote className="text-lg leading-relaxed mb-6 font-display italic">"{tst.text}"</blockquote>
                <figcaption className="flex items-center justify-between text-sm">
                  <span className="font-medium">{tst.name}</span>
                  <span className="text-muted-foreground uppercase tracking-wider text-xs">{tst.service}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-espresso px-8 py-4 text-cream text-sm font-medium hover:bg-copper transition-colors duration-500"
            >
              {t.testimonials.seeAll}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-32 px-6 bg-hero text-cream overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full animate-shimmer" style={{ background: "radial-gradient(circle, oklch(0.71 0.12 75 / 0.18), transparent 60%)" }} />
        </div>
        <div className="relative mx-auto max-w-4xl text-center space-y-8">
          <img src={flowerImg} alt="" className="h-12 w-12 mx-auto animate-[spin_8s_linear_infinite]" />
          <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05]" style={{ color: "var(--cream)" }}>
            {t.cta.title1} <em className="text-gradient-copper not-italic font-normal">{t.cta.title2}</em> {t.cta.title3}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.96 0.022 75 / 0.75)" }}>
            {t.cta.desc}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <a
              href={BOOKING_URL}
              className="group inline-flex items-center gap-3 rounded-full bg-copper px-10 py-5 text-base font-medium text-accent-foreground shadow-glow hover:scale-105 transition-transform duration-500"
            >
              {t.cta.bookNow}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6" style={{ background: "var(--espresso)" }}>
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-10 items-start">
          <div>
            <img
              src={delieLogoImg}
              alt="Delie Beauty"
              className="h-16 w-auto mb-4"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-sm max-w-xs" style={{ color: "oklch(0.96 0.022 75 / 0.6)" }}>
              {t.footer.tagline}
            </p>
          </div>
          <div className="space-y-3 text-sm" style={{ color: "oklch(0.96 0.022 75 / 0.8)" }}>
            <h4 className="font-display text-xl mb-3" style={{ color: "var(--cream)" }}>{t.footer.contact}</h4>
            <a href="tel:+33623287035" className="flex items-center gap-3 hover:text-copper transition-colors">
              <Phone className="h-4 w-4 shrink-0" /><span>+33 6 23 28 70 35</span>
            </a>
            <a href="mailto:delibitoumbou@gmail.com" className="flex items-center gap-3 hover:text-copper transition-colors">
              <Mail className="h-4 w-4 shrink-0" /><span>delibitoumbou@gmail.com</span>
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0" /><span>Lotissement Galon d'Eau, Roubaix 59100</span>
            </div>
          </div>
          <div className="space-y-3 text-sm" style={{ color: "oklch(0.96 0.022 75 / 0.8)" }}>
            <h4 className="font-display text-xl mb-3" style={{ color: "var(--cream)" }}>{t.footer.follow}</h4>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-copper transition-colors">
              <Instagram className="h-4 w-4" /><span>@delie_beauty</span>
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-copper transition-colors">
              <span className="h-4 w-4 text-xs font-bold flex items-center justify-center">TT</span><span>@delie_beauty</span>
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-cream/10 text-xs flex flex-wrap justify-between gap-3" style={{ color: "oklch(0.96 0.022 75 / 0.5)" }}>
          <span>© {new Date().getFullYear()} Delie Beauty. {t.footer.rights}</span>
          <span className="inline-flex items-center gap-1.5">
            {t.footer.madeWith} <Heart className="h-3 w-3 fill-current text-copper" /> {t.footer.by}{" "}
            <a href="https://sobeauty.business" target="_blank" rel="noopener noreferrer" className="hover:text-copper transition-colors underline-offset-2 hover:underline">
              SoBeauty Business
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
