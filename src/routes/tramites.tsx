import { createFileRoute } from "@tanstack/react-router";
import Tramites from "@/pages/Tramites";

export const Route = createFileRoute("/tramites")({
  component: Tramites,
});
