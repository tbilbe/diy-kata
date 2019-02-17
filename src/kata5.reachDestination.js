//Code works fine for the test written. However, testing isn't thorough enough to cover unexpected data
//also, the use of Math.round will give us incorrect data when working with lower numbers
//Good use of template literals!
//See test for this file for more feedback.
const reachDestination = (distance, speed) => {
  const time = Math.round(distance / speed * 2) / 2;
  return (`I should be there in ${time} hours.`);
}

module.exports = reachDestination;
