const getEmployerRole = (employeeName, employees) => {
  const filterEmployees = employees.filter(worker => employeeName === worker.name)

  return `${filterEmployees[0].name}: ${filterEmployees[0].role}`;
}

module.exports = getEmployerRole
