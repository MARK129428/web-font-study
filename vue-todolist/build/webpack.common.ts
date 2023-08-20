// @ts-ignore
import path from 'path';
// @ts-ignore
import  HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import AutoImport from 'unplugin-auto-import/webpack';
import Components from 'unplugin-vue-components/webpack';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { Configuration } from 'webpack';
import WebpackBar from "webpackbar";

const webpackCommon: Configuration = {
    entry: path.resolve(__dirname, '../src/index.ts'),
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true,
                },
            },
            {
                test: /\.m?[tj]s$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new WebpackBar({
            color: '#5CDB95', // 设置进度条颜色
            profile: true, // 显示打包性能分析
            name: 'vue-todolist', // 显示自定义名称
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            title: '这是Vue的项目',
        }),
        new VueLoaderPlugin(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]-bundle.js',
    },
};

export default webpackCommon;
