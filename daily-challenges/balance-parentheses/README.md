Given a string including parentheses, write a function that returns true if every opening parentheses has a closing parentheses.

#### Example
```js
function balanceParentheses(str){

}

// Test 1
const input1 = "()()" 
balanceParentheses(input1)
// Output: true

// Test 2
const input2 = "(())"
balanceParentheses(input2)
// Output:  true

// Test 3
const input3 = "()))" 
balanceParentheses(input3)
// Output:  false
```

Also, every closing parentheses needs an opening partner before it.

```js
// Test 4
const input4 = ")()("
balanceParentheses(input4)
// Output:  false

// Test 5
const input5 = "())("
balanceParentheses(input5)
// Output:  false
```