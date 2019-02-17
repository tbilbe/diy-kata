const reachDestination = (distance, speed) => {
    //let time = Math.ceil(distance/speed);
    let time = Math.ceil((distance/speed)*2)/2;
    return `I should be there in ${time} hours.`;
};

module.exports = reachDestination;
