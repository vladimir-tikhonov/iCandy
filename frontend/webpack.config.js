const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./dist/bundle.js",
    },

    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'dist/index.html',
            template: 'src/index.template.html'
        })
    ],

    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }],

        preLoaders: [{
            test: /\.js$/,
            loader: "source-map-loader"
        }]
    },

    devServer: {
        host: '0.0.0.0',
        port: 3000,
        contentBase: './dist',
        historyApiFallback: true
    }
};
