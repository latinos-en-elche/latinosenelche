import { createFileRoute } from "@tanstack/react-router";
import Comunidad from "@/pages/Comunidad";

export const Route = createFileRoute("/comunidad")({
  component: Comunidad,
});
