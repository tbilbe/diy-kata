//Really good, clear code here.
//Well done

const humanCatDogYears = (number) => {
  if (number === 0) {
    return [0, 0, 0]
  }
  const oneCatYear = 15
  const oneDogYear = 15

  const catYears = (number - 2) * 4 + (15 + 9)
  const dogYears = (number - 2) * 5 + (15 + 9)


  if (number === 1) {
    return [number, oneCatYear, oneDogYear]

  } else
  if (number >= 2) {
    return [number, catYears, dogYears]
  }

}

module.exports = humanCatDogYears;
