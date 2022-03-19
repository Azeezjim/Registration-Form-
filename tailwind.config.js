module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
    require('tailwind-scrollbar-hide')
  ],
}