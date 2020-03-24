// vue.config.js
module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 8080,
        proxy: {
            '/apis': {
                target: 'http://47.116.1.19:8081/',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
            },
        }
    }
};