module.exports = function(config) {
  config.set({
    basePath: '../../..',
    frameworks: ['mocha', 'chai'],
    files: [
      'app/examples/vanillajs/js/*.js',
      'tests/vanillajs/mocks/*.mock.js',
      'tests/vanillajs/mocha/*.test.js'
    ],
    exclude: [
      'app/examples/vanillajs/js/app.js'
    ],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'app/examples/vanillajs/js/*.js': ['coverage']
    },
    coverageReporter: {
      dir: 'tests/vanillajs/mocha/coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ]
    },
    autoWatch: false,
    singleRun: true
  });
};
