import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173, // Force using 5173 instead of random port
  },
  build: {
    outDir: "dist",
  },
});
