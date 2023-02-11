/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'shared': '#3C1F62',
        'main': '#523886'
      }
    },
  },
  plugins: [],
}