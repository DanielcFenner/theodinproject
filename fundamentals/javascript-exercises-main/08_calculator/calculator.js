const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function () {
  let args = Array.from(arguments);
  let sum = args[0][0]

  for (let i = 1; i < args[0].length; i++) {
    console.log(args[i])
    sum = sum * args[0][i]
  }

  return sum;
};

const power = function (num, power) {
  let sum = num;
  for (let i = 1; i < power; i++) {
    sum *= num;
  }
  return sum;
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let sum = num;
  for (let i = num - 1; i > 0; i--) {
    sum *= i;
  }
  return sum;
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
