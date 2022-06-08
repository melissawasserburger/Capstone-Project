const {expect} = require("chai");
const {caesar} = require("../src/caesar.js");


describe("caesar", ()=> {
    it("should encode the input according to the correct shift", ()=> {
        const input = "Hello world!";
        const shift = -4;
        const response = caesar(input, shift, encode=true);
        expect(response).to.equal("dahhk sknhz!")
    });
    it("should return false if shift = 0", ()=> {
        const shift = 0;
        const input = "Hello world!";
        const response = caesar(input, shift, encode);
        expect(response).to.be.false
    });
    it("should return false if called without an input", ()=> {
        const shift = 1;
        const response = caesar(input=false, shift, encode);
        expect(response).to.be.false
      });
      it("should keep all non-alpabet characters", ()=> {
          const input = "!@#$%^&*()test";
          const shift = 1;
          const expected = "!@#$%^y&*()uftu";
          const response = caesar(input, shift, encode)
          expect(response).to.equal(expected)
      });
      it("should correctly decode the input according to the correct shift", ()=> {
        const input = "fcjjm";
        const shift = -2;
        const response = caesar(input, shift, encode=false);
        const expected = "hello"
        expect(response).to.equal(expected);
      });
})

