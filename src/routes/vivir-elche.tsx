import { createFileRoute } from "@tanstack/react-router";
import VivirElche from "@/pages/VivirElche";

const title = "Vivir en Elche: Barrios y Precios 2025 | Latinos en Elche";
const description =
  "Mejores barrios para vivir en Elche: Centro, Altabix, Carrús. Alquileres desde 400€. Guía completa con precios, servicios y consejos para latinos.";
const url = "https://latinosenelche.es/vivir-elche";

export const Route = createFileRoute("/vivir-elche")({
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
  component: VivirElche,
});
