module.exports = {
  devServer: {
    proxy: 'http://localhost:8080'
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      // 开发环境配置
      // config.devtool = 'cheap-source-map'
      config.devtool = 'source-map'
    //   config.devtool = 'eval'
    }
  }
}
