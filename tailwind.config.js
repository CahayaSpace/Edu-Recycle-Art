/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","kertas.html","pewarna.html","plastik.html"],
  theme: {
    extend: {},
    backgroundImage: {
      'recycle': "url('/src/asset/fixed.png')",
    },

    fontFamily: {
     Poppins: ['Poppins'],
    },
  },
  plugins: [],
}

