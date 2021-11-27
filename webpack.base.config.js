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
        app:"./app.ts"
    }, 
    output: {
        path: outPath,
        filename: "js/[name].bundle.js",
        chunkFilename: "js/[chunkhash].js",
        publicPath: "/"
    },
    target: "web", 
    devServer: {
        contentBase: path.resolve(__dirname, outPath),
        publicPath: '/',
        host: 'localhost',
        port: 6006,
        open: false
      },
    resolve: {
        extensions: [".js", ".ts", ],
        
    },
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
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "css/"
                        }
                    }
                ]
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
                test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/"
                        }
                    }
                ]               
            },
        ]
    },plugins:[ new HtmlWebpackPlugin({template: 'index.html'})
    ],
    optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      }
}