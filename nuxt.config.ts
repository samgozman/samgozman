// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://gozman.space'
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls']
  },
  devtools: { enabled: true },
  devServer: {
    port: 5555
  },
  modules: ['@nuxt/fonts', 'nuxt-icon', '@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }]
  },
  vue: {
    compilerOptions: {
      // Note: ignore ionicons
      isCustomElement: (tag) => tag.startsWith('ion-')
    }
  },
  fonts: {
    assets: {
      prefix: '/_fonts'
    },
    families: [
      {
        name: 'Poppins',
        provider: 'google',
        weights: ['300', '400', '500', '600', '700', '800', '900', '1300', '1400'],
        display: 'swap',
        styles: ['italic', 'normal']
      }
    ]
  },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'author', content: 'Sam Gozman' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        },
        { name: 'theme-color', content: '#f97316' },
        { name: 'theme-color', content: '#f97316', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#f97316', media: '(prefers-color-scheme: dark)' },
        // TODO: Remove it, render it on the server side
        { name: 'og:locale', content: 'en_US' },
        { name: 'og:image', content: 'https://gozman.space/sharing.jpg' },
        { name: 'og:url', content: 'https://gozman.space/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'og:site_name', content: 'Sam Gozman Blog' },
        {
          name: 'twitter:image:alt',
          content: 'Developer blog of Sam Gozman. Backend Engineer & Open Source Developer.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=1' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=1' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=1' }
      ],
      script: [
        {
          async: true,
          src: 'https://umami.host.extr.app/script.js',
          'data-website-id': 'aa340c87-a780-4076-9b07-563f34742edf'
        }
      ],
      bodyAttrs: {
        class: 'bg-orange-500'
      },
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  runtimeConfig: {
    // Can be exposed to the client
    public: {
      baseUrl: 'https://gozman.space',
      // apiURL: 'http://localhost:3000',
      apiURL: 'https://api-gozman-blog.extr.app',
      githubClientId: '3a1bed516b6eda760936',
      authTokenTTLseconds: 60,
      // hcaptchaSiteKey: '10000000-ffff-ffff-ffff-000000000001'
      hcaptchaSiteKey: '196c72be-eff9-4389-b0bc-f588455611e9'
    }
  }
})
