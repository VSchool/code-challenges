const { noDuplicates } = require("./index")

describe("No duplicates", () => {
    test("Duplicates are successfully removed", () => {
        const str = "bookkeeper larry"
        const expected = "bokepr lay"
        const actual = noDuplicates(str)
        expect(actual).toBe(expected)
    })
    test("Function returns a string", () => {
        const str = "bookkeeper larry"
        const result = noDuplicates(str)
        expect(typeof result).toBe("string")
    })
    test("Input already with no duplicates returns same string", () => {
        const str = "abc"
        const result = noDuplicates(str)
        expect(result).toBe(str)
    })
})

xdescribe("Extra Credit Challenges", () => {
    // Your extra credit challenge tests here
})
