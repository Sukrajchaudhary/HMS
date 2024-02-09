/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#00BCD4",
      white: "#F8F8F8",
      "nav-bg": "#EBEBEB",
      text: "#757575",
      gray:"#848A97",
      red:"red"
    },
    // screens: {
    //   sm: "400px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    // },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
