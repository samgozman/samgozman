// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://gozman.space'
  },
  sitemap: {
    exclude: [
      '/admin/**',
      '/subscription/confirm',
      '/subscription/unsubscribe',
      '/subscription/success'
    ],
    sources: ['/api/__sitemap__/urls'],
    // Note: to override the default sitemap.xml generated from sources
    urls: () => {
      return [
        {
          changefreq: 'daily',
          priority: 0.5,
          loc: '/blog'
        },
        {
          changefreq: 'weekly',
          priority: 1,
          loc: '/'
        }
      ]
    }
  },
  devtools: { enabled: true },
  devServer: {
    port: 5555
  },
  modules: [
    '@nuxt/fonts',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    'nuxt-og-image',
    '@nuxt/content'
  ],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }]
  },
  ogImage: {
    fonts: ['Poppins:700', 'Poppins:900']
  },
  content: {
    highlight: {
      theme: 'github-dark',
      langs: [
        'go',
        'js',
        'ts',
        'json',
        'rust',
        'md',
        'html',
        'bash',
        'shell',
        'proto',
        'yaml',
        'toml',
        'dockerfile',
        'terraform',
        'sql',
        'vue',
        'c',
        'cpp',
        'make',
        'makefile',
        'python'
      ]
    },
    markdown: {
      anchorLinks: true,
      tags: {
        // https://content.nuxt.com/get-started/configuration#markdown
        // Need to see what fields are going to be used, create custom component
        // See: ./node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue
        h1: 'ProseH1',
        h2: 'ProseH2',
        h3: 'ProseH3',
      }
    }
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
        { name: 'og:locale', content: 'en_US' },
        { name: 'og:site_name', content: 'Sam Gozman Blog' },
        { name: 'og:logo', content: 'https://gozman.space/apple-touch-icon.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=1' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=1' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=1' }
      ],
      script:
        process.env.NODE_ENV === 'production'
          ? [
              {
                async: true,
                src: 'https://umami.host.extr.app/script.js',
                'data-website-id': 'aa340c87-a780-4076-9b07-563f34742edf'
              }
            ]
          : [],
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
