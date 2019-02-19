//simple and concise code.
//Could have used a ternary operator:
// return boolean ? 'Yes' : 'No';

const booleanToWord = (boolean) => {
  if (boolean) {
    return 'Yes';
  } else {
    return 'No';
  }
}

module.exports = booleanToWord;
