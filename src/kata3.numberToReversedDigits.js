//Good code, passes the test you wrote but could be more concise.

const numberToReversedDigits = (number) => {
  const reversedNums = [];
  const stringNumsAr = number.toString().split('');

  for (let i = stringNumsAr.length - 1; i >= 0; i--) {

    reversedNums.push(parseInt(stringNumsAr[i], 10));
  }

  return reversedNums;
}

module.exports = numberToReversedDigits;
