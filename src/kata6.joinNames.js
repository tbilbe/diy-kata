//Slightly over complicated code that could be more concise
//works well however and returns the results we want it to, good job.
//Remember to add the else if in your if statement

const joinNames = (namesObj) => {
  // return string of names
  let allNames = '';
  // new array of all the names converted from obj
  const getNames = namesObj.map(person => person.name);

  if (getNames.length === 1) {
    allNames = getNames[0]
  }
  if (getNames.length === 2) {
    allNames = `${getNames[0]} & ${getNames[1]}`
  }
  if (getNames.length > 2) {
    allNames = `${getNames.slice(0, -1).join(', ')} & ${getNames.slice(-1)}`;
  }
  return allNames;
}

module.exports = joinNames;
