import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://app.xettali.tech.axisai",
  output: "static",   // ← critical, must be "static" not "server"
});