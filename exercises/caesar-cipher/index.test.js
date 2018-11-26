const { caeserCipher } = require("./index");

describe("Caeser Cipher", () => {

    test("returns phrase with letters shifted by given shift amount", () => {
        expect(caeserCipher("Hello", 2)).toBe("jgnnq")
        expect(caeserCipher("V School is Awesome!", 11)).toBe("g dnszzw td lhpdzxp!")
        expect(caeserCipher("xyz! @abc", 5)).toBe("cde! @fgh")
    })

})
