//Good clear code that's easy to understand.
//However, this could have been achieved slightly DRYer than it currently is.
//You do not need to have two separate variables when you can chain the methods
//Also, this should print out a string with a number of estimated arrival.
//Example: return `I should be there in about ${timeRounded} hour`

const reachDestination = (distance, speed) => {
  const timeEstimate = distance / speed
  const timeRounded = Math.round(timeEstimate * 2) / 2

  return timeRounded.toString()

}


module.exports = reachDestination;
