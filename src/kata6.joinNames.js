//Well written code, good job.

const joinNames = (namesObj) => {
  return namesObj.map(object => object.name).reduce((accumulator, currentValue, currentIndex) => {
    return accumulator + (currentIndex === namesObj.length - 1 ? ' & ' : ', ') + currentValue;
  });
}


module.exports = joinNames;
