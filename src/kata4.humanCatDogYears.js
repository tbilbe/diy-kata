//Clear and concise but doesn't cover the eventuality of a user entering an unexpected
//number, such as a 0 or a negative.

const humanCatDogYears = (number) => {
  let Human = number;
  let Cat = 24 + ((number - 2) * 4);
  let Dog = 24 + ((number - 2) * 5);
  return [Human, Cat, Dog];
};

// formulas
// 15+9+((number-2)*4) = cat
// 24+((number-2)*4) = cat

// change 4 to 5 for the Dog


// change 4 to 5 for the Dog

 
module.exports = humanCatDogYears;
