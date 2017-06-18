"use strict";
var path = require('path');
var webpack = require('webpack');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

loaders.push({
    test: /\.scss$/,
    loader: "style!css!sass?OutputStyle=expaned&" +
        'includePaths[]=' +
        (encodeURIComponent(
            path.resolve(process.cwd(), './node_modules')
        )) +
        '&includePaths[]=' +
        (encodeURIComponent(
            path.resolve(process.cwd(),
                './node_modules/grommet/node_modules')))
});

module.exports = {
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders
    },
    devServer: {
        contentBase: "./public",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            files: {
                css: ['public/bundle.js']
            }
        }),
    ]
};
