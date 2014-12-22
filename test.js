var window = require('global/window')
var test   = require('tape')
var rix = require('./')

test('should expose an object', function(t) {
  t.plan(1)
  t.equal(typeof rix, 'object', 'typeof rix')
})

test('should expose `createElement()`', function(t) {
  t.plan(1)
  t.ok(rix.createElement, 'exists')
})

test('should expose `dom()`', function(t) {
  t.plan(1)
  t.ok(rix.dom, 'exists')
})

require('./dom/test')
// require('./createElement/test')

test('shutdown', function(t) {
  window.close()
  t.end()
})
