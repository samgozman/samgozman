/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './assets/**/*.{css,scss,sass}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
    './app.config.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  // Safelisting some classes to avoid content purge
  safelist: ['bg-orange-500'],
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
