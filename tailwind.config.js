/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      colors: {
        darkGrayish: "#191919",
        Grayish: "#333333",
        darkGreen: "#C4F82A",
      },
    },
  },
  plugins: [],
};

