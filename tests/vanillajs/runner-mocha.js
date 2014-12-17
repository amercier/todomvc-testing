
jsdom = require('jsdom').jsdom;
document = jsdom('<html><head><script></script></head><body></body></html>');
window = document.parentWindow;
// jQuery = $ = require("jquery").create(window);
navigator = window.navigator = {};
DEBUG = false;
navigator.userAgent = 'NodeJs JsDom';

chai = require('chai');
assert = chai.assert;
// expect = chai.expect;
// should = chai.should();

var glob = require('glob').sync;
//   _ = require('lodash');

var Mocha = require('mocha');
var mocha = new Mocha({
  ui: 'tdd',
  reporter: 'list'
});

[
  // 'app/examples/vanillajs/js/model.js',
  // 'tests/vanillajs/mocks/store.mock.js',
  // 'tests/vanillajs/mocha/_requirements.test.js',
  'tests/vanillajs/mocha/model.test.js',
].forEach(function (pattern) {
  glob(pattern).forEach(function (file) {
    mocha.addFile(file);
  });
});

(function() {
  mocha.run(function(failures) {
    process.on('exit', function() {
      process.exit(failures);
    });
  });
})();
