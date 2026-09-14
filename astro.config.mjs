// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Canonical origin. Everything downstream (canonical tags, sitemap, RSS)
  // derives from this. www redirects to the apex; see README.
  site: 'https://nikhilshetty.net',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
