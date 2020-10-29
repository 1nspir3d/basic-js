const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let number = 0;
    matrix.flat().forEach(element => {
        if (element === '^^') {
            number++;
        }
    });
    return number;
};
