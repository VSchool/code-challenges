const {
    enemyGenerator,
    Enemy,
    getDefense,
    getHitPoints,
    getEnemyType
} = require("./index")
const timesToTry = 20

describe("Enemy Generator", () => {
    describe("enemyGenerator", () => {
        const generatedArr = enemyGenerator()
        test("Array has 100 items", () => {
            expect(generatedArr.length).toBe(100)
        })

        test("Each item is an object", () => {
            for (let i = 0; i < generatedArr.length; i++) {
                expect(Object.prototype.toString.call(generatedArr[i])).toBe(
                    "[object Object]"
                )
            }
        })
    })

    describe("Enemy Constructor", () => {
        test("each object should have a type of Ancient Dragon, Prowler, or Mighty Grunt", () => {
            const enemy = new Enemy()
            for (let i = 0; i < timesToTry; i++) {
                expect(["Ancient Dragon", "Prowler", "Mighty Grunt"]).toContain(
                    enemy.type
                )
            }
        })
        test("each object should have hitPoints depending on enemy type", () => {
            for (let i = 0; i < timesToTry; i++) {
                const { type, hitPoints } = new Enemy()
                if (type === "Ancient Dragon") {
                    expect(hitPoints).toBeGreaterThanOrEqual(80)
                    expect(hitPoints).toBeLessThanOrEqual(100)
                } else if (type === "Prowler") {
                    expect(hitPoints).toBeGreaterThanOrEqual(50)
                    expect(hitPoints).toBeLessThan(80)
                } else {
                    expect(hitPoints).toBeGreaterThanOrEqual(20)
                    expect(hitPoints).toBeLessThanOrEqual(50)
                }
            }
        })
        test("each object should have defense depending on hit points", () => {
            for (let i = 0; i < timesToTry; i++) {
                const { defense, hitPoints } = new Enemy()
                expect(defense).toBe(hitPoints * 3)
            }
        })
    })

    describe("getDefense", () => {
        test("should return 3 * what it was given", () => {
            expect(getDefense(2)).toBe(6)
            expect(getDefense(4)).toBe(12)
        })
    })

    describe("getType", () => {
        test("should return one of three values", () => {
            expect(["Ancient Dragon", "Prowler", "Mighty Grunt"]).toContain(
                getEnemyType()
            )
        })
    })

    describe("getHitpoints", () => {
        test("should get appropriately strong enemies", () => {
            for (let i = 0; i < timesToTry; i++) {
                expect(getHitPoints("Ancient Dragon")).toBeGreaterThanOrEqual(
                    80
                )
                expect(getHitPoints("Ancient Dragon")).toBeLessThanOrEqual(100)
                expect(getHitPoints("Prowler")).toBeGreaterThanOrEqual(50)
                expect(getHitPoints("Prowler")).toBeLessThanOrEqual(80)
                expect(getHitPoints("Mighty Grunt")).toBeGreaterThanOrEqual(20)
                expect(getHitPoints("Mighty Grunt")).toBeLessThanOrEqual(50)
            }
        })
    })
})
