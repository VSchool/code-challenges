Write a function called `antiCaps`, which accepts a string and manipulates it as follows.

* Uppercase characters will become lowercase.
* Lowercase characters will become uppercase.

```js
antiCaps('Hello')  // hELLO
antiCaps('racEcar')  // RACeCAR
antiCaps('bAnAnA')  // BaNaNa
```

###### Hint
Here is a helper function that will return `true` if the letter is uppercase, and `false` if the letter is lowercase:

```js
function isCaps(letter) {
  return letter === letter.toUpperCase();
}
```

#### Extra credit
* Have the function return double letters if originally uppercase
* Have the function return the letter and a symbol if originally lowercase.