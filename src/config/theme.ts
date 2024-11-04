export const themeConfig = {
  colors: {
    primary: {
      50: "#f5f3ff",
      100: "#ede9fe",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
  },
  typography: {
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
    },
  },
  spacing: {
    px: "1px",
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    4: "1rem",
    6: "1.5rem",
    8: "2rem",
    12: "3rem",
    16: "4rem",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;
