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
      expect(foo1).toEqual(true);
      expect(foo2).toEqual(true);
      expect(nestedFoo).toEqual(true);
    });

    it('Should support asynchronous tests', function(done) {
      setTimeout(function() {
        expect(true).toEqual(true);
        done();
      }, 100);
    });

    it('Should support multiple asynchronous tests', function(done) {
      var doneCount = 0;

      setTimeout(function() {
        expect(true).toEqual(true);
        if(++doneCount === 2) {
          done();
        }
      }, 200);

      setTimeout(function() {
        expect(true).toEqual(true);
        if(++doneCount === 2) {
          done();
        }
      }, 100);
    });

    it('Should support nested asynchronous tests', function(done) {
      var doneCount = 0;
      setTimeout(function() {
        expect(true).toEqual(true);

        setTimeout(function() {
          expect(true).toEqual(true);
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
  jasmine.getGlobal().describe,
  jasmine.getGlobal().it,
  jasmine.getGlobal().expect
);
