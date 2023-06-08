import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/my-blog/",
  // base: "/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",
  pagePatterns: ['**/[^.~]*.md', '!.vuepress', '!node_modules'],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
