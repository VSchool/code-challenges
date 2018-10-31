Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for "d", so "cope" and "cooe" would also count.

* Return the count, including any substitutions for the letter "d".

```js
function countCode(string) {  
  
}

//Output: 
// countCode("aaacodebbb") returns 1
// countCode("codexxcode") returns 2
// countCode("cozexxcope") returns 2
```

#### Extra credit
* Allow any uppercase characters to substitute for "c" 
* If both "c" and "d" are substituted with uppercase characters, multiply the count by two.
* If the string contains a palindrome, add the length of the palindrome to the count.