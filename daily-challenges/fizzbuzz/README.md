Write a function that returns an `array` containing the numbers `1` through `100` with the following stipulations:

* If the number is divisible by 3, it should be replaced by `"fizz"`.
* If the number is divisible by 5, replace it with `"buzz"`.
* If the number is divisible by both 3 and 5, replace it with `"fizzbuzz"`.

#### Example:
```js
fizzBuzz();
// returns [1, 2, "fizz", 4, "buzz", ... , 98, "fizz", "buzz"];
```

#### Optional:

* Write a function that keeps a tally of how often the phrases `"fizz"`,`"buzz"`, and `"fizzbuzz"` occur in the array returned from the previous function. 
* It should return an object that looks like this: 
```js
{ 
    fizzbuzz: 6, 
    fizz: 27, 
    buzz: 14 
}
```