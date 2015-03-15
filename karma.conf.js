module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],

    browsers: ['PhantomJS'],

    files: [
      // This shim adds .bind to PhantomJS
      'tests/shim.js',
      'app/**/__tests__/*.js',
    ],

    preprocessors: {
      'app/**/__tests__/*.js': ['webpack'],
    },

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'text'},
        {type: 'html'}
      ]
    },

    webpack: require("./webpack.config.js"),

    webpackMiddleware: {
        noInfo: true
    },

    reporters: ['mocha', 'coverage', 'notify'],

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-notify-reporter',
      'karma-mocha-reporter',
      'karma-coverage'
    ]
  });
};
