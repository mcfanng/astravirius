const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const pkg = require("./package.json");
var pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(pathToPhaser, 'dist/phaser.js');

var sourcePath = path.join(__dirname, "./src");
var outPath = path.join(__dirname, "./dist");

module.exports = {
    devtool: "source-map",
    mode: "development",
    context: sourcePath,
    entry: {
        app: [
            "./app.ts"
        ]
    },
    output: {
        path: outPath,
        filename: "js/[name].bundle.js",
        chunkFilename: "js/[chunkhash].js",
        publicPath: "/"
    },
    target: "web", 
    devServer: {
        contentBase: path.resolve(__dirname, sourcePath),
        publicPath: outPath,
        host: '127.0.0.1',
        port: 6006,
        open: false
      },
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        alias: {
            phaser: phaser
          }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                exclude: '/node_modules/'
            },
            { test: /phaser\.js$/, loader: 'expose-loader?Phaser' },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            },
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
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
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/"
                        }
                    }
                ]               
            }
        ]
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new HtmlWebpackPlugin({ 
            template: "index.html" 
        }),
        new webpack.DefinePlugin({
            "APP_VERSION": JSON.stringify(pkg.version)
        })
    ]
}