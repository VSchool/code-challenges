const antiCaps = require("./index").antiCaps

describe("Anti caps", () => {
    test("Output will be a string", () => {
        expect(typeof antiCaps("qwerty")).toBe("string")
        expect(typeof antiCaps("QWERTY")).toBe("string")
    })
    test("Output will flip the caps of the input", () => {
        expect(antiCaps("Hello")).toBe("hELLO")
        expect(antiCaps("TOTaLLy")).toBe("totAllY")
        expect(antiCaps("a")).toBe("A")
    })
    test("Function still works when punctuation is included", () => {
        expect(antiCaps("hi!")).toBe("HI!")
    })
})

xdescribe("Extra Credit Challenges", () => {
    // Your extra credit challenge tests here
})
