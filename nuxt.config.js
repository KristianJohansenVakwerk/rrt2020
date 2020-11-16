export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  generate: {},
  /*
   ** Global CSS
   */
  css: [
    { lang: 'scss', src: '~styles/index.scss' }

    // { lang: 'scss', src: '~assets/fonts/fonts.scss' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/base-ui' },
    { src: '~/components/index' },
    { src: '~/plugins/anime' },
    { src: '~/plugins/vue-swiper-plugin', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/prismic'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    'vue-social-sharing/nuxt'
  ],

  styleResources: {
    scss: ['~styles/_constants.scss', '~styles/mixins/*.scss']
  },

  prismic: {
    endpoint: 'https://rtt2020.cdn.prismic.io/api/v2',
    preview: true,
    linkResolver: '~/prismic/link-resolver.js'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    transpile: ['gsap'],
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining']
    }
  }
}
