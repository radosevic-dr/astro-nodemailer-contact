/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js, md,mdx,svelte,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        sans: ["Lato", "Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],

      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              wordWrap: "break-word",
            },
          },
        },
      }),
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1a202c",

          secondary: "#3b4252",

          accent: "#a78bfa",

          neutral: "#6b7280",

          "base-100": "#171923",

          info: "#3b82f6",

          success: "#10b981",

          warning: "#f59e0b",

          error: "#ef4444",
        },
      },
    ],
    base: true,
    styled: true,
    prefix: "dui-",
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
