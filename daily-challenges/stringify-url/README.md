
#### Part 1
Write a function that takes a query object and an HTTP endpoint and then returns a URL with a query string.

#### Example:
```js
function stringifyUrl(url, query) {
    // your code here
}

const url = "http://localhost:8080/monkeys"
const query = {
  color: "black",
  species: "howler"
}

stringifyUrl(url, query)
// returns "http://localhost:8080/monkeys?color=black&species=howler"
```

#### Part 2

Write a function that does the opposite from above: given a valid URL with a query string attached, return a query object.

