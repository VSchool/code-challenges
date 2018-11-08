///////////////
// GREEN CIRCLE
///////////////

function collectAnimals(/*your code here*/) {
    /*and here*/
}

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");

function combineFruit(/*your code here*/) {
    return {
        /*your code here*/
    }
}

// combineFruit(["apple", "pear"],
// ["cake", "pie"],
// ["carrit"])

function returnFirst(items) {
    const firstItem = items[0] /*change this line to be es6*/
    return firstItem
}

const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
}

function parseSentence(/*your code here*/) {
    return `We're going to have a good time in ${location} for ${duration}`
}

const favoriteActivities = [
    "magnets",
    "snowboarding",
    "philanthropy",
    "janitor work",
    "eating"
]

function returnFavorites(arr) {
    /*your code here*/
    return (
        "My top three favorite activities are: " +
        firstFav +
        ", " +
        secondFav +
        ", and " +
        thirdFav
    )
}

// returnFavorites(favoriteActivities)

///////////////
// BlUE SQUARE
///////////////

function combineAnimals() {}

const realAnimals = ["dog", "cat", "mouse"]
const magicalAnimals = ["jackolope"]
const mysteriousAnimals = ["platypus"]

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)

// ["dog", "cat", "mouse", "jackolope", "platypus"]

////////////////
// BLACK DIAMOND
////////////////

function product(a, b, c, d, e) {
    var numbers = [a, b, c, d, e]

    return numbers.reduce(function(acc, number) {
        return acc * number
    }, 1)
}

function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array)
}

///////////////
// DOUBLE BLACK
///////////////

function populatePeople(names) {
    return names.map(function(name) {
        name = name.split(" ")
        // your code here
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])

//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

module.exports = {
    combineFruit,
    parseSentence,
    returnFirst,
    collectAnimals,
    returnFavorites,
    combineAnimals,
    product,
    unshift,
    populatePeople
}
