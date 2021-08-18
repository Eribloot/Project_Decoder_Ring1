const expect = require("chai").expect;
const caesarModule = require("../src/caesar.js");
const { caesar } = caesarModule;

describe("caesar()", () => 
{
    it("returns proper encoded message", () => 
    {
        const input = "abcd";
        const expected = "defg";
        const actual = caesar(input, 3);

        expect(actual).to.eql(expected);
    })
    it("returns proper decoded message", () => 
    {
        const input = "defg";
        const expected = "abcd";
        const actual = caesar(input, 3, false);

        expect(actual).to.eql(expected);
    });

    it("Return false if input and shift parameters are missing", () => 
    {
        const input = undefined;
        const expected = false;
        const actual = caesar(input);

        expect(actual).to.eql(expected);
    });

    it("Return false if shift value is less than or equal to -25", () => 
    {
        const expected = false;
        const actual = caesar("test", -50);
        expect(actual).to.eql(expected); 
    });
        
    it("Return false if shift value is greater than or equal 25", () => 
    {
        const expected = false;
        const actual = caesar("test", 50);
        expect(actual).to.eql(expected);
    });
        
   it("Return false if shift value is 0", () => 
    {
        const expected = false;
        const actual = caesar("test", 0);
        expect(actual).to.eql(expected);
    });
    
    it("Perserves spaces throughout message", () => 
    {

        const input = "a b c d e";
        const expected = "d e f g h";
        const actual = caesar(input, 3);

        expect(actual).to.equal(expected);
    });
    
    it("Ignore capitalization", () => 
    {
        const input = "ABCDE";
        const expected = "defgh";
        const actual = caesar(input, 3);
        
        expect(actual).to.equal(expected);
    });

    it("Message wraps letters properly", () => 
    {
        const input = "wxyz";
        const expected = "zabc";
        const actual = caesar(input, 3);

        expect(actual).to.equal(expected);
    });
});
