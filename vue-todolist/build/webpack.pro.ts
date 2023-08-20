import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import { Configuration } from "webpack";


const productionConfig: Configuration = {
    mode: 'production',
    plugins: []
};

export default merge(commonConfig, productionConfig);
