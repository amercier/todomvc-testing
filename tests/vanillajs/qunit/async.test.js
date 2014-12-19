(function() {

  QUnit.module('Async');

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

})();
