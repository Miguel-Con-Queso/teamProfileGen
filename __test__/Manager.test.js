const { test, expect } = require('@jest/globals');
// const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates an engineer object', () => {
    const manager = new Manager('Sarah', 4, 'alsoAnotherReal@mail.com', 'Manager', 8);

    expect(manager.name).toBe('Sarah');
    expect(manager.id).toEqual(4);
    expect(manager.email).toBe('alsoAnotherReal@mail.com');
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toBe(8);
});