const { letterFrequency } = require("./index")

describe("Array index function", () => {
    test("returns object with correct letter frequency count", () => {
        const actual1 = letterFrequency("slimy smelly solution")
        const expected1 = { s: 3, l: 4, i: 2, m: 2, y: 2, ' ': 2, e: 1, o: 2, u: 1, t: 1, n: 1 }
        expect(actual1).toEqual(expected1);

        const actual2 = letterFrequency("these pretzels are making me thirsty!!!")
        const expected2 = { t: 4, h: 2, e: 6, s: 3, ' ': 5, p: 1, r: 3, z: 1, l: 1, a: 2, m: 2, k: 1, i: 2, n: 1, g: 1, y: 1, '!': 3 }
        expect(actual2).toEqual(expected2)
    })
})

xdescribe("Extra credit challenges", () => {
    // Your extra credit challenge tests here
})
