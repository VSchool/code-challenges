const { add, sub, mul, div} = require("./index");

describe("Node Calculator", () => {
   
    describe("add function", () => {
        test("adds two numbers and returns the sum", () => {
            expect(add(3, 5)).toBe(8)
        })
    })

    describe("sub function", () => {
        test("sutracts num2 from num1 and returns the sum", () => {
            expect(sub(10, 3)).toBe(7)
        })
    })

    describe("mul function", () => {
        test("multiplies two numbers together and returns the sum", () => {
            expect(mul(20, 4)).toBe(80)
        })
    })

    describe("div function", () => {
        test("divides num1 by num2 and returns the sum", () => {
            expect(div(8, 4)).toBe(2)
        })
    })

})
