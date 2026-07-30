const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // 🚨 원하는 하위 폴더 주소 양식에 맞게 정확히 지정합니다.
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-hello/' : '/',
  
  css: { extract: false },
  configureWebpack: { optimization: { minimize: false } },
  chainWebpack: config => { config.optimization.delete('minimizer') }
})