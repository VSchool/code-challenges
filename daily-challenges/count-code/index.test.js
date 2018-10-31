const { countCode } = require("./index")

describe("Count Code Challenge", () => {})
describe('Returns the number of times "code" appears in given string, ignoring the "d', () => {
    test("should return number of times 'co_e' exists in the string", () => {
        expect(countCode("aaacodebbb")).toBe(1)
        expect(countCode("cozexxcope")).toBe(2)
        expect(countCode("codexxcode")).toBe(2)
    })
})

xdescribe("Extra credit challenges", () => {
    test("remove the x and make your function pass these edge cases", () => {
        expect(countCode("cod")).toBe(0)
        expect(countCode("coee")).toBe(1)
    })

    test("expect numbers not to be substituted", () => {
        expect(countCode("co1e")).toBe(0)
    })
})
