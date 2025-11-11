import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
  css: {ss: {







});  },    },      },        additionalData: `@import "./src/styles/global.scss";`,      scss: {    preprocessorOptions: {    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/global.scss";`,
      },
    },
  },
});