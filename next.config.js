const { withContentlayer } = require('next-contentlayer')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = withContentlayer()({
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
})
