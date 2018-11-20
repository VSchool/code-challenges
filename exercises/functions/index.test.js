const { 
    sum, 
    largestNum, 
    evenOrOdd, 
    manipulateString,
    printFibonacciNum,
    mostFrequentLetter
} = require('./index');

describe("Functions Exercise", () => {

    describe("sum function", () => {
        test("returns the sum of two numbers", () => {
            expect(sum(3, 5)).toBe(8)
            expect(sum(-1, -1)).toBe(-2)
        })
    })

    describe("largestNum function", () => {
        test("returns the largest of 3 numbers", () => {
            expect(largestNum(5, 2, 6)).toBe(6)
            expect(largestNum(499, -500, 450)).toBe(499)
        })
    })

    describe("evenOrOdd function", () => {
        test("returns a string 'even' or 'odd' depending on the given number", () => {
            expect(evenOrOdd(3)).toBe("odd")
            expect(evenOrOdd(10)).toBe("even")
        })
    })

    describe("manipulateString function", () => {
        test("if the string length is less than or equal to 20, return the string + string", () => {
            expect(manipulateString("Howdy!")).toBe("Howdy!Howdy!")
        })
        test("if string length is greater than 20, return the first half", () => {
            expect(manipulateString("Whatever shall we do about this?")).toBe("Whatever shall w")
        })
    })

    // Remove the 'x' to have the test run
    xdescribe("printFibonacciNum function", () => {
        test("it returns the sum of the first 'n' fibonacci numbers", () => {
            // The first 5 fibonacci numbers are 1, 1, 2, 3, 5
            // Added together the final is 12
            expect(printFibonacciNum(5)).toBe(12)
            expect(printFibonacciNum(20)).toBe(17710)
        })
    })

    // Remove the 'x' to have the test run
    xdescribe("mostFrequentLetter function", () => {
        test("returns the character that occurs the most in the string", () => {
            expect(mostFrequentLetter("whatever")).toBe("e")
            expect(mostFrequentLetter("what is your quest?")).toBe(" ")
        })
    })

})
