/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        montserrat: ["Montserrat"],
        lato: ["Lato"],
      },
      borderRadius: {
        extraLarge: "7rem",
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
      fontSize: {
        xxs: "0.625rem", // 10px
      },
    },
  },
  plugins: [],
};
