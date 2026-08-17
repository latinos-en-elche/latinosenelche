import { useEffect } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import helmetPkg from "react-helmet-async";
const { HelmetProvider } = helmetPkg;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import NotFound from "@/pages/NotFound";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Latinos en Elche — Guía para vivir y trabajar en Elche" },
      {
        name: "description",
        content:
          "La guía completa para latinos que quieren vivir, trabajar y prosperar en Elche, España",
      },
      { name: "author", content: "Latinos en Elche" },
      // Google Search Console verification
      {
        name: "google-site-verification",
        content: "x54rIcMvFduSAemQdn4Hu3gdsq-v2kRVcWiUfL3tmME",
      },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Latinos en Elche" },
      { property: "og:url", content: "https://latinosenelche.es/" },
      {
        property: "og:description",
        content:
          "La guía completa para latinos que quieren vivir, trabajar y prosperar en Elche, España",
      },
      { property: "og:image", content: "https://latinosenelche.es/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      // Twitter card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://latinosenelche.es/og-image.png" },
      {
        name: "twitter:description",
        content:
          "La guía completa para latinos que quieren vivir, trabajar y prosperar en Elche, España",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Latinos en Elche",
          description:
            "Guía completa para latinos en Elche: información sobre barrios, trámites de extranjería, empleo y comunidad latina",
          url: "https://latinosenelche.es",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://latinosenelche.es/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Latinos en Elche",
          url: "https://latinosenelche.es",
          logo: "https://latinosenelche.es/favicon.png",
          sameAs: ["https://www.facebook.com/groups/167509320309197"],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Community Support",
            availableLanguage: ["Spanish", "English"],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <HeadContent />
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
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Outlet />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  console.error(error);
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-xl font-semibold">Esta página no cargó</h1>
        <p className="text-muted-foreground">
          Algo salió mal. Puedes intentarlo de nuevo o volver al inicio.
        </p>
        <div className="flex gap-2 justify-center flex-wrap">
          <button
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Intentar de nuevo
          </button>
          <a
            className="px-4 py-2 rounded-md border border-border bg-card text-card-foreground"
            href="/"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}
