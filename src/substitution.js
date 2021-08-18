// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () 
{
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true)
  {     
    //if there is no input or key, or key is larger than 26 chars, return false  
    if(!input || !alphabet || alphabet.length != 26) return false;
    
    //changes inputs to lowercase
    input = input.toLowerCase();
    alphabet = alphabet.toLowerCase();

    //make alphabet into arr, and look through arr for matching letters using some
    const alphabetArr = alphabet.split("");
    const alphabetCheck = alphabetArr.some((char, index, arr) => 
    {
      return arr.lastIndexOf(char) != index;
    });

    //if true, return false
    if(alphabetCheck) return false;
    
 
    let output = "";
    const realKey = "abcdefghijklmnopqrstuvwxyz";

    //loop through each letter in input
    for (letters in input)
    {
      //store each letter in char
      const char = input[letters];
      
      //if char is space, add space to output
      if(char === " ") output += " ";
      else
      {
        if(encode)
        {
          const index = realKey.indexOf(char);
          output += alphabet[index];
        }
        else
        {
          index = alphabet.indexOf(char);
          output += realKey[index];
        }
      }
    }
    return output;
  }
  return { substitution, };
})();

module.exports = { substitution: substitutionModule.substitution };
