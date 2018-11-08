Write two functions that mimic the `.every` and `.some` array methods.

`every(arr, callback)`: Given an array and a callback function, return `true` or `false` based on whether each element of the array, when inserted as a parameter to the callback, returns `true`.

#### Example
```js
// Test
every([1,2,"3"], (num) => {
  return typeof num === "number"
})
// returns  false
```

`some(arr, callback)`: Given an array and a callback function, return `true` or `false` based on whether at least ONE element of the array, when inserted as a parameter to the callback, returns `true`.

#### Example
```js
some(["ben", "jacob", "bob"], (name) => {
  return name === "jacob"
})
// returns true
```