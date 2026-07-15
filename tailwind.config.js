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
  safelist: ['bg-orange-500', 'og-preview'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      // Warm-tinted elevation for the signature card lift: a faint orange
      // glow over a neutral depth shadow instead of generic black.
      // The violet variant is the same lift recolored for the Recurred pages.
      boxShadow: {
        lift: '0 12px 24px -10px rgb(249 115 22 / 0.18), 0 6px 12px -6px rgb(31 41 55 / 0.1)',
        'lift-violet':
          '0 12px 24px -10px rgb(100 85 224 / 0.22), 0 6px 12px -6px rgb(31 41 55 / 0.1)'
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
      },
      {
        // Recurred app pages: same light theme, violet accent taken from the
        // app's AccentColor asset (deep violet on light surfaces).
        recurred: {
          // eslint-disable-next-line no-undef
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#6455E0',
          secondary: '#8B7CFF'
        }
      }
    ]
  }
}
