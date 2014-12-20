/*jshint browser:false, node:true */
module.exports = {
  framework: 'qunit',
  test_page: 'tests/vanillajs/qunit/index.mustache',
  launch_in_ci: [
    'PhantomJS'
  ],
  launch_in_dev: [
    'PhantomJS'
  ],
  src_files: [
    'app/examples/vanillajs/js/*.js',
    'tests/vanillajs/mocks/*.mock.js',
    'tests/vanillajs/qunit/*.test.js'
  ],
  src_files_ignore: [
    'app/examples/vanillajs/js/app.js'
  ],
  watch_files: [
    'tests/vanillajs/qunit/index.mustache'
  ],
  lib_files: [
    { src:'bower_components/blanket/dist/qunit/blanket.js', attr:'data-cover-only="../../../app/.*"' }
  ],
  src_attr: 'data-cover'
};
