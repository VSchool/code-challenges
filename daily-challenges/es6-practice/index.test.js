const {
    runForLoop,
    filterForDogs,
    filterForFriendly,
    mapVegetables,
    printString,
    printWelcome,
    doMathSum,
    produceProduct
} = require("./index")

describe("ES6 Practice", () => {
    describe("let and const", () => {
        test("Function should return 'John'", () => {
            expect(runForLoop()).toBe("John")
        })
    })

    describe("dog filter", () => {
        test("Should only keep dogs", () => {
            expect(filterForDogs([{ type: "dog" }, { type: "cat" }])).toEqual([
                { type: "dog" }
            ])
        })
    })

    describe("add", () => {
        test("should add two numbers", () => {
            expect(doMathSum(2, 4)).toBe(6)
        })
    })

    describe("multiply", () => {
        test("should multiply two numbers", () => {
            expect(produceProduct(4, 2)).toBe(8)
        })
    })

    describe("people filter", () => {
        test("should only keep friendlies", () => {
            const actual = filterForFriendly([
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
            ])
            const expected = [
                {
                    name: "Luigi",
                    friendly: true
                },
                {
                    name: "Mario",
                    friendly: true
                }
            ]
            expect(actual).toEqual(expected)
        })
    })

    describe("map vegetables", () => {
        test("should make array of objects out of array of strings", () => {
            expect(mapVegetables(["bright orange", "ripe", "rotten"])).toEqual([
                { type: "carrot", name: "bright orange" },
                { type: "carrot", name: "ripe" },
                { type: "carrot", name: "rotten" }
            ])
        })
    })

    describe("Print string using defaults", () => {
        test("Nothing will be passed into printString", () => {
            expect(printString()).toBe(
                "Hi Jane Doe, how does it feel to be 100?"
            )
        })

        test("Something is passed into printString", () => {
            expect(printString("Joe", "Schmoe", 30)).toBe(
                "Hi Joe Schmoe, how does it feel to be 30?"
            )
        })
    })

    describe("Print paragraph using template literals", () => {
        test("Name and location will be variable", () => {
            expect(printWelcome("Jason", "your worst nightmare"))
                .toBe(`Hi Jason!

Welcome to your worst nightmare.

I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.`)
        })
    })
})
