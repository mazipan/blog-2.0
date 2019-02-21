import Contents from './contents/index.js'

const path = require('path')
const pkg = require('./package')

const appTitle = `@mazipan — A personal blog by Irfan Maulana`
const productionUrl = 'https://www.mazipan.xyz'
const iconUrl = `${productionUrl}/icon.png`

const routes = Contents.map(item => {
  item = `/${item}`
  return item
})

const routesSitemap = () => {
  let res = []
  routes.forEach(el => {
    const item = {}
    item.url = el
    item.changefreq = 'daily'
    item.priority = 1
    item.lastmodISO = String(new Date().toISOString())
    res.push(item)
  })
  return res
}

module.exports = {
  mode: 'spa',
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID
  },
  /*
  ** Headers of the page
  */
  head: {
    title: `${appTitle}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'author', name: 'author', content: pkg.author },
      { hid: 'keywords', name: 'keywords', content: 'mazipan, mazipanneh, irfan maulana, irfan, irfan blibli, irfan bizzy, frontend, frontend developer' },

      { hid: 'theme-color', name: 'theme-color', content: '#bd93f9' },

      { hid: 'og:image', property: 'og:image', content: iconUrl },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: iconUrl },
      { hid: 'og:image:width', property: 'og:image:width', content: '512' },
      { hid: 'og:image:height', property: 'og:image:height', content: '512' },
      { hid: 'og:title', property: 'og:title', content: `${appTitle}` },
      { hid: 'og:description', property: 'og:description', content: pkg.description },
      { hid: 'og:url', property: 'og:url', content: productionUrl },
      { hid: 'og:site_name', property: 'og:site_name', content: '@mazipan' },
      { hid: 'og:type', property: 'og:type', content: 'website' },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@maz_ipan' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@maz_ipan' },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: iconUrl },
      { hid: 'twitter:title', name: 'twitter:title', content: `${appTitle}` },
      { hid: 'twitter:description', name: 'twitter:description', content: pkg.description },
      { hid: 'twitter:url', name: 'twitter:url', content: productionUrl }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192x192.png' }
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript.',
        body: true
      }
    ],
    script: [
      { innerHTML: `{
        "@context": "http://schema.org",
        "@type": "WebSite",
        "url": "${productionUrl}",
        "name": "Irfan Maulana",
        "author": "${pkg.author}",
        "image": "${iconUrl}",
        "description": "${pkg.description}",
        "sameAs": [
          "https://www.facebook.com/mazipanneh",
          "https://instagram.com/maz_ipan",
          "https://twitter.com/Maz_Ipan",
          "https://id.linkedin.com/in/mazipan",
          "https://www.slideshare.net/IrfanMaulana21",
          "https://github.com/mazipan"
        ]
      }`,
      type: 'application/ld+json' }
    ],
    __dangerouslyDisableSanitizers: ['script']
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
    { src: '~/plugins/firebase', ssr: false }
  ],
  manifest: {
    name: `${appTitle}`,
    short_name: '@mazipan'
  },
  generate: {
    routes
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: productionUrl,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
    routes: routesSitemap()
  },
  webfontloader: {
    google: {
      families: ['Merriweather Sans:400,700']
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-webfontloader',
    ['@nuxtjs/google-analytics', {
      id: 'UA-25065548-6'
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: [
        require('autoprefixer')({
          browsers: ['last 2 versions']
        })
      ],
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
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
