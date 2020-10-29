const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  } else if (arr.includes('--discard-prev') || arr.includes('--discard-next') || arr.includes('--double-prev') || arr.includes('--double-next')) {
        let array = arr.map(x => x);

        for (let i = 0; i < array.length; i++) {
    
            if ( (array[i] === '--discard-next' && i === array.length-1)) {
              array.splice(i, 1);
            } else if (array[i] === '--discard-next') {
              array[i] = '';
              array[i+1] = '';
            }
            if ((array[i] === '--discard-prev' && i === 0) ) {
              array.splice(i, 1);
            } else if (array[i] === '--discard-prev') {
              array[i] = '';
              array[i-1] = '';
            }

            if( (array[i] === '--double-next' && i === array.length-1)) {
              array.splice(i, 1);
            } else if (array[i] === '--double-next') {
              array[i] = array[i+1];
            }
            if ((array[i] === '--double-prev' && i === 0) ) {
              array.splice(i, 1);
            } else if (array[i] === '--double-prev') {
              array[i] = array[i-1];
            }
        }

              let final = array.filter(function(element) {
                return  element !== '';
              });

              return final;
        } else {
            return arr;
        }
};
