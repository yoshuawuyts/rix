# events
Rix uses an event system very similar to react. The way that events are
exposed is similar to node's `require('events').EventEmitter`.

###### render
```js
button.on('render', function(dom, state, props) {
  return dom('button', null, ['click me']);
})
```

###### beforeMount
```js
button.on('beforeMount', function(instance, el, state, props) {
 // do other stuff
})
```

###### mount
```js
button.on('mount', function(instance, el, state, props) {
 // do other stuff
})
```

###### afterMount
```js
button.on('afterMount', function(instance, el, state, props) {
 // do other stuff
})
```

###### beforeUpdate
```js
button.on('beforeUpdate', function(instance, el, state, props) {
 // do other stuff
})
```

###### afterUpdate
```js
button.on('afterUpdate', function(instance, el, state, props) {
 // do other stuff
})
```

###### shouldUpdate
```js
button.on('shouldUpdate', function(instance, el, state, props) {
 // do other stuff
})
```
