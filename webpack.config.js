// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const webpack = require('webpack');

const clientConfig = {
  target: "web",
  entry: "./client/index.jsx",
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  // context: path.resolve(__dirname, "assets"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         outputPath: "images",
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.webmanifest$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "assets",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.IS_BROWSER": "true",
    }),
    // new HtmlWebpackPlugin({
    //   favicon: "./images/favicon.ico"
    // })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
};

const serverConfig = {
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "server.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.IS_BROWSER": "false",
    }),
  ],
};

module.exports = [clientConfig, serverConfig];