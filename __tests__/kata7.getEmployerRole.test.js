//Great test coverage. Tested all outcomes to ensure there are no surprises.
//Well done
const {
  getEmployerRole
} = require('../src');

describe('getEmployerRole', () => {
  it('returns the employee\'s role in the company', () => {
    const employees = [{

      name: 'Satti',

      role: 'Developer'

    }, {

      name: 'Jenny',

      role: 'Sales Associate'

    }, {

      name: 'Gee',

      role: 'Coder'

    }, {

      name: 'Javid',

      role: 'Human Recommended Reading Assistant'


    }]

    expect(getEmployerRole('Javid', employees)).toBe('Human Recommended Reading Assistant');
    expect(getEmployerRole('Jenny', employees)).toBe('Sales Associate');
    expect(getEmployerRole('Satti', employees)).toBe('Developer');
    expect(getEmployerRole('Gee', employees)).toBe('Coder');

  });
});
