//Good breakdown and problem solving here.
//Just some small advice, as I'm presuming the comments are for your own benefit
//but clear and concise code doesn't need comments as it's easy to understand
//Overall, good job on this one.
//Try giving it a refractor when you get chance to see if you can make it more concise

const humanCatDogYears = (number) => {
  // human age input
  const humanYears = number;

  // First and second year for cat and dog;
  const catDogFirstSeconodYear = 15 + 9;;

  // Cat years after first 2 years;
  const catOtherYears = (humanYears - 2) * 4;

  // Dog years after first 2 years;
  const dogOtherYears = (humanYears - 2) * 5;

  // Total dog years converted from humanYears input
  let totalCatYears = catDogFirstSeconodYear + catOtherYears;

  // Total dog years converted from humanYears input
  let totalDogYrs = catDogFirstSeconodYear + dogOtherYears;

  // Create the array of human, cat and dog years
  let humanCatDogArr = [number, totalCatYears, totalDogYrs]

  // output array above;
  return humanCatDogArr;

}

module.exports = humanCatDogYears;
