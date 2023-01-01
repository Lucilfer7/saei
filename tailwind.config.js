const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      "classic-blue": "#34568B",
      "living-coral": "#FF6F61",
      "ultra-violet": "#6B5B95",
      "greenery": "#88B04B",
      "rose-quartz": "#F7CAC9",
      "serenity": "#92A8D1",
      "violetly": "#333456",
      "purple-dark": "#060930",
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};