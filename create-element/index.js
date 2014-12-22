const create = require('virtual-dom/create-element');
const diff   = require('virtual-dom/diff');
const patch  = require('virtual-dom/patch');
const assert = require('assert')
const raf    = require('raf')

module.exports = createElement

// Create a new dom element and start the scene.
// @param {Object} el
// @param {Object} props
// @return {DOMElement}
function createElement(el, props) {
  assert.equal(typeof el, 'function')
  assert.equal(typeof props, 'object')

  var tree     = el(props)
  var rootNode = create(tree)

  raf(scene)

  function scene() {
    const newTree = el(props)
    const patches = diff(tree, newTree)
    rootNode      = patch(rootNode, patches)
    tree          = newTree
    raf(scene)
  }
}
