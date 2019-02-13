const fizzBuzz = (number) => {
    // if (number % 5 === 0 && number % 3 ===0) {
    //     return 'FizzBuzz'
    // }
 
    // if (number % 5 === 0) {
    //     return 'Buzz'
    // }
    // if (number % 3 === 0){
    //     return 'Fizz'
    // }
    // return number
    return ((number % 3 === 0 ? 'Fizz' : '') + (number % 5 === 0 ? 'Buzz' : '')) || number;
    
}

module.exports = fizzBuzz;
