//Interesting way of completing the assignment. A simple if else statement would have also sufficed.
//As this could be slightly difficult for people to read and understand at a glance.

const fizzBuzz = (number) => {
  return ((number % 3 === 0 ? 'Fizz' : '') + (number % 5 === 0 ? 'Buzz' : '')) || number;

}

module.exports = fizzBuzz;
