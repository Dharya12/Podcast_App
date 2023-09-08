import path from 'path';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      component: `${path.resolve(__dirname, "src/component")}`,
      services : `${path.resolve(__dirname,"src/services")}`,
      constant : `${path.resolve(__dirname,"src/constant")}`,
      interfaces : `${path.resolve(__dirname,"src/interfaces")}`,
      pages : `${path.resolve(__dirname , "src/pages")}`
    },
  },
});
