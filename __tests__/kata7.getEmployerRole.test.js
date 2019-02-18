const { getEmployerRole } = require('../src');

describe('getEmployerRole', () => {
  it('returns the employee\'s role in the company', () => {
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
    expects(getEmployerRole('Satti', employees)).toBe('Satti: Developer')
  });
});
