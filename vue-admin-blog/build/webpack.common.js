const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const webpack = require("webpack");

module.exports = {
    mode: "none",
    entry: path.resolve(__dirname, "../src/index.ts"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist"),
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            filename: "index.html"
        }),
        new VueLoaderPlugin(), // 添加 VueLoaderPlugin 插件
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
    devServer: {
        port: 8080, // 指定服务器端口号
        open: true, // 自动在浏览器中打开
        hot: true,
    },
}