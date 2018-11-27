const {
    reversedStr,
    isNum,
    isEven,
    averageArray,
    combineArrays
} = require("./index.js")


describe("Practice Problems Exercise", () => {

    describe("Reversed String function", () => {
        test("returns given string reversed", () => {
            expect(reversedStr("Hello World")).toBe("dlroW olleH")
        })
    })

    describe("Is Num function", () => {
        test("returns a boolean whether or not given argument is a number", () => {
            expect(isNum(3)).toBe(true)
            expect(isNum("three")).toBe(false)
        })
    })

    describe("Is Even function", () => {
        test("returns true if the number is even, and odd if it's false", () => {
            expect(isEven(2)).toBe(true)
            expect(isEven(3)).toBe(false)
        })
    })

    describe("Average Array function", () => {
        test("returns average of all numbers in array", () => {
            expect(averageArray([1, 2, 3])).toBe(2)
            expect(averageArray([5, -10, 10, 20])).toBe(6.25)
        })
    })

    describe("Combine Arrays function", () => {
        test("returns the two arrays as a single array with items alternated", () => {
            expect(combineArrays(["a", "b", "c"], [1, 2, 3]))
                .toEqual(["a", 1, "b", 2, "c", 3])
        })
    })

})