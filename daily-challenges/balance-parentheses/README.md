Given a string including parentheses, write a function that returns true if every opening parentheses has a closing parentheses.

#### Example
```js
function balanceParentheses(str){
    // Your code here
}

balanceParentheses("()()") // Output: true
balanceParentheses("(())") // Output:  true
balanceParentheses("()))") // Output:  false
```

Also, every closing parentheses needs an opening partner before it.

```js
balanceParentheses(")()(") // Output:  false
balanceParentheses("())(") // Output:  false
```