'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')
module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 8880, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/movie': {
        target:"https://api.douban.com/v2/",
        changeOrigin: true,
         pathRewrite: {
          '^/movie': '/movie'
         }
      }
    },
    cssSourceMap: false,

    // Various Dev Server settings
     host: 'localhost', // can be overwritten by process.env.HOST

    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
  },

  build: {
    // Template for index.html
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    productionSourceMap: true,

    devtool: '#source-map',


    productionGzip: false,
    productionGzipExtensions: ['js', 'css '],

    bundleAnalyzerReport: process.env.npm_config_report
  }
}
