const { dictionaryObj, addWord, lookupWord } = require('./index');

describe('addWord', () => {
    test('Adding words updates object', () => {
        doActions(addWord("dog", "fun"))
        expect(dictionaryObj).toEqual({dog: "fun"}); 
    });
    test("words are stored lower cased", ()=>{
        doActions(addWord("Dog", "fun"))
        expect(dictionaryObj).toEqual({dog: "fun"});  
    })
    test("definitions are stored lower cased", ()=>{
        doActions(addWord("dog", "FUN"))
        expect(dictionaryObj).toEqual({dog: "fun"});  
    })
});

describe('lookupWord', () => {
    test("added words will be recalled", () => {
        addWord("dog", "nice")
        expect(lookupWord("dog")).toBe("nice")
        addWord("frog", "has warts")
        expect(lookupWord("frog")).toBe("has warts")
    })
})

