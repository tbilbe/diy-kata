//Super simple if else statement. Good job
//Could have used a ternary operator to make it more concise however

const booleanToWord = (boolean) => {
  if (boolean === true) {
    return 'Yes';
  } else if (boolean === false) {
    return 'No'
  }

}




module.exports = booleanToWord;
