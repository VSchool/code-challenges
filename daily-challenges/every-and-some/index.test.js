const { every, some } = require("./index")

describe("Every and Some functions", () => {
    describe("Every function", () => {
        test("function should return a boolean", () => {
            const actual = every(["nate", "bob", "marcus"], name => {
                return name.length > 3
            })

            expect(typeof actual).toBe("boolean")
        })

        test("returns true only if every item in array matches criteria in callback", () => {
            const actual1 = every([1, 2, 3], num => {
                return typeof num === "number"
            })
            const actual2 = every([20, 50, 34], num => {
                return num > 21
            })

            expect(actual1).toBe(true)
            expect(actual2).toBe(false)
        })
    })

    describe("Some function", () => {
        // Write tests for `some` function
    })
})
