(function() {

  var $container = document.getElementById('mocha-fixture'),
    template,
    store,
    model,
    view;
  if(!$container) {
    $container = document.createElement('div');
    $container.id = 'jasmine-fixture';
    document.body.appendChild($container);
  }

  beforeEach(function () {
    $container.innerHTML = '' +
      '<div id="todo-list"></div>' +
      '<div id="todo-count"></div>';
    template = new app.Template();
    store = new mocks.Store('_STORE_');
    model = new app.Model(store);
    view = new app.View(template);
  });

  afterEach(function () {
    $container.innerHTML = '';
  });

  describe('View', function () {

    it('showEntries displays all todos', function() {
      model.create('_MODEL1_');
      model.create('_MODEL2_');
      model.create('_MODEL3_');
      model.read(function (data) { view.render('showEntries', data); });

      assert.equal(document.querySelectorAll('#todo-list > *').length, 3);
      assert.equal(document.querySelector('#todo-list > :nth-child(1)').innerText.trim(), '_MODEL1_');
      assert.equal(document.querySelector('#todo-list > :nth-child(2)').innerText.trim(), '_MODEL2_');
      assert.equal(document.querySelector('#todo-list > :nth-child(3)').innerText.trim(), '_MODEL3_');
    });

    it('updateElementCount displays todos count', function() {
      model.create('_MODEL1_');
      model.read(function (data) { view.render('updateElementCount', data.length); });
      assert.equal(document.querySelector('#todo-count').innerText.trim(), '1 item left');

      model.create('_MODEL2_');
      model.create('_MODEL3_');
      model.read(function (data) { view.render('updateElementCount', data.length); });
      assert.equal(document.querySelector('#todo-count').innerText.trim(), '3 items left');
    });

  });
})();
