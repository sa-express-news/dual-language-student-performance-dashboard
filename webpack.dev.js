const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist/"),
        pathinfo: true,
        publicPath: "/",
        filename: 'static/js/bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/",
        hotOnly: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};