const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.[name].[chunkhash].js',
    assetModuleFilename: 'assets/[hash][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|jpg|jpeg|png|webp|svg|mp3|ttf|woff|woff2)$/i,
        type: 'asset/resource', //asset/resource
      },
    ],
  },
  devServer: {
    port: 3000,
    hot: false,
    // client: {
    //   overlay: true,
    //   progress: true,
    // },
    liveReload: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/bundle.[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
