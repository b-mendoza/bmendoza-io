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
  },
  prefetch: true,
});
