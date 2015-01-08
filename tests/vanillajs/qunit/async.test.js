(function(QUnit) {
  'use strict';

  var foo1 = false;
  var foo2 = false;
  var nestedFoo = false;
  var promiseFoo = false;

  QUnit.module('Async', {
    beforeEach: function(assert) {
      var done1 = assert.async();
      var done2 = assert.async();
      setTimeout(function() {
        foo1 = true;
        setTimeout(function() {
          nestedFoo = true;
          done1();
        }, 50);
      }, 50);
      setTimeout(function() {
        foo2 = true;
        done2();
      }, 150);

      return new RSVP.Promise(function(resolve) {
        setTimeout(function() {
          promiseFoo = true;
          resolve();
        }, 200);
      }).promise;
    }
  });

  QUnit.test('It should wait for beforeEach to terminate', function(assert) {
    assert.expect(3);
    assert.ok(foo1, 'Test executed after timeout in beforeEach');
    assert.ok(foo2, 'Test executed after a second timeout in beforeEach');
    assert.ok(nestedFoo, 'Test executed after a nested timeout in beforeEach');
  });

  QUnit.test('It should support asynchronous tests', function(assert) {
    assert.expect(1);
    var done = assert.async();
    setTimeout(function() {
      assert.ok(true, 'Test resumed from async operation 1');
      done();
    }, 100);
  });

  QUnit.test('It should support multiple asynchronous tests', function(assert) {
    assert.expect(2);
    var done1 = assert.async();
    var done2 = assert.async();

    setTimeout(function() {
      assert.ok(true, 'Test resumed from async operation 1');
      done1();
    }, 200);

    setTimeout(function() {
      assert.ok(true, 'Test resumed from async operation 2');
      done2();
    }, 100);
  });

  QUnit.test('It should support nested asynchronous tests', function(assert) {
    assert.expect(2);
    var done1 = assert.async();

    setTimeout(function() {
      assert.ok(true, 'Test resumed from async operation');
      var done2 = assert.async();

      setTimeout(function() {
        assert.ok(true, 'Test resumed from nested async operation');
        done2();
      }, 100);

      done1();
    }, 100);
  });

  QUnit.test('It should wait for a Promise in beforeEach', function(assert) {
    assert.expect(1);
    assert.ok(nestedFoo, 'Test executed after a nested timeout in beforeEach');
  });

  QUnit.test('It should wait for a Promise', function(assert) {
    assert.expect(1);

    return new RSVP.Promise(function(resolve) {
      setTimeout(function() {
        assert.ok(nestedFoo, 'Test executed in the promise');
        resolve();
      }, 50);
    });
  });

})(window.QUnit);
