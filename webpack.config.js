var webpack = require('webpack');
var path = require('path');
var ejs = require('ejs');
var fs = require('fs');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var production = process.argv.reduce(
  (previousVal, currentVal) => previousVal ? previousVal: currentVal === '-p',
  false
);

var bundleName = Date.now();

var webpackConfig = {
  devtool: 'cheap-module-source-map',
  entry: production ? ['./src'] : [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './src',
  ],
  output: {
    libraryTarget: 'umd',
    filename: bundleName + '.js',
    path: path.join(__dirname, 'public'),
    resolve: {
      modulesDirectories: ['node_modules', 'src'],
      extensions: ['', '.js'],
    },
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
  ],
};

if (!production) {
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      template: './templates/index.ejs',
      filename: '../index.html',
    })
  )
}

if (production) {
  var template = ejs
    .compile(fs.readFileSync(__dirname + '/templates/index.ejs', 'utf-8'));

  webpackConfig.plugins.push(
    new StaticSiteGeneratorPlugin(
      bundleName + '.js',
      ['../index.html'],
      { template: template }
    )
  );
}

module.exports = webpackConfig;
