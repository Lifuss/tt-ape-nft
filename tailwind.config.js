/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        biro: ["Biro Script Plus Bold US", "sans-serif"],
        messina: ["Messina Sans Mono", "sans-serif"],
        right: ["Right Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
