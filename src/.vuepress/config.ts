import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Shplume",
  description: "Shplume 的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
