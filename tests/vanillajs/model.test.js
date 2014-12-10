(function() {

  describe('Model', function() {

    it('Should add a Model function to the global app object', function() {
      assert.ok(!!app);
      assert.equal(typeof app, 'object');
      assert.ok(!!app.Model);
      assert.equal(typeof app.Model, 'function');
    });

    it('Should create a new instance', function() {
      var model = new app.Model();
      assert.ok(model instanceof app.Model);
    });

  });

})();
