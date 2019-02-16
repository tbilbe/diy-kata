const getEmployerRole = (employeeName, employees) => {
    return employees.find(person => person.name === employeeName).role;
}

module.exports = getEmployerRole
