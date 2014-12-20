(function() {
  'use strict';

  QUnit.module('Model');

  test('It should add a Model function to the global app object', function() {
    QUnit.assert.ok(!!app);
    QUnit.assert.equal(typeof app, 'object');
    QUnit.assert.ok(!!app.Model);
    QUnit.assert.equal(typeof app.Model, 'function');
  });

  test('It should create a new instance of Model', function() {
    var model = new app.Model();
    QUnit.assert.ok(model instanceof app.Model);
  });

  test('It should create a new todo', function () {
    var store = new mocks.Store('_STORE_');
    var model = new app.Model(store);
    QUnit.assert.equal(store._data.todos.length, 0);
    model.create('_MODEL1_');
    QUnit.assert.equal(store._data.todos.length, 1);
    QUnit.assert.equal(store._data.todos[0].title, '_MODEL1_');
    QUnit.assert.equal(store._data.todos[0].completed, false);
    QUnit.assert.equal(typeof store._data.todos[0].id, 'number');
  });

  // read
  (function() {
    var store = new mocks.Store('_STORE_');
    var model = new app.Model(store);
    model.create('_MODEL1_');
    model.create('_MODEL1_');
    model.create('_MODEL2_');

    test('It should read all todos', function() {
      model.read(function (data) {
        QUnit.assert.equal(Object.prototype.toString.apply(data), '[object Array]');
        QUnit.assert.equal(data.length, 3);
      });
    });

    test('It should read all todos matching a given id', function() {
      model.read(Number(store._data.todos[0].id), function(data) {
        QUnit.assert.equal(Object.prototype.toString.apply(data), '[object Array]');
        QUnit.assert.equal(data.length, 1);
      });
      model.read(store._data.todos[0].id.toString(), function(data) {
        QUnit.assert.equal(Object.prototype.toString.apply(data), '[object Array]');
        QUnit.assert.equal(data.length, 1);
      });
    });

    test('It should read all todos matching a given filter', function() {
      model.read({}, function (data) {
        QUnit.assert.equal(Object.prototype.toString.apply(data), '[object Array]');
        QUnit.assert.equal(data.length, 3);
      });
      model.read({ id: store._data.todos[0].id }, function(data) {
        QUnit.assert.equal(Object.prototype.toString.apply(data), '[object Array]');
        QUnit.assert.equal(data.length, 1);
      });
      model.read({ title: '_MODEL1_' }, function(data) {
        QUnit.assert.equal(Object.prototype.toString.apply(data), '[object Array]');
        QUnit.assert.equal(data.length, 2);
      });
      model.read({ id: store._data.todos[0].id, title: '_MODEL1_' }, function(data) {
        QUnit.assert.equal(Object.prototype.toString.apply(data), '[object Array]');
        QUnit.assert.equal(data.length, 1);
      });
    });
  })();

})();
