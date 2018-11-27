const {
    fiveAndGreaterOnly,
    evensOnly,
    fiveCharactersOrFewerOnly,
    peopleWhoBelongToTheIlluminati,
    ofAge
} = require("./index");

describe("Filter Exercise", () => {
    
    describe("Five and Greater only function", () => {
        test("returns an array of only numbers 5 or greater", () => {
            expect(fiveAndGreaterOnly([3, 49, 23, -39, 44, 5, 4, 6])).toEqual([49, 23, 44, 5, 6])
        })
    })

    describe("Evens Only function", () => {
        test("returns an array of only even numbers", () => {
            expect(evensOnly([3, 6, 8, 2])).toEqual([6, 8, 2])
        })
    })

    // Remove the 'x' to have jest run these 'describe' tests
    xdescribe("Five Charaters or Fewer Only function", () => {
        
    })

    xdescribe("People who belong to the illuminati function", () => {
        
    })

    xdescribe("Of Age function", () => {
        
    })

})
