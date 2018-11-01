const { palindromeFinder } = require("./index")

describe("Palindrome Finder", () => {
    test("Palindrome entries return 'true'", () => {
        expect(palindromeFinder("Star Rats!")).toBe(true)
        expect(
            palindromeFinder(
                "I madam, I made radio! So I dared! Am I mad?? Am I?!"
            )
        ).toBe(true)
    })

    test("Function returns a string", () => {
        const str = "Star Rats!"
        const result = palindromeFinder(str)
        expect(typeof result).toBe("boolean")
    })

    test("Strings that are not palindromes return false", () => {
        const str = "palindrome"
        const expected = false
        const actual = palindromeFinder(str)
        expect(actual).toBe(expected)
    })
})
