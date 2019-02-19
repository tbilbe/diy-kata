//Clear and concise, well done.

const numberToReversedDigits = (number) => {
  return number.toString().split('').map(Number).reverse();
};

// .toString(10) should be used? But assumes radix of 10 if no value given. So toString() works for converting number to string.


module.exports = numberToReversedDigits;
