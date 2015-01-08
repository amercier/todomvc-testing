/* global _someRandomVar:true */
/* jshint strict:false */
(function(describe, it, expect) {

  var _window = this;

  describe('Requirements', function() {

    it('Should run in a browser', function() {
      expect(window).to.be.an('object');
    });

    it('Should run within the window context', function() {
      expect(window).to.deep.equal(_window);
      expect(window === _window).to.be.true;
    });

    it('Should assign global variables to the window object', function() {
      var VALUE = '_VALUE_' + Math.random() + '_' + new Date().getTime();
      _someRandomVar = VALUE;
      expect(_someRandomVar).to.equal(VALUE);
      expect(window._someRandomVar === _someRandomVar).to.be.true;
    });

    it('Should have access to the DOM', function() {
      expect(document).to.be.an('object');
      expect(Object.prototype.toString.apply(document)).to.equal('[object HTMLDocument]');

      var element = document.createElement('p');
      expect(element.tagName).to.equal('P');
    });

  });

})(
  window.describe,
  window.it,
  chai.expect
);
