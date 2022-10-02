/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:'#272727',
      },
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
  
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
