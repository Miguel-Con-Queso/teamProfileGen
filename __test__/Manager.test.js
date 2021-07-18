const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates an engineer market', () => {
    const manager = new Manager('Sarah');

    expect(manager.name).toBe('Sarah');
    expect(manager.email).toBe(expect.any(String));
    expect(manager.officeNumber).toBe(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
});