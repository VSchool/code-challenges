const functionsToTest = require('./index');

describe('Adds', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(functionsToTest.sum(1, 2)).toBe(3);
    });
});