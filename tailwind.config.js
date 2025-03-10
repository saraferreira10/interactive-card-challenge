/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      red: "hsl(0, 100%, 66%)",
      white: "hsl(0, 0%, 100%)",
      "light-grayish-violet": "hsl(270, 3%, 87%)",
      "dark-grayish-violet": "hsl(279, 6%, 55%)",
      "very-dark-violet": "hsl(278, 68%, 11%)",
      "from-gradient": "hsl(249, 99%, 64%)",
      "to-gradient": "hsl(278, 94%, 30%)",
    },
    extend: {},
  },
  plugins: [],
};
