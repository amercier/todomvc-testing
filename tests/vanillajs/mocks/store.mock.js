require('./browser.mock.js');

/*jshint eqeqeq:false */
(function (window) {
  'use strict';

  function StoreMock(name, callback) {
    callback = callback || function () {};
    this._data = {
      todos: []
    };
    callback.call(this, this._data);
  }

  StoreMock.prototype.find = function (query, callback) {
    if (!callback) {
      return;
    }

    var todos = this._data.todos;

    callback.call(this, todos.filter(function (todo) {
      for (var q in query) {
        if (query[q] !== todo[q]) {
          return false;
        }
      }
      return true;
    }));
  };

  StoreMock.prototype.findAll = function (callback) {
    callback = callback || function () {};
    callback.call(this, this._data.todos);
  };

  StoreMock.prototype.save = function (updateData, callback, id) {
    var data = this._data;
    var todos = data.todos;

    callback = callback || function () {};

    // If an ID was actually given, find the item and update each property
    if (id) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          for (var key in updateData) {
            todos[i][key] = updateData[key];
          }
          break;
        }
      }

      this._data = data;
      callback.call(this, this._data.todos);
    } else {
      // Generate an ID
      updateData.id = Math.round(new Date().getTime() * Math.random());

      todos.push(updateData);
      this._data = data;
      callback.call(this, [updateData]);
    }
  };

  StoreMock.prototype.remove = function (id, callback) {
    var data = this._data;
    var todos = data.todos;

    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        todos.splice(i, 1);
        break;
      }
    }

    this._data = data;
    callback.call(this, this._data.todos);
  };

  StoreMock.prototype.drop = function (callback) {
    this._data = {todos: []};
    callback.call(this, this._data.todos);
  };

  // Export to window
  window.mocks = window.mocks || {};
  window.mocks.Store = StoreMock;
})(window);
