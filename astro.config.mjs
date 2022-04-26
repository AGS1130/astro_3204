import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sveltePreprocess from 'svelte-preprocess';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
    tailwind()
  ]
});