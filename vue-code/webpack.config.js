const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      env = process.env.NODE_ENV,
      isDev = env === 'dev';

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist')
    },
    resolve: {
        modules: [path.resolve(__dirname, ''), 'node_modules']
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    devServer: {
        port: '3000',
        hot: true
    }
}