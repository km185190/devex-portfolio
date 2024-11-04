import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://yourdomain.com",
  integrations: [
    tailwind(),
    mdx({
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
    sitemap(),
    react(),
  ],
  output: "static",
});
