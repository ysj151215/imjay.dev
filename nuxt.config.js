export default {
  target: 'static',

  head: {
    title: 'Jay',
    htmlAttrs: { lang: 'zh-Hans' },
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  },

  css: ['@/assets/css/main.css'],

  plugins: ['~/plugins/shortcuts.js', { src: '~/plugins/splitbee.js', ssr: false }],

  components: true,

  buildModules: [
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/dayjs-module
    '@nuxtjs/dayjs',
    // https://tailwindcss.nuxtjs.org/
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      },
      // https://github.com/imcuttle/remark-heading-id
      remarkPlugins: ['remark-heading-id']
    }
  },

  // Color theme configuration: https://color-mode.nuxtjs.org/
  colorMode: {
    classSuffix: ''
  },

  // Day.js configuration: https://day.js.org/zh-CN/
  dayjs: {
    plugins: ['utc']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Tailwind CSS configuration: https://tailwindcss.nuxtjs.org/setup
  tailwindcss: {
    jit: true
  }
}
