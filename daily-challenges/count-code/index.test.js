const { countCode } = require("./index")

describe("Count Code Challenge", () => {
    test("should return number of times 'co_e' exists in the string", () => {
        expect(countCode("aaacodebbb")).toBe(1)
        expect(countCode("cozexxcope")).toBe(2)
        expect(countCode("codexxcode")).toBe(2)
        expect(countCode("coee")).toBe(1)
        expect(countCode("cod")).toBe(0)
        expect(countCode("co1e")).toBe(0)
    })
})

xdescribe("Extra Credit Challenge", () => {
    test("Any uppercase letter can replace the initial 'c'", () => {
        expect(countCode("Aode")).toBe(1)
        expect(countCode("Zoxecoxe")).toBe(2)
    })
})
