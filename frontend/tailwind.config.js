/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        beige: '#f0e8d8',
        hellbeige: '#f1ddb8',
        gold: '#d5ac37',
        grau: '#9aa2ae',
        hellgrau: '#c7cdd7',
        graulila: '#2C2738',
        hellesgraulila: '#3B364B',
        lila: '#6E54B5'
      },
      fontFamily: {
        mickey: ['MickeyMouse'],
        namaku: ['Namaku'],
        knewave: ['Knewave']
      }
    },
  },
  plugins: [],
}