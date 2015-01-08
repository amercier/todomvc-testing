/*jshint browser:false, node:true */
/*jshint camelcase: false */
var globby = require('globby');

var config = {
  framework: 'mocha+chai',
  test_page: 'tests/vanillajs/mocha/index.mustache',
  launch_in_ci: [
    'PhantomJS'
  ],
  launch_in_dev: [
    'PhantomJS'
  ],
  css_files: [
  ],
  _lib_files: globby.sync([
  ]),
  _src_files: globby.sync([
    'app/examples/vanillajs/js/*.js',
    '!app/examples/vanillajs/js/app.js'
  ]),
  _test_files: globby.sync([
    'tests/vanillajs/mocks/*.mock.js',
    'tests/vanillajs/mocha/*.test.js'
  ])
};

config.src_files = [].join(
  config._src_files,
  config._lib_files,
  config._test_files
);

module.exports = config;
