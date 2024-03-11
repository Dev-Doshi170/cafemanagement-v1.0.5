module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        blue_gray: { 400: "#8c8787" },
        gray: {
          50: "#f8f8f8",
          100: "#effcf3",
          200: "#eaeaea",
          300: "#e5e5e5",
          500: "#9c9c9c",
          700: "#625d5d",
          "700_01": "#635d5d",
          "50_01": "#fafafa",
          "500_01": "#adadad",
        },
        blue: { 50: "#edf5ff", A200: "#438ffe" },
        green: { 50: "#e9f9ee", 400: "#4fcb71", 500: "#2bc155" },
        orange: { "300_01": "#f5b546" },
      },
      boxShadow: {
        xs: "0px 1px  30px 0px #438ffe14",
        sm: "1px 0px  50px 0px #d0c8c83f",
        md: "0px 4px  30px 0px #9b989826",
        lg: "0px 0px  100px 0px #7a74743f",
      },
      fontFamily: { roboto: "Roboto", montserrat: "Montserrat", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
