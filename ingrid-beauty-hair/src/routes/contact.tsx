import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Mail, MapPin, Phone, Instagram, Music2, Facebook, Clock } from "lucide-react";
import { SiteFooter } from "./index";

const LOGO_URL = "https://mjdrordjjxnysfupzgzv.supabase.co/storage/v1/object/public/client-logos/nbqiDYMPqU8LGg5e3CRdPp/1781041519432.png";
const BOOKING_URL = "https://book.sobeauty.business/ingrid-beauty-hair";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Réservation - Ingrid Beauty Hair" },
      { name: "description", content: "Contactez Ingrid Delishys-T — spécialiste locs à Andilly (95). Téléphone, email, adresse, réseaux sociaux et politique d'annulation." },
      { property: "og:title", content: "Contact & Réservation - Ingrid Beauty Hair" },
      { property: "og:description", content: "Réservez votre rendez-vous ou contactez-moi par téléphone, email ou sur Instagram." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const footerT = {
    footer: {
      tagline: "Spécialiste des locs à Andilly (95). Reprise racines twist & crochet, tressage, coloration.",
      contact: "Contact", follow: "Suivez-moi", policy: "Politique d'annulation",
      rights: "Tous droits réservés.",
    },
  } as any;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader />

      <section className="pt-32 pb-20 px-6 bg-hero text-cream">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--copper-glow)" }}>Contact</div>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05]" style={{ color: "var(--cream)" }}>
            Prenons <em className="text-gradient-copper not-italic font-normal">rendez-vous</em>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.96 0.012 60 / 0.85)" }}>
            Réservez en ligne en quelques secondes ou contactez-moi directement. Je réponds avec plaisir.
          </p>
          <div className="pt-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-copper px-8 py-4 text-base font-medium text-accent-foreground shadow-glow hover:scale-105 transition-transform duration-500"
            >
              Réserver en ligne
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
          <a href="tel:+33660872886" className="group rounded-3xl bg-card border border-border p-8 shadow-elegant hover:border-accent hover:-translate-y-1 transition-all duration-500">
            <Phone className="h-6 w-6 text-accent mb-4" />
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Téléphone</div>
            <div className="font-display text-2xl">06 60 87 28 86</div>
          </a>
          <a href="mailto:ingrid.shillingford123@gmail.com" className="group rounded-3xl bg-card border border-border p-8 shadow-elegant hover:border-accent hover:-translate-y-1 transition-all duration-500">
            <Mail className="h-6 w-6 text-accent mb-4" />
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</div>
            <div className="font-display text-xl break-all">ingrid.shillingford123@gmail.com</div>
          </a>
          <div className="rounded-3xl bg-card border border-border p-8 shadow-elegant md:col-span-2">
            <MapPin className="h-6 w-6 text-accent mb-4" />
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Adresse</div>
            <div className="font-display text-2xl mb-1">16 rue du président Paul Doumer</div>
            <div className="text-muted-foreground">95580 Andilly</div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Je vous accueille à mon domicile. Je ne me déplace pas. Langues parlées : Français, Créole et Anglais (intermédiaire).
            </p>
          </div>
          <div className="rounded-3xl bg-card border border-border p-8 shadow-elegant md:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Suivez-moi</div>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/Ingridbeautyhair971" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted hover:bg-copper hover:text-accent-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@ingridbeautyhair971" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted hover:bg-copper hover:text-accent-foreground transition-colors">
                <Music2 className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/Ingrid Beauty Hair" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted hover:bg-copper hover:text-accent-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Instagram & TikTok : @ingridbeautyhair971 · Facebook : Ingrid Beauty Hair - Andilly Sarcelles
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-muted p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-accent" />
              <h2 className="font-display text-3xl md:text-4xl font-light">
                Politique <em className="text-gradient-copper not-italic font-normal">d'annulation</em>
              </h2>
            </div>
            <ul className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <li className="flex gap-3"><span className="text-accent">📌</span><span>Un acompte de 40% du total de la prestation est obligatoire à la réservation.</span></li>
              <li className="flex gap-3"><span className="text-accent">📌</span><span>Annulation possible jusqu'à 48h avant le rendez-vous avec remboursement de l'acompte.</span></li>
              <li className="flex gap-3"><span className="text-accent">📌</span><span>Annulation à moins de 48h du rendez-vous : l'acompte ne sera pas remboursé.</span></li>
              <li className="flex gap-3"><span className="text-accent">📌</span><span>Merci de prévenir dès que possible en cas d'empêchement afin de libérer le créneau.</span></li>
            </ul>
            <p className="mt-6 italic text-foreground">Merci pour votre compréhension. — Ingrid</p>
          </div>
        </div>
      </section>

      <SiteFooter t={footerT} />
    </div>
  );
}

function PageHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Ingrid Beauty Hair">
          <img src={LOGO_URL} alt="Ingrid Beauty Hair" className="h-10 w-auto object-contain" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-accent transition-colors inline-flex items-center gap-1"><ArrowLeft className="h-4 w-4" /> Accueil</Link>
          <Link to="/services" className="hover:text-accent transition-colors">Menu</Link>
          <Link to="/contact" className="text-accent">Contact</Link>
        </nav>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-copper px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-glow hover:scale-105 transition-transform"
        >
          Réserver
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
