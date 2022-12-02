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
          50: "#097a68",
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
      borderRadius: {
        base: "2rem",
        oneRd: "47% 53% 70% 30% / 30% 43% 57% 70%",
        twoRd: "64% 27% 59% 41% / 57% 59% 41% 43%",
        threeRd: "35% 65% 31% 69% / 57% 59% 41% 43%",
      },
      boxShadow: {
        baseSh:
          "inset 20px 20px 20px rgba(0, 0, 0, 0.05), inset -10px -10px 25px rgba(255, 255, 255, 0.2)",
        oneSh:
          "inset 20px 20px 20px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(0, 0, 0, 0.05), inset -10px -10px 25px rgba(255, 255, 255, 0.2)",
        twoSh:
          "inset 2px 5px 10px rgba(0, 0, 0, 0.1), inset -2px -5px 10px rgba(255, 255, 255, 1), 15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.25)",
        threeSh:
          "inset 2px 5px 10px rgba(0, 0, 0, 0.1), inset -2px -5px 10px rgba(254, 177, 6, 1), 15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.25)",
        fourSh:
          "inset 2px 5px 10px rgba(0, 0, 0, 0.1), inset -2px -5px 10px rgba(10,218,185, 1), 15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.25)",
        fiveSh:
          "inset 2px 5px 10px rgba(0, 0, 0, 0.1), inset -2px -5px 10px rgba(252,18,141, 1), 15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
