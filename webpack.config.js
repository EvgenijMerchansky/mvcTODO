const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/controller',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist'
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Lat Webpack',
            template: './index.html'
        }),
    ],
    devtool: 'cheap-eval-source-map' // remove for build
};