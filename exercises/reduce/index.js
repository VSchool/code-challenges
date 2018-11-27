// Turn an array of numbers into a total of all the numbers
function total(arr) {
    // Your code here
}

// Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    // Your code here
}

// Turn an array of voter objects into a count of how many people voted
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

function totalVotes(arr) {
    // Your code here
}


// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

function shoppingSpree(arr) {
    // Your code here
}


// Given an array of arrays, flatten them into a single array
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

function flatten(arr) {
    // Your code here
}


// Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, 
// how many from 26-35, how many from 36-55, and how many of each of those 
// age ranges actually voted. The resulting object containing this data should 
// have 6 properties. 
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

function voterResults(arr) {
    // Your code here
}



module.exports = {
    total,
    stringConcat,
    totalVotes,
    shoppingSpree,
    flatten,
    voterResults
}