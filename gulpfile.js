var fs = require('fs'),
    http = require('http'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    shell = require('gulp-shell'),
    spawn = require('child_process').spawn;

var server;
gulp.task('coverage', function () {
  var port = 7358;

  server = http.createServer(function (request, response) {
    console.log('REQUEST');
    request.pipe(fs.createWriteStream('coverage.json'));
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.end();
  }).listen(port);

  console.log("Coverage Server Started on port", port);
});

gulp.task('default', ['coverage'], function() {
  var TestemApi = require('testem/lib/api');
  var api = new TestemApi;
  var config = require('./tests/vanillajs/mocha/testem-istanbul.json');
  api.startDev(config);
});
