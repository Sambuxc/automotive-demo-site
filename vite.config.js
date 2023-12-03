import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/automotive-vue-js-site", // github pages app location
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // globals
        additionalData: `
          @import "./src/assets/sass/variables";
          @import "./src/assets/sass/mixins";
          @import "./src/assets/sass/buttons";
          @import "./src/assets/sass/utils";
        `,
      },
    },
  },
});
