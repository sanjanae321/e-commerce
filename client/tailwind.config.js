/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        aubergine: {
          50: "#f4f1f7",
          100: "#e6dfee",
          200: "#cbb9dd",
          300: "#a884bf",
          400: "#7f549b",
          500: "#5c3777",
          600: "#43285c",
          700: "#332047",
          800: "#241734",
          900: "#160e21",
          950: "#0d0815",
        },
        coral: {
          50: "#fff4f0",
          100: "#ffe3d9",
          200: "#ffc2ab",
          300: "#ff9b78",
          400: "#ff7a52",
          500: "#ff5a2e",
          600: "#eb4315",
          700: "#c3330f",
          800: "#9c2a12",
          900: "#7f2712",
        },
        sage: {
          50: "#eefaf4",
          100: "#d5f2e3",
          200: "#ade5c9",
          300: "#78d1aa",
          400: "#43b587",
          500: "#26996e",
          600: "#1a7a59",
          700: "#166049",
          800: "#144c3c",
          900: "#113f33",
        },
        mist: {
          50: "#fbfbfd",
          100: "#f2f2f8",
          200: "#e6e6f0",
          300: "#d3d3e3",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(22, 14, 33, 0.08)",
        glass: "0 8px 32px rgba(22, 14, 33, 0.12)",
        glow: "0 0 0 1px rgba(255,255,255,0.4), 0 8px 30px rgba(22,14,33,0.12)",
      },
      backgroundImage: {
        "aurora-gradient": "linear-gradient(135deg, #43285c 0%, #5c3777 45%, #ff5a2e 100%)",
        "hero-gradient": "radial-gradient(120% 120% at 10% 10%, #5c3777 0%, #332047 45%, #160e21 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 1.6s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
