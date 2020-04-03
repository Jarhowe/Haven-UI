const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('./src'))
    },
    // css的处理
    css: {
        loaderOptions: {
            sass: {}
        }
    }
}