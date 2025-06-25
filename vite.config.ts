// IMPROTS
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-comiper",
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@images": resolve(__dirname, "./src/assets/images"),
      "@fonts": resolve(__dirname, "./src/assets/fonts"),
      "@icons": resolve(__dirname, "./src/assets/icons"),
      "@svg": resolve(__dirname, "./src/assets/svg"),
    },
  },
});
