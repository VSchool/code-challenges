Given a multi-dimensional array containing only primitive data types (strings, booleans, and numbers), write a function that returns whether EACH element within each subarray belongs to the same data type.

for example:

function checkTypes(arr) {
    // Code here
}
```
const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]
checkTypes(multiD1)  
// returns false (inner arrays aren't consistent with each other's data types)

const multiD2 = [[true,false,true],[false,false,true]]
checkTypes(multiD2)  
// returns true (each inner array contains the same data type as the others)
```
