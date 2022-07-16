module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        popins: "'Poppins', 'sans-serif'",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
