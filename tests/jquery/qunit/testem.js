/*jshint browser:false, node:true */
/*jshint camelcase: false */
var globby = require('globby');

var config = {
  framework: 'qunit',
  test_page: 'tests/jquery/qunit/index.mustache',
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
    'bower_components/qunit-notifications/index.js',
    'tests/config/qunit-notifications.js',
    'bower_components/rsvp/rsvp.js',
    'app/examples/jquery/bower_components/jquery/dist/jquery.js',
  ]),
  _src_files: globby.sync([
    'app/examples/jquery/js/app.js'
  ]),
  _test_files: globby.sync([
    'tests/jquery/mocks/*.mock.js',
    'tests/jquery/qunit/*.test.js'
  ])
};

config.src_files = [].join(
  config._src_files,
  config._lib_files,
  config._test_files
);

module.exports = config;
