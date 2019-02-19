//Easy to read and clear code. Good use of an if else statement
//Just remember to incorporate else if instead of just if on the lines under the
//original if line

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
