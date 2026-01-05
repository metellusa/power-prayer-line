/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        power: {
          navy: "#062A5C",
          blue: "#0B4EA2",
          cyan: "#00B6E6",
          green: "#43B047",
          gray: "#2F343A",
          ink: "#0B1220",
          white: "#FFFFFF",
        },
      },
      boxShadow: {
        soft: "0 14px 40px rgba(2, 6, 23, 0.12)",
        lift: "0 18px 55px rgba(2, 6, 23, 0.18)",
        glow: "0 0 0 1px rgba(148,163,184,0.35), 0 20px 80px rgba(0,182,230,0.12)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(900px circle at 10% 10%, rgba(0,182,230,0.28), transparent 55%), radial-gradient(900px circle at 95% 18%, rgba(67,176,71,0.22), transparent 55%), radial-gradient(900px circle at 40% 110%, rgba(11,78,162,0.20), transparent 60%)",
        "mesh-dark":
          "radial-gradient(800px circle at 15% 15%, rgba(0,182,230,0.22), transparent 55%), radial-gradient(900px circle at 90% 10%, rgba(67,176,71,0.18), transparent 55%), radial-gradient(900px circle at 40% 110%, rgba(11,78,162,0.18), transparent 60%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        floaty: "floaty 8s ease-in-out infinite",
        shimmer: "shimmer 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
