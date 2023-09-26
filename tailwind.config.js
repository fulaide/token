/** @type {import('tailwindcss').Config} */

const { filterTokensByType } = require("./util.cjs");
// const tokens = require("./token-build/js/variables.json")

// const colors = filterTokensByType('color', tokens)



export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

