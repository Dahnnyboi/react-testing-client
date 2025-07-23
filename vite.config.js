import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // CRA's default build output
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      api: path.resolve(__dirname, "src/api"),
      components: path.resolve(__dirname, "src/components"),
      configs: path.resolve(__dirname, "src/configs"),
      contexts: path.resolve(__dirname, "src/contexts"),
      routes: path.resolve(__dirname, "src/routes"),
      stylesheets: path.resolve(__dirname, "src/stylesheets"),
      utils: path.resolve(__dirname, "src/utils"),
      views: path.resolve(__dirname, "src/views"),
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  esbuild: {
    loader: "jsx",
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // 👈 suppress warnings from node_modules
      },
    },
  },
  server: {
    port: 3000,
  },
});
