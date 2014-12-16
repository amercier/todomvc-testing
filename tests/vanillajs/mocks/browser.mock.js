var jsdom = require("jsdom").jsdom;
var document = jsdom();
var window = document.parentWindow;
global.window = window;
global.document = document;
