module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'playRed' : '#BA253D'
      }
    },
  },
  plugins: [
    require('tailwind-scroll-behavior')(),
    require('tailwind-scrollbar-hide'),
    require('tw-elements/dist/plugin')
  ],
}