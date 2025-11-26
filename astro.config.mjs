// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://pawelpiechwork.github.io/intastyl-katowice-pl/",
  base: "/intastyl-katowice-pl/",

  vite: {
    plugins: [tailwindcss()],
  },
});