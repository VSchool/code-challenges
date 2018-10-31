const { countCode } = require('./index');

describe('Returns the number of times "code" appears in given string, ignoring the "d', () => {
    test('main cases', () => {
        expect(countCode("aaacodebbb")).toBe(1);
        expect(countCode("cozexxcope")).toBe(2);
        expect(countCode("codexxcode")).toBe(2);
    });

    xtest('for extra credit, remove the x and make your function pass these edge cases', () => {
        expect(countCode("cod")).toBe(0);
        expect(countCode("coee")).toBe(1);
    });

    xtest('expect numbers not to be substituted', () => {
        expect(countCode("co1e")).toBe(0);
    });
    

});


//Output: countCode("aaacodebbb") returns 1
// countCode("codexxcode") returns 2
// countCode("cozexxcope") returns 2