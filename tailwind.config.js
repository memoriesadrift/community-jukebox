const tailwindcss = require("tailwindcss");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#8FFFFF",
        secondary: "#11FF00",
      },
      boxShadow: {
        primary: "0 0 20px 0px rgba(0, 246, 255, 0.5)",
        secondary: "0 0 20px 0px rgba(17, 255, 0, 0.5)",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: [
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
        "dark",
      ],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
