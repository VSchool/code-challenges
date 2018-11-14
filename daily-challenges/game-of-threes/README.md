Write a recursive function that takes two integers, `n` and `counter` as parameters and does the following:

If the `n` is divisible by three, divide it by three and call the function again, providing the new value as `n` and `counter` + 1 as `counter`.

If not, either add or subtract `1` to a get a new value that is divisible by three and repeat step 1.

If `n` is one, simply return the value `counter`.

#### Example
```js
function gameOfThrees(n, counter){
    // your code here
}

gameOfThrees(10000, 0)
// Output:  8
```