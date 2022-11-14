/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': {'max': '475px'},
      ...defaultTheme.screens,
    },
    extend: {
      backgroundColor: ['focus'],
      transitionProperty: {
        'left': 'left',
      },
      colors: {
        'dark': '#1B2634',
        'primary' : '#0095CF',
        'primary2' : '#007FA6',
        'primary3' : '#9747FF',
        'light' : '#C2CED5',
        'lightInput' : '#F8F8F8',
        'bgLight' : '#F2F6F8',
        'bgLight2' : '#FFE6E2',
        'multiple' : 'rgba(217, 217, 217, 0.05)',
        'multiple3' : 'rgba(217, 217, 217, 0.15)',
        'loginBg': 'rgba(0, 0, 0, 0.35)',
        'multiple2' : 'linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)',
        'stroke' : 'rgba(255, 255, 255, 0.15)',
        'stroke2' : '#C4C4C4',
        'stroke3' : '#D9D9D9',
        'dark2' : "#1E1E1E",
        'success' : '#009540',
        'red' : '#A51010',
        'checkboxColor' : 'rgba(0, 0, 0, 0.15)',
        'light2' : '#3E404A',
      },
      fontFamily : {
        Inter : ['Inter']
      }
    },
  },
  plugins: [],
}
