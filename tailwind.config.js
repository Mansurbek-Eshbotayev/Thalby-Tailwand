/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1100px',
        '2xl': '1100px',
      },
      colors:{
        heroColor:"#F0EFEB",
        wxplainColor:"#E5E5E5",
        powerColorOne:"#cccccc4d",
        powerColorTwo:"#cccccc99",
        downColor:"#F0F0F0",
        btnBlack:"#000000",
      },
      spacing: {
        100: '27rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
