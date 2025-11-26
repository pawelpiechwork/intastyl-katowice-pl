// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const site = import.meta.env.DEV
  ? "http://localhost:4321"
  : "https://pawelpiechwork.github.io/intastyl-katowice-pl/";

const base = import.meta.env.DEV ? "/" : "/intastyl-katowice-pl/";

// https://astro.build/config
export default defineConfig({
  site,
  base,

  vite: {
    plugins: [tailwindcss()],
  },
});
