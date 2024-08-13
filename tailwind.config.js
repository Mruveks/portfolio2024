/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abril: ['"Abril Fatface"', "cursive"],
        "dm-sans": ['"DM Sans"', "sans-serif"],
      },

      colors: {
        "soft-brown": "#CB997E",
        beige: "#DDBEA9",
        "light-beige": "#FFE8D6",
        "grayish-beige": "#B7B7A4",
        "moss-green": "#A5A58D",
        "olive-green": "#6B705C",
      },
      screens: {
        // Small: 640px - 767px
        sm: { min: "640px", max: "767px" },

        // Medium: 768px - 1023px
        md: { min: "768px", max: "1023px" },

        // Large: 1024px - 1279px
        lg: { min: "1024px", max: "1279px" },

        // Extra Large: 1280px - 1535px
        xl: { min: "1280px", max: "1535px" },
      },
    },
  },
  plugins: [],
};
