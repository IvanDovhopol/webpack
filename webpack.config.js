const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-bundle.js',
  },
  devServer: {
    port: 3333,
    open: true,
  },
};
