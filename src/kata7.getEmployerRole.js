//No reason to define the object in here as it's already defined in your tests.
//Well written and concise code after it though.
//Well done.

const employees = [{
  name: 'Satti',
  role: 'Developer'
}, {
  name: 'Jenny',
  role: 'Sales Associate'
}, {
  name: 'Javid',
  role: 'Human Recommended Reading Assistant'
}]

const getEmployerRole = (employeeName, employees) => {
  return employees.find(person => person.name === employeeName).role;

}

module.exports = getEmployerRole


