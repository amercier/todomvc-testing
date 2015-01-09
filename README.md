todomvc-testing
===============

[![Build Status](http://img.shields.io/travis/amercier/todomvc-testing/master.svg?style=flat-square)](https://travis-ci.org/amercier/todomvc-testing/builds)
[![Dependencies](https://img.shields.io/david/amercier/todomvc-testing.svg?style=flat-square)](https://david-dm.org/amercier/todomvc-testing#info=dependencies&view=table)
[![DevDependencies](https://img.shields.io/david/dev/amercier/todomvc-testing.svg?style=flat-square)](https://david-dm.org/amercier/todomvc-testing#info=devDependencies&view=table)

Shows examples of Javascript automated testing using [TodoMVC](http://todomvc.com/) as an example:

<table>
  <tr>
    <th rowspan="2">Platform</th>
    <th rowspan="2">Runner</th>
    <th rowspan="2">Coverage</th>
    <th colspan="3">Framework</th>
  </tr>
  <tr>
    <td>Jasmine</td>
    <td>Mocha + Chai</td>
    <td>QUnit</td>
  </tr>
  <tr>
    <td rowspan="6">Browser</td>
    <td rowspan="3">Karma</td>
    <td>(none)</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Blanket</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Istanbul</td>
    <td>
      ✓ Vanilla JS  
    </td>
    <td>
      ✓ Vanilla JS  
    </td>
    <td>
      ✓ Vanilla JS  
    </td>
  </tr>
  <tr>
    <td rowspan="3">Testem</td>
    <td>(none)</td>
    <td>
      ✓ Vanilla JS  
    </td>
    <td>
      ✓ Vanilla JS  
    </td>
    <td>
      ✓ Vanilla JS  
    </td>
  </tr>
    <td>Blanket</td>
    <td>
      ✓ Vanilla JS  
    </td>
    <td>
      ✓ Vanilla JS  
    </td>
    <td>
      ✓ Vanilla JS  
    </td>
  </tr>
  <tr>
    <td>Istanbul</td>
    <td></td>
    <td><a href="https://github.com/amercier/todomvc-testing/pull/7">PR#7</a></td>
    <td></td>
  </tr>
  <tr>
    <td>node.js</td>
    <td colspan="5"><a href="https://github.com/amercier/todomvc-testing/pull/1">PR#1</a></td>
  </tr>
</table>


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

  Example using Testem, QUnit and Blanket (use `npm run list` for list all):

  ```
  npm run testem-test-vanillajs-qunit
  ```
