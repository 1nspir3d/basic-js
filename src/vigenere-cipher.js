const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor (type) {
    this.type = type;
    this.array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }
  encrypt(str, key) {
    
    let string = str.toLowerCase();
    function getRightLengthOFKey() {
      let kKey = '';
      let i = 0;
      str.split('').forEach(element => {
        if (i === key.length) {
          i = 0;
        }
        if (element === ' ') {
          kKey+=' ';
          i--;
        } else if (element.match(/[a-z]/i) === null) {
          kKey+= element;
        } else {
          kKey += key.charAt(i);
        }
        i++
      })
      
      return kKey.toLowerCase();
    }
    let test = getRightLengthOFKey();
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
      
      if (string.charAt(i).match(/[a-z]/i) === null) {
        result += string.charAt(i);
      } else {
        result += this.array[(this.array.indexOf(string.charAt(i)) + this.array.indexOf(test.charAt(i)))%this.array.length];  
      }
    }
    
    return this.type === false ? result.split('').reverse().join('').toUpperCase() : result.toUpperCase();
  }    
  decrypt(str, key) {
    
    let string = str.toLowerCase();
    function getRightLengthOFKey() {
      let kKey = '';
      let i = 0;
      str.split('').forEach(element => {
        if (i === key.length) {
          i = 0;
        }
        if (element === ' ') {
          kKey+=' ';
          i--;
        } else if (element.match(/[a-z]/i) === null) {
          kKey+= element;
        } else {
          kKey += key.charAt(i);
        }
        i++
      })
      
      return kKey.toLowerCase();
    }
    let test = getRightLengthOFKey();
    let result = '';

    for (let i = 0; i < str.length; i++) {
      
      if (string.charAt(i).match(/[a-z]/i) === null) {
        result += string.charAt(i);
      } else {
        result += this.array[((this.array.indexOf(string.charAt(i)) - this.array.indexOf(test.charAt(i)))+26)%this.array.length];  
      }
    }

    
    return this.type === false ? result.split('').reverse().join('').toUpperCase() : result.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
