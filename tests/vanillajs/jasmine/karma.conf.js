module.exports = function(config) {
  config.set({
    basePath: '../../..',
    frameworks: ['jasmine'],
    files: [
      'app/examples/vanillajs/js/*.js',
      'tests/vanillajs/mocks/*.mock.js',
      'tests/vanillajs/jasmine/*.test.js'
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
      dir: 'tests/vanillajs/jasmine/coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', subdir: '.', file: 'report.lcov' },
        { type: 'text', subdir: '.', file: 'report.txt' },
        { type: 'text-summary', subdir: '.', file: 'summary.txt' },
      ]
    },
    autoWatch: false,
    singleRun: true
  });
};
