module.exports = function(config) {
  config.set({
    basePath: '../../..',
    frameworks: ['qunit'],
    files: [
      'app/examples/vanillajs/js/*.js',
      'tests/vanillajs/mocks/*.mock.js',
      'tests/vanillajs/qunit/*.test.js'
    ],
    exclude: [
      'app/examples/vanillajs/js/app.js'
    ],
    browsers: ['PhantomJS'],
    autoWatch: false,
    singleRun: true
  });
};
