const {
    combineFruit,
    parseSentence,
    returnFirst,
    collectAnimals,
    returnFavorites,
    combineAnimals,
    product,
    unshift,
    populatePeople
} = require("./index")

describe("ES6 Practice slope style", () => {
    describe("Collect animals", () => {
        test("Function should return an array of all arguments passed to it.", () => {
            expect(
                collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")
            ).toEqual(["dog", "cat", "mouse", "jackolope", "platypus"])
        })
    })

    describe("Return favorites", () => {
        test("Function should return 'John'", () => {
            expect(
                combineFruit(
                    combineFruit(["apple", "pear"], ["cake", "pie"], ["carrit"])
                )
            ).toEqual({
                fuit: ["apple", "pear"],
                sweets: ["cake", "pie"],
                vegetables: ["carrit"]
            })
        })
    })

    describe("Parse sentence", () => {
        test("Function should print out string using variables defined in the parenthesis", () => {
            expect(
                parseSentence({ location: "Burly Idaho", duration: "2 weeks" })
            ).toBe("We're going to have a good time in Burly Idaho for 2 weeks")
        })
    })

    describe("Return first item in array", () => {
        test("Function should take array and return the first item from it", () => {
            expect(returnFirst([1, 2, 3])).toBe(1)
        })
    })

    describe("Return string describing favorites", () => {
        test("Function should take array of favorite items and return a fun string", () => {
            expect(
                returnFavorites([
                    "magnets",
                    "snowboarding",
                    "philanthropy",
                    "janitor work",
                    "eating"
                ])
            ).toBe(
                "My top three favorite activities are: magnets, snowboarding, and philanthropy"
            )
        })
    })
})
