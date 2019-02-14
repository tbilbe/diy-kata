const {
  getEmployerRole
} = require('../src');

describe('getEmployeeName', () => {
  const employees = [{
      name: 'Satti',
      role: 'Developer',
    },
    {
      name: 'Jenny',
      role: 'Sales Associate',
    },
    {
      name: 'Javid',
      role: 'Human Resource Assistant'
    }
  ];

  it('should return the employees role in the company', () => {
    expect(getEmployerRole('Satti', employees)).toBe('Developer');
    expect(getEmployerRole('Jenny', employees)).toBe('Sales Associate');
    expect(getEmployerRole('Javid', employees)).toBe('Human Resource Assistant');
  })
});
