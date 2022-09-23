const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/i,
        exclude: /node-modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  devServer: {
    open: true,
  },
};
