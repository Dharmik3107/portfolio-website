/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      phone: "250px",
      tablet: "652px",
      laptop: "1064px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
