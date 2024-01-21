/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        "picture": "70% 30%", 
        "after": "100%",
      },
      screens: {
        "start": "0px",
      },
      backgroundColor: {
        "light": "#fafafa50",
        "lighter": "#fafafa20"
      },
      colors: {
        "main": "#619b26"
      }
    },
  },
  plugins: [],
}

