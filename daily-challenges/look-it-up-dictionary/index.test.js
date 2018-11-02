const { addWord, lookUpWord } = require("./index")

describe("Look it up", () => {
    let dictionary
    describe("addWord", () => {
        beforeEach(() => {
            dictionary = {}
        })
        test("adding words updates object", () => {
            addWord(dictionary, "dog", "Fun")
            expect(dictionary).toEqual({ dog: "Fun" })
        })
        test("words are stored lower cased", () => {
            addWord(dictionary, "Dog", "Fun")
            expect(dictionary).toEqual({ dog: "Fun" })
        })
        test("doesn't add same word twice", () => {
            addWord(dictionary, "dog", "Fun")
            addWord(dictionary, "dog", "FUN")
            expect(dictionary).toEqual({ dog: "Fun" })
        })
        test("doesn't add same word even if it has different capitalization", () => {
            addWord(dictionary, "dog", "Fun")
            addWord(dictionary, "Dog", "Fun")
            expect(dictionary).toEqual({ dog: "Fun" })
        })
        test("can add multiple words", () => {
            addWord(dictionary, "dog", "Fun")
            addWord(dictionary, "cat", "Mean")
            expect(dictionary).toEqual({ dog: "Fun", cat: "Mean" })
        })
    })

    describe("lookupWord", () => {
        beforeEach(() => {
            dictionary = {
                dog: "Nice",
                frog: "Has warts"
            }
        })
        test("definitions get returned", () => {
            expect(lookUpWord(dictionary, "dog")).toBe("Nice")
            expect(lookUpWord(dictionary, "frog")).toBe("Has warts")
        })
    })
})

xdescribe("Extra credit challenges", () => {
    // Your extra credit challenge tests here
})
