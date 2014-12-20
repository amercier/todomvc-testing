/* global _someRandomVar:true */
/* jshint strict:false */
(function() {

  var _window = this;

  describe('Requirements', function() {

    it('Should run in a browser', function() {
      expect(typeof window).toEqual('object');
    });

    it('Should run within the window context', function() {
      expect(window).toEqual(_window);
      expect(window === _window).toBe(true);
    });

    it('Should assign global variables to the window object', function() {
      var VALUE = '_VALUE_' + Math.random() + '_' + new Date().getTime();
      _someRandomVar = VALUE;
      expect(_someRandomVar).toEqual(VALUE);
      expect(window._someRandomVar === _someRandomVar).toBe(true);
    });

    it('Should have access to the DOM', function() {
      expect(typeof document).toEqual('object');
      expect(Object.prototype.toString.apply(document)).toEqual('[object HTMLDocument]');

      var element = document.createElement('p');
      expect(element.tagName).toEqual('P');
    });

  });

})();
