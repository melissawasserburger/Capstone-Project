const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe("polybius", () => {
    it("should return a string", ()=> {
        const response = polybius("Melissa");
        expect(response).to.be.a("string");
    })
    it("should return an empty string if input includes mix of numbers/letters", ()=>{
        const response = polybius("325113XXX3");
        const expected = ""
        expect(response).to.deep.equal(expected);
    })
})


