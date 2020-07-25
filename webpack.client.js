const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    entry: './src/entry-client.js',
    output: {
        // libraryTarget: 'commonjs2', // 不添加这一项输出的就剩{}，添加这一项输出的就是  Object [Module] { default: [Function] }
        filename: 'client.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
                // loader: 'vue-loader babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
    
}