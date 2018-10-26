const functionsToTest = require('./index');

xdescribe('All tests in this describe will be skipped. Remove the "x" from "describe" to turn them on', () => {
    test('This test will be skipped', () => {
        expect(true).toBe(true);
    });
});
