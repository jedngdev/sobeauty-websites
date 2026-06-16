import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const LOGO_URL = ""; // TODO: upload éclat coiffure logo PNG to Supabase and paste CDN URL here

const CF_WEB_ANALYTICS_TOKEN = ""; // leave empty — fill only if client requests analytics

const STRUCTURED_DATA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Éclat Coiffure",
  "description": "Coiffeuse afro-antillaise à Pontoise — nattes, box braids, knotless braids, tissage, manucure et pédicure.",
  "url": "https://eclatcoiffure.sobeauty.business",
  "telephone": "+33622508490",
  "email": "tinguemmajolie@yahoo.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "13 avenue de l'Île de France",
    "addressLocality": "Pontoise",
    "postalCode": "95300",
    "addressCountry": "FR",
  },
  "image": LOGO_URL || undefined,
  "logo": LOGO_URL || undefined,
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "knowsLanguage": ["fr", "en", "sv"],
  "sameAs": [
    "https://www.instagram.com/Majoliecamer",
    "https://www.tiktok.com/@Majoliecameroun",
    "https://www.facebook.com/Majolie%20Majolie",
  ],
  "founder": { "@type": "Person", "name": "Audrey Tinguem" },
});

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Cette page n'a pas chargé
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Une erreur s'est produite. Vous pouvez rafraîchir ou revenir à l'accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Éclat Coiffure — Nattes, Box Braids & Beauté à Pontoise" },
      { name: "description", content: "Audrey Tinguem — coiffeuse à Pontoise (95300). Nattes collées, box braids, knotless braids, tissage, manucure et pédicure. 20 ans d'expérience. Réservez maintenant." },
      { name: "author", content: "Éclat Coiffure" },
      { property: "og:title", content: "Éclat Coiffure — Nattes, Box Braids & Beauté à Pontoise" },
      { property: "og:description", content: "Audrey Tinguem — coiffeuse à Pontoise (95300). Nattes, box braids, knotless, tissage, manucure. 20 ans d'expérience." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eclatcoiffure.sobeauty.business" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Éclat Coiffure — Nattes, Box Braids & Beauté à Pontoise" },
      { name: "twitter:description", content: "Audrey Tinguem — coiffeuse à Pontoise. Nattes, box braids, knotless, tissage, manucure & pédicure." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Dancing+Script:wght@500&family=Inter:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: STRUCTURED_DATA }} />
        {CF_WEB_ANALYTICS_TOKEN && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token":"${CF_WEB_ANALYTICS_TOKEN}"}`}
          />
        )}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
