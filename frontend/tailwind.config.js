/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bisque: '#ffe4c4',
      },
      fontFamily: {
        mickey: ['MickeyMouse'],
        namaku: ['Namaku']
      }
    },
  },
  plugins: [],
}