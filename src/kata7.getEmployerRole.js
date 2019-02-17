const getEmployerRole = (employeeName, employees) => {
    return employees.find(x => x.name === employeeName).role;
}

module.exports = getEmployerRole
