// vue.config.js
module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            '/apis': {
                target: 'http://192.168.5.67:8081/',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
            },
        }
    }
};