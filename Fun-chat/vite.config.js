import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  base: "/nesmeian-JSFE2023Q4/fun-chat/",
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      input: {
        // eslint-disable-next-line no-undef
        index: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});
