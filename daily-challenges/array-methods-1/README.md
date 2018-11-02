You should use multiple array methods to solve these problems. Don't use for loops!

Using the provided `peopleArray`, write a function that:

Return a list of everyone older than 18.
Have the new list sorted by last name.
Return each name and age with <li>'s.

#### Examples:
```js
var peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 29
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  },{
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13
  },{
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82
  }
]; 

sortedOfAge(peopleArray)
// Input: peopleArray
    // Output: 
    // ["<li>Kyle Mooney is 27</li>",
    //  "<li>Sarah Palin is 47</li>",
    //  "<li>Rick Sanchez is 78</li>",  
    //  "<li>Morty Smith is 29</li>",
    //  "<li>Lev Tolstoy is 82</li>"]
```


#### Extra Credit:
Using the same peopleArray, write tests and functions for the following:
* Create another array of one or more individuals and add it to the original array.
* Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
* Remove the second individual from the array.
* Return the array in reverse order.

