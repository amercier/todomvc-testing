(function() {
  var jsdom = require('mocha-jsdom');

  describe('Model', function() {

    jsdom();
    require('../mocks/store.mock');
    require('../../../app/examples/vanillajs/js/model');

    it('Should add a Model function to the global app object', function() {
      assert.ok(!!app);
      assert.equal(typeof app, 'object');
      assert.ok(!!app.Model);
      assert.equal(typeof app.Model, 'function');
    });

    it('Should create a new instance of Model', function() {
      var model = new app.Model();
      assert.ok(model instanceof app.Model);
    });

    it('Should create a new todo', function () {
      var store = new mocks.Store('_STORE_');
      var model = new app.Model(store);
      assert.equal(store._data.todos.length, 0);
      model.create('_MODEL1_');
      assert.equal(store._data.todos.length, 1);
      assert.equal(store._data.todos[0].title, '_MODEL1_');
      assert.equal(store._data.todos[0].completed, false);
      assert.equal(typeof store._data.todos[0].id, 'number');
    });

    // read
    (function() {
      var store = new mocks.Store('_STORE_');
      var model = new app.Model(store);
      model.create('_MODEL1_');
      model.create('_MODEL1_');
      model.create('_MODEL2_');

      it('Should read all todos', function() {
        model.read(function (data) {
          assert.equal(Object.prototype.toString.apply(data), '[object Array]');
          assert.equal(data.length, 3);
        });
      });

      it('Should read all todos matching a given id', function() {
        model.read(Number(store._data.todos[0].id), function(data) {
          assert.equal(Object.prototype.toString.apply(data), '[object Array]');
          assert.equal(data.length, 1);
        });
        model.read(store._data.todos[0].id.toString(), function(data) {
          assert.equal(Object.prototype.toString.apply(data), '[object Array]');
          assert.equal(data.length, 1);
        });
      });

      it('Should read all todos matching a given filter', function() {
        model.read({}, function (data) {
          assert.equal(Object.prototype.toString.apply(data), '[object Array]');
          assert.equal(data.length, 3);
        });
        model.read({ id: store._data.todos[0].id }, function(data) {
          assert.equal(Object.prototype.toString.apply(data), '[object Array]');
          assert.equal(data.length, 1);
        });
        model.read({ title: '_MODEL1_' }, function(data) {
          assert.equal(Object.prototype.toString.apply(data), '[object Array]');
          assert.equal(data.length, 2);
        });
        model.read({ id: store._data.todos[0].id, title: '_MODEL1_' }, function(data) {
          assert.equal(Object.prototype.toString.apply(data), '[object Array]');
          assert.equal(data.length, 1);
        });
      });
    })();

  });
})();
