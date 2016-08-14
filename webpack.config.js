var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var production = process.argv.reduce(
  (previousVal, currentVal) => previousVal ? previousVal: currentVal === '-p',
  false
);

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: production ? ['./src'] : [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './src',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: Date.now() + '.js',
    resolve: {
      modulesDirectories: ['node_modules', 'src'],
      extensions: ['', '.js'],
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'templates/index.html',
      filename: '../index.html',
    }),
  ],
};
