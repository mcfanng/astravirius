const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//  const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const pkg = require("./package.json");
var pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(pathToPhaser, 'dist/phaser.js');

var sourcePath = path.join(__dirname, "./src");
var outPath = path.join(__dirname, "./dist");

module.exports = {
    entry: './app.ts',
    devtool: 'inline-source-map',
    mode: "development",
    context: sourcePath,
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                loader: "ts-loader",
                exclude: '/node_modules/'
            },
            {
                test: require.resolve('Phaser'),
                loader: 'expose-loader',
                options: { exposes: { globalName: 'Phaser', override: true } }
              },
            {
                test: /\.css$/,
                loader:  "css-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images/"
                        }
                    }
                ]
            },
        ],

    }, plugins: [
        new webpack.DefinePlugin({
            VERSION:
                JSON.stringify(pkg.version) ||
                JSON.stringify(require('./package.json').version),
        }), new HtmlWebpackPlugin({ template: 'index.html' })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, outPath),
        chunkFilename: "js/[chunkhash].js",
        publicPath: "/"
    },
    target: "web",
    devServer: {
        static: {
            directory: path.join(__dirname, outPath),
          },
          compress: true,
          port: 6006,
    },
};