import { createFileRoute } from "@tanstack/react-router";
import Tramites from "@/pages/Tramites";

const title = "NIE y Trámites de Extranjería 2025 | Latinos en Elche";
const description =
  "Cómo obtener NIE, arraigo social y reagrupación familiar en Elche. Guía con documentos, plazos y pasos detallados para extranjeros.";
const url = "https://latinosenelche.es/tramites";

export const Route = createFileRoute("/tramites")({
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
  component: Tramites,
});
