const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",

    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },

    resolve: {
        alias: {
            styles: path.resolve(__dirname, "src", "styles")
        },
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx", "html", "scss"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.template.html"
        })
    ],

    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loaders: [
                "style?sourceMap",
                "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
                "sass?sourceMap"
            ]
        }]
    },

    devServer: {
        host: "0.0.0.0",
        port: 3000,
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: true
    }
};
