const { sortedOfAge } = require("./index")
var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

describe("Multiple array methods part 1", () => {
    describe("Sorted of age function", () => {
        const actual = sortedOfAge(peopleArray)
        const expected = [
            "<li>Kyle Mooney is 27</li>",
            "<li>Sarah Palin is 47</li>",
            "<li>Rick Sanchez is 78</li>",
            "<li>Morty Smith is 29</li>",
            "<li>Lev Tolstoy is 82</li>"
        ]

        test("should return an array", () => {
            expect(actual).toBeInstanceOf(Array)
        })

        test("array returns expected result", () => {
            expect(actual).toEqual(expected)
        })
    })

    xdescribe("Extra credit challenges", () => {
        // Tests for extra credit challenges here
    })

})