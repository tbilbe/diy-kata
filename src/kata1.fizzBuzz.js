const fizzBuzz = (number) => {
  const divideBy3 = (number % 3 === 0);
  const divideBy5 = (number % 5 === 0);

  if (divideBy3 && divideBy5) {
    return 'FizzBuzz';
  }
  if (divideBy5) {
    return 'Buzz';
  }
  if (divideBy3) {
    return 'Fizz';
  }
  return number;
}

module.exports = fizzBuzz;
