const antiCaps = require('./index').antiCaps;

describe('Function will take a string and change each character from lower to uppercase or upper to lowercase', () => {
    test('Output will be a string', () => {
        expect(typeof antiCaps("qwerty")).toBe("string");
        expect(typeof antiCaps("QWERTY")).toBe("string");
    });
    test('Input will have opposite caps from output', () => {
        expect(antiCaps("Hello")).toBe("hELLO");
        expect(antiCaps("TOTaLLy")).toBe("totAllY");
    });
});

xdescribe("Extra Credit Challenges", () => {
    // Your extra credit challenge tests here
})