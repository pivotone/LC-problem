import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/LC-problem/",

  lang: "en-US",
  title: "Leetcode Problems",
  description: "A serires of leetcode problem solutions",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
