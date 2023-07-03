/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(223, 87%, 63%)",
        paleBlue: "hsl(223, 100%, 88%)",
        lightRed: "hsl(354, 100%, 66%)",
        gray: "hsl(0, 0%, 59%)",
        darkBlue: "hsl(209, 33%, 12%)",
      },
      fontFamily: {
        franklin: ["'Libre Franklin'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
