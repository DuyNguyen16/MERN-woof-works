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
      },
      boxShadow: {
        shadowCus: "0 0.2px 5px 0.2px #333333",
        menu: "0 -1px 4px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        navRadius: "1.5rem 1.5rem 0 0",
        picture: "0.375rem 0 0 0.375rem",
        picture2: "0.375rem 0.375rem 0 0"
      },
    },
  },
  plugins: [],
}

