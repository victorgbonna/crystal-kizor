/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      bgpc: { max: "2400px" },
      pc: { max: "1800px" },
      tablet: { max: "900px" },
      phone: { max: "540px" },
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      animation: ["hover", "focus"],
      transform: ["hover"],
    },
  },
  plugins: [],
}