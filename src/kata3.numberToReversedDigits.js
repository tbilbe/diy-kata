//Well done, nice and simple. Also clear and easy to understand.

const numberToReversedDigits = (number) => {
  return number.toString().split('').map(Number).reverse();

}


module.exports = numberToReversedDigits;
