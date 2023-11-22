module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        red: { A100: "#ff7979", A200: "#ff5555" },
        blue_gray: { 700: "#415a6b" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { kiranghaerang: "Kirang Haerang", jura: "Jura" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
