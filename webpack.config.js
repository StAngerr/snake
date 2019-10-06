const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: ['babel-polyfill', './src/index.tsx']
  },
  mode: 'development',
  context: path.resolve(__dirname, './'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 3333
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
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
          test: /\.(js|tsx?)$/,
          use: [
            { loader: 'babel-loader' },
            { loader : 'ts-loader' },
            { loader: 'tslint-loader' },
          ],
          exclude: /node_modules/
        }
      ]
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
