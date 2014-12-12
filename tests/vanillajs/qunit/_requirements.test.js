(function() {
  QUnit.module('Requirements');

  var _window = this;

  test('It should run in a browser', function() {
    QUnit.assert.equal(typeof window, 'object');
  });

  test('It should run within the window context', function() {
    QUnit.assert.ok(window === _window);
  });

  test('It should assign global variables to the window object', function() {
    var VALUE = '_VALUE_' + Math.random() + '_' + new Date().getTime();
    _someRandomVar = VALUE;
    QUnit.assert.equal(_someRandomVar, VALUE);
    QUnit.assert.ok(window._someRandomVar === _someRandomVar);
  });

  test('It should have access to the DOM', function() {
    QUnit.assert.equal(typeof document, 'object');
    QUnit.assert.equal(Object.prototype.toString.apply(document), '[object HTMLDocument]');

    var element = document.createElement('p');
    QUnit.assert.equal(element.tagName, 'P');
  });

})();
