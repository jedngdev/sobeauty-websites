import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Star, ArrowRight, Heart, Instagram, Phone, Truck, ShieldCheck, Award, HeadphonesIcon, ChevronRight } from "lucide-react";
import kjhLogoImg from "@/assets/kjh-logo.png";
import aboutImg from "@/assets/about-kjh.png";
import colCheveux from "@/assets/col-cheveux.jpg";
import colLace from "@/assets/col-lace.jpg";
import colBeaute from "@/assets/col-beaute.jpg";
import colAccessoires from "@/assets/col-accessoires.jpg";
import heroImg from "@/assets/hero.jpg";
import flowerImg from "@/assets/flower.png";

const INSTAGRAM_URL = "https://www.instagram.com/kjhbeauty_off";
const TIKTOK_URL = "https://www.tiktok.com/@kjhbeauty";
const FACEBOOK_URL = "https://www.facebook.com/Kayloujadehair";

type Lang = "fr" | "en";

const translations = {
  fr: {
    nav: {
      cheveux: "Cheveux",
      lace: "Lace & Wig",
      beaute: "Beauté",
      accessoires: "Accessoires",
      kits: "Kits",
      about: "À propos",
    },
    announcement: "LIVRAISON RAPIDE  •  PAIEMENT SÉCURISÉ  •  PRODUITS DE QUALITÉ PROFESSIONNELLE",
    hero: {
      tagline: "LA RÉFÉRENCE BEAUTÉ POUR CHEVEUX TEXTURÉS",
      title1: "VOTRE BEAUTÉ.",
      title2: "VOTRE SIGNATURE.",
      desc: "Des produits experts pour cheveux texturés, lace wigs et beauté féminine.",
      cta: "DÉCOUVRIR LA COLLECTION",
      ctaSub: "Explorer",
    },
    trust: [
      { label: "Livraison Rapide", sub: "Partout en France" },
      { label: "Paiement Sécurisé", sub: "100% sécurisé" },
      { label: "Produits Premium", sub: "Qualité professionnelle" },
      { label: "Satisfaction Client", sub: "Service client réactif" },
    ],
    collections: {
      title: "NOS COLLECTIONS",
      items: [
        { label: "CHEVEUX", sub: "Coiffage & Soin", img: colCheveux },
        { label: "LACE & WIG", sub: "Pose & Entretien", img: colLace },
        { label: "BEAUTÉ", sub: "Sourcils, Cils & Maquillage", img: colBeaute },
        { label: "ACCESSOIRES", sub: "Outils & Accessoires", img: colAccessoires },
      ],
      cta: "VOIR",
    },
    bestsellers: {
      title: "NOS BEST-SELLERS",
      items: [
        { name: "Edge Control", category: "Cheveux", price: "14,90€", stars: 5 },
        { name: "Lace Tint Spray", category: "Lace & Wig", price: "16,90€", stars: 5 },
        { name: "Lace Glue", category: "Lace & Wig", price: "15,90€", stars: 5 },
        { name: "Curly Cream", category: "Cheveux", price: "18,90€", stars: 4 },
        { name: "Hair Mousse", category: "Cheveux", price: "16,90€", stars: 5 },
        { name: "Stick Wax", category: "Cheveux", price: "13,90€", stars: 4 },
      ],
      cta: "Découvrir",
    },
    why: {
      title: "POURQUOI CHOISIR KJH BEAUTY ?",
      items: [
        "Formules de qualité professionnelle",
        "Conçus pour toutes les textures",
        "Résultats visibles et durables",
        "Adopté par des milliers de clientes",
      ],
    },
    about: {
      tag: "— Notre Histoire",
      title1: "KJH Beauty,",
      title2: "votre beauté.",
      desc: "Ambitieuse, exigeante, investie — Marlange a créé KJH Beauty avec une conviction profonde : la beauté va bien au-delà de l'apparence. Elle peut redonner confiance et permettre à chaque femme d'exprimer qui elle est vraiment.",
      quote: "« Mon déclic a été de comprendre que la beauté va bien au-delà de l'apparence : elle peut redonner confiance et permettre à chaque femme d'exprimer qui elle est. C'est cette conviction qui m'a poussée à créer KJH Beauty. »",
      sign: "Je vous attends — Marlange",
      experience: "ans d'expérience",
      cta: "Découvrir la collection",
    },
    marquee: ["Edge Control", "Lace Tint Spray", "Lace Glue", "Curly Cream", "Hair Mousse", "Stick Wax", "Lace & Wig", "Cheveux Texturés", "Beauté Féminine"],
    footer: {
      tagline: "Produits experts pour cheveux texturés, lace wigs et beauté féminine. Votre beauté, votre signature.",
      contact: "Contact",
      follow: "Suivez-nous",
      collections: "Collections",
      rights: "Tous droits réservés.",
      madeWith: "Made with",
      by: "by",
    },
  },
  en: {
    nav: {
      cheveux: "Hair",
      lace: "Lace & Wig",
      beaute: "Beauty",
      accessoires: "Accessories",
      kits: "Kits",
      about: "About",
    },
    announcement: "FAST DELIVERY  •  SECURE PAYMENT  •  PROFESSIONAL QUALITY PRODUCTS",
    hero: {
      tagline: "THE BEAUTY REFERENCE FOR TEXTURED HAIR",
      title1: "YOUR BEAUTY.",
      title2: "YOUR SIGNATURE.",
      desc: "Expert products for textured hair, lace wigs and feminine beauty.",
      cta: "DISCOVER THE COLLECTION",
      ctaSub: "Explore",
    },
    trust: [
      { label: "Fast Delivery", sub: "All over France" },
      { label: "Secure Payment", sub: "100% secure" },
      { label: "Premium Products", sub: "Professional quality" },
      { label: "Customer Support", sub: "Reactive support" },
    ],
    collections: {
      title: "OUR COLLECTIONS",
      items: [
        { label: "HAIR", sub: "Styling & Care", img: colCheveux },
        { label: "LACE & WIG", sub: "Install & Maintenance", img: colLace },
        { label: "BEAUTY", sub: "Brows, Lashes & Makeup", img: colBeaute },
        { label: "ACCESSORIES", sub: "Tools & Accessories", img: colAccessoires },
      ],
      cta: "VIEW",
    },
    bestsellers: {
      title: "OUR BEST-SELLERS",
      items: [
        { name: "Edge Control", category: "Hair", price: "€14.90", stars: 5 },
        { name: "Lace Tint Spray", category: "Lace & Wig", price: "€16.90", stars: 5 },
        { name: "Lace Glue", category: "Lace & Wig", price: "€15.90", stars: 5 },
        { name: "Curly Cream", category: "Hair", price: "€18.90", stars: 4 },
        { name: "Hair Mousse", category: "Hair", price: "€16.90", stars: 5 },
        { name: "Stick Wax", category: "Hair", price: "€13.90", stars: 4 },
      ],
      cta: "Discover",
    },
    why: {
      title: "WHY CHOOSE KJH BEAUTY?",
      items: [
        "Professional-grade formulas",
        "Designed for all textures",
        "Visible and lasting results",
        "Trusted by thousands of clients",
      ],
    },
    about: {
      tag: "— Our Story",
      title1: "KJH Beauty,",
      title2: "your beauty.",
      desc: "Ambitious, demanding, committed — Marlange created KJH Beauty with a deep conviction: beauty goes far beyond appearance. It can restore confidence and allow every woman to express who she truly is.",
      quote: "« My turning point was realising that beauty goes far beyond appearance: it can restore confidence and allow every woman to express who she is. That conviction is what pushed me to create KJH Beauty. »",
      sign: "I'm waiting for you — Marlange",
      experience: "years of experience",
      cta: "Discover the collection",
    },
    marquee: ["Edge Control", "Lace Tint Spray", "Lace Glue", "Curly Cream", "Hair Mousse", "Stick Wax", "Lace & Wig", "Textured Hair", "Feminine Beauty"],
    footer: {
      tagline: "Expert products for textured hair, lace wigs and feminine beauty. Your beauty, your signature.",
      contact: "Contact",
      follow: "Follow us",
      collections: "Collections",
      rights: "All rights reserved.",
      madeWith: "Made with",
      by: "by",
    },
  },
} as const;

export const Route = createFileRoute("/")({
  component: Index,
});

const trustIcons = [Truck, ShieldCheck, Award, HeadphonesIcon];

const PINK = "oklch(0.52 0.28 355)";
const PINK_LIGHT = "oklch(0.78 0.16 355)";
const DARK = "oklch(0.10 0.015 20)";
const CARD = "oklch(0.15 0.015 20)";
const DARK2 = "oklch(0.12 0.015 20)";
const DARK3 = "oklch(0.13 0.015 20)";

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang | null)) || null;
    if (stored === "fr" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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

      {/* ANNOUNCEMENT BAR */}
      <div className="py-2.5 px-4 text-center text-xs font-semibold tracking-[0.18em] text-white" style={{ background: PINK }}>
        {t.announcement}
      </div>

      {/* HEADER */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "oklch(0.10 0.015 20 / 0.95)" : DARK,
          borderBottom: `1px solid oklch(0.22 0.012 20)`,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 4px 24px oklch(0.08 0.01 20 / 0.6)" : "none",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center shrink-0">
            <img src={kjhLogoImg} alt="KJH Beauty" className="h-10 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {([t.nav.cheveux, t.nav.lace, t.nav.beaute, t.nav.accessoires, t.nav.kits, t.nav.about] as const).map((item) => (
              <a key={item} href="#collections" className="text-foreground/60 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center text-xs font-medium rounded-full border border-border/60 overflow-hidden">
              {(["fr", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLanguage(l)}
                  className="px-3 py-1.5 uppercase tracking-wider transition-colors"
                  style={lang === l ? { background: PINK, color: "white" } : { color: "oklch(0.65 0.01 60)" }}
                  aria-pressed={lang === l}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href="#collections"
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold tracking-wider text-white transition-all hover:scale-105"
              style={{ background: PINK }}
            >
              SHOP
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: DARK }}>
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover object-center opacity-25" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, oklch(0.08 0.015 20 / 0.96) 0%, oklch(0.10 0.015 20 / 0.75) 55%, oklch(0.10 0.015 20 / 0.35) 100%)" }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full blur-3xl animate-shimmer"
            style={{ background: `radial-gradient(circle, ${PINK}, transparent 70%)`, opacity: 0.12 }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 w-full">
          <div className="max-w-2xl space-y-6">
            <p className="animate-float-up text-[11px] font-bold tracking-[0.35em] uppercase" style={{ color: PINK }}>
              {t.hero.tagline}
            </p>
            <h1 className="animate-float-up delay-100 font-display font-black text-white leading-[0.95]" style={{ fontSize: "clamp(3.2rem, 9vw, 6.5rem)" }}>
              {t.hero.title1}<br />
              <span style={{ color: PINK }}>{t.hero.title2}</span>
            </h1>
            <p className="animate-float-up delay-200 text-base md:text-lg leading-relaxed max-w-md" style={{ color: "oklch(0.75 0.005 60)" }}>
              {t.hero.desc}
            </p>
            <div className="animate-float-up delay-300 flex flex-wrap gap-4 pt-2">
              <a
                href="#collections"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold tracking-wider text-white hover:scale-105 transition-all duration-300"
                style={{ background: PINK, boxShadow: `0 0 40px ${PINK} / 0.35` }}
              >
                {t.hero.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: "oklch(0.55 0.005 60)", borderBottom: "1px solid oklch(0.35 0.005 60)" }}
              >
                {t.hero.ctaSub}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-8 border-y border-border/30" style={{ background: DARK3 }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.trust.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `oklch(0.52 0.28 355 / 0.12)` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: PINK }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs" style={{ color: "oklch(0.50 0.005 60)" }}>{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-3 overflow-hidden border-b border-border/30" style={{ background: PINK }}>
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-[11px] font-bold tracking-[0.22em] text-white uppercase">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {t.marquee.flatMap((item, j) => [
                <span key={`i${j}`}>{item}</span>,
                <span key={`d${j}`} className="opacity-50">✦</span>,
              ])}
            </div>
          ))}
        </div>
      </div>

      {/* COLLECTIONS */}
      <section id="collections" className="py-20 px-6" style={{ background: DARK }}>
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white text-center mb-12 tracking-[0.15em]">
            {t.collections.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.collections.items.map((col) => (
              <article key={col.label} className="group relative rounded-xl overflow-hidden cursor-pointer" style={{ background: CARD }}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={col.img}
                    alt={col.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <p className="text-xs font-medium tracking-wider mb-1" style={{ color: PINK_LIGHT }}>{col.sub}</p>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{col.label}</h3>
                  <span
                    className="inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-xs font-bold tracking-wider text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    style={{ background: PINK }}
                  >
                    {t.collections.cta} <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEST-SELLERS */}
      <section id="bestsellers" className="py-20 px-6" style={{ background: DARK2 }}>
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white text-center mb-12 tracking-[0.15em]">
            {t.bestsellers.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.bestsellers.items.map((product) => (
              <div
                key={product.name}
                className="group rounded-xl overflow-hidden border border-border/40 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
                style={{ background: CARD }}
              >
                <div className="aspect-square relative overflow-hidden" style={{ background: "oklch(0.18 0.015 20)" }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-3">
                      <div
                        className="w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center"
                        style={{ background: `oklch(0.52 0.28 355 / 0.15)` }}
                      >
                        <span className="text-2xl font-display font-bold" style={{ color: PINK }}>
                          {product.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-[10px] font-bold text-white/80 tracking-wider uppercase leading-tight">{product.name}</p>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="text-[9px] font-bold tracking-wider px-2 py-1 rounded-full text-white" style={{ background: PINK }}>
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3"
                        style={{
                          color: i < product.stars ? PINK : "oklch(0.30 0.01 20)",
                          fill: i < product.stars ? PINK : "transparent",
                        }}
                      />
                    ))}
                  </div>
                  <h4 className="text-xs font-semibold text-white mb-1 leading-tight">{product.name}</h4>
                  <p className="text-sm font-bold mb-2" style={{ color: PINK }}>{product.price}</p>
                  <button
                    type="button"
                    className="w-full text-[10px] font-bold tracking-wider py-1.5 rounded-lg text-white transition-all hover:scale-105"
                    style={{ background: PINK }}
                  >
                    {t.bestsellers.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KJH */}
      <section className="py-14 px-6" style={{ background: PINK }}>
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-xl md:text-2xl font-bold text-white text-center mb-8 tracking-[0.12em]">
            {t.why.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.why.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-white">
                <div className="h-5 w-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center" style={{ background: "oklch(1 0 0 / 0.20)" }}>
                  <span className="text-[10px] font-bold">✓</span>
                </div>
                <p className="text-sm font-medium leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6" style={{ background: DARK }}>
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl animate-shimmer"
              style={{ background: PINK, opacity: 0.10 }}
            />
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant">
              <img src={aboutImg} alt="Marlange — KJH Beauty" loading="lazy" className="h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 rounded-2xl p-6 shadow-elegant"
              style={{ background: PINK }}
            >
              <div className="font-display text-4xl font-black text-white">6+</div>
              <div className="text-xs uppercase tracking-wider text-white/80 mt-1">{t.about.experience}</div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-[11px] uppercase tracking-[0.32em] font-semibold" style={{ color: PINK }}>
              {t.about.tag}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              {t.about.title1}<br />
              <span style={{ color: PINK }}>{t.about.title2}</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "oklch(0.70 0.005 60)" }}>
              {t.about.desc}
            </p>
            <blockquote
              className="pl-5 py-1 italic text-sm leading-relaxed"
              style={{ borderLeft: `2px solid ${PINK}`, color: "oklch(0.65 0.005 60)" }}
            >
              {t.about.quote}
            </blockquote>
            <p className="font-[Dancing_Script] text-2xl pt-2" style={{ color: PINK }}>
              {t.about.sign}
            </p>
            <a
              href="#collections"
              className="inline-flex items-center gap-3 rounded-full px-7 py-3 text-sm font-bold tracking-wider text-white hover:scale-105 transition-all duration-300"
              style={{ background: PINK }}
            >
              {t.about.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* BRAND CTA BANNER */}
      <section className="relative py-20 px-6 overflow-hidden" style={{ background: DARK2 }}>
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-3xl animate-shimmer"
            style={{ background: `radial-gradient(circle, ${PINK}, transparent 65%)`, opacity: 0.12 }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl text-center space-y-6">
          <img src={flowerImg} alt="" className="h-10 w-10 mx-auto animate-[spin_8s_linear_infinite]" />
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
            Votre beauté.<br />
            <span style={{ color: PINK }}>Votre signature.</span>
          </h2>
          <p className="text-base" style={{ color: "oklch(0.55 0.005 60)" }}>
            Des produits pensés pour vous — livrés directement chez vous.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold tracking-wider text-white hover:scale-105 transition-all duration-300"
            style={{ background: PINK }}
          >
            <Instagram className="h-4 w-4" />
            Nous suivre sur Instagram
          </a>
        </div>
      </section>

      {/* SECOND MARQUEE */}
      <div className="py-3 overflow-hidden border-t border-border/30" style={{ background: DARK3 }}>
        <div
          className="flex gap-12 animate-marquee-reverse whitespace-nowrap text-[11px] font-semibold tracking-[0.22em] uppercase"
          style={{ color: "oklch(0.28 0.01 20)" }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {t.marquee.flatMap((item, j) => [
                <span key={`i${j}`}>{item}</span>,
                <span key={`d${j}`} style={{ color: PINK }}>✦</span>,
              ])}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="pt-16 pb-8 px-6" style={{ background: "oklch(0.08 0.01 20)" }}>
        <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10 items-start mb-12">
          <div className="md:col-span-1">
            <img
              src={kjhLogoImg}
              alt="KJH Beauty"
              className="h-12 w-auto mb-4"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.005 60)" }}>
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">{t.footer.collections}</h4>
            <ul className="space-y-2 text-sm" style={{ color: "oklch(0.40 0.005 60)" }}>
              {([t.nav.cheveux, t.nav.lace, t.nav.beaute, t.nav.accessoires, t.nav.kits] as const).map((item) => (
                <li key={item}>
                  <a href="#collections" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm" style={{ color: "oklch(0.40 0.005 60)" }}>
              <li>
                <a href="tel:+33603441474" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 shrink-0" /><span>+33 6 03 44 14 74</span>
                </a>
              </li>
              <li>
                <a href="mailto:kayloujadehair@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 shrink-0" /><span>kayloujadehair@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">{t.footer.follow}</h4>
            <ul className="space-y-3 text-sm" style={{ color: "oklch(0.40 0.005 60)" }}>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Instagram className="h-4 w-4" /><span>@kjhbeauty_off</span>
                </a>
              </li>
              <li>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="h-4 w-4 text-xs font-bold flex items-center">TT</span><span>@kjhbeauty</span>
                </a>
              </li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="h-4 w-4 text-xs font-bold flex items-center">f</span><span>Kayloujadehair</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mx-auto max-w-7xl pt-6 border-t border-border/20 text-xs flex flex-wrap justify-between gap-3"
          style={{ color: "oklch(0.30 0.005 60)" }}
        >
          <span>© {new Date().getFullYear()} KJH Beauty by Kayloujadehair. {t.footer.rights}</span>
          <span className="inline-flex items-center gap-1.5">
            {t.footer.madeWith} <Heart className="h-3 w-3 fill-current" style={{ color: PINK }} /> {t.footer.by}{" "}
            <a
              href="https://sobeauty.business"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              SoBeauty Business
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
