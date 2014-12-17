todomvc-testing
===============

[![Build Status](http://img.shields.io/travis/amercier/todomvc-testing/master.svg?style=flat-square)](https://travis-ci.org/amercier/todomvc-testing)

Shows examples of Javascript automated testing using [TodoMVC](http://todomvc.com/) as an example:
- Testem, Mocha and Blanket (Vanilla JS)
- Testem, QUnit and Blanket (Vanilla JS)
- Testem, Jasmine and Blanket (Vanilla JS)

Installation
------------

1. Clone this repo:

  ```
  git clone https://github.com/amercier/todomvc-testing.git
  cd todomvc-testing
  ```

2. Install submodules

  ```
  git submodule init
  git submodule update
  ```

3. Install NPM modules

  ```
  npm install
  ```

  > Note: this will automatically install Bower components as 'bower install' is
  > registered in NPM install hook.

4. Run tests

  Example using Testem, QUnit and Blanket (see [package.json](package.json) for others):

  ```
  npm run test-vanillajs-qunit
  ```
