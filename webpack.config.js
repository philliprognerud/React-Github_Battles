var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./App/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "App/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    disableHostCheck: true,
    compress: true,
    host: process.env.IP,
    port: process.env.PORT,
    public: process.env.C9_HOSTNAME
  }
};
