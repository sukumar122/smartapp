import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://backend:8000",
    },
    watch: {
      usePolling: true,
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});
