import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://neobrains.dev',
  integrations: [tailwind(), sitemap(), compress()]
});