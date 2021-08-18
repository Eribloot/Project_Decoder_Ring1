// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function ()
{
  const table = {11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "(i/j)", 52:  "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y", 55: "z"};


  function polybius(input, encode = true)
  {
    

    //sets input to lowercase, to ignore capitalization
    input = input.toLowerCase();

    let output = "";

      //if encoding 
    if (encode)
      {
        //loop through each letter in the input
        for(values in input)
        {
          //current letter stored in letter
          const letter = input[values];

          switch(letter)
          {
            //checks if current letter is a letter; if not, add to output as is and move to next letter
            case " ":
              output += letter;
              continue;

            //checks if letter is i or j; adds 42 to output since they are the same value key
            case "j":
            case "i":
              output += 42;
              continue;

            //loop through table to find where letter is, and add that value key to output
            default:
              for(value in table)
              {
                if(letter === table[value])
                  output += value;
              }
          }
        }
      }

        //if decoding
      else
        {
          //loop through set numbers in input
        for(numbers in input) 
        {
          let pairs = input.split(' ');
      // for each element in the pairs, check if it's even, if it isn't return false.
           for (element in pairs)
             {
                if (pairs[element].length % 2 != 0)
                    return false;
             }

          const pair = `${input[0]}${input[1]}`;
          
          //if the input is a space, add it as is to output, remove it from input, and restart loop
          if(input[0] === ' ') 
          {
            output += input[0];
            input = input.slice(1);
            continue;
          }
          //loop through the table and add the matching letter to output
          for(num in table) 
          {
            if(pair === num) 
                output += table[num];
          }
          input = input.slice(2);
        }
      }
        
    return output;
  }
  return { polybius, };
})();

module.exports = { polybius: polybiusModule.polybius };
