/* global _someRandomVar:true */
/* jshint strict:false */
(function() {

  var _window = this;

  describe('Requirements', function() {

    it('Should run in a browser', function() {
      assert.equal(typeof window, 'object');
    });

    it('Should run within the window context', function() {
      assert.equal(window, _window);
      assert.ok(window === _window);
    });

    it('Should assign global variables to the window object', function() {
      var VALUE = '_VALUE_' + Math.random() + '_' + new Date().getTime();
      _someRandomVar = VALUE;
      assert.equal(_someRandomVar, VALUE);
      assert.ok(window._someRandomVar === _someRandomVar);
    });

    it('Should have access to the DOM', function() {
      assert.equal(typeof document, 'object');
      assert.equal(Object.prototype.toString.apply(document), '[object HTMLDocument]');

      var element = document.createElement('p');
      assert.equal(element.tagName, 'P');
    });

  });

})();
