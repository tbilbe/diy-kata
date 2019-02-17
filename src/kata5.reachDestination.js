const reachDestination = (distance, speed) => {
const time = distance/speed;
const timeUp = (timePassed, interval) => {
    interval || (interval = 1.0);
    const inv = 1.0 / interval;
    return Math.ceil(timePassed * inv) / inv;
}
const result = timeUp(time, 0.5);


if (distance < 0 || speed < 0){return "Negative numbers make no sense, have you gone past the house or are already there!?!"};
if (distance == 0 || speed == 0){return "You have already arrived or you are not moving so can't calculate eta!"}
if (distance > 0 && speed > 0){return `I should be there in ${result} hours`}
}

module.exports = reachDestination;
