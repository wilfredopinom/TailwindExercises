/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     backgroundImage:{
      "fondo1":"url('/src/assets/fondo1.jpg')",
      "fondo2":"url('/src/assets/fondo2.jpg')"
     },
     keyframes:{
      fadeInKey:{
        '0%':{opacity:0},
        '100%': {opacity:1}
      }
     },
     animation:{
      myFadeIn: 'fadeInKey 2s infinite alternate'
     }
    },
  },
  plugins: [],
}
