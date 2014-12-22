# rix
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

[wip] Reactive interface library built for browserify. Features include:
- [virtual dom](https://github.com/Matt-Esch/virtual-dom)
- small, readable source
- event based interface
- es6 ready
- easily testable
- flux compatible

## Installation
```bash
$ npm install rix
```

## Usage
```js
const rix = require('rix')

const button = rix.dom((dom, state, props) => {
  return dom('button', { onClick: handleClick }, [state.text])
})

button.on('mount', (el, state, props) => {
  state = {
    text: 'click me',
    count: 0
  }
})

document.body.appendChild(rix.createElement(button))

function handleClick(el, state, props, e) {
  const count = state.count++
  state = {
    text: 'clicked ' + count + ' times',
    count: count
  }
}
```

## Why?
Nowadays there's plenty of choice in ui libraries that have a virtual dom.
Unfortunately they all have shortcomings in terms of usability, scope or
learning curve. Rix tries to merge the best ideas from those libraries and
wrap them in a nice, event-based interface.

## See Also
- [wayfarer](https://github.com/yoshuawuyts/wayfarer) - tiny client router
- [barracks](https://github.com/yoshuawuyts/barracks) - event dispatcher
- [fax](https://github.com/yoshuawuyts/barracks) - client middleware
- [deku](https://github.com/segmentio/deku) - duo/component ui lib
- [ractive](https://github.com/ractivejs/ractive) - lib focused on data binding
- [mercury](https://github.com/Raynos/mercury) - modular framework
- [react](https://github.com/facebook/react) - mother of virtual doms

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/rix.svg?style=flat-square
[npm-url]: https://npmjs.org/package/rix
[travis-image]: https://img.shields.io/travis/yoshuawuyts/rix.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/rix
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/rix.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/rix?branch=master
[downloads-image]: http://img.shields.io/npm/dm/rix.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/rix
