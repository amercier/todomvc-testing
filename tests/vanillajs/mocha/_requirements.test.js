(function() {


  describe('Requirements', function() {

    jsdom();

    it('Should have access to the window object', function() {
      assert.equal(typeof window, 'object');
    });

    // it('Should run within the window context', function() {
    //   var _window = this;
    //   assert.ok(window === _window);
    // });

    it('Should assign global variables to the window object', function() {
      var VALUE = '_VALUE_' + Math.random() + '_' + new Date().getTime();
      _someRandomVar = VALUE;
      assert.equal(_someRandomVar, VALUE);
      assert.ok(window._someRandomVar === _someRandomVar);
    });

    it('Should have access to the DOM', function() {
      // assert.equal(typeof document, 'object');
      // assert.equal(Object.prototype.toString.apply(document), '[object HTMLDocument]');

      var element = document.createElement('p');
      assert.equal(element.tagName, 'P');
    });

  });

})();
