const { enemyGenerator, Enemy, getDefense, getHitPoints, getEnemyType } = require('./index')
const numberofTestIterationsOnFeaturesThatAreRandom = 20

describe("Generator function should create an array of 100 ememy objects, where each obejct completes the requirements", ()=>{
    const generatedArr = enemyGenerator()
    test("Array has 100 items", () => {
        expect(generatedArr.length).toBeGreaterThanOrEqual(100)
    })

    test("Each item is an object", () => {
        for (let i = 0; i < generatedArr.length; i++){
            expect(Object.prototype.toString.call(generatedArr[i])).toBe('[object Object]')
        }
    })
})

describe("Constructor creates enemy objects that have required properties", () => {
    test("each object should have a type of Ancient Dragon, Prowler, or Mighty Grunt", () => {
        const enemy = new Enemy()
        for(let i = 0; i < numberofTestIterationsOnFeaturesThatAreRandom; i++){
            expect(["Ancient Dragon", "Prowler", "Mighty Grunt"]).toContain(enemy.type) 
        } 
    })
    test("each object should have hitPoints depending on enemy type", () => {
        for(let i = 0; i < numberofTestIterationsOnFeaturesThatAreRandom; i++){
            const {type, hitPoints} = new Enemy()
            if(type === "Ancient Dragon"){
                expect(hitPoints).toBeGreaterThanOrEqual(80)
                expect(hitPoints).toBeLessThanOrEqual(100)
            } else if (type === "Prowler"){
                expect(hitPoints).toBeGreaterThanOrEqual(50)
                expect(hitPoints).toBeLessThan(80)
            } else {
                expect(hitPoints).toBeGreaterThanOrEqual(20)
                expect(hitPoints).toBeLessThanOrEqual(50)
            }
        }
    })
    test("each object should have defense depending on hitpoints", () => {
        for(let i = 0; i < numberofTestIterationsOnFeaturesThatAreRandom; i++){
            const {defense, hitPoints} = new Enemy()
            expect(defense).toBe(hitPoints * 3)   
        }
    })
})

describe("getDefense should return 3 * what it was given", () => {
    test("call getDefense", ()=>{
        expect(getDefense(2)).toBe(6)
        expect(getDefense(4)).toBe(12)
    })
})

describe("getType should return one of three values", () => {
    test("see if result is in enemy name array", () => {
        expect(["Ancient Dragon", "Prowler", "Mighty Grunt"]).toContain(getEnemyType())       
    })
})

describe("getHitpoints should get appropriatly strong enemies", () => {
    test("Should return a number depending on enemy name", () => {
        for(let i = 0; i < numberofTestIterationsOnFeaturesThatAreRandom; i++){
            expect(getHitPoints("Ancient Dragon")).toBeGreaterThanOrEqual(80)
            expect(getHitPoints("Ancient Dragon")).toBeLessThanOrEqual(100)
            expect(getHitPoints("Prowler")).toBeGreaterThanOrEqual(50)
            expect(getHitPoints("Prowler")).toBeLessThanOrEqual(80)
            expect(getHitPoints("Mighty Grunt")).toBeGreaterThanOrEqual(20)
            expect(getHitPoints("Mighty Grunt")).toBeLessThanOrEqual(50)
        } 
    })
})