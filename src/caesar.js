// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () 
{
  //alphabet
const encodeKey = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  function caesar(input, shift, encode = true) 
  {
    //catches if there is no input
    if(!input || !shift)
      return false;
    //catches if shift val is 0, too high, or too low
    if(shift >= 25 || shift <= -25 || shift == 0)
      return false;

    //makes sure input is lowercase
    input = input.toLowerCase();

    //output array
    let output = [];

    for(let i = 0; i < input.length; i++)
    {
      //current letter is stored in letter
      //position of letter relative to alphabet is stored in pos
      const letter = input[i];
      const pos = encodeKey.indexOf(letter);

      //if the value in pos isn't a letter, add it to the output array
      if(pos < 0)
        output.push(letter);
      
      else
      {
        //if the message is to be encoded, add shift to pos to get new pos
        //if statements inside check if new value is more or less than size of aphabet arr
       
        let newPos = 0;

        switch(encode)
        {
          case true:
            newPos = (pos + shift);
            if(newPos > 25) newPos = newPos - 26;
            if(newPos <  0) newPos = newPos + 26;
            output.push(encodeKey[newPos]);
            break;
        //if message is to be decoded, sub shift from pos to get new pos
          case false:
            newPos = (pos - shift);
            if(newPos > 25) newPos = newPos - 26;
            if(newPos <  0) newPos = newPos + 26;
            output.push(encodeKey[newPos]);
            break;
        }
      }
    }
    //join arr together to get new message
    return output.join("");
  }

  return { caesar, };
}) ();

module.exports = { caesar: caesarModule.caesar };
