import { themeConfig } from "./src/config/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: themeConfig.colors,
      fontSize: themeConfig.typography.fontSizes,
      spacing: themeConfig.spacing,
      screens: themeConfig.breakpoints,
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
