(function(QUnit) {
  "use strict";

  QUnit.module("Model");

  QUnit.test("It should add a Model function to the global app object", function(assert) {
    assert.ok(!!app);
    assert.equal(typeof app, "object");
    assert.ok(!!app.Model);
    assert.equal(typeof app.Model, "function");
  });

  QUnit.test("It should create a new instance of Model", function(assert) {
    var model = new app.Model();
    assert.ok(model instanceof app.Model);
  });

  QUnit.test("It should create a new todo", function(assert) {
    var store = new mocks.Store("_STORE_"),
      model = new app.Model(store);
    assert.equal(store._data.todos.length, 0);
    model.create("_MODEL1_");
    assert.equal(store._data.todos.length, 1);
    assert.equal(store._data.todos[0].title, "_MODEL1_");
    assert.equal(store._data.todos[0].completed, false);
    assert.equal(typeof store._data.todos[0].id, "number");
  });

  // read
  (function() {
    var store = new mocks.Store("_STORE_"),
      model = new app.Model(store);
    model.create("_MODEL1_");
    model.create("_MODEL1_");
    model.create("_MODEL2_");

    QUnit.test("It should read all todos", function(assert) {
      model.read(function(data) {
        assert.equal(Object.prototype.toString.apply(data), "[object Array]");
        assert.equal(data.length, 3);
      });
    });

    QUnit.test("It should read all todos matching a given id", function(assert) {
      model.read(Number(store._data.todos[0].id), function(data) {
        assert.equal(Object.prototype.toString.apply(data), "[object Array]");
        assert.equal(data.length, 1);
      });
      model.read(store._data.todos[0].id.toString(), function(data) {
        assert.equal(Object.prototype.toString.apply(data), "[object Array]");
        assert.equal(data.length, 1);
      });
    });

    QUnit.test("It should read all todos matching a given filter", function(assert) {
      model.read({}, function(data) {
        assert.equal(Object.prototype.toString.apply(data), "[object Array]");
        assert.equal(data.length, 3);
      });
      model.read({ id: store._data.todos[0].id }, function(data) {
        assert.equal(Object.prototype.toString.apply(data), "[object Array]");
        assert.equal(data.length, 1);
      });
      model.read({ title: "_MODEL1_" }, function(data) {
        assert.equal(Object.prototype.toString.apply(data), "[object Array]");
        assert.equal(data.length, 2);
      });
      model.read({ id: store._data.todos[0].id, title: "_MODEL1_" }, function(data) {
        assert.equal(Object.prototype.toString.apply(data), "[object Array]");
        assert.equal(data.length, 1);
      });
    });
  })();

})(window.QUnit);
