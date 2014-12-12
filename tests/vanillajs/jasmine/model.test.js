(function() {

  describe('Model', function() {

    it('Should add a Model function to the global app object', function() {
      expect(!!app).toBe(true);
      expect(typeof app).toEqual('object');
      expect(!!app.Model).toBe(true);
      expect(typeof app.Model).toEqual('function');
    });

    it('Should create a new instance of Model', function() {
      var model = new app.Model();
      expect(model instanceof app.Model).toBe(true);
    });

    it('Should create a new todo', function () {
      var store = new mocks.Store('_STORE_');
      var model = new app.Model(store);
      expect(store._data.todos.length).toEqual(0);
      model.create('_MODEL1_');
      expect(store._data.todos.length).toEqual(1);
      expect(store._data.todos[0].title).toEqual('_MODEL1_');
      expect(store._data.todos[0].completed).toEqual(false);
      expect(typeof store._data.todos[0].id).toEqual('number');
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
          expect(Object.prototype.toString.apply(data)).toEqual('[object Array]');
          expect(data.length).toEqual(3);
        });
      });

      it('Should read all todos matching a given id', function() {
        model.read(Number(store._data.todos[0].id), function(data) {
          expect(Object.prototype.toString.apply(data)).toEqual('[object Array]');
          expect(data.length).toEqual(1);
        });
        model.read(store._data.todos[0].id.toString(), function(data) {
          expect(Object.prototype.toString.apply(data)).toEqual('[object Array]');
          expect(data.length).toEqual(1);
        });
      });

      it('Should read all todos matching a given filter', function() {
        model.read({}, function (data) {
          expect(Object.prototype.toString.apply(data)).toEqual('[object Array]');
          expect(data.length).toEqual(3);
        });
        model.read({ id: store._data.todos[0].id }, function(data) {
          expect(Object.prototype.toString.apply(data)).toEqual('[object Array]');
          expect(data.length).toEqual(1);
        });
        model.read({ title: '_MODEL1_' }, function(data) {
          expect(Object.prototype.toString.apply(data)).toEqual('[object Array]');
          expect(data.length).toEqual(2);
        });
        model.read({ id: store._data.todos[0].id, title: '_MODEL1_' }, function(data) {
          expect(Object.prototype.toString.apply(data)).toEqual('[object Array]');
          expect(data.length).toEqual(1);
        });
      });
    })();

  });

})();
