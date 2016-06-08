const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: "dist",
        filename: "bundle.js",
    },

    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", "html"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.template.html"
        })
    ],

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                loaders: [
                    "style?sourceMap",
                    "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
                    "sass?sourceMap"
                ]
        }],

        preLoaders: [{
            test: /\.js$/,
            loader: "source-map-loader"
        }]
    },

    devServer: {
        host: "0.0.0.0",
        port: 3000,
        contentBase: "./dist",
        historyApiFallback: true
    }
};
