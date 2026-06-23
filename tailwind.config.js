/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgCol: "rgb(var(--theme-bg) / <alpha-value>)",
        primary: "rgb(var(--theme-primary) / <alpha-value>)",
        textWhite: "rgb(var(--theme-text) / <alpha-value>)",
        textLight: "rgb(var(--theme-muted) / <alpha-value>)"
      },
      fontSize: {
        xxs: "12px",
        xs: "14px",
        sm: "16px",
        base: "20px",
        md: "24px",
        lg: "32px",
        xl: "48px",
        xxl: "56px"
      },
      padding: {
        sm: "32px",
        md: "20px 108px",
        lg: "40px 128px",
      }
    },
  },
  plugins: [],
}
