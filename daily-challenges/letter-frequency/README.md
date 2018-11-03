Find the frequency of all characters in a given word or phrase, and return an object containing the letter counts.

Contain the characters and their counts within an object.
Each character will be its own key
Each value will be the character's frequency.

#### Example:
```js
function arrayIndex(str){
    // Return object with letter frequency
}

// Test
const phrase = "slimy smelly solution";
arrayIndex(phrase)
// Output: { s: 3, l: 4, i: 2, m: 2, y: 2, ' ': 2, e: 1, o: 2, u: 1, t: 1, n: 1 }
```

#### Hint
```js
function hint() {
    const obj = {}
    obj["s"] = 1
    return obj
}

console.log(hint());
// Output: {s: 1}
```

#### Extra Credit
Output the original string with all duplicate characters removed (i.e. "slimy eoutn").
Output the same object, sorted by frequency.