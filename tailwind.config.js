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
        display: [
          '"Russo One"',
          '"Josefin Sans"',
          ...defaultTheme.fontFamily.display,
        ],
        body: ["Poppins", ...defaultTheme.fontFamily.body],
      },
      colors: {
        primary: "#1B2945",
        "primary-hover": "#2772e3",
        "on-primary": "#fff",
        secondary: "#fc8d2b",
        "secondary-hover": "#f59c4e",
        "on-secondary": "#fff",
        "txt-primary": "#000",
        "txt-secondary": "#1c1c1c",
        background: "#f0f2f5",
        paper: "#ffffff",
        "ol-default": "rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
