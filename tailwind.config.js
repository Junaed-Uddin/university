/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        display: ['"Russo One"', '"Josefin Sans"'],
        body: ["Poppins"],
      },
      colors: {
        primary: "#192F59",
        "primary-hover": "#2772e3",
        "on-primary": "#fff",
        secondary: "#4f82e4",
        "secondary-hover": "#f59c4e",
        "on-secondary": "#fff",
        "txt-primary": "#2e2d2d",
        "txt-secondary": "#2e2d2d",
        "txt-disable": "#8a8888",
        background: "#f0f2f5",
        paper: "#ffffff",
        "ol-default": "rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
