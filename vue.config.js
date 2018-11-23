const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
  },
  // 修改的配置
  devServer: {
    proxy: 'https://xiaoce-timeline-api-ms.juejin.im',
    // proxy: {
    //   '/v1': {
    //     target: 'https://xiaoce-timeline-api-ms.juejin.im',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/v1': '/v1'
    //     }
    //   }
    // }
  }
}
