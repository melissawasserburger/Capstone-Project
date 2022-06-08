// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

//example input --> "324313415133"
  function polybius(input, encode = true) {
    const encodeCipher = {
      'a': 11, 'b': 21, 'c': 31, 'd': 41, 'e': 51, 'f': 12, 'g': 22,
      'h': 32, 'i': 42, 'j': 42, 'k': 52, 'l': 13, 'm': 23, 'n': 33,
      'o': 43, 'p': 53, 'q': 14, 'r': 24, 's': 34, 't': 44, 'u': 54,
      'v': 15, 'w': 25, 'x': 35, 'y': 45, 'z': 55, ' ': ' '
    };
    const decodeCipher = {
      11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e', 12: 'f', 22: 'g',
      32: 'h', 42: '(i/j)', 52: 'k', 13: 'l', 23: 'm', 33: 'n',
      43: 'o', 53: 'p', 14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u',
      15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z', ' ': ' '
    };


    const inputWithDoubleSpaces = input.split(" ").join("  ");
    if (!encode) { //DECODING BLOCK
      
      if ((inputWithDoubleSpaces.length%2)===0) {//checks if input is even number
        let dividedMessage = [];
        let secretMessage = "";
        const decodeCipherNumberArr = Object.keys(decodeCipher);
        for (let i=0; i < inputWithDoubleSpaces.length; i+=2) {
          dividedMessage.push(inputWithDoubleSpaces.slice(i, i + 2)); //dividedMessage contains segmented pairs, EX: [23, 51, 13, 42, 34, 34, 11]
        }
        for (let j=0; j<dividedMessage.length; j++) { //loop through dividedMessage
          for (let decodeNumKey of decodeCipherNumberArr) {   //at each index of dividedMessage, loop over decodeCipherNumArr
            if (decodeNumKey === dividedMessage[j]) secretMessage += decodeCipher[decodeNumKey] //if the number at decodeCipherNumArr equals the number being evaluated in dividedMessage, add associated letter to secretMessage
          }
          if (dividedMessage[j].includes("  ")) secretMessage += " " //adds spaces to secretMessage
        }
        return secretMessage;
      } else return false
    } else { //ENCODING BLOCK
      let secretMessage = "";
      let encodeCipherLetterKeys = Object.keys(encodeCipher);
      input.toLowerCase();
      let messageArr = input.split(""); //creates an arr with each character of message split
      for (let i=0; i<messageArr.length; i++) {
        for (let letters of encodeCipherLetterKeys) {
          if (letters === messageArr[i]) secretMessage += encodeCipher[letters]
        }
      }

      return secretMessage;
    }
  }

  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };
