/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'shared': '#3C1F62',
        'sharedHover': '#523886',
        'main': '#523886',
        'card': '#D5C9FE',
        'button': '#9579DC',
        'button-hover': '#7958C5'
      }
    },
  },
  plugins: [],
}