// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(
    {
      applyBaseStyles: false,
    }
  )],
  site: "https://lab.x7md.net",
  base : "al-naslaa-rock"
});