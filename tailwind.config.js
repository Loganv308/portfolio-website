/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      colors: {
        cream: "#FAF7F2",
        sand: "#F0E8D8",
        soft: "#D4B896",
        bark: "#8B6340",
        terra: "#C4622D",
        ember: "#E8874A",
        ink: "#2C1A0E",
        muted: "#7A6555",
        "warm-white": "#FDFAF5",
      },
    },
  },
  plugins: [],
};