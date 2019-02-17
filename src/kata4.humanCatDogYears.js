//Very good failsafe incorporated into the code for unexpected numbers.
//Well done.
//Could be DRYer but well done overall.

const humanCatDogYears = (number) => {
  const numberRounded = Math.floor(number);
  if (number < 0) {
    return "Positive numbers only you cheeky beggar!"
  }
  if (numberRounded === 0) {
    return [0, 0, 0]
  }
  if (numberRounded === 1) {
    return [1, 15, 15]
  }
  if (numberRounded === 2) {
    return [2, 24, 24]
  }
  if (numberRounded >= 3) {
    const catYears = ((numberRounded / numberRounded) * 15) + ((numberRounded / numberRounded) * 9) + ((numberRounded - 2) * 4)
    const dogYears = ((numberRounded / numberRounded) * 15) + ((numberRounded / numberRounded) * 9) + ((numberRounded - 2) * 5)
    const humanYears = numberRounded

    return [humanYears, catYears, dogYears]
  }

}
module.exports = humanCatDogYears;

/*Cat Years

15 cat years for first human year

+9 cat years for second human year

+4 cat years for each human year after that
Dog Years

15 dog years for first year

+9 dog years for second year

+5 dog years for each year after that

Assertion

    returns array of human, cat and dog years when passed human years*/

