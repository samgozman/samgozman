// https://nuxt.com/docs/api/configuration/nuxt-config

// Captured once per `nuxt build`, so every redeploy advances the lastmod of
// static pages (whose content only changes when the code is rebuilt).
const buildTime = new Date().toISOString()

export default defineNuxtConfig({
  compatibilityDate: '2026-04-03',
  site: {
    url: 'https://gozman.space',
    name: 'Sam Gozman',
    description:
      'Developer blog of Sam Gozman — Team Lead & Senior Backend Engineer (Go, Node.js, Rust) and open-source developer.',
    defaultLocale: 'en',
    // Canonicalize the trailing-slash variant (/blog/ -> /blog) so Google
    // does not treat them as duplicate URLs. Also drives the auto rel=canonical.
    trailingSlash: false
  },
  nitro: {
    preset: 'bun',
    externals: {
      inline: ['vue']
    },
    compressPublicAssets: {
      gzip: true,
      brotli: true
    },
    // Use in-memory driver for payload cache to avoid ENOTDIR conflict
    // when both /blog and /blog/** routes are cached on the filesystem
    // (FS driver can't have "blog" as both a file and a directory)
    storage: {
      'cache:nuxt:payload': {
        driver: 'lru-cache'
      }
    }
  },
  ssr: true,
  sitemap: {
    exclude: [
      '/admin/**',
      '/subscription/confirm',
      '/subscription/unsubscribe',
      '/subscription/success'
    ],
    sources: ['/api/__sitemap__/urls'],
    // Static pages: their lastmod tracks the build. /blog and blog posts are
    // supplied by the source endpoint above so their lastmod can follow content.
    urls: () => {
      return [
        { loc: '/', changefreq: 'weekly', priority: 1, lastmod: buildTime },
        { loc: '/projects', changefreq: 'monthly', priority: 0.8, lastmod: buildTime },
        { loc: '/subscription', changefreq: 'yearly', priority: 0.3, lastmod: buildTime }
      ]
    }
  },
  routeRules: {
    // Note: 'prerender' option is currently causing problems OgImage in docker container
    // TODO: Use 'prerender' option when fixed. isr is a good alternative for now to cache pages on demand
    '/': { isr: true },
    '/projects': { isr: true },
    '/subscription': { isr: true },
    '/subscription/success': { isr: true },
    // Disable SSR for subscription pages (just in case)
    '/subscription/confirm': { ssr: false },
    '/subscription/unsubscribe': { ssr: false },
    // Blog index (page 1); deeper pages live at /blog/page/N — both matched
    // by /blog/** below. Path-based paging keeps each page's cache distinct.
    '/blog': { swr: true },
    // Post pages and /blog/page/N, generated on demand and cached per path.
    '/blog/**': { swr: true },
    // Admin pages are not pre-rendered
    '/admin/**': { ssr: false }
  },
  devtools: { enabled: true },
  devServer: {
    port: 5555
  },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxtjs/tailwindcss', '@nuxtjs/seo', '@nuxt/content'],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }]
  },
  ogImage: {},
  // Re-enable highlight API route for client-side parseMarkdown in MarkdownView
  mdc: {
    highlight: {
      noApiRoute: false
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        '@hcaptcha/vue3-hcaptcha',
        'debug', // CJS
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@unhead/schema-org/vue'
      ]
    }
  },
  content: {
    build: {
      markdown: {
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
        }
      }
    },
    renderer: {
      anchorLinks: true,
      alias: {
        h1: 'ProseH1',
        h2: 'ProseH2',
        h3: 'ProseH3'
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
        global: true,
        weights: ['300', '400', '500', '600', '700', '800', '900'],
        display: 'swap',
        styles: ['normal']
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
          content: 'width=device-width, initial-scale=1'
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
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=1' },
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'Sam Gozman — Dev Blog',
          href: '/feed.xml'
        }
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
      hcaptchaSiteKey: '196c72be-eff9-4389-b0bc-f588455611e9',
      buildTime
    }
  }
})
