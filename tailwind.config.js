/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation:{
        'topToBot':'TopToBot 100ms ease-out',
        'botToTop':'BotToTop 100ms ease-in',
        'blurry':'Blurry 300ms ease-in-out',
        'infiniteSpin':'InfiniteSpin 6s infinite linear',
        'leftAppear':'LeftAppear 1s ease-out'

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
        'Blurry':{
          '0%':{backdropFilter:'blur(0)'},
          '100%':{backdropFilter:'blur(5px)'}
        },
        'InfiniteSpin':{
          '0%':{transform:'rotate(0deg)'},
          '100%':{transform:'rotate(360deg)'}
        },
        'LeftAppear':{
          '0%':{transform:'translateX(-80%)',opacity:0},
          '100%':{transform:'translateX(0)',opacity:1}
        },
        
        
      },
      colors:{  
        indigo:"#03045E",
        cornflower:"#758BFD",
        periwinkle:"#AEB8FE",
        antiwhite:"#F1F2F6",
        oranges:"#FF8600",
        dark:"#262626",
        cyan:"#61dbfb"

        
      }
    },
  },
  plugins: [],
}

