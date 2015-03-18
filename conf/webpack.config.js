var webpack = require('./make-webpack-config');

module.exports = require('./make-webpack-config')({
  devtool: 'eval',
  lint: true,
});
