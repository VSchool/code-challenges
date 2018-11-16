Given a query object and an array of objects, write a function that returns an array of items that match the query.

If the query object is empty, return the entire array.
If the array contains no matches, return an empty array
#### Example:
```js
const database = [
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

filterDatabase({}, database);
    //returns entire database array

filterDatabase({dolphin: "squeak!"}, database);
    //returns empty array

filterDatabase({firstName: "Jack", age: 2}, database);
    //returns 
[
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jack", lastName: "White", age: 2}
]
```