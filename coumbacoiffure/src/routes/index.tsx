import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, MapPin, Star, ArrowRight, Heart, Instagram } from "lucide-react";
import braidsImg from "@/assets/service-braids.jpg";
import locsImg from "@/assets/service-locs.jpg";
import wigImg from "@/assets/service-wig.jpg";
import flowerImg from "@/assets/flower.png";
import aboutImg from "@/assets/diane-portrait.png"; // TODO: replace with coumba_about.jpg once uploaded to Supabase

const LOGO_URL = ""; // TODO: upload CBC logo PNG to Supabase and paste the CDN URL here
const ABOUT_URL = ""; // TODO: upload coumba_about.jpg to Supabase — then replace the aboutImg import above
const BOOKING_URL = "https://book.sobeauty.business/coumbabeaute";
const INSTAGRAM_URL = "https://www.instagram.com/coumba_beaute";

type Lang = "fr" | "en";

const translations = {
  fr: {
    nav: { services: "Services", about: "À propos", testimonials: "Témoignages", contact: "Contact", book: "Réserver" },
    hero: {
      title1: "Sublimez",
      title2: "vos cheveux",
      title3: "à domicile.",
      desc: "Coumba Cissé — coiffeuse afro à Taverny depuis 2014. Tresses, tissage, locks et piqué lâché. Un savoir-faire minutieux, chez vous.",
      bookNow: "Réserver maintenant",
      discover: "Découvrir",
      happy: "Clientes ravies",
      location: "Taverny, 95150",
    },
    marquee: ["Tresses", "Tissage", "Locks", "Piqué Lâché", "Coiffure Afro", "À Domicile"],
    services: {
      tag: "— Services",
      title1: "Un soin",
      title2: "sur-mesure",
      title3: "pour chaque cliente.",
      seeAll: "Voir tous les tarifs & services",
      items: [
        { title: "Tresses & Piqué Lâché", desc: "Box braids, knotless, tresses africaines. Finitions soignées, durabilité maximale.", price: "à partir de 80€" },
        { title: "Locks", desc: "Création de locks, entretien et reprise des racines. Patience et précision.", price: "sur devis" },
        { title: "Tissage", desc: "Pose de tissage cousu ou collé, finition propre et naturelle.", price: "à partir de 80€" },
      ],
      more: "Et bien plus...",
    },
    about: {
      tag: "— À propos",
      title1: "Je m'appelle",
      title2: "Coumba Cissé",
      title3: ".",
      desc: "Passionnée par la beauté capillaire depuis 2014, je sublime les cheveux texturés avec patience et précision. Je me déplace à votre domicile dans le Val-d'Oise pour un moment dédié entièrement à votre beauté.",
      sign: "Je viens chez vous — Coumba",
      cta: "Prendre rendez-vous",
      experience: "ans d'expérience",
    },
    testimonials: {
      tag: "— Témoignages",
      title1: "Ce que",
      title2: "disent",
      title3: "mes clientes.",
      seeAll: "Voir mes réalisations sur Instagram",
      items: [
        { name: "Amara D.", text: "Des tresses impeccables, tenues plus de 8 semaines. Coumba est douce, précise et très à l'écoute.", service: "Tresses Knotless" },
        { name: "Fatoumata K.", text: "J'ai adoré être coiffée à domicile. Résultat naturel et propre, je recommande sans hésiter.", service: "Tissage" },
        { name: "Rokya B.", text: "Mes locks sont magnifiques depuis qu'elle les entretient. Un vrai soin, une vraie passion.", service: "Locks" },
      ],
    },
    cta: {
      title1: "Prête à",
      title2: "vous sublimer",
      title3: "?",
      desc: "Réservez votre rendez-vous à domicile en quelques secondes.",
      bookNow: "Réserver maintenant",
    },
    footer: {
      tagline: "Coiffeuse afro à domicile à Taverny. Tresses, tissage, locks et piqué lâché.",
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
      title1: "Enhance",
      title2: "your hair",
      title3: "at home.",
      desc: "Coumba Cissé — afro hairstylist in Taverny since 2014. Braids, weave, locks and knotless. Expert care, at your doorstep.",
      bookNow: "Book now",
      discover: "Discover",
      happy: "Happy clients",
      location: "Taverny, 95150",
    },
    marquee: ["Braids", "Weave", "Locks", "Knotless", "Afro Hair", "Home Visits"],
    services: {
      tag: "— Services",
      title1: "A",
      title2: "tailored",
      title3: "treatment for every client.",
      seeAll: "See all services & pricing",
      items: [
        { title: "Braids & Knotless", desc: "Box braids, knotless, African braids. Neat finish, long-lasting results.", price: "from €80" },
        { title: "Locks", desc: "Starter locs, retwists and maintenance. Patience and precision.", price: "on quote" },
        { title: "Weave", desc: "Sew-in or glued weave, clean natural finish.", price: "from €80" },
      ],
      more: "And much more...",
    },
    about: {
      tag: "— About",
      title1: "My name is",
      title2: "Coumba Cissé",
      title3: ".",
      desc: "Passionate about hair beauty since 2014, I enhance textured hair with patience and precision. I travel to your home in Val-d'Oise for an appointment dedicated entirely to your beauty.",
      sign: "I come to you — Coumba",
      cta: "Book an appointment",
      experience: "years of expertise",
    },
    testimonials: {
      tag: "— Testimonials",
      title1: "What my",
      title2: "clients",
      title3: "say.",
      seeAll: "See my work on Instagram",
      items: [
        { name: "Amara D.", text: "Flawless braids, held for over 8 weeks. Coumba is gentle, precise and very attentive.", service: "Knotless Braids" },
        { name: "Fatoumata K.", text: "I loved being styled at home. Natural clean result — highly recommend.", service: "Weave" },
        { name: "Rokya B.", text: "My locs have been beautiful since she started taking care of them. True craft, true passion.", service: "Locks" },
      ],
    },
    cta: {
      title1: "Ready to",
      title2: "shine",
      title3: "?",
      desc: "Book your home appointment in a few seconds.",
      bookNow: "Book now",
    },
    footer: {
      tagline: "Afro hairstylist at home in Taverny. Braids, weave, locks and knotless.",
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
            {LOGO_URL ? (
              <img
                src={LOGO_URL}
                alt="Coumba Beauté Coiffure"
                className={`transition-all duration-500 ${scrolled ? "h-8" : "h-10"} w-auto`}
                style={{ filter: scrolled ? "none" : "invert(1) brightness(1.6)" }}
              />
            ) : (
              <span
                className={`font-display font-light transition-all duration-500 ${
                  scrolled ? "text-xl text-foreground" : "text-2xl"
                }`}
                style={{ color: scrolled ? undefined : "var(--cream)" }}
              >
                Coumba Beauté
              </span>
            )}
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
          <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full animate-shimmer" style={{ background: "radial-gradient(circle, oklch(0.71 0.06 68 / 0.3), transparent 70%)" }} />
          <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full animate-shimmer delay-300" style={{ background: "radial-gradient(circle, oklch(0.90 0.03 72 / 0.2), transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, oklch(0.97 0.012 72) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          <div className="space-y-8">
            <h1 className="animate-float-up delay-100 font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] font-light" style={{ color: "var(--cream)" }}>
              {t.hero.title1} <br />
              <span className="italic text-gradient-copper">{t.hero.title2}</span>
              <br /> {t.hero.title3}
            </h1>
            <p className="animate-float-up delay-200 max-w-md text-lg leading-relaxed" style={{ color: "oklch(0.97 0.012 72 / 0.75)" }}>
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
            <div className="animate-float-up delay-500 flex items-center gap-6 pt-6 text-sm" style={{ color: "oklch(0.97 0.012 72 / 0.6)" }}>
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
                src={braidsImg}
                alt="Tresses et coiffure afro par Coumba"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.20 0.03 50 / 0.5), transparent 50%)" }} />
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="relative border-t border-cream/10 py-6 overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap font-display text-3xl italic" style={{ color: "oklch(0.97 0.012 72 / 0.4)" }}>
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
            {([braidsImg, locsImg, wigImg] as const).map((img, i) => {
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
                src={ABOUT_URL || aboutImg}
                alt="Coumba Cissé — coiffeuse afro à domicile"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 rounded-3xl p-8 max-w-[260px] shadow-elegant" style={{ background: "var(--espresso)" }}>
              <div className="font-display text-5xl text-gradient-copper">12+</div>
              <div className="text-sm uppercase tracking-[0.2em] mt-2" style={{ color: "oklch(0.97 0.012 72 / 0.7)" }}>{t.about.experience}</div>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full animate-shimmer" style={{ background: "radial-gradient(circle, oklch(0.71 0.06 68 / 0.2), transparent 60%)" }} />
        </div>
        <div className="relative mx-auto max-w-4xl text-center space-y-8">
          <img src={flowerImg} alt="" className="h-12 w-12 mx-auto animate-[spin_8s_linear_infinite]" />
          <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05]" style={{ color: "var(--cream)" }}>
            {t.cta.title1} <em className="text-gradient-copper not-italic font-normal">{t.cta.title2}</em> {t.cta.title3}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.97 0.012 72 / 0.75)" }}>
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
            {LOGO_URL ? (
              <img src={LOGO_URL} alt="Coumba Beauté Coiffure" className="h-12 w-auto mb-4" style={{ filter: "invert(1) brightness(1.5)" }} />
            ) : (
              <p className="font-display text-2xl font-light mb-4" style={{ color: "var(--cream)" }}>Coumba Beauté</p>
            )}
            <p className="text-sm max-w-xs" style={{ color: "oklch(0.97 0.012 72 / 0.6)" }}>
              {t.footer.tagline}
            </p>
          </div>
          <div className="space-y-3 text-sm" style={{ color: "oklch(0.97 0.012 72 / 0.8)" }}>
            <h4 className="font-display text-xl mb-3" style={{ color: "var(--cream)" }}>{t.footer.contact}</h4>
            <a href="tel:+33751012389" className="flex items-center gap-3 hover:text-copper transition-colors">
              <span>📞</span><span>+33 7 51 01 23 89</span>
            </a>
            <a href="mailto:coumba.cisse0502@gmail.com" className="flex items-center gap-3 hover:text-copper transition-colors">
              <Mail className="h-4 w-4 shrink-0" /><span>coumba.cisse0502@gmail.com</span>
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0" /><span>Taverny, 95150</span>
            </div>
          </div>
          <div className="space-y-3 text-sm" style={{ color: "oklch(0.97 0.012 72 / 0.8)" }}>
            <h4 className="font-display text-xl mb-3" style={{ color: "var(--cream)" }}>{t.footer.follow}</h4>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-copper transition-colors"
            >
              <Instagram className="h-4 w-4" /><span>@coumba_beaute</span>
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-cream/10 text-xs flex flex-wrap justify-between gap-3" style={{ color: "oklch(0.97 0.012 72 / 0.5)" }}>
          <span>© {new Date().getFullYear()} Coumba Beauté Coiffure. {t.footer.rights}</span>
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
