# rix
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

[wip] Reactive interface library built for browserify.

## Installation
```bash
$ npm install rix
```

## Usage
```js
const el     = require('rix')
const button = el()

button.on('render', function(dom, state, props) {
  return dom('button', null, ['click me']);
})

button.on('mount', function(instance, el, state, props) {
 // do other stuff
})

button.render(document.querySelector('body'))
```

## Why?
React is getting bloated and doesn't play nice with the DOM. There are some
alternatives like [deku](https://github.com/segmentio/deku) but they all have
shortcomings. What we need is a library that plays well with the dom, uses js,
has a virtual dom and a very small interface. Rix tries to be that library.

## See Also
- [wayfarer](https://github.com/yoshuawuyts/wayfarer) - tiny client router
- [barracks](https://github.com/yoshuawuyts/barracks) - event dispatcher
- [deku](https://github.com/segmentio/deku) - duo/component ui lib
- [ractive](https://github.com/ractivejs/ractive) - lib focused on data binding
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
