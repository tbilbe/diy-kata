//Well done. Easy to understand and well written code.
//Could have been more concise as declaring variables isn't needed.
//A return would have sufficed if the methods were chained on the same line

const numberToReversedDigits = (number) => {
  const numToString = number.toString().split('')
  const reverseDigits = numToString.map(Number)
  return reverseDigits.reverse()







}
module.exports = numberToReversedDigits;
