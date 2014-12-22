# events
Rix uses an event system very similar to react. The way that events are
exposed is similar to node's `require('events').EventEmitter`.

```js
button.on('beforeMount', (el, state, props) {})
button.on('mount', (el, state, props) {})
button.on('afterMount', (el, state, props) {})
button.on('shouldUpdate', (el, state, props) {})
button.on('beforeUpdate', (el, state, props) {})
button.on('afterUpdate', (el, state, props) {})
```

###### beforeMount
```js
button.on('beforeMount', (el, state, props) {})
```

###### mount
```js
button.on('mount', (el, state, props) {})
```

###### afterMount
```js
button.on('afterMount', (el, state, props) {})
```

###### beforeUpdate
```js
button.on('beforeUpdate', (el, state, props) {})
```

###### afterUpdate
```js
button.on('afterUpdate', (el, state, props) {})
```

###### shouldUpdate
```js
button.on('shouldUpdate', (el, state, props) {})
```
