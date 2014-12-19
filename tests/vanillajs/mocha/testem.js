module.exports = {
  "framework": "mocha+chai",
  "test_page": "tests/vanillajs/mocha/index.mustache",
  "launch_in_ci": [
    "PhantomJS"
  ],
  "launch_in_dev": [
    "PhantomJS"
  ],
  "src_files": [
    "app/examples/vanillajs/js/**/*.js",
    "tests/vanillajs/mocks/**/*.mock.js",
    "tests/vanillajs/mocha/**/*.test.js"
  ],
  "src_files_ignore": [
    "app/examples/vanillajs/js/app.js"
  ]
};
