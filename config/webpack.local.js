const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      API_ROOT: JSON.stringify('https://hiring-test-api.herokuapp.com'),
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
});
