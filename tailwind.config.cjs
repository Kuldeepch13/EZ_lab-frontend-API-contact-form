/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#00E0FF", // Figma-like neon blue
        primary: "#0B0B0B", // background black tone
        secondary: "#111111", // card background contrast
        light: "#E6E6E6", // text gray
        muted: "#A1A1A1", // lighter text for paragraphs
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 224, 255, 0.15)",
        glow: "0 0 12px rgba(0, 224, 255, 0.4)",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #00E0FF 0%, #0066FF 100%)",
      },
    },
  },
  plugins: [],
};
