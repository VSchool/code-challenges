const {
    noDuplicates
} = require("./index")

describe("No duplicates", () => {
    test("Duplicates are successfully removed", () => {
        const str = "bookkeeper larry"
        const expected = "bokepr lay"
        const actual = noDuplicates(noDuplicates(str))
        expect(expected).toBe(actual)
    })
    test("Function returns a string", () => {
        const str = "bookkeeper larry"
        const result = noDuplicates(noDuplicates(str))
        expect(typeof result).toBe("string")
    })
    test("Input already with no duplicates returns same string", () => {
        const str = "abc"
        const result = noDuplicates(str)
        expect(result).toBe(str)
    })
})