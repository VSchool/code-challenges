const objectArray = require("./index")

const hasProperty = (dataType, obj) => {
    return Object.keys(obj).some(key => {
        return typeof obj[key] === dataType
    })
}

describe("There should be exported an array of ten objects that fullfill assignment requirements.", () => {
    test("array has ten or more obejcts", () => {
        expect(objectArray.length).toBeGreaterThanOrEqual(10)
    })
    test("each object should have 4 properties", () => {
        for (let i = 0; i < objectArray.length; i++) {
            expect(Object.keys(objectArray[i]).length).toBeGreaterThanOrEqual(4)
        }
    })
    test("each object should have one method", () => {
        for (let i = 0; i < objectArray.length; i++) {
            expect(hasProperty("function", objectArray[i])).toBe(true)
        }
    })
    test("each object should have one number as a property value", () => {
        for (let i = 0; i < objectArray.length; i++) {
            expect(hasProperty("number", objectArray[i])).toBe(true)
        }
    })
    test("each object should have one string as a property value", () => {
        for (let i = 0; i < objectArray.length; i++) {
            expect(hasProperty("string", objectArray[i])).toBe(true)
        }
    })
    test("each object should have one boolean as a property value", () => {
        for (let i = 0; i < objectArray.length; i++) {
            expect(hasProperty("boolean", objectArray[i])).toBe(true)
        }
    })
})
