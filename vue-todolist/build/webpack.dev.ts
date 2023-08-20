import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import WebpackBar from "webpackbar";
import ErrorOverlayPlugin from 'error-overlay-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';


interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const devConfig: Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new WebpackBar({
            color: '#5CDB95',
            profile: true,
            name: 'vue-todolist',
        }),
        new FriendlyErrorsWebpackPlugin(),
        new ErrorOverlayPlugin(), // 在浏览器中显示构建错误和警告信息
    ],
    devServer: {
        compress: true,
        port: 8080,
        // 在这里可以添加其他 devServer 配置，如代理、热模块替换等
    },
    resolve: {
        fallback: {
            "querystring": require.resolve("querystring-es3"), // 添加回退选项
        },
        aliasFields: ['browser'], // 添加 aliasFields 配置以查看模块解析信息
    },
    stats: 'normal', // 添加详细的构建信息
};

export default merge(commonConfig, devConfig);
