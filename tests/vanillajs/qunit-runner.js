var qunit = require('qunit');
document = require('jsdom').jsdom();
window = document.parentWindow;

qunit.run({
  code: [
    'app/examples/vanillajs/js/model.js'
  ],
  tests: [
    './qunit/model.test.js'
  ]
}, function(err, report) {
  console.error(err.message);
});
