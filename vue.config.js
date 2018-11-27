const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('base', resolve('src/base'))
  },
  // 修改的配置
  devServer: {
    // proxy: 'https://xiaoce-timeline-api-ms.juejin.im',  // 统一配置
    proxy: {
      '^/books': {
        target: 'https://xiaoce-timeline-api-ms.juejin.im',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/books': ''
        }
      },
      '/search': {
        target: 'https://timeline-merger-ms.juejin.im',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/search': ''
        }
      }
    },
  }
};
