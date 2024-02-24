/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdoc,mdx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        body: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        "@font-face": [
          {
            fontFamily: "Manrope",
            fontWeight: 300,
            fontDisplay: "swap",
            fontStyle: "normal",
            src: 'url("/fonts/Manrope-Light.woff2") format("woff2")',
          },
          {
            fontFamily: "Manrope",
            fontWeight: 400,
            fontDisplay: "swap",
            fontStyle: "normal",
            src: 'url("/fonts/Manrope-Regular.woff2") format("woff2")',
          },
          {
            fontFamily: "Manrope",
            fontWeight: 700,
            fontDisplay: "swap",
            fontStyle: "normal",
            src: 'url("/fonts/Manrope-Bold.woff2") format("woff2")',
          },
        ],
      });
    }),
    require("@tailwindcss/typography"),
  ],
};
