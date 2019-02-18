const path = require('path')
const pkg = require('./package')
const appTitle = `@mazipan's personal blog`
const productionUrl = 'https://mazipan.io'


module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },

      { name: 'theme-color', content: '#ff0000' },

      { property: 'og:image', content: '/icon.png' },
      { property: 'og:title', content: `${appTitle}` },
      { property: 'og:description', content: pkg.description },
      { property: 'og:url', content: productionUrl },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image:src', content: '/icon.png' },
      { name: 'twitter:title', content: `${appTitle}` },
      { name: 'twitter:description', content: pkg.description },
      { name: 'twitter:url', content: productionUrl },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    color: '#ff0000',
    height: '4px',
    continuous: true
   },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/lazyload', ssr: false }
  ],
  manifest: {
    name: `${appTitle}`,
    short_name: '@mazipan'
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
      families: ['Lato:400,700'] //Loads Lato font with weights 400 and 700
    }
  },
  styleResources: {
    scss: [
      './assets/scss/global.scss'
    ]
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
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
    extend(config, ctx) {
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
            root: "content-markdown"
          }
        }
      })
    }
  }
}
