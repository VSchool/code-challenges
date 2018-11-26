const {
    leastToGreatest,
    greatestToLeast,
    lengthSort,
    alphabetical,
    byAge
} = require("./index");

describe("Array Sort Exercise", () => {
   
    describe("Least to Greatest function", () => {
        test("returns array sorted from least to greatest", () => {
            expect(leastToGreatest([1, 3, 5, 2, 90, 20])).toEqual([1, 2, 3, 5, 20, 90])
        })
    })

    describe("Greatest to Least function", () => {
        test("returns array sorted from greatest to least", () => {
            expect(greatestToLeast([1, 3, 5, 2, 90, 20])).toEqual([90, 20, 5, 3, 2, 1])
        })
    })

    describe("Length Sort function", () => {
        test("returns array of strings sorted least to greatest in length", () => {
            // Your tests here
        })
    })

    // Remove the 'x' to have Jest not skip the 'describe'
    xdescribe("Alphabetical function", () => {
        // Your tests here
    })

    xdescribe("By Age function", () => {
        // Your tests here
    })

})
