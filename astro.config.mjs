// @ts-check

import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://tpu-kanglabs.github.io",
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 10240,
    },
  },

  integrations: [
    react(),
    partytown(),
    sitemap({ customPages: ["https://tpu-kanglabs.github.io/ub-moji/"] }),
  ],
});
