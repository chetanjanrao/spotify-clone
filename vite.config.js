 // vite.config.js
 import { defineConfig } from "vite";
 
 import tailwindcss from "@tailwindcss/vite";
 
 export default defineConfig({
   plugins: [tailwindcss()],
  
  base: '/spotify-clone/', // very important

  
 });


