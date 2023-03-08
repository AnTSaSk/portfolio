import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import astroI18next from 'astro-i18next';
import vercel from '@astrojs/vercel/serverless';

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
  // outdir: '../../dist/website',
  site: 'https://alexis-besson.dev',

  adapter: vercel(),

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
