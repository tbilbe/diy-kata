//Slightly more complicated than it has to be but good effort.
//Could have returned the same functionality in one line:
//   return number.toString().split("").map(x => parseInt(x)).reverse();

const numberToReversedDigits = (number) => {
  let str = String(number);
  let arr = Array.from(str).reverse();
  return arr.map(str => parseInt(str));

};

module.exports = numberToReversedDigits;
