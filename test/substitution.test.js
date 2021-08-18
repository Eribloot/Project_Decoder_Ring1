const expect = require("chai").expect;
const substitutionModule = require("../src/substitution.js");
const { substitution } = substitutionModule;


describe("substitution()", () =>
{
    it("encodes message correctly", () => 
    {
        const key = "AZERTYUIOPQSDFGHJKLMWXCVBN";
        const actual = substitution("test", key);

        expect(actual).to.eql("mtlm");
    });

    it("decodes message correctly", () => 
    {
        const key = "AZERTYUIOPQSDFGHJKLMWXCVBN";
        const actual = substitution("mtlm", key, false);

        expect(actual).to.eql("test");
    });
 
    it("if all characters in alphabet key are not unique, return false", () => 
    {
        const key = "AAAAAAAAAAAAAAAAAAAAAAAAAA";
        const actual = substitution("test", key);

        expect(actual).to.be.false;
    });

    it("if no input is given, return false", () =>
    {
       const actual = substitution();
        
        expect(actual).to.be.false;
    });
    
    it("if alphabet key is not exactly 26 characters, return false", () => 
    {
        const actual = substitution("test", "a");
        
        expect(actual).to.be.false;
    });
    
    it("alphabet key can include special characters", () => 
    {
        const key = "AZER%YUIOPQTDFGHJK@$WXCVBN";
        const actual = substitution("test", key);

        expect(actual).to.eql("$%@$");
    });

    it("ignores capitalization", () => 
    {
        const key = "AZERTYUIOPQSDFGHJKLMWXCVBN";
        const actual = substitution("TEST", key);

        expect(actual).to.eql("mtlm");
    });

    it("maintains spaces in string", () => 
    {
        const key = "AZERTYUIOPQSDFGHJKLMWXCVBN";
        const actual = substitution("test test", key);

        expect(actual).to.eql("mtlm mtlm");
    });
})
