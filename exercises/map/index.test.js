const {
    doubleNumbers,
    stringItUp,
    capitalizeNames,
    namesOnly,
    makeStrings,
    readyToPutInTheDOM
} = require("./index")

describe("Array Mapping", () => {
    
    describe("Double Numbers function", () => {
        test("returns array with numbers doubled", () => {
            expect(doubleNumbers([2, 5, 100])).toEqual([4, 10, 200])
        })
    })

    // Remove 'x' in front of a 'describe' to have jest run the test on 'npm test'
    xdescribe("String it Up function", () => {
 
    })

    xdescribe("Capitalize Names function", () => {
    
    })

    xdescribe("Names Only function", () => {
     
    })

    xdescribe("Make Strings function", () => {
        
    })

    xdescribe("Ready to put in the DOM function", () => {
        
    })

})
