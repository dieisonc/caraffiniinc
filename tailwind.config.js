/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1f7a5c", 600: "#1f7a5c", 700: "#17624b" }
      }
    },
  },
  plugins: [],
}
