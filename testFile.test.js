const User = require('./user');
const Admin = require('./admin');
const Person = require('./person')

//Tests the Person Function
describe('1. Tests the Person Module', () => {
    test('Person constructor', () => {
        const obj = new Person('Zik');
        expect(obj.name).toBe('Zik');
    });
});

//Tests the User function
describe('2. Tests the User Module', () => {
    test('User constructor', () => {
        const obj = new User('Chibueze', 'Admin');
        expect(obj.name).toBe('Chibueze');
        expect(obj.type).toBe('Admin');
    });
});

//Tests the Admin Function
describe('3. Tests the Admin Module', () => {
    test('Admin constructor', () => {
        const obj = new Admin('Zik', 'Admin');
        expect(obj.name).toBe('Zik');
        expect(obj.type).toBe('Admin');
    });
});

//Tests the Teacher Function
describe('4. Tests the Admin Module', () => {
    test('Admin constructor', () => {
        const obj = new Admin('Zik', 'Admin');
        expect(obj.name).toBe('Zik');
        expect(obj.type).toBe('Admin');
    });
});
