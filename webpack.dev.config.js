module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://127.0.0.1:3001/',
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 3001,
    hot: false,
    liveReload: true,
  },
};
