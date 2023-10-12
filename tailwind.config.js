/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        mons: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        marquee: {
          '0%': {transform: 'translateZ(0)'},
          '100%': { transform: 'translate3d(-100%,0,0)'}
        },
      },
      animation: {
        'marquee-slower': 'marquee 125s linear infinite',
      },
    },
  },
  plugins: [],
}