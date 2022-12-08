/** @type {import('tailwindcss').Config} */
module.exports = {
  content : [
      "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme : {
    extend : {
      boxShadow : {
        'inputbox' : '0 0.4rem #dfd9d9'
      },
      fontFamily : {
        'sans' : ['rockford']
      }
    },
  },
  plugins : [],
}
