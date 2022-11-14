const path = require('path');
const { readdirSync } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const TPL_FOLDER = path.join(__dirname, 'src', 'templates');

const getTemplatesNames = (tplDirName) => readdirSync(tplDirName);

const templateList = getTemplatesNames(TPL_FOLDER);

const templates = templateList.map(
  (templateName) =>
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'templates', templateName),
      filename: templateName,
      inject: false,
    })
);

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
    devMiddleware: {
      publicPath: '/dudarik-JSFE2022Q3/songbird/',
    },
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
    ...templates,
  ],
};
