const fibonacci = function (num) {
  num = parseInt(num);
  if (num > 0) {
    var fibArray = [1, 1];
    for (var i = 2; i < num; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray.at(num - 1);
  } else return `OOPS`;
};

// Do not edit below this line
module.exports = fibonacci;
