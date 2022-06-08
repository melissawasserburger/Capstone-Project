const {substitution} = require("../src/substitution")
const {expect} = require("chai");



describe("substitution", ()=> {
    it("should return false if the inputted alphabet length is not 26", ()=> {
        const response = substitution("hello", "qwertyuiopasdfghjklzxcvbn", encode); //missing letter "m"
        expect(response).to.be.false;
    });
    it("should return false if inputted alphabet contains duplicate characters", ()=> {
        const response = substitution("hello", "qqwertyuiopasdfghjklzxcvbn"); //double q's and missing m
        expect(response).to.be.false;
    });
    it("should correctly encode a message using inputted alphabet", ()=> {
        const response = substitution("hello", "qwertyuiopasdfghjklzxcvbnm", encode);
        const expected = "pcssi";
        expect(response).to.equal(expected)
    });
    it("should correctly decode a message using inputted alphabet", ()=> {
        const response = substitution("fsduc bmogs", "mnbvcxzlkjhgfdsapoiuytrewq", encode=false);
        expect(response).to.equal("monte carlo");
    });
})