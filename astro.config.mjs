import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel';
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [ sitemap()],
  adapter: vercel(),
  output: "server"
});