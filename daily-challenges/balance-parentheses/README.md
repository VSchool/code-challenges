Given a string including parentheses, write a function that returns true if every opening parenthesis has a closing parenthesis.

#### Example
```js
function balanceParenthesis(str){

}

// Test 1
const input1 = "()()" 
balanceParenthesis(input1)
// Output: true

// Test 2
const input2 = "(())"
balanceParenthesis(input2)
// Output:  true

// Test 3
const input3 = "()))" 
balanceParenthesis(input3)
// Output:  false
```

Also, every closing parentheses needs an opening partner before it.

```js
// Test 4
const input4 = ")()("
balanceParenthesis(input4)
// Output:  false

// Test 5
const input5 = "())("
balanceParenthesis(input5)
// Output:  false
```