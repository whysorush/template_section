/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C4E91",
        secondary: "#4A8F2F",
        brown: "#7A4E2E",
        neutralgray: "#5A5A5A"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl2: "1rem",
        xl3: "1.5rem"
      }
    },
  },
  plugins: [],
};
