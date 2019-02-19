//Very clear and concise. Perfect code for this problem. Well done

const getEmployerRole = (employeeName, employees) => {
  return employees.find(x => x.name === employeeName).role;

}

module.exports = getEmployerRole
