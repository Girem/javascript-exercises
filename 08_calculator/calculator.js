const add = function (num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function (num1, num2) {
  let sub = num1 - num2;
  return sub;
};

const sum = function (array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (array) {
  let result = 1;
  array.forEach((element) => {
    result *= element;
  });
  return result;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num == 0) return 1;
  else {
    let result = 1;
    for (i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
