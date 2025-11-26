// @ts-check
import { defineConfig } from 'astro/config';

const PROD_SITE = process.env.SITE_URL ?? 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site: 'https://pawelpiechwork.github.io/intastyl-katowice-pl/',
  base: '/intastyl-katowice-pl/',
});