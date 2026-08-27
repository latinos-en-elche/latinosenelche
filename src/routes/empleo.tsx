import { createFileRoute } from "@tanstack/react-router";
import Empleo from "@/pages/Empleo";

const title = "Trabajo en Elche para Extranjeros 2025 | Latinos en Elche";
const description =
  "Ofertas de empleo en Elche: calzado, hostelería, construcción. Requisitos, portales de trabajo y sectores con alta demanda para latinos.";
const url = "https://latinosenelche.es/empleo";

export const Route = createFileRoute("/empleo")({
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
  component: Empleo,
});
