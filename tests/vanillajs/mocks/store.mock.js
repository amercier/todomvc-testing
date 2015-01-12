/*jshint eqeqeq:false */
(function(window) {
  "use strict";

  function StoreMock(name, callback) {
    callback = callback || function() {};
    this._data = {
      todos: []
    };
    callback.call(this, this._data);
  }

  StoreMock.prototype.find = function(query, callback) {
    if (!callback) {
      return;
    }

    var todos = this._data.todos;

    callback.call(this, todos.filter(function(todo) {
      var q;
      for (q in query) {
        if (query.hasOwnProperty(q)) {
          if (query[q] !== todo[q]) {
            return false;
          }
        }
      }
      return true;
    }));
  };

  StoreMock.prototype.findAll = function(callback) {
    callback = callback || function() {};
    callback.call(this, this._data.todos);
  };

  StoreMock.prototype.save = function(updateData, callback, id) {
    var data = this._data,
        todos = data.todos,
        i,
        key;

    callback = callback || function() {};

    // If an ID was actually given, find the item and update each property
    if (id) {
      for (i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          for (key in updateData) {
            if (updateData.hasOwnProperty(key)) {
              todos[i][key] = updateData[key];
            }
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
      callback.call(this, [ updateData ]);
    }
  };

  StoreMock.prototype.remove = function(id, callback) {
    var data = this._data,
        todos = data.todos,
        i;

    for (i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        todos.splice(i, 1);
        break;
      }
    }

    this._data = data;
    callback.call(this, this._data.todos);
  };

  StoreMock.prototype.drop = function(callback) {
    this._data = { todos: [] };
    callback.call(this, this._data.todos);
  };

  // Export to window
  window.mocks = window.mocks || {};
  window.mocks.Store = StoreMock;
})(window);
