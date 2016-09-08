'use strict';

/* eslint-disable import/no-extraneous-dependencies */

var test = require('tape');
var rehype = require('rehype');
var h = require('hastscript');
var min = require('./');

test('rehype-minify-enumerated-attribute', function (t) {
  t.deepEqual(
    rehype().use(min).run(
      h('meta', {charSet: 'utf-8'})
    ),
    h('meta', {charSet: 'utf8'})
  );

  t.deepEqual(
    rehype().use(min).run(
      h('meta', {charSet: 'x-mac-roman'})
    ),
    h('meta', {charSet: 'mac'})
  );

  t.deepEqual(
    rehype().use(min).run(
      h('track', {kind: 'metadata', src: 'example.vtt'})
    ),
    h('track', {kind: 'a', src: 'example.vtt'})
  );

  t.deepEqual(
    rehype().use(min).run(
      h('track', {kind: 'invalid'})
    ),
    h('track', {kind: 'a'})
  );

  t.deepEqual(
    rehype().use(min).run(
      h('track', {kind: 'subtitles'})
    ),
    {
      type: 'element',
      tagName: 'track',
      properties: {kind: null},
      children: []
    }
  );

  t.deepEqual(
    rehype().use(min).run(
      h('button', {type: 'submit'})
    ),
    {
      type: 'element',
      tagName: 'button',
      properties: {type: null},
      children: []
    }
  );

  t.deepEqual(
    rehype().use(min).run(
      h('area', {shape: 'rect'})
    ),
    {
      type: 'element',
      tagName: 'area',
      properties: {shape: null},
      children: []
    }
  );

  t.deepEqual(
    rehype().use(min).run(
      h('area', {shape: 'rectangle'})
    ),
    {
      type: 'element',
      tagName: 'area',
      properties: {shape: null},
      children: []
    }
  );

  t.deepEqual(
    rehype().use(min).run(
      h('area', {shape: 'invalid'})
    ),
    {
      type: 'element',
      tagName: 'area',
      properties: {shape: null},
      children: []
    }
  );

  t.deepEqual(
    rehype().use(min).run(
      h('div', {translate: 'invalid'})
    ),
    h('div', {translate: 'invalid'})
  );

  t.end();
});