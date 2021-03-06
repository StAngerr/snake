const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3333
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../../../' } },
        { loader: 'css-loader', options: { sourceMap: true }},
        { loader: 'sass-loader', options: { sourceMap: true }}
      ]
    },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [ 'url-loader' ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }]
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin()]
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    title: "Dev snake",
    filename: "index.html",
    template: "index.html"
  }), new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].css'
  })]
};
