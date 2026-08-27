import { createFileRoute } from "@tanstack/react-router";
import Comunidad from "@/pages/Comunidad";

const title = "Comunidad Latina en Elche | Latinos en Elche";
const description =
  "Únete a 2,300+ latinos en Elche. Grupos de Facebook y WhatsApp, eventos culturales, asociaciones de apoyo. Conecta, comparte y crece juntos.";
const url = "https://latinosenelche.es/comunidad";

export const Route = createFileRoute("/comunidad")({
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
  component: Comunidad,
});
