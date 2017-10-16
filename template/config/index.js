var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    htmlRoot: 'D://MyProject/PA/views',//页面的产出目录
    // assetsSubDirectory: 'www.baidu.com',//assetsSubDirectory和assetsPublicPath决定了生成的静态文件的相对路径
    // assetsPublicPath: 'http://',
    assetsSubDirectory:'static',
    assetsPublicPath:'/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8282,
    assetsSubDirectory: 'static',//静态文件生成路径为/static/js/***
    assetsPublicPath: '/',
    proxyTable: {
        
    },
    cssSourceMap: false
  }
}
