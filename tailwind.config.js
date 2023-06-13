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
        "wave-item": {
          "0%": { transform: "rotate(0.0deg) " },
          "10%": { transform: "rotate(14deg) " },
          "20%": { transform: "rotate(-8deg) " },
          "30%": { transform: "rotate(14deg) " },
          "40%": { transform: "rotate(-4deg) " },
          "50%": { transform: "rotate(10.0deg) " },
          "60%": { transform: "rotate(0.0deg) " },
          "100%": { transform: "rotate(0.0deg) " },
        },
      },
      animation: {
        "open-menu": "open-menu 0.6s ease-in-out forwards",
        "wave-item": "wave-item 3s linear infinite",
      },
    },
  },
  plugins: [],
};
