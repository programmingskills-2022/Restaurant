/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        papayawhip: {
          light: "#fef4e4",
          default: "#ffefd5",
          dark: "#fee5bc",
        },
      },
      fontFamily: {
        vazir: ["Vazir"],
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleX(0)" },
          "80%": { transform: "scaleX(1.2)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.6s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
