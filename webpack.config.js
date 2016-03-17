var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./index.js",
    output: {
        path: "./dist/",
        filename: "SuperSelect.js",
        library: "SuperSelect",
        libraryTarget: "umd",
        publicPath: "/dist/"
    },
    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ["react", "es2015"]
            }
        }, {
            test: /\.scss$/,
            // loaders: ["style", "css?sourceMap", "sass?sourceMap"],
            loader: ExtractTextPlugin.extract(
                "style",
                "css!sass"
            )
        }]
    },
    plugins: [
        new ExtractTextPlugin("SuperSelect.css")
    ]
};
