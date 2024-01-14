import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import robotsTxt from 'astro-robots-txt';

import vercel from "@astrojs/vercel/serverless";

// code highlight
const prettyCodeOptions = {
  theme: "one-dark-pro",
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
  tokensMap: {}
};

// https://astro.build/config
export default defineConfig({
  site: "https://codewilderness.me",
  integrations: [tailwind(), sitemap(), mdx(), robotsTxt()],
  output: "server",
  adapter: vercel(),
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  },
});