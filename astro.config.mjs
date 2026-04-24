import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shritaxi.in',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
