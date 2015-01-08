(function(describe, it, expect) {
  'use strict';

  var foo1 = false, foo2 = false, nestedFoo = false;

  describe('Async', function() {

    beforeEach(function (done) {
      var doneCount = 0;

      setTimeout(function() {
        foo1 = true;
        setTimeout(function() {
          nestedFoo = true;
          if(++doneCount === 2) {
            done();
          }
        }, 50);
      }, 50);
      setTimeout(function() {
        foo2 = true;
        if(++doneCount === 2) {
          done();
        }
      }, 150);
    });

    it('Should wait for beforeEach to terminate', function() {
      expect(foo1, 'Test executed after timeout in beforeEach').to.be.true;
      expect(foo2, 'Test executed after a second timeout in beforeEach').to.be.true;
      expect(nestedFoo, 'Test executed after a nested timeout in beforeEach').to.be.true;
    });

    it('Should support asynchronous tests', function(done) {
      setTimeout(function() {
        expect(true).to.be.true;
        done();
      }, 100);
    });

    it('Should support multiple asynchronous tests', function(done) {
      var doneCount = 0;

      setTimeout(function() {
        expect(true).to.be.true;
        if(++doneCount === 2) {
          done();
        }
      }, 200);

      setTimeout(function() {
        expect(true).to.be.true;
        if(++doneCount === 2) {
          done();
        }
      }, 100);
    });

    it('Should support nested asynchronous tests', function(done) {
      var doneCount = 0;
      setTimeout(function() {
        expect(true).to.be.true;

        setTimeout(function() {
          expect(true).to.be.true;
          if(++doneCount === 2) {
            done();
          }
        }, 100);

        if(++doneCount === 2) {
          done();
        }
      }, 100);
    });

  });

})(
  window.describe,
  window.it,
  chai.expect
);
