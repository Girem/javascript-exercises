const repeatString = function (string, num) {
  let result = string;
  if (num > 0) {
    for (i = 1; i < num; i++) {
      result += string;
    }
  } else if (num === 0) {
    result = ``;
  } else {
    result = `ERROR`;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
