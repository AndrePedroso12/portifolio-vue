/** @type {import('tailwindcss').Config} */

const colorsList = require("./src/static/js/colors.ts");
const colors = {};

Object.keys(colorsList.colors).forEach((name) => {
  colors[name] = `var(--${name})`;
});

module.exports = {
  mode: "jit",
  content: ["./src/**/*.vue", "./src/*.vue", "./src/App.vue"],
  theme: {
    colors,
    extend: {},
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {},
};
