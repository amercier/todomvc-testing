(function() {

  var foo1 = false, foo2 = false, nestedFoo = false;

  describe('Async', function() {

    beforeEach(function (done) {
      var doneCount = 0;

      setTimeout(function() {
        foo1 = true;
        setTimeout(function() {
          nestedFoo = true;
          ++doneCount == 2 && done();
        }, 50);
      }, 50);
      setTimeout(function() {
        foo2 = true;
        ++doneCount == 2 && done();
      }, 150);
    });

    it('Should wait for beforeEach to terminate', function() {
      assert.ok(foo1, 'Test executed after timeout in beforeEach');
      assert.ok(foo2, 'Test executed after a second timeout in beforeEach');
      assert.ok(nestedFoo, 'Test executed after a nested timeout in beforeEach');
    });

    it('Should support asynchronous tests', function(done) {
      setTimeout(function() {
        assert.ok(true, 'Test resumed from async operation 1');
        done();
      }, 100);
    });

    it('Should support multiple asynchronous tests', function(done) {
      var doneCount = 0;

      setTimeout(function() {
        assert.ok(true, 'Test resumed from async operation 1');
        ++doneCount == 2 && done();
      }, 200);

      setTimeout(function() {
        assert.ok(true, 'Test resumed from async operation 2');
        ++doneCount == 2 && done();
      }, 100);
    });

    it('Should support nested asynchronous tests', function(done) {
      var doneCount = 0;
      setTimeout(function() {
        assert.ok(true, 'Test resumed from async operation');

        setTimeout(function() {
          assert.ok(true, 'Test resumed from nested async operation');
          ++doneCount == 2 && done();
        }, 100);

        ++doneCount == 2 && done();
      }, 100);
    });

  });

})();
