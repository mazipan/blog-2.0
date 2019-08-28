import {
  META_TITLE,
  META_DESC,
  PRODUCTION_URL
} from './constants'

import {
  getAllGeneratedUrl,
  generateObjectSitemap
} from './utils/helpers'

require('dotenv-safe').config({
  allowEmptyValues: true
})

const path = require('path')
const ampify = require('./plugins/ampify')

const iconUrl = `${PRODUCTION_URL}/icon.png`

const routes = getAllGeneratedUrl()
const routesSitemap = generateObjectSitemap(routes)

module.exports = {
  env: {
    DOMAIN: process.env.DOMAIN || 'mazipan.xyz',
    FULL_DOMAIN: process.env.FULL_DOMAIN || 'https://www.mazipan.xyz',
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    ENABLE_ADS: process.env.ENABLE_ADS || false,
    ADS_CLIENT: process.env.ADS_CLIENT,
    GA_KEY: process.env.GA_KEY
  },
  /*
   ** Headers of the page
   */
  head: {
    title: META_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: META_DESC },
      { name: 'author', content: 'Irfan Maulana - @mazipan' },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'mazipan, mazipanneh, irfan maulana, irfan vue, irfan blibli, irfan bizzy, irfan tokopedia'
      },

      { name: 'theme-color', content: '#bd93f9' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: META_TITLE
      },

      { hid: 'og:image', property: 'og:image', content: iconUrl },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: iconUrl
      },
      { hid: 'og:image:width', property: 'og:image:width', content: '512' },
      { hid: 'og:image:height', property: 'og:image:height', content: '512' },
      { hid: 'og:title', property: 'og:title', content: META_TITLE },
      {
        hid: 'og:description',
        property: 'og:description',
        content: META_DESC
      },
      { hid: 'og:url', property: 'og:url', content: PRODUCTION_URL },
      { hid: 'og:site_name', property: 'og:site_name', content: '@mazipan' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'profile:username',
        property: 'profile:username',
        content: 'mazipanneh'
      },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: '@maz_ipan' },
      { name: 'twitter:site', content: '@maz_ipan' },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: iconUrl },
      { hid: 'twitter:title', name: 'twitter:title', content: META_TITLE },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: META_DESC
      },
      { hid: 'twitter:url', name: 'twitter:url', content: PRODUCTION_URL }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon-192x192.png'
      }
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript.',
        body: true
      }
    ]
    // __dangerouslyDisableSanitizers: ['script']
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#bd93f9',
    height: '4px',
    continuous: true
  },
  /*
   ** Global CSS
   */
  css: [
    'node_modules/modern-normalize/modern-normalize.css',
    './assets/scss/global.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/lazyload', ssr: false },
    { src: '~/plugins/vue-google-adsense', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-webfontloader',
    [
      '@nuxtjs/google-analytics',
      {
        id: `${process.env.GA_KEY}`
      }
    ]
  ],
  manifest: {
    name: `${META_TITLE}`,
    short_name: '@mazipan'
  },
  workbox: {
    cleanupOutdatedCaches: true,
    offlineAnalytics: true,
    cachingExtensions: '~/plugins/workbox-range-request.js',
    runtimeCaching: [
      {
        urlPattern: '/.html$/',
        handler: 'networkFirst',
        strategyOptions: {
          cacheName: 'Html',
          cacheExpiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24
          }
        }
      },
      {
        urlPattern: '^https://fonts.*(?:googleapis|gstatic).com/(.*)',
        handler: 'cacheFirst',
        strategyOptions: {
          cacheName: 'GoogleFont',
          cacheExpiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 7
          }
        }
      },
      {
        urlPattern: '^https://polyfill.io/(.*)',
        handler: 'cacheFirst',
        strategyOptions: {
          cacheName: 'Polyfill',
          cacheExpiration: {
            maxEntries: 2,
            maxAgeSeconds: 60 * 60 * 24 * 7
          }
        }
      }
    ]
  },
  generate: {
    routes
  },
  sitemap: {
    hostname: PRODUCTION_URL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    routes: routesSitemap
  },
  webfontloader: {
    google: {
      families: ['Montserrat:400,700']
    }
  },
  /*
  ** Hooks configuration
  */
  hooks: {
    // This hook is called before saving the html to flat file
    'generate:page': (page) => {
      if (/^\/amp/gi.test(page.route)) {
        console.log('processing amp file: ', page.route)
        page.html = ampify(page.html)
      }
    },
    // This hook is called before serving the html to the browser
    'render:route': (url, page, { req, res }) => {
      if (/^\/amp/gi.test(url)) {
        page.html = ampify(page.html)
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    cssSourceMap: false,
    postcss: {
      plugins: [
        require('autoprefixer')
      ],
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    babel: {
      plugins: [
        [
          'prismjs',
          {
            languages: ['javascript', 'css', 'markup', 'bash', 'markdown', 'git', 'yaml'],
            css: false,
            plugins: [
              'line-numbers',
              'line-highlight'
            ]
          }
        ]
      ]
    },
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          vue: {
            root: 'content-markdown'
          }
        }
      })
    }
  }
}
