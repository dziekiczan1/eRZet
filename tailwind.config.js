/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          400: "#36415c",
          500: "#2d364c",
          600: "#232a3c",
          700: "#1a1f2c",
          900: "#07080c",
        },
        azure: {
          100: "#0adab9",
        },
        orange: {
          50: "#eda607",
          100: "#feb106",
        },
        pink: {
          100: "#fc128d",
        },
      },
      rotate: {
        210: "210deg",
      },
      backgroundImage: {
        "header-bg": "url('bg-header.png')",
      },
    },
  },
  plugins: [],
};
