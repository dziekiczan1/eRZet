/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          700: "#1a1f2c",
        },
        azure: {
          100: "#0adab9",
        },
        orange: {
          100: "#feb106",
        },
        pink: {
          100: "#fc128d",
        },
      },
      rotate: {
        210: "210deg",
      },
    },
  },
  plugins: [],
};
