const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe("polybius", () => {
    it("should return a string", ()=> {
        const response = polybius("Melissa");
        expect(response).to.be.a("string");
    });
    it("should return an empty string if input includes mix of numbers/letters", ()=>{
        const response = polybius("325113XXX3");
        const expected = ""
        expect(response).to.deep.equal(expected);
    });
    it("should return false if decoding input is odd number", ()=> {
        const response = polybius("1234567", encode=false);
        expect(response).to.be.false;
    });
    it("should correctly decode a series of numbers", ()=> {
        const response = polybius("454354 13425251 522411212145 53114444425134 41433344 454354", encode=false);
        const expected = "you l(i/j)ke krabby patt(i/j)es dont you";
        expect(response).to.equal(expected);
    })
})


