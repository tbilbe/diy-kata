//Good use of Math.ceil here. If you were to use Math.round, the code would fail
//if the user was to arrive in one hour. Good job!

const reachDestination = (distance, speed) => {
  //let time = Math.ceil(distance/speed);
  let time = Math.ceil((distance / speed) * 2) / 2;
  return `I should be there in ${time} hours.`;

};

module.exports = reachDestination;
