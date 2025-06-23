// vite.config.js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  server: {
    allowedHosts: ["tmzn3p-5173.csb.app"],
  },
  plugins: [tailwindcss()],
});
