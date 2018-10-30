const functionsToTest = require('./index');

xdescribe('All tests in this describe will be skipped. Remove the "x" from "describe" to turn them on', () => {
    test('This test will be skipped', () => {
        expect(true).toBe(true);
    });
});


// Create function that accepts a string.
// Create variable that stores the string without duplicates.
// Create a variable that stores the letters removed.
// Have the function return the string without duplicate letters
// Create another function that returns the letters removed.