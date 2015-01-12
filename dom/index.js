
const h      = require('virtual-dom/h')
const assert = require('assert')

module.exports = dom

// Create a dom element.
// @param  {String}      type
// @param  {Object|Null} props
// @param  {Mixed[]}     children
// @return {Object}
function dom(type, props, children) {
  assert.equal(typeof type, 'string')

  props = props || {}
  children = Array.isArray(children) ? children : [children]

  return h(type, props, children)
}
