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
    return employees.find( person => person.name === employeeName).role;
}

module.exports = getEmployerRole


