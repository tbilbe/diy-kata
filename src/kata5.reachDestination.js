const reachDestination = (distance, speed) => {
  return `I'll be there in ${Math.round(((distance / speed) * 100) / 100)} hour`
}

module.exports = reachDestination;
