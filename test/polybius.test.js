const expect = require("chai").expect;
const assert = require("chai").assert;
const polybiusModule = require("../src/polybius.js");
const { polybius } = polybiusModule;

describe("polybius()", () =>
{
    it("Returns a string", () => 
    {
        const actual = polybius("test");
        
        expect(actual).to.be.a("string");
    });
    
   it("Returns correct encode output", () => 
   {
       const actual = polybius("test");
       const expected = "44513444";

       expect(actual).to.eql(expected);
   });

   it("Returns correct decode output", () => 
   {
       const actual = polybius("44513444", false);
       const expected = "test";

       expect(actual).to.eql(expected);
   });

   it("output ignores capitalization", () => 
   {
       const actual = polybius("TEST");
       const expected = "44513444";

       expect(actual).to.eql(expected);
   });

   it("spaces are maintained throughout the message", () => 
   {
       const actual = polybius("a test");

       expect(actual).to.be.a("string").that.includes(" ");
   });

   it("Letter 'i' and 'j' both convert to 42", () =>
   {
       const actual = polybius("ji");
       const expected = "4242";

       expect(actual).to.eql(expected);
   });

   it("if letters 'i' and 'j' are decoded, return (i/j)", () =>
   {
       const actual = polybius("42", false);
       const expected = "(i/j)";

       expect(actual).to.eql(expected);
   });

   it("return false if input to decode is not an even value", () => 
   {
       const actual = polybius("444", false)
       
       expect(actual).to.be.false;
   })
});