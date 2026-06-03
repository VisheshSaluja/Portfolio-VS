/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0c0c0c",
        surface: "#171717",
        accent: "#c9a96e",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Satoshi", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
