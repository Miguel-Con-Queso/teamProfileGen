const { test, expect } = require('@jest/globals');
// const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Jimmy', 3, 'anotherReal@mail.com', 'Intern', 'Clyde Nights Knight Night School');

    expect(intern.name).toBe('Jimmy');
    expect(intern.id).toEqual(3);
    expect(intern.email).toBe('anotherReal@mail.com');
    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('Clyde Nights Knight Night School');
});