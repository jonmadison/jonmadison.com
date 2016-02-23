"use strict";
let webpack = require("webpack");
let path = require("path");

module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public"),
        publicPath: "./public/"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel",
                query: {
                    presets: ["react", "es2015"]
                }
            },
            {
                test: /\.(eot|woff).*$/,
                loader: "file-loader"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader?name=[path][name].[ext]"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};