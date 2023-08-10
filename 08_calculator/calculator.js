const add = function(num1, num2) {
  let summ = num1 + num2;
  return summ;
};

const subtract = function(num1, num2) {
  let substract = num1 - num2;
  return substract;
};

const sum = function(array) {
    let sum = array.reduce((accumulator, element)=> {
      return accumulator + element;
    }, 0)

    return sum;
};

const multiply = function(array) {
  let result = array.reduce((acc, e)=> {
    return acc * e;
  }, 0)

  return result;
};

const power = function(base, exp) {
  let result = Math.pow(base, exp);

  return result;
};

const factorial = function(num) {
  let result = 1;  

  if (num === 0) return 1;
  
  for(let i = 1; i <= num; i++){
      result *= i;
    }

    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
