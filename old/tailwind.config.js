/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          // eslint-disable-next-line no-undef
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#f97316',
          secondary: '#f97316'
        }
      }
    ]
  }
}
