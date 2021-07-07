//There are two typo's in this test that stop it from working
//const employee should be const employees
//and
//expects should be expect
//Take the time to review your code carefully after writing
//or ask a colleague to check it for you if you think you're missing something
const {
  getEmployerRole
} = require('../src');

describe('getEmployerRole', () => {
  it('returns the employee\'s role in the company', () => {
    //typo
    const employee = [{
      name: 'Satti',
      role: 'Developer'
    }, {
      name: 'Jenny',
      role: 'Sales Associate'
    }, {
      name: 'Javid',
      role: 'Human Recommended Reading Assistant'
    }];
    //Typo
    expects(getEmployerRole('Satti', employees)).toBe('Satti: Developer')
  });
});
