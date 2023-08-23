/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      screens: {
        '3xl': '1660px'
      },

      colors: {
        redbg: '#E30A17'
      },
      
      animation: {
        fade: 'fadeOut 1s ease-in',
        scale: 'scale .1s ease-in',
        translateIn: 'translateIn .5s ease-in',
        dropdown: 'dropdown .2s ease-in'
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },

      keyframes: theme => ({
        fadeOut: {
          '0%': {opacity: .0},
          '100%': {opacity: 1},
        },

        scale: {
          '0%': { width: '0%'},
          '100%' : { width: 'fit'},
        },

        translateIn: {
          '0%': { width : 'fit', transform: 'translateY(-100%)'},
          '100%': { width : 'fit', transform: 'translateY(0%)'},
        },

        dropdown: {
          '0%' : { transform: 'translate(-100%, 3rem)'},
          '100%' : { transform: 'translate(0%, 3rem)'},
        }
      })
    },
  },
  plugins: [],
}
