
const dom  = require('../')
const test = require('tape')

test('.dom() should assert input types', function(t) {
  t.plan(1)
  t.throws(dom.bind(dom))
})

test('.dom() should return a vdom element', function(t) {
  t.plan(1)
  t.equal(dom('div').tagName, 'div')
})
