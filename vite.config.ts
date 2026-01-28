import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client", // Tells Vite your code is in the 'client' folder
  build: {
    outDir: "../dist", // Tells Vite to put the finished site in the main 'dist' folder
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
});