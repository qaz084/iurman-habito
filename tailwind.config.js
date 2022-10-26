/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors:{
        primary:'#272727',
      },
      plugins: [
        plugin(function({ addVariant }) {
          addVariant('not-first', '&:not(:first-child)')
          addVariant('hocus', ['&:hover', '&:focus'])
          addVariant('supports-grid', '@supports (display: grid)')
        })
      ],
      spacing:{
        
      },
      height: {
        '86vh': '86vh',
        '46vh': '46vh',
      },
      gridTemplateColumns: {
        'fit-200': 'repeat(auto-fit,minmax(200px,1fr))',
        'min-max-2': 'min-content max-content',
      },
      keyframes:{

        transitionToCart:{

          '0%':{transform: 'translateX(-100%)'},
          '100%':{transform: 'translateX(100%)'},
        },
      },
      animation:{
        'add-To-Cart':'transitionToCart 1s ease-in-out',
      },
  
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tw-elements/dist/plugin')
  ],
}
