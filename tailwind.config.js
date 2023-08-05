/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation:{
        'topToBot':'TopToBot 300ms ease-out',
        'botToTop':'BotToTop 400ms ease-in',

      },
      keyframes:{
        'TopToBot':{
          '0%':{transform:'translateY(-100%)'},
          '100%':{transform:'translateY(0)'},
        },
        'BotToTop':{
          '0%':{transform:'translateY(0)', position:'fixed'},
          '70%':{transform:'translateY(-100%);'},
          '100%':{position:'absolute'}
        },
      },
      colors:{  
        primary:"#001427",
        green:"#708D81",
        red:"#BF0603",
        jasmine:"#F4D58D",
        darkred:"#8D0801",

        
      }
    },
  },
  plugins: [],
}

