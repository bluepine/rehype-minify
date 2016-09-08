'use strict';

/* eslint-disable import/no-extraneous-dependencies, no-script-url */

var test = require('tape');
var rehype = require('rehype');
var h = require('hastscript');
var min = require('./');

test('rehype-minify-javascript-script', function (t) {
  t.deepEqual(
    rehype().use(min).run(
      h('script', 'var name = "World";\nconsole.log("Hello, " + name + "!");')
    ),
    h('script', 'var name="World";console.log("Hello, "+name+"!");')
  );

  t.deepEqual(
    rehype().use(min).run(
      h('script', '(function () {var name = "World";\nconsole.log("Hello, " + name + "!");})()')
    ),
    h('script', '!function(){var o="World";console.log("Hello, "+o+"!")}();')
  );

  t.deepEqual(
    rehype().use(min).run(
      h('script', {type: 'fooscript'}, 'var name = "World";')
    ),
    h('script', {type: 'fooscript'}, 'var name = "World";')
  );

  t.deepEqual(
    rehype().use(min).run(
      h('script', {language: 'fooscript'}, 'var name = "World";')
    ),
    h('script', {language: 'fooscript'}, 'var name = "World";')
  );

  t.end();
});