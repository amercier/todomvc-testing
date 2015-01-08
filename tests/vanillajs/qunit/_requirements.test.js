/* global _someRandomVar:true */
/* jshint strict:false */
(function(QUnit) {

  QUnit.module('Requirements');

  var _window = this;

  QUnit.test('It should run in a browser', function(assert) {
    assert.equal(typeof window, 'object');
  });

  QUnit.test('It should run within the window context', function(assert) {
    assert.ok(window === _window);
  });

  QUnit.test('It should assign global variables to the window object', function(assert) {
    var VALUE = '_VALUE_' + Math.random() + '_' + new Date().getTime();
    _someRandomVar = VALUE;
    assert.equal(_someRandomVar, VALUE);
    assert.ok(window._someRandomVar === _someRandomVar);
  });

  QUnit.test('It should have access to the DOM', function(assert) {
    assert.equal(typeof document, 'object');
    assert.equal(Object.prototype.toString.apply(document), '[object HTMLDocument]');

    var element = document.createElement('p');
    assert.equal(element.tagName, 'P');
  });

})(window.QUnit);
