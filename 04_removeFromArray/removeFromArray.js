const removeFromArray = function (array1, ...args) {
  let result = [];
  //   if (typeof args == `number`) {
  args.forEach((arg) => {
    // if (typeof arg === `number`) {
    for (let index = 0; index < array1.length; index++) {
      if (array1[index] === arg) {
        array1.splice(index, 1);
        result = array1;
      } else {
        result = array1;
      }
    }
    // } else {
    //   result = array1;
    // }
  });

  return result;
};
// Do not edit below this line
module.exports = removeFromArray;
