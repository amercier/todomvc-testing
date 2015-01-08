(function(describe, it, expect) {
  'use strict';

  describe('Model', function() {

    it('Should add a Model function to the global app object', function() {
      expect(app).to.exist;
      expect(app).to.be.an('object');
      expect(app.Model).to.exist;
      expect(app.Model).to.be.a('function');
    });

    it('Should create a new instance of Model', function() {
      var model = new app.Model();
      expect(model).to.be.an.instanceof(app.Model);
    });

    it('Should create a new todo', function () {
      var store = new mocks.Store('_STORE_');
      var model = new app.Model(store);
      expect(store._data.todos).to.be.empty;
      model.create('_MODEL1_');
      expect(store._data.todos).to.have.length(1);
      expect(store._data.todos[0].title).to.equal('_MODEL1_');
      expect(store._data.todos[0].completed).to.be.false;
      expect(store._data.todos[0].id).to.be.a('number');
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
          expect(Object.prototype.toString.apply(data)).to.equal('[object Array]');
          expect(data).to.have.length(3);
        });
      });

      it('Should read all todos matching a given id', function() {
        model.read(Number(store._data.todos[0].id), function(data) {
          expect(Object.prototype.toString.apply(data)).to.equal('[object Array]');
          expect(data).to.have.length(1);
        });
        model.read(store._data.todos[0].id.toString(), function(data) {
          expect(Object.prototype.toString.apply(data)).to.equal('[object Array]');
          expect(data).to.have.length(1);
        });
      });

      it('Should read all todos matching a given filter', function() {
        model.read({}, function (data) {
          expect(Object.prototype.toString.apply(data)).to.equal('[object Array]');
          expect(data).to.have.length(3);
        });
        model.read({ id: store._data.todos[0].id }, function(data) {
          expect(Object.prototype.toString.apply(data)).to.equal('[object Array]');
          expect(data).to.have.length(1);
        });
        model.read({ title: '_MODEL1_' }, function(data) {
          expect(Object.prototype.toString.apply(data)).to.equal('[object Array]');
          expect(data).to.have.length(2);
        });
        model.read({ id: store._data.todos[0].id, title: '_MODEL1_' }, function(data) {
          expect(Object.prototype.toString.apply(data)).to.equal('[object Array]');
          expect(data).to.have.length(1);
        });
      });
    })();

  });

})(
  window.describe,
  window.it,
  chai.expect
);
