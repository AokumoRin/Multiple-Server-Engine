// webpack.renderer.js

// 모듈 선언
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    target: "web",
    entry: "./src/renderer/script/index.ts",
    output: {
        path: path.resolve(__dirname, "dist", "renderer"),
        filename: "script/index.js"
    },
    resolve: {
        extensions: [".ts", ".js", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/renderer/index.html",
            filename: "index.html",
            inject: false
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/renderer/css", to: "css" }
            ]
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};