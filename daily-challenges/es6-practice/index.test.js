const {runForLoop, filterForDogs, filterForFriendly, mapVegetables, printString, printWelcome, doMathSum, produceProduct} = require("./index")

xdescribe("const and let", () => {
    test("Function should return an 'John'", () => {	   
        expect(runForLoop()).toBe("John")
    })
})

describe("dog filter", () => {
    test("Should only keep dogs", () => {	   
        expect(filterForDogs([{type: "dog"}, {type: "cat"}])).toEqual([{type: "dog"}])
    })
})

describe("add", () => {
    test("Function should add two numbers", () => {	   
        expect(doMathSum(12, 24)).toBe(26)
    })
})

describe("multipling", () => {
    test("Should multiply two numbers", () => {	   
        expect(produceProduct(4, 12)).toBe(48)
    })
})

describe("people filter", () => {
    test("Should only keep friendlies", () => {	   
        expect(filterForFriendly([
            {
                name: 'Princess Peach',
                friendly: false
            },
            {
                name: 'Luigi',
                friendly: true
            },
            {
                name: 'Mario',
                friendly: true
            },
            {
                name: 'Bowser',
                friendly: false
            }
        ])).toEqual([{
            name: 'Luigi',
            friendly: true
        },
        {
            name: 'Mario',
            friendly: true
        }])
    })
})

describe("map vegetables", () => {
    test("Function should make array of objects out of array of strings", () => {	   
        expect(mapVegetables(["bright orange", "ripe", "rotten"])).toEqual([ { type: 'carrot', name: 'bright orange' },
        { type: 'carrot', name: 'ripe' },
        { type: 'carrot', name: 'rotten' } ])
    })
})

describe("Print string using defaults", () => {
    test("Nothing will be passed into printString", () => {	   
        expect(printString()).toBe("Hi Jane Doe, how does it feel to be 100?")
    })
})

describe("Print paragraph using template literals", () => {
    test("Name and location will be variable", () => {	   
        expect(printWelcome("Jason", "your worst nightmare")).toBe(`Hi Jason!

Welcome to your worst nightmare.

I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.`)
    })
})