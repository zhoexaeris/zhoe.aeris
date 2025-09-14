/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-pink": "#FFD4D4",
        "dark-green": "#AACB73",
        "light-green": "#CDE990",
        "beige-white": "#FFFFE8",
        black: "#1E1E1E",
        yellow: "#F2E5A6",
        "dark-yellow": "#EBDFA4",
        "text-yellow": "#AEA05E",
        blue: "#BDFFFB",
        "dark-blue": "#70A29F",
        "text-blue": "#A0E9E4",
        red: "#FFC0C4",
        "dark-red": "#EDACB1",
        "text-red": "#9E6D70",
        "serbiz-purple": "#D265D8",
        "nurselink-teal": "#0D9488",
        "spikezone-red": "#B91C1C",
      },
    },
  },
  plugins: [require("daisyui")],
};
