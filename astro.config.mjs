import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  site: 'https://parcelout.kr',
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});
