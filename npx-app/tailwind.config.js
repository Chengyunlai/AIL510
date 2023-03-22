/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'media',
  darkMode: 'class',
  content: [],
  theme: {
    extend: {},
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
     },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
