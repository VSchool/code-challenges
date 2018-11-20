const {
    addLettersToArray,
    positionOfFirstOccurance,
    find42,
    findTheSmallest
} = require("./index")


describe("For Loop Exercise", () => {

    describe("Add Letters to Array", () => {
        test("it returns an array", () => {
            expect(addLettersToArray("Hello")).toBeInstanceOf(Array)
        })

        test("returns an array of all characters", () => {
            expect(addLettersToArray("Hello")).toEqual(["H", "e", "l", "l", "o"])
            expect(addLettersToArray("Good Bye")).toEqual(["G", "o", "o", "d", " ", "B", "y", "e"])
        })
    })

    describe("Position of First Occurrence", () => {
        test("returns index of where character first occurs", () => {
            expect(positionOfFirstOccurance("hello", "l")).toBe(2)
            expect(positionOfFirstOccurance("whatever", "v")).toBe(5)
        })

        test("returns 'Character not found!' if no occurrence of character", () => {
            expect(positionOfFirstOccurance("goodbye", "z")).toBe("Character not found!")
        })
    })

    describe("Find 42", () => {
        test("returns 'Found 42!' when 42 is found", () => {
            expect(find42([23, 50, 42, 10])).toBe("Found 42!")
        })
        test("returns '42 not found!' when 42 is not found in array", () => {
            expect(find42([45, 21, 66, 32])).toBe("42 not found!")
        })
    })

    describe("Find the smallest", () => {
        test("returns the smallest number from the array", () => {
            expect(findTheSmallest([3, 6, 1, 3, 6, 40])).toBe(1)
            expect(findTheSmallest([-4, -1, 90, 35, 4])).toBe(-4)
        })
    })

})
