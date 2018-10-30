const generate = require("./index").randomPasswordGenerator

describe("Generate random characters in a string a specified number of times", () => {
    test("Output is a string", () => {
        expect(typeof generate(6)).toBe("string")
    })
    test("The string will be 'n' characters long", () => {
        expect(generate(6).length).toBe(6)
        expect(generate(20).length).toBe(20)
    })
    test("Strings will be different", () => {
        expect(generate(6)).not.toBe(generate(6))
    })
})

xdescribe("Extra Credit Challenges", () => {
    // Your extra credit challenge tests here
})