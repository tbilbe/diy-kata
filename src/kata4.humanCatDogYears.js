const humanCatDogYears = (number) => {
  const array = []
  const catAge = (number) => {
    if (number > 2) {
      return ((number - 2) * 4) + 24
    } else if (number === 2) {
      return 24
    } else if (number < 2 && number > 0) {
      return 15
    }
  }
  const dogAge = (number) => {
    if (number > 2) {
      return ((number - 2) * 5) + 24
    } else if (number === 2) {
      return 24
    } else if (number < 2 && number > 0) {
      return 15
    }
  }
  array.push(number)
  array.push(catAge(number))
  array.push(dogAge(number))
  return array
}

module.exports = humanCatDogYears;
