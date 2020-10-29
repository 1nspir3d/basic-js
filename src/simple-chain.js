const CustomError = require("../extensions/custom-error");

const chainMaker = {
  resultArray: [],
  result: '',
  getLength() {
    if (typeof this.resultArray === 'string') {
      return this.resultArray.split('~~').length;
    } else {
      return this;
    }
  },
  addLink(value) {
    this.resultArray.push('( '+value +' )');
    return this;
  },
  removeLink(position) {
    if (typeof position === 'string' || position < 1 || arguments.length === 0) {
      this.resultArray = [];
      throw Error;
    }
    this.resultArray.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.resultArray.reverse();
    return this;
  },
  finishChain() {
    this.result = this.resultArray.join('~~');
    this.resultArray.length = 0;
    return this.result;
  }
};

module.exports = chainMaker;
