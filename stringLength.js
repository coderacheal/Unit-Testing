// const { count } = require("console");

const stringLength = string => {
  let count = 0;
  for (let i = 0; i < string.length; i+=1) {
    count+=1; 
  }

  if (count > 0 && count <= 10) {
    return 'String length is ok';
  }
  else {
    return new Error('String is too long');
  };
}

// return count;

// console.log(stringLength('Helloffffffffff'))
module.exports = stringLength