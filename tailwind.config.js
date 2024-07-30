/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-brown": "#CB997E",
        "beige": "#DDBEA9",
        "light-beige": "#FFE8D6",
        "grayish-beige": "#B7B7A4",
        "moss-green": "#A5A58D",
        "olive-green": "#6B705C",
      },
    },
  },
  plugins: [],
};
