//This problem should return a string with a generated number in the middle:
//   return `I should be there in about ${time} hour`;

//Also, the use of Math.round means it will round to the nearest whole number,
//not always up.
//Your code should look like this:

// const time = Math.ceil((distance / speed) * 2) / 2;
// return `I should be there in about ${time} hour`;

const reachDestination = (distance, speed) => {

  const hours = (distance / speed);

  // round up to nearest 0.5
  const roundUp = (Math.round(hours * 2) / 2).toFixed(1);

  // for some reason it returns a string value so had to parse to decimal number
  return parseFloat(roundUp);
}

module.exports = reachDestination;
