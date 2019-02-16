const reachDestination = (distance, speed) => {
   
    const hours =(distance / speed) ;

   // round up to nearest 0.5
   const roundUp = (Math.round(hours * 2) / 2).toFixed(1);

   // for some reason it returns a string value so had to parse to decimal number
    return parseFloat(roundUp);
}

module.exports = reachDestination;
