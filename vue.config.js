const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    // 入口文件配置
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // devServer
    devServer: {
        // 开启热更新
        hot: true
    },
    // 避免在生产环境中用F12开发者工具在Sources中看到源码
    productionSourceMap: process.env.NODE_ENV == 'development' ? true : false,
    chainWebpack: config => {
        // babel转码编译
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => options)
    },
    // 暴露默认导出配置
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    // 路径别名
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.jsx', '.vue', '.json'],
            alias: {
                '@': resolve('./examples')
            }
        }
    },
    // css的处理
    css: {
        extract: false,
        loaderOptions: {
            sass: {}
        }
    }
}