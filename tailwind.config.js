/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a68db",
        "primary-hover": "#2772e3",
        "on-primary": "#fff",
        secondary: "#fc8d2b",
        "secondary-hover": "#f59c4e",
        "on-secondary": "#fff",
        "text-primary": "#000",
        "text-secondary": "#1c1c1c",
        "bg-main": "#f0f2f5",
        paper: "#ffffff",
        "ol-default": "rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
