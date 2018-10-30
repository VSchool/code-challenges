const { getString, reverse, everyOther } = require("./index")

describe("Uptown Functions", () => {
    describe("The function will return a string of the lyrics", () => {
        test("The string will match", () => {
            expect(getString()).toBe(
                "This hit that ice cold Michelle Pfeiffer that white gold This one for them hood girls Them good girls straight masterpieces Stylin' whilen' livin' it up in the city Got Chucks on with Saint Laurent Gotta kiss myself I'm so pretty"
            )
        })
    })

    describe("The function will return a string of the lyrics, but reversed", () => {
        test("The string will match", () => {
            expect(reverse()).toBe(
                "pretty so I'm myself kiss Gotta Laurent Saint with on Chucks Got city the in up it livin' whilen' Stylin' masterpieces straight girls good Them girls hood them for one This gold white that Pfeiffer Michelle cold ice that hit This"
            )
        })
    })

    describe("The function will return a string of every other word of the lyrics", () => {
        test("The string will match", () => {
            expect(everyOther()).toBe(
                "This that cold Pfeiffer white This for hood Them girls masterpieces whilen' it in city Chucks with Laurent kiss I'm pretty"
            )
        })
    })
})
