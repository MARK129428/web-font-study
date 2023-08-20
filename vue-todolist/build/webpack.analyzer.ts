import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import SpeedMeasurePlugin from "speed-measure-webpack-plugin";
import {Configuration} from "webpack";
import {merge} from "webpack-merge";
import webpackCommon from "./webpack.common"

const analyzerConfig: Configuration = {
    mode: "production",
    plugins: [
        new BundleAnalyzerPlugin()
    ]
};


const smp = new SpeedMeasurePlugin();
export default smp.wrap(merge(webpackCommon, analyzerConfig))