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

const LOGO_URL = "https://mjdrordjjxnysfupzgzv.supabase.co/storage/v1/object/public/client-logos/ZyUrbmb9U1AFSStpmPd6dl/1780688954141.png";

const CF_WEB_ANALYTICS_TOKEN = "";

const STRUCTURED_DATA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Delie Beauty",
  "description": "Pose de perruques, funali braids, jayda wayda et customisation à Roubaix. Un mélange de beauté et élégance.",
  "url": "https://delie-beauty.sobeauty.business",
  "telephone": "+33623287035",
  "email": "delibitoumbou@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lieu dit lotissement galon d'eau",
    "addressLocality": "Roubaix",
    "postalCode": "59100",
    "addressCountry": "FR",
  },
  "image": LOGO_URL,
  "logo": LOGO_URL,
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "knowsLanguage": ["fr"],
  "sameAs": [
    "https://www.instagram.com/delie_beauty",
    "https://www.tiktok.com/@delie_beauty",
  ],
  "founder": { "@type": "Person", "name": "Ketsia Bitoumbou" },
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
      { title: "Delie Beauty — Pose Perruque & Braids à Roubaix" },
      { name: "description", content: "Ketsia Bitoumbou — pose de perruques, funali braids, jayda wayda et customisation à Roubaix (59100). Un mélange de beauté et élégance. Réservez votre rendez-vous." },
      { name: "author", content: "Delie Beauty" },
      { property: "og:title", content: "Delie Beauty — Pose Perruque & Braids à Roubaix" },
      { property: "og:description", content: "Ketsia Bitoumbou — pose perruque, funali braids, jayda wayda, customisation à Roubaix. Un mélange de beauté et élégance." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://delie-beauty.sobeauty.business" },
      { property: "og:image", content: LOGO_URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Delie Beauty — Pose Perruque & Braids à Roubaix" },
      { name: "twitter:description", content: "Pose perruque, funali braids, jayda wayda et customisation à Roubaix." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,700&family=Dancing+Script:wght@500&family=Inter:wght@300;400;500;600&display=swap",
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
