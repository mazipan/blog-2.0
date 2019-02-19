import Contents from './contents/index.js'

const path = require('path')
const pkg = require('./package')
const appTitle = `@mazipan — A personal blog by Irfan Maulana`
const productionUrl = 'https://mazipan-blog.netlify.com'

const routes = Contents.map(item => {
  item = `/${item}`
  return item
})

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: `${appTitle}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },

      { hid: 'theme-color', name: 'theme-color', content: '#bd93f9' },

      { hid: 'og:image', property: 'og:image', content: '/icon.png' },
      { hid: 'og:title', property: 'og:title', content: `${appTitle}` },
      { hid: 'og:description', property: 'og:description', content: pkg.description },
      { hid: 'og:url', property: 'og:url', content: productionUrl },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: '/icon.png' },
      { hid: 'twitter:title', name: 'twitter:title', content: `${appTitle}` },
      { hid: 'twitter:description', name: 'twitter:description', content: pkg.description },
      { hid: 'twitter:url', name: 'twitter:url', content: productionUrl }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' }
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript.',
        body: true
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#50fa7b',
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
    generate: true
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
    'nuxt-webfontloader'
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
