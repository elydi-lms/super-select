const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// @ts-ignore
module.exports = merge(common, {
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "React"
        }
    },
    plugins: [
        new UglifyJSPlugin()
    ],
    mode: "production",
});
