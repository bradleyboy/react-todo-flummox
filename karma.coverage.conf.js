var karmaConfig = require('./karma.defaults.conf.js');
var webpackConfig = require('./webpack.config.js');

webpackConfig.module.preLoaders = [
  {
    test: /(\.jsx)|(\.js)$/,
    exclude: /(__tests__|node_modules)/,
    loader: 'isparta-instrumenter-loader'
  }
];

karmaConfig.webpack = webpackConfig;

karmaConfig.plugins.push('karma-coverage');

karmaConfig.coverageReporter = {
  dir: 'coverage',
  reporters: [
    {type: 'text'},
    {type: 'html'}
  ]
};

karmaConfig.reporters.push('coverage');

module.exports = function(config) {
  config.set(karmaConfig);
};
