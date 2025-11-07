/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-econergie': '#FF6B00',
        'orange-dark': '#E55A00',
      },
      backgroundColor: {
        'dark-sidebar': '#1E1E1E',
        'light-bg': '#F8F9FC',
      }
    },
  },
  plugins: [],
}
