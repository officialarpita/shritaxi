import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shritaxi.com',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        quality: 80,
      }
    }
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
    }
  }
});
