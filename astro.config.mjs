import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  image: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [{ protocol: 'https' }],
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
  adapter: cloudflare({
    mode: 'directory',
    imageService: 'passthrough',
  }),
  output: 'hybrid',
});
