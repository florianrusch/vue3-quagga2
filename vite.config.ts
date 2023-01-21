import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import mkcert from "vite-plugin-mkcert";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mkcert({
      savePath: "dev-assets/cert/",
      hosts: ["localhost", "192.168.178.86"],
      autoUpgrade: true,
    }),
    Vue({ style: { filename: "style.css" } })],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  build: {
    lib: {
      // Set the entry point (file that contains our components exported).
      entry: resolve(__dirname, "src/index.ts"),
      // Name of the library.
      name: "vue3-quagga2",
      // We are building for CJS and ESM, use a function to rename automatically files.
      // Example: my-component-library.esm.js
      fileName: (format) => `${"vue3-quagga2"}.${format}.js`,
    },
    rollupOptions: {
      // Vue is provided by the parent project, don't compile Vue source-code inside our library.
      external: ["vue"],
      output: { globals: { vue: "Vue" } },
    },
    sourcemap: true,
  },
});
