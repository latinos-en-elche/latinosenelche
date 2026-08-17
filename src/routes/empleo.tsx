import { createFileRoute } from "@tanstack/react-router";
import Empleo from "@/pages/Empleo";

export const Route = createFileRoute("/empleo")({
  component: Empleo,
});
