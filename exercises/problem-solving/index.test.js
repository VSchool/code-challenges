const {
    largest,
    lettersWithStrings,
    isDivisible
} = require("./index");

describe("Problem Solving", () => {
   
    describe("Largest Function", () => {
        test("returns largest num in array", () => {
            expect(argest([3, 5, 2, 8, 1])).toBe(8)
            expect(largest([3, 6, -50, 20, -10, 44, 19])).toBe(44)
        })
    })

    describe("LettersWithStrings Function", () => {
        test("returns array of words that contain given character", () => {
            expect(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")).toEqual(["C%4!", "Hey!"])
            expect(lettersWithStrings(["Lol, Dog, Cat, Bird"], "o")).toEqual(["Lol", "Dog"])
        })
    })

    describe("Is Divisible Function", () => {
        test("returns a boolean whether num1 is divisible by num2", () => {
            expect(isDivisible(4, 2)).toBe(true)
            expect(isDivisible(9, 3) ).toBe(true)
            expect(isDivisible(15, 4)).toBe(false)
        })
    })

})
