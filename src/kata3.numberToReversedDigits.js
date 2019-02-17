//Very concise DRY code, well done.
const numberToReversedDigits = (number) => {
  return number.toString().split('').map(Number).reverse();
}

module.exports = numberToReversedDigits;
