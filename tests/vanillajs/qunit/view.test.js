(function() {

  var $container = document.getElementById('qunit-fixture'),
    template,
    store,
    model,
    view;
  if(!$container) {
    $container = document.createElement('div');
    $container.id = 'jasmine-fixture';
    document.body.appendChild($container);
  }

  QUnit.module('View', {
    beforeEach: function () {
      $container.innerHTML = '' +
        '<div id="todo-list"></div>' +
        '<div id="todo-count"></div>';
      template = new app.Template();
      store = new mocks.Store('_STORE_');
      model = new app.Model(store);
      view = new app.View(template);
    },
    afterEach: function () {
      $container.innerHTML = '';
    }
  });

  test('showEntries displays all todos', function() {
    model.create('_MODEL1_');
    model.create('_MODEL2_');
    model.create('_MODEL3_');
    model.read(function (data) { view.render('showEntries', data); });

    QUnit.assert.equal(document.querySelectorAll('#todo-list > *').length, 3);
    QUnit.assert.strictEqual(document.querySelector('#todo-list > :nth-child(1)').innerText.trim(), '_MODEL1_');
    QUnit.assert.strictEqual(document.querySelector('#todo-list > :nth-child(2)').innerText.trim(), '_MODEL2_');
    QUnit.assert.strictEqual(document.querySelector('#todo-list > :nth-child(3)').innerText.trim(), '_MODEL3_');
  });

  test('updateElementCount displays todos count', function() {
    model.create('_MODEL1_');
    model.read(function (data) { view.render('updateElementCount', data.length); });
    QUnit.assert.strictEqual(document.querySelector('#todo-count').innerText.trim(), '1 item left');

    model.create('_MODEL2_');
    model.create('_MODEL3_');
    model.read(function (data) { view.render('updateElementCount', data.length); });
    QUnit.assert.strictEqual(document.querySelector('#todo-count').innerText.trim(), '3 items left');
  });

})();
