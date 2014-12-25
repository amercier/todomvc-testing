/*jshint browser:false, node:true */
module.exports = function(config) {
  'use strict';

  config.set({
    basePath: '../../..',
    frameworks: ['qunit', 'qunit-sb'],
    files: [
      'bower_components/rsvp/rsvp.js',
      'app/examples/vanillajs/js/*.js',
      'tests/vanillajs/mocks/*.mock.js',
      'tests/vanillajs/qunit/*.test.js'
    ],
    exclude: [
      'app/examples/vanillajs/js/app.js'
    ],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage', 'notify'],
    preprocessors: {
      'app/examples/vanillajs/js/*.js': ['coverage']
    },
    coverageReporter: {
      dir: 'tests/vanillajs/qunit/coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', subdir: '.', file: 'report.lcov' },
        { type: 'text', subdir: '.', file: 'report.txt' },
        { type: 'text-summary' },
      ]
    },
    autoWatch: false,
    singleRun: true
  });
};
