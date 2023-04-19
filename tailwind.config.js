/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      mlg: "1130px",
      xl: "1440px",
      "2xl": "1660px",
    },
    colors: {
      black: "#000",
      white: "#fff",
      grey: "#252D39",
      softGrey: "#787c82",
      kindaBlack: "#252733",
      blue: "#005FB0",
      red: "#E31B48",
      
    },
    extend: {},
  },
  plugins: [],
}

