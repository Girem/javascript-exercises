const palindromes = function (str) {
  let arr1 = Array.from(str.toLowerCase()).filter(
    (word) => !["!", ",", ".", ` `].includes(word)
  );
  let arr2 = arr1.slice().reverse();

  if (arr1.join() === arr2.join()) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
