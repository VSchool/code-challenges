const { arrayMethods } = require("./index");

describe("Array methods exercise", () => {
   
    test("function returns correct string after all methods are performed", () => {
        let fruit = ["banana", "apple", "orange", "watermelon"];
        let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

        expect(arrayMethods(fruit, vegetables)).toBe("3,pepper,1,watermelon,orange,apple")
    })

})
