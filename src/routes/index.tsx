import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

const title = "Guía Completa para Latinos 2025 | Latinos en Elche";
const description =
  "Descubre cómo vivir, trabajar y prosperar en Elche. Información sobre barrios, trámites, empleo y comunidad latina. +2,300 miembros te esperan.";
const url = "https://latinosenelche.es/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: Home,
});
