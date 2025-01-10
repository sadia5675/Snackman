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
        grau: '#595959',
        hellgrau: '#c7cdd7',
        graulila: '#2C2738',
        hellesgraulila: '#3B364B',
        lila: '#6E54B5'
      },
      fontFamily: {
        knewave: ['Knewave'],
        bigShoulders: ['Big Shoulders Stencil Text']
      },
      boxShadow: {
        custom: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        custom: '9px',
      },
      borderRadius: {
        custom: '10px',
      },

    },
  },
  plugins: [],
}