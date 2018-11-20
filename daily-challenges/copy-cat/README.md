Write a function that takes an object as a parameter and returns a "deep copy" of it. A "deep copy" is where the two objects have all the same properties and values as each other, but are living at different memory addresses. If one of them changes, the other is unaffected.

Therefore, the new object your function returns should have all the same properties and values of the original. But in the spirit of [pure functions](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976), your function should not modify the original object.

#### Example:
```js
function copyCat(obj) {
   // copy the object and return the copy
}

const person = {name: "Joe"}
const copy = copyCat(person);

console.log(person.name) // "Joe"
console.log(copy.name)  // "Joe"

person.name = "Jane"

console.log(person.name) // "Jane"
console.log(copy.name)  // "Joe" (remains unchanged because it is a "deep copy" of the original)
```
