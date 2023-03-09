/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "div-bg": "#ffffff0f",
        "hover-div-bg": "#ffffff1f",
      },
      fontFamily: {
        "exo-2": ["'Exo 2'", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
