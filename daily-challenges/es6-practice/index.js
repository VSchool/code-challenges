var name = "John"
var age = 101
var pets = ["cat", "dog"]
var petObjects = []

// let and const
function runForLoop() {
    for (var i = 0; i < pets.length; i++) {
        var pet = { type: pets[i] }
        if (pets[i] === "cat") {
            var name = "fluffy"
        } else {
            var name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}

// Arrow functions
// Task 1
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}

// Task 2
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return !!person.friendly
    })
}

// Task 3
function doMathSum(a, b) {
    return a + b
}

var produceProduct = function(a, b) {
    return a * b
}

// Task 4
function printString() {
    // Your code here
}

// Task 5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
]

function filterForDogs(arr) {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
}

// Template Literals
function printWelcome(name, location) {
    // Your code here
}

module.exports = {
    runForLoop,
    filterForDogs,
    filterForFriendly,
    mapVegetables,
    printString,
    printWelcome,
    doMathSum,
    produceProduct
}
