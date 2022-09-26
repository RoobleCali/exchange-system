module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
