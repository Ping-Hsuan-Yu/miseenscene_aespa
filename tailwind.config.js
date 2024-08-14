/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NotoSansTc: ["'Noto Sans TC'", "sans-serif"],
      },
    },
    colors: {
      white: "#fff",
      orange: {
        100: "#fff0bb",
        200: "#ffe2b8",
        600: "#ff8106",
      },
      brown: {
        950: "#3c0201",
        800: "#705232",
        300: "#bfa487",
      },
      red: "#e60400",
    },
    fontSize: {
      lg: [
        "1.125rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "500",
        },
      ],
    },
  },
  plugins: [],
};
