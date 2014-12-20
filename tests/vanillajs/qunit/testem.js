/*jshint browser:false, node:true */

var globby = require('globby');

var config = {
  framework: 'qunit',
  test_page: 'tests/vanillajs/qunit/index.mustache?coverage',
  launch_in_ci: [
    'PhantomJS'
  ],
  launch_in_dev: [
    'PhantomJS'
  ],
  css_files: [
    'test.css'
  ],
  _lib_files: globby.sync([
    'bower_components/rsvp/rsvp.js',
    'bower_components/blanket/dist/qunit/blanket.js'
  ]),
  _src_files: globby.sync([
    'app/examples/vanillajs/js/*.js',
    '!app/examples/vanillajs/js/app.js'
  ]),
  _test_files: globby.sync([
    'tests/vanillajs/mocks/*.mock.js',
    'tests/vanillajs/qunit/*.test.js'
  ])
};

config.src_files = [].join(
  config._src_files,
  config._lib_files,
  config._test_files
);

module.exports = config;
