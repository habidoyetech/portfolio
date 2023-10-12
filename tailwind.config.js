/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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