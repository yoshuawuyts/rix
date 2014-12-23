var window = require('global/window')
var test   = require('tape')
var rix = require('./')

test('should expose an object', function(t) {
  t.plan(1)
  t.equal(typeof rix, 'object', 'typeof rix')
  t.end()
})

test('should expose `createElement()`', function(t) {
  t.plan(1)
  t.ok(rix.createElement, 'exists')
  t.end()
})

test('should expose `dom()`', function(t) {
  t.plan(1)
  t.ok(rix.dom, 'exists')
  t.end()
})

// require('./dom/test')
// require('./createElement/test')

test('shutdown', function(t) {
  t.plan(0)
  setTimeout(function() {
    window.close()
  }, 10)
  t.end()
})
