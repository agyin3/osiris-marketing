const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [
        "text-purple-800",
        "text-green-800",
        "text-blue-800",
        "text-pink-800",
        "text-indigo-800",
        "text-yellow-800",
        "md:flex-row-reverse",
        "bg-details-1",
        "bg-details-2",
        "bg-details-3",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "homepage-hero": "url('/homepage-bg.jpg')",
        "details-1": "url('/details-image1.jpg')",
        "details-2": "url('/details-image2.jpg')",
        "details-3": "url('/details-image3.jpg')",
      }),
      colors: {
        blue: colors.blue,
        yellow: {
          light: "#FFD633",
          DEFAULT: "#FFCE00",
          dark: "#E0B400",
        },
        white: "#FCFCFC",
        black: "#120206",
      },
      fontFamily: {
        farro: ["Farro", "serif"],
        roboto: ["Roboto Condensed", "serif"],
      },
      maxHeight: {
        "3/4vh": "75vh",
      },
      minHeight: {
        "1/2vh": "50vh",
      },
      outline: {
        red: "none",
      },
      width: {
        "3/10": "30%",
      },
      inset: {
        85: "85%",
        90: "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
