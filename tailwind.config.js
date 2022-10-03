module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  darkMode: "class",

  theme: {
    skeletonScreen: {
      DEFAULT: {
        // .loading
        baseColor: "#c7c7c7",
        movingColor:
          "linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%)",
        duration: "1s",
        timing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
      // specify another color to have multiple loading colors.
      blue: {
        // .loading-blue
        baseColor: "blue",
        movingColor:
          "linear-gradient(to right, transparent 0%, lightblue 50%, transparent 100%)",
        duration: ".3s",
        timing: "ease",
      },
    },

    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        black: "#212b36",
        dark: "#090E34",
        "dark-700": "#090e34b3",
        primary: "#3056D3",
        secondary: "#13C296",
        "body-color": "#637381",
        warning: "#FBBF24",
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 60px 120px -20px #EBEFFD",
      },
      fontFamily: {
        popins: "'Poppins', 'sans-serif'",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@gradin/tailwindcss-skeleton-screen"),
  ],
};
