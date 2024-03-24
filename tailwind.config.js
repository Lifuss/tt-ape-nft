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
      colors: {
        dark: "#1e1e1e",
        accent: "#dc3b5a",
      },
      backgroundColor: {
        darkOpacity: "rgba(30, 30, 30, 0.1)",
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  important: true,
  plugins: [],
};
