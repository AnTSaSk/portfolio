import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import vue from '@astrojs/vue';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  //  Build config
  build: {
    // Relative to "outDir"
    client: './client',
    server: './server',
  },

  // Output config
  output: 'server',
  outdir: '../../dist/website',
  site: 'https://alexis-besson.dev',

  adapter: node({
    mode: 'standalone',
  }),

  // Enable Vue to support Vue components.
  integrations: [astroI18next(), vue()],

  vite: {
    // Env
    envDir: '../../',

    // Styles
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          additionalData: `
          @use 'sass:math';
          @import "./src/assets/scss/index.scss";
        `,
        },
      },
    },
  },
});
