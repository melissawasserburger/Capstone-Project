// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if ((shift > 25 || shift === 0 || shift < -25 || !input))
      return false;
    let message = input.toLowerCase();
    let result = "";
    if (!encode) shift = shift *-1;
    for (let i=0; i<message.length; i++) {
      let asciiNum = message[i].charCodeAt();
      if (asciiNum < 97 || asciiNum > 122) result += String.fromCharCode(asciiNum);
      let shifted = asciiNum + shift;
      if(shifted < 97) shifted = shifted + 26;
      if (shifted > 122) shifted = shifted - 26;
      if (shifted >= 97 && shifted <= 122) {
        result += String.fromCharCode(shifted)
      }
    }
  
    return result;
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
