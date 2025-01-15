import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
import icon from "astro-icon"
import vercel from "@astrojs/vercel"

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [ sitemap(),
    icon()
  ],
  adapter: vercel()
});