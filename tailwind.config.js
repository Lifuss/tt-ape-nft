/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        biro: ["Biro Script Plus", "sans-serif"],
        biroUS: ["Biro Script Plus US", "sans-serif"],
        messina: ["Messina Sans Mono", "sans-serif"],
        right: ["Right Grotesk", "sans-serif"],
      },
      colors: {
        dark: "#1e1e1e",
        accent: "#dc3b5a",
      },
      backgroundColor: {
        darkOpacity: "rgba(30, 30, 30, 0.1)",
      },
      animation: {
        mobile: "marquee 10s linear infinite",
        table: "marquee 20s linear infinite",
        desktop: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      screens: {
        desk: "1440px",
      },
    },
  },
  important: true,
  plugins: [],
};
