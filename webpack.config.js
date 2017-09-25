const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const getPath = function () {
    return path.join(__dirname, ...arguments);
};

module.exports = {
    entry: getPath("./index.js"),
    output: {
        path: getPath("./dist/"),
        filename: "SuperSelect.js",
        library: "SuperSelect",
        libraryTarget: "var",
        publicPath: "/dist/"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        ["env", {
                            targets: {
                                browsers: ["last 2 versions"]
                            }
                        }],
                        "react"
                    ],
                }
            }
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        }]
    }
};
