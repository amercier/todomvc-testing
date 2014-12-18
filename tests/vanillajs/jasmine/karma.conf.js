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
    autoWatch: false,
    singleRun: true
  });
};
